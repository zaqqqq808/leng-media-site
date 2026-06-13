'use client'
import styles from './Ticker.module.css'

const ITEMS = ['High Ticket Lead Gen','AI Agents and Automation','Rapid A/B Testing','Custom Website Builds','Link Building','CR% Audits','Growth Hacking','Revenue Share Models']

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className={styles.ticker}>
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>
            <span className={styles.dot}>◆</span>{item}
          </span>
        ))}
      </div>
    </div>
  )
}
