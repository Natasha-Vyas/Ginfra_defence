import Link from 'next/link';

const ValueProposition = () => {
  const propositions = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: 'End-to-End Capability',
      description:
        'Complete manufacturing chain from metallurgy through precision machining, electronics integration, assembly, to comprehensive testing',
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      title: 'Modular Approach',
      description:
        'Stage-wise implementation minimizes risk and enables targeted Transfer of Technology (ToT) per stage with measurable milestones',
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: 'Rapid Qualification',
      description:
        'Designed for fast defence certifications and high-volume, mission-critical supply with comprehensive quality assurance',
    },
  ];

  const benefits = [
    'Reduced lead times through integrated manufacturing',
    'Complete traceability from raw materials to finished products',
    'Defence-grade quality control and testing protocols',
    'Scalable production capacity for high-volume requirements',
    'Technology transfer partnerships with measurable milestones',
    'Compliance with international defence standards',
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Our Value Proposition
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Delivering mission-critical manufacturing solutions with
            uncompromising quality, precision, and reliability for defence and
            aerospace applications.
          </p>
        </div>

        {/* Main Value Props */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {propositions.map((prop, index) => (
            <div
              key={index}
              className="text-center p-8 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl border border-primary-100"
            >
              <div className="w-16 h-16 bg-primary-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                {prop.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">
                {prop.title}
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-6">
              Why Choose Ginfra Dynamic?
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-secondary-700 leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-secondary-900 to-primary-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-secondary-200 mb-6">
              Contact our technical team for pilot trials, ToT discussions, or
              procurement enquiries. We're ready to support your
              mission-critical manufacturing requirements.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-primary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm">Rapid response within 24 hours</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-primary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm">Technical consultation included</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-primary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7"
                  />
                </svg>
                <span className="text-sm">Flexible engagement models</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Link
                href="/contact"
                className="bg-white text-secondary-900 font-semibold py-3 px-6 rounded-lg hover:bg-secondary-100 transition-colors duration-200 text-center"
              >
                Contact Us
              </Link>
              <Link
                href="/services"
                className="border border-white/30 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-colors duration-200 text-center"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
