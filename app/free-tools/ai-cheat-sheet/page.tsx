import Link from 'next/link'
import styles from './page.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI for Ecommerce Cheat Sheet – Leng Media',
  description: 'The exact AI tools and prompts we use to grow ecommerce brands faster. Free reference sheet — no email required.',
}

const SECTIONS = [
  {
    tag: '01 — Content Creation',
    title: 'Images, Video & Audio',
    points: [
      'The best image generator for ads and product visuals',
      'The best video tool for UGC-style and product clips',
      'The best audio tool for narration and voice-over',
    ],
  },
  {
    tag: '02 — Creative Copy',
    title: 'Ads, Email & Product Pages',
    points: [
      'The best AI for long and short-form brand copy',
      'The best tool for matching your existing voice and tone',
      'The best way to polish AI output so it reads like a human wrote it',
    ],
  },
  {
    tag: '03 — CRO',
    title: 'Conversion & Lead Generation',
    points: [
      'The best AI chatbot for capturing and qualifying leads around the clock',
      'The best automation tool to route leads into your CRM and calendar',
    ],
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
          <h2 className={styles.previewTitle}>3 categories. Always updated.</h2>
          <p className={styles.previewSub}>We name the single best AI tool for each job. When something better comes out, we change it. Open the full sheet for the complete breakdown and pro tips.</p>
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
              <span className={styles.notionLink}>Current recommendations in the doc ↗</span>
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
