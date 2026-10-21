import Link from 'next/link'
import styles from '../privacy/page.module.css'
import { pageMetadata } from '@/lib/seo'
import { CookieSettingsButton } from '@/components/CookieConsent'

export const metadata = pageMetadata({
  title: 'Cookie Policy – Leng Media',
  description: 'Every cookie lengmedia.com can set, what it is for, how long it lasts, and how to change your choice.',
  path: '/cookies',
})

const Item = ({ children }: { children: React.ReactNode }) => (
  <li className={styles.listItem}><span className={styles.bullet}>◆</span><span>{children}</span></li>
)

export default function CookiePolicy() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroGrid} />
        <div className={styles.heroContent}>
          <p className={styles.sys}><span className={styles.accent}>SYS:</span> LEGAL // COOKIES</p>
          <h1 className={styles.title}>Cookie Policy.</h1>
          <p className={styles.updated}>Last updated: 16 October 2026</p>
        </div>
      </section>

      <article className={styles.article}>
        <h2 className={styles.h2}>The short version</h2>
        <p className={styles.para}>
          When you first visit, nothing that sets an analytics or advertising cookie loads. If you click
          Accept, we load Google Analytics and the Meta Pixel. If you click Decline, they never load and
          we don&apos;t report your enquiries or bookings to Meta from our server either. If you book a
          call, we still add one to our booking count in Google Analytics, anonymously: no cookie, no
          identifier and no email address, and marked as not usable for advertising.
        </p>
        <p className={styles.para}><CookieSettingsButton /></p>

        <h2 className={styles.h2}>Always on (strictly necessary)</h2>
        <p className={styles.para}>These don&apos;t need your consent, because the site can&apos;t do what you asked without them.</p>
        <ul className={styles.list}>
          <Item>
            <strong>lm-cookie-consent</strong> (stored in your browser by lengmedia.com): remembers whether you
            accepted or declined, so we don&apos;t ask on every page. Kept until you clear your browser data.
          </Item>
          <Item>
            <strong>Clerk sign-in cookies</strong> (__session, __client_uat and __client on clerk.lengmedia.com):
            set only on the sign-in, sign-up and members pages, to keep you signed in. Session cookies last
            about a minute and are refreshed while you&apos;re active; the sign-in record lasts until you sign out.
            Clerk&apos;s bot check (Cloudflare Turnstile) may run on the sign-up page to block automated accounts.
          </Item>
        </ul>

        <h2 className={styles.h2}>Only if you accept</h2>
        <ul className={styles.list}>
          <Item>
            <strong>_ga</strong> and <strong>_ga_NBQPLL55BS</strong> (Google Analytics): count visits and
            show which pages and channels bring people to the site. Last up to 2 years.
          </Item>
          <Item>
            <strong>_fbp</strong> (Meta Pixel): lets Meta measure whether our ads lead to enquiries and
            bookings. Lasts 90 days. <strong>_fbc</strong> is added if you arrived by clicking one of our
            Meta ads, and also lasts 90 days.
          </Item>
        </ul>
        <p className={styles.para}>
          If you accept, our server also reports enquiries, call bookings and WhatsApp chats that start on
          this site to Meta through its Conversions API, with your email address hashed. This sets no
          cookie, but it follows the same choice: decline, and nothing is sent.
        </p>

        <h2 className={styles.h2}>Set by other services you open</h2>
        <ul className={styles.list}>
          <Item>
            <strong>Calendly</strong>: when you open the booking window, Calendly loads inside it and may set
            its own cookies, covered by Calendly&apos;s cookie notice. Nothing from Calendly loads until you
            click a booking button.
          </Item>
          <Item>
            <strong>Vimeo</strong>: the video on our ecommerce protocol page plays with Vimeo&apos;s
            do-not-track setting on, so it doesn&apos;t set tracking cookies.
          </Item>
        </ul>

        <h2 className={styles.h2}>Changing your choice</h2>
        <p className={styles.para}>
          Use the button above at any time. If you switch from Accept to Decline, the page reloads so the
          trackers stop straight away. Cookies already set by Google or Meta can be removed in your
          browser settings. More on how we handle personal data is in our{' '}
          <Link href="/privacy" className={styles.inlineLink}>privacy policy</Link>, and you can email{' '}
          <a href="mailto:zaq@lengmedia.com" className={styles.inlineLink}>zaq@lengmedia.com</a> with any question.
        </p>
      </article>
    </>
  )
}
