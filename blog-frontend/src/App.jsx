// import React from "react";
// import { BrowserRouter } from "react-router-dom";
// import AppRoutes from "./routes/routes";
// import { BlogProvider } from "./contexts/BlogContext";


// export default function App() {
//   return (
//     <BrowserRouter>
//       <BlogProvider>
//         <AppRoutes />
//       </BlogProvider>
//     </BrowserRouter>
//   );
// }
import React from "react"
import { BrowserRouter } from "react-router-dom"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import AppRoutes from "./routes/routes"
import { BlogProvider } from "./contexts/BlogContext"

const queryClient = new QueryClient()

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <BlogProvider>
                    <AppRoutes />
                </BlogProvider>
            </BrowserRouter>
        </QueryClientProvider>
    )
}
