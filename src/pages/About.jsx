import React from "react";
import { FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    name: "Rahul Singh",
    image: "/images/Rahul.jpg",
    linkedin: "https://www.linkedin.com/in/rahul-singh",
  },
  {
    name: "Brij Mohan Kushwaha",
    image: "/images/Brij.jpg",
    linkedin: "https://www.linkedin.com/in/brij-mohan-kushwaha",
  },
  {
    name: "Sandeep Yadav",
    image: "/images/Sandeep.jpg",
    linkedin: "https://www.linkedin.com/in/sandeep-yadav",
  },
];

const About = () => {
  return (
    <div className="pt-20">

      {/* Heading */}
      <div className="py-12 text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
      </div>

      {/* About Content */}
      <div className="max-w-5xl mx-auto px-6 text-gray-700 leading-relaxed space-y-4">
        <p>
          With Vincentio Technologies as your business solutions partner, consultant or solution provider you get the power of our Best Innovation with technology, skills and techniques known to limited IT Professionals.
        </p>
        <p>
          Though we are at start but the employees working with us are highly skilled with experience from IT MNC Giants.
        </p>
        <p>
          The Company deals in almost all type of IT Products and Services, so you need not look for someone else to share your IT overheads. The Company was founded in November 2021 keeping in mind to integrate all IT services under one roof.
        </p>
        <p>
          Offering you the most of it is how we keep you moving forward. Founded in 2021, is a “IT Services” company. Deals in, IT Infrastructure setup, Data Center Design, Cloud Implementation, etc.
        </p>
      </div>

      {/* Mission */}
      <div className="max-w-5xl mx-auto px-6 mt-12">
        <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
        <p className="text-gray-700 mb-4">
          Our mission is to provide cloud computing services at an affordable cost to our clients.
          Our future goals are to improve the agility of an organization through our services,
          as our cloud computing services will increase user’s flexibility with re-provisioning,
          adding or expanding technological infrastructure resources.
        </p>

        <img
          src="/images/mission.jpg"
          alt="Our Mission"
          className="rounded-xl shadow-lg max-w-md"
        />
      </div>

      {/* Vision */}
      <div className="max-w-5xl mx-auto px-6 mt-12">
        <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
        <p className="text-gray-700 mb-4">
          Our vision is to bridge the gap between the talent and hubs of the technology as a Managed
          Services in IT Infrastructure. Vincentio is going to multiply its strength and leading
          towards another leap with its development division to become a leading Cloud Services
          Provider Company in India.
        </p>

        <img
          src="/images/vision.jpg"
          alt="Our Vision"
          className="rounded-xl shadow-lg max-w-md"
        />
      </div>

      {/* Team Section */}
      <div className="bg-gray-100 py-12 mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white p-6 shadow rounded-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col items-center group"
            >
              <div className="w-28 h-28 rounded-full overflow-hidden mb-4 transition-transform duration-500 group-hover:scale-110">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="font-semibold mb-2">{member.name}</p>

              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <FaLinkedin />
              </a>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default About;
