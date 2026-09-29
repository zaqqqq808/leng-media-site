import { MetadataRoute } from 'next'
import { SERVICE_SLUGS } from '@/lib/services'
import { POSTS } from '@/lib/blog-posts'
import { SITE_URL } from '@/lib/seo'

// Standalone pages. Blog posts and service pages are added from their data
// files below, so publishing one never needs a sitemap edit.
const PAGES: { path: string; priority: number }[] = [
  { path: '', priority: 1 },
  { path: '/chatgpt-ads-agency', priority: 0.9 },
  { path: '/ecommerce-protocol', priority: 0.8 },
  { path: '/blog', priority: 0.8 },
  { path: '/business-enquiry', priority: 0.7 },
  { path: '/ai-course', priority: 0.7 },
  { path: '/ai-software-tutorials', priority: 0.6 },
  { path: '/free-tools', priority: 0.6 },
  { path: '/free-tools/ai-cheat-sheet', priority: 0.6 },
  { path: '/free-tools/gdn-ad-specs', priority: 0.5 },
  { path: '/free-tools/ppc-ai-skills', priority: 0.5 },
  { path: '/privacy', priority: 0.2 },
]

// lastModified is only set where we know it: stamping every URL with
// "now" on each request teaches Google to ignore the field entirely.
export default function sitemap(): MetadataRoute.Sitemap {
  const newestPost = Object.values(POSTS).map(p => p.updatedISO ?? p.dateISO).sort().at(-1)

  return [
    ...PAGES.map(({ path, priority }) => ({
      url: `${SITE_URL}${path}`,
      priority,
      ...(path === '/blog' && newestPost ? { lastModified: newestPost } : {}),
    })),
    ...SERVICE_SLUGS.map(slug => ({
      url: `${SITE_URL}/services/${slug}`,
      priority: 0.9,
    })),
    ...Object.values(POSTS).map(post => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: post.updatedISO ?? post.dateISO,
      priority: 0.7,
    })),
  ]
}
