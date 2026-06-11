'use client'

import { useEffect, useRef } from 'react'
import styles from './VideoScrollHero.module.css'

const FRAME_COUNT = 91
const framePath = (i: number) =>
  `/hero-frames/frame-${String(i + 1).padStart(3, '0')}.webp`

export default function VideoScrollHero({ children }: { children: React.ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const images: HTMLImageElement[] = new Array(FRAME_COUNT)
    let currentFrame = -1
    let pendingFrame = 0

    // Draw image cover-fit (like object-fit: cover) at device pixel ratio
    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = 'high'

    const draw = (img: HTMLImageElement) => {
      const { width: cw, height: ch } = canvas
      const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight)
      const dw = img.naturalWidth * scale
      const dh = img.naturalHeight * scale
      ctx.clearRect(0, 0, cw, ch)
      ctx.drawImage(img, (cw - dw) / 2, (ch - dh) / 2, dw, dh)
    }

    const render = () => {
      // If the exact frame isn't loaded yet, fall back to nearest loaded one
      let idx = pendingFrame
      if (!images[idx]?.complete) {
        for (let d = 1; d < FRAME_COUNT; d++) {
          if (images[idx - d]?.complete) { idx = idx - d; break }
          if (images[idx + d]?.complete) { idx = idx + d; break }
        }
      }
      if (images[idx]?.complete && idx !== currentFrame) {
        draw(images[idx])
        currentFrame = idx
      }
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = canvas.offsetWidth * dpr
      canvas.height = canvas.offsetHeight * dpr
      currentFrame = -1
      render()
    }

    const update = () => {
      const rect = container.getBoundingClientRect()
      const scrollRange = container.offsetHeight - window.innerHeight
      const progress = Math.min(Math.max(-rect.top / scrollRange, 0), 1)
      pendingFrame = Math.min(Math.round(progress * (FRAME_COUNT - 1)), FRAME_COUNT - 1)
      render()
    }

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(update)
    }

    // Load frame 0 first for instant paint, then the rest in order
    const load = (i: number) => {
      const img = new Image()
      img.src = framePath(i)
      img.onload = () => { if (i === pendingFrame || currentFrame === -1) render() }
      images[i] = img
    }
    load(0)
    for (let i = 1; i < FRAME_COUNT; i++) load(i)

    resize()
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.sticky}>
        <canvas ref={canvasRef} className={styles.canvas} />
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
