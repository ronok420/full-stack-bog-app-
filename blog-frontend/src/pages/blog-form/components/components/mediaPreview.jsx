
import { Box } from "@/components/custom/Box"
import { Text } from "@/components/custom/Text"
import { Image } from "@/components/custom/Image"

export const MediaPreview = ({ images = [], videos = [] }) => {
    if (images.length === 0 && videos.length === 0) return null

    return (
        <Box className="mt-4 space-y-4">
            {images.length > 0 && (
                <Box>
                    <Text className="text-sm font-semibold text-gray-700 mb-2">
                        Image Preview
                    </Text>
                    <Box className="flex flex-wrap gap-3">
                        {images.map((img, i) => (
                            <Image
                                key={i}
                                src={typeof img === "string" ? img : URL.createObjectURL(img)}
                                alt={`image-${i}`}
                                className="w-24 h-24 object-cover rounded border border-gray-300"
                                loading="lazy"
                            />
                        ))}
                    </Box>
                </Box>
            )}

            {videos.length > 0 && (
                <Box>
                    <Text className="text-sm font-semibold text-gray-700 mb-2">
                        Video Preview
                    </Text>
                    <Box className="flex flex-wrap gap-3">
                        {videos.map((vid, i) => (
                            <video
                                key={i}
                                src={typeof vid === "string" ? vid : URL.createObjectURL(vid)}
                                controls
                                className="w-32 h-24 rounded border border-gray-300"
                            />
                        ))}
                    </Box>
                </Box>
            )}
        </Box>
    )
}
