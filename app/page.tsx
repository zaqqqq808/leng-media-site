import styles from './page.module.css'
import BlobCanvas from '@/components/BlobCanvas'
import Ticker from '@/components/Ticker'
import ScrollReveal from '@/components/ScrollReveal'
import Typewriter from '@/components/Typewriter'
import ClientLogo from '@/components/ClientLogo'
import Link from 'next/link'

export const metadata = {
  title: 'Leng Media – Performance Marketing & AI Agency for Ecommerce Brands',
  description: 'London performance marketing agency. We scale DTC brands through paid ads, AI solutions and SEO — trusted by Nat Geo Traveller, Skin+Me and leading ecommerce brands.',
  alternates: {
    canonical: 'https://www.lengmedia.com',
  },
}

const SERVICES = [
  { num:'01', slug:'direct-response',  name:'Direct Response',           desc:'Meta Ads & creative strategy that converts and scales.' },
  { num:'02', slug:'ai-solutions',     name:'AI Solutions',              desc:'Custom chatbots & workflow automation to supercharge your operations.' },
  { num:'03', slug:'seo',              name:'Ecommerce SEO',             desc:'Technical SEO & intent-driven scaling for ambitious brands.' },
  { num:'04', slug:'lead-generation',  name:'Lead Generation',           desc:'High-quality B2B & B2C prospecting that fills your pipeline.' },
  { num:'05', slug:'cmo-as-a-service', name:'CMO as a Service',          desc:'Executive-level marketing leadership, without the executive price tag.' },
  { num:'06', slug:'website-builds',   name:'Website Building',          desc:'High-converting, performance-first websites built to grow your brand online.' },
  { num:'07', slug:'agency-assist',    name:'Agency Assistance',         desc:'White-label fulfilment support for agencies that need a trusted partner.', gold: true, full: true },
]

const CLIENTS = [
  { name: 'Hims',                          domain: 'hims.com' },
  { name: 'National Geographic Traveller', domain: 'natgeo.com' },
  { name: 'Ninety Percent',               domain: 'ninetypercent.com' },
  { name: 'Horizon Group',                domain: 'horizongroup.co.uk' },
  { name: 'APL Media',                    domain: 'aplmedia.co.uk' },
  { name: 'Skin + Me',                    domain: 'skinandme.com' },
]

const RESOURCES = [
  { name:'GDN Ad Specs Cheat Sheet',            href:'/free-tools', free:true },
  { name:'AI For Ecommerce Cheat Sheet',         href:'/free-tools', free:true },
  { name:'AI For Ecommerce Tutorial',            href:'/free-tools', free:false },
  { name:'Ecommerce Protocol',                   href:'/free-tools', free:false },
  { name:'AI for Ecommerce Skool',               href:'/free-tools', free:false },
]

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroGrid} />
        <div className={styles.heroScanlines} />
        <div className={styles.heroVignette} />
        <div className={styles.heroContent}>
          <h1>
            <span className={styles.heroLine1}>We scale</span>
            <span className={styles.heroLine2}>BRANDS.</span>
          </h1>
          <div className={styles.heroDivider} />
          <p className={styles.heroPrompt}>&gt; a track record of:</p>
          <Typewriter />
          <p className={styles.heroTagline}>Performance marketing for ambitious brands. Human strategy, modern tools.</p>
          <div className={styles.heroCtas}>
            <Link href="/business-enquiry" className="btn-primary">Let&apos;s Talk</Link>
            <Link href="#services" className="btn-ghost">Explore services <span>→</span></Link>
          </div>
        </div>
        <div className={styles.blobWrap}><BlobCanvas /></div>
      </section>

      {/* ── TICKER ── */}
      <Ticker />

      {/* ── CLIENTS ── */}
      <section className={styles.clients}>
        <ScrollReveal style={{marginBottom:36}}>
          <span className="section-label">// 01 — Trusted by</span>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <div className={styles.clientGrid}>
            {CLIENTS.map(c => (
              <div key={c.name} className={styles.clientLogo}>
                <ClientLogo name={c.name} domain={c.domain} />
              </div>
            ))}
          </div>
        </ScrollReveal>
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

      {/* ── SERVICES ── */}
      <section className={styles.services} id="services">
        <ScrollReveal className={styles.servicesHeader}>
          <span className="section-label">// 02 — What we do</span>
          <h2 className="section-title">Our Services.</h2>
        </ScrollReveal>
        <div className={styles.servicesGrid}>
          {SERVICES.map((s, i) => (
            <ScrollReveal key={s.slug} delay={((i % 3) + 1) as 1|2|3} className={s.full ? styles.scFull : ''}>
              <Link href={`/services/${s.slug}`} data-num={s.num} className={`${styles.serviceCard}${s.gold ? ' '+styles.scGold : ''}`}>
                <span className={styles.scNum}>{s.num}</span>
                <span className={styles.scName}>{s.name}</span>
                <p className={styles.scDesc}>{s.desc}</p>
                <span className={styles.scArrow}>↗</span>
              </Link>
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
          <h2 className="section-title">Want to <em>chat?</em></h2>
          <p className={styles.ctaSub}>Let&apos;s build something remarkable together</p>
          <Link href="/business-enquiry" className="btn-primary" style={{fontSize:12,padding:'18px 52px'}}>Book a Call</Link>
        </ScrollReveal>
      </section>
    </>
  )
}
