"use client";
import axios from "axios";
import { Truck, Plane, Ship, Warehouse, Globe, Clock } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const Services = () => {
  const [trackingID, setTrackingID] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isData, setIsData] = useState(false);

  console.log(data, "SKLSKSK");

  const handleSubmitTracking = async () => {
    try {
      const data = await axios.get(`/api/dhl?id=${trackingID}&service=express`);
      setData(data.data.data.shipments[0]);
      setIsData(true);
    } catch (error) {
      console.log();
    }
  };

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
      <div className="grid md:grid-cols-2 grid-cols-1 section-padding">
        <div>
          <Image src="/bike.png" height={300} width={500} alt="Delivery Bike" />
        </div>
        <div className="bg-gradient-to-br from-yellow-500 to-red-700 rounded-2xl p-8 text-white">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Track Your Shipment</h3>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <input
                onChange={(e) => setTrackingID(e.target.value)}
                value={trackingID}
                type="text"
                placeholder="Enter tracking number"
                className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 text-black placeholder-white/70 focus:outline-none focus:border-ub-yellow"
              />
              <button
                onClick={handleSubmitTracking}
                className="w-full mt-4 bg-yellow-500 text-gray-900 font-semibold py-3 rounded-lg hover:bg-red-700 hover:text-white transition-colors"
              >
                Track Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {isData && (
        <div className="max-w-md  p-4 border border-black/5">
          <Accordion
            type="single"
            collapsible
            className=" w-full text-black"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>Destination</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>Location: {data.destination?.address?.addressLocality}</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Shipping Details</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>Estimated Delivery Date: {data.estimatedTimeOfDelivery}</p>
                <p>
                  Estimated Delivery Remark:
                  {data.estimatedTimeOfDeliveryRemark}
                </p>
                <p>{data.proofOfDeliverySignedAvailable}</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Shipments Events</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                {data?.events?.map((item, index) => (
                  <div className=" border p-2 rounded-sm " key={index}>
                    <div className=" flex flex-row items-center my-1 gap-3 bg-amber-500 w-fit px-3 rounded-[4px]">
                      <p>{new Date(item.timestamp).toLocaleDateString()}</p>
                      <p>{new Date(item.timestamp).toLocaleTimeString()}</p>
                    </div>

                    <p>{item.description}</p>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      )}

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
