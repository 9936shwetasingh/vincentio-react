import React from "react";

const steps = [
  {
    step: "01",
    title: "Requirement Analysis",
    desc: "We understand your business needs and analyze the best IT solution for your infrastructure.",
  },
  {
    step: "02",
    title: "Solution Design",
    desc: "Our experts design a customized architecture based on performance, security and scalability.",
  },
  {
    step: "03",
    title: "Implementation",
    desc: "We deploy and configure the solution with minimal downtime and full testing.",
  },
  {
    step: "04",
    title: "Support & Maintenance",
    desc: "24/7 monitoring, support and optimization to ensure smooth operations.",
  },
];

export default function HowItWorks({ fullPage = false }) {
  return (
    <section className={`py-20 bg-gray-50 ${fullPage ? "pt-28 min-h-screen" : ""}`}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className={`${fullPage ? "text-4xl" : "text-3xl"} font-bold mb-4`}>
          How It Works
        </h2>
        <p className="text-gray-600 mb-12">
          Our proven process ensures seamless delivery of IT solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition text-left"
            >
              <div className="text-blue-600 text-3xl font-bold mb-2">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
