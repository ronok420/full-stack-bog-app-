import { HeartIcon } from "@/icons/HeartIcon"
import { EyeIcon } from "@/icons/EyeIcon"
import { BookMarkIcon } from "@/icons/BookMarkIcon"

import { Box } from "@/components/custom/Box"
import { Text } from "@/components/custom/Text"
import { HStack } from "@/components/custom/HStack"

export const CardStats = () => {
    return (
        <Box className="flex items-center gap-[11px] text-sm text-gray-600 mb-2">
            <Text as="span" className="flex items-center gap-1">
                <HeartIcon /> 300
            </Text>
            <Text as="span" className="flex items-center gap-[11px]">
                <EyeIcon /> 1.2k
            </Text>
            <Text as="span" className="ml-auto">
                <BookMarkIcon />
            </Text>
        </Box>
    )
}
