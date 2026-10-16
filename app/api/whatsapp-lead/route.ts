import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import { appendLeadRow } from '@/lib/googleSheets'
import { sendMetaConversionEvent } from '@/lib/metaConversions'
import { HONEYPOT_FIELD, clientIp, cookie, escapeHtml as escape, looksLikeBot, rateLimited, sameOrigin } from '@/lib/formGuard'

interface Answer { label: string; answer: string }

// Logs the /whatsapp qualifier. The lead continues on WhatsApp in the same
// moment, so nothing here can block them: every step is best-effort.
export async function POST(req: Request) {
  if (!sameOrigin(req)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  if (rateLimited(`whatsapp:${clientIp(req)}`, 10)) return NextResponse.json({ error: 'Too many requests' }, { status: 429 })

  let body: {
    service?: string; answers?: Answer[]; qualified?: boolean; name?: string; notes?: string; eventId?: string
    elapsed?: number; consent?: boolean; [HONEYPOT_FIELD]?: string
  }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  // Bots get a normal-looking reply, but nothing is logged, emailed or sent to Meta.
  if (looksLikeBot(body[HONEYPOT_FIELD], body.elapsed)) return NextResponse.json({ ok: true })

  const service = String(body.service || 'Unknown').slice(0, 80)
  const answers = (Array.isArray(body.answers) ? body.answers : [])
    .slice(0, 12)
    .map(a => ({ label: String(a.label).slice(0, 60), answer: String(a.answer).slice(0, 300) }))
  const name = String(body.name || '').slice(0, 80)
  const notes = String(body.notes || '').slice(0, 1000)
  const qualified = body.qualified === true
  const summary = answers.filter(a => a.answer).map(a => `${a.label}: ${a.answer}`).join(' | ')

  try {
    await appendLeadRow({
      name: name || '(left before giving a name)',
      email: '',
      service,
      message: [summary, notes && `Notes: ${notes}`].filter(Boolean).join(' | '),
      source: qualified ? 'WhatsApp qualifier: qualified' : 'WhatsApp qualifier: disqualified',
      // No phone here: they message from WhatsApp, so the number arrives there.
      // Marked so the sheet-watcher never tries to WhatsApp this row.
      whatsappStatus: 'n/a (WhatsApp qualifier)',
    })
  } catch (error) {
    console.error('Failed to log WhatsApp lead to sheet:', error)
  }

  if (!qualified) return NextResponse.json({ ok: true })

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'Leng Media Leads <noreply@lengmedia.com>',
      to: 'zaq@lengmedia.com',
      subject: `Qualified WhatsApp lead: ${name} (${service})`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <p><strong>${escape(name)}</strong> just passed the qualifier and is opening WhatsApp now. Expect their message any second.</p>
          <table style="border-collapse: collapse;">
            <tr><td style="padding: 4px 12px 4px 0; color: #555;">Service</td><td>${escape(service)}</td></tr>
            ${answers.filter(a => a.answer).map(a => `<tr><td style="padding: 4px 12px 4px 0; color: #555;">${escape(a.label)}</td><td>${escape(a.answer)}</td></tr>`).join('')}
            ${notes ? `<tr><td style="padding: 4px 12px 4px 0; color: #555;">Notes</td><td>${escape(notes)}</td></tr>` : ''}
          </table>
        </div>`,
    })
  } catch (error) {
    console.error('Failed to email WhatsApp lead alert:', error)
  }

  // Only for visitors who accepted cookies, matching the browser pixel.
  if (body.consent === true) {
    try {
      await sendMetaConversionEvent({
        eventName: 'Contact',
        eventId: typeof body.eventId === 'string' ? body.eventId.slice(0, 64) : undefined,
        eventSourceUrl: 'https://www.lengmedia.com/whatsapp',
        clientUserAgent: req.headers.get('user-agent') || undefined,
        clientIpAddress: clientIp(req) === 'unknown' ? undefined : clientIp(req),
        fbp: cookie(req, '_fbp'),
        fbc: cookie(req, '_fbc'),
      })
    } catch (error) {
      console.error('Failed to send Meta Contact event:', error)
    }
  }

  return NextResponse.json({ ok: true })
}
