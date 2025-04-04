
import { useBlogContext } from "@/contexts/BlogContext"

import { Box } from "@/components/custom/Box"

export default function BlogActions({ blogFormData, onPublish }) {
    const { blogToEdit } = useBlogContext()

    return (
        <Box className="flex flex-col items-center space-y-4 mt-10">
            <button
                type="button"
                className="w-full md:w-[281px] h-auto bg-[#D1EAF5] rounded-full text-sm font-medium text-gray-700 px-6 py-3 text-center"
            >
                Preview
            </button>

            <button
                type="button"
                className="w-full md:w-[281px] h-auto bg-[#D1EAF5] rounded-full text-sm font-medium text-gray-700 px-6 py-3 text-center"
            >
                Autosave
            </button>

            <button
                type="submit"
                className="w-full md:w-[618px] h-auto border border-[#7099C8] rounded-full text-sm font-semibold text-gray-700 px-6 py-4 text-center"
                onClick={(e) => onPublish(e)}
            >
                {blogToEdit ? "Update" : "Publish"}
            </button>
        </Box>
    )
}
