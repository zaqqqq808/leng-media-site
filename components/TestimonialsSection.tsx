'use client'
import { useRef, useState } from 'react'
import ScrollReveal from './ScrollReveal'
import styles from './TestimonialsSection.module.css'

const TESTIMONIALS = [
  { src: '/testimonial-1.mp4', name: 'Client Name', role: 'Founder, Company' },
  { src: '/testimonial-2.mp4', name: 'Client Name', role: 'Founder, Company' },
  { src: '/testimonial-3.mp4', name: 'Client Name', role: 'Founder, Company' },
  { src: '/testimonial-4.mp4', name: 'Client Name', role: 'Founder, Company' },
]

function VideoCard({ src, name, role }: { src: string; name: string; role: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const handlePlay = () => {
    ref.current?.play()
    setPlaying(true)
  }

  return (
    <div className={styles.card}>
      <video
        ref={ref}
        src={src}
        preload="none"
        playsInline
        controls={playing}
        onEnded={() => setPlaying(false)}
        onPause={() => setPlaying(false)}
        className={styles.video}
      />
      {!playing && (
        <div className={styles.overlay} onClick={handlePlay}>
          <button className={styles.playBtn} aria-label="Play testimonial">
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
          <div className={styles.cardInfo}>
            <span className={styles.clientName}>{name}</span>
            <span className={styles.clientRole}>{role}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section className={styles.section}>
      <ScrollReveal className={styles.header}>
        <span className="section-label">// 03 — Social proof</span>
        <h2 className="section-title">Heard it from<br /><em>them.</em></h2>
      </ScrollReveal>
      <div className={styles.grid}>
        {TESTIMONIALS.map((t, i) => (
          <ScrollReveal key={i} delay={((i % 2) + 1) as 1 | 2}>
            <VideoCard {...t} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
