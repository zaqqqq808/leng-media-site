import styles from './page.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI for Ecommerce Cheat Sheet – Leng Media',
  description: 'Every AI tool and prompt that actually works for ecommerce brands. Tested across real campaigns. No fluff, no theory — just the shortcuts. Free Notion document.',
  alternates: { canonical: 'https://www.lengmedia.com/ai-cheat-sheet' },
}

const NOTION_URL = 'https://app.notion.com/p/AI-Cheat-Sheet-for-Ecom-DTC-2e74354e4a8880b8bc20f0e9ad6ba007'

const CONTENTS = [
  {
    num: '01', tag: 'COPY',
    title: 'AI Copywriting Stack',
    desc: 'The exact tools and prompts for product descriptions, ad copy, and email sequences that convert. Not generic ChatGPT output — ecommerce-specific prompts that sound like your brand.',
  },
  {
    num: '02', tag: 'VISUALS',
    title: 'Product Image Revamping',
    desc: 'How to take average product photos and turn them into conversion-optimised imagery using AI. No photographer, no studio, no budget.',
  },
  {
    num: '03', tag: 'SUPPORT',
    title: 'Customer Support Automation',
    desc: 'The chatbot setup that handles 80% of queries without human involvement. Returns, order status, FAQs — resolved before your inbox opens.',
  },
  {
    num: '04', tag: 'SEO',
    title: 'SEO at Scale',
    desc: 'AI prompts for meta descriptions, collection pages, and keyword clusters across hundreds of products. What used to take a week now takes an afternoon.',
  },
  {
    num: '05', tag: 'ADS',
    title: 'Ad Creative Workflows',
    desc: 'From brief to finished creative using AI. Cut production time from days to hours. Includes the brief format we use for clients running £50k+ monthly budgets.',
  },
  {
    num: '06', tag: 'PROMPTS',
    title: '40+ Prompt Library',
    desc: 'Every prompt categorised by use case. Product pages, ad hooks, email subject lines, customer replies, SEO titles. Copy, paste, done.',
  },
]

const PROBLEMS = [
  {
    title: 'The YouTube Rabbit Hole',
    desc: 'You spend three hours watching AI tutorials. None of them are built for ecommerce. You end up with generic advice that does nothing for your conversion rate.',
  },
  {
    title: 'The Wrong Tool Stack',
    desc: 'You are paying for five AI subscriptions. Two of them do the same thing. One does not work for ecommerce at all. You have no idea which one is actually moving the needle.',
  },
  {
    title: 'The Generic Output Problem',
    desc: 'You type a prompt into ChatGPT. It writes something that sounds like every other brand. You spend an hour editing it. You could have written it yourself faster.',
  },
]

export default function AiCheatSheet() {
  return (
    <div className={styles.page}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.tag}>Leng Media // AI for Ecommerce</span>
          <h1 className={styles.heroTitle}>
            The AI shortcuts your<br />
            competitors <span className={styles.accent}>don&apos;t have yet.</span>
          </h1>
          <p className={styles.heroSub}>
            We spent 12 months testing every AI tool on the market across real ecommerce campaigns.<br />
            This is what actually works. <strong>No theory. No fluff. Just the shortcuts.</strong>
          </p>
          <a href={NOTION_URL} target="_blank" rel="noopener noreferrer" className={styles.btnMain}>Access for Free</a>
          <p className={styles.heroNote}>Free access &middot; Notion-based &middot; Updated as AI evolves</p>
          <p className={styles.heroNote} style={{marginTop:'10px'}}>
            Then go deeper in the community &rarr;{' '}
            <a href="https://www.skool.com/ai-for-ecommerce-8645" target="_blank" rel="noopener noreferrer" style={{color:'var(--accent, #d4ff00)', textDecoration:'none', fontWeight:600}}>AI for Ecom SKOOL</a>
          </p>
        </div>
      </section>

      {/* ── COMPARISON ── */}
      <section className={styles.filterSection}>
        <div className={styles.container}>
          <div className={styles.filterGrid}>
            <div className={styles.filterCard}>
              <span className={styles.filterLabel}>The Hard Way</span>
              <ul className={styles.painList}>
                <li><span className={styles.xMark}>✕</span> Watch 40 hours of AI content on YouTube</li>
                <li><span className={styles.xMark}>✕</span> Pay for tools that don&apos;t work for ecommerce</li>
                <li><span className={styles.xMark}>✕</span> Get generic output that sounds like nothing</li>
                <li><span className={styles.xMark}>✕</span> Watch competitors pull ahead while you figure it out</li>
              </ul>
            </div>
            <div className={`${styles.filterCard} ${styles.filterCardHighlight}`}>
              <span className={styles.filterLabel}>The Cheat Sheet Way</span>
              <ul className={styles.painList}>
                <li><span className={styles.checkMark}>✓</span> Know exactly which tools to use and why</li>
                <li><span className={styles.checkMark}>✓</span> Copy prompts that are built for ecommerce</li>
                <li><span className={styles.checkMark}>✓</span> Get results in your first session</li>
                <li><span className={styles.checkMark}>✓</span> Spend hours saved on things that actually grow revenue</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className={styles.timeTrap}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>// The Problem</span>
          <h2 className={styles.sectionTitle}>
            Most AI content is built for<br />content creators. Not ecommerce.
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
              <h3>We did the testing.</h3>
              <p>Every tool in this cheat sheet has been used on real ecommerce campaigns with real ad budgets. If it did not move the needle, it is not in here. What is in here works.</p>
              <span className={styles.roiBadge}>Save 40+ Hours</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INSIDE ── */}
      <section className={styles.modules}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>// What&apos;s Inside</span>
          <h2 className={styles.sectionTitle}>Six sections. Zero filler.</h2>
          <div className={styles.bentoGrid}>
            {CONTENTS.map(c => (
              <div key={c.num} className={styles.moduleCard}>
                <span className={styles.moduleNum}>{c.num} // {c.tag}</span>
                <h3 className={styles.moduleTitle}>{c.title}</h3>
                <p className={styles.moduleDesc}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className={styles.forSection}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>// Who This Is For</span>
          <h2 className={styles.sectionTitle}>Built for people running real stores.</h2>
          <div className={styles.forGrid}>
            {[
              { label: 'Ecommerce Founders', desc: 'You have a store doing revenue and want to do more with less. AI is the lever — you just need to know where to pull.' },
              { label: 'DTC Brand Marketers', desc: 'You are managing content, ads, email, and SEO. AI can run half of that. This tells you which half and how.' },
              { label: 'Agency Operators', desc: 'You are running campaigns for multiple clients. The tools and prompts in here will let you produce better work in less time across every account.' },
            ].map(f => (
              <div key={f.label} className={styles.forCard}>
                <span className={styles.checkMark}>✓</span>
                <div>
                  <strong>{f.label}</strong>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ── */}
      <section className={styles.reviews}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>// From People Who Have Used It</span>
          <h2 className={styles.sectionTitle}>Results in the first session.</h2>
          <div className={styles.reviewGrid}>
            {[
              { initials: 'TM', name: 'Tom M.', stat: 'Time saved: 6 hrs/week', quote: 'I used the product description prompts on a 200 SKU catalogue in one afternoon. Previously that would have taken a week with a copywriter.' },
              { initials: 'AR', name: 'Aisha R.', stat: 'Output: 3x faster', quote: 'The ad creative workflow alone is worth it. I brief, it drafts, I edit for 10 minutes. My creative director used to take three days.' },
              { initials: 'JK', name: 'James K.', stat: 'Tools cancelled: 3', quote: 'I cancelled three subscriptions after reading this. I was paying for things this cheat sheet showed me I did not need.' },
            ].map(r => (
              <div key={r.initials} className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                  <div className={styles.avatar}>{r.initials}</div>
                  <div>
                    <div className={styles.reviewName}>{r.name}</div>
                    <div className={styles.verified}>✓ Verified</div>
                  </div>
                </div>
                <p className={styles.reviewText}>&ldquo;{r.quote}&rdquo;</p>
                <div className={styles.reviewStat}>{r.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── UPDATES ── */}
      <section className={styles.updatesSection}>
        <div className={styles.container}>
          <div className={styles.updatesGrid}>
            <div>
              <span className={styles.sectionLabel}>// Always Current</span>
              <h2 className={styles.sectionTitle}>AI moves fast.<br />So does this.</h2>
              <p className={styles.updateDesc}>New tools drop every week. Most cheat sheets are out of date the moment they are published. This one is a living Notion document. When something better comes out, we update it. When something stops working, we remove it. You always have the current version.</p>
            </div>
            <div className={styles.updateFeatures}>
              {[
                'Updated when major new AI tools launch',
                'Dead tools removed, not left to clutter the page',
                'New prompt categories added as use cases emerge',
                'Free access to every future version as the cheat sheet evolves',
              ].map(f => (
                <div key={f} className={styles.updateFeat}>
                  <span className={styles.checkMark}>✓</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FREE ACCESS ── */}
      <section className={styles.pricing} id="access">
        <div className={styles.container}>
          <span className={styles.sectionLabel}>// Get Access</span>
          <h2 className={styles.sectionTitle}>It is completely free.</h2>
          <div className={styles.pricingSingle}>
            <div className={`${styles.priceCard} ${styles.priceCardFeatured}`}>
              <span className={styles.featuredTag}>Free</span>
              <h3 className={styles.priceCardTitle}>AI for Ecommerce Cheat Sheet</h3>
              <div className={styles.priceRow}>
                <span className={styles.currentPrice}>Free</span>
              </div>
              <p className={styles.priceDesc}>Open the Notion document. Start using it. No payment, no email required.</p>
              <ul className={styles.checklist}>
                <li>6 sections covering every core AI use case for ecommerce</li>
                <li>40+ copy-and-paste prompts built for ecommerce brands</li>
                <li>Tool recommendations with notes on what each one is actually good for</li>
                <li>Ad creative, SEO, copy, support and image workflows</li>
                <li>Free access to every future update</li>
              </ul>
              <a href={NOTION_URL} target="_blank" rel="noopener noreferrer" className={styles.btnMain}>Access the Cheat Sheet</a>
              <p className={styles.priceNote}>Opens in Notion &middot; No account required</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKOOL CTA ── */}
      <section className={styles.bottomCta}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>// Go Deeper</span>
          <h2 className={styles.bottomCtaTitle}>The cheat sheet tells you what.<br />The community shows you how.</h2>
          <p className={styles.bottomCtaSub}>
            The AI for Ecom SKOOL group is where the cheat sheet comes alive. Community driven content covering Meta ads, CRO, sales, lead gen, direct response, branding, content creation and video AI. All through an ecommerce lens. New strategies, real case studies and people doing the actual work every day. This is not a passive feed. It is a room full of operators.
          </p>
          <a href="https://www.skool.com/ai-for-ecommerce-8645" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>Join the Community</a>
        </div>
      </section>

    </div>
  )
}
