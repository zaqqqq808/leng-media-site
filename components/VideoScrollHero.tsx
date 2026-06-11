'use client'

import { useEffect, useRef } from 'react'
import styles from './VideoScrollHero.module.css'

export default function VideoScrollHero({ children }: { children: React.ReactNode }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const video = videoRef.current
    const container = containerRef.current
    if (!video || !container) return

    const isMobile = window.matchMedia('(max-width: 768px)').matches

    if (isMobile) {
      // On mobile: auto-play looping — no scroll scrub
      video.loop = true
      video.play().catch(() => {})
      return
    }

    // Desktop: scrub video.currentTime with scroll position
    const update = () => {
      const rect = container.getBoundingClientRect()
      const scrolled = -rect.top
      const scrollRange = container.offsetHeight - window.innerHeight
      if (scrolled >= 0 && scrolled <= scrollRange && video.readyState >= 2) {
        video.currentTime = (scrolled / scrollRange) * video.duration
      }
    }

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update()

    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.sticky}>
        <video
          ref={videoRef}
          className={styles.video}
          src="/hero-website.mp4"
          muted
          playsInline
          preload="auto"
        />
        <div className={styles.grid} />
        <div className={styles.scanlines} />
        <div className={styles.vignette} />
        <div className={styles.overlay}>{children}</div>
        <div className={styles.scrollHint} aria-hidden>
          <span className={styles.scrollHintText}>scroll to reveal</span>
          <span className={styles.scrollHintArrow}>↓</span>
        </div>
      </div>
    </div>
  )
}
