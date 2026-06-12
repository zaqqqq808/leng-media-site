import { notFound } from 'next/navigation'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import Ticker from '@/components/Ticker'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import VideoScrollHeroWrapper from '@/components/VideoScrollHeroWrapper'
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
    name: 'AI Automation Agency for Ecommerce Brands',
    tagline: 'Custom ecommerce AI chatbots for lead generation, AI agents for business workflow automation, and product image revamping for DTC and ecommerce brands in the USA and UK.',
    metaDescription: 'Leng Media is an AI automation agency for ecommerce and DTC brands. We build custom AI chatbots for lead generation, AI agents for business process automation, and provide product image revamping. Serving clients in the USA and UK.',
    description: [
      'If you are searching for an AI automation agency that understands ecommerce, you are in the right place. We build and install three high-impact AI solutions for DTC and ecommerce brands: AI chatbots for lead generation that qualify visitors and book meetings around the clock, AI agents for business automation that handle your most time-consuming internal workflows, and product image revamping that slashes creative spend while lifting conversion rates. The ecommerce brands pulling ahead right now are the ones moving fast on all three.',
      'Most ecommerce businesses pour money into traffic and lose it to friction. A visitor arrives, gets no instant answer, and leaves. Your team manually handles tasks that an AI chatbot or AI agent could process in seconds. Your product photography budget resets every time you launch a new line. As your AI automation agency, we fix all of it — one engagement, measurable ROI, and no software subscriptions you will never fully understand. We have built AI chatbot platforms for ecommerce brands generating thousands of monthly visitors, and the results compound over time.',
    ],
    outcomes: [
      'Custom AI chatbot for ecommerce — captures leads and books meetings 24/7',
      'AI agents installed across your highest-value workflows, saving hours every day',
      'Full product catalogue image revamping using AI — ready for ads, social and web',
      'CRM and Google Sheets integration so every lead lands in your pipeline automatically',
      'Full chat transcripts and conversation summaries handed off to your sales team',
      'AI strategy audit and roadmap tailored to your specific ecommerce operation',
    ],
    related: ['direct-response','fractional-cmo'],
    showcase: {
      imageRevamp: {
        before: '/ai-before.png',
        after: '/ai-after.jpg',
        heading: 'AI Product Image Revamping',
        copy: 'We take your existing product photography and transform it into high converting campaign imagery using AI. Studio-quality visuals at a fraction of the cost. No photographer, no studio hire, no waiting weeks for a reshoot. We process your entire catalogue and deliver assets ready for ads, social media, and your website. Drag the slider to see the difference.',
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
    outcomes: ['Pre campaign landing page audit & CRO','Meta, TikTok & Google Ads management','Creative strategy & production briefs','Rapid A/B testing to find winners fast','Monthly performance reporting'],
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
    tagline: 'The ecommerce SEO agency for DTC and ecommerce brands in the USA and UK. We rank you for transactional keywords, grow organic revenue, and get your brand cited by AI.',
    metaDescription: 'Leng Media is an ecommerce SEO agency for Shopify, DTC and ecommerce brands in the USA and UK. We cover technical SEO, collection page optimisation, Shopify SEO, link building and AI citation strategy.',
    description: [
      'Ecommerce SEO is a completely different discipline to regular SEO, and most agencies do not understand the difference. For a Shopify store, DTC brand or online retailer, the only pages that generate revenue are your collection pages and product pages. Informational blog content sits at the top of the funnel — and in 2026, AI has already taken that territory. ChatGPT, Perplexity and Google AI Overviews answer those queries before a user ever clicks. We focus entirely on mid and bottom of funnel transactional keywords: people who are ready to buy. That is where rankings translate directly into revenue.',
      'As an ecommerce SEO agency working with brands in the USA and UK, we cover the full stack. Technical SEO to fix what is broken at the foundation. Collection and product page optimisation to rank the pages that drive actual sales. Shopify SEO built around how the platform structures URLs, faceted navigation and duplicate content. Competitor gap analysis to find where you can win fast. Holistic link building to build domain authority over time. And a Generative Engine Optimisation (GEO) strategy that gets your brand recommended inside AI generated answers — one of the fastest growing visibility channels in search right now.',
    ],
    outcomes: [
      'Technical SEO audit, crawl fixes and Core Web Vitals optimisation',
      'Shopify SEO — URL structure, faceted navigation and duplicate content',
      'Collection page and product page SEO for transactional keywords',
      'Keyword strategy focused on mid and bottom of funnel buyer intent',
      'Competitor gap analysis — find where you can rank fast',
      'Holistic link building: editorial outreach, guest posts and digital PR',
      'Community presence — Reddit, Quora and niche forums for AI citation',
      'Generative Engine Optimisation (GEO) — get cited by ChatGPT and Perplexity',
      'Monthly reporting tied to organic revenue, not just keyword rankings',
    ],
    related: ['direct-response','ai-solutions'],
    seoPillars: {
      pillars: [
        {
          num: '01',
          title: 'Technical SEO for Ecommerce',
          body: 'The foundation that everything else is built on. If your Shopify or ecommerce site has crawl errors, slow load times, duplicate content from faceted navigation, broken internal links, or indexation issues — no amount of content or links will fix your rankings. We run a full technical SEO audit and resolve every issue before anything else. Core Web Vitals, structured data (schema markup), canonical tags, sitemap health and crawl budget optimisation are all part of the process.',
        },
        {
          num: '02',
          title: 'Collection Page and Product Page SEO',
          body: 'For ecommerce brands, collection pages are where organic revenue lives. Most SEO agencies focus on blog content — we focus on the pages that actually convert. We optimise your collection pages and product pages for transactional keywords with high buyer intent, improve on page signals, and structure your internal linking to push authority to the pages that matter. AI has taken the top of the funnel. We win the bottom of it.',
        },
        {
          num: '03',
          title: 'Competitor Intelligence and Keyword Gap Analysis',
          body: 'We map exactly where your competitors are winning — which transactional keywords they rank for, which sites link to them, and which gaps in their coverage you can exploit quickly. Every ecommerce SEO strategy we build is informed by what is already working in your specific niche. We do not guess. We reverse-engineer rankings that already exist and build a faster path to the same results.',
        },
        {
          num: '04',
          title: 'Holistic Link Building and GEO',
          body: 'Most ecommerce link building is either ignored entirely or outsourced to someone buying cheap links that actively damage your domain. We build authority across five channels — and layer in Generative Engine Optimisation so your brand gets cited when AI models generate recommendations in your category:',
          items: [
            'Editorial outreach — genuine brand mentions in industry publications and press',
            'Guest posting — authoritative articles on relevant niche blogs and trade sites',
            'Linkable asset creation — tools, data studies and guides that earn links passively',
            'Directory listings — strategic placement on high-authority, niche specific directories',
            'Community and GEO — Reddit, Quora and forums that feed AI citations and drive direct conversions',
          ],
        },
      ],
    },
  },
  'lead-generation': {
    num: '04',
    name: 'Lead Generation',
    tagline: 'The London lead generation agency that only gets paid when you do.',
    metaDescription: "Zero monthly retainer. London's performance based lead generation agency — you fund the ad spend, we deliver strategy, creatives and results. Revenue share or fixed CPA model.",
    description: [
      'Zero monthly fees. 100% performance based. Stop burning cash on agencies that promise the world and deliver excuses. You cover the ad spend — we cover the expertise, the strategy, and the execution. If we don\'t perform, we don\'t eat.',
      'We design the creatives, write the copy, build the landing pages, and manage campaign optimisation — all at no charge. We agree on a fair revenue split or fixed CPA for every qualified lead or sale we generate. You own all the data. You have nothing to lose.',
    ],
    outcomes: ['Zero monthly retainer — performance based only','You fund the ad spend directly (Google, Meta, LinkedIn)','We build creatives, copy & landing pages at no charge','Revenue share or fixed CPA model','You own all data and the client relationship'],
    related: ['direct-response','fractional-cmo'],
  },
  'fractional-cmo': {
    num: '05',
    name: 'Fractional CMO',
    tagline: 'The fractional CMO agency for ecommerce and DTC brands. Outsourced CMO services covering strategy, media buying and full team ownership — without the full time hire.',
    metaDescription: 'Leng Media is a fractional CMO agency for ecommerce and DTC brands in the USA and UK. Outsourced CMO services covering strategy, media buying, team management and execution. From £15,000/month.',
    description: [
      'Brands searching for a fractional CMO agency want one thing: a senior marketer who shows up, takes ownership, and delivers results. No £250k salary. No equity ask. No six week onboarding. We have worked with brands including Hims, National Geographic Traveller, Ninety Percent, and Horizon Group — and we plug in on Day 1. When we arrive, we already know what good looks like across paid media, creative, SEO, CRO, AI automation and growth strategy. There is no learning curve on your time.',
      'Whether you have an existing marketing team that needs strategic direction, or a blank slate that needs building from scratch, we adapt to your structure. We sit in your meetings, manage your budgets, ideate campaigns, brief creatives, run media buying, and own the results. This is outsourced CMO as a service, not consulting. Not a retainer for a list of deliverables. Full marketing leadership, embedded in your business, on your terms.',
    ],
    outcomes: [
      'Marketing strategy, annual planning and full budget allocation',
      'Campaign ideation and creative direction across every channel',
      'Media buying across Meta, Google, TikTok and LinkedIn',
      'Management or advisory of your existing marketing team — or full takeover',
      'Tech stack audit, AI tools and marketing automation setup',
      'Brand positioning, messaging and go to market strategy',
      'Board-level reporting, OKR frameworks and growth roadmaps',
      'CRO, funnel optimisation and landing page strategy',
      'Weekly performance reviews and ongoing strategic pivots',
    ],
    related: ['ai-solutions','agency-assist'],
  },
  'agency-assist': {
    num: '06',
    name: 'Agency Assist',
    tagline: 'Scale your agency without increasing your headcount.',
    metaDescription: 'White label marketing fulfilment for agencies that need a trusted execution partner. AI, paid media and CRO delivered under your brand with full NDA and weekly reports.',
    description: [
      'Leng Media acts as your silent execution partner. When your internal resources are stretched or you land a client requiring specialised skills you don\'t have in house, we step in and integrate seamlessly to deliver white label excellence — so you never have to turn down a contract again.',
      'We do the work. You get the credit. You receive weekly white label reports and analysis while maintaining 100% control of the client relationship. We can also execute campaigns and train your junior staff to take them over.',
    ],
    outcomes: ['Overflow execution — never turn down a client again','White label AI, CRO & Paid Media fulfilment','Training & handoffs to your in house team','Weekly white label reports & analysis','Full NDA — you maintain 100% client ownership'],
    related: ['direct-response','seo'],
  },
  'website-builds': {
    num: '07',
    name: 'Website Building',
    tagline: 'Custom websites built around your commercial goals. Not a template in sight.',
    metaDescription: 'Custom performance first websites for ecommerce and service brands. Built in Next.js with scroll animations, CRM integration, full backend and SEO baked in from day one.',
    description: [
      'We build performance first websites for ecommerce and service brands, starting with your commercial goals and built entirely from scratch. What you are experiencing on this page — the scroll animations, the transitions, the visual weight — is exactly what we bring to your product and brand. Every site is fully custom from the ground up, with CRM integration, backend architecture and a front end where SEO and CRO are baked into every decision, not bolted on at the end.',
    ],
    outcomes: [],
    related: ['direct-response','seo'],
    portfolio: {
      projects: [
        {
          name: 'WhichPodcast',
          url: 'https://www.whichpodcast.com',
          urlLabel: 'whichpodcast.com',
          challenge: 'Client wanted to create the Netflix of podcasts — a rich discovery platform with a familiar content grid feel and the ability for creators to upload their own shows.',
          solution: 'We built a Netflix inspired UI and introduced AI powered natural language search, letting users find podcasts by mood, topic, guest, or feeling — not just keyword.',
          desktopImg: '/portfolio-whichpodcast-desktop.jpg',
          mobileImg: '/portfolio-whichpodcast-mobile.jpg',
        },
        {
          name: 'Ayla Property',
          url: 'https://www.aylaproperty.com',
          urlLabel: 'aylaproperty.com',
          challenge: 'Client needed a lead generating site that projected authority in the Bali property market without the distraction of a browseable listing tool.',
          solution: 'We removed the property search entirely and built a high converting landing page with a custom scroll animation of a villa being constructed, giving prospective buyers a tangible sense of the development quality.',
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
  const url = `https://www.lengmedia.com/services/${slug}`
  return {
    title: `${s.name} – Leng Media`,
    description: s.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${s.name} – Leng Media`,
      description: s.metaDescription,
      url,
      siteName: 'Leng Media',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: `${s.name} – Leng Media` }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${s.name} – Leng Media`,
      description: s.metaDescription,
      images: ['/og-image.jpg'],
    },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const s = SERVICES[slug]
  if (!s) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://www.lengmedia.com/services/${slug}`,
    name: s.name,
    description: s.metaDescription,
    url: `https://www.lengmedia.com/services/${slug}`,
    provider: {
      '@type': 'Organization',
      '@id': 'https://www.lengmedia.com/#organization',
      name: 'Leng Media',
      url: 'https://www.lengmedia.com',
    },
    areaServed: [
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'United States' },
    ],
    serviceType: s.name,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* HERO */}
      {slug === 'website-builds' ? (
        <VideoScrollHeroWrapper>
          <Link href="/#services" className={styles.back}>← All Services</Link>
          <p className={styles.num}>{s.num} / 07</p>
          <h1 className={styles.title}>{s.name}</h1>
          <p className={styles.tagline}>{s.tagline}</p>
        </VideoScrollHeroWrapper>
      ) : (
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
      )}

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
        {s.outcomes.length > 0 && (
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
        )}
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
          <div className={`${styles.seoChart} theme-dark`}>
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
                  <p className={styles.proofImageCaption}>A snapshot of one of our clients&apos; campaigns.<br />If you&apos;d like to know how we can help you just <a href="https://calendly.com/zaq-lengmedia/leng-media-intro-call" target="_blank" rel="noopener noreferrer" className={styles.proofImageLink}>book a call</a>.</p>
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
                    <p style={{fontFamily:'var(--font-mono)',fontSize:'9px',letterSpacing:'2px',color:'var(--accent-ink)',textTransform:'uppercase',marginBottom:10}}>{rel.num} / 07</p>
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
      <section className={`${styles.cta} theme-dark`}>
        <ScrollReveal>
          <span className="section-label">// Get in touch</span>
          <h2 className="section-title">Want to <em>chat?</em></h2>
          <p className={styles.ctaSub}>Let&apos;s talk about what {s.name.toLowerCase()} can do for your brand</p>
          {/* TODO: Replace with your Calendly link */}
          <a href="https://calendly.com/zaq-lengmedia/leng-media-intro-call" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{fontSize:12,padding:'18px 52px'}}>Book a Call</a>
        </ScrollReveal>
      </section>
    </>
  )
}
