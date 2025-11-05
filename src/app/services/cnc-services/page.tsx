'use client';

import Link from 'next/link';
import CTASection from '@/components/CTASection';
import { useState } from 'react';

export default function CNCServices() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const cncServices = [
    {
      name: '5-Axis Machining',
      capabilities: 'Complex geometries',
      description:
        'Advanced 5-axis CNC machining for complex defense components with tight tolerances and superior surface finishes.',
      specifications: [
        'Multi-axis capability',
        'Complex geometries',
        'Tight tolerances ±0.001"',
        'Superior surface finish',
      ],
      technicalSpecs: {
        accuracy: '±0.001" (±0.025mm)',
        materials: 'Aluminum, Steel, Titanium',
        capacity: 'Up to 1500mm x 800mm',
        spindle: '40,000 RPM capability',
      },
      icon: '/images/services/cnc/5-axis.svg',
    },
    {
      name: 'Precision Turning',
      capabilities: 'Rotational components',
      description:
        'High-precision turning operations for cylindrical components, shafts, and rotational defense hardware.',
      specifications: [
        'Live tooling capability',
        'Sub-spindle operations',
        'Automatic bar feeding',
        'In-process measurement',
      ],
      technicalSpecs: {
        diameter: 'Up to 320mm',
        length: 'Up to 1000mm',
        tolerance: '±0.005mm',
        surface: 'Ra 0.8μm achievable',
      },
      icon: '/images/services/cnc/turning.svg',
    },
    {
      name: 'Bores & Threading',
      capabilities: 'Internal features',
      description:
        'Specialized boring and threading operations for critical internal features in defense components.',
      specifications: [
        'Deep hole boring',
        'Precision threading',
        'Internal profiling',
        'Honing capability',
      ],
      technicalSpecs: {
        bore_depth: 'Up to 20:1 L/D ratio',
        thread_pitch: '0.5mm to 6mm',
        bore_tolerance: '±0.01mm',
        surface_finish: 'Ra 0.4μm',
      },
      icon: '/images/services/cnc/bores-threads.svg',
    },
    {
      name: 'Surface Finishing',
      capabilities: 'Final operations',
      description:
        'Comprehensive surface finishing operations including grinding, polishing, and coating preparation.',
      specifications: [
        'Precision grinding',
        'Surface polishing',
        'Deburring operations',
        'Coating preparation',
      ],
      technicalSpecs: {
        roughness: 'Ra 0.1μm achievable',
        flatness: '±0.005mm',
        parallelism: '±0.01mm',
        coating_prep: 'Blast & chemical clean',
      },
      icon: '/images/services/cnc/finishing.svg',
    },
    {
      name: 'Rapid Prototyping',
      capabilities: 'Development support',
      description:
        'Fast-turnaround prototyping services for defense component development and testing phases.',
      specifications: [
        'Quick turnaround',
        'Material flexibility',
        'Design optimization',
        'Testing support',
      ],
      technicalSpecs: {
        lead_time: '24-72 hours typical',
        materials: 'Wide range available',
        complexity: 'High complexity capable',
        quantities: '1-100 pieces',
      },
      icon: '/images/services/cnc/prototyping.svg',
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
      title: 'Precision Manufacturing',
      description:
        'Advanced CNC capabilities with tolerances down to ±0.001" for critical defense components',
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
      title: 'Advanced Equipment',
      description: '5-axis machining centers with live tooling and automated systems',
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
      title: 'Fast Turnaround',
      description:
        'Rapid prototyping and production capabilities with 24-72 hour turnaround options',
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
            className="absolute top-1/2 right-1/3 w-16 h-16 bg-blue-500/10 rounded-full blur-lg animate-pulse"
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
              <span className="text-white">CNC Services</span>
            </nav>
            
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-200/50 mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-blue-200">
                CNC Services
              </span>
            </div>
            
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                CNC Machining Services
              </span>
            </h1>
            <p className="text-xl text-secondary-200">
              Advanced CNC machining capabilities with 5-axis precision, tight tolerances,
              and comprehensive manufacturing solutions for defense applications.
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
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
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
                <p className="text-secondary-600">Precision CNC Machining</p>
              </div>
            </div>

            {/* Left Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-200/50 mb-6">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-medium text-blue-700">
                  Advanced Manufacturing
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                  Precision CNC Technology
                </span>
              </h2>
              <p className="text-secondary-700 mb-6 leading-relaxed">
                Our state-of-the-art CNC machining capabilities deliver precision
                components for critical defense applications. From complex 5-axis
                geometries to high-volume production runs, we maintain the highest
                standards of quality and accuracy.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
                    5-axis machining for complex geometries
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
                    Tolerances down to ±0.001" (±0.025mm)
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
                    Wide range of materials including titanium
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
                Capabilities
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                Manufacturing
              </span>
              <br />
              <span className="text-slate-700 text-2xl md:text-3xl lg:text-4xl font-medium">
                Capabilities
              </span>
            </h2>

            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Advanced CNC machining capabilities designed for precision defense
              manufacturing and critical component production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {qualityFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 text-center border border-slate-200/50 hover:border-blue-300/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
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

      {/* CNC Services Section */}
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
                Service Range
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                CNC Services &
              </span>
              <br />
              <span className="text-slate-700 text-2xl md:text-3xl lg:text-4xl font-medium">
                Capabilities
              </span>
            </h2>

            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive CNC machining services from prototyping to production,
              covering all aspects of precision manufacturing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cncServices.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 hover:border-blue-300/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
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

                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {service.name}
                    </h3>
                    <span className="text-blue-600 font-semibold bg-blue-100 px-3 py-1 rounded-full text-sm">
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
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
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