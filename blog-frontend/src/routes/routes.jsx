import React from "react";
import { Routes, Route } from "react-router-dom";


import MainLayout from "@/layout/MainLayout";
import BlogPage from "@/pages/blog/page";
import BlogForm from "@/pages/blog-form/page";


export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<BlogPage/>} />
        <Route path="/blog-form" element={<BlogForm />} />
      </Route>
    </Routes>
  );
}
