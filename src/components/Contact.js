"use client";

import { MapPin, Phone, Mail, Clock, PhoneCallIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

const WHATSAPP_NUMBER = "2349063359303";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, service, message } = formData;

    const text = [
      "*New Inquiry from Website*",
      "",
      `*Name:* ${firstName} ${lastName}`,
      `*Email:* ${email}`,
      `*Service:* ${service}`,
      "",
      "*Message:*",
      message,
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
    );

    toast.success("Opening WhatsApp...");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      service: "",
      message: "",
    });
  };
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Road 5, suite K50, Ikota shopping complex, Lekki-ajah, Lagos"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+234-906-3359-303"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["ubxexpress@outlook.com"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Mon - Fri: 8:00 AM - 6:00 PM",
        "Sat: 9:00 AM - 4:00 PM",
        "Sunday closed (only pickup done)",
      ],
    },
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In <span className="text-red-700 outline-0">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to streamline your logistics? Contact us today for a
            personalized quote and discover how we can optimize your supply
            chain.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-ub-gray rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 text-black outline-0 focus:border-transparent"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 text-black outline-0 focus:border-transparent"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 text-black outline-0 focus:border-transparent"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Needed
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 text-black outline-0 focus:border-transparent"
                  required
                >
                  <option value="">Select a service</option>
                  <option>Express Shipping</option>
                  <option>Ground Shipping</option>
                  <option>Air Freight</option>
                  <option>Ocean Freight</option>
                  <option>Warehousing</option>
                  <option>Global Logistics</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 text-black outline-0 focus:border-transparent"
                  placeholder="Tell us about your logistics needs..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <p className="text-gray-600 mb-8">
                We&apos;re here to help! Reach out to us through any of the
                following channels, and our team will get back to you promptly.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-red-700 text-black outline-0 p-3 rounded-lg">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="bg-ub-yellow rounded-xl p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Need Immediate Assistance?
              </h4>
              <p className="text-gray-700 mb-4">
                Our customer support team is available 24/7 to help with urgent
                requests.
              </p>
              <Link
                href="https://wa.me/09063359303"
                target="_blank"
                className="btn-primary"
              >
                Chat Us: +234-906-3359-303
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
