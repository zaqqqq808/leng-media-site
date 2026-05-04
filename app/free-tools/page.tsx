import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import Ticker from '@/components/Ticker'
import styles from './page.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Growth Tools – Leng Media',
  description: 'Free resources, templates and guides used by our top-performing clients.',
}

const TOOLS = [
  {
    name: 'Google Display Network (GDN) Ad Specs Cheat Sheet',
    desc: 'Every ad size, format and spec you need for GDN campaigns in one clean reference sheet.',
    href: '#', // TODO: link to actual download
    free: true,
    category: 'Advertising',
  },
  {
    name: 'AI For Ecommerce Cheat Sheet',
    desc: 'The exact AI tools and prompts we use to grow ecommerce brands faster.',
    href: '#', // TODO: link to actual download
    free: true,
    category: 'AI',
  },
  {
    name: 'AI For Ecommerce Tutorial',
    desc: 'A step-by-step video tutorial on applying AI to your ecommerce workflow.',
    href: '#',
    free: false,
    category: 'AI',
  },
  {
    name: 'Ecommerce Protocol',
    desc: 'Our full growth framework for scaling ecommerce brands from 6 to 7 figures.',
    href: '#',
    free: false,
    category: 'Strategy',
  },
  {
    name: 'AI for Ecommerce School & Community',
    desc: 'Structured course + private community for founders using AI to scale their store.',
    href: '#',
    free: false,
    category: 'Course',
    isPaid: true,
  },
]

export default function FreeTools() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroGrid} />
        <div className={styles.heroScanlines} />
        <div className={styles.heroContent}>
          <p className={styles.sys}><span className={styles.accent}>SYS:</span> RESOURCES.LENG.MEDIA // FREE ACCESS</p>
          <h1 className={styles.title}>Resources.</h1>
          <p className={styles.sub}>Strategies &amp; templates used by our top-performing clients. No gatekeeping — this is just us showing how we think.</p>
        </div>
      </section>

      <Ticker />

      <section className={styles.tools}>
        <ScrollReveal>
          <span className="section-label">// Available now</span>
        </ScrollReveal>
        <div className={styles.toolsList}>
          {TOOLS.map((t, i) => (
            <ScrollReveal key={t.name} delay={(Math.min(i+1,6)) as 1|2|3|4|5|6}>
              <Link href={t.href} className={`${styles.toolRow} ${!t.free && !t.isPaid ? styles.toolDimmed : ''}`}>
                <div className={styles.toolLeft}>
                  <span className={styles.toolCategory}>{t.category}</span>
                  <span className={styles.toolName}>{t.name}</span>
                  <p className={styles.toolDesc}>{t.desc}</p>
                </div>
                <div className={styles.toolRight}>
                  {t.isPaid
                    ? <span className={`${styles.badge} ${styles.badgePaid}`}>Paid</span>
                    : t.free
                    ? <span className={`${styles.badge} ${styles.badgeFree}`}>Free ↗</span>
                    : <span className={`${styles.badge} ${styles.badgeSoon}`}>Coming Soon</span>
                  }
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <ScrollReveal>
          <span className="section-label">// Want more?</span>
          <h2 className="section-title">Let&apos;s work<br />together.</h2>
          <p className={styles.ctaSub}>These are just the tools we give away. Imagine what we build for clients.</p>
          <Link href="/business-enquiry" className="btn-primary" style={{marginTop:40,display:'inline-block'}}>Book a Call</Link>
        </ScrollReveal>
      </section>
    </>
  )
}
