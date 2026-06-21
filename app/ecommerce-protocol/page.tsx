import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: 'The Ecommerce Protocol – Leng Media',
  description: 'Stop guessing and start selling. The Leng Media Ecommerce Protocol is a step by step system for launching and scaling your ecommerce brand within two months.',
}

const FAQS = [
  {
    q: 'Is this just another dropshipping course?',
    a: 'No. Most dropshipping courses teach you how to find trending products on TikTok and run Facebook ads. We teach you how to build a real brand — vetted suppliers, proper 3PL fulfilment, and paid traffic structures from an actual agency. The difference is whether you want a one-month experiment or a sellable business.',
  },
  {
    q: 'I have no idea where to start. Is this right for me?',
    a: 'Yes — that\'s exactly who this is for. You don\'t need a business background, a supplier, or a Shopify account. Module 01 starts from zero. We walk you through every decision.',
  },
  {
    q: 'What if I work full time? How much time does this take?',
    a: 'Most students put in 8–12 hours per week and launch within 8 weeks. The system is designed to eliminate wasted time — no rabbit holes, no guessing. You get a checklist; you follow it.',
  },
  {
    q: 'I tried something like this before and it didn\'t work.',
    a: 'The #1 reason people fail at ecommerce is that they waste months on the wrong things — bad products, bad suppliers, bad ad setups. The Protocol removes all of that. We\'ve tested the dead ends so you don\'t have to. And if you still don\'t get a sale within 7 days of launch, you get your money back.',
  },
  {
    q: 'What happens if I get stuck?',
    a: 'You have 4 bi-weekly 1-on-1 calls with us over 2 months. We also do a personal Green Light review of your store before you spend a dollar on ads. You will not launch into the dark.',
  },
  {
    q: 'How is this different from hiring an agency?',
    a: 'An agency charges $3,000–$10,000/month to manage what we\'re handing you. We\'re giving you the actual playbook — the supplier list, the Shopify setup, the ad templates, the email flows. You own it permanently. No monthly fees, no dependency.',
  },
  {
    q: 'I\'ve just spent $1,299 on this. I don\'t have money left for ads.',
    a: 'This comes up a lot, and it\'s worth being direct: if you have zero budget left after buying, wait. The Protocol will still be here. What you don\'t want is to launch with no ad spend and conclude it doesn\'t work. When you\'re ready, $500–$1,000 is enough to run a proper first test. Module 05 shows you exactly how to structure it so none of it is wasted.',
  },
  {
    q: 'How much do I need for ads once I launch?',
    a: 'We recommend having $500–$1,500 for your initial ad testing budget. Module 05 shows you exactly how to structure that spend so you\'re not burning it on guesswork. Most students see their first sale before they\'ve spent $200.',
  },
  {
    q: 'What is the refund policy?',
    a: 'If you don\'t get a sale within 7 days of your launch date, we refund 100% — no questions. The condition: you cannot launch until we\'ve reviewed your store and given you the Green Light. This protects you from launching before you\'re ready.',
  },
]

export default function EcommerceProtocol() {
  return (
    <div className={styles.page}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.tag}>Leng Media Ecommerce Protocol</span>
          <h1 className={styles.heroTitle}>
            Save 119 hours.<br />
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
            Install a new ecommerce revenue stream. No theory. Just the manual.<br />
            First sale within 7 days of launch — <strong>or we refund you 100%.</strong>
          </p>
          <div className={styles.heroActions}>
            <Link href="#pricing" className={styles.btnMain}>Start The Protocol →</Link>
            <span className={styles.spotsHero}>⚡ Only 8 spots remaining this month</span>
          </div>
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
                <li><span className={styles.xMark}>✕</span> Test 4 products, 1 supplier, ship from the US</li>
                <li><span className={styles.xMark}>✕</span> Lose $2,000 on bad ads</li>
                <li><span className={styles.xMark}>✕</span> Give up</li>
              </ul>
            </div>
            <div className={`${styles.filterCard} ${styles.filterCardHighlight}`}>
              <span className={styles.filterLabel}>Option B: The LM Ecom Protocol</span>
              <ul className={styles.painList}>
                <li><span className={styles.checkMark}>✓</span> Get our exact agency playbook</li>
                <li><span className={styles.checkMark}>✓</span> We tell you exactly what to do, step by step</li>
                <li><span className={styles.checkMark}>✓</span> Copy our proven ad structures</li>
                <li><span className={styles.checkMark}>✓</span> Launch in 2 months, guaranteed</li>
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
              <span className={styles.roiBadge}>Save 100+ Hours</span>
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
              { num: '01', tag: 'RESEARCH', title: 'Winning Product Algo', desc: "Don't guess. Copy our checklist for finding products that sell before you even buy inventory.", value: '$399' },
              { num: '02', tag: 'SOURCING', title: 'Supplier Black Book', desc: 'Skip the scams. Access our rolodex of vetted suppliers who ship fast and reply within hours.', value: '$399' },
              { num: '03', tag: 'BUILD', title: '4-Hour Shopify Setup', desc: 'The exact theme settings and apps we use. Click, install, done.', value: '$399' },
              { num: '04', tag: 'LOGISTICS', title: '3PL & Automation', desc: 'Automate the shipping. Never touch a box. Set it up once, run it forever.', value: '$399' },
              { num: '05', tag: 'TRAFFIC', title: 'Meta Ads Copy-Paste', desc: 'Our agency ad structures. Just plug in your creative and spend.', value: '$399' },
              { num: '06', tag: 'SCALE', title: 'CRO & Email Printer', desc: 'The abandoned cart emails that recover 15% of sales automatically.', value: '$399' },
            ].map(m => (
              <div key={m.num} className={styles.moduleCard}>
                <span className={styles.moduleNum}>{m.num} // {m.tag}</span>
                <span className={styles.modulePrice}>Valued {m.value}</span>
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
              { initials: 'SK', name: 'Sarah K.', stat: 'Supplier: Secured', quote: "The supplier list alone is worth the price. I wasted weeks talking to factories. These guys replied in 2 hours." },
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
                <p className={styles.reviewText}>&ldquo;{r.quote}&rdquo;</p>
                <div className={styles.reviewStat}>{r.stat}</div>
              </div>
            ))}
          </div>
          {/* CTA #1 */}
          <div className={styles.midCta}>
            <Link href="#pricing" className={styles.btnMain}>Start The Protocol →</Link>
            <span className={styles.spotsInline}>⚡ Only 8 spots remaining this month</span>
          </div>
        </div>
      </section>

      {/* ── MENTORSHIP ── */}
      <section className={styles.mentorship}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>// AGENCY DIRECT ACCESS</span>
          <h2 className={styles.sectionTitle}>We won&apos;t let you get stuck.</h2>
          <p className={styles.mentorSub}>Most courses give you videos and disappear. Not us. Included in the protocol is 2 months of direct mentorship.</p>
          <div className={styles.mentorCard}>
            <div className={styles.mentorFeatures}>
              {[
                { title: '4 Bi-Weekly Calls', desc: 'Every two weeks we hold you accountable, review your progress, and unblock whatever\'s in the way.' },
                { title: '1-on-1 Access', desc: 'Private calls. Not a group webinar. Not a Zoom with 200 people.' },
                { title: 'Agency Audit', desc: '"Share your screen. Let me see your ad account. Okay, click there. Fixed."' },
                { title: 'Green Light Review', desc: 'We personally review your store before you spend a single dollar on ads. You don\'t launch until we say you\'re ready.' },
              ].map(f => (
                <div key={f.title} className={styles.mentorFeat}>
                  <strong>{f.title}</strong>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          {/* CTA #2 */}
          <div className={styles.midCta}>
            <Link href="#pricing" className={styles.btnMain}>Claim Your Spot →</Link>
            <span className={styles.spotsInline}>⚡ Mentorship is capped at 8 students per month</span>
          </div>
        </div>
      </section>

      {/* ── FOUNDER ── */}
      <section className={styles.founder}>
        <div className={styles.container}>
          <div className={styles.founderGrid}>
            <div className={styles.founderPhoto}>
              <div className={styles.founderPhotoPlaceholder}>
                <span>ZL</span>
              </div>
            </div>
            <div className={styles.founderText}>
              <span className={styles.sectionLabel}>// WHO YOU&apos;RE LEARNING FROM</span>
              <h2 className={styles.founderTitle}>Zaq — Founder, Leng Media</h2>
              <p>I&apos;ve spent the last 5 years running paid media for ecommerce brands, managing millions in ad spend across Meta, Google, and TikTok. I&apos;ve built and scaled brands from zero to 6 and 7 figures, sourced from factories in Asia, set up 3PL operations, and trained teams to do it all without me.</p>
              <p>The Protocol is not a course I made to sell. It&apos;s the SOP I hand to every new client. The supplier list is my list. The ad templates are the ones we run at the agency today. I&apos;m giving you the exact document I charge $3,000/month to execute.</p>
              <div className={styles.founderStats}>
                <div className={styles.founderStat}>
                  <strong>5+</strong>
                  <span>Years in ecommerce</span>
                </div>
                <div className={styles.founderStat}>
                  <strong>$M+</strong>
                  <span>Ad spend managed</span>
                </div>
                <div className={styles.founderStat}>
                  <strong>50+</strong>
                  <span>Brands scaled</span>
                </div>
              </div>
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
              <a href="https://www.skool.com/ai-for-ecommerce-8645" target="_blank" rel="noopener noreferrer" className={styles.btnMain}>Join the Community →</a>
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
              We guarantee your first sale — or you pay nothing.
            </h2>
            <p className={styles.guaranteeDetail}>
              <strong>How it works:</strong> You cannot launch until we give you the &ldquo;Green Light.&rdquo; Submit your store. We review it personally. If it&apos;s not ready, we tell you exactly what to fix. Once you launch, if you don&apos;t get a sale within 7 days — 100% refund, no questions asked.
            </p>
            <p className={styles.guaranteeCta}>You literally cannot fail.</p>
            {/* CTA #3 */}
            <Link href="#pricing" className={`${styles.btnMain} ${styles.guaranteeBtn}`}>Start The Protocol →</Link>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className={styles.pricing} id="pricing">
        <div className={styles.container}>
          <span className={styles.sectionLabel}>// GET STARTED</span>
          <h2 className={styles.sectionTitle}>The Protocol</h2>
          <div className={styles.spotsBar}>
            <span className={styles.spotsDot} />
            Only 8 spots remaining this month — mentorship is 1-on-1 and capacity is limited.
          </div>
          <div className={styles.priceCardFull}>

            {/* Left — what's inside */}
            <div className={styles.priceLeft}>
              <h3 className={styles.priceFullTitle}>Everything you need.<br />Nothing you don&apos;t.</h3>
              <p className={styles.priceFullSub}>Six modules. Four mentorship calls. A personal store review before you spend a penny on ads. The exact systems we use with agency clients — handed to you in a box.</p>
              <div className={styles.modulePriceGrid}>
                {[
                  { tag: '01 // Research', title: 'Winning Product Algo', desc: 'Our exact checklist for finding products that sell before you spend a penny.' },
                  { tag: '02 // Sourcing', title: 'Supplier Black Book', desc: 'Vetted suppliers. Fast shipping. Zero scams.' },
                  { tag: '03 // Build', title: '4-Hour Shopify Setup', desc: 'Exact theme settings and apps. Click, install, done.' },
                  { tag: '04 // Logistics', title: '3PL & Automation', desc: 'Automate fulfilment. Never touch a box.' },
                  { tag: '05 // Traffic', title: 'Meta Ads Copy-Paste', desc: 'Our agency ad structures. Plug in your creative and spend.' },
                  { tag: '06 // Scale', title: 'CRO & Email Printer', desc: 'Abandoned cart flows that recover 15% of lost sales.' },
                ].map(m => (
                  <div key={m.tag} className={styles.priceMini}>
                    <span className={styles.priceMiniTag}>{m.tag}</span>
                    <strong>{m.title}</strong>
                    <p>{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — price + CTA */}
            <div className={styles.priceRight}>
              <div className={styles.priceRightInner}>
                <span className={styles.totalValue}>Total Value: $2,394</span>
                <div className={styles.priceBig}>
                  <span className={styles.priceLabel}>Your investment today</span>
                  <span className={styles.currentPrice}>$1,299</span>
                </div>
                <ul className={styles.checklist}>
                  <li>All 6 modules (The Launchpad)</li>
                  <li>4 bi-weekly mentorship calls</li>
                  <li>Supplier black book access</li>
                  <li>Agency ad templates included</li>
                  <li>Email flow library</li>
                  <li>Green light store review before launch</li>
                  <li>First-sale guarantee or full refund</li>
                </ul>
                <a href="https://buy.stripe.com/6oUcMZ6vGeRhcRn6zcbjW00" className={styles.btnMain} target="_blank" rel="noopener noreferrer">Start The Protocol →</a>
                <p className={styles.guaranteeNote}>First sale within 7 days of launch — or 100% refund. No questions.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.faq}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>// COMMON QUESTIONS</span>
          <h2 className={styles.sectionTitle}>Everything you&apos;re wondering.</h2>
          <div className={styles.faqGrid}>
            {FAQS.map(f => (
              <div key={f.q} className={styles.faqItem}>
                <h3 className={styles.faqQ}>{f.q}</h3>
                <p className={styles.faqA}>{f.a}</p>
              </div>
            ))}
          </div>
          <div className={styles.midCta} style={{marginTop: 64}}>
            <Link href="#pricing" className={styles.btnMain}>Start The Protocol →</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
