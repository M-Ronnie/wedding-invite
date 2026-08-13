
import { google } from 'googleapis';

// Google Auth setup
const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON),
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
});
const drive = google.drive({ version: 'v3', auth });

// Get folder ID from environment variable
const FOLDER_ID = process.env.GOOGLE_DRIVE_FOLDER_ID;

export default async function handler(req, res) {
  // CORS headers (applied to every response)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method not allowed.' });
  }

  if (!FOLDER_ID) {
    return res.status(400).json({
      success: false,
      message: 'GOOGLE_DRIVE_FOLDER_ID not configured.',
    });
  }

  try {
    console.log('Fetching photos from Google Drive folder:', FOLDER_ID);

    // List all files in the folder
    const response = await drive.files.list({
      q: `'${FOLDER_ID}' in parents and mimeType contains 'image/' and trashed=false`,
      fields: 'files(id, name, mimeType, createdTime, modifiedTime, webViewLink, thumbnailLink)',
      orderBy: 'createdTime desc', // Newest first
    });

    const files = response.data.files || [];

    // Generate viewable URLs for each file
    // Note: Files need to be shared publicly or with "Anyone with the link" for these URLs to work
    const photos = files.map((file) => {
      const viewUrl = `https://drive.google.com/uc?export=view&id=${file.id}`;
      const thumbnailUrl = `https://drive.google.com/thumbnail?id=${file.id}&sz=w800-h800`;
      const downloadUrl = `https://drive.google.com/uc?export=download&id=${file.id}`;

      return {
        id: file.id,
        name: file.name,
        url: viewUrl,
        thumbnailUrl: thumbnailUrl,
        downloadUrl: downloadUrl,
        caption: file.name,
        date: file.createdTime || file.modifiedTime,
        category: 'uploaded',
      };
    });

    console.log(`Found ${photos.length} photos`);

    return res.status(200).json({
      success: true,
      photos,
      count: photos.length,
    });
  } catch (error) {
    console.error('Error fetching photos:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch photos.',
      error: error.message,
    });
  }
}
