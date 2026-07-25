import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaClock,
    FaFacebook,
    FaInstagram,
    FaLinkedin
} from "react-icons/fa";

function Contact() {
    return (
        <div className="min-h-screen bg-slate-100">

            {/* Hero */}

            <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-indigo-700 text-white py-20">

                <div className="max-w-7xl mx-auto text-center px-5">

                    <h1 className="text-5xl font-bold">
                        Contact Us
                    </h1>

                    <p className="mt-5 text-xl text-gray-200">
                        We'd love to hear from you. Contact our College Management Team.
                    </p>

                </div>

            </div>

            {/* Main Section */}

            <div className="max-w-7xl mx-auto px-5 py-16 grid lg:grid-cols-2 gap-10">

                {/* Left Side */}

                <div className="bg-white rounded-3xl shadow-xl p-10">

                    <h2 className="text-3xl font-bold text-blue-800 mb-8">
                        Contact Information
                    </h2>

                    <div className="space-y-8">

                        <div className="flex items-start gap-5">

                            <div className="bg-blue-100 p-4 rounded-full">
                                <FaMapMarkerAlt className="text-blue-700 text-2xl" />
                            </div>

                            <div>
                                <h3 className="font-bold text-lg">Address</h3>
                                <p className="text-gray-600">
                                    College Management System<br />
                                    Pune, Maharashtra 411001
                                </p>
                            </div>

                        </div>

                        <div className="flex items-start gap-5">

                            <div className="bg-blue-100 p-4 rounded-full">
                                <FaPhoneAlt className="text-blue-700 text-2xl" />
                            </div>

                            <div>
                                <h3 className="font-bold text-lg">Phone</h3>
                                <p className="text-gray-600">
                                    +91 9876543210
                                </p>
                            </div>

                        </div>

                        <div className="flex items-start gap-5">

                            <div className="bg-blue-100 p-4 rounded-full">
                                <FaEnvelope className="text-blue-700 text-2xl" />
                            </div>

                            <div>
                                <h3 className="font-bold text-lg">Email</h3>
                                <p className="text-gray-600">
                                    college@gmail.com
                                </p>
                            </div>

                        </div>

                        <div className="flex items-start gap-5">

                            <div className="bg-blue-100 p-4 rounded-full">
                                <FaClock className="text-blue-700 text-2xl" />
                            </div>

                            <div>
                                <h3 className="font-bold text-lg">
                                    Office Hours
                                </h3>

                                <p className="text-gray-600">
                                    Monday - Saturday
                                    <br />
                                    9:00 AM - 5:00 PM
                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="mt-10">

                        <h3 className="font-bold text-xl mb-4">
                            Follow Us
                        </h3>

                        <div className="flex gap-5">

                            <a
                                href="#"
                                className="bg-blue-700 text-white p-4 rounded-full hover:bg-blue-900 transition"
                            >
                                <FaFacebook />
                            </a>

                            <a
                                href="#"
                                className="bg-pink-600 text-white p-4 rounded-full hover:bg-pink-700 transition"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="#"
                                className="bg-blue-500 text-white p-4 rounded-full hover:bg-blue-700 transition"
                            >
                                <FaLinkedin />
                            </a>

                        </div>

                    </div>

                </div>

                {/* Right Side */}

                <div className="bg-white rounded-3xl shadow-xl p-10">

                    <h2 className="text-3xl font-bold text-blue-800 mb-8">
                        Send Message
                    </h2>

                    <form className="space-y-5">

                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-700"
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-700"
                        />

                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-700"
                        />

                        <textarea
                            rows="6"
                            placeholder="Write your message..."
                            className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-700"
                        ></textarea>

                        <button
                            className="w-full bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-4 rounded-xl text-lg font-semibold hover:scale-105 transition"
                        >
                            Send Message →
                        </button>

                    </form>

                </div>

            </div>

            {/* Map */}

            <div className="max-w-7xl mx-auto px-5 pb-16">

                <div className="rounded-3xl overflow-hidden shadow-xl">

                    <iframe
                        title="College Location"
                        src="https://www.google.com/maps?q=Pune,Maharashtra&output=embed"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        loading="lazy"
                    ></iframe>

                </div>

            </div>

            {/* Footer */}

            <footer className="bg-blue-900 text-white py-8">

                <div className="max-w-7xl mx-auto text-center">

                    <h2 className="text-2xl font-bold">
                        College Management System
                    </h2>

                    <p className="mt-3 text-gray-300">
                        Excellence in Education • Innovation • Success
                    </p>

                    <p className="mt-5 text-sm text-gray-400">
                        © 2026 College Management System. All Rights Reserved.
                    </p>

                </div>

            </footer>

        </div>
    );
}

export default Contact;