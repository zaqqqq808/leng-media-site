'use client'
import { useEffect } from 'react'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    gtag?: (...args: unknown[]) => void
    Calendly?: { initPopupWidget: (opts: { url: string }) => void }
  }
}

let assetsPromise: Promise<void> | null = null
function loadCalendlyAssets(): Promise<void> {
  if (assetsPromise) return assetsPromise
  assetsPromise = new Promise(resolve => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://assets.calendly.com/assets/external/widget.css'
    document.head.appendChild(link)
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.onload = () => resolve()
    script.onerror = () => { assetsPromise = null; resolve() }
    document.body.appendChild(script)
  })
  return assetsPromise
}

// GA4 identifies a visitor by client_id (in the _ga cookie, "GA1.1.<id>.<ts>")
// and their visit by session_id (in the per-property _ga_<id> cookie,
// "GS1.1.<session_id>.<n>..."). We forward both to Calendly as utm_content
// and utm_term so the webhook can report the booking against this same
// visitor and session — without them GA4 files the conversion as a brand
// new "(direct)" user rather than crediting the channel that sent them.
function gaIdsFromCookie(): { clientId: string | null; sessionId: string | null } {
  const client = document.cookie.match(/(?:^|;\s*)_ga=GA\d\.\d\.(\d+\.\d+)/)
  // Two formats in the wild: GS1 stores "GS1.1.<id>." and the current GS2
  // stores "GS2.1.s<id>$" — hence the optional "s".
  const session = document.cookie.match(/(?:^|;\s*)_ga_[A-Z0-9]+=GS\d\.\d\.s?(\d+)/)
  return { clientId: client?.[1] ?? null, sessionId: session?.[1] ?? null }
}

function withGaIds(href: string): string {
  const { clientId, sessionId } = gaIdsFromCookie()
  if (!clientId) return href
  const params = new URLSearchParams({ utm_content: clientId })
  if (sessionId) params.set('utm_term', sessionId)
  return `${href}${href.includes('?') ? '&' : '?'}${params.toString()}`
}

// One listener per page regardless of how many buttons are mounted,
// so a single booking never fires more than one Schedule event.
let listenerAdded = false
function ensureScheduleListener() {
  if (listenerAdded) return
  listenerAdded = true
  window.addEventListener('message', e => {
    if (e.origin === 'https://calendly.com' && e.data?.event === 'calendly.event_scheduled') {
      // GA4 is reported from the Calendly webhook instead of here: it catches
      // every booking (including direct calendly.com links) and GA4 has no
      // event-id dedup, so firing in both places would double-count.
      window.fbq?.('track', 'Schedule')
    }
  })
}

interface Props {
  href: string
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
}

export default function CalendlyPopupLink({ href, className, style, children }: Props) {
  useEffect(() => {
    ensureScheduleListener()
  }, [])

  async function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    // Mid-funnel signal: CTA click. Confirmed bookings fire Schedule separately.
    window.fbq?.('track', 'Lead')
    await loadCalendlyAssets()
    const url = withGaIds(href)
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url })
    } else {
      // Booking completes in a separate tab, so no postMessage comes back
      // here — the webhook is what reports this one.
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} style={style} onClick={handleClick}>
      {children}
    </a>
  )
}
