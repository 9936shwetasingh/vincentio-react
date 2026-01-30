import { Link } from "react-router-dom";

export default function Vnetmox() {
  return (
    <div className="pt-24">

      {/* HERO SECTION */}
      <section className="bg-[#f5f8fc] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Powerful Virtualization Platform
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            VnetMox is an enterprise-grade virtualization and cloud management
            platform designed for high availability, scalability and performance.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              Try For Free
            </button>
            <button className="px-6 py-3 bg-white border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            VnetMox Features
          </h2>

          <div className="grid md:grid-cols-4 gap-10">
            {features.map((item, i) => (
              <div key={i} className="text-center">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT VARIANTS */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            VnetMox Editions
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="text-3xl font-bold my-4">{plan.price}</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  {plan.features.map((f, idx) => (
                    <li key={idx}>{f}</li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"
                >
                  Contact Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT BANNER */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-blue-600 rounded-xl p-10 text-white flex flex-col md:flex-row items-center justify-between">
            <h3 className="text-2xl font-semibold">
              Support & Documentation <br />
              Fast, Reliable & Almost Free
            </h3>
            <Link
              to="/contact"
              className="mt-6 md:mt-0 px-6 py-3 bg-white text-blue-600 rounded-full hover:bg-gray-100"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    title: "Virtualization",
    desc: "KVM based high performance virtualization",
    icon: "/images/virtualization.png",
  },
  {
    title: "High Availability",
    desc: "Cluster & failover support",
    icon: "/images/ha.png",
  },
  {
    title: "Backup & Restore",
    desc: "Automated VM backup solutions",
    icon: "/images/backup.png",
  },
  {
    title: "Security",
    desc: "Role based access & isolation",
    icon: "/images/security.png",
  },
];

const plans = [
  {
    name: "VnetMox Basic",
    price: "₹80,000",
    features: [
      "4 GB RAM",
      "128 GB SSD",
      "2 Nodes Support",
      "Basic HA",
    ],
  },
  {
    name: "VnetMox Pro",
    price: "₹3,00,000",
    features: [
      "16 GB RAM",
      "512 GB SSD",
      "Cluster Support",
      "Advanced HA",
    ],
  },
  {
    name: "VnetMox Enterprise",
    price: "₹10,00,000",
    features: [
      "64 GB RAM",
      "Multiple Nodes",
      "Enterprise Support",
      "Disaster Recovery",
    ],
  },
];
