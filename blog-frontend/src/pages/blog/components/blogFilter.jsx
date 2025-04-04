import { SearchIcon } from "@/icons/SearchIcon"

import { Box } from "@/components/custom/Box"
import { HStack } from "@/components/custom/HStack"
import { Text } from "@/components/custom/Text"

export const BlogFilter = ({
    searchInput,
    setSearchInput,
    onSearch,
    selectedCategory,
    setSelectedCategory,
    selectedSubCategory,
    setSelectedSubCategory,
    onSort,
    onReset
}) => {
    return (
        <>
            {/* Search and Filter Bar */}
            <Box className="flex flex-wrap gap-4 items-center mb-6">
                <Box className="flex items-center flex-grow relative">
                    <Text as="span" className="absolute left-3 top-2.5 text-gray-400">
                        <SearchIcon />
                    </Text>
                    <input
                        type="text"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        placeholder="Search blog by Blog Title/Content"
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 text-sm bg-[#D9F2F7]"
                    />
                </Box>
                <button
                    onClick={onSearch}
                    className="px-6 py-2 bg-[#004AAD] text-white rounded-lg"
                >
                    Search
                </button>
            </Box>

            {/* Filter Options */}
            <HStack className="flex-wrap gap-4 mb-6 justify-start">
                {/* Category Dropdown */}
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-2 rounded-lg border border-gray-300 text-xl font-normal leading-[100%] text-[#003B95] bg-[#D9F2F7] font-inter"
                >
                    <option value="">Category</option>
                    <option value="Travel">Travel</option>
                    <option value="Food & Drinks">Food & Drinks</option>
                    <option value="Culture">Culture</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Guides & Tips">Guides & Tips</option>
                    <option value="Nature">Nature</option>
                </select>

                {/* Sub-Category Dropdown */}
                <select
                    value={selectedSubCategory}
                    onChange={(e) => setSelectedSubCategory(e.target.value)}
                    className="px-4 py-2 rounded-lg border border-gray-300 text-xl font-normal leading-[100%] text-[#003B95] bg-[#D9F2F7] font-inter"
                >
                    <option value="">Sub-Category</option>
                    <option value="Solo Travel">Solo Travel</option>
                    <option value="Family Travel">Family Travel</option>
                    <option value="Luxury Travel">Luxury Travel</option>
                    <option value="Budget Travel">Budget Travel</option>
                    <option value="Local Experiences">Local Experiences</option>
                    <option value="Hiking & Trekking">Hiking & Trekking</option>
                </select>

                <button
                    className="ml-auto px-4 py-2 rounded-lg border bg-[#D9F2F7] border-gray-300 text-[#003B95] text-xl"
                    onClick={onSort}
                >
                    Sort by ▾
                </button>

                <button
                    className="px-4 py-2 border bg-[#D9F2F7] text-[#003B95] border-gray-300 rounded-lg text-xl flex items-center gap-1"
                    onClick={onReset}
                >
                    Reset ↺
                </button>
            </HStack>
        </>
    )
}
