import React from "react";

// Technology logos & description
const techServices = [
  {
    title: "OpenStack",
    logo: "/images/openstack.png",
    description:
      "OpenStack is a free, open standard cloud computing platform. It is mostly deployed as infrastructure-as-a-service in both public and private clouds where virtual servers and other resources are made available to users.",
  },
  {
    title: "Harvester",
    logo: "/images/harvester.png",
    description:
      "Harvester is the next generation of hyperconverged infrastructure designed for the modern cloud-native environment. Completely open-source and free to use, it easily integrates into existing infrastructure.",
  },
  {
    title: "KubeVirt",
    logo: "/images/kubevert.png",
    description:
      "KubeVirt technology addresses the needs of development teams that adopt Kubernetes but possess existing VM-based workloads that cannot be easily containerized.",
  },
  {
    title: "OpenStack Helm",
    logo: "/images/helm.png",
    description:
      "OpenStack Helm provides Helm charts for deploying OpenStack services on a Kubernetes cluster. It allows monitoring of Kubernetes and OpenStack resources from a single dashboard.",
  },
];

export default function PrivateCloud() {
  return (
    <div className="pt-20 px-6 max-w-7xl mx-auto">

      {/* Top Section: Title + Subtitle + Description + Image */}
      <div className="flex flex-col md:flex-row items-center mb-16">
        {/* Text */}
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold mb-4">Private Cloud</h1>
          <p className="text-blue-600 font-semibold mb-6 text-lg">
            Private Cloud Solution's For Core Infrastructure, Software | Private Cloud
          </p>
          <p className="text-gray-700 leading-relaxed">
            Private cloud provides a high level of security and privacy to data through firewalls and internal hosting. 
            It ensures that operational and sensitive data are not accessible to third-party providers. 
            OpenStack, Harvester, KubeVirt, and OpenStack Helm are the examples of private cloud solutions.
          </p>
        </div>

        {/* Main Private Cloud Image */}
        <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center">
          <img
            src="/images/Privatecloud.jpg"  // Make sure this image is in 'public/images' folder
            alt="Private Cloud"
            className="w-64 h-64 object-contain"
          />
        </div>
      </div>

      {/* Technology Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {techServices.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition"
          >
            <img src={tech.logo} alt={tech.title} className="w-24 h-24 mb-4" />
            <h3 className="font-semibold text-lg mb-2">{tech.title}</h3>
            <p className="text-gray-600 text-sm text-center">{tech.description}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
