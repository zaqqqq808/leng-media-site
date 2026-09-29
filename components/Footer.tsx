import Link from 'next/link'
import styles from './Footer.module.css'
import { SERVICE_LINKS, RESOURCE_LINKS, COURSE_LINKS, COMPANY_LINKS, type SiteLink } from '@/lib/site-links'

const COLUMNS: { heading: string; links: SiteLink[] }[] = [
  { heading: 'Services', links: SERVICE_LINKS },
  { heading: 'Resources', links: RESOURCE_LINKS },
  { heading: 'Courses', links: COURSE_LINKS },
  { heading: 'Company', links: COMPANY_LINKS },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.columns} aria-label="Footer">
        {COLUMNS.map(col => (
          <div key={col.heading} className={styles.column}>
            <span className={styles.heading}>// {col.heading}</span>
            <ul className={styles.list}>
              {col.links.map(l => (
                <li key={l.href}><Link href={l.href} className={styles.link}>{l.label}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
      <div className={styles.bottom}>
        <Link href="/" className={styles.logo}>
          Leng. <span className={styles.logoSub}>MEDIA</span>
        </Link>
        <span className={styles.copy}>© {new Date().getFullYear()} Leng Media. All rights reserved.</span>
      </div>
    </footer>
  )
}
