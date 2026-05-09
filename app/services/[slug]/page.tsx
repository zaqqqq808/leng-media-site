import { notFound } from 'next/navigation'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import Ticker from '@/components/Ticker'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import styles from './page.module.css'

const SERVICES: Record<string, {
  num: string
  name: string
  tagline: string
  metaDescription: string
  description: string[]
  outcomes: string[]
  related: string[]
  descriptionHighlights?: string[]
  proof?: {
    funnelTagline: string
    statsLabel: string
    stats: { label: string; value: string; sub: string }[]
    proofImage?: string
  }
  showcase?: {
    imageRevamp?: {
      before: string
      after: string
      heading: string
      copy: string
    }
    chatbot?: {
      image?: string
      heading: string
      copy: string
    }
    agents?: {
      heading: string
      copy: string
    }
  }
  portfolio?: {
    projects: {
      name: string
      url: string
      urlLabel: string
      challenge: string
      solution: string
      desktopImg: string
      mobileImg: string
    }[]
  }
  seoPillars?: {
    pillars: {
      num: string
      title: string
      body: string
      items?: string[]
    }[]
  }
}> = {
  'ai-solutions': {
    num: '01',
    name: 'AI Solutions & Automation',
    tagline: 'AI chatbots, workflow automation and product image revamping for ecommerce and D2C brands.',
    metaDescription: 'Leng Media is an AI automation agency specialising in AI chatbots for lead generation, AI agents for business automation, and product image revamping. We work with ecommerce and D2C brands in the USA and UK.',
    description: [
      'If you are looking for an AI automation agency, you are in the right place. We work with ecommerce and D2C brands to install three high-impact AI services: lead generation chatbots that qualify and capture visitors around the clock, AI agents that automate internal workflows so your team can focus on growth, and product image revamping that cuts creative spend while lifting conversion rates. The brands pulling ahead right now are the ones that move fast on all three.',
      'Most businesses pour money into traffic and lose it to friction. A visitor arrives, gets no answer, and leaves. Your team manually handles tasks that an AI agent could process in seconds. Your product photography costs a fortune every time you need new assets. We fix all of it. One agency, clear ROI, and no software subscriptions you will never understand.',
    ],
    outcomes: [
      '24/7 AI chatbot that captures leads and books meetings while you sleep',
      'AI agents installed across your highest-value workflows — saving hours every day',
      'Full product catalogue image revamping using AI — ready for ads, social and web',
      'CRM integration so every lead lands in your pipeline automatically',
      'Full chat transcripts and summaries handed off to your sales team',
      'AI audit, strategy and roadmap tailored to your business',
    ],
    related: ['direct-response','cmo-as-a-service'],
    showcase: {
      imageRevamp: {
        before: '/ai-before.png',
        after: '/ai-after.jpg',
        heading: 'AI Product Image Revamping',
        copy: 'We take your existing product photography and transform it into high-converting campaign imagery using AI. Studio-quality visuals at a fraction of the cost. No photographer, no studio hire, no waiting weeks for a reshoot. We process your entire catalogue and deliver assets ready for ads, social media, and your website. Drag the slider to see the difference.',
      },
      chatbot: {
        heading: 'AI Chatbot for Lead Generation',
        copy: 'Our AI chatbots qualify visitors, capture contact details, and book meetings straight into your calendar around the clock. Every lead is automatically logged to a Google Sheet or your CRM, so your sales team has full context before the first call. One closed deal per year covers the entire cost of the software. For ecommerce brands, the chatbot also handles FAQs, order queries, and post-purchase support without a single human touch.',
      },
      agents: {
        heading: 'AI Agents for Business Automation',
        copy: 'AI agents are software that thinks and acts on your behalf. They monitor inboxes, process orders, update spreadsheets, respond to customer queries, generate reports, and escalate exceptions to a human only when necessary. For a growing ecommerce or D2C brand, this is the difference between hiring three additional team members or not. We map your existing workflows, identify the highest-value bottlenecks, and install AI agents that run in the background and save you hours every single day.',
      },
    },
  },
  'direct-response': {
    num: '02',
    name: 'Direct Response',
    tagline: 'Ads that generate positive ROAS.',
    metaDescription: 'Performance marketing agency managing Meta, TikTok and Google Ads for ecommerce brands. We fix the funnel first, then drive consistent positive ROAS across every channel.',
    description: [
      'We fix the funnel first. Most agencies will happily take your money and drive traffic to a site that converts at 0.3%. We refuse to do that. Before a penny is spent on ads, we audit and improve your user experience — moving key purchase drivers above the fold, implementing reviews, FAQs and clear guarantees, and simplifying the path to purchase.',
      "We don't identify as a \"Facebook Agency\" or a \"PPC Agency.\" We identify as a Revenue Agency. We go where your customers are — Meta, TikTok, Google, or wherever the data points. We fit the platform to the strategy, not the other way around. Whether it's DTC, Ecom or Lead Generation, we'll have the answer.",
    ],
    outcomes: ['Pre-campaign landing page audit & CRO','Meta, TikTok & Google Ads management','Creative strategy & production briefs','Rapid A/B testing to find winners fast','Monthly performance reporting'],
    related: ['ai-solutions','lead-generation'],
    proof: {
      funnelTagline: 'Platform Agnostic. Result Obsessed.',
      statsLabel: '// Real Results · May–Jun 2025',
      stats: [
        { label: 'Campaign ROAS', value: '3.59×', sub: '90 purchases · £1,450 spend' },
        { label: 'Revenue Returned', value: '£5,209', sub: 'From a single campaign' },
        { label: 'Best Ad Set ROAS', value: '4.74×', sub: 'Website purchases' },
        { label: 'Lowest CPA', value: '£16.11', sub: 'Per website purchase' },
      ],
      proofImage: '/roas-proof.png',
    },
  },
  'seo': {
    num: '03',
    name: 'Ecommerce SEO',
    tagline: 'Rank for transactional keywords, grow organic revenue, and get your brand cited by AI.',
    metaDescription: 'Ecommerce SEO that drives revenue, not just rankings. Leng Media covers technical SEO, collection page optimisation, competitor intelligence and holistic link building for DTC and ecommerce brands.',
    description: [
      'SEO for ecommerce and DTC brands is a different discipline to regular SEO. Most traffic tools will tell you to chase high-volume informational keywords. We ignore those. By the time someone is typing "how to choose a running shoe," AI has already answered it. What matters is mid and bottom-of-funnel intent — people ready to buy.',
      'A quick note on "AI SEO": most of what you\'ll read about it is either a scam or someone trying to sell you software by repackaging the same fundamentals. The rules haven\'t changed. What has changed is which platforms AI models pull from when generating citations — Reddit, Quora, and niche community sites now feed directly into LLM recommendations. We build your presence there as part of a real, holistic strategy.',
    ],
    outcomes: [
      'Technical SEO audit & Core Web Vitals fixes',
      'Collection & product page optimisation',
      'Competitor gap analysis & keyword strategy',
      'Holistic link building (editorial, guest posts, assets)',
      'Community presence — Reddit, Quora, niche forums',
      'AI citation & LLM visibility strategy',
    ],
    related: ['direct-response','ai-solutions'],
    seoPillars: {
      pillars: [
        {
          num: '01',
          title: 'Technical SEO',
          body: 'The foundations everything else is built on. If your site has crawl errors, slow load times, broken internal links, or indexation issues — no amount of content or links will fix your rankings. We audit and resolve the full technical stack before anything else.',
        },
        {
          num: '02',
          title: 'Keyword Strategy & On-Page Optimisation',
          body: 'AI has taken over the top of the funnel. Informational queries are increasingly answered by LLMs before a user ever clicks. We shift focus to mid and bottom-of-funnel transactional keywords — and prioritise your collection pages, which is where ecommerce revenue actually comes from.',
        },
        {
          num: '03',
          title: 'Competitor Intelligence',
          body: 'We map exactly where your competitors are winning — which keywords they rank for, which sites link to them, and which content gaps you can exploit. Every SEO strategy we build is informed by what\'s already working in your space.',
        },
        {
          num: '04',
          title: 'Holistic Link Building',
          body: 'Most link building is either ignored or outsourced to someone buying cheap links that damage your site. We build authority across five channels:',
          items: [
            'Editorial outreach — genuine mentions in industry publications and press',
            'Guest posting — authoritative articles on relevant niche blogs',
            'Linkable asset creation — tools, guides and data pieces that earn links passively',
            'Directory listings — strategic placement on high-authority, niche-specific directories',
            'Community presence — Reddit, Quora, and forums that feed AI citations and convert',
          ],
        },
      ],
    },
  },
  'lead-generation': {
    num: '04',
    name: 'Lead Generation',
    tagline: 'The London lead generation agency that only gets paid when you do.',
    metaDescription: "Zero monthly retainer. London's performance-based lead generation agency — you fund the ad spend, we deliver strategy, creatives and results. Revenue share or fixed CPA model.",
    description: [
      'Zero monthly fees. 100% performance based. Stop burning cash on agencies that promise the world and deliver excuses. You cover the ad spend — we cover the expertise, the strategy, and the execution. If we don\'t perform, we don\'t eat.',
      'We design the creatives, write the copy, build the landing pages, and manage campaign optimisation — all at no charge. We agree on a fair revenue split or fixed CPA for every qualified lead or sale we generate. You own all the data. You have nothing to lose.',
    ],
    outcomes: ['Zero monthly retainer — performance-based only','You fund the ad spend directly (Google, Meta, LinkedIn)','We build creatives, copy & landing pages at no charge','Revenue share or fixed CPA model','You own all data and the client relationship'],
    related: ['direct-response','cmo-as-a-service'],
  },
  'cmo-as-a-service': {
    num: '05',
    name: 'CMO as a Service',
    tagline: 'The firepower of a full marketing department. None of the overhead.',
    metaDescription: "Embedded marketing leadership without the full-time hire. Strategy, execution and reporting — Leng Media's CMOaaS replaces your entire marketing function from £15,000/month.",
    description: [
      'Hiring a CMO, a media buyer, a web developer and a strategist costs upwards of £250k a year — before software or ad spend. Leng Media replaces all of that. We step in as your fully embedded marketing engine, taking full ownership of your growth from high-level strategic vision to pixel-perfect execution.',
      "We don't advise from the sidelines — we execute. We've helped brands including Hims, National Geographic Traveller, Ninety Percent, and Horizon Group. CMOaaS starts at £15,000/month. Stop managing freelancers. Start scaling.",
    ],
    outcomes: ['Executive strategy, budgeting & roadmap planning','Ad campaigns, CRO, AI automation & tech stack management','Zero training time — we embed from Day 1','Board-level reporting & OKR frameworks','Clients: Hims, National Geographic Traveller, Ninety Percent, Horizon Group'],
    related: ['ai-solutions','agency-assist'],
  },
  'agency-assist': {
    num: '06',
    name: 'Agency Assist',
    tagline: 'Scale your agency without increasing your headcount.',
    metaDescription: 'White-label marketing fulfilment for agencies that need a trusted execution partner. AI, paid media and CRO delivered under your brand with full NDA and weekly reports.',
    description: [
      'Leng Media acts as your silent execution partner. When your internal resources are stretched or you land a client requiring specialised skills you don\'t have in-house, we step in and integrate seamlessly to deliver white-label excellence — so you never have to turn down a contract again.',
      'We do the work. You get the credit. You receive weekly white-label reports and analysis while maintaining 100% control of the client relationship. We can also execute campaigns and train your junior staff to take them over.',
    ],
    outcomes: ['Overflow execution — never turn down a client again','White-label AI, CRO & Paid Media fulfilment','Training & handoffs to your in-house team','Weekly white-label reports & analysis','Full NDA — you maintain 100% client ownership'],
    related: ['direct-response','seo'],
  },
  'website-builds': {
    num: '07',
    name: 'Website Building',
    tagline: 'High-converting websites built to grow your brand online.',
    metaDescription: 'High-converting, performance-first websites for ecommerce and service brands. Built in Shopify or Next.js — fast, analytics-ready and designed to convert from day one.',
    description: [
      'Your website is your most important sales asset — and most agencies treat it as an afterthought. We build performance-first websites for ecommerce and service brands that are fast, conversion-optimised, and designed to grow with you. Every project starts with your commercial goals, not a template.',
      "We don't just make things look good — we build for results. Optimised page structure, Core Web Vitals-ready architecture, clear CTAs above the fold, and analytics baked in from day one. Every site we deliver is built to run paid traffic from launch and rank organically over time.",
    ],
    outcomes: [
      'Shopify & Next.js ecommerce builds',
      'Conversion-optimised landing pages',
      'Core Web Vitals & performance-first architecture',
      'Analytics, GTM & full tracking setup',
      'Brand-consistent UI design & copywriting',
    ],
    related: ['direct-response','seo'],
    portfolio: {
      projects: [
        {
          name: 'WhichPodcast',
          url: 'https://www.whichpodcast.com',
          urlLabel: 'whichpodcast.com',
          challenge: 'Client wanted to create the Netflix of podcasts — a rich discovery platform with a familiar content-grid feel and the ability for creators to upload their own shows.',
          solution: 'We built a Netflix-inspired UI and introduced AI-powered natural language search, letting users find podcasts by mood, topic, guest, or feeling — not just keyword.',
          desktopImg: '/portfolio-whichpodcast-desktop.jpg',
          mobileImg: '/portfolio-whichpodcast-mobile.jpg',
        },
        {
          name: 'Ayla Property',
          url: 'https://www.aylaproperty.com',
          urlLabel: 'aylaproperty.com',
          challenge: 'Client needed a lead-generating site that projected authority in the Bali property market — without the distraction of a browseable listing tool.',
          solution: 'We removed the property search entirely and built a high-converting landing page structured around authority content and linkable assets that drive direct enquiries.',
          desktopImg: '/portfolio-ayla-desktop.jpg',
          mobileImg: '/portfolio-ayla-mobile.jpg',
        },
        {
          name: 'Leng Media',
          url: 'https://www.lengmedia.com',
          urlLabel: 'lengmedia.com',
          challenge: 'Our own site needed a major upgrade — something modern and unmistakably distinct from the generic agency template.',
          solution: 'Built from scratch in Next.js with a custom canvas animation, dark design system, and Core Web Vitals optimisation. Ready to run paid traffic from day one.',
          desktopImg: '/portfolio-lengmedia-desktop.jpg',
          mobileImg: '/portfolio-lengmedia-mobile.jpg',
        },
      ],
    },
  },
}

function FunnelDiagram() {
  const digital = ['META', 'GOOGLE ADS', 'TIKTOK', 'LINKEDIN', 'DISPLAY']
  const traditional = ['DAYTIME TV', 'PRESS ADS', 'DIRECT MAIL']
  const all = [...digital, ...traditional]
  const px = [55, 160, 268, 375, 468, 568, 682, 800]
  const tx = [215, 272, 332, 390, 448, 505, 563, 622]

  return (
    <svg viewBox="0 0 870 315" style={{width:'100%',maxWidth:870,display:'block',margin:'0 auto'}} aria-label="Platform agnostic funnel — digital and traditional channels">
      {/* Group annotations */}
      <text x="262" y="13" textAnchor="middle" fontFamily="'Courier New',monospace" fontSize="8" fill="rgba(212,255,0,0.6)" letterSpacing="2">// DIGITAL</text>
      <text x="683" y="13" textAnchor="middle" fontFamily="'Courier New',monospace" fontSize="8" fill="rgba(255,255,255,0.32)" letterSpacing="2">// TRADITIONAL</text>

      {/* Divider between groups */}
      <line x1="518" y1="20" x2="518" y2="103" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="3,5" />

      {/* Convergence lines */}
      {all.map((_, i) => (
        <line key={`l${i}`} x1={px[i]} y1={54} x2={tx[i]} y2={106}
          stroke={i < 5 ? 'rgba(212,255,0,0.28)' : 'rgba(255,255,255,0.16)'}
          strokeWidth="1" strokeDasharray="4,4" />
      ))}

      {/* Channel dots */}
      {all.map((_, i) => (
        <circle key={`d${i}`} cx={px[i]} cy={54} r={i < 5 ? 3 : 2.5}
          fill={i < 5 ? '#d4ff00' : 'rgba(255,255,255,0.5)'} opacity={i < 5 ? 0.65 : 0.75} />
      ))}

      {/* Channel labels */}
      {all.map((p, i) => (
        <text key={`p${i}`} x={px[i]} y={38} textAnchor="middle"
          fontFamily="'Courier New',monospace"
          fontSize={i < 5 ? 9 : 8}
          fill={i < 5 ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.3)'}
          letterSpacing="1.5">
          {p}
        </text>
      ))}

      {/* Funnel trapezoid */}
      <polygon points="215,106 628,106 462,228 385,228"
        fill="rgba(212,255,0,0.04)" stroke="rgba(212,255,0,0.55)" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Funnel triangle */}
      <polygon points="385,228 462,228 423,263"
        fill="rgba(212,255,0,0.07)" stroke="rgba(212,255,0,0.55)" strokeWidth="1.5" strokeLinejoin="round" />

      {/* Funnel label */}
      <text x="423" y="161" textAnchor="middle" fontFamily="'Courier New',monospace" fontSize="12" fill="rgba(255,255,255,0.6)" letterSpacing="3">SMART</text>
      <text x="423" y="179" textAnchor="middle" fontFamily="'Courier New',monospace" fontSize="12" fill="rgba(255,255,255,0.6)" letterSpacing="3">STRATEGY</text>

      {/* Output arrow */}
      <line x1="423" y1="267" x2="423" y2="281" stroke="rgba(212,255,0,0.6)" strokeWidth="2" />
      <polygon points="416,278 430,278 423,292" fill="rgba(212,255,0,0.7)" />

      {/* Result label */}
      <text x="423" y="310" textAnchor="middle" fontFamily="'Courier New',monospace" fontSize="13" fill="#d4ff00" letterSpacing="4">ROI {'&'} PROFIT</text>
    </svg>
  )
}

function TrafficChart() {
  const W = 860, H = 300, PL = 52, PR = 20, PT = 48, PB = 44
  const cW = W - PL - PR, cH = H - PT - PB

  // 24 months of realistic organic traffic — seasonality, dips, overall upward trend
  // Takeover happens after month index 7 (Aug)
  const data = [
    { m: 'May', v: 680 },
    { m: 'Jun', v: 720 },
    { m: 'Jul', v: 695 },
    { m: 'Aug', v: 760 },
    { m: 'Sep', v: 730 },
    { m: 'Oct', v: 810 },
    { m: 'Nov', v: 850 },
    { m: 'Dec', v: 890 },  // ← LENG MEDIA TOOK OVER (after this bar)
    { m: 'Jan', v: 820 },  // jan dip post-christmas
    { m: 'Feb', v: 960 },
    { m: 'Mar', v: 1240 },
    { m: 'Apr', v: 1580 },
    { m: 'May', v: 1490 }, // slight regression
    { m: 'Jun', v: 1820 },
    { m: 'Jul', v: 1750 }, // summer dip
    { m: 'Aug', v: 2190 },
    { m: 'Sep', v: 2680 },
    { m: 'Oct', v: 3140 },
    { m: 'Nov', v: 4280 }, // q4 spike
    { m: 'Dec', v: 5120 },
    { m: 'Jan', v: 4350 }, // post-xmas dip
    { m: 'Feb', v: 4980 },
    { m: 'Mar', v: 6240 },
    { m: 'Apr', v: 7180 },
  ]

  const maxV = 8000
  const takeoverIdx = 7 // after bar index 7
  const n = data.length
  const barW = (cW / n) * 0.62
  const gap = cW / n

  const bx = (i: number) => PL + i * gap + (gap - barW) / 2
  const by = (v: number) => PT + cH - (v / maxV) * cH
  const bh = (v: number) => (v / maxV) * cH

  const yTicks = [0, 2000, 4000, 6000, 8000]
  const takeoverX = PL + (takeoverIdx + 1) * gap

  // Trend line — smooth curve through data midpoints
  const tpts = data.map((d, i) => [bx(i) + barW / 2, by(d.v)] as [number, number])
  let trendD = `M ${tpts[0][0]} ${tpts[0][1]}`
  for (let i = 1; i < tpts.length; i++) {
    const [x0, y0] = tpts[i - 1], [x1, y1] = tpts[i]
    const cx = (x0 + x1) / 2
    trendD += ` C ${cx} ${y0} ${cx} ${y1} ${x1} ${y1}`
  }

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{width:'100%',maxWidth:W,display:'block',margin:'0 auto'}} aria-label="Organic traffic growth after Leng Media engagement">
      <defs>
        <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d4ff00" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#d4ff00" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="barGradMuted" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d4ff00" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#d4ff00" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {/* Background panel */}
      <rect x={PL} y={PT} width={cW} height={cH} fill="rgba(255,255,255,0.015)" rx="2" />

      {/* Grid lines + Y labels */}
      {yTicks.map(t => {
        const y = PT + cH - (t / maxV) * cH
        return (
          <g key={t}>
            <line x1={PL} y1={y} x2={W - PR} y2={y}
              stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
            <text x={PL - 6} y={y + 4} textAnchor="end"
              fontFamily="'Courier New',monospace" fontSize="8.5"
              fill="rgba(255,255,255,0.3)">
              {t === 0 ? '0' : `${t / 1000}k`}
            </text>
          </g>
        )
      })}

      {/* Bars */}
      {data.map((d, i) => (
        <rect key={i}
          x={bx(i)} y={by(d.v)}
          width={barW} height={bh(d.v)}
          fill={i <= takeoverIdx ? 'url(#barGradMuted)' : 'url(#barGrad)'}
          rx="1.5"
        />
      ))}

      {/* Trend line */}
      <path d={trendD} fill="none" stroke="rgba(212,255,0,0.5)" strokeWidth="1.5"
        strokeDasharray="none" opacity="0.7" />

      {/* Takeover vertical line */}
      <line x1={takeoverX} y1={PT - 8} x2={takeoverX} y2={PT + cH}
        stroke="#d4ff00" strokeWidth="1.2" strokeDasharray="4,3" opacity="0.6" />

      {/* Takeover label box */}
      <rect x={takeoverX - 82} y={PT - 26} width={164} height={22} rx="3"
        fill="rgba(10,10,10,0.9)" stroke="rgba(212,255,0,0.4)" strokeWidth="1" />
      <text x={takeoverX} y={PT - 11} textAnchor="middle"
        fontFamily="'Courier New',monospace" fontSize="9" letterSpacing="2.5"
        fill="#d4ff00">
        LENG MEDIA TOOK OVER
      </text>

      {/* X-axis month labels — every other one to avoid crowding */}
      {data.map((d, i) => i % 2 === 0 ? (
        <text key={i}
          x={bx(i) + barW / 2} y={PT + cH + 14}
          textAnchor="middle" fontFamily="'Courier New',monospace"
          fontSize="8" fill="rgba(255,255,255,0.28)">
          {d.m}
        </text>
      ) : null)}

      {/* Y-axis label */}
      <text x={10} y={PT + cH / 2} textAnchor="middle"
        fontFamily="'Courier New',monospace" fontSize="7.5"
        fill="rgba(255,255,255,0.2)" letterSpacing="1.5"
        transform={`rotate(-90, 10, ${PT + cH / 2})`}>
        ORGANIC TRAFFIC
      </text>

      {/* Footer note */}
      <text x={W - PR} y={H - 4} textAnchor="end"
        fontFamily="'Courier New',monospace" fontSize="7"
        fill="rgba(255,255,255,0.15)" letterSpacing="1.5">
        // CLIENT NAME OMITTED · REAL DATA
      </text>
    </svg>
  )
}

export async function generateStaticParams() {
  return Object.keys(SERVICES).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const s = SERVICES[slug]
  if (!s) return {}
  return {
    title: `${s.name} – Leng Media`,
    description: s.metaDescription,
    alternates: { canonical: `https://www.lengmedia.com/services/${slug}` },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const s = SERVICES[slug]
  if (!s) notFound()

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroGrid} />
        <div className={styles.heroScanlines} />
        <div className={styles.heroContent}>
          <Link href="/#services" className={styles.back}>← All Services</Link>
          <p className={styles.num}>{s.num} / 07</p>
          <h1 className={styles.title}>{s.name}</h1>
          <p className={styles.tagline}>{s.tagline}</p>
        </div>
      </section>

      <Ticker />

      {/* BODY */}
      <section className={styles.body}>
        <div className={styles.bodyLeft}>
          <ScrollReveal>
            <span className="section-label">// Overview</span>
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

      {/* SHOWCASE — interactive examples */}
      {s.showcase && (
        <section className={styles.showcase}>
          {s.showcase.imageRevamp && (
            <ScrollReveal>
              <div className={styles.showcaseBlock}>
                <BeforeAfterSlider
                  before={s.showcase.imageRevamp.before}
                  after={s.showcase.imageRevamp.after}
                />
                <div className={styles.showcaseText}>
                  <span className={styles.showcaseLabel}>// Image Revamping</span>
                  <h2 className={styles.showcaseHeading}>{s.showcase.imageRevamp.heading}</h2>
                  <p className={styles.showcaseCopy}>{s.showcase.imageRevamp.copy}</p>
                </div>
              </div>
            </ScrollReveal>
          )}
          {s.showcase.chatbot && (
            <ScrollReveal delay={1}>
              <div className={`${styles.showcaseBlock} ${styles.showcaseBlockReverse}`}>
                {s.showcase.chatbot.image ? (
                  <img src={s.showcase.chatbot.image} alt="AI chatbot lead generation" className={styles.showcaseImg} />
                ) : (
                  <div className={styles.showcasePlaceholder}>// Screenshot coming soon</div>
                )}
                <div className={styles.showcaseText}>
                  <span className={styles.showcaseLabel}>// AI Chatbot</span>
                  <h2 className={styles.showcaseHeading}>{s.showcase.chatbot.heading}</h2>
                  <p className={styles.showcaseCopy}>{s.showcase.chatbot.copy}</p>
                </div>
              </div>
            </ScrollReveal>
          )}
          {s.showcase.agents && (
            <ScrollReveal delay={2}>
              <div className={styles.showcaseBlock}>
                <div className={styles.showcasePlaceholder}>// AI Agents</div>
                <div className={styles.showcaseText}>
                  <span className={styles.showcaseLabel}>// AI Agents</span>
                  <h2 className={styles.showcaseHeading}>{s.showcase.agents.heading}</h2>
                  <p className={styles.showcaseCopy}>{s.showcase.agents.copy}</p>
                </div>
              </div>
            </ScrollReveal>
          )}
        </section>
      )}

      {/* PORTFOLIO — website showcase */}
      {s.portfolio && (
        <section className={styles.portfolio}>
          <ScrollReveal style={{ marginBottom: 56 }}>
            <span className="section-label">// Our work</span>
            <h2 className={styles.portfolioTitle}>Sites we&apos;ve built.</h2>
          </ScrollReveal>
          {s.portfolio.projects.map((project, i) => (
            <ScrollReveal key={project.name} delay={(i % 2 === 0 ? 1 : 2) as 1|2}>
              <div className={styles.portfolioItem}>
                <div className={styles.portfolioText}>
                  <p className={styles.portfolioNum}>// {String(i + 1).padStart(2, '0')}</p>
                  <h3 className={styles.portfolioName}>{project.name}</h3>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.portfolioUrl}>
                    {project.urlLabel} ↗
                  </a>
                  <div className={styles.portfolioMeta}>
                    <div className={styles.portfolioBlock}>
                      <span className={styles.portfolioBlockLabel}>// The challenge</span>
                      <p className={styles.portfolioBlockText}>{project.challenge}</p>
                    </div>
                    <div className={styles.portfolioBlock}>
                      <span className={styles.portfolioBlockLabel}>// Our approach</span>
                      <p className={styles.portfolioBlockText}>{project.solution}</p>
                    </div>
                  </div>
                </div>
                <div className={styles.portfolioScreenshots}>
                  <div className={styles.portfolioDesktop}>
                    <img src={project.desktopImg} alt={`${project.name} desktop`} className={styles.portfolioDesktopImg} />
                    <span className={styles.portfolioImgLabel}>// Desktop</span>
                  </div>
                  <div className={styles.portfolioMobile}>
                    <img src={project.mobileImg} alt={`${project.name} mobile`} className={styles.portfolioMobileImg} />
                    <span className={styles.portfolioImgLabel}>// Mobile</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </section>
      )}

      {/* SEO — 4 pillars + traffic chart */}
      {s.seoPillars && (
        <section className={styles.seoSection}>
          <div className={styles.seoPillarsWrap}>
            <ScrollReveal style={{ marginBottom: 48 }}>
              <span className="section-label">// Our Process</span>
              <h2 className={styles.seoHeading}>The four pillars of ecommerce SEO.</h2>
            </ScrollReveal>
            <div className={styles.seoPillarsGrid}>
              {s.seoPillars.pillars.map((pillar, i) => (
                <ScrollReveal key={pillar.num} delay={(i % 2 === 0 ? 1 : 2) as 1|2}>
                  <div className={styles.seoPillarCard}>
                    <p className={styles.seoPillarNum}>// {pillar.num}</p>
                    <h3 className={styles.seoPillarTitle}>{pillar.title}</h3>
                    <p className={styles.seoPillarBody}>{pillar.body}</p>
                    {pillar.items && (
                      <ul className={styles.seoPillarItems}>
                        {pillar.items.map(item => (
                          <li key={item} className={styles.seoPillarItem}>
                            <span className={styles.seoPillarDot}>◆</span>{item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
          <div className={styles.seoChart}>
            <ScrollReveal>
              <span className="section-label">// Real Results</span>
              <h2 className={styles.seoHeading}>What the traffic looks like.</h2>
              <p className={styles.seoCopy}>A real client. The name&apos;s omitted — but the results aren&apos;t.</p>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <TrafficChart />
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* PROOF — platform funnel + live results */}
      {s.proof && (
        <>
          <section className={styles.proofFunnel}>
            <ScrollReveal>
              <h2 className={styles.proofHeadline}>{s.proof.funnelTagline}</h2>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <FunnelDiagram />
            </ScrollReveal>
          </section>
          <section className={styles.proofStats}>
            <ScrollReveal style={{marginBottom:40}}>
              <span className="section-label">{s.proof.statsLabel}</span>
            </ScrollReveal>
            <div className={styles.proofGrid}>
              {s.proof.stats.map((stat, i) => (
                <ScrollReveal key={i} delay={(i < 2 ? 1 : 2) as 1|2}>
                  <div className={styles.proofStat}>
                    <span className={styles.proofValue}>{stat.value}</span>
                    <span className={styles.proofLabel}>{stat.label}</span>
                    <span className={styles.proofSub}>{stat.sub}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            {s.proof.proofImage && (
              <ScrollReveal style={{marginTop:2}}>
                <div className={styles.proofImageWrap}>
                  <span className={styles.proofImageLabel}>// Campaign Screenshot · May–Jun 2025</span>
                  <img src={s.proof.proofImage} alt="Meta Ads Manager — May–Jun 2025 campaign results" className={styles.proofImage} />
                  <p className={styles.proofImageCaption}>A snapshot of one of our clients&apos; campaigns.<br />If you&apos;d like to know how we can help you just <a href="/business-enquiry" className={styles.proofImageLink}>book a call</a>.</p>
                </div>
              </ScrollReveal>
            )}
          </section>
        </>
      )}

      {/* RELATED SERVICES */}
      {s.related.length > 0 && (
        <section className={styles.related}>
          <ScrollReveal style={{marginBottom:40}}>
            <span className="section-label">// Related Services</span>
          </ScrollReveal>
          <div className={styles.relatedGrid}>
            {s.related.map(relSlug => {
              const rel = SERVICES[relSlug]
              if (!rel) return null
              return (
                <Link key={relSlug} href={`/services/${relSlug}`} className={styles.relatedCard}>
                  <div>
                    <p style={{fontFamily:'var(--font-mono)',fontSize:'9px',letterSpacing:'2px',color:'var(--neon)',textTransform:'uppercase',marginBottom:10}}>{rel.num} / 07</p>
                    <span className={styles.relatedName}>{rel.name}</span>
                  </div>
                  <span className={styles.relatedArrow}>↗</span>
                </Link>
              )
            })}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className={styles.cta}>
        <ScrollReveal>
          <span className="section-label">// Get in touch</span>
          <h2 className="section-title">Want to <em>chat?</em></h2>
          <p className={styles.ctaSub}>Let&apos;s talk about what {s.name.toLowerCase()} can do for your brand</p>
          {/* TODO: Replace with your Calendly link */}
          <Link href="/business-enquiry" className="btn-primary" style={{fontSize:12,padding:'18px 52px'}}>Book a Call</Link>
        </ScrollReveal>
      </section>
    </>
  )
}
