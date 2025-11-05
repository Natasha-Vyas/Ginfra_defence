'use client';

import Link from 'next/link';
import CTASection from '@/components/CTASection';
import { useState } from 'react';

export default function ElectronicsServices() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const electronicsServices = [
    {
      name: 'SMT/THT Assembly',
      capabilities: 'ESD-safe lines',
      description:
        'Automated SMT placement and selective soldering, with AOI and process controls for defence electronics.',
      specifications: [
        'SMT + THT capability',
        'Selective soldering',
        'AOI & IPC standards',
        'Traceable materials',
      ],
      technicalSpecs: {
        placement: '0201 components',
        accuracy: '±25μm placement',
        throughput: '50,000 CPH',
        standards: 'IPC-A-610 Class 3',
      },
      icon: '/images/services/electronics/smt.svg',
    },
    {
      name: 'Sensor Integration & Potting',
      capabilities: 'Sealing & protection',
      description:
        'Integration of sensors and harnesses with controlled potting and conformal coating for harsh environments.',
      specifications: [
        'Harness assembly',
        'Potting & encapsulation',
        'Conformal coat',
        'Environmental sealing',
      ],
      technicalSpecs: {
        temperature: '-55°C to +125°C',
        humidity: '95% RH resistant',
        vibration: 'MIL-STD-810 compliant',
        sealing: 'IP67/IP68 rated',
      },
      icon: '/images/services/electronics/potting.svg',
    },
    {
      name: 'Functional Test & Calibration',
      capabilities: 'ICT/Functional',
      description:
        'Electrical, firmware, and functional validation including calibration and burn-in per acceptance plans.',
      specifications: [
        'ICT & boundary scan',
        'Functional ATE',
        'Burn-in profiles',
        'Calibration routines',
      ],
      technicalSpecs: {
        test_coverage: '>95% fault coverage',
        calibration: '±0.1% accuracy',
        burn_in: '168 hour capability',
        traceability: 'Full test records',
      },
      icon: '/images/services/electronics/test-calibration.svg',
    },
    {
      name: 'Documentation & Traceability',
      capabilities: 'Lot & serial control',
      description:
        '100% serialization, device master records, and compliance documentation aligned to defence standards.',
      specifications: [
        'DMR & DHR',
        'Serialization & labels',
        'FAI/PPAP packages',
        'Audit-ready records',
      ],
      technicalSpecs: {
        serialization: '100% unique IDs',
        traceability: 'Component to system',
        retention: '25+ year records',
        compliance: 'AS9100/ISO9001',
      },
      icon: '/images/services/electronics/documentation.svg',
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
      title: 'ESD-Safe Environment',
      description:
        'Controlled ESD-safe manufacturing environment with full traceability and quality controls',
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
      title: 'Advanced Testing',
      description: 'Comprehensive ICT, functional testing, and calibration capabilities',
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
      title: 'Defence Standards',
      description:
        'Full compliance with defence electronics standards and environmental requirements',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary-900 to-primary-900 text-white section-padding overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Geometric shapes */}
          <div className="absolute top-20 left-10 w-24 h-24 bg-green-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-32 right-20 w-20 h-20 bg-emerald-500/10 rounded-full blur-lg animate-bounce"></div>
          <div className="absolute bottom-24 left-1/4 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl animate-pulse"></div>
          <div
            className="absolute top-1/2 right-1/3 w-16 h-16 bg-green-500/10 rounded-full blur-lg animate-pulse"
            style={{ animationDelay: '2s' }}
          ></div>

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1'%3E%3Cpath d='M0 0h100v100H0z'/%3E%3Cpath d='M0 50h100M50 0v100'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          {/* Floating particles */}
          <div className="absolute inset-0">
            <div
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse top-[10%] left-[15%]"
              style={{ animationDelay: '0s' }}
            ></div>
            <div
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse top-[25%] left-[80%]"
              style={{ animationDelay: '1s' }}
            ></div>
            <div
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse top-[40%] left-[25%]"
              style={{ animationDelay: '2s' }}
            ></div>
            <div
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse top-[60%] left-[70%]"
              style={{ animationDelay: '0.5s' }}
            ></div>
            <div
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse top-[75%] left-[40%]"
              style={{ animationDelay: '1.5s' }}
            ></div>
            <div
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse top-[85%] left-[85%]"
              style={{ animationDelay: '2.5s' }}
            ></div>
          </div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <nav className="text-sm mb-6">
              <Link href="/" className="text-primary-300 hover:text-white transition-colors">
                Home
              </Link>
              <span className="mx-2 text-primary-300">/</span>
              <Link
                href="/services"
                className="text-primary-300 hover:text-white transition-colors"
              >
                Services
              </Link>
              <span className="mx-2 text-primary-300">/</span>
              <span className="text-white">Electronics Services</span>
            </nav>
            
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 backdrop-blur-sm rounded-full border border-green-200/50 mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-green-200">
                Electronics Services
              </span>
            </div>
            
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-white via-green-100 to-emerald-200 bg-clip-text text-transparent">
                Electronics Manufacturing
              </span>
            </h1>
            <p className="text-xl text-secondary-200">
              Advanced electronics manufacturing with SMT/THT assembly, environmental
              protection, and comprehensive testing for defence applications.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section with Right/Left Layout */}
      <section className="relative bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50 section-padding overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-64 h-64 bg-green-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Right Image Placeholder */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 h-80 flex items-center justify-center order-2 lg:order-1 border border-slate-200/50 hover:border-green-300/50 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
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
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                </div>
                <p className="text-secondary-600">Electronics Assembly</p>
              </div>
            </div>

            {/* Left Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center px-4 py-2 bg-green-500/10 backdrop-blur-sm rounded-full border border-green-200/50 mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-medium text-green-700">
                  Advanced Electronics
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                <span className="bg-gradient-to-r from-slate-900 via-green-800 to-emerald-800 bg-clip-text text-transparent">
                  Defence Electronics Manufacturing
                </span>
              </h2>
              <p className="text-secondary-700 mb-6 leading-relaxed">
                Our electronics manufacturing capabilities encompass the full spectrum
                of defence electronics production, from precision SMT assembly to
                environmental protection and comprehensive testing protocols.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
                    SMT/THT assembly with 0201 component capability
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
                    Environmental protection to IP67/IP68 standards
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
                    Full traceability and defence standard compliance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-green-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-teal-500/3 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 backdrop-blur-sm rounded-full border border-green-200/50 mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-green-700">
                Quality Standards
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              <span className="bg-gradient-to-r from-slate-900 via-green-800 to-emerald-800 bg-clip-text text-transparent">
                Electronics
              </span>
              <br />
              <span className="text-slate-700 text-2xl md:text-3xl lg:text-4xl font-medium">
                Excellence
              </span>
            </h2>

            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Advanced electronics manufacturing with defence-grade quality controls
              and environmental protection standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {qualityFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 text-center border border-slate-200/50 hover:border-green-300/50 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-green-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-green-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Electronics Services Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50 section-padding overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-teal-500/3 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 backdrop-blur-sm rounded-full border border-green-200/50 mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-green-700">
                Service Portfolio
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              <span className="bg-gradient-to-r from-slate-900 via-green-800 to-emerald-800 bg-clip-text text-transparent">
                Electronics Services &
              </span>
              <br />
              <span className="text-slate-700 text-2xl md:text-3xl lg:text-4xl font-medium">
                Capabilities
              </span>
            </h2>

            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive electronics manufacturing services from assembly to testing,
              designed for defence and critical applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {electronicsServices.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 hover:border-green-300/50 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 hover:-translate-y-2"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-green-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      />
                    </svg>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
                      {service.name}
                    </h3>
                    <span className="text-green-600 font-semibold bg-green-100 px-3 py-1 rounded-full text-sm">
                      {service.capabilities}
                    </span>
                  </div>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-secondary-900 mb-2">
                        Key Features:
                      </h4>
                      <ul className="space-y-1">
                        {service.specifications.map((spec, specIndex) => (
                          <li
                            key={specIndex}
                            className="flex items-start space-x-2"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-secondary-700 text-sm">
                              {spec}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {hoveredCard === index && (
                      <div className="animate-fadeIn">
                        <h4 className="text-sm font-semibold text-secondary-900 mb-2">
                          Technical Specs:
                        </h4>
                        <div className="space-y-1">
                          {Object.entries(service.technicalSpecs).map(
                            ([key, value]) => (
                              <div key={key} className="flex justify-between">
                                <span className="text-secondary-600 text-xs capitalize">
                                  {key.replace(/([A-Z])/g, ' $1').replace(/_/g, ' ')}:
                                </span>
                                <span className="text-secondary-900 text-xs font-medium">
                                  {value}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}