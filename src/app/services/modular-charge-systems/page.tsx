import Link from 'next/link';

export default function ModularChargeSystems() {
  const products = [
    {
      name: 'BMCS - 155MM M91',
      fullName: 'Bi-Modular Charge System - 155MM M91',
      description:
        'Advanced bi-modular charge system for 155mm artillery with scalable range control and superior ballistic performance, designed for modern artillery systems requiring precision and flexibility.',
      specifications: [
        'Scalable range control capability',
        'Superior ballistic performance',
        'Modular charge configuration',
        '155mm artillery compatibility',
      ],
      technicalSpecs: {
        caliber: '155mm',
        system: 'Bi-Modular (M91)',
        range: 'Variable (5-30+ km)',
        charges: 'Multiple incremental charges',
        compatibility: 'NATO standard artillery',
      },
    },
    {
      name: 'BMCS - 155MM M92',
      fullName: 'Bi-Modular Charge System - 155MM M92',
      description:
        'Enhanced 155mm M92 bi-modular charge system offering improved range capabilities and advanced ballistic characteristics for next-generation artillery applications.',
      specifications: [
        'Enhanced range capabilities',
        'Advanced ballistic characteristics',
        'Next-generation compatibility',
        'Improved accuracy and precision',
      ],
      technicalSpecs: {
        caliber: '155mm',
        system: 'Bi-Modular (M92)',
        range: 'Extended (8-40+ km)',
        charges: 'Advanced modular configuration',
        compatibility: 'Modern artillery systems',
      },
    },
  ];

  const bmcsImageMap: Record<string, string> = {
    'BMCS - 155MM M91': '/images/services/modular/bmcs.svg',
    'BMCS - 155MM M92': '/images/services/modular/bmcs.svg',
  };

  const advantages = [
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
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: 'Scalable Range Control',
      description:
        'Modular design allows precise range adjustment for different tactical requirements',
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: 'Superior Ballistics',
      description:
        'Advanced propellant technology delivers consistent performance and accuracy',
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
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: 'Modular Design',
      description:
        'Flexible configuration options for various mission requirements and artillery systems',
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
      title: 'NATO Compatibility',
      description:
        'Designed to meet NATO standards and integrate with allied artillery systems',
    },
  ];

  const applications = [
    'Self-propelled howitzers',
    'Towed artillery systems',
    'Multiple Launch Rocket Systems (MLRS)',
    'Naval gun systems',
    'Coastal defense artillery',
    'Field artillery battalions',
  ];

  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <section className="relative h-96 bg-gradient-to-r from-secondary-800 via-primary-900 to-secondary-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z' fill-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10 container-custom h-full flex items-center">
          <div className="text-white">
            <nav className="text-sm mb-4">
              <Link href="/" className="text-primary-300 hover:text-white">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link
                href="/services"
                className="text-primary-300 hover:text-white"
              >
                Services
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">Modular Charge Systems</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Modular Charge Systems
            </h1>
            <p className="text-xl text-secondary-200 max-w-2xl">
              Advanced bi-modular charge systems for 155mm artillery, delivering
              scalable range control and superior ballistic performance for
              modern warfare applications.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section with Right/Left Layout */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                Bi-Modular Charge Technology
              </h2>
              <p className="text-secondary-700 mb-6 leading-relaxed">
                Our Bi-Modular Charge Systems (BMCS) represent cutting-edge
                artillery technology, providing unprecedented flexibility in
                range control and ballistic performance. These systems are
                designed to meet the demanding requirements of modern artillery
                operations.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
                  <p className="text-secondary-700">
                    Variable range control from 5km to 40+ km
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
                  <p className="text-secondary-700">
                    Modular configuration for tactical flexibility
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
                  <p className="text-secondary-700">
                    NATO standard compatibility and integration
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image Placeholder */}
            <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <p className="text-secondary-600">BMCS Artillery System</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="bg-secondary-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              System Advantages
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Key benefits of our modular charge systems for modern artillery
              operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-sm border border-secondary-200 hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-primary-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-secondary-600 text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              BMCS Product Range
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Advanced 155mm bi-modular charge systems for diverse artillery
              applications
            </p>
          </div>

          <div className="space-y-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl border border-primary-200 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Product Image */}
                  <div className="lg:col-span-1 h-64 lg:h-auto">
                    <img
                      src={bmcsImageMap[product.name] ?? '/images/services/modular/bmcs.svg'}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="lg:col-span-2 p-8">
                    <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-primary-600 font-medium mb-4">
                      {product.fullName}
                    </p>
                    <p className="text-secondary-700 mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-semibold text-secondary-900 mb-3">
                          Key Features:
                        </h4>
                        <ul className="space-y-2">
                          {product.specifications.map((spec, specIndex) => (
                            <li
                              key={specIndex}
                              className="flex items-start space-x-2"
                            >
                              <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-secondary-700 text-sm">
                                {spec}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-secondary-900 mb-3">
                          Technical Specifications:
                        </h4>
                        <div className="space-y-2">
                          {Object.entries(product.technicalSpecs).map(
                            ([key, value]) => (
                              <div key={key} className="flex justify-between">
                                <span className="text-secondary-600 text-sm capitalize">
                                  {key.replace(/([A-Z])/g, ' $1')}:
                                </span>
                                <span className="text-secondary-900 text-sm font-medium">
                                  {value}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="bg-secondary-50 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                Artillery Applications
              </h2>
              <p className="text-secondary-700 mb-8 leading-relaxed">
                Our modular charge systems are compatible with a wide range of
                artillery platforms, providing tactical flexibility and
                operational effectiveness across various military applications.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {applications.map((application, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0"></div>
                    <span className="text-secondary-700">{application}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-12 h-12 text-white"
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
                </div>
                <p className="text-secondary-600">
                  Artillery Platform Integration
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-700 text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">
            Advanced Artillery Solutions
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Enhance your artillery capabilities with our cutting-edge modular
            charge systems and comprehensive technical support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-secondary-900 font-semibold py-3 px-8 rounded-lg hover:bg-secondary-100 transition-colors duration-200"
            >
              Contact Artillery Specialists
            </Link>
            <Link
              href="/services"
              className="border border-white/30 text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              View All Systems
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
