import Navbar from "../components/Navbar";
import {
    FaLaptopCode,
    FaBusinessTime,
    FaFlask,
    FaMicrochip,
    FaBalanceScale,
    FaHeartbeat,
    FaArrowRight
} from "react-icons/fa";

function Courses() {

    const courses = [
        {
            icon: <FaLaptopCode className="text-5xl text-blue-700" />,
            name: "Bachelor of Computer Applications",
            short: "BCA",
            duration: "3 Years",
            seats: "120 Seats"
        },
        {
            icon: <FaBusinessTime className="text-5xl text-green-700" />,
            name: "Bachelor of Business Administration",
            short: "BBA",
            duration: "3 Years",
            seats: "120 Seats"
        },
        {
            icon: <FaFlask className="text-5xl text-red-600" />,
            name: "Bachelor of Science",
            short: "B.Sc",
            duration: "3 Years",
            seats: "180 Seats"
        },
        {
            icon: <FaMicrochip className="text-5xl text-purple-700" />,
            name: "Bachelor of Technology",
            short: "B.Tech",
            duration: "4 Years",
            seats: "240 Seats"
        },
        {
            icon: <FaBalanceScale className="text-5xl text-yellow-500" />,
            name: "Bachelor of Laws",
            short: "LLB",
            duration: "3 Years",
            seats: "60 Seats"
        },
        {
            icon: <FaHeartbeat className="text-5xl text-pink-600" />,
            name: "Bachelor of Pharmacy",
            short: "B.Pharm",
            duration: "4 Years",
            seats: "100 Seats"
        }
    ];

    return (
        <>
            <Navbar />

            {/* Hero */}

            <section className="pt-32 pb-20 bg-gradient-to-r from-blue-900 to-indigo-800 text-white">

                <div className="max-w-7xl mx-auto px-6 text-center">

                    <h1 className="text-5xl font-bold">
                        Our Courses
                    </h1>

                    <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
                        Choose from our wide range of undergraduate and postgraduate
                        programs designed for your successful future.
                    </p>

                </div>

            </section>

            {/* Courses */}

            <section className="py-24 bg-slate-100">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {courses.map((course, index) => (

                            <div
                                key={index}
                                className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-3 hover:shadow-2xl transition duration-300"
                            >

                                <div className="mb-6">

                                    {course.icon}

                                </div>

                                <h2 className="text-2xl font-bold">

                                    {course.short}

                                </h2>

                                <h3 className="mt-3 text-lg text-gray-700">

                                    {course.name}

                                </h3>

                                <div className="mt-6 space-y-2 text-gray-600">

                                    <p>
                                        <strong>Duration :</strong> {course.duration}
                                    </p>

                                    <p>
                                        <strong>Availability :</strong> {course.seats}
                                    </p>

                                </div>

                                <button
                                    className="mt-8 w-full bg-blue-700 text-white py-3 rounded-xl hover:bg-blue-800 transition flex justify-center items-center gap-2"
                                >
                                    View Details
                                    <FaArrowRight />
                                </button>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* CTA */}

            <section className="py-20 bg-blue-800 text-white">

                <div className="max-w-5xl mx-auto text-center px-6">

                    <h2 className="text-4xl font-bold">

                        Ready To Begin Your Journey?

                    </h2>

                    <p className="mt-6 text-lg text-gray-300">

                        Admissions are now open for the academic year 2026.
                        Apply today and become a part of our college family.

                    </p>

                    <button className="mt-10 bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition">

                        Apply Now

                    </button>

                </div>

            </section>

        </>
    );
}

export default Courses;