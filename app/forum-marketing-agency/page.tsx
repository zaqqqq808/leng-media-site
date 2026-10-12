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

export const metadata = pageMetadata({
  title: 'Reddit & Forum Marketing Agency | Quora, Mumsnet & Community Marketing',
  description: 'Leng Media is a Reddit and forum marketing agency. We rank the English-speaking internet’s biggest forums by audience income and buying intent, then get your brand into those conversations.',
  path: PATH,
  socialTitle: 'Reddit & Forum Marketing Agency – Leng Media',
})

type Tier = 'Very high' | 'High' | 'Mid-high' | 'Mid' | 'Low-mid' | 'Low'

// Step 1: the 50 biggest forums in any language, by estimated monthly users.
const ALL_FORUMS: { name: string; region: string; users: string; english: boolean }[] = [
  { name: 'Reddit', region: 'Global, everything', users: '~1B+', english: true },
  { name: 'Quora', region: 'Global Q&A', users: '~300–400M', english: true },
  { name: 'Baidu Tieba', region: 'China', users: '~300M', english: false },
  { name: 'Steam Community', region: 'Global gaming', users: '~100M+', english: true },
  { name: 'Zhihu', region: 'China Q&A', users: '~80–100M', english: false },
  { name: 'Stack Overflow / Stack Exchange', region: 'Global developers', users: '~50–100M', english: true },
  { name: 'Naver Cafe', region: 'South Korea', users: 'Tens of millions', english: false },
  { name: 'Douban', region: 'China', users: 'Tens of millions', english: false },
  { name: 'Hupu', region: 'China, sport', users: '~30–50M', english: false },
  { name: 'DC Inside', region: 'South Korea', users: '~30M+', english: false },
  { name: 'Microsoft Community', region: 'Global tech support', users: '~30M+', english: true },
  { name: 'Apple Support Communities', region: 'Global tech support', users: '~20–30M', english: true },
  { name: '4chan', region: 'Global imageboard', users: '~20–30M', english: true },
  { name: '5ch', region: 'Japan', users: '~20M+', english: false },
  { name: 'Dcard', region: 'Taiwan', users: '~15–20M', english: false },
  { name: 'Kaskus', region: 'Indonesia', users: '~10–20M', english: false },
  { name: 'PTT', region: 'Taiwan', users: '~10M+', english: false },
  { name: 'Mumsnet', region: 'UK parenting', users: '~10M+', english: true },
  { name: 'XDA Developers', region: 'Global Android', users: '~10M', english: true },
  { name: 'Hacker News', region: 'Global tech', users: '~5–10M', english: true },
  { name: 'Pantip', region: 'Thailand', users: '~5–15M', english: false },
  { name: 'Jeuxvideo.com forums', region: 'France', users: '~5–15M', english: false },
  { name: 'Pikabu', region: 'Russia', users: '~5–15M', english: false },
  { name: '4PDA', region: 'Russia', users: '~5–15M', english: false },
  { name: 'FMKorea', region: 'South Korea', users: '~5–15M', english: false },
  { name: 'Gutefrage.net', region: 'Germany', users: '~5–15M', english: false },
  { name: 'NGA', region: 'China, gaming', users: '~5–15M', english: false },
  { name: 'Nairaland', region: 'Nigeria', users: '~5–15M', english: false },
  { name: 'Google Help Community', region: 'Global tech support', users: '~5–15M', english: true },
  { name: 'Blizzard forums', region: 'Global gaming', users: '~5–15M', english: true },
  { name: 'GameFAQs', region: 'Global gaming', users: '~2–8M', english: true },
  { name: 'TripAdvisor Forums', region: 'Global travel', users: '~2–8M', english: true },
  { name: 'City-Data', region: 'US', users: '~2–8M', english: true },
  { name: 'The Student Room', region: 'UK students', users: '~2–8M', english: true },
  { name: 'Theqoo', region: 'South Korea', users: '~2–8M', english: false },
  { name: 'Ruliweb', region: 'South Korea', users: '~2–8M', english: false },
  { name: 'Forocoches', region: 'Spain', users: '~2–8M', english: false },
  { name: 'HardwareZone Forums', region: 'Singapore', users: '~2–8M', english: true },
  { name: 'Inven', region: 'South Korea', users: '~2–8M', english: false },
  { name: 'Habr', region: 'Russia', users: '~2–8M', english: false },
  { name: 'MacRumors Forums', region: 'Global Apple', users: '~1–5M', english: true },
  { name: 'Tom’s Hardware Forums', region: 'Global PC hardware', users: '~1–5M', english: true },
  { name: 'Linus Tech Tips Forum', region: 'Global PC and tech', users: '~1–5M', english: true },
  { name: 'RedFlagDeals', region: 'Canada', users: '~1–5M', english: true },
  { name: 'Whirlpool', region: 'Australia', users: '~1–5M', english: true },
  { name: 'ResetEra', region: 'Global gaming', users: '~1–5M', english: true },
  { name: 'Digital Spy Forums', region: 'UK entertainment', users: '~1–5M', english: true },
  { name: 'PistonHeads', region: 'UK cars', users: '~1–5M', english: true },
  { name: 'Head-Fi', region: 'Global audio', users: '~1–5M', english: true },
  { name: 'BlackHatWorld', region: 'Global SEO and marketing', users: '~1–5M', english: true },
]

// Step 2: the English-language forums, re-scored by audience.
interface Forum {
  name: string
  url: string
  country: string
  users: string
  income: Tier
  intent: Tier
  niche: string
}

const ENGLISH_FORUMS: Forum[] = [
  { name: 'Reddit', url: 'reddit.com', country: 'US, then UK, Canada, Australia', users: '~1B+', income: 'High', intent: 'High', niche: 'Everything: tech, finance, products, hobbies' },
  { name: 'Quora', url: 'quora.com', country: 'India and US, then UK', users: '~300–400M', income: 'Mid', intent: 'Mid', niche: 'Q&A, education, B2B, health, finance' },
  { name: 'Steam Community', url: 'steamcommunity.com', country: 'US, then global', users: '~100M+', income: 'Low-mid', intent: 'Low', niche: 'Gaming, in-game items, PC hardware' },
  { name: 'Stack Overflow', url: 'stackoverflow.com', country: 'US and India, then global', users: '~50–100M', income: 'High', intent: 'Mid', niche: 'Developer tools, SaaS, APIs' },
  { name: 'Microsoft Community', url: 'answers.microsoft.com', country: 'US, then global', users: '~30M+', income: 'Mid', intent: 'Low-mid', niche: 'Windows, Office, PC support' },
  { name: 'Apple Support Communities', url: 'discussions.apple.com', country: 'US, then UK', users: '~20–30M', income: 'High', intent: 'Mid', niche: 'Apple devices, accessories, software' },
  { name: '4chan', url: '4chan.org', country: 'US', users: '~20–30M', income: 'Low-mid', intent: 'Low', niche: 'Not brand-safe. Monitor only.' },
  { name: 'Mumsnet', url: 'mumsnet.com', country: 'UK', users: '~10M+', income: 'High', intent: 'Very high', niche: 'Household, parenting, home, family finance, travel' },
  { name: 'XDA Developers', url: 'xda-developers.com', country: 'US and India', users: '~10M', income: 'Mid', intent: 'Mid', niche: 'Android, phones, gadgets' },
  { name: 'Hacker News', url: 'news.ycombinator.com', country: 'US, then UK and Europe', users: '~5–10M', income: 'Very high', intent: 'High', niche: 'Tech, SaaS, startups, developer tools, media' },
  { name: 'Google Help Community', url: 'support.google.com', country: 'US, then global', users: '~5–15M', income: 'Mid', intent: 'Low-mid', niche: 'Google products, small business tools' },
  { name: 'Blizzard forums', url: 'us.forums.blizzard.com', country: 'US', users: '~5–15M', income: 'Low-mid', intent: 'Low', niche: 'Gaming' },
  { name: 'GameFAQs', url: 'gamefaqs.gamespot.com', country: 'US', users: '~2–8M', income: 'Low-mid', intent: 'Low', niche: 'Gaming' },
  { name: 'TripAdvisor Forums', url: 'tripadvisor.com/ForumHome', country: 'US and UK', users: '~2–8M', income: 'High', intent: 'High', niche: 'Travel, hotels, experiences' },
  { name: 'City-Data', url: 'city-data.com/forum', country: 'US', users: '~2–8M', income: 'Mid-high', intent: 'Mid-high', niche: 'Property, relocation, local services' },
  { name: 'The Student Room', url: 'thestudentroom.co.uk', country: 'UK', users: '~2–8M', income: 'Low', intent: 'Low', niche: 'Education, first bank accounts, careers' },
  { name: 'HardwareZone Forums', url: 'forums.hardwarezone.com.sg', country: 'Singapore', users: '~2–8M', income: 'High', intent: 'Mid-high', niche: 'Tech, property, cars, money' },
  { name: 'MacRumors Forums', url: 'forums.macrumors.com', country: 'US, then UK', users: '~1–5M', income: 'High', intent: 'High', niche: 'Apple, premium tech' },
  { name: 'Tom’s Hardware Forums', url: 'forums.tomshardware.com', country: 'US', users: '~1–5M', income: 'Mid', intent: 'Mid-high', niche: 'PC components, peripherals' },
  { name: 'Linus Tech Tips Forum', url: 'linustechtips.com', country: 'US and Canada', users: '~1–5M', income: 'Low-mid', intent: 'Mid', niche: 'PC builds, gadgets' },
  { name: 'RedFlagDeals', url: 'forums.redflagdeals.com', country: 'Canada', users: '~1–5M', income: 'Mid-high', intent: 'Very high', niche: 'Deals, retail, personal finance' },
  { name: 'Whirlpool', url: 'forums.whirlpool.net.au', country: 'Australia', users: '~1–5M', income: 'Mid-high', intent: 'High', niche: 'Broadband, tech, finance, property' },
  { name: 'ResetEra', url: 'resetera.com', country: 'US', users: '~1–5M', income: 'Mid', intent: 'Low-mid', niche: 'Gaming, entertainment' },
  { name: 'Digital Spy Forums', url: 'forums.digitalspy.com', country: 'UK', users: '~1–5M', income: 'Mid', intent: 'Mid', niche: 'TV, streaming, entertainment' },
  { name: 'PistonHeads', url: 'pistonheads.com', country: 'UK', users: '~1–5M', income: 'Very high', intent: 'High', niche: 'Cars, watches, property, money' },
  { name: 'Head-Fi', url: 'head-fi.org', country: 'US, then global', users: '~1–5M', income: 'High', intent: 'High', niche: 'Premium audio' },
  { name: 'BlackHatWorld', url: 'blackhatworld.com', country: 'Global', users: '~1–5M', income: 'Mid', intent: 'Mid', niche: 'Marketing tools. Brand risk.' },
]

const TIER_SCORE: Record<Tier, number> = { 'Very high': 5, 'High': 4, 'Mid-high': 3, 'Mid': 2, 'Low-mid': 1, 'Low': 0 }

// Step 3: ranked by audience income first, buying intent second, size third
// (the source list is already in size order, and sort() is stable).
const BY_INCOME = [...ENGLISH_FORUMS].sort(
  (a, b) => TIER_SCORE[b.income] - TIER_SCORE[a.income] || TIER_SCORE[b.intent] - TIER_SCORE[a.intent],
)

const BY_COUNTRY: { country: string; forums: { name: string; note: string }[] }[] = [
  { country: 'United Kingdom', forums: [
    { name: 'Mumsnet', note: 'Household spend' },
    { name: 'PistonHeads', note: 'Affluent buyers' },
    { name: 'Digital Spy', note: 'Entertainment' },
    { name: 'The Student Room', note: 'Future buyers' },
    { name: 'Reddit (r/UnitedKingdom, r/UKPersonalFinance)', note: 'Reach' },
  ] },
  { country: 'United States', forums: [
    { name: 'Reddit', note: 'Reach and income' },
    { name: 'Hacker News', note: 'Tech decision makers' },
    { name: 'MacRumors', note: 'Premium tech' },
    { name: 'City-Data', note: 'Property and relocation' },
    { name: 'Head-Fi', note: 'Enthusiast spend' },
    { name: 'Tom’s Hardware', note: 'PC components' },
  ] },
  { country: 'Canada', forums: [
    { name: 'RedFlagDeals', note: 'Ready to buy' },
    { name: 'Reddit (r/PersonalFinanceCanada)', note: 'Reach' },
    { name: 'Linus Tech Tips', note: 'Tech' },
  ] },
  { country: 'Australia', forums: [
    { name: 'Whirlpool', note: 'Tech, broadband, money' },
    { name: 'Reddit (r/australia, r/AusFinance)', note: 'Reach' },
  ] },
  { country: 'Singapore', forums: [
    { name: 'HardwareZone', note: 'Tech, property, cars' },
  ] },
  { country: 'Global (English)', forums: [
    { name: 'Quora', note: 'Search and AI visibility' },
    { name: 'Stack Overflow', note: 'Developers' },
    { name: 'TripAdvisor Forums', note: 'Travel' },
    { name: 'Apple Support Communities', note: 'Apple users' },
    { name: 'Steam Community', note: 'Gaming' },
  ] },
]

const BY_NICHE: { niche: string; forums: string; why: string }[] = [
  { niche: 'Household, family and home', forums: 'Mumsnet, Reddit', why: 'Mothers control or influence most household purchases. Mumsnet is where UK parents compare them.' },
  { niche: 'Tech, SaaS and developer tools', forums: 'Hacker News, Stack Overflow, Reddit', why: 'Engineers and founders who choose the tools their companies pay for.' },
  { niche: 'Media, podcasts and apps', forums: 'Hacker News, Reddit, Quora', why: 'Early adopters who try new products and tell people about them.' },
  { niche: 'Cars, watches and luxury', forums: 'PistonHeads, Reddit', why: 'The highest disposable income of any UK forum audience.' },
  { niche: 'Premium consumer tech', forums: 'MacRumors, Head-Fi, Apple Support Communities', why: 'Enthusiasts who pay for the best version of a product.' },
  { niche: 'Travel and hospitality', forums: 'TripAdvisor Forums, Reddit, Mumsnet', why: 'Holidays are planned in threads, with budgets already set.' },
  { niche: 'Property and relocation', forums: 'City-Data, HardwareZone, Whirlpool', why: 'The biggest purchase most people make, researched for months.' },
  { niche: 'Deals and retail', forums: 'RedFlagDeals, Reddit', why: 'People who arrive with their card out.' },
  { niche: 'Personal finance', forums: 'Reddit, PistonHeads, Whirlpool, Quora', why: 'High-value products, researched heavily before anyone signs up.' },
  { niche: 'PC hardware and gaming', forums: 'Tom’s Hardware, Linus Tech Tips, Steam, ResetEra', why: 'Younger and lower income, but loyal and vocal. Worth it for hardware and in-game spend.' },
  { niche: 'Education and early careers', forums: 'The Student Room, Quora', why: 'Low spend today. Influence them now and you win the buyer they become.' },
]

const METHOD = [
  { num: '01', title: 'Rank by size', body: 'We listed the 50 biggest discussion forums on the internet, in any language, by estimated monthly users.' },
  { num: '02', title: 'Keep the English', body: 'We removed forums that don’t operate in English or sit outside the markets our clients sell into. 27 remained.' },
  { num: '03', title: 'Score the audience', body: 'We scored each forum’s audience on disposable income and on how likely they are to buy, then tagged its main country.' },
  { num: '04', title: 'Map to niche', body: 'We mapped every forum to the categories it influences, so each brand knows exactly which conversations matter to it.' },
]

const SERVICES = [
  'Starting conversations about your products and services',
  'Starting conversations about your industry, its problems and its future',
  'Replying to questions where your product is the honest answer',
  'Commenting on threads that already rank on Google and get cited by AI',
  'Building momentum and word of mouth around launches and drops',
  'Founder AMAs, expert Q&As and answers written in your voice',
  'Building and moderating your own communities and subreddits',
  'Monitoring what forums say about you and your competitors',
  'Monthly reporting on mentions, sentiment and AI citations',
]

const FAQ = [
  {
    q: 'What is forum marketing?',
    a: 'Forum marketing means getting your brand into the conversations people already have on Reddit, Quora, Mumsnet, Hacker News and other forums. Instead of paying for an ad slot, you take part: you start threads, answer questions and recommend products where they genuinely help. Done well, it builds trust, referral traffic and visibility in Google and AI answers.',
  },
  {
    q: 'Is this the same as Reddit Ads?',
    a: 'No. Reddit Ads and Quora Ads are paid placements, and we can run those too. This service is organic: real participation in the community, which keeps working long after an ad budget runs out.',
  },
  {
    q: 'Why do forums matter for AI search?',
    a: 'Large language models learn from public conversations, and Reddit licenses its data to both Google and OpenAI. Forum threads are among the sources AI answers cite most often. If people aren’t talking about your brand on forums, ChatGPT, Gemini and Perplexity have very little to say about you.',
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
    q: 'Which forums should my brand be on?',
    a: 'It depends on who buys from you. Use the tables on this page as a starting point: household brands belong on Mumsnet, tech and media products on Hacker News and Reddit, luxury and automotive on PistonHeads. On a call we will map the exact communities and threads for your category.',
  },
  {
    q: 'How quickly will we see results?',
    a: 'Replies on high-traffic threads can send referral traffic within days. Building a reputation in a community, and having AI tools pick up on it, takes three to six months of consistent activity.',
  },
]

function TierBadge({ tier }: { tier: Tier }) {
  const cls = tier === 'Very high' ? styles.tierTop
    : tier === 'High' || tier === 'Mid-high' ? styles.tierHigh
    : tier === 'Mid' ? styles.tierMid
    : styles.tierLow
  return <span className={`${styles.tier} ${cls}`}>{tier}</span>
}

export default function ForumMarketingAgencyPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Forum Marketing Agency', path: PATH }])} />
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Reddit & Forum Marketing',
        description: 'Organic Reddit, Quora, Mumsnet and forum marketing: starting conversations, answering questions and building community presence that drives traffic and AI citations.',
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
            The English-speaking internet argues, recommends and decides on a few dozen forums.
            We get your brand into those conversations.
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
            <span className={styles.heroProofItem}>Quora</span>
            <span className={styles.heroProofDivider}>·</span>
            <span className={styles.heroProofItem}>Mumsnet</span>
            <span className={styles.heroProofDivider}>·</span>
            <span className={styles.heroProofItem}>Hacker News</span>
            <span className={styles.heroProofDivider}>·</span>
            <span className={styles.heroProofItem}>PistonHeads</span>
          </div>
        </div>
      </section>

      <Ticker />

      {/* WHY FORUMS */}
      <section className={styles.whyNow}>
        <div className={styles.whyNowLeft}>
          <ScrollReveal>
            <span className="section-label">// Why forums</span>
            <h2 className={styles.whyNowHeading}>Most modern discourse happens in forum threads.</h2>
            <p className={styles.whyNowBody}>
              Before people buy, they ask other people. They search “best [product] reddit”, read
              the Mumsnet thread, check what Hacker News said about the launch. These forums are where
              opinions form, and where products get recommended or ruled out.
            </p>
            <p className={styles.whyNowBody}>
              Most brands ignore them, or turn up once with a sales pitch and get downvoted. We treat
              forums as a channel in their own right: we start conversations, join the ones already
              happening and become a voice the community actually wants to hear from. Across dozens of
              communities, that adds up to real influence over how your category is talked about.
            </p>
            <p className={styles.whyNowBody}>
              Forum threads also rank. Search almost any product question and a Reddit or Quora thread sits on page one,
              which makes forum marketing a natural partner to our <Link href="/services/seo" style={{ color: 'var(--neon)', textDecoration: 'underline' }}>ecommerce SEO</Link> work.
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
                <span className={styles.statValue}>27</span>
                <span className={styles.statLabel}>English forums ranked</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statValue}>Top</span>
                <span className={styles.statLabel}>Most-cited source in AI answers</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statValue}>£0</span>
                <span className={styles.statLabel}>Media spend required</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* AI */}
      <section className={styles.explainer}>
        <ScrollReveal>
          <span className={styles.explainerLabel}>// Forums and AI search</span>
          <h2 className={styles.explainerHeading}>AI learns what to recommend from forums.</h2>
        </ScrollReveal>
        <div className={styles.explainerGrid}>
          <ScrollReveal delay={1}>
            <div className={styles.explainerCard}>
              <span className={styles.explainerCardNum}>// 01</span>
              <h3 className={styles.explainerCardTitle}>What the models are trained on</h3>
              <p className={styles.explainerCardBody}>
                Reddit licenses its data to Google and OpenAI. Quora, Stack Overflow and the big
                forums are crawled constantly. When someone asks ChatGPT, Gemini or Perplexity for a
                recommendation, the answer is shaped by what real people have said in threads like these.
                If nobody is discussing your brand, AI has nothing to repeat.
              </p>
              <span className={styles.explainerCardTag}>ChatGPT · Gemini · Perplexity</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <div className={styles.explainerCard}>
              <span className={styles.explainerCardNum}>// 02</span>
              <h3 className={styles.explainerCardTitle}>Linked to AI SEO, sold on its own</h3>
              <p className={styles.explainerCardBody}>
                Forum presence is one of the fastest ways to show up in AI answers, which is why it sits
                at the heart of our <Link href="/services/seo" style={{ color: 'var(--neon)', textDecoration: 'underline' }}>generative engine optimisation</Link> work.
                But you don’t need an SEO retainer to use it. We offer forum marketing as a standalone
                service, with its own strategy, team and reporting.
              </p>
              <span className={styles.explainerCardTag}>Standalone service</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* METHOD */}
      <section className={styles.dataSection}>
        <ScrollReveal>
          <span className="section-label">// Our research</span>
          <h2 className={styles.dataHeading}>How we ranked the internet’s forums.</h2>
          <p className={styles.dataIntro}>
            Size alone doesn’t tell you where to spend your time. A million gamers with pocket money are
            worth less to most brands than a hundred thousand parents running a household budget. So we
            ranked every major forum by size, then by who is actually reading.
          </p>
        </ScrollReveal>
        <div className={styles.steps}>
          {METHOD.map((m, i) => (
            <ScrollReveal key={m.num} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className={styles.step}>
                <span className={styles.funnelStageNum}>// {m.num}</span>
                <h3 className={styles.funnelStageTitle}>{m.title}</h3>
                <p className={styles.funnelStageCopy}>{m.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* TABLE 1 */}
      <section className={styles.dataSection}>
        <ScrollReveal>
          <span className="section-label">// Table 1 · All languages</span>
          <h2 className={styles.dataHeading}>The 50 biggest forums on the internet.</h2>
          <p className={styles.dataIntro}>
            Ranked by estimated monthly users. Faded rows are not English-language and are removed in the next step.
          </p>
        </ScrollReveal>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr><th>#</th><th>Forum</th><th>Region / focus</th><th>Monthly users</th></tr>
            </thead>
            <tbody>
              {ALL_FORUMS.map((f, i) => (
                <tr key={f.name} className={f.english ? undefined : styles.muted}>
                  <td>{String(i + 1).padStart(2, '0')}</td>
                  <td className={styles.forumName}>{f.name}</td>
                  <td>{f.region}</td>
                  <td>{f.users}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={styles.tableNote}>
          Leng Media estimates, October 2026, combining published platform figures with third-party traffic data.
          Below the top ten, neighbouring forums are often within the margin of error of each other.
        </p>
      </section>

      {/* TABLE 2 */}
      <section className={styles.dataSection}>
        <ScrollReveal>
          <span className="section-label">// Table 2 · English-language</span>
          <h2 className={styles.dataHeading}>The 27 English-language forums that matter.</h2>
          <p className={styles.dataIntro}>
            Still ranked by size, now with each forum’s main country, the income of its audience and how
            likely that audience is to buy.
          </p>
        </ScrollReveal>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr><th>#</th><th>Forum</th><th>Main country</th><th>Monthly users</th><th>Audience income</th><th>Buying intent</th></tr>
            </thead>
            <tbody>
              {ENGLISH_FORUMS.map((f, i) => (
                <tr key={f.name}>
                  <td>{String(i + 1).padStart(2, '0')}</td>
                  <td className={styles.forumName}>{f.name}</td>
                  <td>{f.country}</td>
                  <td>{f.users}</td>
                  <td><TierBadge tier={f.income} /></td>
                  <td><TierBadge tier={f.intent} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* MID CTA */}
      <div className={styles.midCta}>
        <p className={styles.midCtaText}>Want to know which of these forums your customers use?</p>
        <CalendlyPopupLink href={CALENDLY} className={styles.midCtaBtn}>Book a Call</CalendlyPopupLink>
      </div>

      {/* TABLE 3 */}
      <section className={styles.dataSection}>
        <ScrollReveal>
          <span className="section-label">// Table 3 · Disposable income</span>
          <h2 className={styles.dataHeading}>Ranked by disposable income and buying intent.</h2>
          <p className={styles.dataIntro}>
            This is the ranking we plan campaigns from. Hacker News and PistonHeads are small, but their readers
            earn and spend more than anyone else’s. Mumsnet’s readers control household budgets. Reddit combines
            high income with huge scale. Steam and The Student Room sit near the bottom today, but they reach
            people at an earlier stage of life, and the brands they trust now are the ones they buy from later.
          </p>
        </ScrollReveal>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr><th>#</th><th>Forum</th><th>Audience income</th><th>Buying intent</th><th>Main country</th><th>Best for</th></tr>
            </thead>
            <tbody>
              {BY_INCOME.map((f, i) => (
                <tr key={f.name}>
                  <td>{String(i + 1).padStart(2, '0')}</td>
                  <td className={styles.forumName}>{f.name}</td>
                  <td><TierBadge tier={f.income} /></td>
                  <td><TierBadge tier={f.intent} /></td>
                  <td>{f.country}</td>
                  <td>{f.niche}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={styles.tableNote}>
          Income and intent are Leng Media’s assessments of each audience, based on its demographics, main country
          and what is discussed there. Quora scores lower than its size suggests because a large share of its traffic
          comes from India, but its answers rank in Google and get cited by AI worldwide.
        </p>
      </section>

      {/* TABLE 4 */}
      <section className={styles.dataSection}>
        <ScrollReveal>
          <span className="section-label">// Table 4 · By country</span>
          <h2 className={styles.dataHeading}>Where each market talks.</h2>
          <p className={styles.dataIntro}>
            English-speaking doesn’t mean one audience. Each country has its own forums, and its own subreddits
            within Reddit.
          </p>
        </ScrollReveal>
        <div className={styles.countryGrid}>
          {BY_COUNTRY.map(c => (
            <div key={c.country} className={styles.countryCard}>
              <h3 className={styles.countryName}>{c.country}</h3>
              <ul className={styles.countryList}>
                {c.forums.map(f => (
                  <li key={f.name}>{f.name}<span>{f.note}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* TABLE 5 */}
      <section className={styles.dataSection}>
        <ScrollReveal>
          <span className="section-label">// Table 5 · By niche</span>
          <h2 className={styles.dataHeading}>The right forum for your category.</h2>
        </ScrollReveal>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr><th>#</th><th>Category</th><th>Where to be</th><th>Why</th></tr>
            </thead>
            <tbody>
              {BY_NICHE.map((n, i) => (
                <tr key={n.niche}>
                  <td>{String(i + 1).padStart(2, '0')}</td>
                  <td className={styles.forumName}>{n.niche}</td>
                  <td>{n.forums}</td>
                  <td>{n.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SERVICES */}
      <section className={styles.deliverables}>
        <ScrollReveal>
          <span className="section-label">// What we do</span>
          <h2 className={styles.deliverablesHeading}>Shaping the conversation, at scale.</h2>
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

      {/* HOW WE WORK */}
      <section className={styles.explainer}>
        <ScrollReveal>
          <span className={styles.explainerLabel}>// How we work</span>
          <h2 className={styles.explainerHeading}>Open about who we are. Useful in every reply.</h2>
        </ScrollReveal>
        <div className={styles.explainerGrid}>
          <ScrollReveal delay={1}>
            <div className={styles.explainerCard}>
              <span className={styles.explainerCardNum}>// 01</span>
              <h3 className={styles.explainerCardTitle}>Disclosed, rule-following accounts</h3>
              <p className={styles.explainerCardBody}>
                We post from clearly identified brand, founder and staff accounts, and we follow each
                community’s self-promotion rules to the letter. Forums punish anything that looks like
                astroturfing, and UK law treats undisclosed promotion as misleading advertising. Openness is
                what keeps your accounts alive and your reputation intact.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <div className={styles.explainerCard}>
              <span className={styles.explainerCardNum}>// 02</span>
              <h3 className={styles.explainerCardTitle}>Value first, product second</h3>
              <p className={styles.explainerCardBody}>
                Most of what we post doesn’t mention you at all. We answer questions, share expertise and
                take part in the conversation about your industry. That builds the standing that makes a
                recommendation land when your product is the right answer.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq}>
        <ScrollReveal>
          <span className="section-label">// Common questions</span>
          <h2 className={styles.faqHeading}>Forum marketing, explained.</h2>
        </ScrollReveal>
        <WebsiteFaqAccordion items={FAQ} />
      </section>

      {/* CTA */}
      <section className={`${styles.cta} theme-dark`}>
        <ScrollReveal>
          <span className="section-label">// Get started</span>
          <h2 className="section-title">Join the <em>conversation.</em></h2>
          <p className={styles.ctaSub}>Book a free call. We will map the forums and threads that matter for your brand.</p>
          <CalendlyPopupLink href={CALENDLY} className="btn-primary" style={{ fontSize: 12, padding: '18px 52px' }}>
            Book a Free Strategy Call
          </CalendlyPopupLink>
          <p className={styles.ctaRisk}>No lock-in contracts. Response within 24 hours.</p>
        </ScrollReveal>
      </section>

      {/* RELATED */}
      <section style={{ padding: '60px 52px', background: 'var(--bg)', borderBottom: '1px solid var(--line)' }}>
        <ScrollReveal style={{ marginBottom: 32 }}>
          <span className="section-label">// Related Services</span>
        </ScrollReveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 12 }}>
          {[
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
