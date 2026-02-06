import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const FeatureItem = ({ img, title, desc, delay, icon }) => {
  const [ref, show] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <img
        src={img || icon}
        alt={title}
        className="mx-auto mb-4 h-16 transition-transform duration-300 hover:scale-110"
      />

      <h3 className="text-lg font-medium mb-3 text-gray-800 hover:text-blue-600 transition">
        {title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
};

const Vnetwall = () => {
  return (
    <div className="w-full bg-white">
        {/* HERO SECTION */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 text-center">

    <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-4 animate-fade-in">
      Robust & True Security Platform
    </h1>

    <p className="text-gray-600 max-w-4xl mx-auto mb-20 leading-relaxed animate-fade-in delay-200">
      VnetWall is a network firewall distribution based on open source product
      pfSense is able to provide the same functionality or more of common
      commercial firewalls.
    </p>

    {/* IMAGE + BUTTON OVERLAY */}
    <div className="relative max-w-6xl mx-auto group">

      {/* BUTTONS */}
      <div className="
        absolute -top-6 left-1/2 -translate-x-1/2
        flex gap-4 z-10
        animate-slide-down
      ">
        <a
          href="https://opnsense.org/download/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            px-8 py-3 rounded-full
            bg-pink-100 text-pink-600 font-medium
            shadow-md
            transition-all duration-300
            hover:bg-pink-600 hover:text-white
            hover:-translate-y-1 hover:shadow-xl
          "
        >
          TRY FOR FREE
        </a>

        <a
          href="https://docs.opnsense.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            px-8 py-3 rounded-full
            bg-blue-100 text-blue-600 font-medium
            shadow-md
            transition-all duration-300
            hover:bg-blue-600 hover:text-white
            hover:-translate-y-1 hover:shadow-xl
          "
        >
          LEARN MORE
        </a>
      </div>
                  {/* IMAGE */}
      <div
        className="
          bg-white rounded-xl shadow-2xl border overflow-hidden
          transform transition-all duration-700
          scale-95 opacity-0
          animate-image-in
          group-hover:scale-[1.02]
        "
      >
        <img
          src="/images/Vnetwall.jpg"
          alt="VnetWall Dashboard"
          className="w-full object-cover"
        />
      </div>
    </div>
  </div>
</section>

     {/* FEATURE SECTION */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-3xl font-light text-center text-gray-800 mb-14">
      VnetWall Features
    </h2>

    <div className="grid md:grid-cols-4 gap-14 text-center">
      {[
        {
          img: "/images/Routing.png",
          title: "Firewall and routing features.",
          desc:
          <p>Firewall: Security measure that filters network traffic to prevent authorized access. Routing: Process of selecting the 
            best path for data packets to travel between networks.</p>
        },
        {
          img: "/images/feature.png",
          title: "Stateful inspection, IP / DNS filtering",
          desc:
          <p> Vnetwall's stateful inspection monitors and manages network traffic while its IP/DNS filtering allowing
                  specific Ip addresses and domain names for enhanced security and content control.</p>
            
        },
        {
          img: "/images/VPN.png",
          title: "Anti-spoofing, captive portal, VPN",
          desc:
           <p>It is a network security that provides anti-spoofing measure to prevent IP address forgery, a
            captive portal for user authentiaction, and VPN functionality for secure remote access.
           </p>
        },
        {
          img: "/images/proxy.png",
          title: "Proxy and Content filtering",
          desc:
            <p>It allows user to control and monitor internet traffic, block unwanted content, and enforce security policies. </p>
        }
      ].map((item, i) => (
        <FeatureItem key={i} {...item} delay={i * 150} />
      ))}
    </div>
  </div>
</section>

{/* SECOND FEATURE ROW */}
<section className="max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-4 gap-14 text-center">
  {[
    {
      icon: "/images/system.png",
      title: "User authentication and System security management",
      desc:
        <p>It provides user authentiaction, ensuring authorized access, and system security management,protecting against
          threats and managing network security.
        </p>
    },
    {
      icon: "/images/NAt.png",
      title: "NAT, PAT, Policy based routing",
      desc:
        <p>NAT: Network Address Translation, modifies IP addresses in packets for communication between different networks. PAT:
          Port Address Translation, translate IP addresses and port numbers for multiple devices to share a single IP address. 
            Policy-based routing: Directs network traffic based on pre-defined policies or criteria, allowing control over
            how data is routed.
        </p>
    },
    {
      icon: "/images/DNS.png",
      title: "CSRF protection, DNS forwarding",
      desc:
        <p>VnetWall implements Cross Site Request Forgery protection to prevent unauthorized actions by validating
          requests. Vnetwall can forward DNS queries to another DNS server for resolution.
        </p>
    },
    {
      icon: "/images/IPse.png",
      title: "IPSec, L2TP, IPv6 support",
      desc:
        <p>VnetWall is a firewall and router software that supports IPSec and LT2P protocols for secure VPN connections, as well 
          as IPv6 addressing for the next-generation internet protocols.
        </p>
    }
  ].map((item, i) => (
    <FeatureItem key={i} {...item} delay={i * 150} />
  ))}
</section>

  

      {/* VNETWALL 400H */}
<section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
  <div>
    <h2 className="text-2xl font-semibold mb-4 text-blue-600">
      VNETWALL 400H
    </h2>

    <ul className="text-gray-700 space-y-2 text-sm">
      <li>L3 Forwarding: 2.55 Gbps</li>
      <li>Firewall: 2.09 Gbps (10k ACLs)</li>
      <li>IPsec VPN: 960 Mbps</li>
      <li>Silent operation (fanless)</li>
      <li>Put on a desktop, wall, or rack</li>
      <li>Dimension & weight – 136×125×40mm | 1.5 KG</li>
    </ul>

    {/* DOWNLOAD BUTTON */}
    <a
      href="https://vincentio.in/wp-content/uploads/2023/07/Vnetwall-400H-datasheet.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-6 px-8 py-3 rounded-full 
                 bg-blue-500 text-white text-sm font-medium
                 transition-all duration-300
                 hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1"
    >
      Download Datasheet
    </a>
  </div>

  <img
    src="/images/400H.jpg"
    alt="VNETWALL 400H"
    className="mx-auto"
  />
</section>

          {/* VNETWALL 3000E */}
<section className="py-20 bg-[#f5f6f7]">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid md:grid-cols-2 gap-14 items-center">

      {/* LEFT IMAGE */}
      <div className="flex justify-center">
        <img
          src="/images/300E.png"
          alt="VNETWALL 3000E"
          className="w-full max-w-xl object-contain"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div>
        <h2 className="text-3xl font-semibold text-[#5b8fcf] mb-4">
          VNETWALL 3000E
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          The VNETWALL 3000E is ideal for remote office, small/medium
          business, edge deployments, and enterprise networks. It
          provides enterprise-class performance in a rack mount
          form-factor. The VNETWALL 3000E provides flexible port
          configurations to support 1 to 10 Gbps WAN capabilities
          across RJ45, SFP, and SFP+ ports.
        </p>

        <ul className="space-y-3 text-gray-700">
          <li>• L3 Forwarding: 50.6 Gbps</li>
          <li>• Firewall: 50.55 Gbps</li>
          <li>• IPsec VPN: 6.24 Gbps</li>
          <li>• Rack mount and Redundant power supply</li>
          <li>• 2x 10 GbE and 2x 10G SFP+ onboard</li>
          <li>• 4x configurable modules (8x 1G) or (2x 10G)</li>
        </ul>
      </div>
    </div>
  </div>
</section>
          {/* PRICING */}
<section className="bg-gray-50 py-20">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">

    {/* 400H */}
    <div
      className="group px-8 py-10
                 bg-blue-50/40
                 hover:bg-blue-100/60
                 transition-all duration-300"
    >
      <h3 className="text-blue-600 mb-2 group-hover:text-blue-700">
        VNETWALL 400H
      </h3>

      <h2 className="text-3xl font-bold mb-4 text-gray-800 group-hover:text-blue-800 transition">
        ₹ 80,000
      </h2>

      <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-800 transition">
        Intel Quad core 2.7 Ghz<br />
        4GB RAM, 128GB SSD<br />
        4 x 1Gbps Ethernet<br />
        2 VPN clients supported<br />
        2.5 Gbps throughput<br />
        Advanced Security and Routing features
      </p>

      <button
        className="mt-6 px-7 py-2 rounded-full
                   bg-gray-800 text-white text-sm
                   transition-all duration-300
                   group-hover:bg-blue-600"
      >
        CONTACT NOW
      </button>
    </div>

    {/* 3000V */}
    <div
      className="group px-8 py-10
                 bg-blue-50/40
                 hover:bg-blue-100/60
                 transition-all duration-300"
    >
      <h3 className="text-blue-600 mb-2 group-hover:text-blue-700">
        VNETWALL 3000V
      </h3>

      <h2 className="text-3xl font-bold mb-4 text-gray-800 group-hover:text-blue-800 transition">
        ₹ 3,00,000
      </h2>

      <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-800 transition">
        Virtual appliance<br />
        KVM, VMware, AWS supported<br />
        100 VPN clients supported<br />
        10 Gbps throughput<br />
        IDS / IPS support<br />
        24 ports max supported, HA support
      </p>

      <button
        className="mt-6 px-7 py-2 rounded-full
                   bg-gray-800 text-white text-sm
                   transition-all duration-300
                   group-hover:bg-blue-600"
      >
        CONTACT NOW
      </button>
    </div>

    {/* 3000E */}
    <div
      className="group px-8 py-10
                 bg-blue-50/40
                 hover:bg-blue-100/60
                 transition-all duration-300"
    >
      <h3 className="text-blue-600 mb-2 group-hover:text-blue-700">
        VNETWALL 3000E
      </h3>

      <h2 className="text-3xl font-bold mb-4 text-gray-800 group-hover:text-blue-800 transition">
        ₹ 10,00,000
      </h2>

      <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-800 transition">
        Intel 12 core 2.1 Ghz<br />
        64GB RAM (upto 256GB)<br />
        32 x 1Gbps Ethernet<br />
        700 VPN clients supported<br />
        50 Gbps throughput<br />
        IDS / IPS Support, HA
      </p>

      <button
        className="mt-6 px-7 py-2 rounded-full
                   bg-gray-800 text-white text-sm
                   transition-all duration-300
                   group-hover:bg-blue-600"
      >
        CONTACT NOW
      </button>
    </div>

  </div>
</section>

      {/* SUPPORT SECTION */}
<section className="py-20">
  <div className="max-w-7xl mx-auto px-6">
    <div className="bg-blue-600 rounded-md px-10 py-14 flex flex-col md:flex-row justify-between items-center">

      <div>
        <h2 className="text-white text-3xl mb-2">
          Support and documentation
        </h2>
        <p className="text-white text-lg">
          It's fast, Almost free and Reliable!
        </p>
      </div>

      {/* READ MORE BUTTON */}
      <a
        href="https://docs.opnsense.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 md:mt-0
                   inline-block
                   bg-red-500 text-white
                   px-8 py-3 rounded-full
                   font-medium
                   transition-all duration-300
                   hover:bg-white hover:text-red-500
                   hover:shadow-lg"
      >
        READ MORE
      </a>

    </div>
  </div>

</section>
</div>
  );
};

export default Vnetwall;
