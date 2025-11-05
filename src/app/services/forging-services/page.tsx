'use client';

import Link from 'next/link';
import CTASection from '@/components/CTASection';
import { useState } from 'react';

export default function ForgingServices() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const forgingServices = [
    {
      name: 'Hot Forging',
      capabilities: 'High-strength components',
      description:
        'Advanced hot forging processes for critical defense components requiring superior mechanical properties and structural integrity.',
      specifications: [
        'Up to 5000 ton capacity',
        'Complex geometries',
        'Superior grain structure',
        'Reduced material waste',
      ],
      technicalSpecs: {
        capacity: '5000 ton press',
        temperature: '1200°C capability',
        materials: 'Steel, Titanium, Inconel',
        tolerance: '±0.5mm typical',
      },
      icon: '/images/services/forging/hot-forging.svg',
    },
    {
      name: 'Heat Treatment',
      capabilities: 'Property optimization',
      description:
        'Comprehensive heat treatment services including hardening, tempering, and stress relief for optimal material properties.',
      specifications: [
        'Controlled atmosphere',
        'Precise temperature control',
        'Stress relief operations',
        'Property verification',
      ],
      technicalSpecs: {
        temperature: 'Up to 1200°C',
        atmosphere: 'Controlled/Vacuum',
        uniformity: '±5°C throughout',
        capacity: '10 ton furnace',
      },
      icon: '/images/services/forging/heat-treatment.svg',
    },
    {
      name: 'Material Testing',
      capabilities: 'Quality verification',
      description:
        'Comprehensive material testing including mechanical properties, metallurgical analysis, and non-destructive testing.',
      specifications: [
        'Tensile & impact testing',
        'Metallurgical analysis',
        'NDT inspection',
        'Chemical composition',
      ],
      technicalSpecs: {
        tensile: 'Up to 2000kN',
        hardness: 'HRC, HV, HB',
        ndt: 'UT, MT, PT, RT',
        microscopy: 'Optical & SEM',
      },
      icon: '/images/services/forging/material-testing.svg',
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
      title: 'Superior Strength',
      description:
        'Hot forging processes create superior grain structure and mechanical properties for critical applications',
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
      title: 'Advanced Materials',
      description: 'Capability to forge exotic materials including titanium and high-temperature alloys',
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
      title: 'Quality Assurance',
      description:
        'Comprehensive testing and verification including NDT and metallurgical analysis',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary-900 to-primary-900 text-white section-padding overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Geometric shapes */}
          <div className="absolute top-20 left-10 w-24 h-24 bg-orange-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-32 right-20 w-20 h-20 bg-red-500/10 rounded-full blur-lg animate-bounce"></div>
          <div className="absolute bottom-24 left-1/4 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl animate-pulse"></div>
          <div
            className="absolute top-1/2 right-1/3 w-16 h-16 bg-orange-500/10 rounded-full blur-lg animate-pulse"
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
              <span className="text-white">Forging Services</span>
            </nav>
            
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 backdrop-blur-sm rounded-full border border-orange-200/50 mb-6">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-orange-200">
                Forging Services
              </span>
            </div>
            
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-white via-orange-100 to-amber-200 bg-clip-text text-transparent">
                Advanced Forging Solutions
              </span>
            </h1>
            <p className="text-xl text-secondary-200">
              High-capacity forging capabilities with heat treatment and comprehensive
              material testing for critical defense applications.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section with Right/Left Layout */}
      <section className="relative bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50 section-padding overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Right Image Placeholder */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 h-80 flex items-center justify-center order-2 lg:order-1 border border-slate-200/50 hover:border-orange-300/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
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
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z"
                    />
                  </svg>
                </div>
                <p className="text-secondary-600">Hot Forging Operations</p>
              </div>
            </div>

            {/* Left Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 backdrop-blur-sm rounded-full border border-orange-200/50 mb-6">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-medium text-orange-700">
                  Heavy Industry
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                <span className="bg-gradient-to-r from-slate-900 via-orange-800 to-amber-800 bg-clip-text text-transparent">
                  Precision Forging Technology
                </span>
              </h2>
              <p className="text-secondary-700 mb-6 leading-relaxed">
                Our advanced forging capabilities deliver superior mechanical properties
                through controlled hot forging processes. Combined with comprehensive
                heat treatment and material testing, we ensure optimal performance
                for critical defense applications.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
                    5000 ton forging capacity for large components
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
                    Advanced materials including titanium and Inconel
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
                    Comprehensive testing and quality verification
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-orange-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-red-500/3 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 backdrop-blur-sm rounded-full border border-orange-200/50 mb-6">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-orange-700">
                Forging Excellence
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              <span className="bg-gradient-to-r from-slate-900 via-orange-800 to-amber-800 bg-clip-text text-transparent">
                Manufacturing
              </span>
              <br />
              <span className="text-slate-700 text-2xl md:text-3xl lg:text-4xl font-medium">
                Advantages
              </span>
            </h2>

            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Advanced forging processes delivering superior mechanical properties
              and structural integrity for critical defense applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {qualityFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 text-center border border-slate-200/50 hover:border-orange-300/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-orange-600 transition-colors duration-300">
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

      {/* Forging Services Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50 section-padding overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-red-500/3 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 backdrop-blur-sm rounded-full border border-orange-200/50 mb-6">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-orange-700">
                Service Portfolio
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              <span className="bg-gradient-to-r from-slate-900 via-orange-800 to-amber-800 bg-clip-text text-transparent">
                Forging Services &
              </span>
              <br />
              <span className="text-slate-700 text-2xl md:text-3xl lg:text-4xl font-medium">
                Capabilities
              </span>
            </h2>

            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive forging services from hot forming to heat treatment,
              with full material testing and quality verification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {forgingServices.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 hover:border-orange-300/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 hover:-translate-y-2"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
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
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z"
                      />
                    </svg>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                      {service.name}
                    </h3>
                    <span className="text-orange-600 font-semibold bg-orange-100 px-3 py-1 rounded-full text-sm">
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
                            <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mt-2 flex-shrink-0"></div>
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