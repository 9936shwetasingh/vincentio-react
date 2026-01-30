import { Link } from "react-router-dom";

export default function AboutPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <img
          src="https://vincentio.in/wp-content/uploads/2023/05/about-us.jpg"
          alt="About Vincentio"
          className="rounded-xl shadow-lg"
        />

        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold mb-4">About Vincentio</h2>
          <p className="mb-6 text-gray-700">
            Vincentio is a trusted IT solutions provider delivering cloud, storage,
            networking, and security services to help businesses grow efficiently.
          </p>
          <Link
            to="/about"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 font-semibold"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
