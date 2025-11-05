'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[85vh] bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex items-center min-h-[85vh] py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30 hover:bg-blue-500/30 transition-all duration-300">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-blue-200">
                Ginfra Dynamic — Defence Manufacturing
              </span>
            </div>

            <div className="space-y-5">
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                  Precision Manufacturing
                </span>
                <br />
                <span className="text-slate-200 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium">
                  for
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  Defence Programs
                </span>
              </h1>

              <p className="text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Ginfra Dynamic builds next-generation manufacturing capabilities for
                <span className="text-cyan-400 font-semibold bg-cyan-400/10 px-1 rounded">{' '}mission-critical components</span>{' '}
                with uncompromising precision, reliability, and full traceability.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#services"
                className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold text-base transition-all duration-300 hover:from-blue-500 hover:to-indigo-500 hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-1"
              >
                <span className="relative z-10">Explore Capabilities</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </a>

              <Link
                href="/contact"
                className="group px-6 py-3 bg-transparent border-2 border-slate-400 rounded-xl font-semibold text-base transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20"
              >
                Request Quote
                <svg
                  className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
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

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700/50">
              {[
                { number: '6', label: 'Production Stages', icon: '⚙️' },
                { number: '100%', label: 'Traceability', icon: '🎯' },
                { number: '24/7', label: 'Quality Control', icon: '🛡️' },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Modern Visual Element */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10'
            }`}
          >
            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/50 shadow-2xl">
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-indigo-500/20 rounded-3xl blur-xl"></div>

              <div className="relative z-10 space-y-8">
                {/* Header */}
                <div className="text-center pb-4 border-b border-slate-700/50">
                  <h3 className="text-xl font-bold text-white mb-1">
                    Manufacturing Excellence
                  </h3>
                  <p className="text-sm text-slate-400">
                    Advanced capabilities overview
                  </p>
                </div>

                {/* Feature Cards */}
                <div className="space-y-4">
                  {[
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
                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                          />
                        </svg>
                      ),
                      title: 'Precision Engineering',
                      description:
                        'Multi-axis CNC machining with ±0.001mm tolerance',
                      color: 'from-blue-500 to-cyan-500',
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
                      title: 'Defence Certified',
                      description:
                        'ISO 9001, AS9100 & military standards compliant',
                      color: 'from-green-500 to-emerald-500',
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
                      title: 'Rapid Deployment',
                      description:
                        'Accelerated production with 48-hour lead times',
                      color: 'from-orange-500 to-red-500',
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="group flex items-start space-x-3 p-3 rounded-2xl bg-slate-800/30 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 hover:bg-slate-800/50"
                    >
                      <div
                        className={`w-12 h-12 shrink-0 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                      >
                        <div className="w-6 h-6 flex items-center justify-center [&>svg]:w-6 [&>svg]:h-6 [&>svg]:block">
                          {feature.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300 text-sm">
                          {feature.title}
                        </h4>
                        <p className="text-slate-400 text-xs leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom CTA */}
                <div className="pt-4 border-t border-slate-700/50">
                  <a
                    href="#services"
                    className="block w-full text-center py-2.5 bg-gradient-to-r from-slate-700 to-slate-800 rounded-xl text-white font-medium hover:from-slate-600 hover:to-slate-700 transition-all duration-300 hover:shadow-lg text-sm"
                  >
                    View All Capabilities →
                  </a>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-xl animate-pulse"></div>
            <div
              className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-full blur-xl animate-pulse"
              style={{ animationDelay: '1s' }}
            ></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
