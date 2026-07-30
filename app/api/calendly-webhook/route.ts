import { NextResponse } from 'next/server'
import { createHmac, timingSafeEqual } from 'crypto'
import { appendLeadRow } from '@/lib/googleSheets'
import { sendMetaConversionEvent } from '@/lib/metaConversions'

// Verifies Calendly's HMAC-SHA256 webhook signature.
// Header format: "t=<timestamp>,v1=<signature>"
function isValidSignature(rawBody: string, signatureHeader: string | null, signingKey: string) {
  if (!signatureHeader) return false
  const parts = Object.fromEntries(signatureHeader.split(',').map(p => p.split('=')))
  const { t, v1 } = parts
  if (!t || !v1) return false

  const expected = createHmac('sha256', signingKey).update(`${t}.${rawBody}`).digest('hex')
  const expectedBuf = Buffer.from(expected)
  const actualBuf = Buffer.from(v1)
  if (expectedBuf.length !== actualBuf.length) return false
  return timingSafeEqual(expectedBuf, actualBuf)
}

export async function POST(req: Request) {
  const rawBody = await req.text()
  const signingKey = process.env.CALENDLY_WEBHOOK_SIGNING_KEY

  if (signingKey) {
    const signature = req.headers.get('calendly-webhook-signature')
    if (!isValidSignature(rawBody, signature, signingKey)) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
    }
  } else {
    console.error('CALENDLY_WEBHOOK_SIGNING_KEY not set, skipping signature verification')
  }

  const body = JSON.parse(rawBody)

  if (body.event !== 'invitee.created') {
    return NextResponse.json({ received: true })
  }

  const payload = body.payload
  const service = payload?.tracking?.utm_campaign || 'Unknown (direct Calendly link)'

  try {
    await appendLeadRow({
      name: payload?.name || 'Unknown',
      email: payload?.email || 'Unknown',
      service,
      message: (payload?.questions_and_answers || [])
        .map((qa: { question: string; answer: string }) => `${qa.question}: ${qa.answer}`)
        .join(' | ') || 'Calendly booking, no additional answers',
      source: 'Calendly booking',
    })
  } catch (error) {
    console.error('Failed to log Calendly booking to sheet:', error)
  }

  // Server-side Schedule event: reports the booking to Meta directly,
  // independent of whatever browser (including Instagram's in-app
  // browser, where the client-side pixel is unreliable) the visitor used.
  try {
    await sendMetaConversionEvent({
      eventName: 'Schedule',
      email: payload?.email,
      eventSourceUrl: 'https://www.lengmedia.com/services/website-builds',
    })
  } catch (error) {
    console.error('Failed to send Meta conversion event:', error)
  }

  return NextResponse.json({ received: true })
}
