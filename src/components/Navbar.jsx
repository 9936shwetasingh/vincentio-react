import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [serviceOpen, setServiceOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        <Link to="/" className="text-2xl font-bold text-blue-700">
          Vincentio
        </Link>

        <nav className="hidden md:flex gap-8 text-gray-700 font-medium items-center">

          <Link to="/" className="hover:text-blue-600">Home</Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServiceOpen(true)}
            onMouseLeave={() => setServiceOpen(false)}
          >
            <span className="cursor-pointer hover:text-blue-600">
              Services ▾
            </span>

            <div
              className={`absolute top-7 left-0 w-52 bg-white shadow-lg rounded-md py-2 transition-all duration-200 ${
                serviceOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <Link to="/services/public-cloud" className="block px-4 py-2 hover:bg-gray-100">
                Public Cloud
              </Link>
              <Link to="/services/private-cloud" className="block px-4 py-2 hover:bg-gray-100">
                Private Cloud
              </Link>
            </div>
          </div>
              {/* Products Dropdown */}
<div
  className="relative"
  onMouseEnter={() => setProductOpen(true)}
  onMouseLeave={() => setProductOpen(false)}
>
  <span className="cursor-pointer hover:text-blue-600">
    Products ▾
  </span>

  <div
    className={`absolute top-7 left-0 w-56 bg-white shadow-lg rounded-md py-2 transition-all duration-200 ${
      productOpen ? "opacity-100 visible" : "opacity-0 invisible"
    }`}
  >
    {/* Network & Security */}
    <div className="relative group">
      <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between">
        Network & Security <span>›</span>
      </div>

      <div className="absolute top-0 left-full w-44 bg-white shadow-lg rounded-md py-2 
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible">
        <Link to="/products/vnetwall" className="block px-4 py-2 hover:bg-gray-100">
          VnetWall
        </Link>
      </div>
    </div>

    {/* Virtualization */}
    <div className="relative group">
      <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between">
        Virtualization <span>›</span>
      </div>

      <div className="absolute top-0 left-full w-44 bg-white shadow-lg rounded-md py-2 
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible">
        <Link to="/products/vnetmox" className="block px-4 py-2 hover:bg-gray-100">
          VnetMox
        </Link>
      </div>
    </div>
  </div>
</div>

          

          <Link to="/partners" className="hover:text-blue-600">Partners</Link>
          <Link to="/about" className="hover:text-blue-600">About Us</Link>

          <Link
            to="/contact"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Get Quote
          </Link>

        </nav>
      </div>
    </header>
  );
}
