
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="   px-9 flex justify-between items-center">
            <Link to="/" className="text-3xl font-semibold ">Blogs</Link>
          
            {/* <div className="flex gap-4">
                <Link to="/" className="text-gray-700 hover:text-blue-700">Home</Link>
                <Link to="/blog-form" className="text-gray-700 hover:text-blue-700">Post Blog</Link>
            </div> */}
        </nav>
    );
};
