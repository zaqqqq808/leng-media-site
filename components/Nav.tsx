'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './Nav.module.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <Link href="/" className={styles.logo} onClick={close}>
          <span className={styles.logoMain}>Leng.</span>
          <span className={styles.logoSub}>MEDIA</span>
        </Link>

        {/* Desktop links */}
        <ul className={styles.links}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/#services">Services</Link></li>
          <li><Link href="/free-tools">Resources</Link></li>
          <li><Link href="/ecommerce-protocol" className={styles.course}>The Ecommerce Protocol</Link></li>
          <li><Link href="/business-enquiry" className={styles.enquiry}>Business Enquiry</Link></li>
        </ul>

        {/* Hamburger */}
        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ''}`}>
        <ul className={styles.mobileLinks}>
          <li><Link href="/" onClick={close}>Home</Link></li>
          <li><Link href="/#services" onClick={close}>Services</Link></li>
          <li><Link href="/free-tools" onClick={close}>Resources</Link></li>
          <li><Link href="/ecommerce-protocol" className={styles.mobileCourse} onClick={close}>The Ecommerce Protocol</Link></li>
          <li><Link href="/business-enquiry" className={styles.mobileEnquiry} onClick={close}>Business Enquiry</Link></li>
        </ul>
      </div>
    </>
  )
}
