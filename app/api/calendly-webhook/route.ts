import { NextResponse } from 'next/server'
import { createHmac, timingSafeEqual } from 'crypto'
import { appendLeadRow } from '@/lib/googleSheets'
import { sendMetaConversionEvent } from '@/lib/metaConversions'
import { sendGa4Event, fallbackClientId } from '@/lib/ga4'

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
  // Only present if the invitee opted into SMS reminders when booking.
  const phone = payload?.text_reminder_number || ''

  try {
    await appendLeadRow({
      name: payload?.name || 'Unknown',
      email: payload?.email || 'Unknown',
      service,
      message: (payload?.questions_and_answers || [])
        .map((qa: { question: string; answer: string }) => `${qa.question}: ${qa.answer}`)
        .join(' | ') || 'Calendly booking, no additional answers',
      source: 'Calendly booking',
      phone,
      // Left unset: the Apps Script sheet-watcher sends the WhatsApp
      // follow-up for this row if a phone number is present.
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

  // Server-side GA4 conversion. The client-side gtag call only sees bookings
  // made in the popup embedded on our own page, so direct calendly.com links
  // (WhatsApp, Instagram bio, email) never reached GA4 at all. utm_content
  // carries the real GA client_id when the visit started on the site.
  try {
    const gaClientId = payload?.tracking?.utm_content
    const gaSessionId = payload?.tracking?.utm_term
    await sendGa4Event({
      name: 'generate_lead',
      clientId: gaClientId || fallbackClientId(payload?.email || 'anonymous'),
      sessionId: gaSessionId,
      params: {
        method: 'calendly',
        service,
        booking_origin: gaClientId ? 'site' : 'direct_calendly_link',
      },
    })
  } catch (error) {
    console.error('Failed to send GA4 conversion event:', error)
  }

  return NextResponse.json({ received: true })
}
