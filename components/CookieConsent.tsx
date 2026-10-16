'use client'

import { useEffect, useSyncExternalStore } from 'react'
import Link from 'next/link'
import styles from './CookieConsent.module.css'
import { CONSENT_KEY, GA_ID, META_PIXEL_ID, readConsent, type Consent } from '@/lib/analytics'

function loadScript(src: string) {
  const s = document.createElement('script')
  s.async = true
  s.src = src
  document.head.appendChild(s)
}

let loaded = false
function loadTrackers() {
  if (loaded) return
  loaded = true

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    // gtag.js reads the arguments object itself, not an array copy.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', GA_ID)
  loadScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`)

  // Meta's pixel base code, written out as a function so it needs no inline
  // script. Calls made before fbevents.js arrives are queued and replayed.
  if (!window.fbq) {
    const fbq = function () {
      // fbevents.js replays the queue expecting arguments objects, as in Meta's snippet.
      // eslint-disable-next-line prefer-rest-params, prefer-spread
      if (fbq.callMethod) fbq.callMethod.apply(fbq, arguments as unknown as unknown[])
      // eslint-disable-next-line prefer-rest-params
      else fbq.queue.push(arguments)
    } as FbqStub
    fbq.push = fbq
    fbq.loaded = true
    fbq.version = '2.0'
    fbq.queue = []
    window.fbq = fbq
    window._fbq = fbq
    loadScript('https://connect.facebook.net/en_US/fbevents.js')
  }
  window.fbq('init', META_PIXEL_ID)
  window.fbq('track', 'PageView')
}

type FbqStub = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void
  queue: unknown[]
  push: unknown
  loaded: boolean
  version: string
}

// A returning visitor who already accepted gets the trackers as soon as this
// module runs, before any page component's effects. That way calls like the
// thank-you page's fbq('track', 'Schedule') on mount aren't lost.
if (typeof window !== 'undefined' && readConsent() === 'granted') loadTrackers()

// Consent lives in localStorage, outside React. A tiny external store lets
// the banner read it with useSyncExternalStore instead of copying it into
// state inside an effect. The server snapshot is 'ssr', so the banner never
// renders in static HTML and can't flash for visitors who already chose.
let reopened = false
const listeners = new Set<() => void>()
const notify = () => listeners.forEach(l => l())

const consentStore = {
  subscribe(cb: () => void) {
    listeners.add(cb)
    const onStorage = (e: StorageEvent) => { if (e.key === CONSENT_KEY) cb() }
    window.addEventListener('storage', onStorage)
    return () => {
      listeners.delete(cb)
      window.removeEventListener('storage', onStorage)
    }
  },
  getSnapshot: () => `${readConsent() ?? 'unset'}|${reopened}`,
  getServerSnapshot: () => 'ssr',
}

function openCookieSettings() {
  reopened = true
  notify()
}

/**
 * Cookie banner. Nothing that sets cookies loads until the visitor taps
 * Accept; Decline is exactly as prominent, and the choice can be changed at
 * any time from the cookie policy page.
 */
export default function CookieConsent() {
  const snapshot = useSyncExternalStore(consentStore.subscribe, consentStore.getSnapshot, consentStore.getServerSnapshot)
  const [consent, isReopened] = snapshot.split('|')
  const open = snapshot !== 'ssr' && (consent === 'unset' || isReopened === 'true')

  useEffect(() => {
    if (consent === 'granted') loadTrackers()
  }, [consent])

  function choose(c: Consent) {
    try { localStorage.setItem(CONSENT_KEY, c) } catch {}
    reopened = false
    notify()
    // Withdrawing consent: reload so trackers already running stop.
    if (c === 'denied' && loaded) window.location.reload()
  }

  if (!open) return null
  return (
    <div className={styles.banner} role="dialog" aria-label="Cookie choices" aria-live="polite">
      <div className={styles.inner}>
        <p className={styles.text}>
          We&apos;d like to use cookies to see how people use this site (Google Analytics) and to
          measure our ads on Meta. Nothing is set unless you accept.{' '}
          <Link href="/cookies" className={styles.link}>Cookie policy</Link>
        </p>
        <div className={styles.actions}>
          <button type="button" className={styles.btn} onClick={() => choose('denied')}>Decline</button>
          <button type="button" className={styles.btn} onClick={() => choose('granted')}>Accept</button>
        </div>
      </div>
    </div>
  )
}

/** Button for the cookie policy page that reopens the banner. */
export function CookieSettingsButton() {
  return (
    <button type="button" className={styles.btn} onClick={openCookieSettings}>
      Change cookie settings
    </button>
  )
}
