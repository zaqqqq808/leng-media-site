import { createHash } from 'crypto'

const GRAPH_VERSION = process.env.META_GRAPH_VERSION || 'v21.0'

function hashField(value: string): string {
  return createHash('sha256').update(value.trim().toLowerCase()).digest('hex')
}

interface ConversionEvent {
  eventName: 'Schedule' | 'Lead' | 'Contact'
  email?: string
  phone?: string
  eventSourceUrl?: string
}

/**
 * Reports a conversion straight to Meta from the server, bypassing the
 * browser entirely. This is what makes tracking reliable when traffic
 * arrives via Instagram/Facebook's in-app browser, where third-party
 * scripts and cross-window postMessage (what the client-side pixel
 * relies on) are often blocked or unreliable.
 */
export async function sendMetaConversionEvent({ eventName, email, phone, eventSourceUrl }: ConversionEvent) {
  const pixelId = process.env.META_PIXEL_ID
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN

  if (!pixelId || !accessToken) {
    console.error('Meta CAPI env vars not configured, skipping server-side conversion event')
    return
  }

  const userData: Record<string, string[]> = {}
  if (email) userData.em = [hashField(email)]
  if (phone) userData.ph = [hashField(phone.replace(/[^\d]/g, ''))]

  const res = await fetch(`https://graph.facebook.com/${GRAPH_VERSION}/${pixelId}/events?access_token=${accessToken}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      data: [{
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        action_source: 'website',
        event_source_url: eventSourceUrl,
        user_data: userData,
      }],
    }),
  })

  if (!res.ok) {
    throw new Error(`Meta CAPI send failed (${res.status}): ${await res.text()}`)
  }
  return res.json()
}
