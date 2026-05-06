'use client'
import { useRef, useState, useCallback, useEffect } from 'react'
import styles from './BeforeAfterSlider.module.css'

interface Props {
  before: string
  after: string
  beforeLabel?: string
  afterLabel?: string
}

export default function BeforeAfterSlider({
  before,
  after,
  beforeLabel = 'BEFORE',
  afterLabel = 'AFTER',
}: Props) {
  const [position, setPosition] = useState(50)
  const [containerWidth, setContainerWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  useEffect(() => {
    if (!containerRef.current) return
    const update = () => setContainerWidth(containerRef.current!.offsetWidth)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [])

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const pct = Math.max(2, Math.min(98, ((clientX - rect.left) / rect.width) * 100))
    setPosition(pct)
  }, [])

  const onMouseDown = (e: React.MouseEvent) => { e.preventDefault(); dragging.current = true }
  const onMouseMove = (e: React.MouseEvent) => { if (dragging.current) updatePosition(e.clientX) }
  const onMouseUp = () => { dragging.current = false }
  const onTouchMove = (e: React.TouchEvent) => { e.preventDefault(); updatePosition(e.touches[0].clientX) }

  return (
    <div
      ref={containerRef}
      className={styles.container}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      <img src={after} alt={afterLabel} className={styles.imgBase} draggable={false} />
      <div className={styles.clip} style={{ width: `${position}%` }}>
        <img
          src={before}
          alt={beforeLabel}
          className={styles.imgOverlay}
          style={{ width: containerWidth > 0 ? containerWidth : '100%' }}
          draggable={false}
        />
      </div>
      <div
        className={styles.divider}
        style={{ left: `${position}%` }}
        onMouseDown={onMouseDown}
        onTouchStart={(e) => e.preventDefault()}
        onTouchMove={onTouchMove}
      >
        <div className={styles.handle}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M6 3L2 9l4 6M12 3l4 6-4 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      <span className={styles.labelBefore}>{beforeLabel}</span>
      <span className={styles.labelAfter}>{afterLabel}</span>
    </div>
  )
}
