import { Link } from "react-router-dom";
import {
    FaUniversity,
    FaUserGraduate,
    FaLock,
    FaEnvelope
} from "react-icons/fa";

function Login() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-sky-700 flex items-center justify-center px-4 py-10">

            <div className="w-full max-w-md bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8">

                {/* Header */}

                <div className="text-center mb-8">

                    <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4 shadow-md">

                        <FaUniversity className="text-4xl text-blue-700" />

                    </div>

                    <h1 className="text-3xl font-bold text-blue-800">
                        College Management System
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Sign in to your College Account
                    </p>

                </div>

                {/* Form */}

                <form className="space-y-5">

                    <div>

                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            College Email
                        </label>

                        <div className="flex items-center border border-gray-300 rounded-xl px-3">

                            <FaEnvelope className="text-gray-400" />

                            <input
                                type="email"
                                placeholder="student@college.edu"
                                className="w-full p-3 outline-none rounded-xl"
                            />

                        </div>

                    </div>

                    <div>

                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Password
                        </label>

                        <div className="flex items-center border border-gray-300 rounded-xl px-3">

                            <FaLock className="text-gray-400" />

                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full p-3 outline-none rounded-xl"
                            />

                        </div>

                    </div>

                    <div className="flex justify-between items-center text-sm">

                        <label className="flex items-center gap-2 cursor-pointer">

                            <input
                                type="checkbox"
                                className="accent-blue-700"
                            />

                            Remember Me

                        </label>

                        <a
                            href="#"
                            className="text-blue-700 hover:underline"
                        >
                            Forgot Password?
                        </a>

                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-3 rounded-xl font-semibold hover:from-blue-800 hover:to-indigo-800 transition duration-300 shadow-lg"
                    >
                        Sign In
                    </button>

                </form>

                {/* Divider */}

                <div className="flex items-center my-6">

                    <div className="flex-1 border-t"></div>

                    <span className="px-3 text-gray-400 text-sm">
                        Or
                    </span>

                    <div className="flex-1 border-t"></div>

                </div>

                {/* Footer */}

                <div className="text-center">

                    <p className="text-gray-600">
                        New to our College?
                    </p>

                    <Link
                        to="/register"
                        className="inline-flex items-center gap-2 mt-3 text-blue-700 font-semibold hover:text-blue-900 transition"
                    >
                        <FaUserGraduate />
                        Create College Account
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default Login;