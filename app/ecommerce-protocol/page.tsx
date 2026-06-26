import Link from 'next/link'
import styles from './page.module.css'
import FaqAccordion from './FaqAccordion'
import VideoTestimonialsCarousel from './VideoTestimonialsCarousel'

export const metadata = {
  title: 'The Ecommerce Protocol – Leng Media',
  description: 'Stop guessing and start selling. The Leng Media Ecommerce Protocol is a step by step system for launching and scaling your ecommerce brand within two months.',
}

const FAQS = [
  {
    q: 'Is this just another dropshipping course?',
    a: 'No. Most dropshipping courses teach you how to find trending products on TikTok and run Facebook ads. We teach you how to build a real brand: vetted suppliers, proper 3PL fulfilment, and paid traffic structures from an actual agency. The difference is whether you want a one-month experiment or a sellable business.',
  },
  {
    q: 'I have no idea where to start. Is this right for me?',
    a: 'Yes, that\'s exactly who this is for. You don\'t need a business background, a supplier, or a Shopify account. Module 01 starts from zero. We walk you through every decision.',
  },
  {
    q: 'What if I work full time? How much time does this take?',
    a: 'Most students put in 8 to 12 hours a week and launch within 8 weeks. The system is built to cut out wasted time. Every step has a clear deliverable. You always know exactly what to do next.',
  },
  {
    q: 'I tried something like this before and it didn\'t work.',
    a: 'The #1 reason people fail at ecommerce is that they waste months on the wrong things: bad products, bad suppliers, bad ad setups. The Protocol removes all of that. We\'ve tested the dead ends so you don\'t have to. And if you still don\'t get a sale within 7 days of launch, you get your money back.',
  },
  {
    q: 'What happens if I get stuck?',
    a: 'You have 4 bi-weekly 1-on-1 calls with us over 2 months. We also do a personal Green Light review of your store before you spend a dollar on ads. You will not launch into the dark.',
  },
  {
    q: 'How is this different from hiring an agency?',
    a: 'An agency charges $3,000–$10,000/month to manage what we\'re handing you. We\'re giving you the actual playbook: the supplier list, the Shopify setup, the ad templates, the email flows. You own it permanently. No monthly fees, no dependency.',
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
    a: 'If you don\'t get a sale within 7 days of your launch date, we refund 100%, no questions. The condition: you cannot launch until we\'ve reviewed your store and given you the Green Light. This protects you from launching before you\'re ready.',
  },
  {
    q: 'Can\'t I just learn all of this from YouTube?',
    a: 'In theory, yes. In practice, YouTube content is outdated the moment it is posted. Ad platforms update. Supplier landscapes shift. Shopify changes its checkout. What worked 18 months ago can actively hurt you today. More importantly, YouTube cannot tell you whether your specific product idea is viable, which supplier is right for your margins, or why your particular ad account is not converting. That is exactly what the 1-on-1 calls do. You are not watching a generic tutorial. You are getting a live session built around your business, recorded for you to keep and refer back to.',
  },
  {
    q: 'Does this work outside the UK?',
    a: 'Yes. The supplier network, ad structures, email frameworks, and fulfilment setup are not UK-specific and work globally. Module 8 covers both UK (VAT, HMRC) and international business registration. If you are based outside the UK, flag it on your Kickoff Call and we will tailor the relevant sections to your country.',
  },
]

const VIDEO_TESTIMONIALS = [
  { src: '/testimonial-1.mp4', name: 'Client Name', stat: 'Result here', snippet: 'Quote from client goes here.' },
  { src: '/testimonial-2.mp4', name: 'Client Name', stat: 'Result here', snippet: 'Quote from client goes here.' },
  { src: '/testimonial-3.mp4', name: 'Client Name', stat: 'Result here', snippet: 'Quote from client goes here.' },
  { src: '/testimonial-4.mp4', name: 'Client Name', stat: 'Result here', snippet: 'Quote from client goes here.' },
]


export default function EcommerceProtocol() {
  return (
    <div className={styles.page}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.tag}>Leng Media Ecommerce Protocol</span>
          <h1 className={styles.heroTitle}>
            Most people spend 6 months<br />
            figuring out what we&apos;ll tell<br />
            <span className={styles.accent}>you in week one.</span>
          </h1>
          <div className={styles.vslWrap}>
            <div className={styles.vslGlow} />
            <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
              <iframe
                src="https://player.vimeo.com/video/1203781053?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}}
                title="Leng Media Ecom video VSL"
              />
            </div>
          </div>
          <p className={styles.heroSub}>
            Everything from supplier to first sale, in one place.<br />
            First sale within 7 days of launch. <strong>Or we refund you 100%.</strong>
          </p>
          <div className={styles.heroActions}>
            <Link href="#pricing" className={styles.btnMain}>Start The Protocol →</Link>
            <span className={styles.spotsHero}>⚡ Only 8 spots remaining this month</span>
          </div>
          <p className={styles.heroPriceNote}>
            Introductory price: <span className={styles.heroPriceOld}>$2,499</span> $1,299
          </p>
        </div>
      </section>

      {/* ── DREAM OUTCOME ── */}
      <section className={styles.dreamSection}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>// Picture This</span>
          <h2 className={styles.dreamTitle}>Eight weeks from now.</h2>
          <p className={styles.dreamText}>Your store is live. You wake up to a notification you have never seen before. Someone you have never met, in a city you have never been to, just bought something you sell.</p>
          <p className={styles.dreamText}>That is the moment everything changes. The money is part of it. But what you now know is something most people never figure out. You know how to build a revenue stream that does not need you to clock in. You understand how business actually works. And you can do it again.</p>
          <p className={styles.dreamText}>More time. More options. The freedom to say no to things that do not serve you. The 9-to-5 stays or goes on your terms. Not your employer&apos;s.</p>
          <div className={styles.dreamStats}>
            <div className={styles.dreamStat}>
              <span className={styles.dreamStatNum}>8</span>
              <span className={styles.dreamStatLabel}>weeks to launch</span>
            </div>
            <div className={styles.dreamStat}>
              <span className={styles.dreamStatNum}>7</span>
              <span className={styles.dreamStatLabel}>days to first sale</span>
            </div>
            <div className={styles.dreamStat}>
              <span className={styles.dreamStatNum}>100%</span>
              <span className={styles.dreamStatLabel}>refund if not</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIME TRAP ── */}
      <section className={styles.timeTrap}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>// THE PROBLEM</span>
          <h2 className={styles.sectionTitle}>
            Ecommerce isn&apos;t hard.<br />Figuring it out alone is.
          </h2>
          <p className={styles.trapSub}>There are about 20 things you need to know before you make your first sale. Most people spend 6 months finding that out the hard way.</p>
          <div className={styles.trapGrid}>
            <div className={styles.trapPains}>
              <p className={styles.trapListLabel}>Things people waste months figuring out on their own:</p>
              <ul className={styles.dontList}>
                {[
                  'Which product will actually sell',
                  'Where to find a supplier who won\'t ghost you',
                  'How to negotiate so you don\'t overpay',
                  'How to build a store that converts',
                  'How to set up fulfilment without touching boxes',
                  'How to run ads without burning your budget',
                  'Which emails to send and when',
                  'How to register the business and handle tax',
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
              <h3>We&apos;ve already figured all of this out.</h3>
              <p>Every answer above is inside the Protocol. The exact supplier list we use. The exact ad structure we run for clients today. The exact Shopify setup that converts. You follow the steps.</p>
              <span className={styles.roiBadge}>Save 100+ Hours</span>
            </div>
          </div>
          <p className={styles.swipeHint}>swipe to explore →</p>
        </div>
      </section>


      {/* ── MODULES ── */}
      <section className={styles.modules}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>// THE SYSTEM</span>
          <h2 className={styles.sectionTitle}>The System Architecture</h2>
          <div className={styles.bentoGrid}>
            {[
              { num: '01', tag: 'RESEARCH', title: 'Choosing the Right Product', desc: "Don't guess. Our checklist finds products with real demand before you spend a penny on inventory.", value: '$399' },
              { num: '02', tag: 'SOURCING', title: 'Finding & Negotiating with Suppliers', desc: 'Our vetted supplier list, plus the exact scripts we use to negotiate price, MOQ, and lead times.', value: '$399' },
              { num: '03', tag: 'BUILD', title: 'Website Creation & CRO', desc: 'The exact Shopify setup, theme config, and app stack that turns visitors into buyers.', value: '$399' },
              { num: '04', tag: 'LOGISTICS', title: '3PL & Fulfilment', desc: 'Automate shipping from day one. Never pack a box. Set it up once, run it forever.', value: '$399' },
              { num: '05', tag: 'CONTENT', title: 'Organic Content & SEO', desc: 'Build long-term traffic without paying for every click. Content frameworks that compound.', value: '$399' },
              { num: '06', tag: 'TRAFFIC', title: 'Paid Ads: Meta & Google', desc: 'Our agency ad structures. Plug in your creative, set the budget, and scale what works.', value: '$399' },
              { num: '07', tag: 'RETENTION', title: 'Email Marketing', desc: 'Abandoned cart flows, welcome sequences, and post-purchase emails. All pre-built and ready to install.', value: '$399' },
              { num: '08', tag: 'FINANCE', title: 'Banking & Taxes', desc: 'How to set up your business account, handle VAT, and keep HMRC off your back from day one.', value: '$399' },
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
          <span className={styles.sectionLabel}>// Results in the Field</span>
          <h2 className={styles.sectionTitle}>People who did it.</h2>
        </div>

        {/* Horizontal video carousel — full bleed */}
        <VideoTestimonialsCarousel items={VIDEO_TESTIMONIALS} />

        {/* CTA #1 */}
        <div className={styles.container}>
          <div className={styles.midCta}>
            <Link href="#pricing" className={styles.btnMain}>Start The Protocol →</Link>
            <span className={styles.spotsInline}>⚡ Only 8 spots remaining this month</span>
          </div>
        </div>
      </section>

      {/* ── MENTORSHIP ── */}
      <section className={styles.mentorship}>
        <div className={styles.container}>
          <div className={styles.launchWindow}>
            <span className={styles.launchWindowTag}>// LAUNCH WINDOW</span>
            <p className={styles.launchWindowText}>Because the Protocol is new, there are no pre-recorded videos. Every module is delivered to you live, 1-on-1, and recorded so you keep it forever. This is private mentorship at a course price. When this window closes and modules move to recorded delivery, the price increases to $2,499. Right now, during the launch window, it is $1,299.</p>
          </div>
          <span className={styles.sectionLabel}>// AGENCY DIRECT ACCESS</span>
          <h2 className={styles.sectionTitle}>We won&apos;t let you launch until we personally say your store is ready.</h2>
          <p className={styles.mentorSub}>Most courses hand you a login and wish you luck. Every module in the Protocol is delivered live, 1-on-1, built around your product and your market.</p>
          <div className={styles.mentorCard}>
            <div className={styles.mentorFeatures}>
              {[
                { title: 'Live Module Delivery', desc: '8 modules, each delivered 1-on-1 and recorded. Tailored to your product, your store, your budget.' },
                { title: '4 Accountability Calls', desc: 'Bi-weekly check-ins. We review progress, unblock problems and tell you exactly what to do next.' },
                { title: 'Agency Audit', desc: 'Direct screen-share access to the Leng Media team. Real fixes, not generic advice.' },
                { title: 'Green Light Review', desc: 'We personally sign off your store before you spend a penny on ads. You do not launch without it.' },
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
          <span className={styles.sectionLabel}>// WHO YOU&apos;RE LEARNING FROM</span>
          <h2 className={styles.founderTitle}>Leng Media</h2>
          <p className={styles.founderIntro}>We&apos;re a digital agency that has spent the last 5 years launching and scaling ecommerce brands. We&apos;ve managed millions in ad spend, built brands from zero to 6 and 7 figures, and sourced products from factories across Asia and Europe.</p>
          <p className={styles.founderIntro}>The Protocol is not a course we made to sell. It&apos;s the exact SOP we hand to every new client. The supplier list is our list. The ad templates are live in our agency accounts today. We&apos;re giving you the document we charge $3,000/month to execute.</p>
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
          <p className={styles.logosLabel}>Brands we&apos;ve launched and grown:</p>
          <div className={styles.logosGrid}>
            <div className={styles.logoPlaceholder}>
              <svg className={styles.logoSvg} width="90" height="28" viewBox="0 0 90 28" fill="none" aria-label="111SKIN">
                <text x="45" y="20" textAnchor="middle" fontFamily="'Helvetica Neue',Arial,sans-serif" fontSize="15" fontWeight="300" letterSpacing="4" fill="currentColor">111SKIN</text>
              </svg>
            </div>
            <div className={styles.logoPlaceholder}>
              <svg className={styles.logoSvg} width="120" height="34" viewBox="0 0 120 34" fill="none" aria-label="Rhythm Nutrition">
                <text x="60" y="16" textAnchor="middle" fontFamily="'Helvetica Neue',Arial,sans-serif" fontSize="11" fontWeight="700" letterSpacing="4" fill="currentColor">RHYTHM</text>
                <text x="60" y="30" textAnchor="middle" fontFamily="'Helvetica Neue',Arial,sans-serif" fontSize="7.5" fontWeight="300" letterSpacing="4.5" fill="currentColor">NUTRITION</text>
              </svg>
            </div>
            <div className={styles.logoPlaceholder}>
              <svg className={styles.logoSvg} width="110" height="32" viewBox="0 0 110 32" fill="none" aria-label="Healthy Petz">
                <text x="55" y="15" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="10" fontWeight="700" letterSpacing="2.5" fill="currentColor">HEALTHY</text>
                <text x="55" y="28" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="9" fontWeight="400" letterSpacing="2" fill="currentColor">Petz</text>
              </svg>
            </div>
            <div className={styles.logoPlaceholder}>
              <svg className={styles.logoSvg} width="120" height="36" viewBox="0 0 120 36" fill="none" aria-label="Playa London">
                <circle cx="18" cy="18" r="14" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <text x="40" y="15" fontFamily="Arial,sans-serif" fontSize="9.5" fontWeight="700" letterSpacing="3" fill="currentColor">PLAYA</text>
                <text x="40" y="27" fontFamily="Arial,sans-serif" fontSize="7.5" fontWeight="300" letterSpacing="3.5" fill="currentColor">LONDON</text>
              </svg>
            </div>
            <div className={styles.logoPlaceholder}>
              <svg className={styles.logoSvg} width="130" height="34" viewBox="0 0 130 34" fill="none" aria-label="Biopeptech">
                <polygon points="16,2 27,8 27,26 16,32 5,26 5,8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <text x="38" y="21" fontFamily="'Helvetica Neue',Arial,sans-serif" fontSize="9" fontWeight="600" letterSpacing="2.5" fill="currentColor">BIOPEPTECH</text>
              </svg>
            </div>
            <div className={styles.logoPlaceholder}>
              <svg className={styles.logoSvg} width="110" height="28" viewBox="0 0 110 28" fill="none" aria-label="Auralign">
                <text x="55" y="20" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="10" fontWeight="300" letterSpacing="5" fill="currentColor">AURALIGN</text>
              </svg>
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
              Your first ecommerce sale. Guaranteed. Or we give you your money back.
            </h2>
            <p className={styles.guaranteeDetail}>
              <strong>How it works:</strong> You cannot launch until we give you the &ldquo;Green Light.&rdquo; Submit your store. We review it personally. If it&apos;s not ready, we tell you exactly what to fix. Once you launch, if you don&apos;t get a sale within 7 days, you get a 100% refund, no questions asked.
            </p>
            <p className={styles.guaranteeCta}>You literally cannot fail.</p>
            {/* CTA #3 */}
            <Link href="#pricing" className={`${styles.btnMain} ${styles.guaranteeBtn}`}>Start The Protocol →</Link>
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
              <span className={styles.filterLabel}>Option A: Figure it out yourself</span>
              <ul className={styles.painList}>
                <li><span className={styles.xMark}>✕</span> Spend 6 months watching YouTube and reading Reddit threads</li>
                <li><span className={styles.xMark}>✕</span> Pick the wrong product, find the wrong supplier, build the wrong store</li>
                <li><span className={styles.xMark}>✕</span> Burn $2,000 on ads before you understand what you are doing</li>
                <li><span className={styles.xMark}>✕</span> Quit. Tell yourself ecommerce does not work.</li>
              </ul>
            </div>
            <div className={`${styles.filterCard} ${styles.filterCardHighlight}`}>
              <span className={styles.filterLabel}>Option B: The Leng Media Ecommerce Protocol</span>
              <ul className={styles.painList}>
                <li><span className={styles.checkMark}>✓</span> Get the exact supplier list, ad templates, and store setup we use for agency clients today</li>
                <li><span className={styles.checkMark}>✓</span> 1-on-1 calls where we tell you exactly what to do and when</li>
                <li><span className={styles.checkMark}>✓</span> We personally review your store before you spend a penny on ads</li>
                <li><span className={styles.checkMark}>✓</span> First sale within 7 days of launch or your money back</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT HAPPENS NEXT ── */}
      <section className={styles.nextSteps}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>// WHAT HAPPENS NEXT</span>
          <h2 className={styles.sectionTitle}>Here&apos;s exactly what to expect.</h2>
          <div className={styles.stepsGrid}>
            {[
              { num: '01', title: 'You enrol and book your Kickoff Call', desc: 'The moment you purchase, you are taken straight to our booking page. Pick a slot that works for you, usually within 48 hours.' },
              { num: '02', title: 'We map out your entire launch plan', desc: 'On the Kickoff Call we walk through your idea, your budget, and your timeline. You leave with a personalised action plan. Not a login link and a good luck.' },
              { num: '03', title: 'You work through the modules', desc: 'Eight modules, each ending with a clear deliverable and checklist. Nothing vague. You always know what to do next.' },
              { num: '04', title: 'Bi-weekly check-in calls', desc: 'Every two weeks we get back on a call. We review progress, unblock anything in the way, and tell you exactly what to do next.' },
              { num: '05', title: 'Green Light store review', desc: 'Before you spend a penny on ads, we personally review your store. You don\'t launch until we say you\'re ready.' },
              { num: '06', title: 'You launch and make your first sale', desc: 'With the Green Light given, you go live. First sale within 7 days. If not, we refund you 100%, no questions asked.' },
            ].map(s => (
              <div key={s.num} className={styles.stepCard}>
                <span className={styles.stepNum}>{s.num}</span>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className={styles.pricing} id="pricing">
        <div className={styles.container}>
          <span className={styles.sectionLabel}>// GET STARTED</span>
          <p className={styles.pricingHook}>The exact playbook we charge $3,000 a month to execute. Yours for $1,299.</p>
          <h2 className={styles.sectionTitle}>The Protocol</h2>
          <div className={styles.spotsBar}>
            <span className={styles.spotsDot} />
            Only 8 spots remaining this month. Mentorship is 1-on-1 and capacity is limited.
          </div>
          <div className={styles.priceCardFull}>

            {/* Left — what's inside */}
            <div className={styles.priceLeft}>
              <h3 className={styles.priceFullTitle}>Eight modules.<br />One outcome.</h3>
              <p className={styles.priceFullSub}>Eight modules, each delivered live 1-on-1 and recorded. Four accountability calls. A personal store review before you spend a penny on ads. The exact systems we use with agency clients, now yours.</p>
              <div className={styles.modulePriceGrid}>
                {[
                  { tag: '01 // Research', title: 'Choosing the Right Product' },
                  { tag: '02 // Sourcing', title: 'Finding & Negotiating with Suppliers' },
                  { tag: '03 // Build', title: 'Website Creation & CRO' },
                  { tag: '04 // Logistics', title: '3PL & Fulfilment' },
                  { tag: '05 // Content', title: 'Organic Content & SEO' },
                  { tag: '06 // Traffic', title: 'Paid Ads: Meta & Google' },
                  { tag: '07 // Retention', title: 'Email Marketing' },
                  { tag: '08 // Finance', title: 'Banking & Taxes' },
                ].map(m => (
                  <div key={m.tag} className={styles.priceMini}>
                    <span className={styles.priceMiniTag}>{m.tag}</span>
                    <strong>{m.title}</strong>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — price + CTA */}
            <div className={styles.priceRight}>
              <div className={styles.priceRightInner}>
                <span className={styles.totalValue}>Total Value: $2,394</span>
                <div className={styles.priceBig}>
                  <span className={styles.priceLabel}>Introductory launch price</span>
                  <div className={styles.priceRow}>
                    <span className={styles.oldPrice}>$2,499</span>
                    <span className={styles.currentPrice}>$1,299</span>
                  </div>
                  <p className={styles.priceNote}>Price increases when live 1-on-1 delivery ends.</p>
                </div>
                <ul className={styles.checklist}>
                  <li>8 live 1-on-1 module delivery calls (recorded)</li>
                  <li>4 bi-weekly accountability calls</li>
                  <li>Supplier black book access</li>
                  <li>Agency ad templates included</li>
                  <li>Email flow library</li>
                  <li>Green light store review before launch</li>
                  <li>First-sale guarantee or full refund</li>
                </ul>
                <a href="https://buy.stripe.com/aFadR36vG7oPaJfg9MbjW01" className={styles.btnMain} target="_blank" rel="noopener noreferrer">Start The Protocol →</a>
                <p className={styles.guaranteeNote}>After purchase you will be taken straight to our booking page to schedule your Kickoff Call.</p>
                <p className={styles.guaranteeNote}>First sale within 7 days of launch. Or 100% refund, no questions.</p>
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
          <FaqAccordion faqs={FAQS} />
          <div className={styles.midCta} style={{marginTop: 64}}>
            <Link href="#pricing" className={styles.btnMain}>Start The Protocol →</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
