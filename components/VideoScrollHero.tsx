'use client'

import { useEffect, useRef } from 'react'
import styles from './VideoScrollHero.module.css'

// Frames 81-91 are cut: the AI-generated source flickers there (laces pop
// on and off the shoe), so the scrub ends on the stable exploded view.
const FRAME_COUNT = 80
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
      loadRest()
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(update)
    }

    const load = (i: number) => {
      const img = new Image()
      img.src = framePath(i)
      img.onload = () => { if (i === pendingFrame || currentFrame === -1) render() }
      images[i] = img
      return img
    }

    // Frame 0 is already on screen via the server-rendered poster. The other
    // 79 frames (~3 MB) wait until the page is idle, or until the visitor
    // starts scrolling, so they don't compete with the rest of the page load.
    let restStarted = false
    let idleHandle: number | undefined
    const loadRest = () => {
      if (restStarted) return
      restStarted = true
      for (let i = 1; i < FRAME_COUNT; i++) load(i)
    }
    load(0).onload = () => {
      render()
      // Safari has no requestIdleCallback; fall back to a short timeout there.
      idleHandle = typeof window.requestIdleCallback === 'function'
        ? window.requestIdleCallback(loadRest, { timeout: 2500 })
        : window.setTimeout(loadRest, 1200)
    }

    resize()
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', resize)

    return () => {
      if (idleHandle !== undefined) {
        if (typeof window.cancelIdleCallback === 'function') window.cancelIdleCallback(idleHandle)
        else window.clearTimeout(idleHandle)
      }
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.sticky}>
        {/* First frame as a real image: visible before any JS runs, and the
            canvas (transparent until it draws) paints the same frame over it. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={framePath(0)} alt="" aria-hidden className={styles.poster} fetchPriority="high" />
        <canvas ref={canvasRef} className={styles.canvas} />
        <div className={styles.grid} />
        <div className={styles.scanlines} />
        <div className={styles.vignette} />
        <div className={styles.overlay}>{children}</div>
        <div className={styles.scrollHint} aria-hidden>
          <span className={styles.scrollHintText}>Scroll</span>
          <span className={styles.scrollHintArrow}>↓</span>
        </div>
      </div>
    </div>
  )
}
