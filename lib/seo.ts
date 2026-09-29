import type { Metadata } from 'next'

export const SITE_URL = 'https://www.lengmedia.com'
export const SITE_NAME = 'Leng Media'
const OG_IMAGE = { url: '/og-image.jpg', width: 1200, height: 630 }

interface PageMeta {
  title: string
  description: string
  /** Path from the site root, e.g. '/free-tools'. Becomes the canonical and og:url. */
  path: string
  /** Title for social shares, when it should differ from the <title>. */
  socialTitle?: string
  type?: 'website' | 'article'
  noindex?: boolean
}

/**
 * Metadata for a standalone page: canonical, Open Graph and Twitter card.
 * Without an explicit openGraph block a page inherits the root layout's,
 * so it shares the homepage's title and URL when posted on social media.
 */
export function pageMetadata({ title, description, path, socialTitle, type = 'website', noindex }: PageMeta): Metadata {
  const url = `${SITE_URL}${path === '/' ? '' : path}`
  const shareTitle = socialTitle ?? title
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: shareTitle,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ ...OG_IMAGE, alt: shareTitle }],
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title: shareTitle,
      description,
      images: [OG_IMAGE.url],
    },
    ...(noindex ? { robots: { index: false, follow: false } } : {}),
  }
}

/** BreadcrumbList for a page. Items run from Home down to the current page. */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === '/' ? '' : item.path}`,
    })),
  }
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}
