'use client'
import { useEffect } from 'react'

declare global {
  interface Window { fbq?: (...args: unknown[]) => void }
}

export default function ThankYouClient() {
  useEffect(() => {
    // Popup-embed bookings are tracked by CalendlyPopupLink's event listener;
    // only fire here on a full-page visit (direct Calendly link redirect).
    if (typeof window !== 'undefined' && window.fbq && window.self === window.top) {
      window.fbq('track', 'Schedule')
    }
  }, [])
  return null
}
