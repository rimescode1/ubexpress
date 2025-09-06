import {
  Truck,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Tracking", href: "#tracking" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Express Shipping", href: "#" },
    { name: "Ground Shipping", href: "#" },
    { name: "Air Freight", href: "#" },
    { name: "Ocean Freight", href: "#" },
    { name: "Warehousing", href: "#" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/share/1ZHkeHSoUN/",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/ubxexpress?igsh=cm92aGM0aDQ1NDlm",
    },
  ];

  return (
    <footer className="bg-yellow-500 text-black">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <Truck className="h-8 w-8 text-ub-red mr-3" />
              <span className="text-2xl font-bold">
                UB<span className="text-ub-red">EXPRESS</span>
              </span>
            </div>
            <p className="text-black">
              Your trusted logistics partner delivering excellence across the
              globe with speed, reliability, and precision.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-red-800 p-2 rounded-lg hover:bg-red-700 text-white transition-colors duration-300"
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-black hover:text-red-700 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-black hover:text-red-700 transition-colors duration-300"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>{" "}
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-ub-yellow mt-1 flex-shrink-0" />
                <div className="text-black">
                  <p> Road 5, suite K50,</p>
                  <p>Ikota shopping complex, Lekki-ajah, Lagos</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-ub-yellow flex-shrink-0" />
                <span className="text-black">+234-906-3359-303</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-ub-yellow flex-shrink-0" />
                <span className="text-black">ubxexpress@outlook.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-black/90 text-sm text-center">
            © {new Date().getFullYear()} UBEXPRESS. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* <p className="text-black/90 text-sm text-center">
              © {new Date().getFullYear()} UBEXPRESS. All rights reserved.
            </p> */}
            {/* <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-black/90 hover:text-ub-yellow text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-black/90 hover:text-ub-yellow text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-black/90 hover:text-ub-yellow text-sm transition-colors"
              >
                Cookie Policy
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
