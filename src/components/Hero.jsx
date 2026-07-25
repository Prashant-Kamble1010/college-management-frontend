import { Link } from "react-router-dom";
import college from "../assets/college.jpg";

function Hero() {
    return (
        <section
            className="relative h-screen bg-cover bg-center"
            style={{
                backgroundImage: `url(${college})`,
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Hero Content */}
            <div className="relative z-10 flex items-center justify-center h-full px-6">

                <div className="max-w-5xl text-center text-white">

                    <span className="inline-block bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full mb-8 shadow-lg">
                        🎓 Admissions Open 2026
                    </span>

                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                        Welcome to
                        <br />
                        <span className="text-yellow-300">
                            College Management System
                        </span>
                    </h3>

                    <p className="mt-8 text-lg md:text-xl text-gray-200 leading-8 max-w-3xl mx-auto">
                        Empowering Education Through Technology.
                        Our institution provides world-class education,
                        experienced faculty, modern infrastructure,
                        research opportunities, and outstanding campus life
                        to prepare students for a successful future.
                    </p>

                    {/* Buttons */}

                    <div className="flex flex-wrap justify-center gap-6 mt-12">

                        <Link
                            to="/admissions"
                            className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold shadow-xl hover:bg-yellow-300 hover:scale-105 transition-all duration-300"
                        >
                            Apply Now
                        </Link>

                        <Link
                            to="/login"
                            className="border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-900 transition-all duration-300"
                        >
                            Student Portal
                        </Link>

                    </div>

                    {/* Statistics */}

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">

                        <div>
                            <h2 className="text-4xl font-bold text-yellow-400">
                                2500+
                            </h2>
                            <p className="text-gray-200 mt-2">
                                Students
                            </p>
                        </div>

                        <div>
                            <h2 className="text-4xl font-bold text-yellow-400">
                                150+
                            </h2>
                            <p className="text-gray-200 mt-2">
                                Faculty
                            </p>
                        </div>

                        <div>
                            <h2 className="text-4xl font-bold text-yellow-400">
                                35+
                            </h2>
                            <p className="text-gray-200 mt-2">
                                Courses
                            </p>
                        </div>

                        <div>
                            <h2 className="text-4xl font-bold text-yellow-400">
                                98%
                            </h2>
                            <p className="text-gray-200 mt-2">
                                Placements
                            </p>
                        </div>

                    </div>

                </div>

            </div>

            {/* Scroll Indicator */}

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">

                <div className="w-7 h-12 border-2 border-white rounded-full flex justify-center">

                    <div className="w-2 h-2 bg-white rounded-full mt-2"></div>

                </div>

            </div>

        </section>
    );
}

export default Hero;