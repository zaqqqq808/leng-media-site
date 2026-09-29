import { currentUser } from '@clerk/nextjs/server'
import Link from 'next/link'
import styles from './dashboard.module.css'

const ALL_PRODUCTS = [
  {
    id: 'ai-course',
    name: 'AI for Ecommerce Course',
    desc: 'Live 1-on-1 sessions + recorded modules on applying AI to your ecommerce brand.',
    href: '/members/ai-course',
    salesHref: '/ai-course',
    tag: 'COURSE',
    modules: 1,
  },
  {
    id: 'ecommerce-protocol',
    name: 'The Ecommerce Protocol',
    desc: 'The full A-Z system for launching and scaling an ecommerce brand in two months.',
    href: '/members/ecommerce-protocol',
    salesHref: '/ecommerce-protocol',
    tag: 'SYSTEM',
    modules: 6,
  },
]

export default async function MembersDashboard() {
  const user = await currentUser()
  const purchases = (user?.publicMetadata?.purchases as string[]) ?? []
  const firstName = user?.firstName ?? 'there'

  const owned  = ALL_PRODUCTS.filter(p => purchases.includes(p.id))
  const locked = ALL_PRODUCTS.filter(p => !purchases.includes(p.id))

  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.header}>
        <span className={styles.label}>// Dashboard</span>
        <h1 className={styles.title}>Welcome back, {firstName}.</h1>
        <p className={styles.sub}>Pick up where you left off.</p>
      </div>

      {/* Active courses */}
      {owned.length > 0 && (
        <section className={styles.section}>
          <span className={styles.sectionLabel}>Your products</span>
          <div className={styles.grid}>
            {owned.map(p => (
              <Link key={p.id} href={p.href} className={`${styles.card} ${styles.cardOwned}`}>
                <span className={styles.cardTag}>{p.tag}</span>
                <h2 className={styles.cardName}>{p.name}</h2>
                <p className={styles.cardDesc}>{p.desc}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.cardModules}>{p.modules} module{p.modules !== 1 ? 's' : ''}</span>
                  <span className={styles.cardCta}>Open →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {owned.length === 0 && (
        <div className={styles.emptyState}>
          <p>You don&apos;t have any products yet.</p>
          <Link href="/free-tools" className={styles.emptyLink}>Browse what&apos;s available →</Link>
        </div>
      )}

      {/* Upsells — locked products */}
      {locked.length > 0 && (
        <section className={styles.section}>
          <span className={styles.sectionLabel}>Add to your library</span>
          <div className={styles.grid}>
            {locked.map(p => (
              <div key={p.id} className={`${styles.card} ${styles.cardLocked}`}>
                <span className={styles.cardTag}>{p.tag}</span>
                <div className={styles.lockedBadge}>Locked</div>
                <h2 className={styles.cardName}>{p.name}</h2>
                <p className={styles.cardDesc}>{p.desc}</p>
                <div className={styles.cardFooter}>
                  <Link href={p.salesHref} className={styles.upgradeBtn}>Get Access →</Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
