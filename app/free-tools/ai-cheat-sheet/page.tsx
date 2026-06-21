import Link from 'next/link'
import styles from './page.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI for Ecommerce Cheat Sheet – Leng Media',
  description: 'The exact AI tools and prompts we use to grow ecommerce brands faster. Free reference sheet — no email required.',
}

const SECTIONS = [
  {
    tag: 'Research',
    title: 'Product & Market Research',
    points: ['AI-powered trend spotting', 'Competitor analysis prompts', 'Demand validation frameworks'],
  },
  {
    tag: 'Copy',
    title: 'Ad & Product Copy',
    points: ['High-converting product descriptions', 'Meta ad hooks that stop the scroll', 'Email subject line generators'],
  },
  {
    tag: 'Design',
    title: 'Creative Workflows',
    points: ['Image generation for ads and listings', 'Brand asset creation at scale', 'A/B visual testing with AI'],
  },
  {
    tag: 'Support',
    title: 'Customer Support',
    points: ['Automated reply templates', 'Returns & dispute handling', 'Review response scripts'],
  },
  {
    tag: 'Ops',
    title: 'Operations & Automation',
    points: ['Supplier communication scripts', 'Inventory forecasting prompts', 'SOP generation with AI'],
  },
  {
    tag: 'Ads',
    title: 'Paid Traffic',
    points: ['Meta Ads prompt frameworks', 'TikTok script templates', 'Budget pacing decision trees'],
  },
]

export default function AICheatSheet() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroGrid} />
        <div className={styles.heroScanlines} />
        <div className={styles.heroContent}>
          <p className={styles.sys}><span className={styles.accent}>SYS:</span> FREE RESOURCE // AI</p>
          <h1 className={styles.title}>AI for Ecommerce<br />Cheat Sheet.</h1>
          <p className={styles.sub}>The exact AI tools and prompts we use to grow ecommerce brands faster. Copy our workflow — no email required.</p>
          <div className={styles.actions}>
            <a href="https://ethereal-saturday-a3b.notion.site/AI-Cheat-Sheet-for-Ecom-DTC-2e74354e4a8880b8bc20f0e9ad6ba007" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Open Cheat Sheet ↗
            </a>
            <Link href="/free-tools" className="btn-ghost">← Back to Resources</Link>
          </div>
        </div>
      </section>

      <section className={styles.preview}>
        <div className={styles.previewHeader}>
          <span className={styles.previewLabel}>// WHAT&apos;S INSIDE</span>
          <h2 className={styles.previewTitle}>6 categories. Hundreds of prompts.</h2>
          <p className={styles.previewSub}>Built from 5 years of running ecommerce brands and agencies. Updated as the tools improve.</p>
        </div>
        <div className={styles.sectionsGrid}>
          {SECTIONS.map(s => (
            <div key={s.tag} className={styles.sectionCard}>
              <span className={styles.sectionTag}>{s.tag}</span>
              <h3 className={styles.sectionTitle}>{s.title}</h3>
              <ul className={styles.sectionPoints}>
                {s.points.map(p => (
                  <li key={p}><span className={styles.dot}>—</span>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.ctaRow}>
          <a href="https://ethereal-saturday-a3b.notion.site/AI-Cheat-Sheet-for-Ecom-DTC-2e74354e4a8880b8bc20f0e9ad6ba007" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Open the Full Cheat Sheet in Notion ↗
          </a>
        </div>
      </section>
    </>
  )
}
