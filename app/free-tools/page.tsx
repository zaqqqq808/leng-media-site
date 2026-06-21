import ScrollReveal from '@/components/ScrollReveal'
import Ticker from '@/components/Ticker'
import styles from './page.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Growth Tools – Leng Media',
  description: 'Free ecommerce growth tools, ad spec cheat sheets and AI guides used by our top performing clients. No email required — download and apply immediately.',
}

const TOOLS = [
  {
    name: 'Google Display Network (GDN) Ad Specs Cheat Sheet',
    desc: 'Every ad size, format and spec you need for GDN campaigns in one clean reference sheet.',
    href: '/free-tools/gdn-ad-specs',
    free: true,
    category: 'Advertising',
  },
  {
    name: 'AI For Ecommerce Cheat Sheet',
    desc: 'Every AI tool and prompt that actually works for ecommerce. 6 categories, hundreds of prompts. Free Notion document.',
    href: '/free-tools/ai-cheat-sheet',
    free: true,
    category: 'AI',
  },
  {
    name: 'PPC AI Skills for Claude',
    desc: '12 specialist Claude AI skills for paid media — keyword analysis, ad copy, audits, budget monitoring and more.',
    href: '/free-tools/ppc-ai-skills',
    free: true,
    category: 'PPC',
  },
  {
    name: 'Ecom Launch Protocol',
    desc: 'The full A-Z system for launching and scaling an ecommerce brand in two months.',
    href: '/ecommerce-protocol',
    free: false,
    isPaid: true,
    category: 'Strategy',
  },
  {
    name: 'AI for Ecom SKOOL',
    desc: 'Community driven content covering Meta ads, CRO, sales, lead gen, direct response, branding, content and video AI. All through an ecommerce lens.',
    href: 'https://www.skool.com/ai-for-ecommerce-8645',
    free: false,
    isPaid: true,
    category: 'Community',
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
              <a href={t.href} className={`${styles.toolRow} ${!t.free && !t.isPaid ? styles.toolDimmed : ''}`} {...(t.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...('download' in t && t.download ? { download: t.download } : {})}>
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
              </a>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className={`${styles.cta} theme-dark`}>
        <ScrollReveal>
          <span className="section-label">// Want more?</span>
          <h2 className="section-title">Let&apos;s work<br />together.</h2>
          <p className={styles.ctaSub}>These are just the tools we give away. Imagine what we build for clients.</p>
          <a href="https://calendly.com/zaq-lengmedia/leng-media-intro-call" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{marginTop:40,display:'inline-block'}}>Book a Call</a>
        </ScrollReveal>
      </section>
    </>
  )
}
