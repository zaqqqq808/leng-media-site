'use client'
import { useEffect } from 'react'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    gtag?: (...args: unknown[]) => void
  }
}

export default function ThankYouClient() {
  useEffect(() => {
    // Popup-embed bookings are tracked by CalendlyPopupLink's event listener;
    // only fire here on a full-page visit (direct Calendly link redirect).
    // GA4 is reported from the Calendly webhook, not here — see that route.
    if (typeof window !== 'undefined' && window.self === window.top) {
      window.fbq?.('track', 'Schedule')
    }
  }, [])
  return null
}
