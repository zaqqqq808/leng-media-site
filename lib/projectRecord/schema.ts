/**
 * Project record forms: the client brief and project updates (change requests and sign-offs).
 *
 * One definition drives the form UI, server-side validation, the PDF receipt and the email,
 * so what the client saw, what we stored and what we sent them can never drift apart.
 * That matters because these receipts are our evidence of what was agreed.
 */

export type FieldType = 'text' | 'email' | 'tel' | 'url' | 'date' | 'textarea' | 'select' | 'radio' | 'checkboxes'

export interface Field {
  name: string
  label: string
  type: FieldType
  required?: boolean
  options?: string[]
  placeholder?: string
  help?: string
  /** Only shown (and only required) when another field has one of these values. */
  showIf?: { field: string; in: string[] }
}

export interface Section {
  title: string
  intro?: string
  fields: Field[]
}

export interface Declaration {
  name: string
  text: string
}

export interface RecordForm {
  kind: 'brief' | 'update'
  /** Heading on the PDF receipt and in the email subject. */
  title: string
  refPrefix: string
  sections: Section[]
  /** Checkbox statements the client must tick before submitting. */
  declarations: (values: Record<string, string>) => Declaration[]
}

const YES_NO = ['Yes', 'No']

const CONTACT: Section = {
  title: 'About you',
  fields: [
    { name: 'clientName', label: 'Your full name', type: 'text', required: true },
    { name: 'businessName', label: 'Business name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true, help: 'Your signed copy is emailed here.' },
    { name: 'phone', label: 'Phone', type: 'tel' },
    { name: 'role', label: 'Your role in the business', type: 'text', placeholder: 'e.g. Owner, Marketing Manager' },
  ],
}

export const BRIEF: RecordForm = {
  kind: 'brief',
  title: 'Project Brief',
  refPrefix: 'BRF',
  sections: [
    {
      ...CONTACT,
      fields: [
        ...CONTACT.fields,
        { name: 'decisionMaker', label: 'Are you the final decision maker for this project?', type: 'radio', options: YES_NO, required: true },
        { name: 'otherApprovers', label: 'Who else must approve the work?', type: 'text', required: true, showIf: { field: 'decisionMaker', in: ['No'] } },
        { name: 'currentSite', label: 'Current website (if any)', type: 'url', placeholder: 'https://' },
      ],
    },
    {
      title: 'Your business',
      fields: [
        { name: 'whatYouDo', label: 'What does your business do?', type: 'textarea', required: true },
        { name: 'offerPriority', label: 'Main products or services, in order of priority', type: 'textarea', required: true },
        { name: 'usp', label: 'Why do customers choose you over competitors?', type: 'textarea' },
        { name: 'areas', label: 'Locations or areas you serve', type: 'text' },
      ],
    },
    {
      title: 'Goals',
      fields: [
        {
          name: 'primaryGoal', label: 'Primary goal of the website', type: 'radio', required: true,
          options: ['Enquiries or leads', 'Bookings or appointments', 'Online sales', 'Brand credibility', 'Information for existing customers', 'Other'],
        },
        { name: 'primaryGoalOther', label: 'Describe the goal', type: 'text', required: true, showIf: { field: 'primaryGoal', in: ['Other'] } },
        { name: 'mainAction', label: 'The one action you most want visitors to take', type: 'text', required: true, placeholder: 'e.g. Book a free consultation' },
        { name: 'success', label: 'How will you judge whether the website is a success?', type: 'textarea' },
      ],
    },
    {
      title: 'Audience',
      fields: [
        { name: 'audience', label: 'Who are your ideal customers?', type: 'textarea', required: true, help: 'Age, profession, problem they have, what they care about.' },
      ],
    },
    {
      title: 'Pages and features',
      fields: [
        {
          name: 'pages', label: 'Pages required', type: 'checkboxes', required: true,
          options: ['Home', 'About', 'Services overview', 'Individual service pages', 'Products or shop', 'Locations', 'Portfolio or gallery', 'Reviews or testimonials', 'Blog', 'FAQ', 'Contact', 'Booking', 'Careers', 'Privacy policy and terms'],
        },
        { name: 'pagesOther', label: 'Other pages, or detail on the pages above', type: 'textarea', help: 'e.g. how many service pages, which locations.' },
        {
          name: 'features', label: 'Features required', type: 'checkboxes',
          options: ['Contact form', 'Online booking', 'Online payments or e-commerce', 'Blog you can edit yourself', 'Newsletter sign-up', 'WhatsApp or live chat', 'Multiple languages', 'Member or customer login', 'Integration with other software'],
        },
        { name: 'featuresDetail', label: 'Detail on features (e.g. which booking or CRM software)', type: 'textarea' },
      ],
    },
    {
      title: 'Content and access',
      fields: [
        { name: 'copy', label: 'Who will provide the written content?', type: 'radio', required: true, options: ['We will provide it', 'Leng Media writes it', 'A mix of both'] },
        { name: 'photos', label: 'Photography', type: 'radio', required: true, options: ['We have our own photos', 'Leng Media sources or creates images', 'We need a photoshoot', 'A mix'] },
        { name: 'brandAssets', label: 'Do you have a logo and brand guidelines?', type: 'radio', required: true, options: ['Logo and guidelines', 'Logo only', 'Neither'] },
        { name: 'domain', label: 'Do you own your domain name?', type: 'radio', required: true, options: ['Yes', 'No', 'Not sure'] },
        { name: 'domainDetail', label: 'Domain name and where it is registered', type: 'text', showIf: { field: 'domain', in: ['Yes', 'Not sure'] } },
      ],
    },
    {
      title: 'Style',
      fields: [
        { name: 'likes', label: 'Websites you like, and what you like about each', type: 'textarea', required: true },
        { name: 'dislikes', label: 'Websites or styles you do not want', type: 'textarea' },
        { name: 'competitors', label: 'Main competitors (names or websites)', type: 'textarea' },
        { name: 'feel', label: 'Three words for how the website should feel', type: 'text' },
        { name: 'colours', label: 'Colours or fonts to use or avoid', type: 'text' },
      ],
    },
    {
      title: 'Must-haves',
      intro: 'Be specific. These two answers are what we build and check against.',
      fields: [
        { name: 'mustHaves', label: 'Must-haves: anything the website must include or do', type: 'textarea', required: true },
        { name: 'mustNots', label: 'Must-nots: anything the website must not include or do', type: 'textarea', required: true },
      ],
    },
    {
      title: 'Search and marketing',
      fields: [
        { name: 'keywords', label: 'What would customers type into Google to find you?', type: 'textarea' },
        { name: 'migration', label: 'Is there an existing website whose search rankings we must protect?', type: 'radio', options: ['Yes', 'No', 'Not sure'] },
        { name: 'tracking', label: 'Analytics or advertising accounts already in use', type: 'text', placeholder: 'e.g. Google Analytics, Meta Ads' },
      ],
    },
    {
      title: 'Timeline and budget',
      fields: [
        { name: 'launchDate', label: 'Target launch date', type: 'date' },
        { name: 'deadlineReason', label: 'Is there a fixed deadline? Why?', type: 'text', placeholder: 'e.g. Trade show on 12 March' },
        { name: 'budget', label: 'Agreed budget', type: 'text', required: true, placeholder: 'As per proposal, or amount' },
        { name: 'anythingElse', label: 'Anything else we should know', type: 'textarea' },
      ],
    },
  ],
  declarations: () => [
    { name: 'complete', text: 'This brief is complete and accurate. Anything not included in it is outside the agreed scope and will be handled as a change request, which may affect cost and timeline.' },
    { name: 'authorised', text: 'I am authorised to agree this brief on behalf of the business named above.' },
  ],
}

export const UPDATE_TYPES = ['Change request', 'Feedback round', 'Design approval', 'First draft approval', 'Launch approval'] as const

export const UPDATE: RecordForm = {
  kind: 'update',
  title: 'Project Update',
  refPrefix: 'UPD',
  sections: [
    CONTACT,
    {
      title: 'Update',
      fields: [
        { name: 'project', label: 'Project', type: 'text', required: true, placeholder: 'e.g. New website' },
        { name: 'updateType', label: 'What is this?', type: 'radio', required: true, options: [...UPDATE_TYPES] },
        { name: 'change', label: 'Describe the change', type: 'textarea', required: true, showIf: { field: 'updateType', in: ['Change request'] } },
        { name: 'changeReason', label: 'Why is it needed?', type: 'textarea', showIf: { field: 'updateType', in: ['Change request'] } },
        { name: 'changeWhere', label: 'Pages or areas affected', type: 'text', showIf: { field: 'updateType', in: ['Change request'] } },
        { name: 'urgency', label: 'Urgency', type: 'radio', options: ['Before launch', 'After launch is fine'], showIf: { field: 'updateType', in: ['Change request'] } },
        { name: 'feedback', label: 'Your consolidated feedback, one numbered point per line', type: 'textarea', required: true, placeholder: '1. \n2. \n3. ', showIf: { field: 'updateType', in: ['Feedback round'] } },
        { name: 'approvedVersion', label: 'What are you approving? (link or version)', type: 'text', required: true, showIf: { field: 'updateType', in: ['Design approval', 'First draft approval', 'Launch approval'] } },
        { name: 'conditions', label: 'Any conditions or notes', type: 'textarea', showIf: { field: 'updateType', in: ['Design approval', 'First draft approval', 'Launch approval'] } },
      ],
    },
  ],
  declarations: (v) => {
    const auth = { name: 'authorised', text: 'I am authorised to make this decision on behalf of the business named above.' }
    switch (v.updateType) {
      case 'Change request':
        return [{ name: 'impact', text: 'I understand this change is outside the signed brief. Leng Media will confirm any cost and timeline impact in writing, and no chargeable work starts until I approve it.' }, auth]
      case 'Feedback round':
        return [{ name: 'final', text: 'This is my complete, consolidated feedback for this round. Points raised elsewhere (calls, messages) are not included unless listed here.' }, auth]
      case 'Launch approval':
        return [{ name: 'approve', text: 'I approve the website to go live. Changes after launch will be handled as change requests or under an aftercare agreement.' }, auth]
      default:
        return [{ name: 'approve', text: `I give ${String(v.updateType || 'this').toLowerCase()} for the work named above. Further changes to approved work will be handled as change requests.` }, auth]
    }
  },
}

export const FORMS = { brief: BRIEF, update: UPDATE }

export function isVisible(field: Field, values: Record<string, string>): boolean {
  if (!field.showIf) return true
  return field.showIf.in.includes(values[field.showIf.field] ?? '')
}

export const MAX_FIELD_LENGTH = 6000
