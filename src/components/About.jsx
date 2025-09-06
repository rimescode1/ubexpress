import { CheckCircle, Users, Award, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Professional logistics experts with years of industry experience",
    },
    {
      icon: Award,
      title: "Quality Service",
      description:
        "Award-winning service quality recognized by industry leaders",
    },
    {
      icon: Zap,
      title: "Fast Processing",
      description: "Quick turnaround times with efficient processing systems",
    },
  ];

  const achievements = [
    "ISO 9001:2015 Certified",
    "Green Logistics Initiative",
    "Advanced Tracking Technology",
    "Global Network Coverage",
  ];

  return (
    <section id="about" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6">
                About <span className="text-yellow-500">UBEXPRESS</span>
              </h2>
              <p className="text-lg text-gray-100 mb-6">
                With over a decade of experience in the logistics industry,
                UBEXPRESS has established itself as a leading provider of
                comprehensive shipping and supply chain solutions. We pride
                ourselves on delivering exceptional service that exceeds
                customer expectations.
              </p>
              <p className="text-lg text-gray-100">
                Our commitment to innovation, reliability, and customer
                satisfaction has made us the preferred choice for businesses of
                all sizes across the globe.
              </p>
            </div>

            {/* Achievements */}
            {/* <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">
                Our Achievements
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-ub-red flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div> */}

            {/* <button className="btn-primary">Learn More About Us</button> */}
          </div>

          {/* Features */}
          <div className="space-y-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="bg-ub-yellow p-3 rounded-lg">
                      <IconComponent className="h-6 w-6 text-gray-900" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
