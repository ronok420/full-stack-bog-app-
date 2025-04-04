import React, { useState } from "react"
import { Play } from "lucide-react"

import { Box } from "@/components/custom/Box"
import { Image } from "@/components/custom/Image"

export const CardMedia = ({ blogData }) => {
    const [playingIndex, setPlayingIndex] = useState(null)

    const handlePlay = (index) => {
        setPlayingIndex(index)
    }

    return (
        <Box className="w-full overflow-x-auto">
            <Box className="flex gap-3 py-2 h-[120px] xxs:h-[130px] xs:h-[140px] sm:h-[150px] md:h-[150px]">
                {/* Images */}
                {blogData.images?.map((image, index) => (
                    <Image
                        key={`img-${index}`}
                        src={image}
                        alt={`media-${index}`}
                        className="w-[110px] xxs:w-[120px] xs:w-[130px] sm:w-[160px] md:w-[200px] h-full object-cover rounded-lg flex-shrink-0"
                        loading="lazy"
                    />
                ))}

                {/* Videos */}
                {blogData.videos?.map((video, index) => (
                    <Box
                        key={`vid-${index}`}
                        className="relative w-[110px] xxs:w-[120px] xs:w-[130px] sm:w-[160px] md:w-[200px] h-full rounded-lg overflow-hidden flex-shrink-0"
                    >
                        <video
                            src={video}
                            controls={playingIndex === index}
                            className="w-full h-full object-cover"
                            preload="metadata"
                        />
                        {playingIndex !== index && (
                            <button
                                onClick={() => handlePlay(index)}
                                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-60 transition"
                            >
                                <Play className="w-8 h-8 text-white" />
                            </button>
                        )}
                    </Box>
                ))}
            </Box>
        </Box>
    )
}
