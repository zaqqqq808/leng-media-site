import { SERVICES } from '@/lib/services'
import { POSTS_BY_DATE } from '@/lib/blog-posts'
import { SITE_URL } from '@/lib/seo'

// llms.txt: a plain-text map of the site for AI assistants and answer
// engines (llmstxt.org). Built from the same data as the pages, so it
// never drifts out of date.
export const dynamic = 'force-static'

export function GET() {
  const services = Object.entries(SERVICES)
    .map(([slug, s]) => `- [${s.name}](${SITE_URL}/services/${slug}): ${s.metaDescription}`)
    .join('\n')
  const posts = POSTS_BY_DATE
    .map(p => `- [${p.title}](${SITE_URL}/blog/${p.slug}): ${p.description}`)
    .join('\n')

  const body = `# Leng Media

> London performance marketing agency for ecommerce and DTC brands in the UK and USA: paid media, ecommerce SEO, AI automation, custom Next.js websites and performance-based lead generation.

## Services

${services}
- [ChatGPT Ads Agency](${SITE_URL}/chatgpt-ads-agency): Ads inside ChatGPT via OpenAI, plus AI-built creative across Meta, TikTok and Google.

## Courses

- [The Ecommerce Protocol](${SITE_URL}/ecommerce-protocol): Ecommerce course with live 1-on-1 mentorship, from supplier to first sale.
- [AI for Ecommerce Course](${SITE_URL}/ai-course): Live 1-on-1 sessions on applying AI to an ecommerce brand.

## Guides

${posts}

## Free tools

- [AI for Ecommerce Cheat Sheet](${SITE_URL}/free-tools/ai-cheat-sheet)
- [GDN Ad Specs Cheat Sheet](${SITE_URL}/free-tools/gdn-ad-specs)
- [PPC AI Skills for Claude](${SITE_URL}/free-tools/ppc-ai-skills)

## Contact

- [Business enquiry](${SITE_URL}/business-enquiry)
`

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
