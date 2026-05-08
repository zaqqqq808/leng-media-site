import ScrollReveal from '@/components/ScrollReveal'
import ContactForm from '@/components/ContactForm'
import styles from './page.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Business Enquiry – Leng Media',
  description: 'Book a discovery call with the Leng Media team. We work with ambitious ecommerce and service brands — tell us about your goals and we\'ll show you how we can help.',
}

const CALENDLY_URL = 'https://calendly.com/lengmedia'

export default function BusinessEnquiry() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroGrid} />
        <div className={styles.heroScanlines} />
        <div className={styles.heroContent}>
          <p className={styles.sys}><span className={styles.accent}>SYS:</span> ENQUIRY.LENG.MEDIA // INITIALISING</p>
          <h1 className={styles.title}>Let&apos;s talk.</h1>
        </div>
      </section>

      <section className={styles.body}>
        {/* Send a message */}
        <ScrollReveal className={styles.optionRow}>
          <div className={styles.optionLabel}>
            <span className="section-label">// Option 01</span>
            <h2 className={styles.optionTitle}>Send a message</h2>
            <p className={styles.optionDesc}>Prefer to write? Leave us a message and we&apos;ll get back to you within 72 hours.</p>
          </div>
          <ContactForm />
        </ScrollReveal>

        <div className={styles.rowDivider} />

        {/* Book a call */}
        <ScrollReveal className={styles.optionRow} delay={2}>
          <div className={styles.optionLabel}>
            <span className="section-label">// Option 02</span>
            <h2 className={styles.optionTitle}>Book a call</h2>
            <p className={styles.optionDesc}>Choose a time that works for you. A focused 30-minute conversation about your goals and how we can help.</p>
          </div>
          <div className={styles.calendarSide}>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: 12, padding: '16px 40px', display: 'inline-block' }}
            >
              Book a Call →
            </a>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
