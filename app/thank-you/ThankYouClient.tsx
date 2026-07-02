'use client'
import { useEffect } from 'react'

declare global {
  interface Window { fbq?: (...args: unknown[]) => void }
}

export default function ThankYouClient() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Schedule')
    }
  }, [])
  return null
}
