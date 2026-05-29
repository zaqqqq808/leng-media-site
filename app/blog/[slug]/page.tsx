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
  readTime: string
  category: string
  content: Block[]
}

const CALENDLY = 'https://calendly.com/zaq-lengmedia/leng-media-intro-call'

const POSTS: Record<string, Post> = {
  'what-is-an-ai-automation-agency': {
    slug: 'what-is-an-ai-automation-agency',
    title: 'What Is an AI Automation Agency?',
    description: 'What an AI automation agency actually does, who needs one, and how to choose the right one for your ecommerce or DTC brand.',
    date: '29 May 2026',
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
        text: 'An AI automation agency builds, installs and manages AI-powered systems inside your business. The goal is always the same: remove friction, reduce manual work, and increase the speed at which your business captures revenue. In practice, that means three distinct service categories.',
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
        text: '3. AI-powered creative and content production',
      },
      {
        type: 'p',
        text: 'Product image revamping, ad creative generation, and AI-assisted copy are increasingly part of the AI automation agency toolkit. Brands that previously spent tens of thousands on photoshoots can now generate studio-quality imagery at a fraction of the cost. This is particularly powerful for ecommerce brands with large product catalogues that need constant creative refreshes for ads, email, and social.',
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
    readTime: '9 min',
    category: 'AI',
    content: [
      {
        type: 'p',
        text: 'If you run an ecommerce or DTC brand in 2026, you already know the problem. Paid traffic is expensive. Organic traffic is slow. And somewhere between a visitor arriving on your site and them converting, you are losing them — often because they have a question that nobody answers fast enough. An AI chatbot for ecommerce solves that problem at the moment that matters most: while the visitor is already there.',
      },
      {
        type: 'p',
        text: 'But not all ecommerce AI chatbots are built the same. Some are off-the-shelf platforms with limited customisation. Some are customer support tools being retrofitted into a sales context. And some — the most powerful — are built specifically for your brand and your workflows. This article breaks down the best options in 2026 so you can make the right call for your store.',
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
        text: 'Beyond lead capture, the best ecommerce AI chatbots handle order tracking queries, returns guidance, post-purchase support, and product recommendation flows — all without a human. For DTC brands with a small team, that is the equivalent of adding a full-time customer service and sales rep who never sleeps, never takes a holiday, and costs a fraction of a salary.',
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
        text: 'Tidio is one of the most popular off-the-shelf AI chatbot platforms for ecommerce, particularly for Shopify stores. It integrates natively with Shopify, WooCommerce, and most major ecommerce platforms, and its Lyro AI layer handles a solid range of customer queries automatically. Pricing starts at around £29/month and scales with usage. The limitation is customisation — Tidio is built for common support queries and works well for that, but if you need a chatbot that sells, qualifies leads, or integrates deeply with your specific CRM and workflow, you hit the ceiling quickly.',
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
        text: 'Custom-built AI chatbot (via an agency)',
      },
      {
        type: 'p',
        text: 'This is the option most ecommerce brands overlook because it sounds expensive and complicated. In practice, a custom AI chatbot built by an experienced agency costs less than most brands expect, integrates exactly with your existing tools, and is trained specifically on your brand voice, product catalogue, and customer questions. Unlike an off-the-shelf platform, a custom build has no arbitrary usage caps, no features you are paying for but not using, and no limitation on what it can do. It can qualify leads, book meetings into your Calendly, push prospects into your email flow, update your CRM, and handle the full post-purchase support layer — all in one.',
      },
      {
        type: 'h2',
        text: 'Off-the-shelf vs custom: the real difference',
      },
      {
        type: 'p',
        text: 'Off-the-shelf AI chatbot platforms are the right call if you are just getting started, have a simple product range, and want something live quickly without a large upfront investment. They are not the right call if you are scaling, running significant ad spend, or have specific workflow integrations that a generic platform cannot handle.',
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
        text: 'If you are doing under £20k/month in revenue and want something running quickly: start with Tidio. It is affordable, integrates with Shopify, and handles the basics well. If you are scaling and running paid traffic: a custom AI chatbot built by an agency will outperform any off-the-shelf tool once you factor in the leads you are currently losing. The ROI case becomes straightforward once you know your average order value and your current after-hours enquiry volume.',
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
      return <p key={i} className={styles.para}>{block.text}</p>
    case 'ul':
      return (
        <ul key={i} className={styles.list}>
          {block.items.map((item, j) => (
            <li key={j} className={styles.listItem}>
              <span className={styles.bullet}>◆</span>{item}
            </li>
          ))}
        </ul>
      )
    case 'callout':
      return (
        <div key={i} className={styles.callout}>
          <p className={styles.calloutText}>{block.text}</p>
          <a href={block.href} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 12, padding: '16px 40px', display: 'inline-block', marginTop: 20 }}>
            {block.cta}
          </a>
        </div>
      )
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
    datePublished: '2026-05-29',
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

      <section className={styles.cta}>
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
