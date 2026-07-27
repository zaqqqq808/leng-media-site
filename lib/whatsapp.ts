const GRAPH_VERSION = process.env.META_GRAPH_VERSION || 'v21.0'

/**
 * Normalises a phone number to the digits-only international format the
 * WhatsApp Cloud API expects (e.g. "447928668478").
 * Handles the common shapes Meta lead forms return: "+44 7928 668478",
 * "07928 668478", "0044...".
 */
export function normalisePhone(raw: string, defaultCountryCode = '44'): string | null {
  let digits = raw.replace(/[^\d+]/g, '')

  if (digits.startsWith('+')) {
    digits = digits.slice(1)
  } else if (digits.startsWith('00')) {
    digits = digits.slice(2)
  } else if (digits.startsWith('0')) {
    // National format, e.g. UK 07... -> 447...
    digits = defaultCountryCode + digits.slice(1)
  }

  // Shortest valid international numbers are ~8 digits, longest 15 (E.164).
  if (digits.length < 8 || digits.length > 15) return null
  return digits
}

interface TemplateMessage {
  to: string
  templateName: string
  languageCode?: string
  /** Ordered values for {{1}}, {{2}} ... in the template body. */
  bodyParams?: string[]
}

export async function sendWhatsAppTemplate({
  to,
  templateName,
  languageCode = 'en',
  bodyParams = [],
}: TemplateMessage) {
  const token = process.env.WHATSAPP_ACCESS_TOKEN
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID

  if (!token || !phoneNumberId) {
    throw new Error('WhatsApp env vars not configured')
  }

  const res = await fetch(`https://graph.facebook.com/${GRAPH_VERSION}/${phoneNumberId}/messages`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messaging_product: 'whatsapp',
      to,
      type: 'template',
      template: {
        name: templateName,
        language: { code: languageCode },
        ...(bodyParams.length
          ? {
              components: [
                {
                  type: 'body',
                  parameters: bodyParams.map(text => ({ type: 'text', text })),
                },
              ],
            }
          : {}),
      },
    }),
  })

  if (!res.ok) {
    const detail = await res.text()
    throw new Error(`WhatsApp send failed (${res.status}): ${detail}`)
  }

  return res.json()
}
