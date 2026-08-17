import { google } from 'googleapis';

// Google Auth setup
const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});
const sheets = google.sheets({ version: 'v4', auth });

const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID;
const SHEET_NAME = 'RSVP';

if (!SPREADSHEET_ID) {
  console.error('ERROR: GOOGLE_SPREADSHEET_ID environment variable is not set');
}

async function ensureSheetExists() {
  const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId: SPREADSHEET_ID });
  const exists = spreadsheet.data.sheets.some(
    (sheet) => sheet.properties.title === SHEET_NAME
  );

  if (!exists) {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: SPREADSHEET_ID,
      requestBody: {
        requests: [{ addSheet: { properties: { title: SHEET_NAME } } }],
      },
    });

    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A1:D1`,
      valueInputOption: 'RAW',
      resource: {
        values: [['Name', 'Attending', 'Message', 'Submitted At']],
      },
    });
  }
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed.' });
  }

  if (!SPREADSHEET_ID) {
    return res.status(400).json({ success: false, message: 'GOOGLE_SPREADSHEET_ID not configured.' });
  }

  try {
    const { name, attending, message } = req.body;

    if (!name || !attending) {
      return res.status(400).json({
        success: false,
        message: 'Name and attendance status are required.',
      });
    }

    await ensureSheetExists();

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A1:D1`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          name,
          attending,
          message || '',
          new Date().toLocaleString(),
        ]],
      },
    });

    return res.status(200).json({ success: true, message: 'RSVP submitted successfully!' });
  } catch (error) {
    console.error('Error submitting RSVP:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to submit RSVP.',
      error: error.message,
    });
  }
}
