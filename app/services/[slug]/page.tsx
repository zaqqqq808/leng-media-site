import { notFound } from 'next/navigation'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import Ticker from '@/components/Ticker'
import styles from './page.module.css'

const SERVICES: Record<string, {
  num: string
  name: string
  tagline: string
  description: string[]
  outcomes: string[]
  related: string[]
}> = {
  'ai-solutions': {
    num: '01',
    name: 'AI Solutions & Automation',
    tagline: 'Work smarter. Scale faster. Let machines handle the machine work.',
    description: [
      'We design and deploy custom AI systems that remove bottlenecks, automate repetitive workflows, and give your team back the hours they spend on things that should run themselves.',
      'From intelligent chatbots that convert 24/7, to backend automations that connect your tools — we build AI infrastructure that compounds over time.',
    ],
    outcomes: ['Custom GPT-powered chatbots & sales assistants','CRM & email workflow automation','AI content pipelines','Tool integrations (Make, Zapier, n8n)','Bespoke AI strategy & roadmapping'],
    related: ['direct-response','cmo-as-a-service'],
  },
  'direct-response': {
    num: '02',
    name: 'Direct Response',
    tagline: 'Ads that don\'t just look good. Ads that work.',
    description: [
      'We run Meta advertising campaigns engineered from first principles — audience research, creative strategy, and rigorous testing that drives measurable return.',
      'Every campaign is built around one goal: profitable growth. No vanity metrics. No brand awareness fluff. Just spend going in, revenue coming out.',
    ],
    outcomes: ['Meta Ads (Facebook & Instagram)','Creative strategy & production briefs','Audience research & segmentation','A/B testing frameworks','Monthly performance reporting'],
    related: ['ai-solutions','lead-generation'],
  },
  'seo': {
    num: '03',
    name: 'Ecommerce SEO',
    tagline: 'Organic growth that compounds while you sleep.',
    description: [
      'Technical SEO for ecommerce brands that want to own their category. We fix what\'s broken, build what\'s missing, and create content that ranks for the searches that actually convert.',
      'We understand the architecture of modern ecommerce platforms and how search engines reward intent-matched content at scale.',
    ],
    outcomes: ['Technical SEO audit & remediation','Category & product page optimisation','Intent-driven content strategy','Link building & digital PR','Core Web Vitals & performance'],
    related: ['direct-response','ai-solutions'],
  },
  'lead-generation': {
    num: '04',
    name: 'Lead Generation',
    tagline: 'A full pipeline of qualified prospects. Consistently.',
    description: [
      'We build systematic lead generation engines for B2B and B2C brands — combining outbound strategy, paid acquisition, and conversion optimisation into a repeatable system.',
      'Not one-off campaigns. A machine that fills your pipeline month after month with people who are actually ready to buy.',
    ],
    outcomes: ['Outbound sequencing & cold outreach','LinkedIn lead generation','Lead magnet & funnel design','Landing page optimisation','CRM pipeline setup & management'],
    related: ['direct-response','cmo-as-a-service'],
  },
  'cmo-as-a-service': {
    num: '05',
    name: 'CMO as a Service',
    tagline: 'Senior marketing leadership. Without the senior hire.',
    description: [
      'Get the strategic thinking and execution oversight of an experienced CMO — fractionally, at a fraction of the cost of a full-time hire.',
      'We embed into your business, align your marketing to your commercial goals, manage your channels, and hold the team accountable. Ideal for scaling businesses that need direction, not just delivery.',
    ],
    outcomes: ['Marketing strategy & roadmap','Channel ownership & vendor management','Team leadership & accountability','Board-level reporting','Growth experiments & OKR frameworks'],
    related: ['ai-solutions','agency-assist'],
  },
  'agency-assist': {
    num: '06',
    name: 'Agency Assist',
    tagline: 'The silent partner behind your best work.',
    description: [
      'White-label fulfilment for agencies that need a trusted partner on the tools. We deliver under your brand — Meta Ads, SEO, content, automation — so you can take on more without hiring.',
      'No client poaching. No conflict of interest. Just reliable, high-quality delivery that makes you look exceptional.',
    ],
    outcomes: ['White-label Meta Ads management','SEO & content production','AI & automation builds','Flexible capacity — project or retainer','Full NDA & confidentiality'],
    related: ['direct-response','seo'],
  },
}

const ALL_SERVICES = [
  { slug: 'ai-solutions',     name: 'AI Solutions & Automation' },
  { slug: 'direct-response',  name: 'Direct Response' },
  { slug: 'seo',              name: 'Ecommerce SEO' },
  { slug: 'lead-generation',  name: 'Lead Generation' },
  { slug: 'cmo-as-a-service', name: 'CMO as a Service' },
  { slug: 'agency-assist',    name: 'Agency Assist' },
]

export async function generateStaticParams() {
  return Object.keys(SERVICES).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const s = SERVICES[slug]
  if (!s) return {}
  return { title: `${s.name} – Leng Media`, description: s.tagline }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const s = SERVICES[slug]
  if (!s) notFound()

  const related = s.related.map(r => ALL_SERVICES.find(a => a.slug === r)).filter(Boolean)

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroGrid} />
        <div className={styles.heroScanlines} />
        <div className={styles.heroContent}>
          <Link href="/#services" className={styles.back}>← All Services</Link>
          <p className={styles.num}>{s.num} / 06</p>
          <h1 className={styles.title}>{s.name}</h1>
          <p className={styles.tagline}>{s.tagline}</p>
          <Link href="/business-enquiry" className="btn-primary" style={{marginTop:40,display:'inline-block'}}>
            Start a Project
          </Link>
        </div>
      </section>

      <Ticker />

      {/* BODY */}
      <section className={styles.body}>
        <div className={styles.bodyLeft}>
          <ScrollReveal>
            <span className="section-label">// Overview</span>
            <h2 className="section-title" style={{marginBottom:36}}>What we do.</h2>
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

      {/* RELATED */}
      {related.length > 0 && (
        <section className={styles.related}>
          <ScrollReveal>
            <span className="section-label">// Related Services</span>
            <h2 className="section-title" style={{marginBottom:48}}>You may also need.</h2>
          </ScrollReveal>
          <div className={styles.relatedGrid}>
            {related.map((r, i) => r && (
              <ScrollReveal key={r.slug} delay={(i+1) as 1|2}>
                <Link href={`/services/${r.slug}`} className={styles.relatedCard}>
                  <span className={styles.relatedName}>{r.name}</span>
                  <span className={styles.relatedArrow}>↗</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className={styles.cta}>
        <ScrollReveal>
          <span className="section-label">// Get in touch</span>
          <h2 className="section-title">Ready to <em>launch?</em></h2>
          <p className={styles.ctaSub}>Let&apos;s talk about what {s.name.toLowerCase()} can do for your brand</p>
          {/* TODO: Replace with your Calendly link */}
          <Link href="/business-enquiry" className="btn-primary" style={{fontSize:12,padding:'18px 52px'}}>Book a Call</Link>
        </ScrollReveal>
      </section>
    </>
  )
}
