import { useNavigate } from "react-router-dom"

import { useBlogContext } from "@/contexts/BlogContext"

import { EditIcon } from "@/icons/EditIcon"
import { DeleteIcon } from "@/icons/DeleteIcon"

import { CardStats } from "./components/cardStats"
import { CardMedia } from "./components/cardMedia"

import { Box ,Text,HStack,VStack,Image} from "@/components/custom"


const BlogCard = ({ blogData }) => {
    const { handleEditBlogData, deleteBlog } = useBlogContext()
    const navigate = useNavigate()

    const handleEditClick = () => {
        handleEditBlogData(blogData)
        navigate("/blog-form")
    }

    const handleDeleteClick = () => {
        const confirmed = window.confirm("Are you sure you want to delete this blog?")
        if (confirmed) {
            deleteBlog(blogData.id)
        }
    }

    return (
        <Box className="bg-white rounded-xl shadow-sm border p-4 w-full max-w-full">
            {/* Header Row */}
            <Box className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
                <Text as="h2" className="text-lg font-bold break-words w-full sm:max-w-[85%]">
                    {blogData.title}
                </Text>
                <HStack className="gap-2 shrink-0 self-end sm:self-auto justify-end">
                    <button onClick={handleEditClick} className="text-blue-600 hover:text-blue-800">
                        <EditIcon />
                    </button>
                    <button onClick={handleDeleteClick} className="text-red-600 hover:text-red-800">
                        <DeleteIcon />
                    </button>
                </HStack>
            </Box>

            {/* Tags */}
            <HStack className="flex-wrap gap-2 mb-2 justify-start items-start">
                <Text className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">
                    {blogData.category}
                </Text>
                <Text className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">
                    {blogData.subCategory}
                </Text>
            </HStack>

            {/* Summary & Content */}
            <Text className="text-sm text-gray-700 mb-2">
                {blogData.summary}
            </Text>

            <Text className="text-sm text-gray-800 bg-[#CFE5F0] p-3 rounded-md mb-2">
                {blogData.content}{" "}
                <Text as="span" className="text-blue-600 inline">
                    Read more
                </Text>
            </Text>

            <CardStats />
            <CardMedia blogData={blogData} />

            {/* Author Info */}
            <Box className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mt-2">
                <HStack className="gap-2 justify-start items-start">
                    <Image
                        src={blogData.authorImage}
                        className="w-6 h-6 rounded-full"
                        alt="avatar"
                        loading="lazy"
                    />
                    <VStack className="items-start gap-0 justify-start">
                        <Text className="text-sm font-semibold leading-none">
                            {blogData.authorName}
                        </Text>
                        <Text className="text-xs text-gray-500">
                            {new Date(blogData.publishedAt).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric"
                            })}
                        </Text>
                    </VStack>
                </HStack>
                <button className="text-xs bg-[#004AAD] text-white px-4 py-1.5 rounded-full">
                    Follow 👁️
                </button>
            </Box>
        </Box>
    )
}
export default BlogCard;