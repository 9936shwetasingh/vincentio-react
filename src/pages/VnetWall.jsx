export default function VnetwallHero() {
  return (
    <section className="bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-4">
          Robust & True Security Platform
        </h1>

        {/* Description */}
        <p className="max-w-4xl mx-auto text-gray-500 text-base md:text-lg leading-relaxed mb-8">
          VnetWall is a network firewall distribution based on open source product
          pfSense is able to provide the same functionality or more of common
          commercial firewalls. This can be deployed in cloud like AWS, Azure
          and can be deployed in-premises on any COTS hardware.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button className="px-6 py-3 rounded-full border border-blue-500 text-blue-600 font-medium hover:bg-blue-50 transition">
            TRY FOR FREE
          </button>

          <button className="px-6 py-3 rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600 transition">
            LEARN MORE
          </button>
        </div>

        {/* Product Screenshot */}
        <div className="flex justify-center">
          <div className="shadow-xl rounded-xl overflow-hidden max-w-5xl">
            <img
              src="/images/vnetwall-dashboard.png"
              alt="VnetWall Dashboard"
              className="w-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
