import styles from './page.module.css'
import BlobCanvas from '@/components/BlobCanvas'
import Ticker from '@/components/Ticker'
import ScrollReveal from '@/components/ScrollReveal'
import Typewriter from '@/components/Typewriter'
import Link from 'next/link'

const SERVICES = [
  { num:'01', slug:'ai-solutions',        name:'AI Solutions & Automation', desc:'Custom chatbots & workflow automation to supercharge your operations.' },
  { num:'02', slug:'direct-response',     name:'Direct Response',           desc:'Meta Ads & creative strategy that converts and scales.' },
  { num:'03', slug:'seo',                 name:'Ecommerce SEO',             desc:'Technical SEO & intent-driven scaling for ambitious brands.' },
  { num:'04', slug:'lead-generation',     name:'Lead Generation',           desc:'High-quality B2B & B2C prospecting that fills your pipeline.' },
  { num:'05', slug:'cmo-as-a-service',    name:'CMO as a Service',          desc:'Executive-level marketing leadership, without the executive price tag.' },
  { num:'06', slug:'agency-assist',       name:'Agency Assist',             desc:'White-label fulfilment support for agencies that need a trusted partner.', gold: true },
  { num:'07', slug:'website-builds',      name:'Website Builds',            desc:'From landing pages to full ecommerce stores — built to perform, not just impress.' },
  { num:'08', slug:'ai-chatbots-agents',  name:'AI Chatbots & Agents',      desc:'Custom AI assistants that qualify leads, answer questions, and close sales 24/7.' },
]

const TESTIMONIALS = [
  { quote:'"Leng Media tripled our Christmas period sales with a clever use of advertising on Facebook and Instagram. They also advised on our CRM which we were underutilising."', name:'Elliot Rees', role:'CEO' },
  { quote:'"Leng Media is a trusted partner to APL Media and provides us with digital media buying, advice, insights and solutions across editorial and commercial campaigns."', name:'Chris Debinney-Wright', role:'Commercial Director, APL Media' },
  { quote:'"Leng Media created two of our websites and all social accounts, as well as engaging content. We gained thousands of new followers and hundreds of sales. Very grateful."', name:'Hiro Bharwani', role:'CEO' },
]

const RESOURCES = [
  { name:'GDN Ad Specs Cheat Sheet',            href:'/free-tools', free:true },
  { name:'AI For Ecommerce Cheat Sheet',         href:'/free-tools', free:true },
  { name:'AI For Ecommerce Tutorial',            href:'/free-tools', free:false },
  { name:'Ecommerce Protocol',                   href:'/free-tools', free:false },
  { name:'AI for Ecommerce School & Community',  href:'/free-tools', free:false },
]

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroGrid} />
        <div className={styles.heroScanlines} />
        <div className={styles.heroVignette} />
        <div className={styles.dataTags}>
          <span className={`${styles.dataTag} ${styles.dt1}`}>STATUS: ACTIVE</span>
          <span className={`${styles.dataTag} ${styles.dt2}`}>SECTOR: DIGITAL</span>
          <span className={`${styles.dataTag} ${styles.dt3}`}>REGION: LONDON</span>
          <span className={`${styles.dataTag} ${styles.dt4}`}>MODE: GROWTH</span>
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroSys}>
            <span className={styles.accent}>SYS:</span>
            <span>LENG.MEDIA_2050 // AI + GROWTH</span>
            <div className={styles.progressWrap}>
              <div className={styles.progressBar}><div className={styles.progressFill} /></div>
              <span className={styles.progressPct}>82%</span>
            </div>
          </div>
          <span className={styles.heroLine1}>Digital</span>
          <span className={styles.heroLine2}>ARCHITECTS.</span>
          <div className={styles.heroDivider} />
          <p className={styles.heroPrompt}>&gt; a track record of:</p>
          <Typewriter />
          <p className={styles.heroTagline}>London-based A.I. &amp; growth hacking agency</p>
          <div className={styles.heroCtas}>
            <Link href="/business-enquiry" className="btn-primary">Let&apos;s Talk</Link>
            <Link href="#services" className="btn-ghost">Explore services <span>→</span></Link>
          </div>
        </div>
        <div className={styles.blobWrap}><BlobCanvas /></div>
      </section>

      {/* ── TICKER ── */}
      <Ticker />

      {/* ── SERVICES ── */}
      <section className={styles.services} id="services">
        <div className={styles.servicesHeader}>
          <ScrollReveal>
            <span className="section-label">// 01 — What we do</span>
            <h2 className="section-title">Our Services.</h2>
          </ScrollReveal>
          <ScrollReveal className={styles.servicesHeaderRight} delay={2}>
            Eight disciplines. One agency. Engineered to accelerate your brand.
          </ScrollReveal>
        </div>
        <div className={styles.servicesGrid}>
          {SERVICES.map((s, i) => (
            <ScrollReveal key={s.slug} delay={((i % 4) + 1) as 1|2|3|4}>
              <Link href={`/services/${s.slug}`} className={`${styles.serviceCard}${s.gold ? ' '+styles.scGold : ''}`}>
                <span className={styles.scNum}>{s.num}</span>
                <span className={styles.scName}>{s.name}</span>
                <p className={styles.scDesc}>{s.desc}</p>
                <span className={styles.scArrow}>↗</span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── STATS ── */}
      <div className={styles.stats}>
        {[{n:'3',s:'×',l:'Avg. Revenue Growth'},{n:'50',s:'+',l:'Brands Scaled'},{n:'£2',s:'M+',l:'Ad Spend Managed'},{n:'8',s:'yr',l:'Industry Experience'}].map((st,i)=>(
          <ScrollReveal key={st.l} className={styles.stat} delay={(i+1) as 1|2|3|4}>
            <div className={styles.statNum}>{st.n}<em>{st.s}</em></div>
            <span className={styles.statLabel}>{st.l}</span>
          </ScrollReveal>
        ))}
      </div>

      {/* ── TESTIMONIALS ── */}
      <section className={styles.testimonials}>
        <ScrollReveal className={styles.testiHeader}>
          <span className="section-label">// 02 — Social Proof</span>
          <h2 className="section-title">What clients say.</h2>
        </ScrollReveal>
        <div className={styles.testiGrid}>
          {TESTIMONIALS.map((t,i)=>(
            <ScrollReveal key={t.name} className={styles.testi} delay={(i+1) as 1|2|3}>
              <p className={styles.testiText}>{t.quote}</p>
              <span className={styles.testiName}>{t.name}</span>
              <span className={styles.testiRole}>{t.role}</span>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── RESOURCES ── */}
      <section className={styles.resources} id="resources">
        <ScrollReveal className={styles.resourcesLeft}>
          <span className="section-label">// 03 — Resources</span>
          <h2 className="section-title">Free growth<br />tools.</h2>
          <p className={styles.resourcesSub}>Strategies &amp; templates used by our top-performing clients. No gatekeeping — this is just us showing how we think.</p>
          <Link href="/free-tools" className="btn-primary" style={{marginTop:36,display:'inline-block'}}>Access All Tools</Link>
        </ScrollReveal>
        <div className={styles.resourcesItems}>
          {RESOURCES.map(r=>(
            <Link key={r.name} href={r.href} className={styles.resourceRow}>
              <span className={styles.resourceName}>{r.name}</span>
              <span className={`${styles.resourceBadge} ${r.free ? styles.badgeFree : styles.badgeSoon}`}>{r.free?'Free':'Coming Soon'}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta} id="contact">
        <ScrollReveal>
          <span className="section-label">// 04 — Get in touch</span>
          <h2 className="section-title">Ready to <em>launch?</em></h2>
          <p className={styles.ctaSub}>Let&apos;s build something remarkable together</p>
          <Link href="/business-enquiry" className="btn-primary" style={{fontSize:12,padding:'18px 52px'}}>Book a Call</Link>
        </ScrollReveal>
      </section>
    </>
  )
}
