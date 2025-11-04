import Link from 'next/link';

export default function CartridgeCases() {
  const cartridgeCases = [
    {
      name: '23MM Cartridge Case',
      description:
        'High-performance cartridge case for 23mm applications with anti-flying aircraft and armoured aerial vehicles capabilities',
      specifications: [
        'Anti-flying aircraft engagement',
        'Armoured aerial vehicles targeting',
        'Light armoured vehicles defense',
        'Enemy protection systems',
      ],
      technicalSpecs: {
        caliber: '23mm',
        material: 'High-grade steel alloy',
        finish: 'Corrosion-resistant coating',
        applications: 'Air defense systems',
      },
    },
    {
      name: '30MM Cartridge Case',
      description:
        '30mm cartridge case with anti-armour capabilities and advanced ballistic performance for versatile engagement scenarios',
      specifications: [
        'Anti-armour penetration',
        'All defense systems compatibility',
        'Naval point defense applications',
        'Light armoured vehicle suspension',
      ],
      technicalSpecs: {
        caliber: '30mm',
        material: 'Precision-forged steel',
        finish: 'Military-grade coating',
        applications: 'Multi-role combat systems',
      },
    },
    {
      name: '40MM Cartridge Case',
      description:
        '40mm cartridge case supporting high-velocity armor-piercing and programmable airburst munitions for enhanced battlefield effectiveness',
      specifications: [
        'HVG suppression capabilities',
        'Anti-vehicle engagement',
        'Close range naval defense',
        'Programmable airburst capability',
      ],
      technicalSpecs: {
        caliber: '40mm',
        material: 'Advanced alloy composition',
        finish: 'Enhanced durability coating',
        applications: 'Grenade launcher systems',
      },
    },
    {
      name: '105MM Cartridge Case',
      description:
        '105mm cartridge case for medium-range artillery applications with superior armor penetration capabilities and extended range performance',
      specifications: [
        'Superior armor penetration',
        'Long-range artillery support',
        'Tank main gun compatibility',
        'Artillery fire support systems',
      ],
      technicalSpecs: {
        caliber: '105mm',
        material: 'Heavy-duty steel construction',
        finish: 'Weather-resistant treatment',
        applications: 'Medium artillery systems',
      },
    },
    {
      name: '155MM Cartridge Case',
      description:
        '155mm cartridge case for long-range artillery systems with high explosive capabilities and precision targeting for maximum battlefield impact',
      specifications: [
        'Long-range artillery precision',
        'High explosive payload capacity',
        'Advanced targeting systems',
        'Extended range capabilities',
      ],
      technicalSpecs: {
        caliber: '155mm',
        material: 'Premium steel alloy',
        finish: 'Military specification coating',
        applications: 'Heavy artillery systems',
      },
    },
  ];

  const cartridgeImageMap: Record<string, string> = {
    '23MM Cartridge Case': '/images/services/cartridge-cases/23mm.svg',
    '30MM Cartridge Case': '/images/services/cartridge-cases/30mm.svg',
    '40MM Cartridge Case': '/images/services/cartridge-cases/40mm.svg',
    '105MM Cartridge Case': '/images/services/cartridge-cases/105mm.svg',
    '155MM Cartridge Case': '/images/services/cartridge-cases/155mm.svg',
  };

  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <section className="relative h-96 bg-gradient-to-r from-secondary-900 via-primary-800 to-secondary-800 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
              <span className="text-white">Cartridge Cases</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Cartridge Cases
            </h1>
            <p className="text-xl text-secondary-200 max-w-2xl">
              Precision-manufactured cartridge cases for various calibers,
              designed for superior performance in defense applications with
              uncompromising quality and reliability.
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
                Advanced Cartridge Case Manufacturing
              </h2>
              <p className="text-secondary-700 mb-6 leading-relaxed">
                Our cartridge cases are manufactured using state-of-the-art
                precision forging and machining processes, ensuring consistent
                quality and performance across all calibers. Each case undergoes
                rigorous testing to meet the highest defense standards.
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
                    Precision forging and CNC machining for tight tolerances
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
                    Advanced metallurgy for superior strength and durability
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
                    Comprehensive quality control and testing protocols
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image Placeholder */}
            <div className="bg-gradient-to-br from-secondary-100 to-primary-100 rounded-2xl p-8 h-80 flex items-center justify-center">
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
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <p className="text-secondary-600">
                  Cartridge Case Manufacturing Process
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="bg-secondary-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Our Cartridge Case Range
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Comprehensive range of precision-manufactured cartridge cases for
              various defense applications
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cartridgeCases.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-secondary-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Product Image */}
                <div className="h-48 bg-white flex items-center justify-center">
                  <img
                    src={cartridgeImageMap[product.name] ?? '/images/services/cartridge-cases/23mm.svg'}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain p-4 drop-shadow-sm"
                    loading="lazy"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                    {product.name}
                  </h3>
                  <p className="text-secondary-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Technical Specifications */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                        Technical Specs:
                      </h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-secondary-600 text-sm">
                            Caliber:
                          </span>
                          <span className="text-secondary-900 text-sm font-medium">
                            {product.technicalSpecs.caliber}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-secondary-600 text-sm">
                            Material:
                          </span>
                          <span className="text-secondary-900 text-sm font-medium">
                            {product.technicalSpecs.material}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-secondary-600 text-sm">
                            Finish:
                          </span>
                          <span className="text-secondary-900 text-sm font-medium">
                            {product.technicalSpecs.finish}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-secondary-600 text-sm">
                            Applications:
                          </span>
                          <span className="text-secondary-900 text-sm font-medium">
                            {product.technicalSpecs.applications}
                          </span>
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

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-700 text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Custom Cartridge Case Solutions?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Our engineering team can develop custom cartridge cases to meet your
            specific requirements and performance criteria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-secondary-900 font-semibold py-3 px-8 rounded-lg hover:bg-secondary-100 transition-colors duration-200"
            >
              Contact Engineering Team
            </Link>
            <Link
              href="/services"
              className="border border-white/30 text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
