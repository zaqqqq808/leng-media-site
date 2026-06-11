'use client'
import { useEffect, useRef } from 'react'
import styles from './Typewriter.module.css'

const PHRASES = ['Scaling DTC brands','Generating quality leads','Maximising ROAS','Increasing Shopify CR%','Making you look good']

export default function Typewriter() {
  const textRef = useRef<HTMLSpanElement>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    let pi = 0, ci = 0, del = false
    let mounted = true

    const type = () => {
      if (!mounted) return
      const ph = PHRASES[pi]
      if (!del) {
        ci++
        if (textRef.current) textRef.current.textContent = ph.slice(0, ci)
        if (ci === ph.length) {
          del = true
          timerRef.current = setTimeout(type, 2200)
          return
        }
      } else {
        ci--
        if (textRef.current) textRef.current.textContent = ph.slice(0, ci)
        if (ci === 0) { del = false; pi = (pi + 1) % PHRASES.length }
      }
      timerRef.current = setTimeout(type, del ? 45 : 85)
    }

    timerRef.current = setTimeout(type, 1600)

    return () => {
      mounted = false
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  return (
    <div className={styles.wrap}>
      <span ref={textRef} />
      <span className={styles.cursor} />
    </div>
  )
}
