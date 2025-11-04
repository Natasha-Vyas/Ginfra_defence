import Link from 'next/link';

export default function CartridgeCases() {
  const cartridgeCases = [
    {
      name: '5-Axis Milling',
      description:
        'Complex geometries, pocketing, and contouring with multi-axis CAM and in-process probing.',
      specifications: [
        '4/5â€‘axis machining cells',
        'Â±0.005 mm tolerance',
        'Toolpath simulation & verification',
        'Inâ€‘process measurement',
      ],
      technicalSpecs: {
        caliber: 'N/A',
        material: 'Aluminium, steels, titanium, nickel alloys',
        finish: 'Ra â‰¤ 0.8 Î¼m achievable',
        applications: 'Housings, carriers, precision fixtures',
      },
    },
    {
      name: 'CNC Turning',
      description:
        'High-precision turning for shafts, rings, and cylindrical components, including live tooling.',
      specifications: [
        'Multiâ€‘turret lathes',
        'Concentricity controls',
        'Threading & grooving',
        'Batch SPC monitoring',
      ],
      technicalSpecs: {
        caliber: 'N/A',
        material: 'All ferrous/nonâ€‘ferrous',
        finish: 'Controlled surface roughness',
        applications: 'Bushings, adaptors, collars',
      },
    },
    {
      name: 'Complex Bores & Threads',
      description:
        'Precision bores, threads, and features for critical assemblies and safety interfaces.',
      specifications: [
        'GD&T conformance',
        'Custom thread forms',
        'Bore alignment checks',
        'CMM validation',
      ],
      technicalSpecs: {
        caliber: 'N/A',
        material: 'Hardened steels & alloys',
        finish: 'Honing options available',
        applications: 'Safety & arming interfaces',
      },
    },
    {
      name: 'Tight Tolerance Finishing',
      description:
        'Final finishing operations ensuring dimensional accuracy and repeatability with full traceability.',
      specifications: [
        'Fine boring & reaming',
        'Flatness & parallelism control',
        'Lot-wise serialization',
        '100% inspection on CTQs',
      ],
      technicalSpecs: {
        caliber: 'N/A',
        material: 'As per drawing',
        finish: 'Surface finishing per spec',
        applications: 'Assemblies, jigs, fixtures',
      },
    },
    {
      name: 'Prototyping & Small Batch',
      description:
        'Rapid prototypes and pilot lots for qualification and trials with full reporting.',
      specifications: [
        '100â€“500 unit pilot runs',
        'FAI & PPAP documentation',
        'Dimensional reports',
        'Change control & DMR',
      ],
      technicalSpecs: {
        caliber: 'N/A',
        material: 'According to program needs',
        finish: 'Per specification',
        applications: 'Qualification & validation',
      },
    },
  ];

    const cartridgeImageMap: Record<string, string> = {
    '5-Axis Milling': '/images/services/cnc/5-axis.svg',
    'CNC Turning': '/images/services/cnc/turning.svg',
    'Complex Bores & Threads': '/images/services/cnc/bores-threads.svg',
    'Tight Tolerance Finishing': '/images/services/cnc/finishing.svg',
    'Prototyping & Small Batch': '/images/services/cnc/prototyping.svg',
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
              <span className="text-white">Precision CNC Machining</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Precision CNC Machining
            </h1>
            <p className="text-xl text-secondary-200 max-w-2xl">
              Multi-axis milling and turning for mission-critical components with
              tight tolerances, consistent quality, and full lot traceability.
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
                CNC Machining Capabilities
              </h2>
              <p className="text-secondary-700 mb-6 leading-relaxed">
                Our machining cells combine multi-axis CNC platforms with
                metrology, process control, and documentation, ensuring repeatable
                execution on complex geometries and critical-to-quality features.
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
