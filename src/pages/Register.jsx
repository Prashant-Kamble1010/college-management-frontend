import { Link } from "react-router-dom";
import { FaUniversity, FaUserGraduate } from "react-icons/fa";

function Register() {
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
                        Create your College Account
                    </p>

                </div>

                {/* Form */}

                <form className="space-y-4">

                    <div>

                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Full Name
                        </label>

                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />

                    </div>

                    <div>

                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            College Email
                        </label>

                        <input
                            type="email"
                            placeholder="student@college.edu"
                            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />

                    </div>

                    <div>

                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Mobile Number
                        </label>

                        <input
                            type="tel"
                            placeholder="Enter mobile number"
                            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />

                    </div>

                    <div>

                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Create password"
                            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />

                    </div>

                    <div>

                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Confirm Password
                        </label>

                        <input
                            type="password"
                            placeholder="Confirm password"
                            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />

                    </div>

                    <button
                        type="submit"
                        className="w-full mt-2 bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-3 rounded-xl font-semibold hover:from-blue-800 hover:to-indigo-800 transition duration-300 shadow-lg"
                    >
                        Create College Account
                    </button>

                </form>

                {/* Footer */}

                <div className="mt-8 text-center">

                    <p className="text-gray-600">
                        Already have a College Account?
                    </p>

                    <Link
                        to="/login"
                        className="inline-flex items-center gap-2 mt-3 text-blue-700 font-semibold hover:text-blue-900 transition"
                    >
                        <FaUserGraduate />
                        Sign In
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default Register;