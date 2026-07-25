import Navbar from "../components/Navbar";
import { FaUniversity, FaBullseye, FaEye, FaAward } from "react-icons/fa";

function About() {
    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <section className="pt-28 pb-20 bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
                <div className="max-w-7xl mx-auto px-6 text-center">

                    <h1 className="text-5xl font-bold">
                        About Our College
                    </h1>

                    <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
                        Empowering students with quality education, innovation,
                        leadership, and lifelong learning.
                    </p>

                </div>
            </section>

            {/* About College */}
            <section className="py-20 bg-white">

                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

                    <img
                        src="https://images.unsplash.com/photo-1562774053-701939374585?w=900"
                        alt="College"
                        className="rounded-3xl shadow-xl"
                    />

                    <div>

                        <h2 className="text-4xl font-bold text-blue-800">
                            Welcome to CollegeMS
                        </h2>

                        <p className="mt-6 text-gray-600 leading-8">
                            Established in 1998, CollegeMS has become one of the
                            leading educational institutions committed to excellence
                            in academics, research, innovation, and student success.

                            We provide industry-oriented education supported by
                            experienced faculty members and modern infrastructure.
                        </p>

                        <div className="mt-8 grid grid-cols-2 gap-6">

                            <div className="bg-blue-50 p-5 rounded-xl">

                                <h3 className="text-3xl font-bold text-blue-700">
                                    2500+
                                </h3>

                                <p>Students</p>

                            </div>

                            <div className="bg-blue-50 p-5 rounded-xl">

                                <h3 className="text-3xl font-bold text-blue-700">
                                    150+
                                </h3>

                                <p>Faculty</p>

                            </div>

                            <div className="bg-blue-50 p-5 rounded-xl">

                                <h3 className="text-3xl font-bold text-blue-700">
                                    35+
                                </h3>

                                <p>Courses</p>

                            </div>

                            <div className="bg-blue-50 p-5 rounded-xl">

                                <h3 className="text-3xl font-bold text-blue-700">
                                    98%
                                </h3>

                                <p>Placements</p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Vision Mission */}

            <section className="py-20 bg-slate-100">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid md:grid-cols-3 gap-8">

                        <div className="bg-white rounded-3xl p-8 shadow-lg">

                            <FaUniversity className="text-5xl text-blue-700 mb-6" />

                            <h2 className="text-2xl font-bold mb-4">
                                Our History
                            </h2>

                            <p className="text-gray-600 leading-7">
                                More than two decades of excellence in education with
                                thousands of successful graduates working worldwide.
                            </p>

                        </div>

                        <div className="bg-white rounded-3xl p-8 shadow-lg">

                            <FaBullseye className="text-5xl text-green-600 mb-6" />

                            <h2 className="text-2xl font-bold mb-4">
                                Our Mission
                            </h2>

                            <p className="text-gray-600 leading-7">
                                To provide quality education that develops knowledge,
                                innovation, ethics, and leadership among students.
                            </p>

                        </div>

                        <div className="bg-white rounded-3xl p-8 shadow-lg">

                            <FaEye className="text-5xl text-purple-700 mb-6" />

                            <h2 className="text-2xl font-bold mb-4">
                                Our Vision
                            </h2>

                            <p className="text-gray-600 leading-7">
                                To become a globally recognized institution producing
                                responsible professionals and future leaders.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* Principal Message */}

            <section className="py-20 bg-white">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="bg-gradient-to-r from-blue-700 to-indigo-700 rounded-3xl p-10 text-white shadow-xl">

                        <h2 className="text-4xl font-bold">
                            Principal's Message
                        </h2>

                        <p className="mt-8 leading-8 text-lg">
                            Dear Students,

                            Welcome to our College Management System.
                            We believe education is the foundation of success.
                            Our mission is to empower every student with knowledge,
                            confidence, and practical skills to succeed in their careers.

                            We are committed to providing a modern learning
                            environment with academic excellence and innovation.

                        </p>

                        <div className="mt-8">

                            <h3 className="text-2xl font-bold">
                                Dr. John Smith
                            </h3>

                            <p>Principal</p>

                        </div>

                    </div>

                </div>

            </section>

            {/* Achievements */}

            <section className="py-20 bg-slate-100">

                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-4xl font-bold text-center mb-16">
                        Our Achievements
                    </h2>

                    <div className="grid lg:grid-cols-4 gap-8">

                        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

                            <FaAward className="text-5xl text-yellow-500 mx-auto mb-5" />

                            <h3 className="text-3xl font-bold">
                                NAAC A+
                            </h3>

                            <p className="mt-3 text-gray-600">
                                Accredited College
                            </p>

                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

                            <h3 className="text-4xl font-bold text-blue-700">
                                50+
                            </h3>

                            <p className="mt-3">
                                National Awards
                            </p>

                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

                            <h3 className="text-4xl font-bold text-green-700">
                                500+
                            </h3>

                            <p className="mt-3">
                                Recruiters
                            </p>

                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

                            <h3 className="text-4xl font-bold text-red-700">
                                25000+
                            </h3>

                            <p className="mt-3">
                                Alumni
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* Footer */}

            <footer className="bg-slate-900 text-white py-12">

                <div className="max-w-7xl mx-auto text-center">

                    <h2 className="text-3xl font-bold">
                        College Management System
                    </h2>

                    <p className="mt-3 text-gray-400">
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

export default About;