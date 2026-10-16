// Cheap bot screening for the public lead forms. None of it is a hard wall;
// together they stop the drive-by scripts that post straight to the API.

/** Fastest a real person fills in a form, in ms. Scripts post instantly. */
export const MIN_FILL_MS = 3000

/** Browser side: ms since the page was opened, sent as `elapsed`. */
export const pageAge = () => Math.round(performance.now())

/** Name of the hidden field real visitors never see or fill. */
export const HONEYPOT_FIELD = 'website'

/** True when the request came from a page on this same site. Browsers always
 *  send Origin on a POST, so a missing one means a script, not a visitor. */
export function sameOrigin(req: Request) {
  const origin = req.headers.get('origin')
  const host = req.headers.get('x-forwarded-host') ?? req.headers.get('host')
  if (!origin || !host) return false
  try {
    return new URL(origin).host === host
  } catch {
    return false
  }
}

export function clientIp(req: Request) {
  return (req.headers.get('x-forwarded-for') ?? '').split(',')[0].trim() || 'unknown'
}

// Best-effort limit per IP. Serverless instances don't share memory, so this
// slows a burst from one address rather than guaranteeing a hard cap; a
// Vercel Firewall rate-limit rule is the stronger backstop.
const hits = new Map<string, number[]>()
export function rateLimited(key: string, limit = 5, windowMs = 10 * 60 * 1000, now = Date.now()) {
  const recent = (hits.get(key) ?? []).filter(t => now - t < windowMs)
  recent.push(now)
  hits.set(key, recent)
  if (hits.size > 5000) hits.clear()
  return recent.length > limit
}

/** Honeypot filled, or submitted faster than a person could. `elapsed` is
 *  the page's age in ms, measured in the browser; scripts leave it out. */
export function looksLikeBot(honeypot: unknown, elapsed: unknown) {
  if (typeof honeypot === 'string' && honeypot.trim()) return true
  return typeof elapsed !== 'number' || !Number.isFinite(elapsed) || elapsed < MIN_FILL_MS
}

/** Reads a cookie from the request, e.g. Meta's _fbp/_fbc for better match quality. */
export function cookie(req: Request, name: string) {
  const m = (req.headers.get('cookie') ?? '').match(new RegExp(`(?:^|;\\s*)${name}=([^;]+)`))
  return m ? decodeURIComponent(m[1]) : undefined
}

export const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!))

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
