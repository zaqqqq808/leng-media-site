// Single source of truth for blog posts: the post pages, the blog index
// and the sitemap all read from here, so a new post can't be missed.

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'callout'; text: string; cta: string; href: string }
  | { type: 'table'; head: string[]; rows: string[][]; caption?: string }

export interface Post {
  slug: string
  title: string
  metaTitle?: string
  description: string
  date: string
  dateISO: string
  /** Set when a post is materially revised; feeds sitemap lastmod and Article dateModified. */
  updatedISO?: string
  readTime: string
  category: string
  content: Block[]
}

export const CALENDLY = 'https://calendly.com/zaq-lengmedia/leng-media-intro-call'

export const POSTS: Record<string, Post> = {
  'what-is-an-ai-automation-agency': {
    slug: 'what-is-an-ai-automation-agency',
    title: 'What Is an AI Automation Agency?',
    description: 'What an AI automation agency actually does, who needs one, and how to choose the right one for your ecommerce or DTC brand.',
    date: '29 May 2026',
    dateISO: '2026-05-29',
    readTime: '7 min',
    category: 'AI',
    content: [
      {
        type: 'p',
        text: 'The term "AI automation agency" is everywhere right now. Every marketing agency has quietly added the word AI to their website. Every freelancer is calling themselves an AI consultant. So what does an AI automation agency actually do — and more importantly, do you actually need one?',
      },
      {
        type: 'p',
        text: 'This article is a straightforward breakdown. No hype, no fluff. Just what the service category means, what you should expect from a real AI automation agency, and how to figure out whether it is the right investment for your ecommerce or DTC brand right now.',
      },
      {
        type: 'h2',
        text: 'What does an AI automation agency actually do?',
      },
      {
        type: 'p',
        text: 'An AI automation agency builds, installs and manages AI powered systems inside your business. The goal is always the same: remove friction, reduce manual work, and increase the speed at which your business captures revenue. In practice, that means three distinct service categories.',
      },
      {
        type: 'h3',
        text: '1. AI chatbots for lead generation',
      },
      {
        type: 'p',
        text: 'A lead generation chatbot sits on your website and engages visitors in real time — qualifying them, capturing their contact details, and booking meetings directly into your calendar. Unlike a live chat tool that relies on a human operator, an AI chatbot works at 3am, on weekends, and during your busiest sales periods without any additional headcount. For ecommerce and DTC brands, the chatbot also handles product questions, order queries, and post-purchase support. Every conversation is logged to a CRM or Google Sheet so your team has full context before they ever pick up the phone.',
      },
      {
        type: 'h3',
        text: '2. AI agents for business automation',
      },
      {
        type: 'p',
        text: 'AI agents are software systems that think and act on your behalf. They monitor inboxes, process orders, update spreadsheets, generate reports, respond to customer queries, and escalate only the exceptions that genuinely require a human decision. For a scaling ecommerce brand, this is often the difference between needing to hire two or three additional team members — or not. A well-built AI automation agency will map your existing workflows, identify the highest-value bottlenecks, and install AI agents that run in the background and compound their value every single day.',
      },
      {
        type: 'h3',
        text: '3. AI powered creative and content production',
      },
      {
        type: 'p',
        text: 'Product image revamping, ad creative generation, and AI assisted copy are increasingly part of the AI automation agency toolkit. Brands that previously spent tens of thousands on photoshoots can now generate studio-quality imagery at a fraction of the cost. This is particularly powerful for ecommerce brands with large product catalogues that need constant creative refreshes for ads, email, and social.',
      },
      {
        type: 'h2',
        text: 'Who actually needs an AI automation agency?',
      },
      {
        type: 'p',
        text: 'The honest answer: most scaling businesses do. The question is not whether AI can help — it can help almost every business in some capacity. The question is whether you are at the stage where the ROI justifies a professional installation versus cobbling something together yourself with a SaaS tool.',
      },
      {
        type: 'p',
        text: 'You probably need an AI automation agency if you are generating enough revenue that you are actively losing money to manual processes, slow response times, or missed leads. If a single qualified lead closing is worth more than the monthly cost of the engagement, the maths is simple. For ecommerce brands, we typically see the strongest ROI case when monthly revenue is above £50k and the brand is actively running paid traffic — because the chatbot captures leads the ads are already paying to bring in.',
      },
      {
        type: 'ul',
        items: [
          'You are spending on paid traffic but losing leads after hours or at weekends',
          'Your team is spending significant hours on repetitive, manual tasks that follow a predictable pattern',
          'Your product catalogue needs regular creative refreshes but photography budgets are limiting you',
          'You are scaling and the thought of hiring three more people to keep up makes you nervous',
          'You want a competitive advantage in your category before every brand has the same tools',
        ],
      },
      {
        type: 'h2',
        text: 'What to look for when choosing an AI automation agency',
      },
      {
        type: 'p',
        text: 'The AI agency market is noisy and largely unregulated, so due diligence matters. Here is what separates a legitimate AI automation agency from someone who watched a YouTube tutorial and built a Typeform.',
      },
      {
        type: 'ul',
        items: [
          'Track record with businesses similar to yours — ask for specific examples, not case study PDFs with client names redacted',
          'Clarity on ROI before the engagement starts — a good agency should be able to model the expected return based on your current traffic, lead volume and conversion rate',
          'Integration capability — the AI tools need to connect to your existing CRM, email platform, and ecommerce stack, not exist in isolation',
          'Ongoing support and iteration — AI systems need tuning as your business changes. An agency that installs and disappears is a red flag',
          'Transparent pricing with no hidden software markup — you should know exactly what you are paying for and why',
        ],
      },
      {
        type: 'h2',
        text: 'How Leng Media approaches AI automation',
      },
      {
        type: 'p',
        text: 'At Leng Media, we are a performance marketing agency that has built AI automation into the core of what we offer ecommerce and DTC brands. We do not sell AI for the sake of it. Every system we install is tied to a specific commercial outcome — more leads captured, fewer hours lost to manual work, lower creative production costs. We have worked with brands including National Geographic Traveller, Ninety Percent, and Horizon Group, and we plug AI into the parts of their operation where the ROI is clearest.',
      },
      {
        type: 'p',
        text: 'If you are a DTC or ecommerce brand generating meaningful traffic and wondering whether an AI chatbot or AI automation setup would move the needle, the fastest way to find out is a 30-minute call. We will tell you exactly what we would build, why, and what we would expect it to return.',
      },
      {
        type: 'callout',
        text: 'Ready to see what AI automation could do for your ecommerce brand?',
        cta: 'Book a free 30-min call',
        href: CALENDLY,
      },
    ],
  },

  'best-ai-chatbot-for-ecommerce': {
    slug: 'best-ai-chatbot-for-ecommerce',
    title: 'Best AI Chatbot for Ecommerce in 2026',
    description: 'Tidio, Gorgias, ManyChat or a custom build? We compare the leading ecommerce AI chatbot platforms and explain which is right for your store.',
    date: '29 May 2026',
    dateISO: '2026-05-29',
    readTime: '9 min',
    category: 'AI',
    content: [
      {
        type: 'p',
        text: 'If you run an ecommerce or DTC brand in 2026, you already know the problem. Paid traffic is expensive. Organic traffic is slow. And somewhere between a visitor arriving on your site and them converting, you are losing them — often because they have a question that nobody answers fast enough. An AI chatbot for ecommerce solves that problem at the moment that matters most: while the visitor is already there.',
      },
      {
        type: 'p',
        text: 'But not all ecommerce AI chatbots are built the same. Some are off the shelf platforms with limited customisation. Some are customer support tools being retrofitted into a sales context. And some — the most powerful — are built specifically for your brand and your workflows. This article breaks down the best options in 2026 so you can make the right call for your store.',
      },
      {
        type: 'h2',
        text: 'Why ecommerce brands need an AI chatbot in 2026',
      },
      {
        type: 'p',
        text: 'The maths is straightforward. If you are spending £5,000 a month on Meta and Google ads to bring 20,000 visitors to your store, and even 2% of those visitors have a question that goes unanswered, you are losing 400 potential customers every single month to silence. An AI chatbot sits in that gap — engaging visitors, answering product questions, handling objections, and capturing contact details before the visitor clicks away.',
      },
      {
        type: 'p',
        text: 'Beyond lead capture, the best ecommerce AI chatbots handle order tracking queries, returns guidance, post-purchase support, and product recommendation flows — all without a human. For DTC brands with a small team, that is the equivalent of adding a full time customer service and sales rep who never sleeps, never takes a holiday, and costs a fraction of a salary.',
      },
      {
        type: 'h2',
        text: 'What to look for in an ecommerce AI chatbot',
      },
      {
        type: 'ul',
        items: [
          '24/7 availability with instant response times — no queue, no wait, no offline message',
          'Lead capture and CRM integration — every conversation should land in your pipeline automatically',
          'Product knowledge — the chatbot should know your catalogue, your sizing, your materials, your policies',
          'Order tracking integration — customers want answers about their delivery without emailing support',
          'Proactive engagement — the best chatbots trigger conversations based on user behaviour, not just waiting to be asked',
          'Human handoff — complex queries should escalate seamlessly to a real person with full conversation context',
        ],
      },
      {
        type: 'h2',
        text: 'The best AI chatbot platforms for ecommerce',
      },
      {
        type: 'h3',
        text: 'Tidio',
      },
      {
        type: 'p',
        text: 'Tidio is one of the most popular off the shelf AI chatbot platforms for ecommerce, particularly for Shopify stores. It integrates natively with Shopify, WooCommerce, and most major ecommerce platforms, and its Lyro AI layer handles a solid range of customer queries automatically. Pricing starts at around £29/month and scales with usage. The limitation is customisation — Tidio is built for common support queries and works well for that, but if you need a chatbot that sells, qualifies leads, or integrates deeply with your specific CRM and workflow, you hit the ceiling quickly.',
      },
      {
        type: 'h3',
        text: 'Gorgias AI',
      },
      {
        type: 'p',
        text: 'Gorgias is primarily a customer support helpdesk for ecommerce brands that has added AI automation on top of its ticketing system. If your primary problem is support volume — you are drowning in emails and DMs about orders, returns, and tracking — Gorgias AI is excellent. It auto-resolves a significant percentage of incoming tickets without human intervention. Where it falls short is on the proactive sales and lead generation side. It is a reactive tool by design, built to handle inbound queries rather than initiate conversations with visitors who have not yet reached out.',
      },
      {
        type: 'h3',
        text: 'ManyChat',
      },
      {
        type: 'p',
        text: 'ManyChat dominates the Instagram and Facebook DM automation space. For ecommerce brands running social commerce or comment-to-DM campaigns on Meta, it is a powerful tool for capturing leads and pushing people into a purchase flow. The limitation is channel — ManyChat is built for social messaging rather than your website, so it does not address the on-site engagement gap that typically has the highest impact. It is a good complementary tool, not a complete ecommerce chatbot solution on its own.',
      },
      {
        type: 'h3',
        text: 'Custom built AI chatbot (via an agency)',
      },
      {
        type: 'p',
        text: 'This is the option most ecommerce brands overlook because it sounds expensive and complicated. In practice, a custom AI chatbot built by an experienced agency costs less than most brands expect, integrates exactly with your existing tools, and is trained specifically on your brand voice, product catalogue, and customer questions. Unlike an off the shelf platform, a custom build has no arbitrary usage caps, no features you are paying for but not using, and no limitation on what it can do. It can qualify leads, book meetings into your Calendly, push prospects into your email flow, update your CRM, and handle the full post-purchase support layer — all in one.',
      },
      {
        type: 'h2',
        text: 'Off the shelf vs custom: the real difference',
      },
      {
        type: 'p',
        text: 'Off the shelf AI chatbot platforms are the right call if you are just getting started, have a simple product range, and want something live quickly without a large upfront investment. They are not the right call if you are scaling, running significant ad spend, or have specific workflow integrations that a generic platform cannot handle.',
      },
      {
        type: 'p',
        text: 'The brands that see the strongest results from ecommerce AI chatbots are typically the ones running a custom build — because the chatbot is trained on exactly what their customers ask, connected to exactly the systems they use, and built to convert in the context of their specific funnel. A Tidio chatbot answering generic product questions is useful. A custom AI chatbot that knows your full catalogue, integrates with your Klaviyo and Shopify, and qualifies leads for your sales team is transformative.',
      },
      {
        type: 'h2',
        text: 'Which chatbot is right for your ecommerce brand?',
      },
      {
        type: 'p',
        text: 'If you are doing under £20k/month in revenue and want something running quickly: start with Tidio. It is affordable, integrates with Shopify, and handles the basics well. If you are scaling and running paid traffic: a custom AI chatbot built by an agency will outperform any off the shelf tool once you factor in the leads you are currently losing. The ROI case becomes straightforward once you know your average order value and your current after-hours enquiry volume.',
      },
      {
        type: 'p',
        text: 'At Leng Media, we build custom AI chatbots for ecommerce and DTC brands — integrated with your CRM, trained on your brand, and designed to capture leads and reduce support load simultaneously. If you want to see what that looks like for your specific store, the fastest way is a 30-minute call.',
      },
      {
        type: 'callout',
        text: 'Want a custom AI chatbot built specifically for your ecommerce store?',
        cta: 'Book a free 30-min call',
        href: CALENDLY,
      },
    ],
  },

  'how-to-start-an-ecommerce-business': {
    slug: 'how-to-start-an-ecommerce-business',
    title: 'How to Start an Ecommerce Business in 2026 (The 8 Step System)',
    metaTitle: 'How to Start an Ecommerce Business in 2026',
    description: 'The exact 8 step system for starting an ecommerce business in 2026: product research, suppliers, store build, fulfilment, traffic, email and the legal bits.',
    date: '16 July 2026',
    dateISO: '2026-07-16',
    readTime: '11 min',
    category: 'Ecommerce',
    content: [
      {
        type: 'p',
        text: 'Learning how to start an ecommerce business in 2026 is not the hard part. The information is everywhere. The hard part is knowing which steps actually matter, in which order, and which of the thousand tactics you can safely ignore. This guide is the exact 8 step system we use at Leng Media, both for the brands we work with and for the students inside [The Ecommerce Protocol](/ecommerce-protocol).',
      },
      {
        type: 'p',
        text: 'The sequence below covers everything: product, supplier, store, fulfilment, traffic, email, and the boring legal bits. Follow it in order and you can go from nothing to a live, selling store in around 8 weeks, even alongside a full time job.',
      },
      { type: 'h2', text: 'Step 1: Choose a product people already buy' },
      {
        type: 'p',
        text: 'Most first time founders start with a product idea they love, then go looking for customers. That is backwards. Start with demand. You are looking for products with proven, consistent sales and room for a better brand, not something nobody has ever seen. Check search volume, marketplace bestseller lists, and the ads your future competitors have been running for months. If a brand has paid to advertise the same product week after week, that product sells.',
      },
      {
        type: 'p',
        text: 'Set hard criteria before you fall in love with anything: at least 3x margin on landed cost, light and durable enough to ship cheaply, and no regulatory complications. A disciplined checklist at this stage saves you months of wasted effort later. One route we deliberately avoid is chasing trending products; we explain why in our honest guide on [how to start dropshipping](/blog/how-to-start-dropshipping).',
      },
      { type: 'h2', text: 'Step 2: Find a supplier you can trust' },
      {
        type: 'p',
        text: 'Your supplier can make or break the entire business. Alibaba is the obvious starting point, but the skill is in the vetting: order samples from at least three suppliers, compare quality side by side, test how fast and clearly they communicate, and negotiate minimum order quantities before you commit to anything. Never pay 100% upfront, and always agree quality standards in writing.',
      },
      {
        type: 'p',
        text: 'Expect this stage to take two to three weeks if you are doing it from scratch. The vetted supplier network we hand students in [The Ecommerce Protocol](/ecommerce-protocol) took years of trial and error to build; borrowing someone else’s shortlist is the single biggest shortcut available at this step.',
      },
      { type: 'h2', text: 'Step 3: Build a store that converts' },
      {
        type: 'p',
        text: 'Shopify is the right platform for almost everyone starting out. It handles hosting, checkout and payments, and every tool you will need later plugs into it. Your job is not to build a pretty website. Your job is to build a store that converts: a clear offer above the fold, reviews, guarantees, an FAQ that kills objections, fast load times, and a checkout with zero friction.',
      },
      {
        type: 'p',
        text: 'Conversion is a discipline of its own. We audit and fix stores for a living inside our [ecommerce ads service](/services/direct-response), and the most common mistake we see is brands sending paid traffic to a site that was never built to sell. Fix the store before you spend a penny on ads. And if you outgrow your theme later, a fully custom build is what our [website building service](/services/website-builds) exists for.',
      },
      { type: 'h2', text: 'Step 4: Set up fulfilment so you never pack a box' },
      {
        type: 'p',
        text: 'You have two options: pack orders yourself, or use a third party logistics provider, known as a 3PL. Packing orders yourself feels cheaper, but it costs you the one resource you cannot buy back: time. A 3PL receives your stock, stores it, then picks, packs and ships every order automatically. You set it up once and fulfilment runs itself while you focus on growth. Customers get tracked 2 to 4 day delivery, which protects your review score and your repeat purchase rate.',
      },
      { type: 'h2', text: 'Step 5: Build organic traffic before you pay for it' },
      {
        type: 'p',
        text: 'Organic content compounds. Start publishing before you launch: short form video around the problem your product solves, and a store blog targeting the questions your customers type into Google. [Ecommerce SEO](/services/seo) is a long game, but it is the cheapest customer acquisition channel you will ever own, and every month you delay is a month of free traffic you never get back.',
      },
      {
        type: 'p',
        text: 'AI has collapsed the cost of doing this well. The right tools can produce product imagery, ad creative and first draft copy in hours rather than weeks. We keep a regularly updated [AI for Ecommerce Cheat Sheet](/free-tools/ai-cheat-sheet) showing exactly which tools we use for content, copy and CRO.',
      },
      { type: 'h2', text: 'Step 6: Turn on paid traffic' },
      {
        type: 'p',
        text: 'Once the store converts and organic is ticking over, paid ads are the accelerant. Start with Meta: one campaign, broad targeting, and three to five creatives that lead with the problem rather than the product. Give yourself a proper testing budget of $500 to $1,500 and kill anything that has not produced a sale by a defined spend threshold. Discipline beats hacks.',
      },
      {
        type: 'p',
        text: 'Account structure matters more than any targeting trick. The structures we hand students in [The Ecommerce Protocol](/ecommerce-protocol) are the same ones we run for [agency clients](/services/direct-response), and most students see their first sale before they have spent $200.',
      },
      { type: 'h2', text: 'Step 7: Install email flows before launch' },
      {
        type: 'p',
        text: 'Email is the highest ROI channel in ecommerce because you have already paid for the visitor. Install three automated flows before you launch: a welcome sequence with an incentive, an abandoned cart flow (this one alone typically recovers 5 to 10% of lost checkouts), and a post purchase sequence that turns first time buyers into repeat customers. Klaviyo is the standard choice for Shopify stores, and the flows only need building once.',
      },
      { type: 'h2', text: 'Step 8: Register the business and handle the boring bits' },
      {
        type: 'p',
        text: 'Register the company, open a business bank account, and understand your tax position from day one. In the UK that means knowing when VAT registration applies and what HMRC expects; in the US it means understanding sales tax nexus. None of it is difficult, but untangling it after a year of trading is expensive. Do it early and forget about it.',
      },
      { type: 'h2', text: 'How much does it cost to start an ecommerce business in 2026?' },
      {
        type: 'p',
        text: 'A realistic minimum: $1,000 to $3,000 for your first inventory order, $39 a month for Shopify, roughly $100 for apps and tools, and $500 to $1,500 of ad testing budget. Call it $2,000 to $5,000 all in. Anyone telling you it can be done for free is selling a dream. Anyone quoting $50,000 is overcomplicating it.',
      },
      { type: 'h2', text: 'How long does it take?' },
      {
        type: 'p',
        text: 'With focused execution, 8 weeks from zero to a live store is realistic at 8 to 12 hours per week. That is precisely the timeline [The Ecommerce Protocol](/ecommerce-protocol) is built around: eight modules over eight weeks, each delivered live and 1 on 1, with a personal review of your store before you are cleared to launch.',
      },
      { type: 'h2', text: 'The fastest route: do not figure it out alone' },
      {
        type: 'p',
        text: 'Every step above has a dozen failure points that only reveal themselves once you are inside them. Suppliers ghost. Ads burn budget. Stores leak conversions in places you would never think to look. You can discover each one the hard way over six months, or you can follow a system built by people who already made the mistakes. That is the entire premise of [The Ecommerce Protocol](/ecommerce-protocol): every module delivered live and 1 on 1, our vetted supplier list, the exact ad structures we run for clients, and a guarantee that you get your first sale within 7 days of launch or a full refund.',
      },
      {
        type: 'callout',
        text: 'Want the entire system, delivered 1 on 1, with your first sale guaranteed?',
        cta: 'Explore The Ecommerce Protocol →',
        href: '/ecommerce-protocol',
      },
    ],
  },

  'how-to-start-dropshipping': {
    slug: 'how-to-start-dropshipping',
    title: 'How to Start Dropshipping in 2026 (An Honest Guide)',
    description: 'The standard dropshipping playbook, the real margins nobody shows you, and what we would build instead in 2026.',
    date: '16 July 2026',
    dateISO: '2026-07-16',
    readTime: '9 min',
    category: 'Ecommerce',
    content: [
      {
        type: 'p',
        text: 'Over a million people search for how to start dropshipping every year, and most of the guides they find are written by people selling a dropshipping course. That is why those guides skip the uncomfortable parts. This one does not. We run [paid media for ecommerce brands](/services/direct-response) every day, so consider this the version a practitioner would give you over a coffee: how dropshipping works, how people actually start, the numbers nobody shows you, and what we would build instead.',
      },
      { type: 'h2', text: 'What dropshipping actually is' },
      {
        type: 'p',
        text: 'Dropshipping means selling products you never hold. A customer orders from your store, you forward the order to a supplier, usually via AliExpress, CJ Dropshipping or a print on demand service, and the supplier ships directly to your customer. Your profit is the gap between your price and theirs. No inventory, no warehouse, no upfront stock. That is the appeal, and the appeal is real.',
      },
      { type: 'h2', text: 'How people start dropshipping: the standard playbook' },
      {
        type: 'ul',
        items: [
          'Find a trending product on TikTok or in a spy tool',
          'Spin up a Shopify store from a template in an afternoon',
          'Import the product through a dropshipping app',
          'Run cheap video ads on TikTok or Meta',
          'Test many products fast, kill the losers, scale the winner',
        ],
      },
      {
        type: 'p',
        text: 'That playbook can work. It worked spectacularly in 2016. It still occasionally works today. But the numbers underneath it have changed dramatically, and you deserve to see them before you spend your savings finding out.',
      },
      { type: 'h2', text: 'The maths nobody shows you' },
      {
        type: 'p',
        text: 'A typical dropshipped product sells for $30 with a $10 landed cost. That looks like a 66% margin until you subtract reality: $12 to $18 of ad cost per purchase now that cold traffic CPAs have roughly tripled since the golden era, payment processing fees, refunds triggered by 14 to 30 day shipping, and chargebacks from customers who forgot what they ordered by the time it arrived. Most first time dropshippers discover their real margin sits somewhere between 5% and negative.',
      },
      { type: 'h2', text: 'The four problems that kill most dropshipping stores' },
      { type: 'h3', text: '1. Paper thin margins meet rising ad costs' },
      {
        type: 'p',
        text: 'Dropshipping economics depend on cheap attention, and cheap attention is gone. When your entire margin lives inside the gap between product cost and ad cost, every CPM increase comes directly out of your pocket. Brands with real margins can outbid you forever.',
      },
      { type: 'h3', text: '2. Shipping times customers no longer accept' },
      {
        type: 'p',
        text: 'Amazon trained your customers to expect two days. Your AliExpress supplier delivers in three weeks. The result is refund requests, chargebacks, angry emails and review scores that quietly kill your ad performance, because the platforms track customer feedback and punish stores that generate complaints.',
      },
      { type: 'h3', text: '3. Zero moat' },
      {
        type: 'p',
        text: 'Any product that works gets cloned within days. Competitors copy your store, run your exact creative, and undercut your price, because they buy from the same supplier you do. When your only asset is a product page anyone can replicate, you do not own a business. You rent a temporary arbitrage.',
      },
      { type: 'h3', text: '4. Platform risk' },
      {
        type: 'p',
        text: 'High refund rates and long shipping times get ad accounts restricted and payment processors nervous. Plenty of dropshipping stores die not from a lack of sales but from a banned ad account or a 90 day payment hold at exactly the wrong moment.',
      },
      { type: 'h2', text: 'What to do instead: keep the mechanics, fix the model' },
      {
        type: 'p',
        text: 'Here is the part most guides never say. The mechanics of dropshipping, meaning a Shopify store, a supplier, paid traffic and email flows, are exactly the right mechanics. What fails is the model sitting on top: trending products, slow generic suppliers, zero brand. Keep the mechanics and fix the model. Buy a small first order of stock from a vetted supplier, use a 3PL so customers get tracked 2 to 4 day delivery, and build a brand around one customer you understand deeply.',
      },
      {
        type: 'p',
        text: 'The difference compounds. A real brand earns repeat purchases, referrals, and organic traffic through [ecommerce SEO](/services/seo) that a churn and burn store never sees. It costs slightly more to start and it is worth 10x more within a year. We wrote the full step by step in [how to start an ecommerce business in 2026](/blog/how-to-start-an-ecommerce-business).',
      },
      { type: 'h2', text: 'If you still want to start dropshipping' },
      {
        type: 'p',
        text: 'Fair enough, and there are legitimate uses. Print on demand with US or EU fulfilment sidesteps the shipping problem for merch style products. Suppliers with domestic warehouses can get delivery under a week. And dropshipping a product before you commit to inventory is genuinely useful as a demand test, as long as you treat it as research rather than the end state. Set a strict testing budget, watch your true margin after every cost, and move to held inventory the moment a product proves itself.',
      },
      { type: 'h2', text: 'The shortcut' },
      {
        type: 'p',
        text: 'If the brand route sounds like more moving parts than you want to figure out alone, that is exactly what [The Ecommerce Protocol](/ecommerce-protocol) exists for. Eight modules delivered live and 1 on 1: product research, our vetted supplier network, the store build, 3PL fulfilment, the ad structures we run for [agency clients](/services/direct-response), and email flows ready to install. First sale within 7 days of launch or a full refund. You keep everything, including recordings of every session.',
      },
      {
        type: 'callout',
        text: 'Skip the trending product treadmill. Build a brand that lasts.',
        cta: 'See The Ecommerce Protocol →',
        href: '/ecommerce-protocol',
      },
    ],
  },
  'reddit-seo-ai-search': {
    "slug": "reddit-seo-ai-search",
    "title": "Reddit SEO and AI Search: Where the Conversations That Shape AI Answers Happen",
    "metaTitle": "Reddit SEO for AI Search (2026): The Forum Advertising Guide",
    "description": "Why AI trusts forum conversations, what ChatGPT’s 2026 Reddit citation drop really means, the five forums that matter most, and how to do Reddit and forum SEO properly.",
    "date": "12 Oct 2026",
    "dateISO": "2026-10-12",
    "readTime": "8 min",
    "category": "SEO",
    "content": [
      {
        "type": "p",
        "text": "Ask ChatGPT for the best running shoes for flat feet, the most reliable family SUV, or a good accountant for a small business, and the answer you get is not written from scratch. It is assembled from what people have already said about those things: in threads, in answers, in arguments that went on for 400 comments. AI search is, more than anything, a summary of human conversation."
      },
      {
        "type": "p",
        "text": "That changes what marketing has to do. For twenty years, SEO meant convincing Google that your own pages deserved to rank. Now the question is different: when an AI model goes looking for what real people think about your category, does it find your name? This guide covers why AI leans so heavily on forums, what changed in 2026, where the most valuable conversations actually happen, and how to earn a place in them properly."
      },
      {
        "type": "h2",
        "text": "Why AI trusts conversation over brand content"
      },
      {
        "type": "p",
        "text": "Every brand says its product is the best. That claim is worth almost nothing to a model trying to give a useful answer, because it is unverified and written by the one party with a reason to exaggerate. A forum thread is different in four ways that matter."
      },
      {
        "type": "ul",
        "items": [
          "**First-hand experience.** People describe what actually happened when they bought the thing, used it for six months, and returned it or bought another.",
          "**Many independent voices.** One review can be fake. Forty people in a thread agreeing, disagreeing and adding detail is much harder to fake, and much more informative.",
          "**Built-in quality control.** Upvotes, replies and corrections push the best answers up and the bad ones down, before any AI reads them.",
          "**Natural language that matches questions.** People ask AI the same way they ask a forum. The threads are, in effect, pre-written answers to the prompts users type."
        ]
      },
      {
        "type": "p",
        "text": "Search engines reached the same conclusion first. In late 2022 Google added Experience to its E-E-A-T quality guidelines, explicitly rewarding first-hand knowledge. In 2023 it began showing a dedicated “Discussions and forums” block in results, and Reddit’s search visibility climbed faster than almost any site on the web. In 2024 Google and OpenAI both signed deals to license Reddit’s data. The message was consistent: real conversation is the signal everyone was missing."
      },
      {
        "type": "p",
        "text": "For brands, the uncomfortable consequence is that the most persuasive content about your product is content you did not write. The good news is that you can take part in it."
      },
      {
        "type": "h2",
        "text": "What changed in August 2026"
      },
      {
        "type": "p",
        "text": "If you follow AI search closely, you will have seen the headlines. In August 2026, Reddit’s share of ChatGPT’s citations collapsed. Data from Promptwatch, [reported by Search Engine Land](https://searchengineland.com/reddit-chatgpt-search-citations-fall-report-485473), showed Reddit holding a steady 3.8% of ChatGPT Search citations through late July and early August, then falling to an average of 0.52% between 14 and 17 August: an 86% drop in four days."
      },
      {
        "type": "p",
        "text": "It would be easy to read that as “AI has stopped caring about Reddit”. The detail says otherwise. [OtterlyAI’s measurements](https://otterly.ai/blog/chatgpt-reddit-citations/) found Reddit citations in ChatGPT fell by 73%, but across Google’s AI Overviews, AI Mode, Gemini and Perplexity they fell by just 0.6%. Across every engine combined, Reddit’s share of citations moved from 2.00% to 1.66%. Promptwatch saw Google’s AI Overviews ease only gradually, from about 2.5% to 2.1%. OpenAI has not explained the change, and a citation is not the same as a source: ChatGPT can still read a thread while researching an answer without linking to it."
      },
      {
        "type": "p",
        "text": "What did ChatGPT cite instead? Otterly found the gap was filled mostly by official brand pages, reference sources and other commercial sites. In other words, ChatGPT got more selective about where it shows its working, not less interested in what people think."
      },
      {
        "type": "h3",
        "text": "The lesson: don’t bet everything on one forum"
      },
      {
        "type": "p",
        "text": "The August episode is the best argument there is against single-platform “Reddit SEO”. A strategy that depends on one site and one AI engine can lose most of its value overnight because of a change nobody announces. A strategy built on being genuinely discussed across several high-value communities, backed by strong pages on your own site, survives it. AI is relying less directly on Reddit, but it is still reading valuable discourse wherever it happens. The job is to make sure that discourse includes you."
      },
      {
        "type": "h2",
        "text": "Where the most valuable conversations happen"
      },
      {
        "type": "p",
        "text": "Not all discussion is equally useful. A million people arguing about video games are worth less to most brands than a few thousand parents comparing family cars. So we ran a simple piece of research to find where the conversations that matter actually take place."
      },
      {
        "type": "ul",
        "items": [
          "**Ranked by size.** We listed the 50 biggest discussion forums on the internet, in any language.",
          "**English only.** We removed the 22 that don’t run in English, leaving 28.",
          "**UK and US audiences.** We removed forums whose readers mostly sit outside the UK and US, such as those serving Nigeria, Singapore, Canada and Australia. 24 remained.",
          "**Scored the audience.** Each forum got a score for how affluent its readers are and how ready they are to buy.",
          "**Scored the openness.** Each forum got a second score for how much of it is general, any-subject discussion that any brand can join, rather than a single niche.",
          "**Combined.** Multiplying the two scores produced a clear top five."
        ]
      },
      {
        "type": "table",
        "head": [
          "Forum",
          "Score",
          "UK share",
          "US share",
          "Best for"
        ],
        "rows": [
          [
            "1. Reddit",
            "40 / 50",
            "5%",
            "55%",
            "Every category. The biggest conversation online, with an affluent, US-led audience"
          ],
          [
            "2. Mumsnet",
            "36 / 50",
            "77%",
            "14%",
            "Household, family, home, travel and money. Readers who control family budgets"
          ],
          [
            "3. Hacker News",
            "27 / 50",
            "–",
            "–",
            "Tech, software, media and startups. The highest-earning audience we scored"
          ],
          [
            "4. Quora",
            "20 / 50",
            "4%",
            "50%",
            "Any question in any category. Answers rank in Google and feed AI answers"
          ],
          [
            "5. PistonHeads",
            "18 / 50",
            "81%",
            "10%",
            "Cars, watches, property and money. Small, affluent and British"
          ]
        ],
        "caption": "Score = share of open discussion (0–5) × audience income plus buying intent (0–10). UK and US shares are each forum’s search visitors by country (Ahrefs, October 2026). Hacker News visitors mostly arrive directly, so no reliable split exists. Full method on our [forum marketing page](/forum-marketing-agency)."
      },
      {
        "type": "p",
        "text": "Two things stand out. First, Reddit alone is not a UK strategy: only about 5% of its search visitors are British, so a UK brand has to work in specific communities such as r/CasualUK and r/UKPersonalFinance. Mumsnet and PistonHeads, by contrast, are around 80% British. Second, the smaller forums punch far above their size. Hacker News and PistonHeads have a fraction of Reddit’s traffic, but their readers earn and spend far more than average, and their threads are exactly the kind of considered, expert discussion AI models value."
      },
      {
        "type": "h2",
        "text": "How to do Reddit and forum SEO for AI, properly"
      },
      {
        "type": "p",
        "text": "Forum marketing has a bad reputation because most of it is done badly: brand accounts that only ever post links, fake “I found this amazing product” comments, and bought upvotes. Communities spot it quickly, moderators ban it, and the backlash becomes its own thread. Here is the approach that works, and keeps working."
      },
      {
        "type": "h3",
        "text": "1. Find the threads that already matter"
      },
      {
        "type": "p",
        "text": "Start with the questions your buyers ask. Search Google for them with “reddit” or “site:mumsnet.com” added, then ask ChatGPT, Gemini and Perplexity the same questions and note which threads they draw on. Those threads already rank and already feed AI answers. A useful reply there is worth more than a hundred new posts nobody reads."
      },
      {
        "type": "h3",
        "text": "2. Use real, clearly identified accounts"
      },
      {
        "type": "p",
        "text": "Post as yourself, your founder or a named member of your team, and say who you work for. It feels counter-intuitive, but disclosed experts get more trust, not less, and every major forum has rules against undisclosed promotion. In the UK, the Digital Markets, Competition and Consumers Act 2024 makes fake reviews and hidden paid endorsements illegal, so this is not optional."
      },
      {
        "type": "h3",
        "text": "3. Give before you ask"
      },
      {
        "type": "p",
        "text": "Build a history of genuinely helpful answers before you ever mention your product. A good rule of thumb is that most of your contributions should not mention your brand at all. When you do recommend it, it should be because it honestly answers the question, and you should say why it might not suit everyone."
      },
      {
        "type": "h3",
        "text": "4. Start conversations about the industry, not just the product"
      },
      {
        "type": "p",
        "text": "The most valuable threads are often about the category itself: what has changed, what most people get wrong, what a newcomer should know. Starting those conversations positions you as the expert in the room, and the discussion that follows is exactly the kind of content AI summarises."
      },
      {
        "type": "h3",
        "text": "5. Back it up on your own site"
      },
      {
        "type": "p",
        "text": "When ChatGPT pulled back from Reddit, it leaned towards official brand pages. So the conversation should point somewhere solid: a clear page on your site that answers the same questions, with specifics, prices and proof. Forum presence and [on-site SEO](/services/seo) work best together."
      },
      {
        "type": "h3",
        "text": "6. Measure mentions, not just links"
      },
      {
        "type": "p",
        "text": "Most forum links are nofollow, so traditional link metrics miss the point. Track how often your brand is mentioned across your target communities, the sentiment of those mentions, the referral traffic they send, and whether AI tools mention you when asked about your category. That last measure is the one that matters most in 2026."
      },
      {
        "type": "h2",
        "text": "Forum advertising: organic and paid"
      },
      {
        "type": "p",
        "text": "“Forum advertising” covers two different things, and the best campaigns use both. Organic forum marketing is everything above: taking part in the conversation from real accounts. Paid forum advertising means placements the forums sell: Reddit Ads and Quora Ads, which target people by community and interest, and sponsored partnerships on forums such as Mumsnet. Paid placements reach people fast, but they work best in communities that already recognise your name from the organic work, because forum audiences are quick to ignore brands they have never seen take part."
      },
      {
        "type": "h2",
        "text": "Where to start"
      },
      {
        "type": "p",
        "text": "If you do one thing after reading this, ask an AI tool the question your best customers would ask before buying from you, and see whose name comes up. If it isn’t yours, the brands that are mentioned are the ones being talked about in the places above."
      },
      {
        "type": "p",
        "text": "That is the gap our [Reddit and forum marketing service](/forum-marketing-agency) exists to close. We map the threads and communities that matter in your category across Reddit, Mumsnet, Hacker News, Quora and PistonHeads, then put your brand into those conversations from clearly identified accounts, with reporting on mentions, traffic and AI visibility. It works alongside our SEO, or on its own."
      },
      {
        "type": "callout",
        "text": "Find out what forums, and AI, say about your brand. We’ll check all five, live, on a free call.",
        "cta": "Book a Free Strategy Call →",
        "href": "https://calendly.com/zaq-lengmedia/leng-media-intro-call?utm_campaign=Reddit+SEO+Blog"
      }
    ]
  },
}

/** Newest first, for the blog index. */
export const POSTS_BY_DATE: Post[] = Object.values(POSTS).sort((a, b) => b.dateISO.localeCompare(a.dateISO))
