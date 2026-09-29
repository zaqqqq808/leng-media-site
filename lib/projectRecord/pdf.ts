import { PDFDocument, StandardFonts, rgb, type PDFFont, type PDFPage } from 'pdf-lib'
import { isVisible, type RecordForm } from './schema'

/**
 * The client's signed receipt. House style matches the Leng Media delivery report:
 * mostly white, black type, one yellow accent, monospaced labels.
 */

export interface RecordMeta {
  ref: string
  submittedAtUtc: string
  submittedAtLondon: string
  ip: string
  userAgent: string
  /** SHA-256 of the canonical submitted data. Printed on every page as a fingerprint. */
  dataHash: string
}

const A4 = { w: 595.28, h: 841.89 }
const M = { x: 52, top: 70, bottom: 62 }
const INK = rgb(0.043, 0.043, 0.043)
const G1 = rgb(0.23, 0.23, 0.23)
const G2 = rgb(0.42, 0.42, 0.42)
const LINE = rgb(0.89, 0.89, 0.89)
const YELLOW = rgb(1, 0.831, 0)

// The standard PDF fonts only cover Windows-1252. Anything outside it (emoji, other scripts)
// would throw, so it is replaced. The emailed JSON and data hash keep the exact original text.
// Emoji are dropped; other unsupported characters become '?' (by code point, not UTF-16 unit).
const EMOJI = new RegExp('\\p{Extended_Pictographic}\\uFE0F?', 'gu')
const WIN_ANSI_EXTRA = '€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ'
export function pdfSafe(s: string): string {
  const cleaned = s
    .replace(/\r\n?/g, '\n')
    .replace(/\t/g, '    ')
    .replace(/[\u2010-\u2012]/g, '-')
    .replace(/[\u00A0\u2000-\u200B\u202F]/g, ' ')
    .replace(EMOJI, '')
  return Array.from(cleaned)
    .map(ch => {
      const c = ch.charCodeAt(0)
      if (ch === '\n' || (c >= 0x20 && c <= 0x7e) || (c >= 0xa1 && c <= 0xff) || WIN_ANSI_EXTRA.includes(ch)) return ch
      return '?'
    })
    .join('')
}

function wrap(text: string, font: PDFFont, size: number, width: number): string[] {
  const out: string[] = []
  for (const para of pdfSafe(text).split('\n')) {
    if (!para.trim()) { out.push(''); continue }
    let line = ''
    for (const word of para.split(/ +/)) {
      const candidate = line ? `${line} ${word}` : word
      if (font.widthOfTextAtSize(candidate, size) <= width) { line = candidate; continue }
      if (line) out.push(line)
      // A single word wider than the column (a long URL) is broken by character.
      let rest = word
      while (font.widthOfTextAtSize(rest, size) > width) {
        let i = rest.length
        while (i > 1 && font.widthOfTextAtSize(rest.slice(0, i), size) > width) i--
        out.push(rest.slice(0, i))
        rest = rest.slice(i)
      }
      line = rest
    }
    out.push(line)
  }
  return out
}

export async function buildRecordPdf(form: RecordForm, values: Record<string, string>, meta: RecordMeta, declarations: { text: string }[]): Promise<Uint8Array> {
  const doc = await PDFDocument.create()
  doc.setTitle(`${form.title} ${meta.ref} - ${values.businessName ?? ''}`)
  doc.setAuthor('Leng Media')
  doc.setSubject(`${form.title} submitted ${meta.submittedAtUtc}`)
  doc.setKeywords([meta.ref, `sha256:${meta.dataHash}`])
  doc.setCreator('lengmedia.com project record')
  doc.setCreationDate(new Date(meta.submittedAtUtc))

  const sans = await doc.embedFont(StandardFonts.Helvetica)
  const bold = await doc.embedFont(StandardFonts.HelveticaBold)
  const mono = await doc.embedFont(StandardFonts.Courier)
  const monoB = await doc.embedFont(StandardFonts.CourierBold)
  const serif = await doc.embedFont(StandardFonts.TimesRoman)

  const W = A4.w - M.x * 2
  let page!: PDFPage
  let y = 0

  const newPage = () => {
    page = doc.addPage([A4.w, A4.h])
    // running header
    page.drawText('Leng.', { x: M.x, y: A4.h - 44, size: 17, font: serif, color: INK })
    const head = `${form.title.toUpperCase()}  /  ${meta.ref}`
    page.drawText(head, { x: A4.w - M.x - mono.widthOfTextAtSize(head, 7), y: A4.h - 40, size: 7, font: mono, color: G1 })
    page.drawLine({ start: { x: M.x, y: A4.h - 52 }, end: { x: A4.w - M.x, y: A4.h - 52 }, thickness: 0.8, color: INK })
    y = A4.h - M.top - 6
  }
  const ensure = (h: number) => { if (y - h < M.bottom) newPage() }

  const label = (t: string, x = M.x) => page.drawText(pdfSafe(t.toUpperCase()), { x, y, size: 6.6, font: mono, color: G2 })

  newPage()
  y -= 20

  // ── title block ──
  page.drawRectangle({ x: M.x, y: y - 3, width: 4, height: 30, color: YELLOW })
  page.drawText(form.title, { x: M.x + 12, y: y + 6, size: 24, font: bold, color: INK })
  y -= 22
  page.drawText(pdfSafe(`${values.businessName ?? ''}${values.project ? `  ·  ${values.project}` : ''}${values.updateType ? `  ·  ${values.updateType}` : ''}`), { x: M.x + 12, y, size: 10.5, font: sans, color: G1 })
  y -= 26

  // meta grid
  const metaRows: [string, string][] = [
    ['Reference', meta.ref],
    ['Submitted (UK)', meta.submittedAtLondon],
    ['Submitted (UTC)', meta.submittedAtUtc],
    ['Submitted by', `${values.clientName ?? ''} <${values.email ?? ''}>`],
  ]
  page.drawLine({ start: { x: M.x, y: y + 10 }, end: { x: A4.w - M.x, y: y + 10 }, thickness: 0.8, color: INK })
  for (const [k, v] of metaRows) {
    label(k)
    page.drawText(pdfSafe(v), { x: M.x + 110, y, size: 8.6, font: sans, color: INK })
    y -= 6
    page.drawLine({ start: { x: M.x, y }, end: { x: A4.w - M.x, y }, thickness: 0.4, color: LINE })
    y -= 11
  }
  y -= 10

  // ── sections ──
  const LABEL_W = 170
  const VAL_X = M.x + LABEL_W + 12
  const VAL_W = W - LABEL_W - 12
  form.sections.forEach((section, si) => {
    const fields = section.fields.filter(f => isVisible(f, values))
    if (!fields.length) return
    ensure(60)
    const no = String(si + 1).padStart(2, '0')
    page.drawRectangle({ x: M.x, y: y - 3, width: monoB.widthOfTextAtSize(no, 7.5) + 8, height: 12, color: YELLOW })
    page.drawText(no, { x: M.x + 4, y, size: 7.5, font: monoB, color: INK })
    page.drawText(section.title, { x: M.x + 30, y: y - 1, size: 12, font: bold, color: INK })
    y -= 12
    page.drawLine({ start: { x: M.x, y }, end: { x: A4.w - M.x, y }, thickness: 0.8, color: INK })
    y -= 13

    for (const f of fields) {
      const raw = (values[f.name] ?? '').trim()
      const val = raw ? (f.type === 'checkboxes' ? raw.split('\n').map(s => `• ${s}`).join('\n') : raw) : 'Not answered'
      const labLines = wrap(f.label, bold, 8, LABEL_W)
      const valLines = wrap(val, sans, 8.8, VAL_W)
      let i = 0
      const total = Math.max(labLines.length, valLines.length)
      while (i < total) {
        ensure(14)
        if (labLines[i]) page.drawText(labLines[i], { x: M.x, y, size: 8, font: bold, color: INK })
        if (valLines[i] !== undefined) page.drawText(valLines[i], { x: VAL_X, y, size: 8.8, font: sans, color: raw ? G1 : G2 })
        y -= 12.2
        i++
      }
      y -= 2
      page.drawLine({ start: { x: M.x, y: y + 5 }, end: { x: A4.w - M.x, y: y + 5 }, thickness: 0.4, color: LINE })
      y -= 7
    }
    y -= 12
  })

  // ── declaration and signature ──
  ensure(150)
  page.drawText('Declaration', { x: M.x, y, size: 12, font: bold, color: INK })
  y -= 12
  page.drawLine({ start: { x: M.x, y }, end: { x: A4.w - M.x, y }, thickness: 0.8, color: INK })
  y -= 15
  for (const d of declarations) {
    const lines = wrap(d.text, sans, 8.8, W - 20)
    ensure(lines.length * 12 + 6)
    page.drawRectangle({ x: M.x, y: y - 1, width: 8, height: 8, borderColor: INK, borderWidth: 0.8, color: YELLOW })
    page.drawText('X', { x: M.x + 1.6, y: y + 0.2, size: 7, font: monoB, color: INK })
    for (const l of lines) { page.drawText(l, { x: M.x + 20, y, size: 8.8, font: sans, color: INK }); y -= 12 }
    y -= 6
  }
  y -= 8
  ensure(60)
  label('Signed (typed name)')
  label('Date and time (UK)', M.x + W / 2)
  y -= 16
  page.drawText(pdfSafe(values.signature ?? ''), { x: M.x, y, size: 15, font: serif, color: INK })
  page.drawText(pdfSafe(meta.submittedAtLondon), { x: M.x + W / 2, y: y + 2, size: 9, font: sans, color: INK })
  y -= 8
  page.drawLine({ start: { x: M.x, y }, end: { x: M.x + W / 2 - 16, y }, thickness: 0.8, color: INK })
  page.drawLine({ start: { x: M.x + W / 2, y }, end: { x: A4.w - M.x, y }, thickness: 0.8, color: INK })
  y -= 26

  // ── integrity block ──
  ensure(70)
  page.drawRectangle({ x: M.x, y: y - 44, width: W, height: 56, color: rgb(0.965, 0.965, 0.957) })
  page.drawRectangle({ x: M.x, y: y - 44, width: 3, height: 56, color: YELLOW })
  page.drawText('RECORD INTEGRITY', { x: M.x + 12, y, size: 6.6, font: monoB, color: INK })
  page.drawText(`SHA-256 of submitted data: ${meta.dataHash}`, { x: M.x + 12, y: y - 12, size: 6.4, font: mono, color: G1 })
  page.drawText(pdfSafe(`Submitted from IP ${meta.ip}. Receipt and source data emailed to both parties.`), { x: M.x + 12, y: y - 23, size: 6.4, font: mono, color: G1 })
  const ua = wrap(`Browser: ${meta.userAgent}`, mono, 6.4, W - 24)[0]
  page.drawText(ua, { x: M.x + 12, y: y - 34, size: 6.4, font: mono, color: G2 })

  // ── footers (page x / n) ──
  const pages = doc.getPages()
  pages.forEach((p, i) => {
    p.drawLine({ start: { x: M.x, y: 42 }, end: { x: A4.w - M.x, y: 42 }, thickness: 0.4, color: LINE })
    p.drawText(`LENG MEDIA  ·  ${meta.ref}  ·  SHA-256 ${meta.dataHash.slice(0, 16)}…`, { x: M.x, y: 30, size: 6.4, font: mono, color: G2 })
    const pn = `${String(i + 1).padStart(2, '0')} / ${String(pages.length).padStart(2, '0')}`
    p.drawText(pn, { x: A4.w - M.x - mono.widthOfTextAtSize(pn, 6.4), y: 30, size: 6.4, font: mono, color: G2 })
  })

  return doc.save()
}
