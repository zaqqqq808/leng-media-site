// Question flow for the pre-WhatsApp qualifier (/whatsapp). It mirrors the
// questions on the two Calendly booking forms, so a lead that arrives on
// WhatsApp has already answered what a booked call would have asked, plus a
// budget commitment that filters out people who can't afford us.

export const WHATSAPP_NUMBER = '447928668478'

export type ServiceKey = 'website' | 'ads' | 'seo' | 'ai' | 'leads' | 'cmo' | 'whitelabel'

// Labels match the service names used in the leads sheet and contact form.
export const SERVICES: Record<ServiceKey, string> = {
  website: 'Website Building',
  ads: 'Direct Response',
  seo: 'Shopify SEO',
  ai: 'AI Solutions',
  leads: 'Lead Generation',
  cmo: 'Fractional CMO',
  whitelabel: 'Agency Assistance',
}

// Friendlier wording for the first question and the WhatsApp message.
export const SERVICE_PHRASES: Record<ServiceKey, string> = {
  website: 'a website build',
  ads: 'paid ads (Meta, Google, TikTok)',
  seo: 'ecommerce SEO',
  ai: 'AI chatbots or automation',
  leads: 'lead generation',
  cmo: 'a fractional CMO',
  whitelabel: 'white label support for my agency',
}

export interface Step {
  id: string
  /** Short label used in the WhatsApp message and the leads sheet. */
  label: string
  question: string
  hint?: string
  options?: string[]
  /** Free-text step. */
  input?: { placeholder: string; optional?: boolean }
  /** Only shown when this returns true for the answers so far. */
  when?: (answers: Record<string, string>) => boolean
  /** Answers that end the flow on the "not the right fit" screen. */
  disqualify?: string[]
}

const TIMEFRAME: Step = {
  id: 'timeframe',
  label: 'Timeline',
  question: 'When do you want to get started?',
  options: ['ASAP (within 2 weeks)', 'Within a month', 'In 1 to 3 months', 'Just exploring for now'],
}

export const WEBSITE_STEPS: Step[] = [
  {
    id: 'site',
    label: 'Current site',
    question: 'Do you already have a website?',
    options: ['Already have one', 'Need a new one'],
  },
  {
    id: 'platform',
    label: 'Built on',
    question: 'What is it built on?',
    options: ['Shopify', 'WordPress', 'Wix or Squarespace', 'Custom code', 'Not sure'],
    when: a => a.site === 'Already have one',
  },
  {
    id: 'industry',
    label: 'Industry',
    question: 'Which industry are you in?',
    input: { placeholder: 'e.g. skincare, property, fitness' },
  },
  TIMEFRAME,
  {
    id: 'commit',
    label: 'Budget',
    question: 'Can you commit to a minimum of $2,000?',
    hint: 'Our builds start at $2,000. If we commit to you and build you a fast, powerful site in days, we need the same commitment from you.',
    options: ["Yes, I'm ready to invest $2,000+", 'No, I need something cheaper'],
    disqualify: ['No, I need something cheaper'],
  },
]

export const RETAINER_STEPS: Step[] = [
  {
    id: 'adspend',
    label: 'Monthly ad spend',
    question: 'How much do you currently spend on ads each month?',
    options: ['Nothing yet', 'Up to $5,000', '$5,000 to $25,000', '$25,000 to $100,000', '$100,000+'],
  },
  {
    id: 'website',
    label: 'Website',
    question: "What's your website?",
    input: { placeholder: 'yourbrand.com', optional: true },
  },
  TIMEFRAME,
  {
    id: 'commit',
    label: 'Budget',
    question: 'Is $1,340 to $18,000 a month within your budget?',
    hint: "That's our fee range, excluding lead gen profit share. If we commit to growing your brand, we need you committed too.",
    options: ["Yes, that's within budget", "No, that's too much for me"],
    disqualify: ["No, that's too much for me"],
  },
]

export function stepsFor(service: ServiceKey): Step[] {
  return service === 'website' ? WEBSITE_STEPS : RETAINER_STEPS
}

export function isServiceKey(value: string | null | undefined): value is ServiceKey {
  return !!value && value in SERVICES
}
