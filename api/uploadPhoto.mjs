import Busboy from 'busboy';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// The folder inside your Cloudinary account where guest uploads will be stored.
const CLOUDINARY_FOLDER = 'wedding-photos';

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

  const contentType = req.headers['content-type'];

  if (!contentType || !contentType.includes('multipart/form-data')) {
    return res.status(400).json({ success: false, message: 'Invalid Content-Type header.' });
  }

  const busboy = Busboy({ headers: { 'content-type': contentType } });
  const uploadedFileIds = [];
  const uploadPromises = [];

  return new Promise((resolve) => {
    busboy.on('file', (fieldname, file, fileDetails) => {
      const filename = fileDetails.filename || `unknown_${Date.now()}`;
      console.log(`Processing file: ${filename}`);

      const uploadPromise = new Promise((res_, rej_) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder: CLOUDINARY_FOLDER,
            resource_type: 'image',
          },
          (error, result) => {
            if (error) {
              console.error('Cloudinary upload error:', error.message);
              rej_(error);
              return;
            }
            console.log(`Uploaded: ${result.public_id}`);
            uploadedFileIds.push(result.public_id);
            res_();
          }
        );

        file.pipe(uploadStream);
        file.on('error', (err) => rej_(err));
      });

      uploadPromises.push(uploadPromise);
    });

    busboy.on('finish', async () => {
      try {
        await Promise.all(uploadPromises);
        res.status(200).json({
          success: true,
          message: 'Files uploaded successfully!',
          fileIds: uploadedFileIds,
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

    req.pipe(busboy);
  });
}
