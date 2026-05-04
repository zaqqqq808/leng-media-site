import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="/" className={styles.logo}>
        Leng. <span className={styles.logoSub}>MEDIA</span>
      </Link>
      <span className={styles.copy}>© {new Date().getFullYear()} Leng Media. All rights reserved.</span>
      <div className={styles.links}>
        <a href="https://instagram.com/lengmedia" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <Link href="/business-enquiry">Contact</Link>
      </div>
    </footer>
  )
}
