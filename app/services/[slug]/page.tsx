import { notFound } from 'next/navigation'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import Ticker from '@/components/Ticker'
import styles from './page.module.css'

const SERVICES: Record<string, {
  num: string
  name: string
  tagline: string
  metaDescription: string
  description: string[]
  outcomes: string[]
  related: string[]
  proof?: {
    funnelTagline: string
    statsLabel: string
    stats: { label: string; value: string; sub: string }[]
    proofImage?: string
  }
}> = {
  'ai-solutions': {
    num: '01',
    name: 'AI Solutions & Automation',
    tagline: 'Improve your conversion rate with higher quality images and lead generation.',
    metaDescription: 'Custom AI chatbots, workflow automation and product image remastering for ambitious brands. Leng Media helps you scale operations and increase conversions with bespoke AI.',
    description: [
      'Turn average product photos into conversion magnets. We use AI to bulk-remaster your entire product catalogue — adding branding elements, improving image quality, and increasing ROAS without the cost of an expensive graphic designer.',
      'Plus, the 24/7 sales rep that never sleeps. Our AI chatbots capture visitor details before they leave your site, book meetings directly into your calendar, sync with your CRM, and hand off a full chat summary to your sales team. One sale per year can cover the entire cost of the software.',
    ],
    outcomes: ['AI product image remastering at scale','24/7 AI chatbot for lead capture & meeting booking','CRM integration & automatic sync','Chat summaries for seamless sales handoff','Bespoke AI strategy & roadmapping'],
    related: ['direct-response','cmo-as-a-service'],
  },
  'direct-response': {
    num: '02',
    name: 'Direct Response',
    tagline: 'Ads that generate positive ROAS.',
    metaDescription: 'Performance marketing agency managing Meta, TikTok and Google Ads for ecommerce brands. We fix the funnel first, then drive consistent positive ROAS across every channel.',
    description: [
      'We fix the funnel first. Most agencies will happily take your money and drive traffic to a site that converts at 0.3%. We refuse to do that. Before a penny is spent on ads, we audit and improve your user experience — moving key purchase drivers above the fold, implementing reviews, FAQs and clear guarantees, and simplifying the path to purchase.',
      'We don\'t identify as a "Facebook Agency" or a "PPC Agency." We identify as a Revenue Agency. We go where your customers are — Meta, TikTok, Google, or wherever the data points. We fit the platform to the strategy, not the other way around. Whether it\'s DTC, Ecom or Lead Generation, we\'ll have the answer.',
    ],
    outcomes: ['Pre-campaign landing page audit & CRO','Meta, TikTok & Google Ads management','Creative strategy & production briefs','Rapid A/B testing to find winners fast','Monthly performance reporting'],
    related: ['ai-solutions','lead-generation'],
    proof: {
      funnelTagline: 'Platform Agnostic. Result Obsessed.',
      statsLabel: '// Real Results · May–Jun 2025',
      stats: [
        { label: 'Campaign ROAS', value: '3.59×', sub: '90 purchases · £1,450 spend' },
        { label: 'Revenue Returned', value: '£5,209', sub: 'From a single campaign' },
        { label: 'Best Ad Set ROAS', value: '4.74×', sub: 'Website purchases' },
        { label: 'Lowest CPA', value: '£16.11', sub: 'Per website purchase' },
      ],
      proofImage: '/roas-proof.png',
    },
  },
  'seo': {
    num: '03',
    name: 'Ecommerce SEO',
    tagline: 'We help Ecom brands rank for transactional keywords, grow organic traffic and get cited by AI models.',
    metaDescription: 'Ecommerce SEO that drives transactional traffic and AI model citations. Leng Media covers technical SEO, collection page optimisation, link building and LLM visibility strategy.',
    description: [
      'SEO for ecommerce brands has a different focus than regular SEO. We prioritise collection pages, reviews, and comparison content — plus a shopping focus when it comes to AI citations and backlinks. We break our process into four stages: Technical Foundation & Audit, Keyword Strategy & On-Page Optimisation, Competitor Intelligence, and Holistic Link Building.',
      'On AI SEO: AI simply scrapes search engines and high-authority websites to generate citations. We ensure your brand gets cited by building a presence on the platforms LLMs feed from — Reddit, Quora, and high-DA blogs — while shifting your keyword focus to mid and bottom-of-funnel transactional terms that capture buyers, not browsers.',
    ],
    outcomes: ['Technical SEO audit & index health fixes','Collection & product page optimisation','Competitor gap analysis','Holistic link building & digital PR','AI citation & LLM optimisation (Reddit, Quora, high-DA)'],
    related: ['direct-response','ai-solutions'],
  },
  'lead-generation': {
    num: '04',
    name: 'Lead Generation',
    tagline: 'The London lead generation agency that only gets paid when you do.',
    metaDescription: 'Zero monthly retainer. London\'s performance-based lead generation agency — you fund the ad spend, we deliver strategy, creatives and results. Revenue share or fixed CPA model.',
    description: [
      'Zero monthly fees. 100% performance based. Stop burning cash on agencies that promise the world and deliver excuses. You cover the ad spend — we cover the expertise, the strategy, and the execution. If we don\'t perform, we don\'t eat.',
      'We design the creatives, write the copy, build the landing pages, and manage campaign optimisation — all at no charge. We agree on a fair revenue split or fixed CPA for every qualified lead or sale we generate. You own all the data. You have nothing to lose.',
    ],
    outcomes: ['Zero monthly retainer — performance-based only','You fund the ad spend directly (Google, Meta, LinkedIn)','We build creatives, copy & landing pages at no charge','Revenue share or fixed CPA model','You own all data and the client relationship'],
    related: ['direct-response','cmo-as-a-service'],
  },
  'cmo-as-a-service': {
    num: '05',
    name: 'CMO as a Service',
    tagline: 'The firepower of a full marketing department. None of the overhead.',
    metaDescription: 'Embedded marketing leadership without the full-time hire. Strategy, execution and reporting — Leng Media\'s CMOaaS replaces your entire marketing function from £15,000/month.',
    description: [
      'Hiring a CMO, a media buyer, a web developer and a strategist costs upwards of £250k a year — before software or ad spend. Leng Media replaces all of that. We step in as your fully embedded marketing engine, taking full ownership of your growth from high-level strategic vision to pixel-perfect execution.',
      'We don\'t advise from the sidelines — we execute. We\'ve helped brands including Hims, National Geographic Traveller, Ninety Percent, and Horizon Group. CMOaaS starts at £15,000/month. Stop managing freelancers. Start scaling.',
    ],
    outcomes: ['Executive strategy, budgeting & roadmap planning','Ad campaigns, CRO, AI automation & tech stack management','Zero training time — we embed from Day 1','Board-level reporting & OKR frameworks','Clients: Hims, National Geographic Traveller, Ninety Percent, Horizon Group'],
    related: ['ai-solutions','agency-assist'],
  },
  'agency-assist': {
    num: '06',
    name: 'Agency Assist',
    tagline: 'Scale your agency without increasing your headcount.',
    metaDescription: 'White-label marketing fulfilment for agencies that need a trusted execution partner. AI, paid media and CRO delivered under your brand with full NDA and weekly reports.',
    description: [
      'Leng Media acts as your silent execution partner. When your internal resources are stretched or you land a client requiring specialised skills you don\'t have in-house, we step in and integrate seamlessly to deliver white-label excellence — so you never have to turn down a contract again.',
      'We do the work. You get the credit. You receive weekly white-label reports and analysis while maintaining 100% control of the client relationship. We can also execute campaigns and train your junior staff to take them over.',
    ],
    outcomes: ['Overflow execution — never turn down a client again','White-label AI, CRO & Paid Media fulfilment','Training & handoffs to your in-house team','Weekly white-label reports & analysis','Full NDA — you maintain 100% client ownership'],
    related: ['direct-response','seo'],
  },
  'website-builds': {
    num: '07',
    name: 'Website Building',
    tagline: 'High-converting websites built to grow your brand online.',
    metaDescription: 'High-converting, performance-first websites for ecommerce and service brands. Built in Shopify or Next.js — fast, analytics-ready and designed to convert from day one.',
    description: [
      'Your website is your most important sales asset — and most agencies treat it as an afterthought. We build performance-first websites for ecommerce and service brands that are fast, conversion-optimised, and designed to grow with you. Every project starts with your commercial goals, not a template.',
      'We don\'t just make things look good — we build for results. Optimised page structure, Core Web Vitals-ready architecture, clear CTAs above the fold, and analytics baked in from day one. Every site we deliver is built to run paid traffic from launch and rank organically over time.',
    ],
    outcomes: [
      'Shopify & Next.js ecommerce builds',
      'Conversion-optimised landing pages',
      'Core Web Vitals & performance-first architecture',
      'Analytics, GTM & full tracking setup',
      'Brand-consistent UI design & copywriting',
    ],
    related: ['direct-response','seo'],
  },
}

function FunnelDiagram() {
  const digital = ['META', 'GOOGLE ADS', 'TIKTOK', 'LINKEDIN', 'DISPLAY']
  const traditional = ['DAYTIME TV', 'PRESS ADS', 'DIRECT MAIL']
  const all = [...digital, ...traditional]
  const px = [55, 160, 268, 375, 468, 568, 682, 800]
  const tx = [215, 272, 332, 390, 448, 505, 563, 622]

  return (
    <svg viewBox="0 0 870 315" style={{width:'100%',maxWidth:870,display:'block',margin:'0 auto'}} aria-label="Platform agnostic funnel — digital and traditional channels">
      {/* Group annotations */}
      <text x="262" y="13" textAnchor="middle" fontFamily="'Courier New',monospace" fontSize="8" fill="rgba(212,255,0,0.6)" letterSpacing="2">// DIGITAL</text>
      <text x="683" y="13" textAnchor="middle" fontFamily="'Courier New',monospace" fontSize="8" fill="rgba(255,255,255,0.32)" letterSpacing="2">// TRADITIONAL</text>

      {/* Divider between groups */}
      <line x1="518" y1="20" x2="518" y2="103" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="3,5" />

      {/* Convergence lines */}
      {all.map((_, i) => (
        <line key={`l${i}`} x1={px[i]} y1={54} x2={tx[i]} y2={106}
          stroke={i < 5 ? 'rgba(212,255,0,0.28)' : 'rgba(255,255,255,0.16)'}
          strokeWidth="1" strokeDasharray="4,4" />
      ))}

      {/* Channel dots */}
      {all.map((_, i) => (
        <circle key={`d${i}`} cx={px[i]} cy={54} r={i < 5 ? 3 : 2.5}
          fill={i < 5 ? '#d4ff00' : 'rgba(255,255,255,0.5)'} opacity={i < 5 ? 0.65 : 0.75} />
      ))}

      {/* Channel labels */}
      {all.map((p, i) => (
        <text key={`p${i}`} x={px[i]} y={38} textAnchor="middle"
          fontFamily="'Courier New',monospace"
          fontSize={i < 5 ? 9 : 8}
          fill={i < 5 ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.3)'}
          letterSpacing="1.5">
          {p}
        </text>
      ))}

      {/* Funnel trapezoid */}
      <polygon points="215,106 628,106 462,228 385,228"
        fill="rgba(212,255,0,0.04)" stroke="rgba(212,255,0,0.55)" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Funnel triangle */}
      <polygon points="385,228 462,228 423,263"
        fill="rgba(212,255,0,0.07)" stroke="rgba(212,255,0,0.55)" strokeWidth="1.5" strokeLinejoin="round" />

      {/* Funnel label */}
      <text x="423" y="161" textAnchor="middle" fontFamily="'Courier New',monospace" fontSize="12" fill="rgba(255,255,255,0.6)" letterSpacing="3">SMART</text>
      <text x="423" y="179" textAnchor="middle" fontFamily="'Courier New',monospace" fontSize="12" fill="rgba(255,255,255,0.6)" letterSpacing="3">STRATEGY</text>

      {/* Output arrow */}
      <line x1="423" y1="267" x2="423" y2="281" stroke="rgba(212,255,0,0.6)" strokeWidth="2" />
      <polygon points="416,278 430,278 423,292" fill="rgba(212,255,0,0.7)" />

      {/* Result label */}
      <text x="423" y="310" textAnchor="middle" fontFamily="'Courier New',monospace" fontSize="13" fill="#d4ff00" letterSpacing="4">ROI {'&'} PROFIT</text>
    </svg>
  )
}

export async function generateStaticParams() {
  return Object.keys(SERVICES).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const s = SERVICES[slug]
  if (!s) return {}
  return {
    title: `${s.name} – Leng Media`,
    description: s.metaDescription,
    alternates: { canonical: `https://www.lengmedia.com/services/${slug}` },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const s = SERVICES[slug]
  if (!s) notFound()

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroGrid} />
        <div className={styles.heroScanlines} />
        <div className={styles.heroContent}>
          <Link href="/#services" className={styles.back}>← All Services</Link>
          <p className={styles.num}>{s.num} / 07</p>
          <h1 className={styles.title}>{s.name}</h1>
          <p className={styles.tagline}>{s.tagline}</p>
        </div>
      </section>

      <Ticker />

      {/* BODY */}
      <section className={styles.body}>
        <div className={styles.bodyLeft}>
          <ScrollReveal>
            <span className="section-label">// Overview</span>
          </ScrollReveal>
          {s.description.map((p, i) => (
            <ScrollReveal key={i} delay={(i+1) as 1|2}>
              <p className={styles.bodyText}>{p}</p>
            </ScrollReveal>
          ))}
        </div>
        <div className={styles.bodyRight}>
          <ScrollReveal delay={2}>
            <span className="section-label">// Deliverables</span>
            <ul className={styles.outcomes}>
              {s.outcomes.map(o => (
                <li key={o} className={styles.outcome}>
                  <span className={styles.outcomeDot}>◆</span>{o}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* PROOF — platform funnel + live results */}
      {s.proof && (
        <>
          <section className={styles.proofFunnel}>
            <ScrollReveal>
              <h2 className={styles.proofHeadline}>{s.proof.funnelTagline}</h2>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <FunnelDiagram />
            </ScrollReveal>
          </section>
          <section className={styles.proofStats}>
            <ScrollReveal style={{marginBottom:40}}>
              <span className="section-label">{s.proof.statsLabel}</span>
            </ScrollReveal>
            <div className={styles.proofGrid}>
              {s.proof.stats.map((stat, i) => (
                <ScrollReveal key={i} delay={(i < 2 ? 1 : 2) as 1|2}>
                  <div className={styles.proofStat}>
                    <span className={styles.proofValue}>{stat.value}</span>
                    <span className={styles.proofLabel}>{stat.label}</span>
                    <span className={styles.proofSub}>{stat.sub}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            {s.proof.proofImage && (
              <ScrollReveal style={{marginTop:2}}>
                <div className={styles.proofImageWrap}>
                  <span className={styles.proofImageLabel}>// Campaign Screenshot · May–Jun 2025</span>
                  <img src={s.proof.proofImage} alt="Meta Ads Manager — May–Jun 2025 campaign results" className={styles.proofImage} />
                </div>
              </ScrollReveal>
            )}
          </section>
        </>
      )}

      {/* RELATED SERVICES */}
      {s.related.length > 0 && (
        <section className={styles.related}>
          <ScrollReveal style={{marginBottom:40}}>
            <span className="section-label">// Related Services</span>
          </ScrollReveal>
          <div className={styles.relatedGrid}>
            {s.related.map(relSlug => {
              const rel = SERVICES[relSlug]
              if (!rel) return null
              return (
                <Link key={relSlug} href={`/services/${relSlug}`} className={styles.relatedCard}>
                  <div>
                    <p style={{fontFamily:'var(--font-mono)',fontSize:'9px',letterSpacing:'2px',color:'var(--neon)',textTransform:'uppercase',marginBottom:10}}>{rel.num} / 07</p>
                    <span className={styles.relatedName}>{rel.name}</span>
                  </div>
                  <span className={styles.relatedArrow}>↗</span>
                </Link>
              )
            })}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className={styles.cta}>
        <ScrollReveal>
          <span className="section-label">// Get in touch</span>
          <h2 className="section-title">Want to <em>chat?</em></h2>
          <p className={styles.ctaSub}>Let&apos;s talk about what {s.name.toLowerCase()} can do for your brand</p>
          {/* TODO: Replace with your Calendly link */}
          <Link href="/business-enquiry" className="btn-primary" style={{fontSize:12,padding:'18px 52px'}}>Book a Call</Link>
        </ScrollReveal>
      </section>
    </>
  )
}
