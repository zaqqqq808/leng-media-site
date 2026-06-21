import Link from 'next/link'
import styles from '../ecommerce-protocol/page.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI for Ecommerce Course – Leng Media',
  description: 'Live 1-on-1 AI sessions with a performance marketing agency. We show you exactly how to apply AI to your ecommerce brand — copy, ads, SEO, support, and product images.',
  alternates: { canonical: 'https://www.lengmedia.com/ai-course' },
}

const WHAT_YOU_GET = [
  { num: '01', tag: 'LIVE SESSION',  name: 'Direct 1-on-1 Time',        desc: 'A 60-minute Zoom session with us. We look at your actual store, your actual ad account, and tell you exactly what to do. No theory.' },
  { num: '02', tag: 'TOOLS',         name: 'The Right Stack',            desc: 'We cut through the noise. You will leave knowing which AI tools are actually worth paying for and which ones are marketing fluff.' },
  { num: '03', tag: 'PROMPTS',       name: '40+ Prompt Library',         desc: 'Access to our full AI prompt library. Every prompt built specifically for ecommerce — product pages, ad hooks, email sequences, SEO.' },
  { num: '04', tag: 'WORKFLOWS',     name: 'Your Custom Workflow',        desc: 'We map out which AI workflows make sense for your brand specifically. Not a generic framework. Your brand, your bottlenecks, your plan.' },
  { num: '05', tag: 'CHEAT SHEET',   name: 'AI for Ecommerce Cheat Sheet', desc: 'The full written reference. Every tool, every use case. Read it before the session and use it after.' },
  { num: '06', tag: 'RECORDINGS',    name: 'Module Library Access',       desc: 'As we record sessions across different use cases, they get added as structured modules. You get access to all of them at no extra cost.' },
]

export default function AiCoursePage() {
  return (
    <div className={styles.page}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.tag}>Leng Media // AI for Ecommerce</span>
          <h1 className={styles.heroTitle}>
            Stop guessing.<br />
            Let us show you<br />
            <span className={styles.accent}>what actually works.</span>
          </h1>
          <p className={styles.heroSub}>
            A live 1-on-1 session where we apply AI to your ecommerce brand in real time.<br />
            Your store. Your ad account. Your results. <strong>No generic advice.</strong>
          </p>
          <Link href="#pricing" className={styles.btnMain}>Book Your Session</Link>
        </div>
      </section>

      {/* ── COMPARISON ── */}
      <section className={styles.filterSection}>
        <div className={styles.container}>
          <div className={styles.filterGrid}>
            <div className={styles.filterCard}>
              <span className={styles.filterLabel}>The Usual Way</span>
              <ul className={styles.painList}>
                <li><span className={styles.xMark}>✕</span> Watch 20 YouTube videos about AI for business</li>
                <li><span className={styles.xMark}>✕</span> Get generic output that sounds like nothing</li>
                <li><span className={styles.xMark}>✕</span> Pay for tools you never actually use</li>
                <li><span className={styles.xMark}>✕</span> Spend 3 months figuring out what works for ecommerce</li>
              </ul>
            </div>
            <div className={`${styles.filterCard} ${styles.filterCardHighlight}`}>
              <span className={styles.filterLabel}>The Leng Media Way</span>
              <ul className={styles.painList}>
                <li><span className={styles.checkMark}>✓</span> One session. We look at your brand directly.</li>
                <li><span className={styles.checkMark}>✓</span> You leave with a working AI workflow for your store</li>
                <li><span className={styles.checkMark}>✓</span> Know exactly which tools to keep and which to cancel</li>
                <li><span className={styles.checkMark}>✓</span> Results in the first week, not the first quarter</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU GET ── */}
      <section className={styles.modules}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>// What&apos;s Included</span>
          <h2 className={styles.sectionTitle}>Everything in one session.</h2>
          <div className={styles.bentoGrid}>
            {WHAT_YOU_GET.map(m => (
              <div key={m.num} className={styles.moduleCard}>
                <span className={styles.moduleNum}>{m.num} // {m.tag}</span>
                <h3 className={styles.moduleTitle}>{m.name}</h3>
                <p className={styles.moduleDesc}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className={styles.timeTrap}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>// Who This Is For</span>
          <h2 className={styles.sectionTitle}>
            You have a store.<br />You want AI to do more of the work.
          </h2>
          <div className={styles.trapGrid}>
            <div className={styles.trapPains}>
              {[
                { title: 'You are already running ads', desc: 'And you want AI to speed up creative production, write better copy faster, and make sense of your data without staring at dashboards.' },
                { title: 'You are spending too long on content', desc: 'Product descriptions, emails, social. It takes hours. AI can cut that down to minutes if you know the right prompts.' },
                { title: 'You have tried AI but got bad results', desc: 'Generic ChatGPT output does not convert. The tools work — but only when you know how to use them for ecommerce specifically.' },
              ].map(p => (
                <div key={p.title} className={styles.painItem}>
                  <span className={styles.checkMark}>✓</span>
                  <div>
                    <strong>{p.title}</strong>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.solutionCard}>
              <span className={styles.checkBig}>✓</span>
              <h3>Agency knowledge. Direct access.</h3>
              <p>We run AI-driven campaigns for ecommerce brands every day. This is not a course we built to teach — it is what we actually do. You get access to that knowledge directly, applied to your brand.</p>
              <span className={styles.roiBadge}>Live. Not pre-recorded.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className={styles.reviews}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>// Early Results</span>
          <h2 className={styles.sectionTitle}>From the first sessions.</h2>
          <div className={styles.reviewGrid}>
            {[
              { initials: 'SB', name: 'Sophie B.', stat: 'Time saved: 8 hrs/week', quote: 'I spent the whole session just on our product page copy. By the end we had a working prompt that sounds like our brand. That alone was worth it.' },
              { initials: 'MK', name: 'Marcus K.', stat: 'Tools cancelled: 4', quote: 'I was paying for three tools that do the same thing. Zaq looked at my stack and we cut it down in 20 minutes. The session paid for itself before it ended.' },
              { initials: 'PR', name: 'Priya R.', stat: 'Ad output: 3x faster', quote: 'Our ad creative used to take a week to brief and produce. Now I can go from brief to a finished draft in an afternoon. That changes everything for testing.' },
            ].map(r => (
              <div key={r.initials} className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                  <div className={styles.avatar}>{r.initials}</div>
                  <div>
                    <div className={styles.reviewName}>{r.name}</div>
                    <div className={styles.verified}>✓ Session participant</div>
                  </div>
                </div>
                <p className={styles.reviewText}>&ldquo;{r.quote}&rdquo;</p>
                <div className={styles.reviewStat}>{r.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GUARANTEE ── */}
      <section className={styles.guarantee} id="guarantee">
        <div className={styles.container}>
          <div className={styles.guaranteeBox}>
            <span className={styles.sectionLabel}>// The Guarantee</span>
            <h2 className={styles.guaranteeTitle}>
              If you do not leave with at least one thing you can implement today,<br />
              we refund you in full.
            </h2>
            <p className={styles.guaranteeDetail}>
              We are a performance marketing agency. Our reputation is built on results, not testimonials. If the session is not worth your time, you pay nothing.
            </p>
            <p className={styles.guaranteeCta}>Zero risk. Real access.</p>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className={styles.pricing} id="pricing">
        <div className={styles.container}>
          <span className={styles.sectionLabel}>// Get Access</span>
          <h2 className={styles.sectionTitle}>One session. Real results.</h2>
          <div className={styles.pricingGrid}>

            <div className={styles.priceCard}>
              <h3 className={styles.priceCardTitle}>AI Session Only</h3>
              <div className={styles.priceRow}>
                <span className={styles.currentPrice}>£197</span>
              </div>
              <p className={styles.priceDesc}>For founders who want to apply AI to their existing store.</p>
              <ul className={styles.checklist}>
                <li>60-minute live 1-on-1 session</li>
                <li>AI for Ecommerce Cheat Sheet included</li>
                <li>Prompt library access</li>
                <li>Session recording (yours to keep)</li>
                <li>Full refund guarantee</li>
              </ul>
              <Link href="https://buy.stripe.com/test_9B66oBgrngSRcvV2s228800" className={styles.btnSecondary} target="_blank" rel="noopener noreferrer">Book the Session</Link>
            </div>

            <div className={`${styles.priceCard} ${styles.priceCardFeatured}`}>
              <span className={styles.featuredTag}>Best Value</span>
              <h3 className={styles.priceCardTitle}>Session + Protocol</h3>
              <div className={styles.priceRow}>
                <span className={styles.currentPrice}>£1,049</span>
                <span className={styles.saleBadge}>Bundle</span>
              </div>
              <p className={styles.priceDesc}>AI session plus the full Ecommerce Protocol for building or scaling your store.</p>
              <ul className={styles.checklist}>
                <li>Everything in AI Session Only</li>
                <li>Full Ecommerce Protocol (6 modules)</li>
                <li>4 bi-weekly mentorship calls</li>
                <li>Supplier black book access</li>
                <li>Green light store review before launch</li>
              </ul>
              <Link href="https://buy.stripe.com/test_bJe00d0spcCB9jJ6Ii28802" className={styles.btnMain} target="_blank" rel="noopener noreferrer">Get the Bundle</Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
