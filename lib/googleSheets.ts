import { google } from 'googleapis'

interface LeadRow {
  name: string
  email: string
  service: string
  message: string
  source: string
}

export async function appendLeadRow(row: LeadRow) {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY
  const sheetId = process.env.GOOGLE_SHEETS_SHEET_ID

  if (!clientEmail || !privateKey || !sheetId) {
    console.error('Google Sheets env vars not configured, skipping lead log')
    return
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })
  const sheets = google.sheets({ version: 'v4', auth })

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: 'Leads!A:F',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[
        new Date().toISOString(),
        row.name,
        row.email,
        row.service,
        row.source,
        row.message,
      ]],
    },
  })
}
