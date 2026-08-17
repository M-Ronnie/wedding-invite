import { google } from 'googleapis';

// Google Auth setup
const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});
const sheets = google.sheets({ version: 'v4', auth });

// Google Sheets configuration - get from environment variable
const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID;

if (!SPREADSHEET_ID) {
  console.error('ERROR: GOOGLE_SPREADSHEET_ID environment variable is not set');
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

  try {
    // Vercel parses JSON bodies automatically into req.body
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1!A1:D1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[name, email, message, new Date().toLocaleString()]],
      },
    });

    return res.status(200).json({ success: true, message: 'Blessing submitted successfully!' });
  } catch (error) {
    console.error('Error in submit-blessing:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to submit blessing.',
      error: error.message,
    });
  }
}
