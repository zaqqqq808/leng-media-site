import { createHash, randomBytes } from 'node:crypto'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { FORMS, MAX_FIELD_LENGTH, isVisible } from '@/lib/projectRecord/schema'
import { buildRecordPdf } from '@/lib/projectRecord/pdf'

/**
 * Receives a client brief or project update, and turns it into a record both sides hold:
 * a signed PDF plus the raw JSON, emailed to the client with Leng Media in cc. The SHA-256
 * printed on the PDF is computed from that JSON, so either copy proves the other is unaltered.
 */

const OWNER = 'zaq@lengmedia.com'
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const esc = (s: string) => s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!))

function makeRef(prefix: string, d: Date) {
  const ymd = d.toISOString().slice(0, 10).replace(/-/g, '')
  return `LM-${prefix}-${ymd}-${randomBytes(2).toString('hex').toUpperCase()}`
}

export async function POST(req: Request) {
  let body: { kind?: string; values?: Record<string, unknown>; declarations?: unknown; hp?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  // Honeypot: real users never see this field.
  if (body.hp) return NextResponse.json({ ok: true, ref: 'LM-OK' })

  const form = FORMS[body.kind as keyof typeof FORMS]
  if (!form) return NextResponse.json({ error: 'Unknown form' }, { status: 400 })

  // Keep only strings for fields this form defines and that were visible to the client.
  const raw = body.values ?? {}
  const values: Record<string, string> = {}
  const str = (k: string) => (typeof raw[k] === 'string' ? (raw[k] as string).trim().slice(0, MAX_FIELD_LENGTH) : '')
  const allFields = form.sections.flatMap(s => s.fields)
  for (const f of allFields) values[f.name] = str(f.name)
  for (const f of allFields) if (!isVisible(f, values)) delete values[f.name]
  values.signature = str('signature')

  const missing = allFields.filter(f => f.required && isVisible(f, values) && !values[f.name]).map(f => f.label)
  if (!values.signature) missing.push('Signature')
  if (missing.length) return NextResponse.json({ error: `Please complete: ${missing.join(', ')}` }, { status: 400 })
  if (!EMAIL_RE.test(values.email)) return NextResponse.json({ error: 'Please enter a valid email address' }, { status: 400 })

  const declarations = form.declarations(values)
  const ticked = Array.isArray(body.declarations) ? body.declarations : []
  if (!declarations.every(d => ticked.includes(d.name))) {
    return NextResponse.json({ error: 'Please tick every declaration before submitting' }, { status: 400 })
  }

  const now = new Date()
  const ref = makeRef(form.refPrefix, now)
  const submittedAtUtc = now.toISOString()
  const submittedAtLondon = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/London', dateStyle: 'long', timeStyle: 'long',
  }).format(now)
  const ip = (req.headers.get('x-forwarded-for') ?? '').split(',')[0].trim() || 'unknown'
  const userAgent = req.headers.get('user-agent') ?? 'unknown'

  const record = {
    ref,
    form: form.kind,
    title: form.title,
    submittedAtUtc,
    submittedAtLondon,
    ip,
    userAgent,
    values,
    declarations: declarations.map(d => d.text),
  }
  const json = JSON.stringify(record, null, 2)
  const dataHash = createHash('sha256').update(json).digest('hex')

  let pdf: Uint8Array
  try {
    pdf = await buildRecordPdf(form, values, { ref, submittedAtUtc, submittedAtLondon, ip, userAgent, dataHash }, declarations)
  } catch (e) {
    console.error('Project record PDF failed:', e)
    return NextResponse.json({ error: 'Could not create your record. Please try again.' }, { status: 500 })
  }

  const business = values.businessName
  const subject = values.updateType
    ? `${values.updateType}: ${business} (${ref})`
    : `${form.title}: ${business} (${ref})`
  const filename = `${ref} ${form.title} - ${business.replace(/[^\w .-]/g, '')}`.trim()

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { error } = await resend.emails.send({
      from: 'Leng Media <noreply@lengmedia.com>',
      to: values.email,
      cc: OWNER,
      replyTo: OWNER,
      subject,
      html: `
        <div style="font-family:Helvetica,Arial,sans-serif;max-width:560px;margin:0 auto;color:#0b0b0b">
          <p style="font-family:Georgia,serif;font-size:26px;margin:0 0 18px">Leng.</p>
          <div style="border-left:4px solid #FFD400;padding:2px 0 2px 14px;margin-bottom:18px">
            <p style="margin:0;font-size:18px;font-weight:bold">${esc(form.title)} received</p>
            <p style="margin:4px 0 0;color:#555;font-size:13px">${esc(business)}${values.updateType ? ` · ${esc(values.updateType)}` : ''}</p>
          </div>
          <p style="font-size:14px;line-height:1.6">Hi ${esc(values.clientName.split(' ')[0])},</p>
          <p style="font-size:14px;line-height:1.6">Thank you. Your signed ${esc(form.title.toLowerCase())} is attached as a PDF. Please keep it for your records: it is the version we will work from.</p>
          ${values.updateType === 'Change request' ? '<p style="font-size:14px;line-height:1.6">We will reply with any cost or timeline impact. No chargeable work on this change starts until you approve it.</p>' : ''}
          <table style="width:100%;border-collapse:collapse;font-size:12px;margin:18px 0;border-top:2px solid #0b0b0b">
            <tr><td style="padding:7px 0;color:#666;width:130px;border-bottom:1px solid #e4e4e4">Reference</td><td style="padding:7px 0;border-bottom:1px solid #e4e4e4;font-family:Courier,monospace">${ref}</td></tr>
            <tr><td style="padding:7px 0;color:#666;border-bottom:1px solid #e4e4e4">Submitted</td><td style="padding:7px 0;border-bottom:1px solid #e4e4e4">${esc(submittedAtLondon)}</td></tr>
            <tr><td style="padding:7px 0;color:#666;border-bottom:1px solid #e4e4e4">Signed by</td><td style="padding:7px 0;border-bottom:1px solid #e4e4e4">${esc(values.signature)}</td></tr>
            <tr><td style="padding:7px 0;color:#666;border-bottom:1px solid #e4e4e4">Fingerprint</td><td style="padding:7px 0;border-bottom:1px solid #e4e4e4;font-family:Courier,monospace;font-size:10px;word-break:break-all">SHA-256 ${dataHash}</td></tr>
          </table>
          <p style="font-size:12px;line-height:1.6;color:#666">If anything in the attached record is wrong, reply to this email and we will issue a corrected version under a new reference.</p>
          <p style="font-size:14px;line-height:1.6;margin-top:22px">Leng Media<br><a href="https://www.lengmedia.com" style="color:#0b0b0b">lengmedia.com</a></p>
        </div>`,
      attachments: [
        { filename: `${filename}.pdf`, content: Buffer.from(pdf) },
        { filename: `${ref}.json`, content: Buffer.from(json) },
      ],
    })
    if (error) throw error
  } catch (e) {
    console.error('Project record email failed:', e)
    return NextResponse.json({ error: 'Your record was created but could not be emailed. Please download it below and email it to zaq@lengmedia.com.', ref, pdf: Buffer.from(pdf).toString('base64'), filename }, { status: 502 })
  }

  return NextResponse.json({ ok: true, ref, pdf: Buffer.from(pdf).toString('base64'), filename })
}
