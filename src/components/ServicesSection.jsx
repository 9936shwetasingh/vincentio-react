const services = [
  { title: "Public Cloud", icon: "https://vincentio.in/wp-content/uploads/2023/05/cloud.png" },
  { title: "Private Cloud", icon: "https://vincentio.in/wp-content/uploads/2023/05/server.png" },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white pointer-events-none">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Services</h2>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-gray-50 rounded-xl shadow cursor-default"
            >
              <img src={service.icon} className="w-16 h-16 mb-4" />
              <h3 className="font-semibold text-lg">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

