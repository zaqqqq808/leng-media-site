'use client'
import { useEffect, useRef } from 'react'
import styles from './Typewriter.module.css'

const PHRASES = ['Scaling DTC brands','Maximising ROAS','Growing Shopify stores','Building ecom revenue','Filling sales pipelines']

export default function Typewriter() {
  const textRef = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    let pi = 0, ci = 0, del = false
    const type = () => {
      const ph = PHRASES[pi]
      if (!del) {
        if (textRef.current) textRef.current.textContent = ph.slice(0, ++ci)
        if (ci === ph.length) { del = true; return setTimeout(type, 2200) }
      } else {
        if (textRef.current) textRef.current.textContent = ph.slice(0, --ci)
        if (ci === 0) { del = false; pi = (pi + 1) % PHRASES.length }
      }
      setTimeout(type, del ? 45 : 85)
    }
    const t = setTimeout(type, 1600)
    return () => clearTimeout(t)
  }, [])
  return (
    <div className={styles.wrap}>
      <span ref={textRef} />
      <span className={styles.cursor} />
    </div>
  )
}
