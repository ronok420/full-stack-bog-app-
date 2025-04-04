// import React from "react"
// import { Outlet } from "react-router-dom"
// import { Navbar } from "@/components/core/Navbar"
// import { Footer } from "@/components/core/Footer"

// export default function MainLayout() {
//     return (
//         <>
//          <div className="bg-[#DFF3F5] px-4 md:px-10 py-10 text-gray-800 min-h-screen">
//             <Navbar />
//             <main >
                 
//                 <Outlet />            
//             </main>           
//             <Footer />
//          </div>
           
//         </>
//     )
// }


import React from "react"
import { Outlet } from "react-router-dom"

import { Navbar } from "@/components/core/Navbar"
import { Footer } from "@/components/core/Footer"

import { Box } from "@/components/custom/Box"

export default function MainLayout() {
    return (
        <>
            <Box className="bg-[#DFF3F5] px-4 md:px-10 py-10 text-gray-800 min-h-screen">
                <Navbar />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </Box>
        </>
    )
}
