import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Privacy Policy – Leng Media',
  description: 'How Leng Media collects, uses, stores and protects the personal data of visitors, leads and clients across our website and services.',
  robots: { index: true, follow: true },
}

export default function PrivacyPolicy() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroGrid} />
        <div className={styles.heroContent}>
          <p className={styles.sys}><span className={styles.accent}>SYS:</span> LEGAL // DATA PROTECTION</p>
          <h1 className={styles.title}>Privacy Policy.</h1>
          <p className={styles.updated}>Last updated: 5 August 2026</p>
        </div>
      </section>

      <article className={styles.article}>
        <h2 className={styles.h2}>Who we are</h2>
        <p className={styles.para}>
          Leng Media (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a London-based performance marketing agency. This policy explains what personal data we collect when you use lengmedia.com, book a call, submit an enquiry, or interact with our ads, and what we do with it. If you have any questions, email us at <a href="mailto:zaq@lengmedia.com" className={styles.inlineLink}>zaq@lengmedia.com</a>.
        </p>

        <h2 className={styles.h2}>Information we collect</h2>
        <p className={styles.para}>Depending on how you interact with us, we may collect:</p>
        <ul className={styles.list}>
          <li className={styles.listItem}><span className={styles.bullet}>◆</span>Name, email address and phone number, when you submit a contact form, book a call, or complete a Meta lead ad</li>
          <li className={styles.listItem}><span className={styles.bullet}>◆</span>The content of any message you send us, including via our enquiry form or WhatsApp</li>
          <li className={styles.listItem}><span className={styles.bullet}>◆</span>Account details if you sign up or sign in, including your email address and authentication data</li>
          <li className={styles.listItem}><span className={styles.bullet}>◆</span>Payment and billing details if you purchase a product from us, processed and stored directly by our payment provider, Stripe, not by us</li>
          <li className={styles.listItem}><span className={styles.bullet}>◆</span>Technical data such as your IP address, browser type, device type and pages visited, collected automatically via analytics and advertising tools</li>
        </ul>

        <h2 className={styles.h2}>How we use your data</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}><span className={styles.bullet}>◆</span>To respond to your enquiry and provide the services you ask for</li>
          <li className={styles.listItem}><span className={styles.bullet}>◆</span>To schedule and manage calls booked through our site</li>
          <li className={styles.listItem}><span className={styles.bullet}>◆</span>To process payments for any products or services you purchase</li>
          <li className={styles.listItem}><span className={styles.bullet}>◆</span>To measure how our website and advertising perform, and improve them</li>
          <li className={styles.listItem}><span className={styles.bullet}>◆</span>To send you information you have requested, such as a quote or follow-up message</li>
        </ul>
        <p className={styles.para}>We do not sell your personal data to third parties.</p>

        <h2 className={styles.h2}>Third-party services we use</h2>
        <p className={styles.para}>We rely on the following services to run our business. Each processes a limited set of your data for the purpose described:</p>
        <ul className={styles.list}>
          <li className={styles.listItem}><span className={styles.bullet}>◆</span><strong>Google Analytics</strong> — anonymised website usage statistics</li>
          <li className={styles.listItem}><span className={styles.bullet}>◆</span><strong>Meta (Facebook/Instagram) Pixel and Conversions API</strong> — measures the performance of our advertising and helps us show relevant ads. Where technically possible, personal identifiers such as your email address are cryptographically hashed before being sent to Meta</li>
          <li className={styles.listItem}><span className={styles.bullet}>◆</span><strong>Calendly</strong> — manages call bookings</li>
          <li className={styles.listItem}><span className={styles.bullet}>◆</span><strong>WhatsApp Business</strong> — if you choose to message us on WhatsApp, that conversation is subject to WhatsApp&apos;s own privacy policy</li>
          <li className={styles.listItem}><span className={styles.bullet}>◆</span><strong>Resend</strong> — delivers transactional emails, such as notifying us of your enquiry</li>
          <li className={styles.listItem}><span className={styles.bullet}>◆</span><strong>Google Workspace</strong> — we keep a record of enquiries and bookings in a private, access-controlled spreadsheet</li>
          <li className={styles.listItem}><span className={styles.bullet}>◆</span><strong>Stripe</strong> — processes payments securely; we do not see or store your full card details</li>
          <li className={styles.listItem}><span className={styles.bullet}>◆</span><strong>Clerk</strong> — manages account sign-in for members-only areas of the site</li>
        </ul>

        <h2 className={styles.h2}>Cookies</h2>
        <p className={styles.para}>
          Our site uses cookies and similar technologies from the services listed above (for example, to remember your session or measure ad performance). You can control or delete cookies through your browser settings at any time.
        </p>

        <h2 className={styles.h2}>How long we keep your data</h2>
        <p className={styles.para}>
          We keep enquiry and booking records for as long as reasonably necessary to respond to you and maintain our business records, and no longer than we have a legitimate reason to. You can ask us to delete your data at any time, as set out below.
        </p>

        <h2 className={styles.h2}>Your rights</h2>
        <p className={styles.para}>Under UK GDPR, you have the right to:</p>
        <ul className={styles.list}>
          <li className={styles.listItem}><span className={styles.bullet}>◆</span>Ask what personal data we hold about you</li>
          <li className={styles.listItem}><span className={styles.bullet}>◆</span>Ask us to correct inaccurate data</li>
          <li className={styles.listItem}><span className={styles.bullet}>◆</span>Ask us to delete your data</li>
          <li className={styles.listItem}><span className={styles.bullet}>◆</span>Object to or restrict how we use your data</li>
          <li className={styles.listItem}><span className={styles.bullet}>◆</span>Withdraw consent at any time, where we rely on consent</li>
        </ul>
        <p className={styles.para}>
          To exercise any of these rights, email <a href="mailto:zaq@lengmedia.com" className={styles.inlineLink}>zaq@lengmedia.com</a>. You also have the right to complain to the UK Information Commissioner&apos;s Office (ICO) if you believe we have not handled your data properly.
        </p>

        <h2 className={styles.h2}>Children&apos;s privacy</h2>
        <p className={styles.para}>Our services are intended for businesses and individuals aged 18 and over. We do not knowingly collect data from children.</p>

        <h2 className={styles.h2}>Changes to this policy</h2>
        <p className={styles.para}>We may update this policy from time to time. The &quot;last updated&quot; date at the top of this page will always reflect the most recent version.</p>

        <h2 className={styles.h2}>Contact us</h2>
        <p className={styles.para}>
          If you have any questions about this policy or how we handle your data, contact us at <a href="mailto:zaq@lengmedia.com" className={styles.inlineLink}>zaq@lengmedia.com</a> or via our <Link href="/business-enquiry" className={styles.inlineLink}>enquiry page</Link>.
        </p>
      </article>
    </>
  )
}
