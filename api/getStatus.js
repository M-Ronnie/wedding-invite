import { google } from 'googleapis';

// Google Auth setup
const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});
const sheets = google.sheets({ version: 'v4', auth });
const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID;

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (!SPREADSHEET_ID) {
    return res.status(400).json({
      success: false,
      message: 'GOOGLE_SPREADSHEET_ID not configured.',
    });
  }

  if (req.method === 'GET') {
    // Get all gift reservations
    try {
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: 'GiftTracking!A:D', // Assuming a sheet named "GiftTracking"
      });

      const rows = response.data.values || [];
      const reservations = {};

      // Skip header row
      for (let i = 1; i < rows.length; i++) {
        const [giftId, giftName, reservedBy, reservedDate] = rows[i];
        if (giftId && reservedBy) {
          reservations[giftId] = {
            giftName,
            reservedBy,
            reservedDate,
          };
        }
      }

      return res.status(200).json({
        success: true,
        reservations,
      });
    } catch (error) {
      // If sheet doesn't exist, return empty reservations
      return res.status(200).json({
        success: true,
        reservations: {},
      });
    }
  }

  if (req.method === 'POST') {
    // Reserve a gift
    // Vercel parses JSON bodies automatically into req.body
    const { giftId, giftName, reservedBy } = req.body;

    if (!giftId || !giftName || !reservedBy) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: giftId, giftName, reservedBy',
      });
    }

    try {
      // Check if GiftTracking sheet exists, create if not
      const spreadsheet = await sheets.spreadsheets.get({
        spreadsheetId: SPREADSHEET_ID,
      });

      const sheetExists = spreadsheet.data.sheets.some(
        (sheet) => sheet.properties.title === 'GiftTracking'
      );

      if (!sheetExists) {
        // Create the sheet
        await sheets.spreadsheets.batchUpdate({
          spreadsheetId: SPREADSHEET_ID,
          requestBody: {
            requests: [
              {
                addSheet: {
                  properties: {
                    title: 'GiftTracking',
                  },
                },
              },
            ],
          },
        });

        // Add headers
        await sheets.spreadsheets.values.update({
          spreadsheetId: SPREADSHEET_ID,
          range: 'GiftTracking!A1:D1',
          valueInputOption: 'RAW',
          resource: {
            values: [['Gift ID', 'Gift Name', 'Reserved By', 'Reserved Date']],
          },
        });
      }

      // Check if gift is already reserved
      const existing = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: 'GiftTracking!A:D',
      });

      const rows = existing.data.values || [];
      const existingRow = rows.findIndex((row) => row[0] === giftId);

      if (existingRow > 0) {
        return res.status(400).json({
          success: false,
          message: 'This gift has already been reserved.',
        });
      }

      // Add reservation
      const reservedDate = new Date().toISOString();
      await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: 'GiftTracking!A:D',
        valueInputOption: 'RAW',
        resource: {
          values: [[giftId, giftName, reservedBy, reservedDate]],
        },
      });

      return res.status(200).json({
        success: true,
        message: 'Gift reserved successfully!',
      });
    } catch (error) {
      console.error('Error reserving gift:', error);
      return res.status(500).json({
        success: false,
        message: 'Failed to reserve gift.',
        error: error.message,
      });
    }
  }

  return res.status(405).json({
    success: false,
    message: 'Method not allowed.',
  });
      }
