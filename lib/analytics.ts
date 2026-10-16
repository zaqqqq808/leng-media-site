// Measurement IDs. Google Analytics and the Meta Pixel set cookies, so they
// only load after a visitor accepts them in the consent banner (PECR).
export const GA_ID = 'G-NBQPLL55BS'
export const META_PIXEL_ID = '991276137090422'

export const CONSENT_KEY = 'lm-cookie-consent'
export type Consent = 'granted' | 'denied'

/** The visitor's saved choice, or null if they haven't made one (or storage is blocked). */
export function readConsent(): Consent | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY)
    return v === 'granted' || v === 'denied' ? v : null
  } catch {
    return null
  }
}

/** True only when the visitor has accepted cookies. Forms send this to the
 *  server so Meta Conversions API events follow the same choice. */
export const hasConsent = () => typeof window !== 'undefined' && readConsent() === 'granted'
