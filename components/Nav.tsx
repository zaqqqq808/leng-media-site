'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './Nav.module.css'
import { SERVICE_LINKS } from '@/lib/site-links'

// Sign In / Sign Up are plain links to the Clerk pages rather than Clerk's
// modal buttons, so the login system only loads where it's used (members,
// login, checkout) instead of on every marketing page.

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
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
          <li className={styles.hasMenu}>
            <Link href="/#services" aria-haspopup="true">Services</Link>
            <div className={styles.dropdown}>
              <ul className={styles.dropdownInner}>
                {SERVICE_LINKS.map(l => (
                  <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
                ))}
              </ul>
            </div>
          </li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/free-tools">Resources</Link></li>
          <li><Link href="/ecommerce-protocol" className={styles.course}>Ecom Launch Protocol</Link></li>
          <li><Link href="/business-enquiry" className={styles.enquiry}>Business Enquiry</Link></li>
          <li className={styles.authControls}>
            <Link href="/login" className={styles.signIn}>Sign In</Link>
            <Link href="/sign-up" className={styles.signUp}>Sign Up</Link>
          </li>
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
          <li>
            <Link href="/#services" onClick={close}>Services</Link>
            <ul className={styles.mobileSubLinks}>
              {SERVICE_LINKS.map(l => (
                <li key={l.href}><Link href={l.href} onClick={close}>{l.label}</Link></li>
              ))}
            </ul>
          </li>
          <li><Link href="/blog" onClick={close}>Blog</Link></li>
          <li><Link href="/free-tools" onClick={close}>Resources</Link></li>
          <li><Link href="/ecommerce-protocol" className={styles.mobileCourse} onClick={close}>Ecom Launch Protocol</Link></li>
          <li><Link href="/business-enquiry" className={styles.mobileEnquiry} onClick={close}>Business Enquiry</Link></li>
        </ul>
      </div>
    </>
  )
}
