# 🚀 Full-Stack Blog App

This is a **full-featured Blog Management Web Application** built with a modern full-stack architecture. It supports full CRUD operations, media uploads (images/videos), pagination, search, filtering, and responsive UI design. The frontend uses React with custom component-driven design and React Query, and the backend uses Express with Supabase for data storage and Cloudinary for media handling.

---

## ✨ Features Implemented

✅ **Full CRUD Functionality**

- Create, read, update, and delete blog posts
- Blogs persist via backend API

✅ **Unified Blog Form**

- Single form used for both create and edit
- Form auto-fills on edit
- Media thumbnails (images/videos) shown during edit

✅ **Media Uploads**

- Supports images and videos
- Uses `uploadMedia.js` to handle and preview uploads
- Shows uploaded thumbnails before publish
- Form blocks publishing until media loads successfully

✅ **Pagination**

- Dynamic pagination based on blog count
- Controlled via `paginateBlogs()` helper

✅ **Search Functionality**

- Real-time search across blog titles and content
- Search state maintained with `useState`

✅ **Filtering Options**

- Filter by category and subcategory
- Categories and tags are stored in `static/dummyData.js`

✅ **Responsive Design**

- Mobile, tablet, and desktop views supported
- Images/videos are horizontally scrollable on mobile

✅ **Professional UI System**

- Layout built with custom UI primitives: `Box`, `Text`, `Image`, `HStack`, `VStack`
- Centralized component system allows fast styling and reuse

✅ **Global State & Data Fetching**

- React Query manages all data fetching, caching, and mutations
- Context manages local UI state for the blog form

---
### 📁 Folder Structure for frontend

```
src/
├── App.js                         # Root app wrapped in QueryClientProvider
├── main.js                        # ReactDOM entry point

├── components/
│   ├── core/                      # Global layout components
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   └── custom/                    # Shared UI primitives
│       ├── Box.jsx
│       ├── Text.jsx
│       ├── Image.jsx
│       ├── HStack.jsx
│       ├── VStack.jsx
│       └── Button.jsx

├── constants/                     # App config & reusable constants
│   ├── api.js                     # API base URL
│   └── uploadMedia.js            # File upload logic

├── contexts/
│   └── BlogContext.jsx           # React Query-based blog context

├── helpers/
│   └── blogHelpers.js            # Utility functions (paginate, format, etc.)

├── icons/                         # SVG icon components
│   ├── HeartIcon.jsx
│   ├── EyeIcon.jsx
│   ├── BookMarkIcon.jsx
│   ├── EditIcon.jsx
│   └── DeleteIcon.jsx

├── layout/
│   └── MainLayout.jsx            # Reusable route wrapper with <Navbar /> and <Footer />

├── pages/
│   ├── blog/
│   │   ├── page.jsx              # Blog listing page
│   │   └── components/
│   │       ├── blogCard.jsx
│   │       ├── blogFilter.jsx
│   │       ├── pagination.jsx
│   │       └── components/
│   │           ├── cardStats.jsx
│   │           └── cardMedia.jsx

│   ├── blog-form/
│   │   ├── page.jsx              # Create/edit blog form page
│   │   └── components/
│   │       ├── BlogMetaSection.jsx
│   │       ├── BlogContentSection.jsx
│   │       ├── BlogActions.jsx
│   │       └── components/
│   │           └── mediaPreview.jsx

├── routes/
│   └── routes.jsx                # Route definitions using react-router

├── static/
│   └── dummyData.js             # Placeholder blog data, tags, etc.

```


## 💡 Best Practices Followed

⚙️ **Modular Folder Structure**

- Organized by pages, components, helpers, etc.

✨ **Custom UI Components**

- Replaces raw HTML tags with composable primitives

⟳ **React Query**

- Used for data fetching, caching, syncing

♻️ **Reusable Form & Logic**

- One blog form used for both create and update

📁 **DRY & SRP Principles**

- Clean reusable code respecting single responsibility

📆 **Icons Modularized**

- SVG icons are componentized and reusable

🖉 **Consistent Spacing & Layout**

- Using utility classes and layout wrappers

🔖 **Coding Guidelines Followed:**

- `export default function PageName()` used for pages
- `export const ComponentName = () => {}` used for components
- **Proper Import Order:**
  - React → Contexts/APIs → Functions → Hooks → Components → Icons → Pages → Styles → Data → Utils → Static
- 4-space indentation
- No trailing semicolons

📂 **Folder Structure for Pages**

```
page-folder/
├── page.jsx
├── components.tsx
└── components/component.jsx
```

🧱 **HTML Tags Are Replaced By:**

- `div` → `Box`
- `p`, `h1-h3`, `span` → `Text`
- `img` → `Image` (with `loading="lazy"`)
- `flex-row` → `HStack`
- `flex-col` → `VStack`

✅ **Modularity Enforced**

- Components are kept under 150 lines
- DRY and clean code principles applied

---

## 🖥️ Backend Overview (Node.js + Express)

### 🔧 Technologies Used

- Node.js
- Express.js
- Supabase (PostgreSQL)
- Multer for file uploads
- Cloudinary for media storage
- dotenv for configuration

### 📁 Folder Structure for backend

```
blog-server/
├── src/
│   ├── config/              # Cloudinary and Supabase config
│   ├── controllers/         # Blog logic (CRUD)
│   ├── middlewares/         # Multer upload config
│   ├── routes/              # Express routing layer
│   ├── uploads/             # Optional temp folder for Multer
│   ├── app.js               # Express app with middleware and routes
│   └── server.js            # Entry point
├── .env                     # Environment variables
└── package.json
```

### ⚙️ How the Backend Works

1. **Supabase Configuration**
   - `supabase.js` initializes the client with project URL and anon key
   - Used for storing and retrieving blog data

2. **Cloudinary + Multer**
   - Multer uses `CloudinaryStorage` to route image and video uploads to Cloudinary
   - Files are filtered by MIME type

3. **Media Upload Endpoint**

```js
router.post('/upload', upload.array('media', 10), async (req, res) => {
  const images = req.files.filter(f => f.mimetype.startsWith('image/')).map(f => f.path);
  const videos = req.files.filter(f => f.mimetype.startsWith('video/')).map(f => f.path);
  res.json({ images, videos });
});
```

4. **CRUD API Routes**
- `GET /api/blogs` → fetch all blogs
- `GET /api/blogs/:id` → fetch blog by ID
- `POST /api/blogs` → create new blog (expects image/video URLs)
- `PUT /api/blogs/:id` → update blog
- `DELETE /api/blogs/:id` → remove blog

5. **Middleware Usage**
   - CORS
   - `express.json()` + `express.urlencoded()`
   - Error handling and logging

### 🗄 Supabase Table Schema

```sql
create extension if not exists "uuid-ossp";

create table blogs (
  id uuid primary key default uuid_generate_v4(),
  authorName text,
  title text,
  publishedAt date,
  category text,
  subCategory text,
  tags text[],
  summary text,
  content text,
  images text[],
  videos text[],
  authorImage text default 'https://i.pravatar.cc/24',
  created_at timestamp default now()
);
```

---

## 🏁 How to Run the Project Locally

### 1. Clone the Repository
```bash
git clone https://github.com/ronok420/full-stack-bog-app-.git
cd fullstack-blog-app
```

### 2. Set Up the Backend
```bash
cd blog-server
npm install
```
Create a `.env` file in  inside blog server  :
```env
PORT=5000

# Supabase
SUPABASE_URL=project url
SUPABASE_KEY=project api key

# Cloudinary
CLOUD_NAME=cloudname
CLOUDINARY_API_KEY= cloudinary api key
CLOUDINARY_API_SECRET= cloudinary api secret

```
Run the backend:
```bash
npm run dev
```

### 3. Set Up the Frontend
```bash
cd ../blog-frontend
npm install
```
Update API base URL:
```js
// src/constants/api.js
export const API_BASE_URL = "http://localhost:5000/api";
```
Run the frontend:
```bash
npm run dev
```
Visit: [http://localhost:5173](http://localhost:5173)

---

## 🤝 Contribution

Feel free to fork and contribute to this project by submitting a Pull Request.



Happy coding! 🚀
