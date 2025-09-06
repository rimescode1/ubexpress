"use client";
import { useState } from "react";
import { Menu, X, Truck, Phone, Mail } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-1">
          {/* Logo */}
          <div className="flex items-center">
            <Image src="/logo.png" width={60} height={60} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-ub-red font-medium transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            <button className="btn-primary">Get Quote</button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-ub-red"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-ub-red font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="btn-primary w-full">Get Quote</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
