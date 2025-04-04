
const multer = require('multer');
const { storage } = require('../config/cloudinary');

// multer using Cloudinary storage
const upload = multer({ storage });

module.exports = upload;
