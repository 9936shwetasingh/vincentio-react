import React from "react";

const HowItWorks = () => {
  return (
    <div className="pt-28 pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Headings */}
        <h1 className="text-4xl font-bold mb-4 text-gray-900 text-center">
          How It Works
        </h1>
        <h2 className="text-2xl font-semibold mb-10 text-center">
          Cloud Computing Solutions | Vincentio Tech Solutions
        </h2>

        {/* Content with Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Left Content */}
          <div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              A cloud based solution refers to on-demand services, computer networks,
              storage, applications or resources accessed via the internet and
              through another provider’s shared cloud computing infrastructure. The
              benefits of cloud based solutions to end users and businesses include
              increased capacity, scalability, functionality, and reduced
              maintenance and cost for computer infrastructure or in-house staff.
              Additionally, cloud-based solutions can enable companies to focus on
              revenue driving initiatives rather than time-consuming, non-core
              business tasks.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Cloud computer pricing models are categorized by servers in the cloud,
              sites/applications in the cloud, and storage in the cloud and the
              majority of cloud providers tend to offer “pay-as-you-go” subscription
              based models which enable companies closely manage costs as well as
              scale up and down as needed.
            </p>

            <p className="text-gray-700 leading-relaxed">
              The ability to access cloud-based solutions from anywhere with an
              internet connection paired with the widespread adoption of smartphones
              and faster mobile networks have given users the ability to access
              cloud-based solutions from anywhere and anytime. As the adoption rate
              of cloud-based solutions continue to rise in small to medium sized
              businesses, the price points have become affordable to SMBs.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="/images/cloud.jpg"
              alt="Cloud Computing Process"
              className="rounded-lg shadow-lg max-w-full"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
