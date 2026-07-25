import Navbar from "../components/Navbar";
import { FaCamera } from "react-icons/fa";

function Gallery() {

    const images = [
        "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    ];
    return (
        <>
            <Navbar />

            {/* Hero */}

            <section className="pt-32 pb-20 bg-gradient-to-r from-blue-900 via-blue-700 to-indigo-700 text-white">

                <div className="max-w-7xl mx-auto px-6 text-center">

                    <FaCamera className="text-6xl mx-auto mb-6 text-yellow-400" />

                    <h1 className="text-5xl font-bold">
                        College Gallery
                    </h1>

                    <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
                        Explore our vibrant campus, classrooms, laboratories,
                        events, sports, and unforgettable student moments.
                    </p>

                </div>

            </section>

            {/* Gallery */}

            <section className="py-20 bg-slate-100">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                        {images.map((img, index) => (

                            <div
                                key={index}
                                className="overflow-hidden rounded-3xl shadow-lg group"
                            >

                                <img
                                    src={img}
                                    alt="Campus"
                                    className="h-72 w-full object-cover group-hover:scale-110 transition duration-500"
                                />

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* Campus Life */}

            <section className="py-20 bg-white">

                <div className="max-w-7xl mx-auto px-6 text-center">

                    <h2 className="text-4xl font-bold text-blue-800">
                        Experience Campus Life
                    </h2>

                    <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                        Our students enjoy a dynamic campus filled with
                        academic excellence, cultural festivals,
                        technical events, sports competitions,
                        research activities, and lifelong friendships.
                    </p>

                </div>

            </section>

            {/* CTA */}

            <section className="py-20 bg-blue-800 text-white">

                <div className="max-w-5xl mx-auto text-center px-6">

                    <h2 className="text-4xl font-bold">
                        Want To Visit Our Campus?
                    </h2>

                    <p className="mt-6 text-lg text-gray-300">
                        Schedule your campus visit and experience our
                        world-class infrastructure personally.
                    </p>

                    <button className="mt-10 bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition">
                        Book Campus Visit
                    </button>

                </div>

            </section>

        </>
    );
}

export default Gallery;