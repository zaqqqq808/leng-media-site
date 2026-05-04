'use client'
import { useEffect, useRef } from 'react'
import styles from './Ticker.module.css'

const ITEMS = ['AI Solutions','Direct Response','Ecommerce SEO','Lead Generation','CMO as a Service','Agency Assist','Meta Ads','Growth Hacking','Brand Strategy','Automation','London']

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
