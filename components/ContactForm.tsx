'use client'

import { useState } from 'react'
import styles from '@/app/business-enquiry/page.module.css'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label className={styles.label}>Name</label>
        <input className={styles.input} type="text" name="name" placeholder="Your name" required disabled={status === 'sending'} />
      </div>
      <div className={styles.field}>
        <label className={styles.label}>Email</label>
        <input className={styles.input} type="email" name="email" placeholder="your@email.com" required disabled={status === 'sending'} />
      </div>
      <div className={styles.field}>
        <label className={styles.label}>Message</label>
        <textarea className={`${styles.input} ${styles.textarea}`} name="message" placeholder="Tell us about your brand and what you're looking to achieve..." required disabled={status === 'sending'} />
      </div>

      <button type="submit" className="btn-primary" style={{ marginTop: 8 }} disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && (
        <p style={{ marginTop: 16, color: '#4ade80', fontSize: 14 }}>
          ✓ Message sent! We&apos;ll get back to you within 72 hours.
        </p>
      )}
      {status === 'error' && (
        <p style={{ marginTop: 16, color: '#f87171', fontSize: 14 }}>
          Something went wrong — please try again or email us directly at zaq@lengmedia.com
        </p>
      )}
    </form>
  )
}
