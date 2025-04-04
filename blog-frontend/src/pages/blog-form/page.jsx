
import { Fragment, useState } from "react"
import { useNavigate } from "react-router-dom"

import { useBlogContext } from "@/contexts/BlogContext"

import BlogMetaSection from "./components/blogMetaSection"
import BlogContentSection from "./components/blogContentSection"
import BlogActions from "./components/blogActions"

import { Box } from "@/components/custom/Box"
import { Text } from "@/components/custom/Text"

export default function BlogForm() {
    const navigate = useNavigate()
    const { handleBlogPublish, blogFormData, setBlogFormData } = useBlogContext()

    const handleChange = (e) => {
        const { name, value } = e.target
        const updatedValue =
            name === "tags" || name === "images" || name === "videos"
                ? value.split(",")
                : value
        setBlogFormData((prev) => ({
            ...prev,
            [name]: updatedValue
        }))
    }

    const handlePublishClick = (e) => {
        e.preventDefault()
        handleBlogPublish(blogFormData, navigate)
    }

    const handleMediaUpload = (e) => {
        const files = Array.from(e.target.files)

        const imageFiles = []
        const videoFiles = []

        files.forEach((file) => {
            if (file.type.startsWith("image/")) {
                imageFiles.push(file)
            } else if (file.type.startsWith("video/")) {
                videoFiles.push(file)
            }
        })

        setBlogFormData((prev) => ({
            ...prev,
            images: [...prev.images, ...imageFiles],
            videos: [...prev.videos, ...videoFiles]
        }))
    }

    return (
        <Box className="bg-[#DFF3F5] px-4 md:px-10 py-10 text-gray-800 min-h-screen">
            <Text as="h1" className="text-2xl font-bold drop-shadow-sm mb-10">
                Blog Form
            </Text>

            <form className="space-y-6">
                <BlogMetaSection
                    handleChange={handleChange}
                    blogFormData={blogFormData}
                />
                <BlogContentSection
                    handleChange={handleChange}
                    blogFormData={blogFormData}
                    handleMediaUpload={handleMediaUpload}
                    setBlogFormData={setBlogFormData}
                />
                <BlogActions
                    blogFormData={blogFormData}
                    onPublish={handlePublishClick}
                />
            </form>
        </Box>
    )
}
