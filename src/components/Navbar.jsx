import { Link, NavLink } from "react-router-dom";
import { FaUniversity, FaUserGraduate } from "react-icons/fa";

function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-lg shadow-lg">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

                {/* Logo */}

                <Link to="/" className="flex items-center gap-3">

                    <div className="bg-blue-700 p-3 rounded-full shadow-lg">
                        <FaUniversity className="text-white text-2xl" />
                    </div>

                    <div>
                        <h1 className="text-2xl font-bold text-blue-800">
                            CollegeMS
                        </h1>

                        <p className="text-xs text-gray-500">
                            Excellence in Education
                        </p>
                    </div>

                </Link>

                {/* Menu */}

                <div className="hidden lg:flex items-center gap-8 font-semibold">

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-700 border-b-2 border-blue-700 pb-1"
                                : "text-gray-700 hover:text-blue-700 transition"
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-700 border-b-2 border-blue-700 pb-1"
                                : "text-gray-700 hover:text-blue-700 transition"
                        }
                    >
                        About
                    </NavLink>

                    <NavLink
                        to="/admissions"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-700 border-b-2 border-blue-700 pb-1"
                                : "text-gray-700 hover:text-blue-700 transition"
                        }
                    >
                        Admissions
                    </NavLink>

                    <NavLink
                        to="/courses"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-700 border-b-2 border-blue-700 pb-1"
                                : "text-gray-700 hover:text-blue-700 transition"
                        }
                    >
                        Courses
                    </NavLink>

                    <NavLink
                        to="/facilities"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-700 border-b-2 border-blue-700 pb-1"
                                : "text-gray-700 hover:text-blue-700 transition"
                        }
                    >
                        Facilities
                    </NavLink>

                    <NavLink
                        to="/gallery"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-700 border-b-2 border-blue-700 pb-1"
                                : "text-gray-700 hover:text-blue-700 transition"
                        }
                    >
                        Gallery
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-700 border-b-2 border-blue-700 pb-1"
                                : "text-gray-700 hover:text-blue-700 transition"
                        }
                    >
                        Contact
                    </NavLink>

                </div>

                {/* Student Portal */}

                <Link
                    to="/login"
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-700 to-indigo-700 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 hover:shadow-xl transition duration-300"
                >
                    <FaUserGraduate />
                    Student Portal
                </Link>

            </div>
        </nav>
    );
}

export default Navbar;