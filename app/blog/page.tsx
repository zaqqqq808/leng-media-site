import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import Ticker from '@/components/Ticker'
import styles from './page.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog – Leng Media | AI & Ecommerce Growth',
  description: 'Practical guides on AI automation, ecommerce growth, performance marketing and SEO. Written by the Leng Media team.',
  alternates: { canonical: 'https://www.lengmedia.com/blog' },
  openGraph: {
    title: 'Blog – Leng Media | AI & Ecommerce Growth',
    description: 'Practical guides on AI automation, ecommerce growth, performance marketing and SEO.',
    url: 'https://www.lengmedia.com/blog',
    siteName: 'Leng Media',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Leng Media Blog' }],
    type: 'website',
  },
}

export const POSTS = [
  {
    slug: 'best-ai-chatbot-for-ecommerce',
    title: 'Best AI Chatbot for Ecommerce in 2026',
    description: 'Tidio, Gorgias, ManyChat or a custom build? We compare the leading ecommerce AI chatbot platforms and explain which is right for your store.',
    date: '29 May 2026',
    readTime: '9 min',
    category: 'AI',
  },
  {
    slug: 'what-is-an-ai-automation-agency',
    title: 'What Is an AI Automation Agency?',
    description: 'What an AI automation agency actually does, who needs one, and how to choose the right one for your ecommerce or DTC brand.',
    date: '29 May 2026',
    readTime: '7 min',
    category: 'AI',
  },
]

export default function Blog() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroGrid} />
        <div className={styles.heroScanlines} />
        <div className={styles.heroContent}>
          <p className={styles.sys}><span className={styles.accent}>SYS:</span> BLOG.LENG.MEDIA // LOADED</p>
          <h1 className={styles.title}>Insights.</h1>
          <p className={styles.sub}>AI, ecommerce growth and performance marketing — written by practitioners, not content teams.</p>
        </div>
      </section>

      <Ticker />

      <section className={styles.posts}>
        <ScrollReveal>
          <span className="section-label">// Latest articles</span>
        </ScrollReveal>
        <div className={styles.postList}>
          {POSTS.map((post, i) => (
            <ScrollReveal key={post.slug} delay={(Math.min(i + 1, 4)) as 1 | 2 | 3 | 4}>
              <Link href={`/blog/${post.slug}`} className={styles.postRow}>
                <div className={styles.postMeta}>
                  <span className={styles.postCategory}>{post.category}</span>
                  <span className={styles.postDate}>{post.date}</span>
                  <span className={styles.postRead}>{post.readTime} read</span>
                </div>
                <div className={styles.postMain}>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <p className={styles.postDesc}>{post.description}</p>
                </div>
                <span className={styles.postArrow}>↗</span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <ScrollReveal>
          <span className="section-label">// Want results, not just reading?</span>
          <h2 className="section-title">Let&apos;s work<br />together.</h2>
          <a href="https://calendly.com/zaq-lengmedia/leng-media-intro-call" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 40, display: 'inline-block' }}>Book a Call</a>
        </ScrollReveal>
      </section>
    </>
  )
}
