import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="/" className={styles.logo}>
        Leng. <span className={styles.logoSub}>MEDIA</span>
      </Link>
      <span className={styles.copy}>© {new Date().getFullYear()} Leng Media. All rights reserved.</span>
    </footer>
  )
}
