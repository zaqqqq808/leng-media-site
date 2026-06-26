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
          preload="none"
          playsInline
          controls={playing}
          onEnded={() => setPlaying(false)}
          onPause={() => setPlaying(false)}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        {!playing && (
          <>
            <div className={styles.videoPlayBtn} onClick={handlePlay}>▶</div>
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
