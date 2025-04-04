
import { Box } from "@/components/custom/Box"

export default function BlogMetaSection({ handleChange, blogFormData }) {
    return (
        <Box className="space-y-6">
            {/* Author Name */}
            <Box className="flex flex-col md:flex-row items-start md:items-center md:gap-3">
                <label htmlFor="authorName" className="shrink-0 w-full md:w-[140px] text-[15px] font-semibold">
                    Author Name:
                </label>
                <input
                    id="authorName"
                    name="authorName"
                    type="text"
                    value={blogFormData.authorName}
                    onChange={handleChange}
                    placeholder="Enter the author  name"
                    className="w-full md:w-[370px] h-[40px] border border-blue-200 rounded bg-[#D9F2F7] text-sm px-4"
                />
            </Box>

            {/* Blog Title + Date */}
            <Box className="flex flex-col md:flex-row gap-6">
                {/* Blog Title */}
                <Box className="flex flex-col md:flex-row items-start md:items-center md:gap-3 w-full md:w-1/2">
                    <label htmlFor="title" className="shrink-0 w-full md:w-[140px] text-[15px] font-semibold">
                        Blog Title:
                    </label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        value={blogFormData.title}
                        onChange={handleChange}
                        placeholder="Enter the title of your blog post"
                        className="w-full md:w-[410px] h-[42px] border border-blue-200 rounded bg-[#D9F2F7] text-sm pt-[10px] pb-[10px]"
                    />
                </Box>

                {/* Publication Date */}
                <Box className="flex flex-col md:flex-row items-start md:items-center md:gap-3 w-full md:w-1/2">
                    <label htmlFor="publishedAt" className="shrink-0 w-full md:w-[140px] text-[15px] font-semibold">
                        Publication Date:
                    </label>
                    <input
                        id="publishedAt"
                        name="publishedAt"
                        type="date"
                        value={blogFormData.publishedAt}
                        onChange={handleChange}
                        placeholder="DD/MM/YYYY"
                        className="w-full md:w-[172px] h-[42px] border border-blue-200 rounded bg-[#D9F2F7] text-sm pt-[10px] pb-[10px]"
                    />
                </Box>
            </Box>

            {/* Category + Sub-category */}
            <Box className="flex flex-col md:flex-row gap-6">
                {/* Category */}
                <Box className="flex flex-col md:flex-row items-start md:items-center md:gap-3 w-full md:w-1/2">
                    <label htmlFor="category" className="shrink-0 w-full md:w-[140px] text-[15px] font-semibold">
                        Category:
                    </label>
                    <select
                        id="category"
                        name="category"
                        value={blogFormData.category}
                        onChange={handleChange}
                        className="w-full md:w-[304px] h-[42px] border border-blue-200 rounded bg-[#D9F2F7] text-sm"
                    >
                        <option>-Select a category-</option>
                        <option>Travel</option>
                        <option>Food & Drinks</option>
                        <option>Culture</option>
                        <option>Adventure</option>
                        <option>Guides & Tips</option>
                        <option>Nature</option>
                    </select>
                </Box>

                {/* Sub-category */}
                <Box className="flex flex-col md:flex-row items-start md:items-center md:gap-3 w-full md:w-1/2">
                    <label htmlFor="subCategory" className="shrink-0 w-full md:w-[140px] text-[15px] font-semibold">
                        Sub-category:
                    </label>
                    <select
                        id="subCategory"
                        name="subCategory"
                        value={blogFormData.subCategory}
                        onChange={handleChange}
                        className="w-full md:w-[304px] h-[42px] border border-blue-200 rounded bg-[#D9F2F7] text-sm"
                    >
                        <option>-Select a sub-category-</option>
                        <option>Solo Travel</option>
                        <option>Family Travel</option>
                        <option>Luxury Travel</option>
                        <option>Budget Travel</option>
                        <option>Local Experiences</option>
                        <option>Hiking & Trekking</option>
                    </select>
                </Box>
            </Box>

            {/* Summary + Travel Tags */}
            <Box className="flex flex-col md:flex-row gap-6">
                {/* Summary */}
                <Box className="flex flex-col md:flex-row items-start md:gap-3 w-full md:w-1/2">
                    <label htmlFor="summary" className="shrink-0 w-full md:w-[140px] text-[15px] font-semibold pt-2">
                        Summary:
                    </label>
                    <textarea
                        id="summary"
                        name="summary"
                        value={blogFormData.summary}
                        onChange={handleChange}
                        placeholder="Type here"
                        className="w-full md:w-[426px] h-[87px] border border-blue-200 rounded bg-[#D9F2F7] text-sm pt-[10px] pb-[10px] resize-none"
                    ></textarea>
                </Box>

                {/* Travel Tags */}
                <Box className="flex flex-col md:flex-row items-start md:items-center md:gap-3 w-full md:w-1/2">
                    <label htmlFor="tags" className="shrink-0 w-full md:w-[140px] text-[15px] font-semibold">
                        Travel tags:
                    </label>
                    <select
                        id="tags"
                        name="tags"
                        value={blogFormData.tags}
                        onChange={handleChange}
                        className="w-full md:w-[304px] h-[42px] border border-blue-200 rounded bg-[#D9F2F7] text-sm"
                    >
                        <option>-Select travel tag-</option>
                        <option>Beach</option>
                        <option>Adventure</option>
                        <option>Backpacking</option>
                        <option>Culture</option>
                        <option>Wildlife</option>
                        <option>City Break</option>
                    </select>
                </Box>
            </Box>
        </Box>
    )
}
