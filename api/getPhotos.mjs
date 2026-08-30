import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const CLOUDINARY_FOLDER = 'wedding-photos';

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

  try {
    const result = await cloudinary.api.resources({
      type: 'upload',
      resource_type: 'image',
      prefix: `${CLOUDINARY_FOLDER}/`,
      max_results: 200,
      context: false,
    });

    const photos = (result.resources || [])
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) // newest first
      .map((resource) => {
        const name = resource.public_id.split('/').pop();
        const thumbnailUrl = cloudinary.url(resource.public_id, {
          width: 400,
          height: 400,
          crop: 'fill',
          secure: true,
        });

        return {
          id: resource.public_id,
          name,
          url: resource.secure_url,
          thumbnailUrl,
          downloadUrl: resource.secure_url,
          caption: name,
          date: resource.created_at,
          category: 'uploaded',
        };
      });

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
