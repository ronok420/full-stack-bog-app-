
const supabase = require('../config/supabase');

// 🔸 GET all blogs
const getAllBlogs = async (req, res) => {
  const { data, error } = await supabase.from('blogs').select('*').order('id', { ascending: false });

  if (error) {
    console.error(" Error fetching blogs:", error.message);
    return res.status(500).json({ error: error.message });
  }

  console.log(" Blogs fetched successfully:", data);
  res.json(data);
};

// 🔸 GET single blog
const getBlogById = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase.from('blogs').select('*').eq('id', id).single();

  if (error) {
    console.error(` Blog not found with ID ${id}:`, error.message);
    return res.status(404).json({ error: 'Blog not found' });
  }

  console.log(` Blog fetched (ID: ${id}):`, data);
  res.json(data);
};

// 🔸 POST create blog (images & videos as URL arrays)
const createBlog = async (req, res) => {
  const {
    title,
    summary,
    content,
    category,
    subCategory,
    tags,
    authorName,
    publishedAt,
    images = [], 
    videos = [] ,
    
  } = req.body;

  const { data, error } = await supabase.from('blogs').insert([
    {
      title,
      summary,
      content,
      category,
      subCategory,
      tags,
      authorName,
      publishedAt,
      images,
      videos,
     
      
    }
  ]).select();

  if (error) {
    console.error(" Error creating blog:", error.message);
    return res.status(500).json({ error: error.message });
  }

  console.log(" Blog created successfully:", data);
  res.status(201).json(data);
};

// 🔸 PUT update blog (images/videos as URLs)
const updateBlog = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  const { data, error } = await supabase
    .from('blogs')
    .update(updates)
    .eq('id', id)
    .select();

  if (error) {
    console.error(` Error updating blog (ID: ${id}):`, error.message);
    return res.status(500).json({ error: error.message });
  }

  console.log(` Blog updated (ID: ${id}):`, data[0]);
  res.json(data[0]);
};

// 🔸 DELETE blog
const deleteBlog = async (req, res) => {
  const { id } = req.params;
  const { error } = await supabase.from('blogs').delete().eq('id', id);

  if (error) {
    console.error(` Error deleting blog (ID: ${id}):`, error.message);
    return res.status(500).json({ error: error.message });
  }

  console.log(` Blog deleted successfully (ID: ${id})`);
  res.json({ message: 'Blog deleted successfully' });
};

module.exports = {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog
};
