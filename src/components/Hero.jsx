import { ArrowRight, Package, Clock, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = async () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-yellow-500 to-red-500 section-padding  "
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Fast & Reliable
                <span className="text-white block">Logistics Solutions</span>
              </h1>
              <p className="text-xl text-black leading-relaxed">
                Your trusted partner for worldwide shipping, warehousing, and
                supply chain management. We deliver excellence across the globe
                with speed and precision.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* <button className="btn-primary flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button> */}
              <Link href="#tracking" className="btn-primary">
                Track Shipment
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="bg-ub-yellow p-2 rounded-lg">
                  <Package className="h-6 w-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Secure Packaging
                  </h3>
                  <p className="text-sm text-white">100% Safe Delivery</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-ub-yellow p-2 rounded-lg">
                  <Clock className="h-6 w-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Fast Delivery</h3>
                  <p className="text-sm text-white">On-Time Guarantee</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-ub-yellow p-2 rounded-lg">
                  <Shield className="h-6 w-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Insured</h3>
                  <p className="text-sm text-white">Full Coverage</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative w-full top-[4rem] -z-0">
            <Image
              src="/hero.png"
              width={700}
              height={700}
              className=" object-cover w-full"
            />
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-700 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-red-700 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
