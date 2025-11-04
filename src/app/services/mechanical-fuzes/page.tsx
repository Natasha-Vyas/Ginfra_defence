import Link from 'next/link';

export default function MechanicalFuzes() {
  const fuzeTypes = [
    {
      name: 'Point Detonating (PD) Fuze',
      calibers: '23MM, 30MM, 40MM',
      description:
        'Precision point detonating fuzes designed for immediate impact detonation with advanced safety mechanisms and reliable performance across various calibers.',
      specifications: [
        'Immediate impact detonation',
        'Advanced safety mechanisms',
        'Multi-caliber compatibility',
        'Reliable performance under extreme conditions',
      ],
      technicalSpecs: {
        activation: 'Impact triggered',
        safety: 'Multiple safety systems',
        environment: 'All weather capable',
        reliability: '99.9% activation rate',
      },
    },
    {
      name: 'Time Proximity/Timed Fuze',
      calibers: '23MM, 30MM, 40MM',
      description:
        'Advanced timing fuzes with proximity detection capabilities, offering precise detonation control for maximum effectiveness against various target types.',
      specifications: [
        'Precision timing control',
        'Proximity detection capability',
        'Variable detonation settings',
        'Enhanced target effectiveness',
      ],
      technicalSpecs: {
        activation: 'Time/Proximity based',
        timing: 'Programmable delays',
        detection: 'Proximity sensors',
        accuracy: '±0.1 second precision',
      },
    },
    {
      name: 'Proximity/Timed Fuze',
      calibers: 'Various calibers',
      description:
        'Sophisticated fuze systems combining proximity detection with timed detonation for optimal performance in diverse combat scenarios and target engagement.',
      specifications: [
        'Dual-mode operation',
        'Proximity and timed functions',
        'Optimal combat performance',
        'Diverse target engagement',
      ],
      technicalSpecs: {
        activation: 'Dual-mode system',
        modes: 'Proximity + Timed',
        range: 'Variable detection range',
        versatility: 'Multi-mission capable',
      },
    },
    {
      name: 'Safety & Arming Device',
      calibers: 'All supported calibers',
      description:
        'Critical safety and arming mechanisms ensuring secure handling, transport, and reliable activation when required, meeting the highest safety standards.',
      specifications: [
        'Secure handling and transport',
        'Reliable activation system',
        'Highest safety standards',
        'Fail-safe mechanisms',
      ],
      technicalSpecs: {
        safety: 'Multiple redundant systems',
        arming: 'Sequential arming process',
        transport: 'Safe handling certified',
        standards: 'Military specification compliant',
      },
    },
  ];

  const fuzeImageMap: Record<string, string> = {
    'Point Detonating (PD) Fuze': '/images/services/fuzes/pd.svg',
    'Time Proximity/Timed Fuze': '/images/services/fuzes/time-proximity.svg',
    'Proximity/Timed Fuze': '/images/services/fuzes/proximity-timed.svg',
    'Safety & Arming Device': '/images/services/fuzes/safety-arming.svg',
  };

  const internalComponents = [
    {
      name: 'Firing Mechanism',
      description:
        'Precision-engineered firing mechanisms for reliable initiation',
    },
    {
      name: 'Safety Systems',
      description: 'Multiple redundant safety systems for secure operation',
    },
    {
      name: 'Timing Circuits',
      description: 'Advanced electronic timing circuits for precise control',
    },
    {
      name: 'Proximity Sensors',
      description: 'High-sensitivity proximity detection systems',
    },
    {
      name: 'Arming Mechanisms',
      description: 'Sequential arming systems for operational safety',
    },
    {
      name: 'Detonation Systems',
      description: 'Reliable detonation systems for consistent performance',
    },
  ];

  const qualityFeatures = [
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
      title: 'Safety First',
      description:
        'Multiple redundant safety systems ensure secure handling and operation',
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
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: 'Precision Timing',
      description: 'Advanced timing mechanisms for accurate detonation control',
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
      title: 'High Reliability',
      description:
        '99.9% activation rate with consistent performance under extreme conditions',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary-800 via-secondary-900 to-primary-800 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`,
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
              <span className="text-white">Mechanical Fuzes</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Mechanical Fuzes & Components
            </h1>
            <p className="text-xl text-secondary-200 max-w-2xl">
              Precision mechanical fuzes for various calibers with advanced
              safety and arming mechanisms, designed for reliable performance in
              critical defense applications.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section with Right/Left Layout */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Right Image Placeholder */}
            <div className="bg-gradient-to-br from-secondary-100 to-primary-100 rounded-2xl p-8 h-80 flex items-center justify-center order-2 lg:order-1">
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="text-secondary-600">Precision Fuze Mechanisms</p>
              </div>
            </div>

            {/* Left Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                Advanced Fuze Technology
              </h2>
              <p className="text-secondary-700 mb-6 leading-relaxed">
                Our mechanical fuzes represent the pinnacle of precision
                engineering, combining advanced safety mechanisms with reliable
                performance. Each fuze is manufactured to exacting standards and
                undergoes comprehensive testing to ensure mission-critical
                reliability.
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
                    Multi-caliber compatibility (23mm, 30mm, 40mm)
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
                    Advanced safety and arming mechanisms
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
                    99.9% reliability under extreme conditions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Features Section */}
      <section className="bg-secondary-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Quality & Reliability Features
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Our mechanical fuzes are engineered for maximum safety, precision,
              and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {qualityFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 text-center shadow-sm border border-secondary-200 hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-primary-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fuze Types Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Fuze Types & Specifications
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Comprehensive range of mechanical fuzes for diverse defense
              applications
            </p>
          </div>

          <div className="space-y-8">
            {fuzeTypes.map((fuze, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl border border-primary-200 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
                  {/* Product Image */}
                  <div className="lg:col-span-1 h-64 lg:h-auto">
                    <img
                      src={fuzeImageMap[fuze.name] ?? '/images/services/fuzes/pd.svg'}
                      alt={fuze.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="lg:col-span-3 p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-secondary-900">
                        {fuze.name}
                      </h3>
                      <span className="text-primary-600 font-semibold bg-primary-100 px-3 py-1 rounded-full text-sm mt-2 md:mt-0">
                        {fuze.calibers}
                      </span>
                    </div>
                    <p className="text-secondary-700 mb-6 leading-relaxed">
                      {fuze.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-semibold text-secondary-900 mb-3">
                          Key Features:
                        </h4>
                        <ul className="space-y-2">
                          {fuze.specifications.map((spec, specIndex) => (
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
                          {Object.entries(fuze.technicalSpecs).map(
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

      {/* Internal Components Section */}
      <section className="bg-secondary-50 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                Internal Components
              </h2>
              <p className="text-secondary-700 mb-8 leading-relaxed">
                Our fuzes incorporate sophisticated internal components
                engineered for precision, reliability, and safety. Each
                component is manufactured to the highest standards and undergoes
                rigorous quality control testing.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {internalComponents.map((component, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-4 border border-secondary-200"
                  >
                    <h4 className="font-semibold text-secondary-900 mb-2">
                      {component.name}
                    </h4>
                    <p className="text-secondary-600 text-sm">
                      {component.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8 h-96 flex items-center justify-center">
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
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <p className="text-secondary-600">
                  Internal Component Assembly
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-secondary-700 to-primary-600 text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Precision Fuze Solutions</h2>
          <p className="text-xl text-secondary-100 mb-8 max-w-2xl mx-auto">
            Partner with us for advanced mechanical fuze technology and
            comprehensive engineering support for your defense applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-secondary-900 font-semibold py-3 px-8 rounded-lg hover:bg-secondary-100 transition-colors duration-200"
            >
              Contact Fuze Specialists
            </Link>
            <Link
              href="/services"
              className="border border-white/30 text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
