'use client'
import { useEffect, useState } from 'react'
import CalendlyPopupLink from './CalendlyPopupLink'
import WhatsAppLink from './WhatsAppLink'
import styles from './StickyMobileCta.module.css'

export default function StickyMobileCta({ href, whatsappHref }: { href: string; whatsappHref?: string }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`${styles.bar} ${visible ? styles.visible : ''}`}>
      <CalendlyPopupLink href={href} className={styles.btn}>
        Get Your Quote →
      </CalendlyPopupLink>
      {whatsappHref && (
        <WhatsAppLink href={whatsappHref} className={styles.waBtn}>
          WhatsApp
        </WhatsAppLink>
      )}
    </div>
  )
}
