'use client';

import Link from 'next/link';
import CTASection from '@/components/CTASection';
import { useState } from 'react';

export default function MechanicalFuzes() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const fuzeTypes = [
    {
      name: 'SMT/THT Assembly',
      calibers: 'ESD-safe lines',
      description:
        'Automated SMT placement and selective soldering, with AOI and process controls for defence electronics.',
      specifications: [
        'SMT + THT capability',
        'Selective soldering',
        'AOI & IPC standards',
        'Traceable materials',
      ],
      technicalSpecs: {
        activation: 'Impact triggered',
        safety: 'Multiple safety systems',
        environment: 'All weather capable',
        reliability: '99.9% activation rate',
      },
    },
    {
      name: 'Sensor Integration & Potting',
      calibers: 'Sealing & protection',
      description:
        'Integration of sensors and harnesses with controlled potting and conformal coating for harsh environments.',
      specifications: [
        'Harness assembly',
        'Potting & encapsulation',
        'Conformal coat',
        'Environmental sealing',
      ],
      technicalSpecs: {
        activation: 'Time/Proximity based',
        timing: 'Programmable delays',
        detection: 'Proximity sensors',
        accuracy: 'Â±0.1 second precision',
      },
    },
    {
      name: 'Functional Test & Calibration',
      calibers: 'ICT/Functional',
      description:
        'Electrical, firmware, and functional validation including calibration and burn-in per acceptance plans.',
      specifications: [
        'ICT & boundary scan',
        'Functional ATE',
        'Burn-in profiles',
        'Calibration routines',
      ],
      technicalSpecs: {
        activation: 'Dual-mode system',
        modes: 'Proximity + Timed',
        range: 'Variable detection range',
        versatility: 'Multi-mission capable',
      },
    },
    {
      name: 'Documentation & Traceability',
      calibers: 'Lot & serial control',
      description:
        '100% serialization, device master records, and compliance documentation aligned to defence standards.',
      specifications: [
        'DMR & DHR',
        'Serialization & labels',
        'FAI/PPAP packages',
        'Audit-ready records',
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
    'SMT/THT Assembly': '/images/services/electronics/smt.svg',
    'Sensor Integration & Potting': '/images/services/electronics/potting.svg',
    'Functional Test & Calibration': '/images/services/electronics/test-calibration.svg',
    'Documentation & Traceability': '/images/services/electronics/documentation.svg',
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
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary-900 to-primary-900 text-white section-padding overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Geometric shapes */}
          <div className="absolute top-20 left-10 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-32 right-20 w-20 h-20 bg-indigo-500/10 rounded-full blur-lg animate-bounce"></div>
          <div className="absolute bottom-24 left-1/4 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl animate-pulse"></div>
          <div
            className="absolute top-1/2 right-1/3 w-16 h-16 bg-purple-500/10 rounded-full blur-lg animate-pulse"
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
              <span className="text-white">Mechanical Fuzes</span>
            </nav>
            
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 backdrop-blur-sm rounded-full border border-purple-200/50 mb-6">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-purple-200">
                Mechanical Fuzes
              </span>
            </div>
            
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                Mechanical Fuzes
              </span>
            </h1>
            <p className="text-xl text-secondary-200">
              Precision-engineered mechanical fuzes with advanced safety systems,
              reliable timing mechanisms, and 99.9% activation reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section with Right/Left Layout */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 section-padding overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Right Image Placeholder */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 h-80 flex items-center justify-center order-2 lg:order-1 border border-slate-200/50 hover:border-blue-300/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
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
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-200/50 mb-6">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-medium text-blue-700">
                  Advanced Technology
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                  Advanced Fuze Technology
                </span>
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
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-500/3 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-200/50 mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-blue-700">
                Quality Features
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                Quality & Reliability
              </span>
              <br />
              <span className="text-slate-700 text-2xl md:text-3xl lg:text-4xl font-medium">
                Features
              </span>
            </h2>

            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our mechanical fuzes are engineered for maximum safety, precision,
              and reliability in critical defense applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {qualityFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 text-center border border-slate-200/50 hover:border-blue-300/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-violet-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 text-white rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-purple-600 transition-colors duration-300">
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

      {/* Fuze Types Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 section-padding overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-500/3 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-200/50 mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-blue-700">
                Product Range
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                Fuze Types &
              </span>
              <br />
              <span className="text-slate-700 text-2xl md:text-3xl lg:text-4xl font-medium">
                Specifications
              </span>
            </h2>

            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive range of mechanical fuzes for diverse defense
              applications and mission requirements.
            </p>
          </div>

          <div className="space-y-8">
            {fuzeTypes.map((fuze, index) => (
              <div
                key={index}
                className="group relative bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/50 overflow-hidden hover:border-blue-300/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-violet-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-4 gap-0">
                  {/* Product Icon */}
                  <div className="lg:col-span-1 h-64 lg:h-auto bg-white/50 flex items-center justify-center p-8">
                    <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg
                        className="w-12 h-12"
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
                  </div>
                  <div className="lg:col-span-3 p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-slate-800 group-hover:text-purple-600 transition-colors duration-300">
                        {fuze.name}
                      </h3>
                      <span className="text-purple-600 font-semibold bg-purple-100 px-3 py-1 rounded-full text-sm mt-2 md:mt-0">
                        {fuze.calibers}
                      </span>
                    </div>
                    <p className="text-slate-600 mb-6 leading-relaxed">
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
                              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full mt-2 flex-shrink-0"></div>
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
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-500/3 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-200/50 mb-6">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-medium text-blue-700">
                  Components
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                  Internal Components
                </span>
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
                    className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-slate-200/50 hover:border-blue-300/50 hover:shadow-lg transition-all duration-300"
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

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 h-96 flex items-center justify-center border border-slate-200/50 hover:border-blue-300/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
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
      <CTASection />
    </div>
  );
}
