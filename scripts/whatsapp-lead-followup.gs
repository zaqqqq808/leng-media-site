/**
 * Auto WhatsApp follow-up for the Leads sheet.
 *
 * Columns (A:H): Timestamp, Name, Email, Service, Source, Message, Phone,
 * WhatsApp Sent. Every 5 minutes, sends the approved WhatsApp template to
 * any row that has a phone number in column G and nothing yet in column H,
 * then writes a status into H so it's never messaged twice.
 *
 * ── One-time setup ──────────────────────────────────────────────────
 * 1. Open the Leads Google Sheet.
 * 2. Extensions > Apps Script. Delete any starter code, paste this file in.
 * 3. Project Settings (gear icon, left sidebar) > Script Properties > add:
 *      WHATSAPP_ACCESS_TOKEN     (same value as on Vercel)
 *      WHATSAPP_PHONE_NUMBER_ID  (same value as on Vercel)
 * 4. Back in the editor, select the "createTrigger" function from the
 *    dropdown at the top and click Run once. Approve the permissions
 *    prompt (it needs access to this spreadsheet and to make web
 *    requests). This installs the recurring 5-minute check.
 * 5. To test immediately without waiting: select "sendWhatsAppToNewLeads"
 *    from the dropdown and click Run.
 */

const SHEET_NAME = 'Leads'
const COL = { TIMESTAMP: 1, NAME: 2, EMAIL: 3, SERVICE: 4, SOURCE: 5, MESSAGE: 6, PHONE: 7, SENT: 8 }
const TEMPLATE_NAME = 'lead_followup'
const TEMPLATE_LANG = 'en'
const GRAPH_VERSION = 'v21.0'

function createTrigger() {
  ScriptApp.getProjectTriggers().forEach(function (t) { ScriptApp.deleteTrigger(t) })
  ScriptApp.newTrigger('sendWhatsAppToNewLeads').timeBased().everyMinutes(5).create()
  Logger.log('Trigger installed: sendWhatsAppToNewLeads will run every 5 minutes.')
}

function sendWhatsAppToNewLeads() {
  const props = PropertiesService.getScriptProperties()
  const token = props.getProperty('WHATSAPP_ACCESS_TOKEN')
  const phoneNumberId = props.getProperty('WHATSAPP_PHONE_NUMBER_ID')
  if (!token || !phoneNumberId) {
    Logger.log('Missing WHATSAPP_ACCESS_TOKEN or WHATSAPP_PHONE_NUMBER_ID in Script Properties.')
    return
  }

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME)
  if (!sheet) {
    Logger.log('No sheet tab named "' + SHEET_NAME + '" found.')
    return
  }

  const data = sheet.getDataRange().getValues()

  for (let i = 1; i < data.length; i++) { // row 0 is the header
    const row = data[i]
    const rawPhone = row[COL.PHONE - 1]
    const alreadyHandled = row[COL.SENT - 1]
    const name = row[COL.NAME - 1] || 'there'
    if (!rawPhone || alreadyHandled) continue

    const digits = normalisePhone(String(rawPhone))
    if (!digits) {
      sheet.getRange(i + 1, COL.SENT).setValue('Skipped: invalid number')
      continue
    }

    try {
      sendTemplate(digits, String(name).split(' ')[0], token, phoneNumberId)
      sheet.getRange(i + 1, COL.SENT).setValue('Sent ' + new Date().toISOString())
    } catch (err) {
      sheet.getRange(i + 1, COL.SENT).setValue('Failed: ' + err.message)
      Logger.log('Row ' + (i + 1) + ' failed: ' + err.message)
    }
  }
}

/** Same normalisation rules as lib/whatsapp.ts on the site, so both
 * paths treat "+44 7928...", "07928...", "0044 7928..." consistently. */
function normalisePhone(raw) {
  let digits = raw.replace(/[^\d+]/g, '')
  if (digits.indexOf('+') === 0) {
    digits = digits.slice(1)
  } else if (digits.indexOf('00') === 0) {
    digits = digits.slice(2)
  } else if (digits.indexOf('0') === 0) {
    digits = '44' + digits.slice(1) // UK default for national-format numbers
  }
  if (digits.length < 8 || digits.length > 15) return null
  return digits
}

function sendTemplate(toPhone, firstName, token, phoneNumberId) {
  const url = 'https://graph.facebook.com/' + GRAPH_VERSION + '/' + phoneNumberId + '/messages'
  const payload = {
    messaging_product: 'whatsapp',
    to: toPhone,
    type: 'template',
    template: {
      name: TEMPLATE_NAME,
      language: { code: TEMPLATE_LANG },
      components: [{ type: 'body', parameters: [{ type: 'text', text: firstName }] }],
    },
  }
  const res = UrlFetchApp.fetch(url, {
    method: 'post',
    contentType: 'application/json',
    headers: { Authorization: 'Bearer ' + token },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true,
  })
  if (res.getResponseCode() >= 300) {
    throw new Error(res.getContentText())
  }
}
