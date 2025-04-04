
// import { createContext, useContext, useEffect, useState } from "react";
// import { API_BASE_URL } from "@/constants/api";

// const BlogContext = createContext();

// export const BlogProvider = ({ children }) => {
//   const [blogs, setBlogs] = useState([]);
//   const [blogFormData, setBlogFormData] = useState(initialState);
//   const [blogToEdit, setBlogToEdit] = useState(null);

//   const fetchBlogs = async () => {
//     const res = await fetch(`${API_BASE_URL}/blogs`);
//     const data = await res.json();
//     setBlogs(data);
//   };

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   const handleBlogPublish = async (formData, navigate) => {
//     const method = blogToEdit ? "PUT" : "POST";
//     const url = blogToEdit
//       ? `${API_BASE_URL}/blogs/${blogToEdit.id}`
//       : `${API_BASE_URL}/blogs`;

//     const res = await fetch(url, {
//       method,
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     });

//     const data = await res.json();

//     if (!res.ok) {
//       alert("Error publishing blog");
//       return;
//     }

//     fetchBlogs(); // refresh
//     setBlogFormData(initialState);
//     setBlogToEdit(null);
//     navigate("/");
//   };

//   const handleEditBlogData = (blog) => {
//     setBlogFormData(blog);
//     setBlogToEdit(blog);
//   };

//   const deleteBlog = async (id) => {
//     await fetch(`${API_BASE_URL}/blogs/${id}`, {
//       method: "DELETE",
//     });
//     fetchBlogs();
//   };

//   return (
//     <BlogContext.Provider
//       value={{
//         blogs,
//         blogFormData,
//         setBlogFormData,
//         handleBlogPublish,
//         handleEditBlogData,
//         blogToEdit,
//         deleteBlog,
//       }}
//     >
//       {children}
//     </BlogContext.Provider>
//   );
// };

// export const useBlogContext = () => useContext(BlogContext);

// const initialState = {
//   // id: crypto.randomUUID(),
//   authorName: "",
//   title: "",
//   publishedAt: "",
//   category: "",
//   subCategory: "",
//   tags: [],
//   summary: "",
//   content: "",
//   images: [],
//   videos: [],
//   authorImage: "https://i.pravatar.cc/24",
// };


import {
  QueryClient,
  useQuery,
  useMutation,
  useQueryClient
} from "@tanstack/react-query"
import {
  createContext,
  useContext,
  useState
} from "react"

import { API_BASE_URL } from "@/constants/api"

const BlogContext = createContext()

export const BlogProvider = ({ children }) => {
  const queryClient = useQueryClient()

  const [blogFormData, setBlogFormData] = useState(initialState)
  const [blogToEdit, setBlogToEdit] = useState(null)

  // Fetch blogs (React Query v5 style)
  const {
      data: blogs = [],
      isPending,
      isError,
      error
  } = useQuery({
      queryKey: ["blogs"],
      queryFn: async () => {
          const res = await fetch(`${API_BASE_URL}/blogs`)
          if (!res.ok) throw new Error("Failed to fetch blogs")
          return res.json()
      }
  })

  //Create or Update blog
  const publishMutation = useMutation({
      mutationFn: async ({ formData, blogToEdit }) => {
          const method = blogToEdit ? "PUT" : "POST"
          const url = blogToEdit
              ? `${API_BASE_URL}/blogs/${blogToEdit.id}`
              : `${API_BASE_URL}/blogs`

          const res = await fetch(url, {
              method,
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(formData)
          })

          if (!res.ok) throw new Error("Error publishing blog")

          return res.json()
      },
      onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["blogs"] })
          setBlogFormData(initialState)
          setBlogToEdit(null)
      }
  })

  // Delete blog
  const deleteMutation = useMutation({
      mutationFn: async (id) => {
          const res = await fetch(`${API_BASE_URL}/blogs/${id}`, {
              method: "DELETE"
          })
          if (!res.ok) throw new Error("Error deleting blog")
      },
      onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["blogs"] })
      }
  })

  const handleBlogPublish = async (formData, navigate) => {
      try {
          await publishMutation.mutateAsync({ formData, blogToEdit })
          navigate("/")
      } catch (err) {
          alert(err.message)
      }
  }

  const deleteBlog = async (id) => {
      try {
          await deleteMutation.mutateAsync(id)
      } catch (err) {
          alert(err.message)
      }
  }

  const handleEditBlogData = (blog) => {
      setBlogFormData(blog)
      setBlogToEdit(blog)
  }

  return (
      <BlogContext.Provider
          value={{
              blogs,
              isLoading: isPending,
              isError,
              error,
              blogFormData,
              setBlogFormData,
              handleBlogPublish,
              handleEditBlogData,
              blogToEdit,
              deleteBlog
          }}
      >
          {children}
      </BlogContext.Provider>
  )
}

export const useBlogContext = () => useContext(BlogContext)

const initialState = {
  authorName: "",
  title: "",
  publishedAt: "",
  category: "",
  subCategory: "",
  tags: [],
  summary: "",
  content: "",
  images: [],
  videos: [],
  authorImage: "https://i.pravatar.cc/24"
}
