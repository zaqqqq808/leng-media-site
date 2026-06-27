'use client'
import { useRef, useState } from 'react'
import styles from './page.module.css'

interface VideoTestimonial {
  src: string
  name: string
  stat: string
  snippet: string
}

function VideoCard({ v, index }: { v: VideoTestimonial; index: number }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const handlePlay = () => {
    ref.current?.play()
    setPlaying(true)
  }

  return (
    <div className={styles.videoCard} data-index={index}>
      <div className={styles.videoInner}>
        <video
          ref={ref}
          src={v.src}
          poster={v.src.replace('.mp4', '-poster.jpg')}
          preload="none"
          playsInline
          controls={playing}
          onEnded={() => setPlaying(false)}
          onPause={() => setPlaying(false)}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        {!playing && (
          <>
            <div className={styles.videoPlayBtn} onClick={handlePlay}>
              <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L13 8L1 15V1Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
            </div>
            <div className={styles.videoGradient}>
              <div className={styles.videoStatChip}>{v.stat}</div>
              <p className={styles.videoSnippet}>&ldquo;{v.snippet}&rdquo;</p>
              <div className={styles.videoPersonName}>{v.name}</div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default function VideoTestimonialsCarousel({ items }: { items: VideoTestimonial[] }) {
  return (
    <div className={styles.videoCarouselTrack}>
      <div className={styles.videoCarousel}>
        {items.map((v, i) => (
          <VideoCard key={i} v={v} index={i} />
        ))}
      </div>
    </div>
  )
}
