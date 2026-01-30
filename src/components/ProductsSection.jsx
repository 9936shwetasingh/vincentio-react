import { Link } from "react-router-dom";

const products = [
  {
    title: "VNet VMox",
    img: "https://vincentio.in/wp-content/uploads/2023/05/vnet-vmox.png",
  },
  {
    title: "VNet Backup",
    img: "https://vincentio.in/wp-content/uploads/2023/05/vnet-backup.png",
  },
  {
    title: "VNet NAS",
    img: "https://vincentio.in/wp-content/uploads/2023/05/vnet-nas.png",
  },
  {
    title: "VNet Stor",
    img: "https://vincentio.in/wp-content/uploads/2023/05/vnet-stor.png",
  },
  {
    title: "VNet Wall",
    img: "https://vincentio.in/wp-content/uploads/2023/05/vnet-wall.png",
  },
  {
    title: "VNet Cloud Server",
    img: "https://vincentio.in/wp-content/uploads/2023/05/vnet-cloud.png",
  },
];

export default function ProductsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {products.map((product, index) => (
            <Link
              to="/products"
              key={index}
              className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition flex flex-col items-center"
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-20 h-20 mb-4"
              />
              <h3 className="font-semibold text-lg">{product.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
