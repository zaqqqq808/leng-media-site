import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import Ticker from '@/components/Ticker'
import WebsiteFaqAccordion from '@/components/WebsiteFaqAccordion'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'ChatGPT Ads Agency – Leng Media',
  description: 'Leng Media is a ChatGPT ads agency for ecommerce and DTC brands. We run ads inside ChatGPT via Microsoft Advertising and use AI to build smarter creatives across Meta, TikTok and Google.',
  alternates: { canonical: 'https://www.lengmedia.com/chatgpt-ads-agency' },
  openGraph: {
    title: 'ChatGPT Ads Agency – Leng Media',
    description: 'Leng Media is a ChatGPT ads agency for ecommerce and DTC brands. We run ads inside ChatGPT via Microsoft Advertising and use AI to build smarter creatives across Meta, TikTok and Google.',
    url: 'https://www.lengmedia.com/chatgpt-ads-agency',
    siteName: 'Leng Media',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'ChatGPT Ads Agency – Leng Media' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ChatGPT Ads Agency – Leng Media',
    description: 'Leng Media is a ChatGPT ads agency for ecommerce and DTC brands. We run ads inside ChatGPT via Microsoft Advertising and use AI to build smarter creatives across Meta, TikTok and Google.',
    images: ['/og-image.jpg'],
  },
}

const STATS = [
  { value: '3.59×', label: 'Campaign ROAS', sub: '90 purchases · £1,450 spend' },
  { value: '£5,209', label: 'Revenue returned', sub: 'From a single campaign' },
  { value: '4.74×', label: 'Best ad set ROAS', sub: 'Website purchases' },
  { value: '£16.11', label: 'Lowest CPA', sub: 'Per website purchase' },
]

const DELIVERABLES = [
  'ChatGPT ads via Microsoft Advertising — your brand inside AI search results',
  'Meta, TikTok and Google Ads managed alongside your ChatGPT campaigns',
  'AI-powered creative briefs and copy using ChatGPT and Claude',
  'Landing page audit and CRO before a penny is spent on traffic',
  'Rapid A/B testing to find winning angles fast',
  'Monthly reporting tied to revenue, not vanity metrics',
  'Audience research and intent mapping using AI tools',
  'Creative production briefs ready for your in-house team or our network',
]

const FAQ = [
  {
    q: 'What are ChatGPT ads?',
    a: 'ChatGPT now shows sponsored results when users search for products and services. These ads run through Microsoft Advertising and appear to millions of people who are actively searching with AI. It is one of the newest and least competitive paid channels available right now.',
  },
  {
    q: 'How do you run ads on ChatGPT?',
    a: 'ChatGPT ads are set up and managed through Microsoft Advertising, the same platform used for Bing Ads. We build the campaigns, write the copy, set up conversion tracking and optimise performance just as we would on Meta or Google.',
  },
  {
    q: 'Is this different from Google or Meta ads?',
    a: 'Yes. The audience is different — people using ChatGPT to search tend to be higher intent and more research-led. The ad format is also different. We treat it as a separate channel with its own creative strategy, not a copy-paste from your existing campaigns.',
  },
  {
    q: 'What does AI-powered mean for our ad campaigns?',
    a: 'We use ChatGPT and AI tools throughout the process: audience research, copy variations, creative brief generation, angle testing and performance analysis. This means faster iteration and more creative angles tested per budget than a traditional agency.',
  },
  {
    q: 'Do we need to be running ads already?',
    a: 'No. We work with brands starting from scratch and with brands that already have active campaigns. Either way, we run a funnel and landing page audit before anything goes live.',
  },
  {
    q: 'How quickly can we get started?',
    a: 'Book a call and we will come back to you within 24 hours. Campaigns can typically go live within two weeks of kickoff.',
  },
]

export default function ChatGPTAdsAgencyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'ChatGPT Ads Agency',
            description: 'ChatGPT and AI-powered ad campaigns for ecommerce and DTC brands. Ads inside ChatGPT via Microsoft Advertising plus Meta, TikTok and Google managed with AI.',
            url: 'https://www.lengmedia.com/chatgpt-ads-agency',
            provider: {
              '@type': 'Organization',
              name: 'Leng Media',
              url: 'https://www.lengmedia.com',
            },
            serviceType: 'ChatGPT Ads Agency',
            areaServed: [
              { '@type': 'Country', name: 'United Kingdom' },
              { '@type': 'Country', name: 'United States' },
            ],
          }),
        }}
      />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroGrid} />
        <div className={styles.heroScanlines} />
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>Leng Media · AI Ad Agency</span>
          <h1 className={styles.heroTitle}>
            The <em>ChatGPT</em><br />
            Ads Agency.
          </h1>
          <p className={styles.heroSub}>
            Your competitors are bidding on Google. Your customers are searching on ChatGPT.
            We put your brand in front of them — and use AI to build the creatives that convert.
          </p>
          <div className={styles.heroCtas}>
            <a
              href="https://calendly.com/zaq-lengmedia/leng-media-intro-call"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroBtn}
            >
              Book a Free Strategy Call →
            </a>
            <span className={styles.heroNote}>Response within 24 hours</span>
          </div>
        </div>
      </section>

      <Ticker />

      {/* EXPLAINER */}
      <section className={styles.explainer}>
        <ScrollReveal>
          <span className={styles.explainerLabel}>// What we do</span>
          <h2 className={styles.explainerHeading}>Two ways we use AI to get you results.</h2>
        </ScrollReveal>
        <div className={styles.explainerGrid}>
          <ScrollReveal delay={1}>
            <div className={styles.explainerCard}>
              <span className={styles.explainerCardNum}>// 01</span>
              <h3 className={styles.explainerCardTitle}>Ads ON ChatGPT</h3>
              <p className={styles.explainerCardBody}>
                ChatGPT now shows sponsored results when users search for products and services.
                These ads run through Microsoft Advertising and reach millions of people who are
                actively using AI to find what they want to buy. It is one of the newest, least
                saturated paid channels available. Most brands have not found it yet.
                Your brand can be there first.
              </p>
              <span className={styles.explainerCardTag}>Via Microsoft Advertising</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <div className={styles.explainerCard}>
              <span className={styles.explainerCardNum}>// 02</span>
              <h3 className={styles.explainerCardTitle}>Ads built WITH AI</h3>
              <p className={styles.explainerCardBody}>
                We use ChatGPT and AI tools throughout your entire campaign: audience research,
                copy variations, creative briefs, angle testing and performance analysis.
                This means more ideas tested per pound of budget, faster iteration, and
                creative that is informed by data rather than gut feel. The result is campaigns
                that find winning angles faster than a traditional agency ever could.
              </p>
              <span className={styles.explainerCardTag}>Meta · TikTok · Google · ChatGPT</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WHY NOW */}
      <section className={styles.whyNow}>
        <div className={styles.whyNowLeft}>
          <ScrollReveal>
            <span className="section-label">// The opportunity</span>
            <h2 className={styles.whyNowHeading}>ChatGPT has 500 million weekly users. Most brands are not advertising there yet.</h2>
            <p className={styles.whyNowBody}>
              When Google launched, the brands that advertised early paid pennies per click and built
              audiences before the channel became expensive. ChatGPT ads are at that same early stage right now.
              The auction is less competitive, the audience is high intent, and the cost per acquisition
              is a fraction of what it will be in two years.
            </p>
            <p className={styles.whyNowBody}>
              We are not a traditional PPC agency. We are a revenue agency that goes where your customers
              are. Right now, they are on ChatGPT. We will put you in front of them.
            </p>
          </ScrollReveal>
        </div>
        <div className={styles.whyNowRight}>
          <ScrollReveal delay={2}>
            <div className={styles.statGrid}>
              <div className={styles.statBox}>
                <span className={styles.statValue}>500M</span>
                <span className={styles.statLabel}>ChatGPT weekly users</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statValue}>2025</span>
                <span className={styles.statLabel}>Ads launched in ChatGPT</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statValue}>Low</span>
                <span className={styles.statLabel}>Current auction competition</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statValue}>High</span>
                <span className={styles.statLabel}>Buyer intent of AI searchers</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className={styles.deliverables}>
        <ScrollReveal>
          <span className="section-label">// What you get</span>
          <h2 className={styles.deliverablesHeading}>Everything needed to win on AI-powered search.</h2>
        </ScrollReveal>
        <div className={styles.deliverablesGrid}>
          {DELIVERABLES.map((item, i) => (
            <ScrollReveal key={i} delay={(i % 2 === 0 ? 1 : 2) as 1 | 2}>
              <div className={styles.deliverable}>
                <span className={styles.deliverableDot}>◆</span>
                <span className={styles.deliverableText}>{item}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* PROOF */}
      <section className={styles.proof}>
        <ScrollReveal>
          <span className="section-label">// Real results · May–Jun 2025</span>
          <h2 className={styles.proofHeading}>What we have done for ecommerce brands.</h2>
        </ScrollReveal>
        <div className={styles.proofGrid}>
          {STATS.map((s, i) => (
            <ScrollReveal key={i} delay={(i < 2 ? 1 : 2) as 1 | 2}>
              <div className={styles.proofStat}>
                <span className={styles.proofValue}>{s.value}</span>
                <span className={styles.proofLabel}>{s.label}</span>
                <span className={styles.proofSub}>{s.sub}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq}>
        <ScrollReveal>
          <span className="section-label">// Common questions</span>
          <h2 className={styles.faqHeading}>Everything you need to know about ChatGPT advertising.</h2>
        </ScrollReveal>
        <WebsiteFaqAccordion items={FAQ} />
      </section>

      {/* CTA */}
      <section className={`${styles.cta} theme-dark`}>
        <ScrollReveal>
          <span className="section-label">// Get started</span>
          <h2 className="section-title">Be first on <em>ChatGPT.</em></h2>
          <p className={styles.ctaSub}>Book a free strategy call. We will map out exactly what a ChatGPT ad campaign looks like for your brand.</p>
          <a
            href="https://calendly.com/zaq-lengmedia/leng-media-intro-call"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: 12, padding: '18px 52px' }}
          >
            Book a Free Strategy Call →
          </a>
        </ScrollReveal>
      </section>

      {/* RELATED */}
      <section style={{ padding: '60px 52px', background: 'var(--bg)', borderBottom: '1px solid var(--line)' }}>
        <ScrollReveal style={{ marginBottom: 32 }}>
          <span className="section-label">// Related Services</span>
        </ScrollReveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 12 }}>
          {([
            { href: '/services/direct-response', label: 'Direct Response', num: '02' },
            { href: '/services/seo', label: 'Ecommerce SEO', num: '03' },
          ] as { href: string; label: string; num: string }[]).map(r => (
            <Link
              key={r.href}
              href={r.href}
              style={{
                background: 'var(--surface)',
                padding: '32px 36px',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                border: '1px solid var(--line)',
                borderRadius: 6,
              }}
            >
              <div>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '2px', color: 'var(--accent-ink)', textTransform: 'uppercase', marginBottom: 10 }}>{r.num} / 07</p>
                <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 500, fontSize: 18, color: 'var(--ink)' }}>{r.label}</span>
              </div>
              <span style={{ fontSize: 20, color: 'rgba(255,255,255,0.3)' }}>↗</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
