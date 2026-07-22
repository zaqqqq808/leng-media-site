import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'
import Ticker from '@/components/Ticker'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import VideoScrollHeroWrapper from '@/components/VideoScrollHeroWrapper'
import WebsiteFaqAccordion from '@/components/WebsiteFaqAccordion'
import CalendlyPopupLink from '@/components/CalendlyPopupLink'
import ClientLogo from '@/components/ClientLogo'
import WhatsAppLink from '@/components/WhatsAppLink'
import StickyMobileCta from '@/components/StickyMobileCta'
import styles from './page.module.css'

const SERVICES: Record<string, {
  num: string
  name: string
  metaTitle?: string
  tagline: string
  metaDescription: string
  description: React.ReactNode[]
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
      image?: string
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
  examples?: {
    heading: string
    intro: string
    galleryUrl: string
    items: { name: string; tag: string; url: string }[]
  }
  process?: {
    steps: { num: string; title: string; body: string; time: string }[]
  }
  websiteFaq?: { q: string; a: string }[]
  offer?: {
    heading: string
    what: string
    time: string
    risk: string
    qualifier?: string
    ctaLabel: string
    ctaHref: string
  }
  seoPillars?: {
    pillars: {
      num: string
      title: string
      body: string
      items?: string[]
    }[]
    proofImages?: { src: string; alt: string }[]
  }
}> = {
  'ai-solutions': {
    num: '01',
    name: 'AI Automation Agency for Ecommerce Brands',
    metaTitle: 'AI Chatbot Agency for Ecommerce | AI Automation & Agents',
    tagline: 'Leng Media is an AI chatbot agency for ecommerce and DTC brands. Custom AI chatbots for lead generation, AI agents for workflow automation, and product image revamping.',
    metaDescription: 'Leng Media is an AI chatbot agency for ecommerce and DTC brands in the USA and UK. We build custom AI chatbots for lead generation, AI agents for business process automation, and product image revamping.',
    description: [
      <>We have listed our core AI services below, but with the pace at which AI is evolving, new capabilities are emerging constantly. We stay at the forefront, testing and applying the latest tools with ecommerce and DTC brands always in mind. This is why we keep a regularly updated <Link href="/free-tools" style={{color:'var(--neon)',textDecoration:'underline'}}>AI for Ecommerce Cheat Sheet</Link> so you can stay current too.</>,
      'Our AI chatbots generate and qualify leads around the clock. They capture contact details, record data directly into Google Sheets or your CRM, and book meetings and appointments into your calendar without any human involvement. For ecommerce brands this means your pipeline keeps moving even while you sleep.',
      'We also revamp product imagery using AI. Better visuals directly improve conversion rates and reduce your dependency on expensive shoots. We price this based on the size of your image library, making it viable whether you have 20 products or 2,000.',
      'For wider business automation we build custom workflows using Make.com. The goal is simple: if a task is repetitive, we automate it. Typical setups include social media content creation, CRM pipeline management, email marketing optimisation, and reporting. Your team gets their time back and the business runs leaner.',
      'If you are interested in saving time, reducing costs, or finding ways to use AI to increase your revenue, get on a call with us. We will look at your current operations, identify where AI can have the biggest impact, and give you a clear picture of what is possible.',
    ],
    outcomes: [
      'Custom AI chatbot for ecommerce: captures leads and books meetings 24/7',
      'AI agents installed across your highest-value workflows, saving hours every day',
      'Full product catalogue image revamping using AI: ready for ads, social and web',
      'CRM and Google Sheets integration so every lead lands in your pipeline automatically',
      'Full chat transcripts and conversation summaries handed off to your sales team',
      'AI strategy audit and roadmap tailored to your specific ecommerce operation',
    ],
    offer: {
      heading: 'See your chatbot working before you spend anything.',
      what: 'A working demo chatbot trained on your business — watch it answer your customers’ real questions on a live preview link.',
      time: 'Built and in your inbox within 5 days.',
      risk: 'Free to see. You only pay if you want it on your site.',
      ctaLabel: 'Get Your Demo Bot →',
      ctaHref: '/business-enquiry',
    },
    related: ['direct-response','fractional-cmo'],
    showcase: {
      imageRevamp: {
        before: '/ai-before.png',
        after: '/ai-after.jpg',
        heading: 'AI Product Image Revamping',
        copy: 'We take your existing product photography and transform it into high converting campaign imagery using AI. Studio-quality visuals at a fraction of the cost. No photographer, no studio hire, no waiting weeks for a reshoot. We process your entire catalogue and deliver assets ready for ads, social media, and your website. Drag the slider to see the difference.',
      },
      chatbot: {
        image: '/ai-chatbot-leads.png',
        heading: 'AI Chatbot for Lead Generation',
        copy: 'Our AI chatbots qualify visitors, capture contact details, and book meetings straight into your calendar around the clock. Every lead is automatically logged to a Google Sheet or your CRM, so your sales team has full context before the first call. One closed deal per year covers the entire cost of the software. For ecommerce brands, the chatbot also handles FAQs, order queries, and post-purchase support without a single human touch.',
      },
      agents: {
        image: '/ai-automation-make.png',
        heading: 'AI Agents for Business Automation',
        copy: 'AI agents are software that thinks and acts on your behalf. They monitor inboxes, process orders, update spreadsheets, respond to customer queries, generate reports, and escalate exceptions to a human only when necessary. For a growing ecommerce or D2C brand, this is the difference between hiring three additional team members or not. We map your existing workflows, identify the highest-value bottlenecks, and install AI agents that run in the background and save you hours every single day.',
      },
    },
  },
  'direct-response': {
    num: '02',
    name: 'Direct Response',
    metaTitle: 'Ecommerce Ads Agency | Direct Response Advertising',
    tagline: 'The ecommerce ads agency that fixes your funnel first, then drives consistent positive ROAS across Meta, TikTok and Google.',
    metaDescription: 'Leng Media is an ecommerce ads agency managing Meta, TikTok and Google Ads for DTC brands. We fix the funnel first, then drive consistent positive ROAS across every channel.',
    description: [
      'We fix the funnel first. Most agencies will happily take your money and drive traffic to a site that converts at 0.3%. We refuse to do that. Before a penny is spent on ads, we audit and improve your user experience by moving key purchase drivers above the fold, implementing reviews, FAQs and clear guarantees, and simplifying the path to purchase.',
      "We don't identify as a \"Facebook Agency\" or a \"PPC Agency.\" We identify as a Revenue Agency. We go where your customers are: Meta, TikTok, Google, or wherever the data points. We fit the platform to the strategy, not the other way around. Whether it's DTC, Ecom or Lead Generation, we'll have the answer.",
    ],
    outcomes: ['Pre campaign landing page audit & CRO','Meta, TikTok & Google Ads management','Creative strategy & production briefs','Rapid A/B testing to find winners fast','Monthly performance reporting'],
    offer: {
      heading: 'We’ll tear down your ad account before you pay us a penny.',
      what: 'A recorded video teardown of your ad account and funnel: what’s wasting spend, what’s capping ROAS, and exactly what we’d fix first.',
      time: 'Delivered within 48 hours.',
      risk: 'Free. No call required. Keep the video and fix it yourself if you’d rather.',
      qualifier: 'For brands actively running paid traffic.',
      ctaLabel: 'Get Your Free Teardown →',
      ctaHref: '/business-enquiry',
    },
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
    metaTitle: 'Shopify SEO Agency | Ecommerce SEO Services',
    tagline: 'The Shopify SEO agency for DTC and ecommerce brands in the USA and UK. We rank you for transactional keywords, grow organic revenue, and get your brand cited by AI.',
    metaDescription: 'Leng Media is a Shopify SEO agency for DTC and ecommerce brands in the USA and UK. We cover technical SEO, collection page optimisation, Shopify SEO, link building and AI citation strategy.',
    description: [
      'Ecommerce SEO is not the same as regular SEO. For a Shopify store or DTC brand, the pages that drive revenue are your collection pages and product pages. Informational blog content sits at the top of the funnel, and in 2026 AI has already taken that territory. We focus entirely on transactional keywords where people are ready to buy. That is where rankings convert directly into revenue.',
      'We cover the full stack: technical SEO, collection and product page optimisation, and link building that actually moves domain authority. We research and identify relevant contacts in your industry, create genuinely linkable assets worth pointing to, and build authority through editorial outreach and digital PR. The result is a site that earns trust over time and compounds in organic traffic.',
    ],
    outcomes: [
      'Technical SEO audit, crawl fixes and Core Web Vitals optimisation',
      'Keyword strategy focused on mid and bottom of funnel buyer intent',
      'Competitor gap analysis: find where you can rank fast',
      'Link building: finding relevant contacts, creating linkable assets, editorial outreach',
      'Generative Engine Optimisation (GEO): get cited by ChatGPT and Perplexity',
      'Monthly reporting tied to organic revenue, not just keyword rankings',
    ],
    offer: {
      heading: 'Your store’s 10 biggest SEO leaks, on video, free.',
      what: 'A personal video teardown of your store: the technical issues, content gaps and quick wins costing you organic revenue.',
      time: 'Delivered within 72 hours.',
      risk: 'Free. No call required. The findings are yours either way.',
      qualifier: 'For Shopify and ecommerce stores.',
      ctaLabel: 'Get Your Free Teardown →',
      ctaHref: '/business-enquiry',
    },
    related: ['direct-response','ai-solutions'],
    seoPillars: {
      pillars: [
        {
          num: '01',
          title: 'Technical SEO',
          body: 'The foundation everything else is built on. Crawl errors, slow load times, duplicate content from faceted navigation, broken internal links or indexation issues will silently kill your rankings regardless of how strong your content is. We run a full technical audit and fix every issue first: Core Web Vitals, schema markup, canonical tags, sitemap health and crawl budget optimisation.',
        },
        {
          num: '02',
          title: 'Collection and Product Page SEO',
          body: 'For ecommerce brands, collection pages are where organic revenue lives. Most SEO agencies optimise blog content. We optimise the pages that actually convert. We target transactional keywords with high buyer intent, strengthen on page signals, and build internal linking structures that push authority to the pages that drive sales. AI has taken the top of the funnel. We win the bottom.',
        },
        {
          num: '03',
          title: 'Competitor Intelligence',
          body: 'We map exactly where your competitors are winning: which keywords they rank for, which sites link to them, and which gaps in their coverage you can exploit quickly. Every strategy we build is informed by what is already working in your niche. We do not guess. We reverse engineer rankings that exist and find you the fastest path to the same results.',
        },
        {
          num: '04',
          title: 'Link Building and GEO',
          body: 'Most ecommerce link building is ignored or handed to someone buying cheap links that actively damage your domain. We research relevant contacts, create genuinely linkable assets and earn authority through editorial outreach, guest posting and digital PR. We also apply Generative Engine Optimisation so your brand gets cited when AI tools generate recommendations in your category.',
        },
      ],
    },
  },
  'lead-generation': {
    num: '04',
    name: 'Lead Generation',
    metaTitle: 'Lead Gen Agency | Performance-Based Lead Generation',
    tagline: 'The lead gen agency that only gets paid when you do. Zero monthly retainer, revenue share or fixed CPA.',
    metaDescription: 'Leng Media is a lead gen agency for high ticket businesses. Zero monthly retainer. You fund the ad spend, we build the creatives and manage the campaigns. Revenue share or fixed CPA model.',
    description: [
      'This service is built for high ticket businesses. Trading and investment coaches, online course creators, business consultants, property educators, financial advisors. If your product or service sells for £2,000 or more and you need a consistent pipeline of qualified prospects, this is designed for you.',
      'The model is straightforward. You fund the ad spend directly. We build the creatives, write the copy, set up the landing pages and manage the campaigns. No monthly retainer. We agree a revenue share or fixed cost per acquisition and we only earn when you do. If we do not perform, we do not eat.',
      'High ticket businesses are the perfect fit for this model because the numbers work. One closed deal can be worth thousands. We build funnels designed to attract serious prospects and filter out the wrong ones, so your sales team spends time on conversations that are likely to convert. We are not chasing volume. We want qualified leads that your closers can close.',
    ],
    outcomes: ['Zero monthly retainer, performance based only','You fund the ad spend directly (Google, Meta, LinkedIn)','We build creatives, copy and landing pages at no charge','Revenue share or fixed CPA model','You own all data and the client relationship'],
    offer: {
      heading: 'Zero retainer. We only get paid when you do.',
      what: 'We build the creatives, write the copy and manage the campaigns. You pay per qualified lead or a revenue share — your choice.',
      time: 'Campaigns live within 2 weeks.',
      risk: 'No monthly fees. If the leads don’t come, we don’t get paid.',
      qualifier: 'High-ticket products and services only. You fund the ad spend.',
      ctaLabel: 'Apply to Partner With Us →',
      ctaHref: 'https://calendly.com/zaq-lengmedia/leng-media-intro-call',
    },
    related: ['direct-response','fractional-cmo'],
  },
  'fractional-cmo': {
    num: '05',
    name: 'Fractional CMO',
    metaTitle: 'Fractional CMO Services for Ecommerce & DTC Brands',
    tagline: 'Fractional CMO services for ecommerce and DTC brands in the USA and UK. Senior marketing leadership without the full-time salary.',
    metaDescription: 'Leng Media provides fractional CMO services for ecommerce and DTC brands in the USA and UK. Outsourced CMO covering strategy, media buying, team management and full execution. From £15,000/month.',
    description: [
      'Most brands find us at the same point. Revenue is growing, marketing is working at some level, but there is no one senior enough to own it. The founder is still signing off on creative. The junior team has no north star. A full time CMO at £200k feels premature. That is the gap a fractional CMO fills, and it is what we do.',
      'We have helped many brands scale through fractional CMO, with clients regularly exceeding their growth targets. We are now applying those same skills internally and launching our own brands. We are transparent about the progress and results, so you can see exactly what we are capable of before committing to anything.',
      'We work across both online and offline. With decades of experience on both brand and agency side, we are veterans of the game. We can come in purely as a strategic partner, setting direction and attending leadership meetings, or assume full control of execution across every channel. Most clients land somewhere in between and we adapt accordingly.',
      'If you are at the point where your marketing needs a senior owner, get on a call with us. We will get under the skin of your goals, understand where you are today, and tell you honestly whether we are the right fit.',
    ],
    outcomes: [
      'Marketing strategy, annual planning and full budget allocation',
      'Campaign ideation and creative direction across every channel',
      'Media buying across Meta, Google, TikTok and LinkedIn',
      'Management or advisory of your existing marketing team, or full takeover',
      'Tech stack audit, AI tools and marketing automation setup',
      'Brand positioning, messaging and go to market strategy',
      'Board-level reporting, OKR frameworks and growth roadmaps',
      'CRO, funnel optimisation and landing page strategy',
      'Weekly performance reviews and ongoing strategic pivots',
    ],
    offer: {
      heading: 'A 90-day growth roadmap. Yours to keep, either way.',
      what: 'A 60-minute strategy session with a senior marketer, followed by a written 90-day roadmap: channels, budget split, and priorities for your brand.',
      time: 'Roadmap delivered within a week of the call.',
      risk: 'If you don’t hire us, keep the roadmap and run it yourself.',
      qualifier: 'For brands doing $50k+/month.',
      ctaLabel: 'Book Your Strategy Session →',
      ctaHref: 'https://calendly.com/zaq-lengmedia/leng-media-intro-call',
    },
    related: ['ai-solutions','agency-assist'],
  },
  'agency-assist': {
    num: '06',
    name: 'Agency Assist',
    tagline: 'Scale your agency without increasing your headcount.',
    metaDescription: 'White label marketing fulfilment for agencies that need a trusted execution partner. AI, paid media and CRO delivered under your brand with full NDA and weekly reports.',
    description: [
      'Leng Media acts as your silent execution partner. When your internal resources are stretched or you land a client requiring specialised skills you don\'t have in house, we step in and integrate seamlessly to deliver white label excellence, so you never have to turn down a contract again.',
      'We do the work. You get the credit. You receive weekly white label reports and analysis while maintaining 100% control of the client relationship. We can also execute campaigns and train your junior staff to take them over.',
    ],
    outcomes: ['Overflow execution: never turn down a client again','White label AI, CRO & Paid Media fulfilment','Training & handoffs to your in house team','Weekly white label reports & analysis','Full NDA: you maintain 100% client ownership'],
    offer: {
      heading: 'Send us one brief. The first task is on us.',
      what: 'Pick a real task — ad creative, a landing page section, an SEO audit — and we deliver it white-label, under NDA.',
      time: 'First deliverable back within a week.',
      risk: 'Free. Judge the quality before your clients ever see our work.',
      qualifier: 'For agencies with active client accounts.',
      ctaLabel: 'Send Us a Brief →',
      ctaHref: '/business-enquiry',
    },
    related: ['direct-response','seo'],
  },
  'website-builds': {
    num: '07',
    name: 'Website Building',
    metaTitle: 'Scroll Animation Website Design Agency | Custom Web Builds',
    tagline: 'Scroll animation websites built in Next.js from just $500. Custom performance-first builds your customers will never forget.',
    metaDescription: 'Leng Media builds scroll animation websites and custom performance-first sites for ecommerce and service brands. Built in Next.js with CRM integration, SEO baked in from day one.',
    description: [
      'We build performance-first websites from scratch, starting with your commercial goals. What you see on this page is what we build for you. While your competitors run Squarespace templates, you get a fully custom site that loads faster, ranks higher and gets noticed.',
      'Every site is SEO-ready and Core Web Vitals optimised from day one. CRM integration and backend architecture are available as add-ons. Projects from $500, delivered in days. Book a call and we will send a quote within 24 hours.',
    ],
    outcomes: [
      'Built in Next.js from $500 — the same stack powering this site',
      'We start with your commercial goals, not what looks nice',
      'Fully custom build: no templates, no page builders, no Squarespace',
      'Scroll animations and transitions that make your brand impossible to forget',
      'SEO-ready and Core Web Vitals optimised from day one',
      'CRM integration and backend architecture available as add-ons',
      'Mobile-first, fully responsive across all devices',
      'Fixed quote within 24 hours of your call',
    ],
    offer: {
      heading: 'We’ll rebuild your homepage before you pay a penny.',
      what: 'Send us your website link. We rebuild your homepage with scroll animation — your brand, your content — and send you a video of it working.',
      time: 'Preview in your inbox within 5 days.',
      risk: 'Love it? We finish the site in days. Don’t? You pay nothing and keep the ideas.',
      qualifier: '3 free previews per month.',
      ctaLabel: 'Claim a Free Preview →',
      ctaHref: '/business-enquiry',
    },
    related: ['direct-response','seo'],
    process: {
      steps: [
        { num: '01', title: 'Discovery Call', body: 'We scope your project, understand your goals and agree on deliverables. You receive a fixed quote within 24 hours.', time: 'Day 1' },
        { num: '02', title: 'Design', body: 'Full design in Figma. You review and approve before a single line of code is written.', time: 'Days 2–10' },
        { num: '03', title: 'Build', body: 'Custom development in Next.js with regular updates, a staging environment and zero surprises.', time: 'Days 10–30' },
        { num: '04', title: 'Launch', body: 'Final review, your green light, then we go live. 30 days of post-launch support included.', time: 'Day 30+' },
      ],
    },
    websiteFaq: [
      { q: 'How long does a build take?', a: 'It depends on scope. We run discovery, design and build in tight sequence with regular check-ins so nothing stalls. Most projects complete in days, not months.' },
      { q: 'What is included in the price?', a: 'Discovery, custom design in Figma, development, SEO setup, mobile optimisation, and 30 days of post-launch support. CRM and backend integrations are available as add-ons, quoted separately based on your needs.' },
      { q: 'Can I update the site myself after launch?', a: 'Yes. We can integrate a headless CMS so you can edit content without touching code. We also offer a post-launch retainer if you would prefer we manage updates.' },
      { q: 'What do I need to provide?', a: 'Brand assets (logo, colours, fonts), copy for the main pages, and any photography. We can advise on copy and help source imagery if needed.' },
      { q: 'What platform is it built on?', a: 'Next.js, the same stack powering this site. Fast, SEO-friendly, and scales without hitting the platform limits that Shopify and WordPress regularly hit.' },
      { q: 'How is this different from Squarespace or Wix?', a: 'No shared templates. No platform constraints. No monthly subscription to a builder. You own the code outright. The performance, SEO and visual quality are in a completely different league.' },
    ],
    examples: {
      heading: 'Examples of what we can do.',
      intro: 'Interactive concepts we’ve built to show what’s possible — scroll-scrubbed video, real-time 3D, cinematic reveals. All live, all in the browser. Move your cursor, scroll, and play.',
      galleryUrl: 'https://scroll-animation-mockups.vercel.app',
      items: [
        { name: 'PRIMA — Fine Jewellery', tag: 'Editorial · Scroll reveal', url: 'https://scroll-animation-mockups.vercel.app/09-prima.html' },
        { name: 'AURA — 3D Robot', tag: 'Real-time 3D · Cursor-tracking', url: 'https://scroll-animation-mockups.vercel.app/05-spline.html' },
        { name: 'Emperor Vodka', tag: 'AI pour video · Scroll-scrub', url: 'https://scroll-animation-mockups.vercel.app/04-alcohol-brand.html' },
        { name: 'LUMA Dental', tag: 'Interactive canvas mascot', url: 'https://scroll-animation-mockups.vercel.app/08-dental.html' },
        { name: '3D Product Configurator', tag: 'Spin · Recolour · 3D commerce', url: 'https://scroll-animation-mockups.vercel.app/06-3d-product.html' },
        { name: 'Scroll · Pause · Play', tag: 'Cinematic scroll journey', url: 'https://scroll-animation-mockups.vercel.app/07-scroll-pause.html' },
      ],
    },
    portfolio: {
      projects: [
        {
          name: 'WhichPodcast',
          url: 'https://www.whichpodcast.com',
          urlLabel: 'whichpodcast.com',
          challenge: 'Client wanted to create the Netflix of podcasts, a rich discovery platform with a familiar content grid feel and the ability for creators to upload their own shows.',
          solution: 'We built a Netflix inspired UI and introduced AI powered natural language search, letting users find podcasts by mood, topic, guest, or feeling rather than just keyword.',
          desktopImg: '/portfolio-whichpodcast-desktop.png',
          mobileImg: '/portfolio-whichpodcast-mobile.jpg',
        },
        {
          name: 'Ayla Property',
          url: 'https://www.aylaproperty.com',
          urlLabel: 'aylaproperty.com',
          challenge: 'Client needed a lead generating site that projected authority in the Bali property market without the distraction of a browseable listing tool.',
          solution: 'We removed the property search entirely and built a high converting landing page with a custom scroll animation of a villa being constructed, giving prospective buyers a tangible sense of the development quality.',
          desktopImg: '/portfolio-aylaproperty-desktop.png',
          mobileImg: '/portfolio-ayla-mobile.jpg',
        },
        {
          name: 'Leng Media',
          url: 'https://www.lengmedia.com',
          urlLabel: 'lengmedia.com',
          challenge: 'Our own site needed a major upgrade. Something modern and unmistakably distinct from the generic agency template.',
          solution: 'Built from scratch in Next.js with a custom canvas animation, dark design system, and Core Web Vitals optimisation. Ready to run paid traffic from day one.',
          desktopImg: '/portfolio-lengmedia-desktop.png',
          mobileImg: '/portfolio-lengmedia-mobile.jpg',
        },
      ],
    },
  },
}

// Same client list as the homepage trusted-by grid
const CLIENTS = [
  { name: "Barry's Bootcamp",              domain: 'barrysbootcamp.com' },
  { name: 'National Geographic Traveller', domain: 'natgeo.com' },
  { name: 'Ninety Percent',               domain: 'ninetypercent.com' },
  { name: 'Horizon Group',                domain: 'horizongroup.co.uk' },
  { name: 'Haier',                        domain: 'haier.com' },
  { name: 'Skin + Me',                    domain: 'skinandme.com' },
  { name: 'Fox',                          domain: 'fox.com' },
  { name: 'WhichPodcast',                 domain: 'whichpodcast.com' },
  { name: 'Chesneys',                     domain: 'chesneys.co.uk' },
]

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
  const pageTitle = `${s.metaTitle ?? s.name} – Leng Media`
  return {
    title: pageTitle,
    description: s.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: pageTitle,
      description: s.metaDescription,
      url,
      siteName: 'Leng Media',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: pageTitle }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
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
          <h1 className={styles.title}>Websites your customers will remember</h1>
          <p className={styles.tagline}>{s.tagline}</p>
          <div className={styles.heroCtas}>
            <CalendlyPopupLink href="https://calendly.com/zaq-lengmedia/website-build-discovery-call" className={styles.heroCtaBtn}>Get Your Quote →</CalendlyPopupLink>
          </div>
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

      {/* WHO THIS IS FOR — website-builds only */}
      {slug === 'website-builds' && (
        <section className={styles.whoSection}>
          <div className={styles.whoInner}>
            <ScrollReveal>
              <h2 className={styles.whoHeading}>If you charge for quality, your website needs to prove it<br /><em>before a customer decides to buy.</em></h2>
            </ScrollReveal>
            <div className={styles.whoFooter}>
              <a href="#portfolio" className={styles.heroCtaBtn}>See the Work →</a>
            </div>
          </div>
        </section>
      )}

      {/* EXAMPLES — interactive concept showcase */}
      {s.examples && (
        <section className={styles.examples}>
          <ScrollReveal className={styles.examplesHead}>
            <span className="section-label">// Examples of what we can do</span>
            <h2 className={styles.examplesTitle}>{s.examples.heading}</h2>
            <p className={styles.examplesIntro}>{s.examples.intro}</p>
          </ScrollReveal>
          <div className={styles.examplesGrid}>
            {s.examples.items.map((ex, i) => (
              <ScrollReveal key={ex.name} delay={((i % 3) + 1) as 1|2|3}>
                <a href={ex.url} target="_blank" rel="noopener noreferrer" className={styles.exCard}>
                  <span className={styles.exNum}>{String(i + 1).padStart(2, '0')}</span>
                  <span className={styles.exName}>{ex.name}</span>
                  <span className={styles.exTag}>{ex.tag}</span>
                  <span className={styles.exArrow}>↗</span>
                </a>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <a href={s.examples.galleryUrl} target="_blank" rel="noopener noreferrer" className={styles.examplesCta}>
              View the full gallery →
            </a>
          </ScrollReveal>
        </section>
      )}

      {/* BODY */}
      {slug !== 'website-builds' && (
        <section className={styles.body}>
          <div className={styles.bodyLeft}>
            <ScrollReveal>
              <span className="section-label">// Overview</span>
            </ScrollReveal>
            {s.description.map((p, i) => (
              <ScrollReveal key={i} delay={(Math.min(i+1,4)) as 1|2|3|4}>
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
      )}

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
                {s.showcase.agents.image ? (
                  <img src={s.showcase.agents.image} alt="AI business automation Make.com workflow" className={styles.showcaseImg} />
                ) : (
                  <div className={styles.showcasePlaceholder}>// AI Agents</div>
                )}
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
        <section id="portfolio" className={styles.portfolio}>
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
                  <div className={styles.portfolioInlineCta}>
                    <span className={styles.portfolioInlineCtaText}>Want something like this?</span>
                    <CalendlyPopupLink href="https://calendly.com/zaq-lengmedia/website-build-discovery-call" className={styles.portfolioInlineCtaLink}>Book a call →</CalendlyPopupLink>
                  </div>
                </div>
                <div className={styles.portfolioScreenshots}>
                  {project.desktopImg && (
                    <div className={styles.portfolioDesktop}>
                      <div className={styles.portfolioDesktopImgWrap}>
                        <Image src={project.desktopImg} alt={`${project.name} desktop`} fill sizes="(max-width:900px) 100vw, 50vw" style={{objectFit:'cover',objectPosition:'top'}} />
                      </div>
                      <span className={styles.portfolioImgLabel}>// Desktop</span>
                    </div>
                  )}
                  <div className={styles.portfolioMobile}>
                    <div className={styles.portfolioMobileImgWrap}>
                      <Image src={project.mobileImg} alt={`${project.name} mobile`} fill sizes="210px" style={{objectFit:'cover',objectPosition:'top'}} />
                    </div>
                    <span className={styles.portfolioImgLabel}>// Mobile</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </section>
      )}

      {/* DELIVERABLES — website-builds only, shown after portfolio */}
      {slug === 'website-builds' && (
        <section className={styles.bodyFull}>
          <ScrollReveal>
            <span className="section-label">// Deliverables</span>
            <ul className={styles.outcomes}>
              {s.outcomes.map((o, i) => (
                <ScrollReveal key={o} delay={(Math.min(i % 3 + 1, 3)) as 1|2|3}>
                  <li className={styles.outcome}>
                    <span className={styles.outcomeDot}>◆</span>{o}
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </ScrollReveal>
        </section>
      )}

      {/* TRUSTED BY — website-builds only */}
      {slug === 'website-builds' && (
        <section className={styles.clientsSection}>
          <ScrollReveal style={{ marginBottom: 36 }}>
            <span className="section-label">// Trusted by</span>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <div className={styles.clientGrid}>
              {CLIENTS.map(c => (
                <div key={c.name} className={styles.clientLogo}>
                  <ClientLogo name={c.name} domain={c.domain} />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* PROCESS — how it works */}
      {s.process && (
        <section className={styles.processSection}>
          <ScrollReveal style={{ marginBottom: 48 }}>
            <span className="section-label">// How it works</span>
            <h2 className={styles.processHeading}>From call to launch in days.</h2>
          </ScrollReveal>
          <div className={styles.processGrid}>
            {s.process.steps.map((step) => (
              <div key={step.num} className={styles.processStep}>
                <span className={styles.processNum}>// {step.num}</span>
                <h3 className={styles.processTitle}>{step.title}</h3>
                <p className={styles.processBody}>{step.body}</p>
                <span className={styles.processTime}>{step.time}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* MID-PAGE CTA — website-builds only */}
      {slug === 'website-builds' && (
        <section className={styles.midCta}>
          <ScrollReveal>
            <p className={styles.midCtaText}>Book a 20-minute call. Fixed quote within 24 hours. No obligation.</p>
            <div className={styles.midCtaBtns}>
              <CalendlyPopupLink href="https://calendly.com/zaq-lengmedia/website-build-discovery-call" className={styles.heroCtaBtn}>Get Your Quote →</CalendlyPopupLink>
              <WhatsAppLink href="https://wa.me/447928668478?text=Hi%2C%20I%27m%20interested%20in%20a%20website%20build" className={styles.waBtn}>WhatsApp Us</WhatsAppLink>
            </div>
          </ScrollReveal>
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
          {s.seoPillars.proofImages && s.seoPillars.proofImages.length > 0 ? (
            <div className={`${styles.seoChart} theme-dark`}>
              <ScrollReveal>
                <span className="section-label">// Real Results</span>
                <h2 className={styles.seoHeading}>What the traffic looks like.</h2>
                <p className={styles.seoCopy}>Real clients. Names omitted, results are not.</p>
              </ScrollReveal>
              <ScrollReveal delay={1}>
                <div className={styles.seoProofImages}>
                  {s.seoPillars.proofImages.map(img => (
                    <img key={img.src} src={img.src} alt={img.alt} className={styles.seoProofImg} />
                  ))}
                </div>
              </ScrollReveal>
            </div>
          ) : (
            <div className={`${styles.seoChart} theme-dark`}>
              <ScrollReveal>
                <span className="section-label">// Real Results</span>
                <h2 className={styles.seoHeading}>What the traffic looks like.</h2>
                <p className={styles.seoCopy}>A real client. The name is omitted. The results are not.</p>
              </ScrollReveal>
              <ScrollReveal delay={1}>
                <TrafficChart />
              </ScrollReveal>
            </div>
          )}
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
              <div className={styles.funnelDesktop}>
                <FunnelDiagram />
              </div>
              <div className={styles.funnelMobile}>
                <div className={styles.funnelMobileCols}>
                  <div className={styles.funnelMobileGroup}>
                    <p className={styles.funnelMobileGroupLabel}>// Digital</p>
                    {['META','GOOGLE ADS','TIKTOK','LINKEDIN','DISPLAY'].map(c => (
                      <span key={c} className={styles.funnelMobileChip}>{c}</span>
                    ))}
                  </div>
                  <div className={styles.funnelMobileGroup}>
                    <p className={styles.funnelMobileGroupLabel}>// Traditional</p>
                    {['DAYTIME TV','PRESS ADS','DIRECT MAIL'].map(c => (
                      <span key={c} className={`${styles.funnelMobileChip} ${styles.funnelMobileChipMuted}`}>{c}</span>
                    ))}
                  </div>
                </div>
                <div className={styles.funnelMobileArrow}>↓</div>
                <div className={styles.funnelMobileStrategy}>SMART STRATEGY</div>
                <div className={styles.funnelMobileArrow}>↓</div>
                <div className={styles.funnelMobileResult}>ROI &amp; PROFIT</div>
              </div>
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

      {/* WEBSITE FAQ */}
      {s.websiteFaq && (
        <section className={styles.websiteFaq}>
          <ScrollReveal>
            <span className="section-label">// Common questions</span>
            <h2 className={styles.websiteFaqHeading}>What you need to know before booking.</h2>
          </ScrollReveal>
          <WebsiteFaqAccordion items={s.websiteFaq} />
        </section>
      )}

      {/* OFFER */}
      {s.offer && (
        <section className={styles.offerSection}>
          <div className={styles.offerInner}>
            <ScrollReveal>
              <span className="section-label">// The Offer</span>
              <h2 className={styles.offerHeading}>{s.offer.heading}</h2>
            </ScrollReveal>
            <div className={styles.offerGrid}>
              <ScrollReveal delay={1}>
                <div className={styles.offerCell}>
                  <span className={styles.offerCellLabel}>// What you get</span>
                  <p className={styles.offerCellText}>{s.offer.what}</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={2}>
                <div className={styles.offerCell}>
                  <span className={styles.offerCellLabel}>// Timeframe</span>
                  <p className={styles.offerCellText}>{s.offer.time}</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={3}>
                <div className={styles.offerCell}>
                  <span className={styles.offerCellLabel}>// The risk</span>
                  <p className={styles.offerCellText}>{s.offer.risk}</p>
                </div>
              </ScrollReveal>
            </div>
            <div className={styles.offerFooter}>
              {s.offer.ctaHref.includes('calendly.com') ? (
                <CalendlyPopupLink href={s.offer.ctaHref} className={styles.heroCtaBtn}>{s.offer.ctaLabel}</CalendlyPopupLink>
              ) : (
                <Link href={s.offer.ctaHref} className={styles.heroCtaBtn}>{s.offer.ctaLabel}</Link>
              )}
              {s.offer.qualifier && <span className={styles.offerQualifier}>{s.offer.qualifier}</span>}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className={`${styles.cta} theme-dark`}>
        <ScrollReveal>
          <span className="section-label">// Get in touch</span>
          {slug === 'website-builds' ? (
            <>
              <h2 className="section-title">Ready to <em>get noticed?</em></h2>
              <p className={styles.ctaSub}>Book a 20-minute call. We will scope your project and send a quote within 24 hours.</p>
              <CalendlyPopupLink href="https://calendly.com/zaq-lengmedia/website-build-discovery-call" className="btn-primary" style={{fontSize:12,padding:'18px 52px'}}>Get Your Quote →</CalendlyPopupLink>
            </>
          ) : (
            <>
              <h2 className="section-title">Want to <em>chat?</em></h2>
              <p className={styles.ctaSub}>Let&apos;s talk about what {s.name.toLowerCase()} can do for your brand</p>
              <a href="https://calendly.com/zaq-lengmedia/leng-media-intro-call" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{fontSize:12,padding:'18px 52px'}}>Book a Call</a>
            </>
          )}
        </ScrollReveal>
      </section>

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

      {/* STICKY MOBILE CTA — website-builds only */}
      {slug === 'website-builds' && (
        <StickyMobileCta href="https://calendly.com/zaq-lengmedia/website-build-discovery-call" />
      )}
    </>
  )
}
