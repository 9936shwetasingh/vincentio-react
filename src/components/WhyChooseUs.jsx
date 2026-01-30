export default function WhyChooseUs() {
  return (
    <section className="bg-[#3f6fb5] py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div className="text-white">
          <h2 className="text-3xl font-semibold mb-8">
            <span className="border-b-2 border-white pb-2">Why</span> Choose Us
          </h2>

          <div className="grid grid-cols-2 gap-8">
            <div className="flex items-center gap-3">
              <span>💡</span>
              <p>Value Proposition</p>
            </div>

            <div className="flex items-center gap-3">
              <span>🏅</span>
              <p>Quality Assurance</p>
            </div>

            <div className="flex items-center gap-3">
              <span>🚚</span>
              <p>On-Time Delivery</p>
            </div>

            <div className="flex items-center gap-3">
              <span>⚙️</span>
              <p>Customization & Flexibility</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="/images/whychooseus.jpg"
            alt="Why Choose Us"
            className="rounded-lg shadow-lg w-[400px]"
          />
        </div>
      </div>
    </section>
  );
}

