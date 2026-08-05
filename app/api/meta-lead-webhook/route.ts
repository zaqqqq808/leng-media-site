import { NextResponse } from 'next/server'
import { createHmac, timingSafeEqual } from 'crypto'
import { appendLeadRow } from '@/lib/googleSheets'
import { normalisePhone, sendWhatsAppTemplate } from '@/lib/whatsapp'

const GRAPH_VERSION = process.env.META_GRAPH_VERSION || 'v21.0'

/** Meta calls this once when you register the webhook, to prove you own the endpoint. */
export async function GET(req: Request) {
  const url = new URL(req.url)
  const mode = url.searchParams.get('hub.mode')
  const token = url.searchParams.get('hub.verify_token')
  const challenge = url.searchParams.get('hub.challenge')

  if (mode === 'subscribe' && token && token === process.env.META_WEBHOOK_VERIFY_TOKEN) {
    return new Response(challenge ?? '', { status: 200 })
  }
  return NextResponse.json({ error: 'Verification failed' }, { status: 403 })
}

/** Meta signs every webhook body with the app secret: "sha256=<hex>". */
function isValidSignature(rawBody: string, header: string | null, appSecret: string) {
  if (!header?.startsWith('sha256=')) return false
  const expected = createHmac('sha256', appSecret).update(rawBody).digest('hex')
  const expectedBuf = Buffer.from(expected)
  const actualBuf = Buffer.from(header.slice(7))
  if (expectedBuf.length !== actualBuf.length) return false
  return timingSafeEqual(expectedBuf, actualBuf)
}

interface LeadField {
  name: string
  values: string[]
}

function readField(fields: LeadField[], candidates: string[]): string {
  for (const key of candidates) {
    const match = fields.find(f => f.name === key)
    if (match?.values?.[0]) return match.values[0]
  }
  return ''
}

async function fetchLead(leadgenId: string) {
  const token = process.env.META_PAGE_ACCESS_TOKEN
  if (!token) throw new Error('META_PAGE_ACCESS_TOKEN not configured')

  const res = await fetch(
    `https://graph.facebook.com/${GRAPH_VERSION}/${leadgenId}?access_token=${token}`,
    { cache: 'no-store' }
  )
  if (!res.ok) {
    throw new Error(`Failed to fetch lead ${leadgenId}: ${res.status} ${await res.text()}`)
  }
  return res.json() as Promise<{ field_data: LeadField[]; created_time?: string }>
}

async function processLead(leadgenId: string, formId?: string) {
  const lead = await fetchLead(leadgenId)
  const fields = lead.field_data || []

  const name = readField(fields, ['full_name', 'first_name', 'name'])
  const email = readField(fields, ['email'])
  const rawPhone = readField(fields, ['phone_number', 'phone'])
  // Custom qualifying question, if the form has one.
  const service =
    readField(fields, ['service', 'which_service_are_you_interested_in?', 'interest']) ||
    'Lead form ad'

  const firstName = name.split(' ')[0] || 'there'
  const phone = rawPhone ? normalisePhone(rawPhone) : null

  let whatsappStatus = 'No phone number on lead'
  if (phone) {
    try {
      await sendWhatsAppTemplate({
        to: phone,
        templateName: process.env.WHATSAPP_TEMPLATE_NAME || 'lead_followup',
        languageCode: process.env.WHATSAPP_TEMPLATE_LANG || 'en',
        bodyParams: [firstName],
      })
      whatsappStatus = 'WhatsApp sent'
    } catch (err) {
      console.error('WhatsApp send failed:', err)
      whatsappStatus = `WhatsApp failed: ${err instanceof Error ? err.message : 'unknown'}`
    }
  }

  try {
    await appendLeadRow({
      name: name || 'Unknown',
      email: email || 'Unknown',
      service,
      source: `Meta lead form${formId ? ` (${formId})` : ''}`,
      message: 'Meta Instant Form submission',
      phone: phone || rawPhone || '',
      // Already sent (or attempted) above, so the sheet-watcher script
      // skips this row instead of messaging the lead a second time.
      whatsappStatus,
    })
  } catch (err) {
    console.error('Sheet log failed:', err)
  }
}

export async function POST(req: Request) {
  const rawBody = await req.text()
  const appSecret = process.env.META_APP_SECRET

  if (appSecret) {
    if (!isValidSignature(rawBody, req.headers.get('x-hub-signature-256'), appSecret)) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
    }
  } else {
    console.error('META_APP_SECRET not set, skipping signature verification')
  }

  const body = JSON.parse(rawBody)

  // Meta retries on any non-200, so collect work first and always ack.
  const jobs: Promise<void>[] = []
  for (const entry of body.entry || []) {
    for (const change of entry.changes || []) {
      if (change.field !== 'leadgen') continue
      const leadgenId = change.value?.leadgen_id
      if (!leadgenId) continue
      jobs.push(
        processLead(leadgenId, change.value?.form_id).catch(err =>
          console.error('Lead processing failed:', err)
        )
      )
    }
  }
  await Promise.all(jobs)

  return NextResponse.json({ received: true })
}
