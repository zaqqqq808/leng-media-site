'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './Nav.module.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <Link href="/" className={styles.logo}>
        <span className={styles.logoMain}>Leng.</span>
        <span className={styles.logoSub}>MEDIA</span>
      </Link>
      <ul className={styles.links}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/#services">Services</Link></li>
        <li><Link href="/free-tools">Resources</Link></li>
        <li><Link href="/ecommerce-protocol" className={styles.course}>The Ecommerce Protocol</Link></li>
        <li><Link href="/business-enquiry" className={styles.enquiry}>Business Enquiry</Link></li>
      </ul>
    </nav>
  )
}
