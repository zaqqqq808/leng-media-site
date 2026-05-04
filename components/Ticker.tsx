'use client'
import { useEffect, useRef } from 'react'
import styles from './Ticker.module.css'

const ITEMS = ['Lead Generation','Image Ad Creation','Rapid A/B Testing','AI Agents','Fast Website Builds','Link Building','CR% Audits','Growth Hacking','Revenue Share Models','Automation']

export default function Ticker() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!ref.current) return
    ref.current.innerHTML = [...ITEMS,...ITEMS].map(i =>
      `<span class="${styles.item}"><span class="${styles.dot}">◆</span>${i}</span>`
    ).join('')
  }, [])
  return <div className={styles.ticker}><div className={styles.track} ref={ref} /></div>
}
