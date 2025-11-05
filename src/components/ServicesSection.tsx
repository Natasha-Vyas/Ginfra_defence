'use client';

import Link from 'next/link';
import { useState } from 'react';

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      title: 'CNC Services',
      description:
        'Advanced CNC machining with 5-axis precision, tight tolerances, and comprehensive manufacturing solutions.',
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
      href: '/services/cnc-services',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
      features: ['5-axis machining', '±0.001" tolerance', 'Complex geometries'],
    },
    {
      title: 'Electronics Services',
      description:
        'Advanced electronics manufacturing with SMT/THT assembly, environmental protection, and comprehensive testing.',
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
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
      ),
      href: '/services/electronics-services',
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-500/10 to-emerald-500/10',
      features: ['SMT/THT assembly', 'IP67/IP68 sealing', 'Full traceability'],
    },
    {
      title: 'Forging Services',
      description:
        'High-capacity forging with heat treatment and comprehensive material testing for critical defense applications.',
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
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z"
          />
        </svg>
      ),
      href: '/services/forging-services',
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-500/10 to-red-500/10',
      features: ['5000 ton capacity', 'Heat treatment', 'Material testing'],
    },
    {
      title: 'Quality Assurance',
      description:
        'Comprehensive quality control and testing protocols ensuring uncompromising reliability for defense applications.',
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
      href: '/services/quality-assurance',
      gradient: 'from-purple-500 to-indigo-500',
      bgGradient: 'from-purple-500/10 to-indigo-500/10',
      features: ['ISO 9001/AS9100', 'Environmental testing', 'Full documentation'],
    },
    {
      title: 'Cartridge Cases',
      description:
        'Precision-manufactured cartridge cases for various calibers, designed for superior performance in defense applications.',
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
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z"
          />
        </svg>
      ),
      href: '/services/cartridge-cases',
      gradient: 'from-blue-600 to-indigo-600',
      bgGradient: 'from-blue-600/10 to-indigo-600/10',
      features: ['Multi-caliber range', 'Precision forging', 'Quality testing'],
    },
    {
      title: 'Combustible Cartridge Cases',
      description:
        'Advanced combustible cartridge cases with superior ballistic performance for specialized defense applications.',
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
            d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
          />
        </svg>
      ),
      href: '/services/combustible-cartridge-cases',
      gradient: 'from-red-500 to-pink-500',
      bgGradient: 'from-red-500/10 to-pink-500/10',
      features: ['Combustible materials', 'Ballistic performance', 'Specialized applications'],
    },
    {
      title: 'Modular Charge Systems',
      description:
        'Advanced modular charge systems designed for flexibility and precision in various defense applications.',
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
      href: '/services/modular-charge-systems',
      gradient: 'from-teal-500 to-cyan-500',
      bgGradient: 'from-teal-500/10 to-cyan-500/10',
      features: ['Modular design', 'Flexible configuration', 'Precision engineering'],
    },
    {
      title: 'Mechanical Fuzes',
      description:
        'Precision-engineered mechanical fuzes with advanced safety systems, reliable timing mechanisms, and 99.9% activation reliability.',
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
      href: '/services/mechanical-fuzes',
      gradient: 'from-violet-500 to-purple-500',
      bgGradient: 'from-violet-500/10 to-purple-500/10',
      features: ['99.9% reliability', 'Safety systems', 'Precision timing'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-200/50 mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-medium text-blue-700">
              Our Capabilities
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
              Defence Manufacturing
            </span>
            <br />
            <span className="text-slate-700 text-2xl md:text-3xl lg:text-4xl font-medium">
              Services
            </span>
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ginfra Dynamic delivers defence-grade manufacturing for munitions and
            sub-systems with uncompromising quality, precision, and traceability.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group block"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`relative h-full bg-white rounded-2xl p-6 border border-slate-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  hoveredCard === index ? 'scale-105' : ''
                }`}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                {/* Glowing Border Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                ></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6 group-hover:text-slate-700 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-xs text-slate-500"
                      >
                        <div
                          className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full mr-2`}
                        ></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors duration-300">
                    Learn More
                    <svg
                      className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-1"
          >
            Get Started Today
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
