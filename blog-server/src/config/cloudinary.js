// src/config/cloudinary.js
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    const isVideo = file.mimetype.startsWith('video/');
    return {
      folder: 'blog_uploads',
      resource_type: isVideo ? 'video' : 'image', 
      allowed_formats: ['jpg', 'jpeg', 'png', 'mp4', 'webm', 'mov'],
    };
  },
});

module.exports = { cloudinary, storage };
