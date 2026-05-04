'use client'
import { useEffect, useRef, ReactNode, CSSProperties } from 'react'

interface Props {
  children: ReactNode
  className?: string
  delay?: 1|2|3|4|5|6
  style?: CSSProperties
}

export default function ScrollReveal({ children, className = '', delay, style }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('visible'); io.unobserve(el) }
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={ref} style={style}
      className={`reveal${delay ? ` reveal-d${delay}` : ''} ${className}`}>
      {children}
    </div>
  )
}
