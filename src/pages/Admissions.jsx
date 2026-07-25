import Navbar from "../components/Navbar";

import { Link } from "react-router-dom";
import {
    FaUserGraduate,
    FaClipboardList,
    FaFileAlt,
    FaCheckCircle
} from "react-icons/fa";

function Admissions() {
    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-24 bg-gradient-to-r from-blue-900 via-blue-700 to-indigo-700 text-white">

                <div className="max-w-7xl mx-auto px-6 text-center">

                    <span className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold">
                        Admissions Open 2026
                    </span>

                    <h1 className="text-5xl lg:text-6xl font-bold mt-8">
                        Begin Your Journey With Us
                    </h1>

                    <p className="text-xl text-gray-200 mt-6 max-w-3xl mx-auto leading-8">
                        Join one of the leading educational institutions and build
                        a successful future with quality education, experienced
                        faculty and excellent campus facilities.
                    </p>

                    <Link
                        to="/contact"
                        className="inline-block mt-10 bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition"
                    >
                        Enquire Now
                    </Link>

                </div>

            </section>

            {/* Admission Process */}

            <section className="py-24 bg-white">

                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-4xl font-bold text-center">
                        Admission Process
                    </h2>

                    <p className="text-center text-gray-600 mt-4">
                        Complete your admission in four simple steps.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

                        <div className="bg-slate-50 rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition">

                            <FaClipboardList className="text-5xl text-blue-700 mx-auto mb-5" />

                            <h3 className="text-2xl font-bold">
                                Step 1
                            </h3>

                            <p className="mt-3 text-gray-600">
                                Fill the online admission enquiry form.
                            </p>

                        </div>

                        <div className="bg-slate-50 rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition">

                            <FaFileAlt className="text-5xl text-green-600 mx-auto mb-5" />

                            <h3 className="text-2xl font-bold">
                                Step 2
                            </h3>

                            <p className="mt-3 text-gray-600">
                                Submit all required academic documents.
                            </p>

                        </div>

                        <div className="bg-slate-50 rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition">

                            <FaUserGraduate className="text-5xl text-purple-700 mx-auto mb-5" />

                            <h3 className="text-2xl font-bold">
                                Step 3
                            </h3>

                            <p className="mt-3 text-gray-600">
                                Attend counselling and document verification.
                            </p>

                        </div>

                        <div className="bg-slate-50 rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition">

                            <FaCheckCircle className="text-5xl text-red-600 mx-auto mb-5" />

                            <h3 className="text-2xl font-bold">
                                Step 4
                            </h3>

                            <p className="mt-3 text-gray-600">
                                Confirm admission and begin your academic journey.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* Eligibility */}

            <section className="py-24 bg-slate-100">

                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-4xl font-bold text-center">
                        Eligibility Criteria
                    </h2>

                    <div className="grid lg:grid-cols-2 gap-10 mt-16">

                        <div className="bg-white rounded-3xl shadow-lg p-10">

                            <h3 className="text-2xl font-bold text-blue-700 mb-6">
                                Undergraduate Programs
                            </h3>

                            <ul className="space-y-4 text-gray-600">

                                <li>✔ 10+2 from a recognized board</li>
                                <li>✔ Minimum 50% aggregate marks</li>
                                <li>✔ Entrance exam (if applicable)</li>
                                <li>✔ Document verification</li>

                            </ul>

                        </div>

                        <div className="bg-white rounded-3xl shadow-lg p-10">

                            <h3 className="text-2xl font-bold text-blue-700 mb-6">
                                Postgraduate Programs
                            </h3>

                            <ul className="space-y-4 text-gray-600">

                                <li>✔ Bachelor's Degree</li>
                                <li>✔ Minimum 55% aggregate marks</li>
                                <li>✔ Entrance Test / Interview</li>
                                <li>✔ Original Certificates</li>

                            </ul>

                        </div>

                    </div>

                </div>

            </section>
        </>
    );
}

export default Admissions;