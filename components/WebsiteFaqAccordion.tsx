'use client'
import { useState } from 'react'
import styles from './WebsiteFaqAccordion.module.css'

interface FaqItem {
  q: string
  a: string
}

export default function WebsiteFaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className={styles.accordion}>
      {items.map((item, i) => (
        <div key={i} className={styles.item}>
          <button
            className={styles.question}
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className={styles.qText}>{item.q}</span>
            <span className={`${styles.icon} ${open === i ? styles.iconOpen : ''}`}>+</span>
          </button>
          <div className={`${styles.answer} ${open === i ? styles.answerOpen : ''}`}>
            <div className={styles.answerInner}>
              <p className={styles.answerText}>{item.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
