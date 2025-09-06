const Stats = () => {
  const stats = [
    { number: "10K+", label: "Happy Customers", suffix: "" },
    { number: "220", label: "Countries Served", suffix: "" },
    { number: "99.9", label: "Delivery Success Rate", suffix: "%" },
    { number: "24/7", label: "Customer Support", suffix: "" },
  ];

  return (
    <section className="bg-ub-red section-padding bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Thousands Worldwide
          </h2>
          <p className="text-xl text-red-100">
            Our numbers speak for our commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">
                {stat.number}
                {stat.suffix}
              </div>
              <div className="text-red-100 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
