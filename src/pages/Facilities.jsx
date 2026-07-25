import Navbar from "../components/Navbar";
import {
    FaBook,
    FaLaptopCode,
    FaBus,
    FaWifi,
    FaRunning,
    FaUtensils,
    FaHospital,
    FaBed
} from "react-icons/fa";

function Facilities() {

    const facilities = [
        {
            icon: <FaBook className="text-5xl text-blue-700" />,
            title: "Digital Library",
            description: "A modern library with thousands of books, journals, e-books, and research materials."
        },
        {
            icon: <FaLaptopCode className="text-5xl text-purple-700" />,
            title: "Computer Labs",
            description: "Advanced computer laboratories equipped with the latest hardware and software."
        },
        {
            icon: <FaRunning className="text-5xl text-green-600" />,
            title: "Sports Complex",
            description: "Indoor and outdoor sports facilities for physical fitness and extracurricular activities."
        },
        {
            icon: <FaBus className="text-5xl text-red-600" />,
            title: "Transport",
            description: "Safe and reliable transportation covering all major areas of the city."
        },
        {
            icon: <FaBed className="text-5xl text-yellow-500" />,
            title: "Hostel",
            description: "Separate boys and girls hostels with modern amenities and 24×7 security."
        },
        {
            icon: <FaUtensils className="text-5xl text-orange-600" />,
            title: "Cafeteria",
            description: "Healthy and hygienic meals with a spacious and comfortable dining area."
        },
        {
            icon: <FaWifi className="text-5xl text-cyan-600" />,
            title: "Wi-Fi Campus",
            description: "High-speed internet connectivity available throughout the entire campus."
        },
        {
            icon: <FaHospital className="text-5xl text-pink-600" />,
            title: "Medical Center",
            description: "On-campus medical assistance with emergency healthcare facilities."
        }
    ];

    return (
        <>
            <Navbar />

            {/* Hero */}

            <section className="pt-32 pb-20 bg-gradient-to-r from-blue-900 to-indigo-800 text-white">

                <div className="max-w-7xl mx-auto px-6 text-center">

                    <h1 className="text-5xl font-bold">
                        Campus Facilities
                    </h1>

                    <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
                        We provide world-class infrastructure and modern facilities
                        to ensure an excellent learning environment for every student.
                    </p>

                </div>

            </section>

            {/* Facilities */}

            <section className="py-24 bg-slate-100">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {facilities.map((facility, index) => (

                            <div
                                key={index}
                                className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-3 hover:shadow-2xl transition duration-300"
                            >

                                <div className="mb-6">
                                    {facility.icon}
                                </div>

                                <h2 className="text-2xl font-bold">
                                    {facility.title}
                                </h2>

                                <p className="mt-4 text-gray-600 leading-7">
                                    {facility.description}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* CTA */}

            <section className="py-20 bg-blue-800 text-white">

                <div className="max-w-5xl mx-auto text-center px-6">

                    <h2 className="text-4xl font-bold">
                        Experience Our Modern Campus
                    </h2>

                    <p className="mt-6 text-lg text-gray-300">
                        Discover an environment designed to support learning,
                        innovation, research, and overall student development.
                    </p>

                    <button className="mt-10 bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition">
                        Visit Our Campus
                    </button>

                </div>

            </section>

        </>
    );
}

export default Facilities;