import { useState } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const VnetMox = () => {
  const [activePlan, setActivePlan] = useState(null);

  const [leftRef, leftShow] = useScrollAnimation();
  const [rightRef, rightShow] = useScrollAnimation();
  const [featureRef, featureShow] = useScrollAnimation();

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div
            ref={leftRef}
            className={`transition-all duration-500
              ${leftShow ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}
            `}
          >
            <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-5">
              Virtual Environment
            </h1>

            <p className="text-gray-600 mb-8 max-w-xl">
              Vnetmox is a platform based on open source Linux KVM product
              with in-house customizations With the built-in Web interface you can easily manage VMs
              containers, software-defined storage and networking, high-availability clustering and 
              multiple out-of-the-box tools on a single solution.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
  href="https://vincentio.in/wp-content/uploads/2023/07/Vnetmox-VE-8.0-datasheet.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="px-7 py-3 rounded-full bg-emerald-500 text-white text-sm 
             hover:bg-emerald-600 transition"
>
  Download Datasheet
</a>

              <a
  href="https://www.proxmox.com/en/downloads"
  target="_blank"
  rel="noopener noreferrer"
  className="px-7 py-3 rounded-full bg-pink-100 text-pink-600 text-sm
             hover:bg-pink-600 hover:text-white transition"
>
  Try for Free
</a>

              <a
  href="https://pve.proxmox.com/pve-docs/"
  target="_blank"
  rel="noopener noreferrer"
  className="px-7 py-3 rounded-full bg-blue-100 text-blue-600 text-sm
             hover:bg-blue-600 hover:text-white transition"
>
  Learn More
</a>
            </div>
          </div>

          <div
  ref={rightRef}
  className={`transition-all duration-500
    ${rightShow ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}
  `}
>
  <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-3 max-w-lg mx-auto">
    <img
      src="/images/vnetmox1.png"
      alt="Vnetmox Dashboard"
      className="w-full h-auto object-contain rounded-md"
    />
  </div>
</div>

        </div>
      </section>
              {/* ================= FEATURE SECTION : PART 1 ================= */}
<section className="py-24 bg-[#f6f7fb]">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADING */}
    <div
      ref={featureRef}
      className={`text-center mb-20 transition-all duration-300
        ${featureShow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      <h2 className="text-4xl font-light text-gray-800">
        VnetMox <span className="italic text-blue-500">Features</span>
      </h2>
    </div>

    {/* FEATURES GRID */}
    <div className="grid md:grid-cols-3 gap-20 text-center">

      {/* FEATURE 1 */}
      <div
        className={`transition-all duration-300 delay-0
          ${featureShow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        `}
      >
        <img src="/images/option.jpg" className="mx-auto mb-6 h-14" />
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Extensive Storage Options
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          VnetMox supports various storage options, including local storage,
          networked storage (NFS, iSCSI, Fibre Channel), and distributed
          storage like (Ceph). This flexibility allows you to choose the most suitable storage
          solution for your needs.
        </p>
      </div>

      {/* FEATURE 2 */}
      <div
        className={`transition-all duration-300 delay-100
          ${featureShow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        `}
      >
        <img src="/images/container.jpg" className="mx-auto mb-6 h-14" />
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Containerization
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          VnetMox utilizes LXC (Linux Containers) to enable lightweight
          and efficient containerization, LXC provides a fast and resource-efficient 
          alternative to traditional virtualization, allowing you to run multiple isolated
          Linux containers on a single host.
        </p>
      </div>

      {/* FEATURE 3 */}
      <div
        className={`transition-all duration-300 delay-200
          ${featureShow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        `}
      >
        <img src="/images/Web.png" className="mx-auto mb-6 h-14" />
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Web-based Management Interface
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Vnetmox offer  a user-friendly web-based management interface, This interface allows you to perform various 
          administrative tasks such as creating and managing VMs and containers, monitoring resource usages,
          configuring networking, and storage management.
        </p>
      </div>

    </div>
  </div>
</section>

                {/* ================= FEATURE SECTION : PART 2 ================= */}
<section className="py-24 bg-[#f6f7fb]">
  <div className="max-w-7xl mx-auto px-6">

    <div
      className={`grid md:grid-cols-3 gap-20 text-center transition-all duration-300
        ${featureShow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >

      {/* FEATURE 4 */}
      <div className="transition-all duration-300 delay-0">
        <img
          src="/images/high.jpg"
          className="mx-auto mb-6 h-14"
        />
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          High Availability
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          It supports high availability clustering, which allows you to create a cluster of Promax nodes to provide failover protection
          for Vms and containers. If a node fails, the VMs and containers running on that node automatically migrate to 
          the healthy nodes in the cluster.
        </p>
      </div>

      {/* FEATURE 5 */}
      <div className="transition-all duration-300 delay-100">
        <img
          src="/images/live.jpg"
          className="mx-auto mb-6 h-14"
        />
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Live Migration
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Enables live migration of VMs and containers between nodes,
          allowing you to move running instances without any noticeable
          downtime or service interruption.
        </p>
      </div>

      {/* FEATURE 6 */}
      <div className="transition-all duration-300 delay-200">
        <img
          src="/images/backup.jpg"
          className="mx-auto mb-6 h-14"
        />
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Backup and Restore
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          It provides buit-in backup and restore functionality, allowing you to ctreate full and incremental backups of 
          Vms and containers.
        </p>
      </div>

    </div>
  </div>
</section>
          {/* ================= PRICING SECTION ================= */}
<section className="py-28 bg-gradient-to-b from-blue-50 to-blue-100">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-3xl font-semibold text-center text-gray-900 mb-16">
      Easy Pricing Plans
    </h2>

    <div className="grid md:grid-cols-4 gap-10">

      {[
        {
          title: "BASIC SUPPORT COST / CPU SOCKET",
          price: "₹ 55,000",
          features: [
            "On-Call Support",
            "Email Support",
            "5 tickets per year",
            "Response – 4 hours (Critical)",
            "Response – 1 business day (Major)",
            "Remote Support Only",
            "No Managed Support",
            "No Onsite Support",
          ],
        },
        {
          title: "STANDARD SUPPORT COST / CPU SOCKET",
          price: "₹ 80,000",
          features: [
            "On-Call Support",
            "Email Support",
            "40 tickets per year",
            "Response – 4 hours (Critical)",
            "Response – 1 business day (Major)",
            "Remote Support Only",
            "No Managed Support",
            "No Onsite Support",
          ],
        },
        {
          title: "GOLD SUPPORT COST / CPU SOCKET",
          price: "₹ 1,60,000",
          features: [
            "On-Call Support",
            "Email Support",
            "Unlimited tickets",
            "Response – 2 hours (Critical)",
            "Response – 8 hours (Major)",
            "Remote Support Only",
            "No Managed Support",
            "No Onsite Support",
          ],
        },
        {
          title: "PLATINUM SUPPORT COST / CPU SOCKET",
          price: "₹ 2,80,000",
          features: [
            "On-Call Support",
            "Email Support",
            "Unlimited tickets",
            "Response – 1 hour (Critical)",
            "Response – 4 hours (Major)",
            "Managed Support Included",
            "Onsite PAN India (Urgent)",
          ],
        },
      ].map((plan, index) => (
        <div
          key={index}
          className={`rounded-2xl p-8 text-center border transition-all duration-300
            ${
              activePlan === index
                ? "bg-blue-600 text-white scale-105 shadow-2xl"
                : "bg-white text-gray-800 hover:bg-blue-600 hover:text-white hover:scale-105 shadow-lg"
            }`}
        >
          <p className="text-xs tracking-widest mb-4 opacity-80">
            {plan.title}
          </p>

          <h3 className="text-4xl font-semibold mb-6">
            {plan.price}
          </h3>

          <ul className="text-sm space-y-3 mb-8 opacity-90">
            {plan.features.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <button
            onClick={() => setActivePlan(index)}
            className={`w-full py-3 rounded-full text-sm font-medium transition-all
              ${
                activePlan === index
                  ? "bg-white text-blue-600"
                  : "bg-blue-600 text-white hover:bg-white hover:text-blue-600"
              }`}
          >
            CONTACT NOW
          </button>
        </div>
      ))}
    </div>
  </div>
</section>

               
{/* ================= SUPPORT & DOCUMENTATION SECTION ================= */}
<section className="py-24">
  <div className="max-w-7xl mx-auto px-6">
    <div className="rounded-3xl bg-gradient-to-r from-blue-500 to-blue-700 px-10 py-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">

      {/* TEXT */}
      <h2 className="text-3xl md:text-4xl font-light text-white leading-snug max-w-3xl">
        Support and documentation <br />
        <span className="font-normal">
          It's fast, almost free and reliable!
        </span>
      </h2>

      {/* BUTTON */}
      <a
  href="https://pve.proxmox.com/pve-docs/"
  target="_blank"
  rel="noopener noreferrer"
  className="px-10 py-4 rounded-full bg-pink-500 text-white text-sm font-medium
             transition-all duration-300 hover:bg-pink-600 hover:-translate-y-1 hover:shadow-lg"
>
  READ MORE
</a>

    </div>
  </div>
</section>

                  
    </>
  );
};

export default VnetMox;
