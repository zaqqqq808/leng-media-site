import { headers } from 'next/headers'

interface LeadRow {
  name: string
  email: string
  service: string
  message: string
  source: string
  /** E.164 digits, no "+". Leave unset if the lead didn't share a number. */
  phone?: string
  /** What happened about a WhatsApp follow-up (e.g. the one-tap nudge to Zaq). */
  whatsappStatus?: string
}

// Auth is KEYLESS, the same way the client booking calendars work: the
// lengmedia.com Google org blocks service account keys, so a JSON key was never
// an option. Each Vercel request carries a short-lived OIDC token; Google's STS
// swaps it for a federated token (Workload Identity pool "vercel"), and IAM
// Credentials turns that into a one-hour token for the leng-booking service
// account, which has edit access to the leads sheet. Nothing secret is stored.
//
// Env vars (none are secrets):
//   GOOGLE_SA_EMAIL         leng-booking@leng-media-bookings.iam.gserviceaccount.com
//   GOOGLE_WIF_AUDIENCE     //iam.googleapis.com/projects/1044565095714/locations/global/workloadIdentityPools/vercel/providers/vercel
//   GOOGLE_SHEETS_SHEET_ID  the leads spreadsheet (needs a "Leads" tab)
let cached = { token: '', exp: 0 }

async function sheetsAccessToken(): Promise<string> {
  const now = Math.floor(Date.now() / 1000)
  if (cached.token && cached.exp - 120 > now) return cached.token

  const oidcToken = (await headers()).get('x-vercel-oidc-token') || process.env.VERCEL_OIDC_TOKEN
  if (!oidcToken) throw new Error('No Vercel OIDC token on this request')

  const sts = await fetch('https://sts.googleapis.com/v1/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      grantType: 'urn:ietf:params:oauth:grant-type:token-exchange',
      audience: process.env.GOOGLE_WIF_AUDIENCE,
      scope: 'https://www.googleapis.com/auth/cloud-platform',
      requestedTokenType: 'urn:ietf:params:oauth:token-type:access_token',
      subjectTokenType: 'urn:ietf:params:oauth:token-type:jwt',
      subjectToken: oidcToken,
    }),
  })
  if (!sts.ok) throw new Error(`Google STS error ${sts.status}: ${await sts.text()}`)
  const federated = (await sts.json()).access_token

  const sa = encodeURIComponent(process.env.GOOGLE_SA_EMAIL || '')
  const res = await fetch(`https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/${sa}:generateAccessToken`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${federated}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ scope: ['https://www.googleapis.com/auth/spreadsheets'], lifetime: '3600s' }),
  })
  if (!res.ok) throw new Error(`Google impersonation error ${res.status}: ${await res.text()}`)
  const j = await res.json()
  cached = { token: j.accessToken, exp: Math.floor(Date.parse(j.expireTime) / 1000) }
  return cached.token
}

export async function appendLeadRow(row: LeadRow) {
  const sheetId = process.env.GOOGLE_SHEETS_SHEET_ID

  if (!process.env.GOOGLE_SA_EMAIL || !process.env.GOOGLE_WIF_AUDIENCE || !sheetId) {
    console.error('Google Sheets env vars not configured, skipping lead log')
    return
  }

  const token = await sheetsAccessToken()

  // Columns: A Timestamp, B Name, C Email, D Service, E Source, F Message,
  // G Phone, H WhatsApp Sent.
  const range = encodeURIComponent('Leads!A:H')
  const res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}:append?valueInputOption=USER_ENTERED`,
    {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        values: [[
          new Date().toISOString(),
          row.name,
          row.email,
          row.service,
          row.source,
          row.message,
          row.phone || '',
          row.whatsappStatus || '',
        ]],
      }),
    },
  )
  if (!res.ok) throw new Error(`Sheets append failed ${res.status}: ${await res.text()}`)
}
