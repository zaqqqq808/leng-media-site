'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { UserButton } from '@clerk/nextjs'
import styles from './layout.module.css'

const NAV = [
  { href: '/members',                     label: 'Dashboard',          icon: '⊞' },
  { href: '/members/ai-course',           label: 'AI Course',          icon: '◈' },
  { href: '/members/ecommerce-protocol',  label: 'Ecommerce Protocol', icon: '◉' },
]

export default function MembersLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname()

  return (
    <div className={styles.shell}>
      {/* ── SIDEBAR ── */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarTop}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoMark}>LM</span>
            <span className={styles.logoText}>Members</span>
          </Link>

          <nav className={styles.nav}>
            <span className={styles.navLabel}>// Your content</span>
            {NAV.map(n => (
              <Link
                key={n.href}
                href={n.href}
                className={`${styles.navItem} ${path === n.href ? styles.navActive : ''}`}
              >
                <span className={styles.navIcon}>{n.icon}</span>
                {n.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className={styles.sidebarBottom}>
          <div className={styles.userRow}>
            <UserButton
              appearance={{
                variables: { colorBackground: '#1a1a1a' },
                elements: { avatarBox: { width: 32, height: 32 } },
              }}
            />
            <span className={styles.accountLabel}>Account</span>
          </div>
          <Link href="/" className={styles.backLink}>← Back to site</Link>
        </div>
      </aside>

      {/* ── MAIN ── */}
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}
