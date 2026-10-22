import Anthropic from '@anthropic-ai/sdk'
import { Resend } from 'resend'

interface QA { question: string; answer: string }

export interface BookingDetails {
  name: string
  firstName?: string
  email: string
  timezone?: string
  eventName?: string
  startTime?: string
  answers: QA[]
}

const SYSTEM_PROMPT = `You write a short email from Zaq Qureshi, founder of Leng Media, to someone who has just booked a video call with him. Leng Media is a London agency that builds custom ecommerce websites and runs paid ads, SEO, AI automation and lead generation for ecommerce and DTC brands in the UK and USA.

The email has two jobs: get a reply before the call, and help Zaq learn whether this person has the budget, the urgency and the authority to go ahead. It must read like a real person typed it, never like a sales screen or an automated sequence.

Write it like this:
- Open with "Hi {first name}," then say he is looking forward to speaking at the booked time.
- Show you have read their booking answers with one specific, natural remark about them.
- Ask exactly one question, easy to answer in a line or two, that follows from their answers and reveals budget, timing or decision-making. Good angles: what is prompting this now, what a successful outcome would be worth to the business, who else is involved in the decision, what they have spent on this before and how it went, or their launch date. If an answer suggests weak fit (no ad spend yet, budget answered No, "just exploring"), make the question a polite test of commitment.
- End with "Speak soon," on its own line and "Zaq" on the next.

Rules: 50 to 110 words. Plain text, short paragraphs, no bullet points, no subject line, no links. UK English. Never use em dashes or en dashes. Do not mention AI, automation, or that this email was generated. Do not invent facts, results, case studies or promises, and do not offer discounts. Mention prices only if their answers make it necessary, using only these: website builds start at $2,000; monthly retainers range from $1,340 to $18,000.

Reply with the email text only.`

function firstNameOf(d: BookingDetails) {
  return (d.firstName || d.name || '').trim().split(/\s+/)[0] || 'there'
}

export function formatWhen(startTime?: string, timezone?: string) {
  if (!startTime) return { day: '', full: 'our call' }
  const date = new Date(startTime)
  const opts = { timeZone: timezone || 'Europe/London' }
  const day = new Intl.DateTimeFormat('en-GB', { ...opts, weekday: 'long' }).format(date)
  const time = new Intl.DateTimeFormat('en-GB', { ...opts, hour: 'numeric', minute: '2-digit', hour12: true })
    .format(date).replace(/\s/g, '').toLowerCase()
  return { day, full: `${day} at ${time}` }
}

// Finds the answer to a Calendly question by matching its wording, so it
// keeps working if a question is lightly reworded or reordered.
function answerTo(answers: QA[], pattern: RegExp) {
  return answers.find(qa => pattern.test(qa.question))?.answer?.trim() || ''
}

function domainOf(raw: string) {
  const host = raw.trim().replace(/^https?:\/\//i, '').replace(/^www\./i, '').split(/[/?#\s]/)[0]
  return /^[a-z0-9-]+(\.[a-z0-9-]+)+$/i.test(host) ? host.toLowerCase() : ''
}

/**
 * Picks one qualifying question from the booking answers. Each one is aimed
 * at budget, timing or authority, and the weakest-fit answers get a polite
 * test of commitment. Questions match the two Calendly forms: the website
 * build call and the general intro call.
 */
function pickQuestion(answers: QA[]): { remark: string; question: string } {
  const site = domainOf(answerTo(answers, /what is your website/i))
  const remark = site ? `I'll take a look at ${site} before we speak. ` : ''

  // Intro call (ads, SEO, AI, lead gen, CMO, white label)
  const budget = answerTo(answers, /within your budget/i)
  const adSpend = answerTo(answers, /spend on ads/i)
  if (/^no/i.test(budget)) {
    return { remark, question: "You mentioned our fees are above your current budget. Is that likely to change in the next few months, or is there a figure you'd want to stay under?" }
  }
  if (adSpend) {
    if (/nothing/i.test(adSpend)) {
      return { remark, question: "As you're not running ads yet, have you set a budget aside for marketing over the next few months, or are you still scoping it?" }
    }
    if (/100k|100,000\+/i.test(adSpend) || /25,?000\s*-\s*\$?100/i.test(adSpend)) {
      return { remark, question: 'Who else will be involved in choosing an agency? I want to make sure we cover what matters to them on the call.' }
    }
    if (/5,?000\s*-\s*\$?25/i.test(adSpend)) {
      return { remark, question: 'If we got your ads performing, how quickly would you be ready to scale your spend?' }
    }
    return { remark, question: "What's held you back from spending more on ads so far? Is it results, budget, or not having the right setup?" }
  }

  // Website build call
  const hasSite = answerTo(answers, /already have a website/i)
  const platform = answerTo(answers, /built on/i)
  if (/need a new/i.test(hasSite)) {
    return { remark, question: "So I can make the most of our time: have you set a budget aside for the build yet, and is there a launch date you're working towards?" }
  }
  if (/shopify/i.test(platform)) {
    return { remark, question: 'To pitch the build at the right level, roughly what does your Shopify store turn over each month?' }
  }
  if (/wordpress|wix|squarespace|godaddy|webflow|weebly/i.test(platform)) {
    return { remark, question: "What's the main thing your current site is holding you back on? Even a rough idea of the enquiries or sales you think you're missing would help." }
  }

  return { remark, question: "So I can make the most of our time: what's prompting you to look at this now, and what would a great result look like for you over the next three months?" }
}

/** The free, rule-based email. Used when Claude isn't configured or fails. */
export function ruleBasedEmail(firstName: string, when: string, answers: QA[]) {
  const { remark, question } = pickQuestion(answers)
  return `Hi ${firstName},

Thanks for booking in for ${when}. Looking forward to speaking.

${remark}${question}

Speak soon,
Zaq`
}

async function writeWithClaude(d: BookingDetails, firstName: string, when: string): Promise<string | null> {
  if (!process.env.ANTHROPIC_API_KEY) return null
  const client = new Anthropic()
  const response = await client.beta.messages.create({
    model: 'claude-opus-5-5',
    max_tokens: 2000,
    output_config: { effort: 'low' },
    betas: ['server-side-fallback-2026-07-01'],
    fallbacks: 'default',
    system: SYSTEM_PROMPT,
    messages: [{
      role: 'user',
      content: JSON.stringify({
        first_name: firstName,
        call: d.eventName || 'Intro call',
        call_time: when,
        booking_answers: d.answers,
      }, null, 2),
    }],
  })
  if (response.stop_reason === 'refusal') return null
  const text = response.content
    .flatMap(block => (block.type === 'text' ? [block.text] : []))
    .join('')
    .trim()
    // Belt and braces for the no-dash rule.
    .replace(/\s*[—–]\s*/g, ', ')
  // Reject anything that drifted from the brief rather than send it.
  if (text.length < 80 || text.length > 1400 || !text.startsWith('Hi ')) return null
  return text
}

/**
 * Emails someone who just booked a call: a short, personal note from Zaq
 * that reacts to their booking answers and asks one qualifying question.
 * Sent from Zaq's own address with replies going to his inbox, and
 * scheduled a few minutes out so it doesn't land as an instant autoresponse.
 */
export async function sendBookingFollowUp(d: BookingDetails) {
  if (!d.email || d.email.toLowerCase().endsWith('@lengmedia.com')) return

  const firstName = firstNameOf(d)
  const when = formatWhen(d.startTime, d.timezone)
  // The WhatsApp number is for Zaq, not for the email.
  const answers = d.answers.filter(qa => !/whatsapp|phone/i.test(qa.question))

  let body: string | null = null
  try {
    body = await writeWithClaude({ ...d, answers }, firstName, when.full)
  } catch (error) {
    if (error instanceof Anthropic.APIError) {
      console.error(`Booking follow-up: Claude API error ${error.status}:`, error.message)
    } else {
      console.error('Booking follow-up: Claude call failed:', error)
    }
  }
  if (!body) body = ruleBasedEmail(firstName, when.full, answers)

  // Land ~8 minutes after booking unless the call itself is sooner than that.
  const startsAt = d.startTime ? new Date(d.startTime).getTime() : Infinity
  const sendAt = Date.now() + 8 * 60 * 1000
  const scheduledAt = startsAt - sendAt > 20 * 60 * 1000 ? new Date(sendAt).toISOString() : undefined

  const resend = new Resend(process.env.RESEND_API_KEY)
  const { error } = await resend.emails.send({
    from: 'Zaq Qureshi <zaq@lengmedia.com>',
    to: d.email,
    replyTo: 'zaq@lengmedia.com',
    bcc: 'zaq@lengmedia.com',
    subject: when.day ? `Our call on ${when.day}` : 'Our call',
    text: body,
    ...(scheduledAt ? { scheduledAt } : {}),
  })
  if (error) throw new Error(`Resend failed: ${error.message}`)
}
