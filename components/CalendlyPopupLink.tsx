'use client'
import { useEffect } from 'react'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
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

// One listener per page regardless of how many buttons are mounted,
// so a single booking never fires more than one Schedule event.
let listenerAdded = false
function ensureScheduleListener() {
  if (listenerAdded) return
  listenerAdded = true
  window.addEventListener('message', e => {
    if (e.origin === 'https://calendly.com' && e.data?.event === 'calendly.event_scheduled') {
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
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: href })
    } else {
      window.open(href, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} style={style} onClick={handleClick}>
      {children}
    </a>
  )
}
