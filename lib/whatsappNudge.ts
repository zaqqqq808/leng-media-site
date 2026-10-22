import { Resend } from 'resend'
import { escapeHtml } from '@/lib/formGuard'

// One-tap WhatsApp follow-up. Zaq's number lives in the WhatsApp Business app
// on his phone, and putting it on Meta's Cloud API would log it out of the app,
// so the site doesn't message leads itself. Instead it emails Zaq a button that
// opens WhatsApp with a personalised first message already typed: he taps Send
// from his own number, seconds after the lead comes in.

export function whatsAppLink(phone: string, text: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
}

function firstName(name: string) {
  return name.trim().split(/\s+/)[0] || 'there'
}

export type NudgeSource = 'calendly' | 'contact' | 'lead-form'

export function openingMessage(source: NudgeSource, name: string, opts: { when?: string; service?: string } = {}) {
  const hi = `Hi ${firstName(name)}, it's Zaq from Leng Media.`
  if (source === 'calendly') {
    return `${hi} Thanks for booking a call${opts.when ? ` for ${opts.when}` : ''}, looking forward to it. Is there anything you'd like me to look at before we speak, like your current website?`
  }
  if (source === 'contact') {
    const topic = opts.service && opts.service !== 'General enquiry' ? ` about ${opts.service.toLowerCase()}` : ''
    return `${hi} Thanks for your enquiry${topic}. Have you got 10 minutes this week for a quick call so I can understand what you need?`
  }
  return `${hi} Thanks for your interest in a new website. Have you got 10 minutes this week for a quick call?`
}

/** The button block, for emails that already go to Zaq (e.g. the contact form). */
export function nudgeButtonHtml(phone: string, text: string) {
  return `
    <div style="margin: 20px 0; padding: 16px; background: #f3fdf6; border: 1px solid #c8eed5; border-radius: 8px;">
      <a href="${whatsAppLink(phone, text)}"
         style="display: inline-block; background: #25D366; color: #fff; font-weight: bold; text-decoration: none; padding: 12px 22px; border-radius: 6px;">
        WhatsApp them now
      </a>
      <p style="margin: 12px 0 4px; color: #555; font-size: 13px;">+${escapeHtml(phone)} &middot; opens with this message typed, ready to send:</p>
      <p style="margin: 0; color: #222; font-size: 14px; font-style: italic;">${escapeHtml(text)}</p>
    </div>`
}

const LABELS: Record<NudgeSource, string> = {
  calendly: 'Calendly booking',
  contact: 'website enquiry',
  'lead-form': 'Meta lead form',
}

/** A standalone alert for leads that don't otherwise email Zaq straight away. */
export async function sendWhatsAppNudge(d: {
  source: NudgeSource
  name: string
  phone: string
  text: string
  details?: [string, string][]
}) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const rows = (d.details || [])
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><td style="padding: 4px 12px 4px 0; color: #555; vertical-align: top;">${escapeHtml(k)}</td><td>${escapeHtml(v)}</td></tr>`)
    .join('')

  await resend.emails.send({
    from: 'Leng Media Leads <noreply@lengmedia.com>',
    to: 'zaq@lengmedia.com',
    subject: `WhatsApp ${firstName(d.name).replace(/[\r\n]+/g, ' ')} now: new ${LABELS[d.source]}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px;">
        <p><strong>${escapeHtml(d.name)}</strong> just came in as a ${LABELS[d.source]}. Message them while it's fresh.</p>
        ${nudgeButtonHtml(d.phone, d.text)}
        ${rows ? `<table style="border-collapse: collapse; font-size: 14px;">${rows}</table>` : ''}
      </div>`,
  })
}
