import { MetadataRoute } from 'next'

const BASE = 'https://www.lengmedia.com'

const SERVICE_SLUGS = [
  'direct-response',
  'ai-solutions',
  'seo',
  'lead-generation',
  'cmo-as-a-service',
  'website-builds',
  'agency-assist',
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
      priority: 0.9,
    },
    {
      url: `${BASE}/ecommerce-protocol`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/free-tools`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...SERVICE_SLUGS.map(slug => ({
      url: `${BASE}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
