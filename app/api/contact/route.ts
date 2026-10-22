import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import { appendLeadRow } from '@/lib/googleSheets'
import { sendMetaConversionEvent } from '@/lib/metaConversions'
import { normalisePhone } from '@/lib/whatsapp'
import { nudgeButtonHtml, openingMessage } from '@/lib/whatsappNudge'
import { HONEYPOT_FIELD, EMAIL_RE, clientIp, cookie, escapeHtml, looksLikeBot, rateLimited, sameOrigin } from '@/lib/formGuard'

const field = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '')

export async function POST(req: Request) {
  if (!sameOrigin(req)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  if (rateLimited(`contact:${clientIp(req)}`)) {
    return NextResponse.json({ error: 'Too many messages. Please email zaq@lengmedia.com instead.' }, { status: 429 })
  }

  try {
    const body = await req.json()
    // Bots get a normal-looking success so they don't adapt, but nothing is
    // emailed, logged or reported to Meta.
    if (looksLikeBot(body[HONEYPOT_FIELD], body.elapsed)) return NextResponse.json({ success: true })

    const name = field(body.name, 120)
    const email = field(body.email, 200)
    const phone = field(body.phone, 40)
    const message = field(body.message, 5000)
    const service = field(body.service, 80)

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }
    if (!EMAIL_RE.test(email)) return NextResponse.json({ error: 'Invalid email' }, { status: 400 })

    const serviceLabel = service || 'General enquiry'
    const normalisedPhone = phone ? normalisePhone(phone) : null
    // Created per request, not at import: a missing key then fails this one
    // request instead of crashing every build that imports the route.
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: 'Leng Media Contact Form <noreply@lengmedia.com>',
      to: 'zaq@lengmedia.com',
      replyTo: email,
      subject: `New ${serviceLabel} enquiry from ${name.replace(/[\r\n]+/g, ' ')}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #111;">New Business Enquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; width: 80px;">Name</td>
              <td style="padding: 8px 0;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Service</td>
              <td style="padding: 8px 0;">${escapeHtml(serviceLabel)}</td>
            </tr>
            ${phone ? `<tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone</td>
              <td style="padding: 8px 0;">${escapeHtml(phone)}</td>
            </tr>` : ''}
          </table>
          ${normalisedPhone ? nudgeButtonHtml(normalisedPhone, openingMessage('contact', name, { service: serviceLabel })) : ''}
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <h3 style="color: #111; margin-bottom: 8px;">Message</h3>
          <p style="color: #333; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="color: #999; font-size: 12px;">Sent via lengmedia.com/business-enquiry</p>
        </div>
      `,
    })

    try {
      await appendLeadRow({
        name, email, service: serviceLabel, message, source: 'Website form',
        phone: normalisedPhone || '',
        whatsappStatus: normalisedPhone ? 'One-tap button in enquiry email' : 'No phone number',
      })
    } catch (sheetError) {
      console.error('Google Sheets log failed (email was still sent):', sheetError)
    }

    // Meta Lead is reported server-side only (reliable from Instagram's
    // in-app browser), and only for visitors who accepted cookies: someone
    // who declined the pixel isn't measured through the back door either.
    if (body.consent === true) {
      try {
        await sendMetaConversionEvent({
          eventName: 'Lead',
          email,
          eventSourceUrl: 'https://www.lengmedia.com/business-enquiry',
          clientUserAgent: req.headers.get('user-agent') || undefined,
          clientIpAddress: clientIp(req) === 'unknown' ? undefined : clientIp(req),
          fbp: cookie(req, '_fbp'),
          fbc: cookie(req, '_fbc'),
        })
      } catch (capiError) {
        console.error('Failed to send Meta conversion event:', capiError)
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
