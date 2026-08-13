import { google } from 'googleapis';
import { createWriteStream, unlinkSync, createReadStream } from 'fs';
import { join } from 'path';
import Busboy from 'busboy';

// Google Auth setup
const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON),
  scopes: ['https://www.googleapis.com/auth/drive'],
});
const drive = google.drive({ version: 'v3', auth });

// Get folder ID from environment variable
const FOLDER_ID = process.env.GOOGLE_DRIVE_FOLDER_ID;

if (!FOLDER_ID) {
  console.error('ERROR: GOOGLE_DRIVE_FOLDER_ID environment variable is not set');
}

// IMPORTANT: Vercel parses request bodies as JSON by default.
// File uploads need the raw multipart stream instead, so body parsing
// must be turned off for this function specifically.
export const config = {
  api: {
    bodyParser: false,
  },
};

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

  console.log('Processing file upload...');
  const contentType = req.headers['content-type'];
  console.log('Received Content-Type:', contentType);

  if (!contentType || !contentType.includes('multipart/form-data')) {
    console.error('Invalid Content-Type:', contentType);
    return res.status(400).json({ success: false, message: 'Invalid Content-Type header.' });
  }

  const busboy = Busboy({ headers: { 'content-type': contentType } });
  const fileIds = [];
  const uploadPromises = [];

  return new Promise((resolve) => {
    busboy.on('file', (fieldname, file, fileDetails) => {
      const filename = fileDetails.filename || `unknown_${Date.now()}`;
      const mimetype = fileDetails.mimeType || fileDetails.mimetype;
      console.log(`Processing file: ${filename}`);

      const uploadPromise = new Promise((res_, rej_) => {
        const tempFilePath = join('/tmp', filename);
        const writeStream = createWriteStream(tempFilePath);

        file.pipe(writeStream);

        file.on('end', async () => {
          try {
            const fileMetadata = { name: filename, parents: [FOLDER_ID] };
            const media = { mimeType: mimetype, body: createReadStream(tempFilePath) };

            const response = await drive.files.create({
              resource: fileMetadata,
              media,
              fields: 'id',
            });

            fileIds.push(response.data.id);
            console.log(`Uploaded file ID: ${response.data.id}`);
            unlinkSync(tempFilePath); // Clean up temporary file
            res_();
          } catch (error) {
            console.error('Error during file upload:', error.message);
            try { unlinkSync(tempFilePath); } catch (_) {}
            rej_(error);
          }
        });

        file.on('error', (error) => {
          console.error('File stream error:', error.message);
          rej_(error);
        });
      });

      uploadPromises.push(uploadPromise);
    });

    busboy.on('finish', async () => {
      try {
        await Promise.all(uploadPromises);
        res.status(200).json({
          success: true,
          message: 'Files uploaded successfully!',
          fileIds,
        });
      } catch (error) {
        console.error('Error completing upload:', error.message);
        res.status(500).json({
          success: false,
          message: 'File upload failed.',
          error: error.message,
        });
      }
      resolve();
    });

    // Vercel gives req as a raw Node.js readable stream (unlike Netlify,
    // which delivers a base64-encoded string body) â€” so we pipe it
    // directly into busboy instead of decoding first.
    req.pipe(busboy);
  });
                          }
