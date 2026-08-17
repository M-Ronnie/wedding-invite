import { google } from 'googleapis';

// Google Auth setup
const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON),
  scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});
const sheets = google.sheets({ version: 'v4', auth });
const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID;

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method not allowed.' });
  }

  if (!SPREADSHEET_ID) {
    return res.status(400).json({
      success: false,
      message: 'GOOGLE_SPREADSHEET_ID not configured.',
    });
  }

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1!A:D', // name, email, message, timestamp â€” matches submitBlessing.js
    });

    const rows = response.data.values || [];
    // Skip header row if present; submitBlessing.js appends without ever
    // writing a header row itself, so row 0 may already be real data.
    // We treat a row as data whenever it has a name and message.
    const blessings = rows
      .map((row, index) => {
        const [name, email, message, timestamp] = row;
        return { id: `blessing-${index}`, name, email, message, timestamp };
      })
      .filter((b) => b.name && b.message)
      .reverse(); // newest first

    return res.status(200).json({
      success: true,
      blessings,
      count: blessings.length,
    });
  } catch (error) {
    console.error('Error fetching blessings:', error.message);
    // If the sheet/tab doesn't exist yet (no submissions), return empty rather than erroring
    return res.status(200).json({
      success: true,
      blessings: [],
      count: 0,
    });
  }
}
