import { MetadataRoute } from 'next'

const BASE = 'https://www.lengmedia.com'

const SERVICE_SLUGS = [
  'direct-response',
  'ai-solutions',
  'seo',
  'lead-generation',
  'fractional-cmo',
  'website-builds',
  'agency-assist',
]

const BLOG_SLUGS = [
  'what-is-an-ai-automation-agency',
  'best-ai-chatbot-for-ecommerce',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE}/business-enquiry`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/ecommerce-protocol`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/free-tools`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE}/ai-cheat-sheet`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...SERVICE_SLUGS.map(slug => ({
      url: `${BASE}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    ...BLOG_SLUGS.map(slug => ({
      url: `${BASE}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
