import Link from 'next/link';

export default function Services() {
  const products = [
    {
      category: 'Cartridge Cases',
      items: [
        {
          name: '23MM Cartridge Case',
          description:
            'High-performance cartridge case for 23mm applications with anti-flying aircraft and armoured aerial vehicles capabilities',
          specifications: [
            'Anti-flying aircraft',
            'Armoured aerial vehicles',
            'Light armoured vehicles',
            'Enemy protection',
          ],
          image: '/images/services/cartridge-cases/23mm.svg',
        },
        {
          name: '30MM Cartridge Case',
          description:
            '30mm cartridge case with anti-armour capabilities and advanced ballistic performance',
          specifications: [
            'Anti-armour',
            'All defences',
            'Naval point defence',
            'Suspension of light armoured vehicles',
          ],
          image: '/images/services/cartridge-cases/30mm.svg',
        },
        {
          name: '40MM Cartridge Case',
          description:
            '40mm cartridge case supporting high-velocity armor-piercing and programmable airburst munitions',
          specifications: [
            'HVG suppression',
            'Anti-vehicle engagement',
            'Close range naval defence',
            'Airburst capability',
          ],
          image: '/images/services/cartridge-cases/40mm.svg',
        },
        {
          name: '105MM Cartridge Case',
          description:
            '105mm cartridge case for medium-range artillery applications with armor penetration capabilities',
          specifications: [
            'Armor penetration',
            'Long-range support',
            'Tank main gun',
            'Artillery support',
          ],
          image: '/images/services/cartridge-cases/105mm.svg',
        },
        {
          name: '155MM Cartridge Case',
          description:
            '155mm cartridge case for long-range artillery systems with high explosive capabilities',
          specifications: [
            'Long-range artillery',
            'High explosive',
            'Precision targeting',
            'Extended range',
          ],
          image: '/images/services/cartridge-cases/155mm.svg',
        },
      ],
    },
    {
      category: 'Combustible Cartridge Cases',
      items: [
        {
          name: '120MM & 125MM FSAPDS',
          description:
            'Fin-Stabilized Armor-Piercing Discarding Sabot rounds for main battle tanks',
          specifications: [
            'FSAPDS technology',
            'Main battle tank',
            'Armor penetration',
            'High velocity',
          ],
          image: '/images/services/combustible/fsapds.svg',
        },
        {
          name: '120MM HESH',
          description:
            'High Explosive Squash Head rounds for anti-fortification and anti-armor applications',
          specifications: [
            'Anti-fortification',
            'Squash head technology',
            'Versatile engagement',
            'High explosive',
          ],
          image: '/images/services/combustible/hesh.svg',
        },
      ],
    },
    {
      category: 'Modular Charge Systems',
      items: [
        {
          name: 'BMCS - 155MM M91 & M92',
          description:
            'Bi-Modular Charge System for 155mm artillery with scalable range control and superior ballistic performance',
          specifications: [
            'Scalable range control',
            'Superior ballistic performance',
            'Modular design',
            'Artillery systems',
          ],
          image: '/images/services/modular/bmcs.svg',
        },
      ],
    },
    {
      category: 'Mechanical Fuzes',
      items: [
        {
          name: '23MM, 30MM, 40MM & Internal Components',
          description:
            'Precision mechanical fuzes for various calibres with advanced safety and arming mechanisms',
          specifications: [
            'Point Detonating (PD) Fuze',
            'Time Proximity/Timed Fuze',
            'Proximity/Timed Fuze',
            'Safety & Arming Device',
          ],
          image: '/images/services/fuzes/pd.svg',
        },
      ],
    },
  ];

  const capabilities = [
    {
      title: 'Precision Manufacturing',
      description:
        'Multi-axis CNC machining for tight tolerances and complex geometries',
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
    },
    {
      title: 'Quality Assurance',
      description:
        'Comprehensive testing protocols including functional, environmental, and electrical validation',
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
    },
    {
      title: 'Traceability Systems',
      description:
        'Complete lot control and chain-of-custody documentation for defence compliance',
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
            d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
    },
  ];

  const testingProcesses = [
    'T-1 Quality Assurance (QA) Framework',
    'T-2 Testing & Validation Processes',
    'T-3 Dimensional Validation',
    'T-4 Environmental Conditioning',
    'T-5 Certifications & Standards',
  ];

  const certifications = [
    { name: 'ISO 9001:2015', description: 'Quality management system' },
    {
      name: 'MIL-STD Compliance',
      description: 'U.S. military standard adherence',
    },
    {
      name: 'NATO STANAG Compliance',
      description: 'NATO standardization agreements',
    },
    {
      name: 'End-User Certification Support',
      description: 'Implementation guidance and compliance',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white section-padding overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Advanced Defence Solutions
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent leading-tight">
              Our Products & Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed max-w-4xl mx-auto">
              Comprehensive range of precision-manufactured defence components
              and subsystems, from cartridge cases to advanced fuze systems,
              designed for mission-critical applications.
            </p>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="bg-gradient-to-b from-slate-50 to-white section-padding">
        <div className="container-custom">
          {products.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                  Category {categoryIndex + 1}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                  {category.category}
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((product, productIndex) => (
                  <div
                    key={productIndex}
                    className="group bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-2xl hover:border-blue-300 transition-all duration-500 transform hover:-translate-y-2"
                  >
                    <div className="relative h-56 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center overflow-hidden">
                      {/* Service-specific generated image */}
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    <div className="p-8">
                      <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-900 transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {product.description}
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                            Key Features
                          </h4>
                          <div className="h-px bg-gradient-to-r from-slate-300 to-transparent flex-1 ml-4"></div>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          {product.specifications.map((spec, specIndex) => (
                            <div
                              key={specIndex}
                              className="flex items-center px-3 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-800 rounded-lg text-xs font-medium border border-blue-100 hover:from-blue-100 hover:to-indigo-100 transition-colors duration-200"
                            >
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                              {spec}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white section-padding relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Advanced Manufacturing
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
              Manufacturing Capabilities
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              State-of-the-art manufacturing processes ensuring precision,
              quality, and reliability for all defence and aerospace
              applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 text-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                  {capability.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-blue-100 transition-colors duration-300">
                  {capability.title}
                </h3>
                <p className="text-blue-100 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {capability.description}
                </p>

                {/* Decorative element */}
                <div className="mt-6 w-16 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing & Validation */}
      <section className="bg-gradient-to-b from-white to-slate-50 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                  Quality Assurance
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                  Testing & Validation Processes
                </h2>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                  Our comprehensive testing framework ensures every component
                  meets the highest standards for defence applications, with
                  full traceability and compliance documentation.
                </p>
              </div>

              <div className="space-y-4">
                {testingProcesses.map((process, index) => (
                  <div
                    key={index}
                    className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-blue-50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl flex items-center justify-center text-lg font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </div>
                    <span className="text-slate-700 font-medium text-lg group-hover:text-blue-900 transition-colors duration-300">
                      {process}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-10 shadow-xl border border-blue-100">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">
                  Certifications & Standards
                </h3>
                <p className="text-slate-600">Industry-leading compliance</p>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-6 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300"></div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900 mb-2 text-lg group-hover:text-blue-900 transition-colors duration-300">
                          {cert.name}
                        </h4>
                        <p className="text-slate-600 leading-relaxed">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white section-padding relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-indigo-500 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="container-custom text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8 border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Get Started Today
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent leading-tight">
              Ready to Discuss Your Requirements?
            </h2>

            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Contact our technical team for detailed specifications, pilot
              trials, or Transfer of Technology discussions.
            </p>

            {/* Stats or additional info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-blue-200">Products Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-blue-200">Quality Assurance</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-blue-200">Technical Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
