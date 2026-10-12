import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import Ticker from '@/components/Ticker'
import WebsiteFaqAccordion from '@/components/WebsiteFaqAccordion'
import CalendlyPopupLink from '@/components/CalendlyPopupLink'
import styles from './page.module.css'
import JsonLd from '@/components/JsonLd'
import { breadcrumbJsonLd, pageMetadata, SITE_URL } from '@/lib/seo'

const PATH = '/forum-marketing-agency'
const CALENDLY = 'https://calendly.com/zaq-lengmedia/leng-media-intro-call?utm_campaign=Forum+Marketing+Agency'
const LINK = { color: 'var(--neon)', textDecoration: 'underline' }

export const metadata = pageMetadata({
  title: 'Reddit & Forum Marketing Agency | Forum Advertising – Leng Media',
  description: 'AI trusts real conversations. We ranked the internet’s forums to find where the most valuable discourse happens, then put your brand into it. Forum advertising, organic and paid.',
  path: PATH,
  socialTitle: 'Reddit & Forum Marketing Agency – Leng Media',
})

// How the shortlist was made: each step and how many forums survived it.
const FUNNEL = [
  { count: '50', title: 'Ranked by size', body: 'The 50 biggest discussion forums on the internet, in any language, by monthly users.' },
  { count: '28', title: 'English only', body: 'We removed every forum that doesn’t run in English.' },
  { count: '24', title: 'UK and US audiences', body: 'We removed forums whose readers sit outside the markets our clients sell into, such as Nigeria, Singapore, Canada and Australia.' },
  { count: '5', title: 'Scored and combined', body: 'We scored every remaining forum on two things: how affluent and ready to buy its audience is, and how much of it is open, any-subject discussion that any brand can join. Multiplied together, five clear winners emerged.' },
]

// The result. Score = general-discussion share (0–5) × (audience income +
// buying intent, 0–10), out of 50. UK/US = share of the forum's search
// traffic by country (Ahrefs, October 2026).
const TOP_FIVE = [
  { name: 'Reddit', score: 40, uk: '5%', us: '55%', why: 'The biggest conversation on the internet, with no fixed subject and an affluent, US-led audience. Thousands of threads rank on Google for buying questions in every category.' },
  { name: 'Mumsnet', score: 36, uk: '77%', us: '14%', why: 'Britain’s parents, who control or influence most household spending. Its busiest boards are general chat, so almost any consumer brand has a place in the conversation.' },
  { name: 'Hacker News', score: 27, uk: '–', us: '–', why: 'Engineers, founders and investors: the highest-earning audience of any forum we scored. The place for anything tech, software, media or startup.' },
  { name: 'Quora', score: 20, uk: '4%', us: '50%', why: 'Every question in every category, answered in public. Its answers rank in Google and feed AI answers far beyond its own readers.' },
  { name: 'PistonHeads', score: 18, uk: '81%', us: '10%', why: 'Affluent British enthusiasts, with a busy general section covering money, property, watches and home. Small, but rich.' },
]

const SERVICES = [
  'Starting conversations about your products and services',
  'Starting conversations about your industry, its problems and its future',
  'Replying to questions where your product is the honest answer',
  'Commenting on threads that already rank on Google and feed AI answers',
  'Building momentum and word of mouth around launches',
  'Running Reddit Ads, Quora Ads and forum sponsorships alongside the organic work',
]

const FAQ = [
  {
    q: 'What is forum advertising?',
    a: 'Forum advertising is any way of putting your brand in front of forum readers. It comes in two forms: paid placements, such as Reddit Ads, Quora Ads and sponsored partnerships on forums like Mumsnet, and organic forum marketing, where your brand takes part in the conversation itself. We run both, and most brands get the best results by combining them.',
  },
  {
    q: 'Why do forums matter for AI search?',
    a: 'AI models treat real conversations as evidence: first-hand experience, many independent voices, and answers the community has already voted up or corrected. Reddit licenses its data to Google and OpenAI, and forum threads are among the sources AI answers draw on most. If nobody is discussing your brand, AI has very little to say about you.',
  },
  {
    q: 'Hasn’t ChatGPT stopped citing Reddit?',
    a: 'ChatGPT cut its Reddit citations sharply in August 2026, but Google’s AI Overviews, AI Mode, Gemini and Perplexity barely changed. AI is spreading where it looks, not ignoring conversation. That is why we work across the five forums on this page rather than relying on Reddit alone.',
  },
  {
    q: 'Is this part of your SEO service?',
    a: 'It works hand in hand with our ecommerce SEO and generative engine optimisation (GEO) work, but you can buy it as a standalone service. Plenty of brands start here because forum mentions move faster than link building.',
  },
  {
    q: 'Will our posts be disclosed?',
    a: 'Yes. We post from clearly identified brand, founder and staff accounts, and we follow each community’s rules on self-promotion. Undisclosed promotion breaks platform rules and, in the UK, consumer protection law. It also gets accounts banned, which helps nobody.',
  },
  {
    q: 'How quickly will we see results?',
    a: 'Replies on high-traffic threads can send referral traffic within days. Building a reputation in a community, and having AI tools pick up on it, takes three to six months of consistent activity.',
  },
]

export default function ForumMarketingAgencyPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Forum Marketing Agency', path: PATH }])} />
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Reddit & Forum Marketing',
        description: 'Forum advertising, organic and paid, across Reddit, Mumsnet, Hacker News, Quora and PistonHeads: starting conversations, answering questions and building presence that drives traffic and AI citations.',
        url: `${SITE_URL}${PATH}`,
        provider: { '@type': 'Organization', name: 'Leng Media', url: SITE_URL },
        serviceType: 'Forum Marketing',
        areaServed: [
          { '@type': 'Country', name: 'United Kingdom' },
          { '@type': 'Country', name: 'United States' },
        ],
      }} />
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: FAQ.map(item => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      }} />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroGrid} />
        <div className={styles.heroScanlines} />
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>Leng Media · Reddit & Forum Marketing Agency</span>
          <h1 className={styles.heroTitle}>
            The <em>Forum</em><br />
            Marketing Agency.
          </h1>
          <p className={styles.heroSub}>
            AI recommends what real people say. We found where the internet’s most valuable conversations
            happen, and we put your brand in them.
          </p>
          <div className={styles.heroCtas}>
            <CalendlyPopupLink href={CALENDLY} className={styles.heroBtn}>
              Book a Free Strategy Call
            </CalendlyPopupLink>
            <span className={styles.heroNote}>Response within 24 hours</span>
          </div>
          <div className={styles.heroProof}>
            <span className={styles.heroProofItem}>Reddit</span>
            <span className={styles.heroProofDivider}>·</span>
            <span className={styles.heroProofItem}>Mumsnet</span>
            <span className={styles.heroProofDivider}>·</span>
            <span className={styles.heroProofItem}>Hacker News</span>
            <span className={styles.heroProofDivider}>·</span>
            <span className={styles.heroProofItem}>Quora</span>
            <span className={styles.heroProofDivider}>·</span>
            <span className={styles.heroProofItem}>PistonHeads</span>
          </div>
        </div>
      </section>

      <Ticker />

      {/* 1. WHY CONVERSATION */}
      <section className={styles.whyNow}>
        <div className={styles.whyNowLeft}>
          <ScrollReveal>
            <span className="section-label">// 01 · The shift</span>
            <h2 className={styles.whyNowHeading}>AI trusts conversation more than it trusts your website.</h2>
            <p className={styles.whyNowBody}>
              Ask ChatGPT, Gemini or Google’s AI Overviews for the best product in any category and the answer is
              built from what people say about it. A forum thread carries first-hand experience, many independent
              voices, and answers the community has already voted up or corrected. To an AI model, that reads as
              more truthful than any brand’s own copy.
            </p>
            <p className={styles.whyNowBody}>
              Reddit licenses its data to Google and OpenAI. Forum threads sit on page one of Google for almost every
              buying question. And when ChatGPT cut its Reddit citations in August 2026, it didn’t stop listening to
              people: Google’s AI products barely changed, and AI kept reading discussion across the web. The brands
              that get recommended are the ones people are talking about.
            </p>
          </ScrollReveal>
        </div>
        <div className={styles.whyNowRight}>
          <ScrollReveal delay={2}>
            <div className={styles.statGrid}>
              <div className={styles.statBox}>
                <span className={styles.statValue}>1B+</span>
                <span className={styles.statLabel}>Monthly Reddit users</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statValue}>50</span>
                <span className={styles.statLabel}>Forums we ranked</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statValue}>5</span>
                <span className={styles.statLabel}>Worth your time</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statValue}>£0</span>
                <span className={styles.statLabel}>Media spend required</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. THE RESEARCH */}
      <section className={styles.dataSection}>
        <ScrollReveal>
          <span className="section-label">// 02 · The research</span>
          <h2 className={styles.dataHeading}>So we went looking for the most valuable conversations online.</h2>
          <p className={styles.dataIntro}>
            Not all discussion is worth joining. A million teenagers arguing about games are worth less to most brands
            than a few thousand parents planning a household budget. So we started with every major forum on the
            internet and cut it down to the few that matter.
          </p>
        </ScrollReveal>
        <div className={styles.steps}>
          {FUNNEL.map((f, i) => (
            <ScrollReveal key={f.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className={styles.step}>
                <span className={styles.funnelCount}>{f.count}</span>
                <h3 className={styles.funnelStageTitle}>{f.title}</h3>
                <p className={styles.funnelStageCopy}>{f.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 3. THE TOP FIVE */}
      <section className={styles.dataSection}>
        <ScrollReveal>
          <span className="section-label">// 03 · The result</span>
          <h2 className={styles.dataHeading}>The five forums where your brand needs to be.</h2>
          <p className={styles.dataIntro}>
            Ranked by our combined score: audience wealth and buying intent, multiplied by how open the conversation is.
            These are where we start for almost every client, before adding the specialist communities in their category.
          </p>
        </ScrollReveal>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr><th>#</th><th>Forum</th><th>Score</th><th>UK</th><th>USA</th><th>Why it matters</th></tr>
            </thead>
            <tbody>
              {TOP_FIVE.map((f, i) => (
                <tr key={f.name}>
                  <td>{String(i + 1).padStart(2, '0')}</td>
                  <td className={styles.forumName}>{f.name}</td>
                  <td><span className={`${styles.tier} ${i < 2 ? styles.tierTop : styles.tierHigh}`}>{f.score} / 50</span></td>
                  <td>{f.uk}</td>
                  <td>{f.us}</td>
                  <td>{f.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={styles.tableNote}>
          Score = share of open, any-subject discussion (0–5) × audience income plus buying intent (0–10). UK and USA show
          each forum’s share of search visitors by country (Ahrefs, October 2026). Hacker News visitors mostly arrive
          directly, so no reliable split exists. PistonHeads tied with City-Data and wins on audience income.
          Read the full method in our guide to <Link href="/blog/reddit-seo-ai-search" style={LINK}>Reddit SEO and AI search</Link>.
        </p>
      </section>

      {/* MID CTA */}
      <div className={styles.midCta}>
        <p className={styles.midCtaText}>Want to know what these five forums, and AI, say about your brand?</p>
        <CalendlyPopupLink href={CALENDLY} className={styles.midCtaBtn}>Book a Call</CalendlyPopupLink>
      </div>

      {/* 4. WHAT WE DO */}
      <section className={styles.deliverables}>
        <ScrollReveal>
          <span className="section-label">// 04 · What we do</span>
          <h2 className={styles.deliverablesHeading}>Forum advertising, organic and paid.</h2>
          <p className={styles.funnelIntro}>
            We put your brand into the conversation on all five forums, from clearly identified accounts that follow
            each community’s rules. Forum presence is one of the fastest routes into AI answers, which is why it sits at
            the heart of our <Link href="/services/seo" style={LINK}>ecommerce SEO</Link> work, but you can also buy it
            on its own.
          </p>
        </ScrollReveal>
        <div className={styles.deliverablesGrid}>
          {SERVICES.map((item, i) => (
            <ScrollReveal key={item} delay={(i % 2 === 0 ? 1 : 2) as 1 | 2}>
              <div className={styles.deliverable}>
                <span className={styles.deliverableDot}>◆</span>
                <span className={styles.deliverableText}>{item}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq}>
        <ScrollReveal>
          <span className="section-label">// Common questions</span>
          <h2 className={styles.faqHeading}>Forum advertising, explained.</h2>
        </ScrollReveal>
        <WebsiteFaqAccordion items={FAQ} />
      </section>

      {/* CTA */}
      <section className={`${styles.cta} theme-dark`}>
        <ScrollReveal>
          <span className="section-label">// Get started</span>
          <h2 className="section-title">Right now, someone is asking about <em>your category.</em></h2>
          <p className={styles.ctaSub}>The question is whether your name comes up in the answer.</p>
          <CalendlyPopupLink href={CALENDLY} className="btn-primary" style={{ fontSize: 12, padding: '18px 52px' }}>
            Book a Free Strategy Call
          </CalendlyPopupLink>
          <p className={styles.ctaRisk}>On the call we search all five forums and ChatGPT for your brand, live. No lock-in contracts.</p>
        </ScrollReveal>
      </section>

      {/* RELATED */}
      <section style={{ padding: '60px 52px', background: 'var(--bg)', borderBottom: '1px solid var(--line)' }}>
        <ScrollReveal style={{ marginBottom: 32 }}>
          <span className="section-label">// Related</span>
        </ScrollReveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 12 }}>
          {[
            { href: '/blog/reddit-seo-ai-search', label: 'Reddit SEO & AI search guide' },
            { href: '/services/seo', label: 'Ecommerce SEO & GEO' },
            { href: '/chatgpt-ads-agency', label: 'ChatGPT Ads Agency' },
          ].map(r => (
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
              <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 500, fontSize: 18, color: 'var(--ink)' }}>{r.label}</span>
              <span style={{ fontSize: 20, color: 'rgba(255,255,255,0.3)' }}>↗</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
