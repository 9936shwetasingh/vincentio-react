const services = [
  { title: "Public Cloud", icon: "https://vincentio.in/wp-content/uploads/2023/05/cloud.png" },
  { title: "Private Cloud", icon: "https://vincentio.in/wp-content/uploads/2023/05/server.png" },
];

export default function Services() {
  return (
    <div className="pt-20">
      <div className="text-center py-16 bg-gray-50">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
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
  );
}
