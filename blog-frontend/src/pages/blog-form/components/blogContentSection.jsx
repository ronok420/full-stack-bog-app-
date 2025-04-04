
import { uploadMediaToServer } from "@/constants/uploadMedia"

import { MediaPreview } from "./components/mediaPreview"

import { Box } from "@/components/custom/Box"

export default function BlogContentSection({
    handleChange,
    blogFormData,
    handleMediaUpload,
    setBlogFormData
}) {
    const handleUploadChange = async (e) => {
        const files = Array.from(e.target.files)

        const uploaded = await uploadMediaToServer(files)

        setBlogFormData((prev) => ({
            ...prev,
            images: [...prev.images, ...uploaded.images],
            videos: [...prev.videos, ...uploaded.videos]
        }))
    }

    return (
        <Box className="space-y-6">
            {/* Main Content */}
            <Box className="flex flex-col md:flex-row items-start md:items-start md:gap-3">
                <label
                    htmlFor="content"
                    className="shrink-0 w-full md:w-[140px] text-[15px] font-semibold pt-2"
                >
                    Main Content
                </label>
                <textarea
                    id="content"
                    name="content"
                    value={blogFormData.content}
                    onChange={handleChange}
                    placeholder="Write your blog content here"
                    className="w-full md:w-[786px] h-[169px] border border-blue-200 rounded bg-[#D9F2F7] text-sm pt-[10px] pb-[10px] resize-none"
                ></textarea>
            </Box>

            {/* Media Upload */}
            <Box className="flex flex-col md:flex-row items-start md:items-start md:gap-3">
                <label
                    htmlFor="mediaUpload"
                    className="shrink-0 w-full md:w-[140px] text-[15px] font-semibold pt-2"
                >
                    Media Upload:
                </label>

                <Box className="w-full md:w-[381px] relative">
                    <input
                        id="mediaUpload"
                        name="mediaUpload"
                        type="file"
                        accept="image/*,video/*"
                        multiple
                        className="absolute inset-0 opacity-0 cursor-pointer z-10"
                        onChange={handleUploadChange}
                    />
                    <Box className="h-[71px] border border-blue-200 rounded bg-[#D9F2F7] pt-[10px] px-[31px] text-sm text-blue-300 flex items-center z-0 pointer-events-none">
                        Choose images or videos to upload
                    </Box>

                    <MediaPreview
                        images={blogFormData.images}
                        videos={blogFormData.videos}
                    />
                </Box>
            </Box>
        </Box>
    )
}
