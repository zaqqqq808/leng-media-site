import { Suspense } from 'react'
import type { Metadata } from 'next'
import WhatsAppQualifierLoader from './WhatsAppQualifierLoader'
import styles from './page.module.css'

// Sits between every WhatsApp button and wa.me: a few tap-to-answer questions
// that qualify the lead, then hands over to WhatsApp with the answers pre-typed.
export const metadata: Metadata = {
  title: 'Chat on WhatsApp – Leng Media',
  description: 'Answer a few quick questions and continue the conversation with Leng Media on WhatsApp.',
  robots: { index: false, follow: true },
}

export default function WhatsAppPage() {
  return (
    <section className={styles.page}>
      <Suspense fallback={null}>
        <WhatsAppQualifierLoader />
      </Suspense>
    </section>
  )
}
