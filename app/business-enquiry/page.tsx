import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import styles from './page.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Business Enquiry – Leng Media',
  description: 'Book a call with the Leng Media team or send us a message.',
}

// TODO: Replace with your actual Calendly link
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
          <p className={styles.sub}>Whether you&apos;re ready to start or just exploring — book a call. No hard sell, no obligation. Just an honest conversation about your brand.</p>
        </div>
      </section>

      <section className={styles.body}>
        {/* Book a call */}
        <ScrollReveal className={styles.bookCard}>
          <span className="section-label">// Option 01</span>
          <h2 className={styles.optionTitle}>Book a call directly</h2>
          <p className={styles.optionDesc}>
            Choose a time that works for you and we&apos;ll have a focused 30-minute conversation about your goals, challenges, and how we can help.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{marginTop: 36, display: 'inline-block', fontSize: 12, padding: '16px 40px'}}
          >
            Book a Call →
          </a>
        </ScrollReveal>

        <div className={styles.divider} />

        {/* Message form */}
        <ScrollReveal className={styles.formCard} delay={2}>
          <span className="section-label">// Option 02</span>
          <h2 className={styles.optionTitle}>Send a message</h2>
          <p className={styles.optionDesc}>
            Prefer to write? Leave us a message and we&apos;ll get back to you within 72 hours.
          </p>
          <form className={styles.form} action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
            {/* TODO: Replace with your Formspree/Resend form ID, or remove if Calendly only */}
            <div className={styles.field}>
              <label className={styles.label}>Name</label>
              <input className={styles.input} type="text" name="name" placeholder="Your name" required />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Email</label>
              <input className={styles.input} type="email" name="email" placeholder="your@email.com" required />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Message</label>
              <textarea className={`${styles.input} ${styles.textarea}`} name="message" placeholder="Tell us about your brand and what you're looking to achieve..." required />
            </div>
            <button type="submit" className="btn-primary" style={{marginTop: 8}}>Send Message</button>
          </form>
        </ScrollReveal>
      </section>

      {/* Social proof strip */}
      <div className={styles.strip}>
        {['"Tripled our Christmas sales" — Elliot Rees, CEO','Trusted by APL Media','Thousands of new followers & hundreds of sales — Hiro Bharwani, CEO'].map(q => (
          <div key={q} className={styles.stripItem}>
            <span className={styles.stripQuote}>{q}</span>
          </div>
        ))}
      </div>
    </>
  )
}
