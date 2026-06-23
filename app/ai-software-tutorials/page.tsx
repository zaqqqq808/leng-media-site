import Link from 'next/link'
import styles from '../ecommerce-protocol/page.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI for Ecom: Cheat Sheet Tutorials – Leng Media',
  description: 'Video walkthroughs for every AI tool in the Leng Media cheat sheet. Applied to ecommerce — not generic content creator fluff. See the software in action.',
  alternates: { canonical: 'https://www.lengmedia.com/ai-software-tutorials' },
}

const VIDEOS = [
  {
    num: '01', tag: 'COPY',
    title: 'AI Copywriting Tools',
    desc: 'Claude, ChatGPT, and Jasper applied to product descriptions, ad hooks, and email sequences. We show the exact prompts, settings, and output — not a demo, an actual workflow.',
  },
  {
    num: '02', tag: 'VISUALS',
    title: 'AI Image Generation',
    desc: 'Midjourney, Adobe Firefly, and Remove.bg applied to product photography. Watch average images become conversion-ready assets without a studio or photographer.',
  },
  {
    num: '03', tag: 'SUPPORT',
    title: 'Customer Support Automation',
    desc: 'Step-by-step chatbot configuration for ecommerce. Returns, FAQs, order status — watch us build the flows from scratch so you can copy them for your store.',
  },
  {
    num: '04', tag: 'SEO',
    title: 'AI SEO Tools for Ecom',
    desc: 'Surfer SEO, AI-assisted keyword clustering, and bulk meta generation across product catalogues. What used to take a week covered in one session.',
  },
  {
    num: '05', tag: 'ADS',
    title: 'Ad Creative Workflow Tools',
    desc: 'AdCreative.ai, Canva AI, and brief-to-asset workflows. Watch an ad go from brief to finished creative in under 20 minutes — exactly how we do it for clients.',
  },
  {
    num: '06', tag: 'PROMPTS',
    title: 'Prompt Engineering for Ecom',
    desc: 'How to write prompts that actually work for ecommerce output. The variables, structures, and tone settings that turn generic AI into brand-specific content.',
  },
]

const PROBLEMS = [
  {
    title: 'The Generic YouTube Problem',
    desc: 'They show you ChatGPT for writing blog posts. You need it for product descriptions, ad hooks, and customer replies. Different problem, different setup.',
  },
  {
    title: 'The Settings Maze',
    desc: 'You open the software and stare at 40 options. Nobody tells you which three actually matter for ecommerce output. You waste an hour before giving up.',
  },
  {
    title: 'The Outdated Stack',
    desc: 'The tutorial was recorded 8 months ago. Two of the features they show are gone. The tool they recommend has been replaced. You are learning a dead workflow.',
  },
]

export default function AiSoftwareTutorials() {
  return (
    <div className={styles.page}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.tag}>Leng Media // AI for Ecom: Cheat Sheet Tutorials</span>
          <h1 className={styles.heroTitle}>
            See the tools.<br />
            Watch them work.<br />
            <span className={styles.accent}>Apply them today.</span>
          </h1>
          <p className={styles.heroSub}>
            Video walkthroughs for every AI tool in the cheat sheet. Each one is applied to a specific ecommerce task — not general theory, not a product demo. The actual workflow.<br />
            <strong>Updated whenever better tools replace the ones we cover.</strong>
          </p>
          {/* TODO: Replace href with Stripe payment link when ready */}
          <Link href="/business-enquiry" className={styles.btnMain}>Get Access</Link>
        </div>
      </section>

      {/* ── COMPARISON ── */}
      <section className={styles.filterSection}>
        <div className={styles.container}>
          <div className={styles.filterGrid}>
            <div className={styles.filterCard}>
              <span className={styles.filterLabel}>Generic YouTube Tutorials</span>
              <ul className={styles.painList}>
                <li><span className={styles.xMark}>✕</span> Built for content creators, not ecommerce</li>
                <li><span className={styles.xMark}>✕</span> 40-minute videos to find 3 minutes of value</li>
                <li><span className={styles.xMark}>✕</span> Recorded a year ago, software has changed</li>
                <li><span className={styles.xMark}>✕</span> No context for how to apply it to your store</li>
              </ul>
            </div>
            <div className={`${styles.filterCard} ${styles.filterCardHighlight}`}>
              <span className={styles.filterLabel}>The Leng Media Tutorials</span>
              <ul className={styles.painList}>
                <li><span className={styles.checkMark}>✓</span> Every walkthrough is ecommerce-specific</li>
                <li><span className={styles.checkMark}>✓</span> Focused — only the settings that matter</li>
                <li><span className={styles.checkMark}>✓</span> Updated when tools change or better ones launch</li>
                <li><span className={styles.checkMark}>✓</span> See the output applied to a real store context</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className={styles.timeTrap}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>// THE PROBLEM</span>
          <h2 className={styles.sectionTitle}>
            Most AI tutorials are made by people<br />who have never run a store.
          </h2>
          <div className={styles.trapGrid}>
            <div className={styles.trapPains}>
              {PROBLEMS.map(p => (
                <div key={p.title} className={styles.painItem}>
                  <span className={styles.xMark}>✕</span>
                  <div>
                    <strong>{p.title}</strong>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.solutionCard}>
              <span className={styles.checkBig}>✓</span>
              <h3>We run ecommerce campaigns every day.</h3>
              <p>These walkthroughs are recorded by the people doing the actual client work. You see the tools used on real ecom tasks — not explained in theory, shown in practice.</p>
              <span className={styles.roiBadge}>Save 40+ Hours</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INSIDE ── */}
      <section className={styles.modules}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>// WHAT YOU GET</span>
          <h2 className={styles.sectionTitle}>Six video walkthroughs. Zero filler.</h2>
          <div className={styles.bentoGrid}>
            {VIDEOS.map(v => (
              <div key={v.num} className={styles.moduleCard}>
                <span className={styles.moduleNum}>{v.num} // {v.tag}</span>
                <h3 className={styles.moduleTitle}>{v.title}</h3>
                <p className={styles.moduleDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className={styles.mentorship}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>// WHO THIS IS FOR</span>
          <h2 className={styles.sectionTitle}>Built for people running real stores.</h2>
          <div className={styles.mentorCard}>
            <div className={styles.mentorFeatures}>
              {[
                { title: 'Ecommerce Founders', desc: 'You have the cheat sheet. Now you want to see the software in real time so you can copy the exact setup for your store.' },
                { title: 'DTC Brand Marketers', desc: 'Managing copy, ads, email, and SEO across multiple tools. These walkthroughs show you exactly how to get ecom-quality output from each one.' },
                { title: 'Agency Operators', desc: 'Running AI tools across multiple client accounts. See how we apply them at scale and adapt the workflows to different brand contexts.' },
                { title: 'First-Time AI Users', desc: 'You know the tools exist but do not know where to start. Watch a complete walkthrough for each one and follow along in your own account.' },
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

      {/* ── REVIEWS ── */}
      <section className={styles.reviews}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>// FROM PEOPLE WHO HAVE WATCHED</span>
          <h2 className={styles.sectionTitle}>Applied in the first session.</h2>
          <div className={styles.reviewGrid}>
            {[
              { initials: 'RH', name: 'Rachel H.', stat: 'Time to apply: same day', quote: 'I watched the Midjourney walkthrough and redid our whole product image set that afternoon. The before and after is ridiculous.' },
              { initials: 'MP', name: 'Marcus P.', stat: 'Tools set up: 4', quote: 'I had been staring at AdCreative.ai for weeks not knowing where to start. Watched the tutorial, had an ad out within the hour.' },
              { initials: 'LC', name: 'Laura C.', stat: 'Support tickets reduced: 60%', quote: 'The chatbot walkthrough alone covered the cost. I set it up exactly as shown and it now handles most of our support without me.' },
            ].map(r => (
              <div key={r.initials} className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                  <div className={styles.avatar}>{r.initials}</div>
                  <div>
                    <div className={styles.reviewName}>{r.name}</div>
                    <div className={styles.verified}>✓ VERIFIED</div>
                  </div>
                </div>
                <p className={styles.reviewText}>&ldquo;{r.quote}&rdquo;</p>
                <div className={styles.reviewStat}>{r.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── UPDATES NOTE ── */}
      <section className={styles.aiSection}>
        <div className={styles.container}>
          <div className={styles.aiGrid}>
            <div>
              <span className={styles.sectionLabel}>// ALWAYS CURRENT</span>
              <h2 className={styles.sectionTitle}>AI moves fast. So do the tutorials.</h2>
              <p className={styles.aiDesc}>These are not a static course recorded once and forgotten. The AI landscape changes every month. When a better tool replaces one we cover, we record a new walkthrough. When software updates change the workflow, we update the video. You are always watching the current way to do things — not how it worked a year ago.</p>
            </div>
            <div className={styles.aiFrame}>
              <div className={styles.aiFrameInner}>
                <span className={styles.playIcon}>▶</span>
                <span className={styles.vslLabel}>Updated regularly</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className={styles.pricing} id="pricing">
        <div className={styles.container}>
          <span className={styles.sectionLabel}>// GET ACCESS</span>
          <h2 className={styles.sectionTitle}>One price. All tutorials included.</h2>
          <div className={styles.pricingGrid}>

            <div className={styles.priceCard}>
              <h3 className={styles.priceCardTitle}>Cheat Sheet</h3>
              <div className={styles.priceRow}>
                <span className={styles.currentPrice}>Free</span>
              </div>
              <p className={styles.priceDesc}>The full AI tool and prompt reference for ecommerce. Start here.</p>
              <ul className={styles.checklist}>
                <li>40+ ecommerce-specific prompts</li>
                <li>Tool recommendations across 6 categories</li>
                <li>Ad, SEO, copy, image and support workflows</li>
                <li>Living Notion document — updated regularly</li>
              </ul>
              <a href="https://app.notion.com/p/AI-Cheat-Sheet-for-Ecom-DTC-2e74354e4a8880b8bc20f0e9ad6ba007" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>Access for Free</a>
            </div>

            <div className={`${styles.priceCard} ${styles.priceCardFeatured}`}>
              <span className={styles.featuredTag}>Recommended</span>
              <h3 className={styles.priceCardTitle}>Software Tutorials</h3>
              <div className={styles.priceRow}>
                {/* TODO: Replace with actual price when set */}
                <span className={styles.currentPrice}>£[PRICE]</span>
              </div>
              <p className={styles.priceDesc}>Watch every tool from the cheat sheet used on a real ecommerce task. Follow along, copy the setup, apply it today.</p>
              <ul className={styles.checklist}>
                <li>6 video walkthroughs covering every major tool category</li>
                <li>Ecommerce-specific settings and prompt configurations</li>
                <li>New videos added when better tools launch</li>
                <li>Covers copywriting, image AI, support, SEO, ads, and prompts</li>
                <li>Lifetime access including all future updates</li>
              </ul>
              {/* TODO: Replace href with Stripe payment link when ready */}
              <Link href="/business-enquiry" className={styles.btnMain}>Get Access</Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
