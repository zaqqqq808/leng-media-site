// Site-wide link lists shared by the nav menu and the footer.
// Anchor text is the keyword each page targets, which is also what
// Google reads as a signal of what the linked page is about.

export interface SiteLink { label: string; href: string }

export const SERVICE_LINKS: SiteLink[] = [
  { label: 'Ecommerce PPC Agency', href: '/services/direct-response' },
  { label: 'ChatGPT Ads Agency', href: '/chatgpt-ads-agency' },
  { label: 'Ecommerce SEO Agency', href: '/services/seo' },
  { label: 'AI Chatbot Development', href: '/services/ai-solutions' },
  { label: 'Ecommerce Web Design', href: '/services/website-builds' },
  { label: 'Lead Generation Agency', href: '/services/lead-generation' },
  { label: 'Fractional CMO Services', href: '/services/fractional-cmo' },
  { label: 'White Label Marketing', href: '/services/agency-assist' },
]

export const RESOURCE_LINKS: SiteLink[] = [
  { label: 'Blog', href: '/blog' },
  { label: 'Free Growth Tools', href: '/free-tools' },
  { label: 'AI for Ecommerce Cheat Sheet', href: '/free-tools/ai-cheat-sheet' },
  { label: 'GDN Ad Specs Cheat Sheet', href: '/free-tools/gdn-ad-specs' },
  { label: 'PPC AI Skills for Claude', href: '/free-tools/ppc-ai-skills' },
]

export const COURSE_LINKS: SiteLink[] = [
  { label: 'The Ecommerce Protocol', href: '/ecommerce-protocol' },
  { label: 'AI for Ecommerce Course', href: '/ai-course' },
  { label: 'AI Software Tutorials', href: '/ai-software-tutorials' },
]

export const COMPANY_LINKS: SiteLink[] = [
  { label: 'Business Enquiry', href: '/business-enquiry' },
  { label: 'Privacy Policy', href: '/privacy' },
]
