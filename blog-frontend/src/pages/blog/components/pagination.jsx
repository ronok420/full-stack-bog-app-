import React from "react"

import { Box } from "@/components/custom/Box"
import { Text } from "@/components/custom/Text"

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const generatePages = () => {
        const pages = []

        pages.push(1) // Always show first page

        if (totalPages <= 4) {
            for (let i = 2; i <= totalPages; i++) {
                pages.push(i)
            }
        } else {
            if (currentPage > 3) {
                pages.push("dots-left")
            }

            const start = Math.max(2, currentPage - 1)
            const end = Math.min(totalPages - 1, currentPage + 1)

            for (let i = start; i <= end; i++) {
                pages.push(i)
            }

            if (currentPage < totalPages - 2) {
                pages.push("dots-right")
            }

            pages.push(totalPages) // Always show last page
        }

        return pages
    }

    const pages = generatePages()

    return (
        <Box className="w-full flex justify-center mt-6">
            <Box className="flex items-center gap-4" style={{ width: 376, height: 40 }}>
                <button
                    disabled={currentPage === 1}
                    onClick={() => onPageChange(currentPage - 1)}
                    className="w-10 h-10 border rounded-[4px] text-[#003B95] border-[#003B95] disabled:opacity-50"
                >
                    &lt;
                </button>

                {pages.map((page, idx) =>
                    typeof page === "number" ? (
                        <button
                            key={idx}
                            onClick={() => onPageChange(page)}
                            className={`w-10 h-10 border rounded-[4px] ${
                                page === currentPage
                                    ? "bg-[#003B95] text-white border-[#003B95] font-semibold"
                                    : "text-[#003B95] border-[#003B95]"
                            }`}
                        >
                            {page}
                        </button>
                    ) : (
                        <Text
                            as="span"
                            key={idx}
                            className="px-2 text-[#003B95] text-sm select-none"
                        >
                            ...
                        </Text>
                    )
                )}

                <button
                    disabled={currentPage === totalPages}
                    onClick={() => onPageChange(currentPage + 1)}
                    className="w-10 h-10 border rounded-[4px] text-[#003B95] border-[#003B95] disabled:opacity-50"
                >
                    &gt;
                </button>
            </Box>
        </Box>
    )
}
