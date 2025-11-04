import Link from 'next/link';

export default function CombustibleCartridgeCases() {
  const products = [
    {
      name: 'Hot Forging',
      fullName: 'Closedâ€‘die forging for structural parts',
      description:
        'Closedâ€‘die forging with controlled heating and press capacity for highâ€‘strength preforms and housings.',
      specifications: [
        'Hydraulic presses (capacity per program)',
        'Induction heating & temperature control',
        'Trimming presses & flash removal',
        'Metallurgical validation',
      ],
      technicalSpecs: {
        caliber: 'N/A',
        type: 'Forging',
        material: 'Steels, aluminium, titanium',
        velocity: 'N/A',
        applications: 'Casings, carriers, rings',
      },
    },
    {
      name: 'Heat Treatment',
      fullName: 'Quench, temper, and stress relief',
      description:
        'Batch furnaces with quench tanks and tempering ovens for mechanical properties and dimensional stability.',
      specifications: [
        'Quench tanks (oil/water, per spec)',
        'Tempering ovens with profiles',
        'Hardness & microstructure checks',
        'Process traceability',
      ],
      technicalSpecs: {
        caliber: 'N/A',
        type: 'Heat Treatment',
        material: 'As specified',
        velocity: 'N/A',
        applications: 'Loadâ€‘bearing parts',
      },
    },
    {
      name: 'Material Testing',
      fullName: 'Mechanical & metallurgical testing',
      description:
        'Tensile, hardness, impact, and microstructure analysis to validate forging and heat treatment outcomes.',
      specifications: [
        'Tensile & hardness testing',
        'Impact & toughness checks',
        'Microstructure evaluation',
        'Certification & reporting',
      ],
      technicalSpecs: {
        caliber: 'N/A',
        type: 'Testing',
        material: 'Lab specimens',
        velocity: 'N/A',
        applications: 'Qualification & production',
      },
    },
  ];

  const combustibleImageMap: Record<string, string> = {
    'Hot Forging': '/images/services/forging/hot-forging.svg',
    'Heat Treatment': '/images/services/forging/heat-treatment.svg',
    'Material Testing': '/images/services/forging/material-testing.svg',
  };

  const manufacturingProcess = [
    { step: '1', title: 'Forge', description: 'Blank production under controlled heat' },
    { step: '2', title: 'Trim & Rough', description: 'Flash removal and nearâ€‘net shaping' },
    { step: '3', title: 'Heat Treat', description: 'Quench & temper to target properties' },
    { step: '4', title: 'Validate', description: 'Hardness, microstructure, and reporting' },
  ];

  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary-900 via-secondary-800 to-primary-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
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
              <span className="text-white">Forging & Heat Treatment</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Forging & Heat Treatment
            </h1>
            <p className="text-xl text-secondary-200 max-w-2xl">
              Hot/cold forging, trimming, and standardized heat treatment for
              defence components with validated mechanical properties.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section with Left/Right Layout */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Right Image Placeholder */}
            <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8 h-80 flex items-center justify-center order-2 lg:order-1">
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <p className="text-secondary-600">FSAPDS & HESH Technology</p>
              </div>
            </div>

            {/* Left Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                Forging & Heat Treatment Capabilities
              </h2>
              <p className="text-secondary-700 mb-6 leading-relaxed">
                From blanks to heat-treated parts, our metallurgy controls, press
                capacity, and testing ensure consistent properties and
                traceability across batches.
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
                    Complete combustion technology eliminates barrel residue
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
                    Advanced FSAPDS and HESH projectile integration
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
                    Optimized for main battle tank applications
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process Section */}
      <section className="bg-secondary-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Manufacturing Process
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Our specialized manufacturing process ensures the highest quality
              combustible cartridge cases
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {manufacturingProcess.map((process, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-secondary-200 text-center hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-primary-600 text-white rounded-lg flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-secondary-600 text-sm leading-relaxed">
                  {process.description}
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
              Product Range
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Comprehensive range of combustible cartridge case solutions for
              modern warfare
            </p>
          </div>

          <div className="space-y-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-secondary-50 to-primary-50 rounded-2xl border border-secondary-200 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Product Image */}
                  <div className="lg:col-span-1 h-64 lg:h-auto">
                    <img
                      src={combustibleImageMap[product.name] ?? '/images/services/combustible/fsapds.svg'}
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

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-secondary-700 to-primary-600 text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">
            Advanced Ammunition Solutions
          </h2>
          <p className="text-xl text-secondary-100 mb-8 max-w-2xl mx-auto">
            Partner with us for cutting-edge combustible cartridge case
            technology and comprehensive ammunition solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-secondary-900 font-semibold py-3 px-8 rounded-lg hover:bg-secondary-100 transition-colors duration-200"
            >
              Discuss Requirements
            </Link>
            <Link
              href="/services"
              className="border border-white/30 text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              Explore All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
