import { NextResponse, after } from 'next/server'
import { createHmac, timingSafeEqual } from 'crypto'
import { appendLeadRow } from '@/lib/googleSheets'
import { sendMetaConversionEvent } from '@/lib/metaConversions'
import { sendGa4Event, fallbackClientId, anonymousClientId } from '@/lib/ga4'
import { sendBookingFollowUp, formatWhen } from '@/lib/bookingFollowUp'
import { normalisePhone } from '@/lib/whatsapp'
import { openingMessage, sendWhatsAppNudge } from '@/lib/whatsappNudge'

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
  const answers: { question: string; answer: string }[] = payload?.questions_and_answers || []
  // The SMS-reminder number if they opted in, otherwise any phone/WhatsApp
  // question on the booking form.
  const rawPhone = payload?.text_reminder_number
    || answers.find(qa => /phone|whats\s?app|mobile/i.test(qa.question))?.answer
    || ''
  const phone = rawPhone ? normalisePhone(rawPhone) || '' : ''
  const name = payload?.name || 'Unknown'

  let whatsappStatus = phone ? '' : 'No phone number'
  if (phone) {
    try {
      await sendWhatsAppNudge({
        source: 'calendly',
        name,
        phone,
        text: openingMessage('calendly', name, {
          when: formatWhen(payload?.scheduled_event?.start_time, payload?.timezone).full,
        }),
        details: [
          ['Call', `${payload?.scheduled_event?.name || 'Call'}, ${formatWhen(payload?.scheduled_event?.start_time, 'Europe/London').full} (UK time)`],
          ['Email', payload?.email || ''],
          ...answers.map(qa => [qa.question, qa.answer] as [string, string]),
        ],
      })
      whatsappStatus = 'One-tap nudge emailed to Zaq'
    } catch (error) {
      console.error('Failed to send WhatsApp nudge:', error)
      whatsappStatus = 'Nudge failed'
    }
  }
  // Booked from our site by someone who hasn't accepted cookies (declined, or
  // just ignored the banner; see CalendlyPopupLink). Meta isn't told, and GA4
  // only gets an anonymous count, so the booking still shows up as a lead.
  const declinedTracking = payload?.tracking?.utm_medium === 'no_consent'

  try {
    await appendLeadRow({
      name,
      email: payload?.email || 'Unknown',
      service,
      message: answers
        .map(qa => `${qa.question}: ${qa.answer}`)
        .join(' | ') || 'Calendly booking, no additional answers',
      source: 'Calendly booking',
      phone,
      whatsappStatus,
    })
  } catch (error) {
    console.error('Failed to log Calendly booking to sheet:', error)
  }

  // Server-side Schedule event: reports the booking to Meta directly,
  // independent of whatever browser (including Instagram's in-app
  // browser, where the client-side pixel is unreliable) the visitor used.
  if (!declinedTracking) {
    try {
      await sendMetaConversionEvent({
        eventName: 'Schedule',
        // Same id the browser pixel used (CalendlyPopupLink), for dedup.
        eventId: payload?.uri,
        email: payload?.email,
        eventSourceUrl: 'https://www.lengmedia.com/services/website-builds',
      })
    } catch (error) {
      console.error('Failed to send Meta conversion event:', error)
    }
  }

  // Server-side GA4 conversion, sent for EVERY booking. The client-side gtag
  // call only sees bookings made in the popup on our own page by someone who
  // accepted cookies, which is a minority of real bookings. utm_content and
  // utm_term carry the real GA client and session ids when the visitor
  // accepted, so GA4 credits the channel that sent them. Without consent the
  // event uses a random id with ad consent denied: no device storage is read
  // and nothing identifies the person, it just counts the booking.
  try {
    const gaClientId = declinedTracking ? undefined : payload?.tracking?.utm_content
    const gaSessionId = declinedTracking ? undefined : payload?.tracking?.utm_term
    await sendGa4Event({
      name: 'generate_lead',
      clientId: declinedTracking
        ? anonymousClientId()
        : gaClientId || fallbackClientId(payload?.email || 'anonymous'),
      sessionId: gaSessionId,
      adsConsentDenied: declinedTracking,
      params: {
        method: 'calendly',
        service,
        booking_origin: declinedTracking ? 'site_no_consent' : gaClientId ? 'site' : 'direct_calendly_link',
      },
    })
  } catch (error) {
    console.error('Failed to send GA4 conversion event:', error)
  }

  // Personal follow-up email asking one qualifying question. Runs after the
  // response so Calendly never waits on the Claude call (and never retries
  // the webhook, which would send the email twice).
  after(async () => {
    try {
      await sendBookingFollowUp({
        name: payload?.name || '',
        firstName: payload?.first_name || undefined,
        email: payload?.email || '',
        timezone: payload?.timezone,
        eventName: payload?.scheduled_event?.name,
        startTime: payload?.scheduled_event?.start_time,
        answers: payload?.questions_and_answers || [],
      })
    } catch (error) {
      console.error('Failed to send booking follow-up email:', error)
    }
  })

  return NextResponse.json({ received: true })
}
