import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: 'The Ecommerce Protocol – Leng Media',
  description: 'Stop guessing and start selling. The Leng Media Ecommerce Protocol is a step by step system for launching and scaling your ecommerce brand within two months.',
}

export default function EcommerceProtocol() {
  return (
    <div className={styles.page}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.tag}>Leng Media Ecommerce Protocol</span>
          <h1 className={styles.heroTitle}>
            Stop Guessing.<br />
            Launch your brand within<br />
            <span className={styles.accent}>two months.</span>
          </h1>
          <div className={styles.vslWrap}>
            <div className={styles.vslGlow} />
            <div className={styles.vslFrame}>
              <div className={styles.vslInner}>
                <span className={styles.playIcon}>▶</span>
                <span className={styles.vslLabel}>Watch the Briefing (2 Min)</span>
              </div>
            </div>
          </div>
          <p className={styles.heroSub}>
            Install a new E-commerce revenue stream. No theory. Just the manual.<br />
            And if you get a sale within 7 days of launching — <strong>we refund you 100%.</strong>
          </p>
          <Link href="#pricing" className={styles.btnMain}>Get Access</Link>
        </div>
      </section>

      {/* ── THE FILTER ── */}
      <section className={styles.filterSection}>
        <div className={styles.container}>
          <div className={styles.filterHeader}>
            <span className={styles.sectionLabel}>// THE DECISION</span>
            <h2 className={styles.filterHeading}>You have 2 choices.</h2>
          </div>
          <div className={styles.filterGrid}>
            <div className={styles.filterCard}>
              <span className={styles.filterLabel}>Option A: The Hard Way</span>
              <ul className={styles.painList}>
                <li><span className={styles.xMark}>✕</span> Watch 50 hours of YouTube</li>
                <li><span className={styles.xMark}>✕</span> Test 4 products, 1 supplier, ship from USA</li>
                <li><span className={styles.xMark}>✕</span> Lose $2,000 on bad ads</li>
                <li><span className={styles.xMark}>✕</span> Give up</li>
              </ul>
            </div>
            <div className={`${styles.filterCard} ${styles.filterCardHighlight}`}>
              <span className={styles.filterLabel}>Option B: The LM Ecom Protocol</span>
              <ul className={styles.painList}>
                <li><span className={styles.checkMark}>✓</span> Download our brain</li>
                <li><span className={styles.checkMark}>✓</span> We literally tell you what to do</li>
                <li><span className={styles.checkMark}>✓</span> Copy our ad structures</li>
                <li><span className={styles.checkMark}>✓</span> Launch in 2 months</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIME TRAP ── */}
      <section className={styles.timeTrap}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>// THE PROBLEM</span>
          <h2 className={styles.sectionTitle}>
            You are a Creative.<br />Stop playing Logistics Manager.
          </h2>
          <p className={styles.trapSub}>You are a decision maker. You don&apos;t need to research all the bullshit.</p>
          <div className={styles.trapGrid}>
            <div className={styles.trapPains}>
              <ul className={styles.dontList}>
                {[
                  'Best suppliers for your niche',
                  'How to negotiate with them',
                  'How to build a website',
                  'Which tools to use',
                  'How to optimise Shopify',
                  'How to run Meta Ads or TikTok',
                  'How to apply for business finance',
                  'How to structure the business',
                ].map(item => (
                  <li key={item}>
                    <span className={styles.xMark}>✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.solutionCard}>
              <span className={styles.checkBig}>✓</span>
              <h3>We did the boring part.</h3>
              <p>We spent 5 years vetting suppliers so you can just pick one. We built the ad templates so you can just plug in art. We wrote the policies so you can just copy-paste.</p>
              <span className={styles.roiBadge}>Save 200+ Hours</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── MODULES ── */}
      <section className={styles.modules}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>// THE SYSTEM</span>
          <h2 className={styles.sectionTitle}>The System Architecture</h2>
          <div className={styles.bentoGrid}>
            {[
              { num: '01', tag: 'RESEARCH', title: 'Winning Product Algo', desc: "Don't guess. Copy our checklist for finding products that sell before you even buy inventory." },
              { num: '02', tag: 'SOURCING', title: 'Supplier Black Book', desc: 'Skip the AliExpress scams. Access our rolodex of vetted suppliers who ship fast.' },
              { num: '03', tag: 'BUILD', title: '4-Hour Shopify Setup', desc: 'The exact theme settings and apps we use. Click, install, done.' },
              { num: '04', tag: 'LOGISTICS', title: '3PL & Automation', desc: 'Automate the shipping. Never touch a box. Set it up once, run it forever.' },
              { num: '05', tag: 'TRAFFIC', title: 'Meta Ads Copy-Paste', desc: 'Our agency ad structures. Just plug in your creative and spend.' },
              { num: '06', tag: 'SCALE', title: 'CRO & Email Printer', desc: 'The abandoned cart emails that recover 15% of sales automatically.' },
            ].map(m => (
              <div key={m.num} className={styles.moduleCard}>
                <span className={styles.moduleNum}>{m.num} // {m.tag}</span>
                <span className={styles.modulePrice}>Valued $399</span>
                <h3 className={styles.moduleTitle}>{m.title}</h3>
                <p className={styles.moduleDesc}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className={styles.reviews}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>// SYSTEM DEPLOYMENTS</span>
          <h2 className={styles.sectionTitle}>Results in the Field</h2>
          <div className={styles.reviewGrid}>
            {[
              { initials: 'JM', name: 'James M.', stat: 'Time to Launch: 3 Days', quote: "I didn't want a course. I wanted a shortcut. I launched the store on Tuesday, first sale Thursday." },
              { initials: 'SK', name: 'Sarah K.', stat: 'Supplier: Secured', quote: "The supplier list alone is worth the $999. I wasted weeks talking to factories. These guys replied in 2 hours." },
              { initials: 'DR', name: 'David R.', stat: 'ROI: Positive', quote: "My agency charges clients $5k to set up what is in Module 3. It's literally the agency SOP document." },
            ].map(r => (
              <div key={r.initials} className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                  <div className={styles.avatar}>{r.initials}</div>
                  <div>
                    <div className={styles.reviewName}>{r.name}</div>
                    <div className={styles.verified}>✓ VERIFIED OWNER</div>
                  </div>
                </div>
                <p className={styles.reviewText}>"{r.quote}"</p>
                <div className={styles.reviewStat}>{r.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MENTORSHIP ── */}
      <section className={styles.mentorship}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>// AGENCY DIRECT ACCESS</span>
          <h2 className={styles.sectionTitle}>We won't let you get stuck.</h2>
          <p className={styles.mentorSub}>Most courses give you videos and disappear. Not us. Included in the protocol is 2 months of direct mentorship.</p>
          <div className={styles.mentorCard}>
            <div className={styles.mentorFeatures}>
              {[
                { title: '4 Bi-Weekly Calls', desc: 'Every two weeks we check your progress.' },
                { title: '1-on-1 Access', desc: 'Private calls. Not a group webinar.' },
                { title: 'Agency Audit', desc: '"Share your screen. Let me see your ad account. Okay, click there. Fixed."' },
                { title: 'Green Light Review', desc: 'I personally review your store before you spend a single dollar on ads.' },
              ].map(f => (
                <div key={f.title} className={styles.mentorFeat}>
                  <strong>{f.title}</strong>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── AI SYSTEMS ── */}
      <section className={styles.aiSection}>
        <div className={styles.container}>
          <div className={styles.aiGrid}>
            <div>
              <span className={styles.sectionLabel}>// THE COMMUNITY</span>
              <h2 className={styles.sectionTitle}>Already have a brand? Scale it with AI.</h2>
              <p className={styles.aiDesc}>Join a private community of founders and creators scaling their ecommerce brands using AI. Strategy breakdowns, ad teardowns, weekly accountability, and direct access to the Leng Media team — all in one place.</p>
              <a href="#" className={styles.btnMain}>Join the Community →</a>
            </div>
            <div className={styles.aiFrame}>
              <div className={styles.aiFrameInner}>
                <span className={styles.playIcon}>▶</span>
                <span className={styles.vslLabel}>Community Preview</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GUARANTEE ── */}
      <section className={styles.guarantee} id="guarantee">
        <div className={styles.container}>
          <div className={styles.guaranteeBox}>
            <span className={styles.sectionLabel}>// THE GREEN LIGHT GUARANTEE</span>
            <h2 className={styles.guaranteeTitle}>
              If you don't get a sale within 7 days of launch,<br />
              I will refund 100% of your money.
            </h2>
            <p className={styles.guaranteeDetail}>
              <strong>The Condition:</strong> You cannot launch until I give you the "Green Light." Submit your store to me. I will review it personally. If it's not ready, I tell you what to fix. I won't let you launch until you are ready to win.
            </p>
            <p className={styles.guaranteeCta}>You literally cannot fail.</p>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className={styles.pricing} id="pricing">
        <div className={styles.container}>
          <span className={styles.sectionLabel}>// GET STARTED</span>
          <h2 className={styles.sectionTitle}>The Protocol</h2>
          <div className={styles.pricingSingle}>
            <div className={`${styles.priceCard} ${styles.priceCardFeatured}`}>
              <h3 className={styles.priceCardTitle}>The Full Protocol</h3>
              <div className={styles.priceRow}>
                <span className={styles.currentPrice}>£997</span>
              </div>
              <p className={styles.priceDesc}>The complete A-Z system for launching and scaling your store.</p>
              <ul className={styles.checklist}>
                <li>All 6 modules (The Launchpad)</li>
                <li>4 bi-weekly mentorship calls</li>
                <li>Supplier black book</li>
                <li>Green light store review before launch</li>
                <li>Full refund guarantee</li>
              </ul>
              <Link href="https://buy.stripe.com/test_5kQ00d0sp8mlgMbfeO28801" className={styles.btnMain} target="_blank" rel="noopener noreferrer">Get The Protocol</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
