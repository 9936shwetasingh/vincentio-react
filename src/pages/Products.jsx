import React from "react";

const products = [
  {
    title: "VNet VMox",
    img: "https://vincentio.in/wp-content/uploads/2023/05/vnet-vmox.png",
    desc: "High-performance virtualization solution for your IT infrastructure.",
  },
  {
    title: "VNet Backup",
    img: "https://vincentio.in/wp-content/uploads/2023/05/vnet-backup.png",
    desc: "Secure and reliable backup solutions to protect your business data.",
  },
  {
    title: "VNet NAS",
    img: "https://vincentio.in/wp-content/uploads/2023/05/vnet-nas.png",
    desc: "Network-attached storage for efficient data management.",
  },
  {
    title: "VNet Stor",
    img: "https://vincentio.in/wp-content/uploads/2023/05/vnet-stor.png",
    desc: "Scalable storage solution for modern business needs.",
  },
  {
    title: "VNet Wall",
    img: "https://vincentio.in/wp-content/uploads/2023/05/vnet-wall.png",
    desc: "Advanced security firewall to protect your network infrastructure.",
  },
  {
    title: "VNet Cloud Server",
    img: "https://vincentio.in/wp-content/uploads/2023/05/vnet-cloud.png",
    desc: "Reliable cloud servers with high availability and performance.",
  },
];

export default function Products() {
  return (
    <div className="pt-24 max-w-7xl mx-auto px-6">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Products</h1>
        <p className="text-lg text-gray-700">
          Explore our range of cloud and IT products that help businesses grow efficiently.
        </p>
      </section>

      {/* Products Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-16">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition flex flex-col items-center text-center"
          >
            <img
              src={product.img}
              alt={product.title}
              className="w-24 h-24 mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-600">{product.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
