import { Truck, Plane, Ship, Warehouse, Globe, Clock } from "lucide-react";

const Services = async () => {
  const services = [
    {
      icon: Truck,
      title: "Ground Shipping",
      description:
        "Reliable ground transportation for domestic deliveries with real-time tracking.",
      features: [
        "Door-to-door delivery",
        "Real-time tracking",
        "Flexible scheduling",
      ],
    },
    {
      icon: Plane,
      title: "Air Freight",
      description:
        "Fast international shipping via air for urgent and time-sensitive deliveries.",
      features: ["Express delivery", "Global coverage", "Priority handling"],
    },
    {
      icon: Ship,
      title: "Ocean Freight",
      description:
        "Cost-effective sea freight solutions for large volume international shipments.",
      features: [
        "Bulk shipping",
        "Container services",
        "Port-to-port delivery",
      ],
    },
    {
      icon: Warehouse,
      title: "Warehousing",
      description:
        "Secure storage solutions with inventory management and distribution services.",
      features: ["Climate controlled", "Inventory management", "24/7 security"],
    },
    {
      icon: Globe,
      title: "Global Logistics",
      description:
        "End-to-end supply chain management for international business operations.",
      features: [
        "Supply chain optimization",
        "Customs clearance",
        "Multi-modal transport",
      ],
    },
    {
      icon: Clock,
      title: "Same Day Delivery",
      description:
        "Ultra-fast same-day delivery service for urgent local and regional shipments.",
      features: ["Same-day delivery", "Emergency service", "Local coverage"],
    },
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-ub-red">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive logistics solutions tailored to meet your business
            needs. From local delivery to global supply chain management.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-100 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="bg-ub-red p-4 rounded-lg w-fit mb-6 group-hover:bg-ub-yellow transition-colors duration-300">
                  <IconComponent className="h-8 w-8 text-yellow-700 group-hover:text-red-700" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <div className="w-2 h-2 bg-ub-yellow rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* <button className="mt-6 font-semibold text-red-700 transition-colors">
                  Learn More →
                </button> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
