import type { Metadata } from 'next'
import Link from 'next/link'
import ThankYouClient from './ThankYouClient'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Booking Confirmed – Leng Media',
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <>
      <ThankYouClient />
      <section className={styles.page}>
        <div className={styles.inner}>
          <span className={styles.label}>// Booking confirmed</span>
          <h1 className={styles.heading}>You&apos;re booked in.<br /><em>We&apos;ll see you on the call.</em></h1>
          <div className={styles.steps}>
            <div className={styles.step}>
              <span className={styles.stepNum}>01</span>
              <p className={styles.stepText}>Check your email — Calendly has sent you a confirmation with the call details.</p>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNum}>02</span>
              <p className={styles.stepText}>We&apos;ll review your project before the call so we come prepared.</p>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNum}>03</span>
              <p className={styles.stepText}>You&apos;ll receive a fixed quote within 24 hours of speaking.</p>
            </div>
          </div>
          <Link href="/" className={styles.back}>← Back to Leng Media</Link>
        </div>
      </section>
    </>
  )
}
