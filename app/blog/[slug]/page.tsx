import { notFound } from 'next/navigation'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import Ticker from '@/components/Ticker'
import styles from './page.module.css'

type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'callout'; text: string; cta: string; href: string }

interface Post {
  slug: string
  title: string
  description: string
  date: string
  dateISO: string
  readTime: string
  category: string
  content: Block[]
}

// Renders [label](href) markdown links inside block text
function renderText(text: string) {
  return text.split(/(\[[^\]]+\]\([^)]+\))/g).map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (!m) return part
    const [, label, href] = m
    return href.startsWith('/') ? (
      <Link key={i} href={href} className={styles.inlineLink}>{label}</Link>
    ) : (
      <a key={i} href={href} target="_blank" rel="noopener noreferrer" className={styles.inlineLink}>{label}</a>
    )
  })
}

const CALENDLY = 'https://calendly.com/zaq-lengmedia/leng-media-intro-call'

const POSTS: Record<string, Post> = {
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
}

export async function generateStaticParams() {
  return Object.keys(POSTS).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = POSTS[slug]
  if (!post) return {}
  const url = `https://www.lengmedia.com/blog/${slug}`
  return {
    title: `${post.title} – Leng Media`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${post.title} – Leng Media`,
      description: post.description,
      url,
      siteName: 'Leng Media',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: post.title }],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} – Leng Media`,
      description: post.description,
      images: ['/og-image.jpg'],
    },
  }
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case 'h2':
      return <h2 key={i} className={styles.h2}>{block.text}</h2>
    case 'h3':
      return <h3 key={i} className={styles.h3}>{block.text}</h3>
    case 'p':
      return <p key={i} className={styles.para}>{renderText(block.text)}</p>
    case 'ul':
      return (
        <ul key={i} className={styles.list}>
          {block.items.map((item, j) => (
            <li key={j} className={styles.listItem}>
              <span className={styles.bullet}>◆</span>{renderText(item)}
            </li>
          ))}
        </ul>
      )
    case 'callout': {
      const btnStyle = { fontSize: 12, padding: '16px 40px', display: 'inline-block', marginTop: 20 }
      return (
        <div key={i} className={styles.callout}>
          <p className={styles.calloutText}>{block.text}</p>
          {block.href.startsWith('/') ? (
            <Link href={block.href} className="btn-primary" style={btnStyle}>{block.cta}</Link>
          ) : (
            <a href={block.href} target="_blank" rel="noopener noreferrer" className="btn-primary" style={btnStyle}>{block.cta}</a>
          )}
        </div>
      )
    }
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = POSTS[slug]
  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    url: `https://www.lengmedia.com/blog/${slug}`,
    datePublished: post.dateISO,
    author: {
      '@type': 'Organization',
      name: 'Leng Media',
      url: 'https://www.lengmedia.com',
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://www.lengmedia.com/#organization',
      name: 'Leng Media',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className={styles.hero}>
        <div className={styles.heroGrid} />
        <div className={styles.heroScanlines} />
        <div className={styles.heroContent}>
          <Link href="/blog" className={styles.back}>← All Articles</Link>
          <div className={styles.heroMeta}>
            <span className={styles.category}>{post.category}</span>
            <span className={styles.dot}>·</span>
            <span className={styles.date}>{post.date}</span>
            <span className={styles.dot}>·</span>
            <span className={styles.readTime}>{post.readTime} read</span>
          </div>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.desc}>{post.description}</p>
        </div>
      </section>

      <Ticker />

      <article className={styles.article}>
        <ScrollReveal>
          <div className={styles.body}>
            {post.content.map((block, i) => renderBlock(block, i))}
          </div>
        </ScrollReveal>
      </article>

      <section className={styles.footer}>
        <ScrollReveal>
          <Link href="/blog" className={styles.backLink}>← Back to all articles</Link>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <div className={styles.relatedLinks}>
            <span className="section-label">// Related services</span>
            <div className={styles.serviceLinks}>
              <Link href="/services/ai-solutions" className={styles.serviceLink}>AI Chatbot and Automation ↗</Link>
              <Link href="/services/direct-response" className={styles.serviceLink}>Direct Response Ads ↗</Link>
              <Link href="/services/seo" className={styles.serviceLink}>Ecommerce SEO ↗</Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className={`${styles.cta} theme-dark`}>
        <ScrollReveal>
          <span className="section-label">// Get in touch</span>
          <h2 className="section-title">Want to <em>chat?</em></h2>
          <p className={styles.ctaSub}>Let&apos;s talk about what we can build for your brand</p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 12, padding: '18px 52px' }}>Book a Call</a>
        </ScrollReveal>
      </section>
    </>
  )
}
