import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <span className="bg-blue-500 text-sm px-4 py-1 rounded-full inline-block mb-4">
            IT Solutions
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Cloud Solutions Partner <br /> for All Your Business <br /> Requirements
          </h1>

          <div className="flex gap-4 justify-center md:justify-start">
            {/* Services - NOT clickable */}
            <button
              className="bg-white text-blue-600 px-6 py-3 rounded font-semibold cursor-default"
            >
              Services
            </button>

            {/* How It Works - Clickable */}
            <Link
              to="/how-it-works"
              className="bg-blue-800 text-white px-6 py-3 rounded font-semibold hover:bg-blue-900"
            >
              How It Works
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src="/images/solutions.jpg"
            alt="Cloud Solutions"
            className="w-full max-w-md"
          />
        </div>

      </div>
    </section>
  );
}
