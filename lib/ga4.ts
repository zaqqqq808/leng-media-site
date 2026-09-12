import { createHash } from 'crypto'

const MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-NBQPLL55BS'

/**
 * GA4 needs a client_id to attribute an event to a user. For bookings that
 * started on the site we pass the real one through Calendly (see
 * clientIdFromCookie in CalendlyPopupLink). For a direct calendly.com link
 * there was never a browser session, so we derive a stable id from the
 * email instead — that way repeat bookings from the same person collapse
 * into one user rather than inventing a new one each time.
 */
export function fallbackClientId(seed: string): string {
  const hash = createHash('sha256').update(seed.trim().toLowerCase()).digest('hex')
  const a = parseInt(hash.slice(0, 8), 16)
  const b = parseInt(hash.slice(8, 16), 16)
  return `${a}.${b}`
}

interface Ga4Event {
  name: 'generate_lead'
  clientId: string
  /** The visitor's real GA4 session, when the journey started on our site.
   *  Joins the conversion to that session so it credits the channel that
   *  sent them; without it GA4 opens a fresh "(direct)" session. */
  sessionId?: string
  params?: Record<string, string | number>
}

/**
 * Reports a conversion to GA4 from the server via the Measurement Protocol,
 * bypassing the browser. The client-side gtag call only fires when the
 * booking happens in the Calendly popup embedded on our own page — it can't
 * see a booking made from a direct calendly.com link (WhatsApp, Instagram
 * bio, email), or one completed in a new tab when the widget script fails
 * to load. This closes that gap.
 */
export async function sendGa4Event({ name, clientId, sessionId, params = {} }: Ga4Event) {
  const apiSecret = process.env.GA4_API_SECRET

  if (!apiSecret) {
    console.error('GA4_API_SECRET not configured, skipping server-side GA4 event')
    return
  }

  const url = `https://www.google-analytics.com/mp/collect?measurement_id=${MEASUREMENT_ID}&api_secret=${apiSecret}`

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: clientId,
      events: [{
        name,
        params: {
          // Without engagement_time_msec and session_id, GA4 accepts the
          // event but omits it from standard reports (Realtime only).
          engagement_time_msec: 1,
          session_id: sessionId || Date.now().toString(),
          ...params,
        },
      }],
    }),
  })

  // Measurement Protocol answers 204 on success and silently drops malformed
  // events, so a non-2xx here means the request itself failed, not validation.
  // To validate payloads, POST the same body to /debug/mp/collect.
  if (!res.ok) {
    throw new Error(`GA4 Measurement Protocol send failed (${res.status}): ${await res.text()}`)
  }
}
