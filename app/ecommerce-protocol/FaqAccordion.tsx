'use client'

import { useState } from 'react'
import styles from './FaqAccordion.module.css'

interface Faq {
  q: string
  a: string
}

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className={styles.accordion}>
      {faqs.map((f, i) => (
        <div key={f.q} className={styles.item}>
          <button
            className={styles.question}
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span>{f.q}</span>
            <span className={`${styles.icon} ${open === i ? styles.iconOpen : ''}`}>+</span>
          </button>
          <div className={`${styles.answer} ${open === i ? styles.answerOpen : ''}`}>
            <div className={styles.answerInner}>
              <p>{f.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
