'use client'

declare global {
  interface Window { fbq?: (...args: unknown[]) => void }
}

interface Props {
  href: string
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
}

export default function PixelScheduleLink({ href, className, style, children }: Props) {
  function handleClick() {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Schedule')
    }
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} style={style} onClick={handleClick}>
      {children}
    </a>
  )
}
