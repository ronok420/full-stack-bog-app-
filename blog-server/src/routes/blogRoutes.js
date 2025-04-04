

const express = require('express');
const {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog
} = require('../controllers/blogController');

const upload = require('../middlewares/upload');

const router = express.Router();

// 🔹 CRUD Blog Routes
router.get('/', getAllBlogs);
router.get('/:id', getBlogById);
router.post('/', upload.none(), createBlog); 
router.put('/:id', upload.none(), updateBlog); 
router.delete('/:id', deleteBlog);

// 🔹 Media Upload Route 

router.post('/upload', upload.array('media', 10), async (req, res) => {
  try {
    const images = req.files
      .filter(file => file.mimetype.startsWith('image/'))
      .map(file => file.path); // Cloudinary URL

    const videos = req.files
      .filter(file => file.mimetype.startsWith('video/'))
      .map(file => file.path); // Cloudinary URL

    console.log(" Uploaded images:", images);
    console.log(" Uploaded videos:", videos);

    res.status(200).json({ images, videos });
  } catch (err) {
    console.error(" Error during media upload:", err.message);
    res.status(500).json({ error: "Failed to upload media" });
  }
});


module.exports = router;
