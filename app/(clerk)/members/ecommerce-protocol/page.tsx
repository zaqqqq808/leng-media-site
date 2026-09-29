import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import styles from '../course.module.css'

const MODULES = [
  { num: '01', tag: 'RESEARCH',   name: 'Winning Product Algo',     desc: 'Our checklist for finding products that sell before you buy inventory.' },
  { num: '02', tag: 'SOURCING',   name: 'Supplier Black Book',       desc: 'Vetted suppliers who ship fast and reply quickly. Skip the Alibaba scams.' },
  { num: '03', tag: 'BUILD',      name: '4-Hour Shopify Setup',      desc: 'The exact theme settings and apps we use. Click, install, done.' },
  { num: '04', tag: 'LOGISTICS',  name: '3PL & Automation',          desc: 'Automate the shipping. Set it up once, run it forever.' },
  { num: '05', tag: 'TRAFFIC',    name: 'Meta Ads Copy-Paste',       desc: 'Our agency ad structures. Plug in your creative and spend.' },
  { num: '06', tag: 'SCALE',      name: 'CRO & Email Printer',       desc: 'Abandoned cart emails that recover 15% of sales automatically.' },
]

export default async function EcommerceProtocolPage() {
  const user = await currentUser()
  const purchases = (user?.publicMetadata?.purchases as string[]) ?? []

  if (!purchases.includes('ecommerce-protocol')) {
    redirect('/ecommerce-protocol')
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <span className={styles.label}>// The Ecommerce Protocol</span>
        <h1 className={styles.title}>Let&apos;s get you launched.</h1>
        <p className={styles.sub}>
          Work through the modules in order. Each one builds on the last. Do not skip.
        </p>
      </div>

      {/* Mentorship call */}
      <section className={styles.module} style={{ borderColor: 'rgba(212,255,0,0.25)' }}>
        <div className={styles.moduleHeader}>
          <span className={styles.moduleNum}>// Included with your purchase</span>
          <h2 className={styles.moduleName}>Book Your Mentorship Calls</h2>
        </div>
        <p className={styles.moduleDesc}>
          You have 4 bi-weekly 1-on-1 calls with us included. Book the first one now so it is in the diary. Come with questions, share your screen, and we will work through whatever is blocking you.
        </p>
        <a
          href="https://calendly.com/zaq-lengmedia/leng-media-intro-call"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btn}
        >
          Book Call 1 →
        </a>
      </section>

      {/* Module grid */}
      <section>
        <span className={styles.sectionLabel}>// The 6 Modules</span>
        <div className={styles.moduleGrid}>
          {MODULES.map(m => (
            <div key={m.num} className={styles.moduleCard}>
              <span className={styles.moduleCardNum}>{m.num} // {m.tag}</span>
              <h3 className={styles.moduleCardName}>{m.name}</h3>
              <p className={styles.moduleCardDesc}>{m.desc}</p>
              <div className={styles.moduleStatus}>
                <span className={styles.statusDot} />
                Available
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Protocol document */}
      <section className={styles.module} style={{ marginTop: 40 }}>
        <div className={styles.moduleHeader}>
          <span className={styles.moduleNum}>// Full Document</span>
          <h2 className={styles.moduleName}>The Protocol Document</h2>
        </div>
        <p className={styles.moduleDesc}>
          The complete written protocol. All six modules in one Notion document. Read it alongside the calls — this is your reference guide for every decision you make building the brand.
        </p>
        <a
          href="https://www.notion.so"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btnSecondary}
        >
          Open Protocol →
        </a>
        {/* TODO: Replace href above with actual Notion protocol document URL */}
      </section>
    </div>
  )
}
