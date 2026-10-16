// Browser globals injected by third-party scripts (Meta Pixel, GA4, Calendly).
export {}

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    _fbq?: unknown
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    Calendly?: { initPopupWidget: (opts: { url: string }) => void }
  }
}
