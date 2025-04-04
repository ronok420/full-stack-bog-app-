
import { useState } from "react"
import { Link } from "react-router-dom"

import { useBlogContext } from "@/contexts/BlogContext"

import {
    filterBlogsByAll,
    paginateBlogs,
    getTotalPages
} from "@/helpers/blogHelpers"

import { BlogFilter } from "./components/blogFilter"
import { Pagination } from "./components/pagination"
import BlogCard from "./components/blogCard"

import { Box } from "@/components/custom/Box"
import { Text } from "@/components/custom/Text"
import { VStack } from "@/components/custom/VStack"

export default function BlogPage() {
    const { blogs } = useBlogContext()

    const [currentPage, setCurrentPage] = useState(1)
    const [searchInput, setSearchInput] = useState("")
    const [searchQuery, setSearchQuery] = useState("")

    const [selectedCategory, setSelectedCategory] = useState("")
    const [selectedSubCategory, setSelectedSubCategory] = useState("")
    const [sortFilter, setSortFilter] = useState({
        category: "",
        subCategory: ""
    })

    const cardsPerPage = 6

    const handleSearch = () => {
        setSearchQuery(searchInput)
        setCurrentPage(1)
    }

    const handleSort = () => {
        setSortFilter({
            category: selectedCategory,
            subCategory: selectedSubCategory
        })
        setCurrentPage(1)
    }

    const handleReset = () => {
        setSearchInput("")
        setSearchQuery("")
        setSelectedCategory("")
        setSelectedSubCategory("")
        setSortFilter({ category: "", subCategory: "" })
        setCurrentPage(1)
    }

    const filteredBlogs = filterBlogsByAll(
        blogs,
        searchQuery,
        sortFilter.category,
        sortFilter.subCategory
    )
    const currentBlogs = paginateBlogs(filteredBlogs, currentPage, cardsPerPage)
    const totalPages = getTotalPages(filteredBlogs, cardsPerPage)

    return (
        <Box className="bg-[#DFF3F5] px-4 md:px-10 py-10 text-gray-800 min-h-screen">
            <Box className="max-w-7xl mx-auto space-y-10">
                {/* Filter Section */}
                <BlogFilter
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                    onSearch={handleSearch}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    selectedSubCategory={selectedSubCategory}
                    setSelectedSubCategory={setSelectedSubCategory}
                    onSort={handleSort}
                    onReset={handleReset}
                />

                {/* Blog Cards Grid */}
                <Box className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {currentBlogs.length === 0 ? (
                        <Text
                            as="h1"
                            className="text-3xl sm:text-4xl font-extrabold text-gray-800 text-center mt-10 tracking-wide drop-shadow-sm break-words"
                        >
                            Post a blog to see
                        </Text>
                    ) : (
                        currentBlogs.map((blog) => (
                            <BlogCard key={blog.id} blogData={blog} />
                        ))
                    )}
                </Box>

                {/* Post Blog Button */}
                <Box className="mt-10 w-full flex ">
                    <Link to="/blog-form">
                        <button className="bg-[#004AAD] text-white px-6 py-2 rounded-lg hover:bg-[#003a8c] transition">
                            Post Your Blog
                        </button>
                    </Link>
                </Box>

                {/* Pagination */}
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={(page) => setCurrentPage(page)}
                />
            </Box>
        </Box>
    )
}
