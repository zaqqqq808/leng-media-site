import { notFound } from 'next/navigation'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import Ticker from '@/components/Ticker'
import CalendlyPopupLink from '@/components/CalendlyPopupLink'
import styles from './page.module.css'
import { POSTS, POSTS_BY_DATE, CALENDLY, type Block, type Post } from '@/lib/blog-posts'
import JsonLd from '@/components/JsonLd'
import { breadcrumbJsonLd } from '@/lib/seo'

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

// Services to cross-sell under a post, by topic. A fixed list on every post
// sent most internal links to the same two service pages.
const SERVICES_BY_CATEGORY: Record<string, { label: string; href: string }[]> = {
  AI: [
    { label: 'AI Chatbot Development', href: '/services/ai-solutions' },
    { label: 'ChatGPT Ads Agency', href: '/chatgpt-ads-agency' },
    { label: 'Lead Generation Agency', href: '/services/lead-generation' },
  ],
  Ecommerce: [
    { label: 'Ecommerce Web Design', href: '/services/website-builds' },
    { label: 'Ecommerce SEO Agency', href: '/services/seo' },
    { label: 'Ecommerce PPC Agency', href: '/services/direct-response' },
  ],
}

/** Two other posts: same-topic first, then the newest from other topics. */
function relatedPosts(current: Post) {
  const others = POSTS_BY_DATE.filter(p => p.slug !== current.slug)
  const same = others.filter(p => p.category === current.category)
  const rest = others.filter(p => p.category !== current.category)
  return [...same, ...rest].slice(0, 2)
}

export async function generateStaticParams() {
  return Object.keys(POSTS).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = POSTS[slug]
  if (!post) return {}
  const url = `https://www.lengmedia.com/blog/${slug}`
  const title = post.metaTitle ?? post.title
  return {
    title: `${title} – Leng Media`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} – Leng Media`,
      description: post.description,
      url,
      siteName: 'Leng Media',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: post.title }],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} – Leng Media`,
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
            <CalendlyPopupLink href={block.href} className="btn-primary" style={btnStyle}>{block.cta}</CalendlyPopupLink>
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
    dateModified: post.updatedISO ?? post.dateISO,
    image: 'https://www.lengmedia.com/og-image.jpg',
    inLanguage: 'en-GB',
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.lengmedia.com/blog/${slug}` },
    author: { '@id': 'https://www.lengmedia.com/#organization' },
    publisher: { '@id': 'https://www.lengmedia.com/#organization' },
  }

  const keepReading = relatedPosts(post)

  const schema = [
    jsonLd,
    breadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
      { name: post.title, path: `/blog/${slug}` },
    ]),
  ]

  return (
    <>
      <JsonLd data={schema} />

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
              {(SERVICES_BY_CATEGORY[post.category] ?? SERVICES_BY_CATEGORY.Ecommerce).map(s => (
                <Link key={s.href} href={s.href} className={styles.serviceLink}>{s.label} ↗</Link>
              ))}
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <div className={styles.relatedLinks}>
            <span className="section-label">// Keep reading</span>
            <div className={styles.serviceLinks}>
              {keepReading.map(p => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className={styles.serviceLink}>{p.title} ↗</Link>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className={`${styles.cta} theme-dark`}>
        <ScrollReveal>
          <span className="section-label">// Get in touch</span>
          <h2 className="section-title">Want to <em>chat?</em></h2>
          <p className={styles.ctaSub}>Let&apos;s talk about what we can build for your brand</p>
          <CalendlyPopupLink href={CALENDLY} className="btn-primary" style={{ fontSize: 12, padding: '18px 52px' }}>Book a Call</CalendlyPopupLink>
        </ScrollReveal>
      </section>
    </>
  )
}
