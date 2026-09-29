import Link from 'next/link'

// Service page copy and config. Read by /services/[slug] and the sitemap.

export interface Service {
  num: string
  name: string
  metaTitle?: string
  tagline: string
  metaDescription: string
  description: React.ReactNode[]
  outcomes: string[]
  related: string[]
  /** Guides and tools to link from the service page ("Further reading"). */
  reading?: { label: string; href: string }[]
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
}

export const SERVICES: Record<string, Service> = {
  'ai-solutions': {
    num: '01',
    name: 'AI Chatbot Development Services',
    metaTitle: 'AI Chatbot Development Services | AI Automation Agency',
    tagline: 'AI chatbot development services for ecommerce and DTC brands. Custom AI chatbots for lead generation, AI agents for workflow automation, and product image revamping.',
    metaDescription: 'Leng Media builds AI chatbots and AI agents for ecommerce and DTC brands in the USA and UK, plus AI product image revamping.',
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
      what: 'A working demo chatbot trained on your business. Watch it answer your customers’ real questions on a live preview link.',
      time: 'Built and in your inbox within 5 days.',
      risk: 'Free to see. You only pay if you want it on your site.',
      ctaLabel: 'Get Your Demo Bot →',
      ctaHref: '/business-enquiry',
    },
    related: ['website-builds', 'lead-generation', 'direct-response'],
    reading: [
      { label: 'Best AI chatbot for ecommerce in 2026', href: '/blog/best-ai-chatbot-for-ecommerce' },
      { label: 'What is an AI automation agency?', href: '/blog/what-is-an-ai-automation-agency' },
      { label: 'Free AI for Ecommerce Cheat Sheet', href: '/free-tools/ai-cheat-sheet' },
      { label: 'AI software tutorials', href: '/ai-software-tutorials' },
    ],
    showcase: {
      imageRevamp: {
        before: '/ai-before.png',
        after: '/ai-after.jpg',
        heading: 'AI Product Image Revamping',
        copy: 'We take your existing product photography and transform it into high converting campaign imagery using AI. Studio-quality visuals at a fraction of the cost. No photographer, no studio hire, no waiting weeks for a reshoot. We process your entire catalogue and deliver assets ready for ads, social media, and your website. Drag the slider to see the difference.',
      },
      chatbot: {
        image: '/ai-chatbot-leads.webp',
        heading: 'AI Chatbot for Lead Generation',
        copy: 'Our AI chatbots qualify visitors, capture contact details, and book meetings straight into your calendar around the clock. Every lead is automatically logged to a Google Sheet or your CRM, so your sales team has full context before the first call. One closed deal per year covers the entire cost of the software. For ecommerce brands, the chatbot also handles FAQs, order queries, and post-purchase support without a single human touch.',
      },
      agents: {
        image: '/ai-automation-make.webp',
        heading: 'AI Agents for Business Automation',
        copy: 'AI agents are software that thinks and acts on your behalf. They monitor inboxes, process orders, update spreadsheets, respond to customer queries, generate reports, and escalate exceptions to a human only when necessary. For a growing ecommerce or D2C brand, this is the difference between hiring three additional team members or not. We map your existing workflows, identify the highest-value bottlenecks, and install AI agents that run in the background and save you hours every single day.',
      },
    },
  },
  'direct-response': {
    num: '02',
    name: 'Ecommerce PPC Agency',
    metaTitle: 'Ecommerce PPC Agency | Ecommerce Marketing Agency',
    tagline: 'The ecommerce PPC agency that fixes your funnel first, then drives consistent positive ROAS across Meta, TikTok and Google.',
    metaDescription: 'Leng Media is an ecommerce PPC agency managing Google Ads, Meta and TikTok for Shopify and DTC brands in the USA and UK.',
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
    related: ['lead-generation', 'seo', 'website-builds'],
    reading: [
      { label: 'Running ads inside ChatGPT', href: '/chatgpt-ads-agency' },
      { label: 'Free GDN ad specs cheat sheet', href: '/free-tools/gdn-ad-specs' },
      { label: 'PPC AI skills for Claude', href: '/free-tools/ppc-ai-skills' },
    ],
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
    name: 'Ecommerce SEO Agency',
    metaTitle: 'Ecommerce SEO Agency | Shopify SEO Services',
    tagline: 'The ecommerce SEO agency for Shopify and DTC brands in the USA and UK. Based in London. We rank you for transactional keywords, grow organic revenue, and get your brand cited by AI.',
    metaDescription: 'Leng Media is an ecommerce SEO agency in London, serving Shopify and DTC brands in the USA and UK with technical SEO and link building.',
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
    related: ['website-builds', 'direct-response', 'agency-assist'],
    reading: [
      { label: 'How to start an ecommerce business in 2026', href: '/blog/how-to-start-an-ecommerce-business' },
      { label: 'How to start dropshipping (an honest guide)', href: '/blog/how-to-start-dropshipping' },
    ],
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
    name: 'Lead Generation Agency',
    metaTitle: 'Lead Generation Agency | Performance Based Lead Gen',
    tagline: 'The lead generation agency that only gets paid when you do. Zero monthly retainer, revenue share or fixed CPA.',
    metaDescription: 'Leng Media is a performance based lead generation agency for high ticket businesses. Zero retainer — you fund the ad spend.',
    description: [
      'This service is built for high ticket businesses. Trading and investment coaches, online course creators, business consultants, property educators, financial advisors. If your product or service sells for £2,000 or more and you need a consistent pipeline of qualified prospects, this is designed for you.',
      'The model is straightforward. You fund the ad spend directly. We build the creatives, write the copy, set up the landing pages and manage the campaigns. No monthly retainer. We agree a revenue share or fixed cost per acquisition and we only earn when you do. If we do not perform, we do not eat.',
      'High ticket businesses are the perfect fit for this model because the numbers work. One closed deal can be worth thousands. We build funnels designed to attract serious prospects and filter out the wrong ones, so your sales team spends time on conversations that are likely to convert. We are not chasing volume. We want qualified leads that your closers can close.',
    ],
    outcomes: ['Zero monthly retainer, performance based only','You fund the ad spend directly (Google, Meta, LinkedIn)','We build creatives, copy and landing pages at no charge','Revenue share or fixed CPA model','You own all data and the client relationship'],
    offer: {
      heading: 'Zero retainer. We only get paid when you do.',
      what: 'We build the creatives, write the copy and manage the campaigns. You pay per qualified lead or a revenue share, whichever you prefer.',
      time: 'Campaigns live within 2 weeks.',
      risk: 'No monthly fees. If the leads don’t come, we don’t get paid.',
      qualifier: 'High-ticket products and services only. You fund the ad spend.',
      ctaLabel: 'Apply to Partner With Us →',
      ctaHref: 'https://calendly.com/zaq-lengmedia/leng-media-intro-call',
    },
    related: ['direct-response', 'ai-solutions', 'fractional-cmo'],
  },
  'fractional-cmo': {
    num: '05',
    name: 'Fractional CMO Services',
    metaTitle: 'Fractional CMO Services for Ecommerce & DTC Brands',
    tagline: 'Fractional CMO services for ecommerce and DTC brands in the USA and UK. Senior marketing leadership without the full-time salary.',
    metaDescription: 'Leng Media provides fractional CMO services for ecommerce and DTC brands in the USA and UK. From £15,000/month.',
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
    related: ['direct-response', 'lead-generation', 'agency-assist'],
  },
  'agency-assist': {
    num: '06',
    name: 'White Label Marketing Agency',
    metaTitle: 'White Label Marketing Agency | Agency Fulfilment',
    tagline: 'Scale your agency without increasing your headcount.',
    metaDescription: 'Leng Media is a white label marketing agency for agencies that need a trusted execution partner, delivered under your brand.',
    description: [
      'Leng Media acts as your silent execution partner. When your internal resources are stretched or you land a client requiring specialised skills you don\'t have in house, we step in and integrate seamlessly to deliver white label excellence, so you never have to turn down a contract again.',
      'We do the work. You get the credit. You receive weekly white label reports and analysis while maintaining 100% control of the client relationship. We can also execute campaigns and train your junior staff to take them over.',
    ],
    outcomes: ['Overflow execution: never turn down a client again','White label AI, CRO & Paid Media fulfilment','Training & handoffs to your in house team','Weekly white label reports & analysis','Full NDA: you maintain 100% client ownership'],
    offer: {
      heading: 'Send us one brief. The first task is on us.',
      what: 'Pick a real task (ad creative, a landing page section, an SEO audit) and we deliver it white-label, under NDA.',
      time: 'First deliverable back within a week.',
      risk: 'Free. Judge the quality before your clients ever see our work.',
      qualifier: 'For agencies with active client accounts.',
      ctaLabel: 'Send Us a Brief →',
      ctaHref: '/business-enquiry',
    },
    related: ['fractional-cmo', 'ai-solutions', 'seo'],
  },
  'website-builds': {
    num: '07',
    name: 'Ecommerce Web Design Agency',
    metaTitle: 'Ecommerce Web Design Agency',
    tagline: 'Custom ecommerce web design in Next.js from $2,000. Fast, mobile-first and built to convert.',
    metaDescription: 'Leng Media builds custom performance-first ecommerce sites for Shopify and DTC brands. Scroll animation, Next.js, SEO from day one.',
    description: [
      'We build performance-first websites from scratch, starting with your commercial goals. What you see on this page is what we build for you. While your competitors run Squarespace templates, you get a fully custom site that loads faster, ranks higher and gets noticed.',
      'Every site is SEO-ready and Core Web Vitals optimised from day one. CRM integration and backend architecture are available as add-ons. Projects from $2,000, delivered in days. Book a call and we will send a quote within 24 hours.',
    ],
    outcomes: [
      'Built in Next.js from $2,000, the same stack powering this site',
      'Fully custom build: no templates, no page builders, no Squarespace',
      'Scroll animations that make your brand impossible to forget',
      'SEO-ready and Core Web Vitals optimised from day one',
      'Mobile-first, fully responsive across all devices',
      'CRM integration and backend architecture available as add-ons',
    ],
    offer: {
      heading: 'We’ll rebuild your homepage before you pay a penny.',
      what: 'Send us your website link. We rebuild your homepage with scroll animation, using your brand and your content, and send you a video of it working.',
      time: 'Preview in your inbox within 5 days.',
      risk: 'Love it? We finish the site in days. Don’t? You pay nothing and keep the ideas.',
      qualifier: '3 free previews per month.',
      ctaLabel: 'Claim a Free Preview →',
      ctaHref: '/business-enquiry',
    },
    related: ['seo', 'ai-solutions', 'lead-generation'],
    reading: [
      { label: 'How to start an ecommerce business in 2026', href: '/blog/how-to-start-an-ecommerce-business' },
      { label: 'How to start dropshipping (an honest guide)', href: '/blog/how-to-start-dropshipping' },
    ],
    process: {
      steps: [
        { num: '01', title: 'Discovery Call', body: 'A 20-minute call to scope your project. Fixed quote within 24 hours.', time: 'Day 1' },
        { num: '02', title: 'Design', body: 'Full design in Figma. You approve before we write a line of code.', time: 'Days 2–10' },
        { num: '03', title: 'Build', body: 'Custom Next.js build with regular updates and a staging environment.', time: 'Days 10–30' },
        { num: '04', title: 'Launch', body: 'You give the green light, we go live. 30 days of support included.', time: 'Day 30+' },
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
      intro: 'Real concepts, live in your browser. Scroll, click and play.',
      galleryUrl: 'https://scroll-animation-mockups.vercel.app',
      items: [
        { name: 'EMPEROR: Spirits & Drinks', tag: 'AI pour video · Scroll-scrub', url: 'https://scroll-animation-mockups.vercel.app/04-alcohol-brand.html' },
        { name: 'MATRIX: Petroleum & Energy', tag: 'Cinematic reveal · Gold accents', url: 'https://scroll-animation-mockups.vercel.app/matrix-home.html' },
        { name: 'SILVIA: Fine Silver', tag: 'Pinned hero · Layered parallax', url: 'https://scroll-animation-mockups.vercel.app/11-silvia.html' },
        { name: 'CHRYSANT: Home & Décor', tag: 'Real 3D model · Auto-rotating', url: 'https://scroll-animation-mockups.vercel.app/10-chrysant.html' },
        { name: 'IDEAL FEET: Health & Wellness', tag: 'Conversion-first · Scroll sequence', url: 'https://scroll-animation-mockups.vercel.app/idealfeet-home-b.html' },
        { name: 'AXIS: Brand & Agency', tag: 'Cinematic scroll journey', url: 'https://scroll-animation-mockups.vercel.app/07-scroll-pause.html' },
        { name: 'PHG: Home Sauna & Recovery', tag: 'Ecommerce product page', url: 'https://scroll-animation-mockups.vercel.app/phg-product.html' },
        { name: 'VAULT: Crypto & Fintech', tag: 'Live ticker · Animated chart', url: 'https://scroll-animation-mockups.vercel.app/02-crypto.html' },
        { name: 'COCOCHOCO: Hair & Beauty', tag: 'Editorial · Countdown offer', url: 'https://scroll-animation-mockups.vercel.app/cocochoco-home.html' },
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

export const SERVICE_SLUGS = Object.keys(SERVICES)
