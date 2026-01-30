import { Link } from "react-router-dom";

const technologies = [
  {
    title: "Virtualization",
    desc: "VMware, KVM, Hyper-V",
    icon: "/images/v.png",
    link: "/services/virtualization",
  },
  {
    title: "Monitoring",
    desc: "Nagios, Zabbix, Prometheus",
    icon: "/images/m.png",
    link: "/services/monitoring",
  },
  {
    title: "OpenStack",
    desc: "Public & Private Cloud",
    icon: "/images/ops.png",
    link: "/services/openstack",
  },
  {
    title: "Containers",
    desc: "Docker, LXD, LXC",
    icon: "/images/container.png",
    link: "/services/containers",
  },
  {
    title: "Container Orchestration",
    desc: "Kubernetes, Rancher, Docker Swarm, GKE",
    icon: "/images/Orchastration.png",
    link: "/services/container-orchestration",
  },
  {
    title: "CI/CD",
    desc: "Jenkins, GitLab, Bamboo",
    icon: "/images/CI.png",
    link: "/services/ci-cd",
  },
  {
    title: "DevOps",
    desc: "Ansible, Git, Terraform",
    icon: "/images/devops.png",
    link: "/services/devops",
  },
  {
    title: "Cloud Computing",
    desc: "AWS, GCP, Azure",
    icon: "/images/cloud.png",
    link: "/services/cloud-computing",
  },
];

export default function TechnologiesSection() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <Link
              key={index}
              to={tech.link}
              className="group flex items-center gap-4 bg-white p-6 rounded-xl border border-blue-200 transition-all duration-300 hover:bg-blue-100 hover:shadow-lg"
            >
              <img
                src={tech.icon}
                alt={tech.title}
                className="w-12 h-12"
              />

              <div>
                <h3 className="font-semibold text-lg text-gray-800 group-hover:text-blue-800">
                  {tech.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {tech.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
