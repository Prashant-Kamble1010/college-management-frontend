import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import {
    FaBookOpen,
    FaUniversity,
    FaLaptopCode,
    FaUsers,
    FaArrowRight
} from "react-icons/fa";

function Home() {
    return (
        <>
            <Navbar />

            <Hero />

            {/* About Section */}

            <section className="py-24 bg-white">

                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

                    <img
                        src="https://images.unsplash.com/photo-1562774053-701939374585?w=900"
                        alt="College"
                        className="rounded-3xl shadow-2xl"
                    />

                    <div>

                        <span className="text-blue-700 font-bold uppercase tracking-widest">
                            About Our College
                        </span>

                        <h2 className="text-4xl font-bold mt-3">
                            Excellence in Education Since 1998
                        </h2>

                        <p className="mt-6 text-gray-600 leading-8">
                            Our College provides quality education with experienced
                            faculty members, modern laboratories, digital classrooms,
                            placement assistance and an excellent campus environment
                            for students.
                        </p>

                        <Link
                            to="/about"
                            className="inline-flex items-center gap-2 mt-8 bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition"
                        >
                            Learn More
                            <FaArrowRight />
                        </Link>

                    </div>

                </div>

            </section>

            {/* Why Choose Us */}

            <section className="py-24 bg-slate-100">

                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-4xl font-bold text-center">
                        Why Choose Our College?
                    </h2>

                    <p className="text-center text-gray-600 mt-4">
                        We provide everything students need to succeed.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

                        <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition">

                            <FaUniversity className="text-5xl text-blue-700 mb-5" />

                            <h3 className="text-xl font-bold">
                                Smart Campus
                            </h3>

                            <p className="mt-3 text-gray-600">
                                Modern classrooms and advanced infrastructure.
                            </p>

                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition">

                            <FaUsers className="text-5xl text-green-600 mb-5" />

                            <h3 className="text-xl font-bold">
                                Expert Faculty
                            </h3>

                            <p className="mt-3 text-gray-600">
                                Experienced professors and industry mentors.
                            </p>

                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition">

                            <FaLaptopCode className="text-5xl text-purple-700 mb-5" />

                            <h3 className="text-xl font-bold">
                                Modern Labs
                            </h3>

                            <p className="mt-3 text-gray-600">
                                High-end computer labs and research facilities.
                            </p>

                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition">

                            <FaBookOpen className="text-5xl text-red-600 mb-5" />

                            <h3 className="text-xl font-bold">
                                Digital Library
                            </h3>

                            <p className="mt-3 text-gray-600">
                                Thousands of books, journals and e-learning resources.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* Admission Banner */}

            <section className="py-24 bg-gradient-to-r from-blue-900 to-indigo-800 text-white">

                <div className="max-w-6xl mx-auto text-center px-6">

                    <h2 className="text-5xl font-bold">
                        Admissions Open for 2026
                    </h2>

                    <p className="mt-6 text-xl text-gray-300">
                        Begin your journey towards a successful career with us.
                    </p>

                    <div className="mt-10 flex justify-center gap-6 flex-wrap">

                        <Link
                            to="/admissions"
                            className="bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl hover:scale-105 transition"
                        >
                            Apply Now
                        </Link>

                        <Link
                            to="/contact"
                            className="border-2 border-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-800 transition"
                        >
                            Contact Us
                        </Link>

                    </div>

                </div>

            </section>

            {/* Footer */}

            <footer className="bg-slate-900 text-white py-12">

                <div className="max-w-7xl mx-auto px-6 text-center">

                    <h2 className="text-3xl font-bold">
                        College Management System
                    </h2>

                    <p className="mt-4 text-gray-400">
                        Excellence • Innovation • Success
                    </p>

                    <p className="mt-8 text-gray-500">
                        © 2026 College Management System. All Rights Reserved.
                    </p>

                </div>

            </footer>

        </>
    );
}

export default Home;