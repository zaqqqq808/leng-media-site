import { google } from 'googleapis'

interface LeadRow {
  name: string
  email: string
  service: string
  message: string
  source: string
  /** E.164 digits, no "+". Leave unset if the lead didn't share a number. */
  phone?: string
  /**
   * Set only when this code path already sent a WhatsApp message itself
   * (e.g. the Meta lead webhook's immediate send), so the Apps Script
   * sheet-watcher skips the row instead of messaging the lead twice.
   * Leave unset to let the Apps Script handle sending.
   */
  whatsappStatus?: string
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

  // Columns: A Timestamp, B Name, C Email, D Service, E Source, F Message,
  // G Phone, H WhatsApp Sent (the Apps Script sheet-watcher reads G/H).
  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: 'Leads!A:H',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
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
    },
  })
}
