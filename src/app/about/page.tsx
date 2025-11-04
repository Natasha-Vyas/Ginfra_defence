import Link from 'next/link';

export default function About() {
  const processFlow = [
    {
      step: '1',
      title: 'Forging / Blank Production',
      description:
        'Raw forging/pressing to produce housings and casings with precision metallurgy',
    },
    {
      step: '2',
      title: 'Rough Machining',
      description:
        'Rough turning/milling to remove flash and bring to near-net shape',
    },
    {
      step: '3',
      title: 'Heat Treatment',
      description:
        'Metallurgical processing for optimal mechanical properties and stress relief',
    },
    {
      step: '4',
      title: 'Finish CNC Machining',
      description:
        'Multi-axis cell for critical tolerances, bores, threads and surfaces',
    },
    {
      step: '5',
      title: 'Surface Treatments',
      description:
        'Corrosion protection and functional coatings for durability',
    },
    {
      step: '6',
      title: 'Electronics Assembly',
      description:
        'PCB population, sensor integration, battery insertion, harnessing',
    },
    {
      step: '7',
      title: 'Controlled Assembly',
      description:
        'Clean rooms / ESD-controlled areas for fuze assembly with deterministic controls',
    },
    {
      step: '8',
      title: 'Testing & Validation',
      description:
        'Functional, environmental, electrical tests, arming/trigger tests, environmental cycling',
    },
    {
      step: '9',
      title: 'Packing & Traceability',
      description: 'Serialization, lot coding, chain-of-custody documentation',
    },
  ];

  const equipmentCategories = [
    {
      category: 'Forging/Pressing',
      equipment: [
        'Hydraulic forging presses',
        'Trimming presses',
        'Induction heating systems',
      ],
    },
    {
      category: 'Heat Treatment',
      equipment: [
        'Batch furnaces',
        'Quench tanks',
        'Tempering ovens',
        'Hardness testers',
      ],
    },
    {
      category: 'CNC Machining',
      equipment: [
        '4/5-axis CNC turning centers',
        'Horizontal/vertical machining centers',
        'Bar feeders',
      ],
    },
    {
      category: 'Metrology & NDE',
      equipment: [
        'CMM (coordinate measuring machine)',
        'Optical comparators',
        'Ultrasonic flaw detectors',
        'Eddy current testers',
      ],
    },
    {
      category: 'Electronics',
      equipment: [
        'SMT line',
        'Reflow oven',
        'Selective soldering',
        'Functional testers',
        'Conformal coat station',
      ],
    },
    {
      category: 'Testing & Validation',
      equipment: [
        'Environmental chambers',
        'Vibration tables',
        'Electrical safety testers',
        'EMI/EMC test bench',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-900 to-primary-900 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About GInfra Travancore
            </h1>
            <p className="text-xl text-secondary-200 mb-8">
              Building an intelligent, modular production system to manufacture
              high-precision fuzes, detonators and related subsystems — scalable
              to support aerospace and robotics components.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services" className="btn-primary">
                Our Services
              </Link>
              <Link href="/contact" className="btn-secondary">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                Our Mission & Vision
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                    Mission
                  </h3>
                  <p className="text-secondary-700 leading-relaxed">
                    To establish a world-class manufacturing facility that
                    delivers mission-critical components with uncompromising
                    precision, quality, and reliability for defence, aerospace,
                    and advanced robotics applications.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                    Vision
                  </h3>
                  <p className="text-secondary-700 leading-relaxed">
                    To become the leading provider of high-precision
                    manufacturing solutions in India, supporting national
                    defence capabilities while expanding into aerospace and
                    advanced robotics markets globally.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                Key Differentiators
              </h3>
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
                    End-to-end manufacturing capability under one roof
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
                    Modular approach enabling staged technology transfer
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
                    Defence-grade quality systems and certifications
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
                    Complete traceability from raw materials to finished
                    products
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="bg-secondary-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              High-Level Process Flow
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Our comprehensive manufacturing process for Electronic
              Point-Detonating Fuze production, ensuring precision and quality
              at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processFlow.map((process, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-secondary-200 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary-600 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                    {process.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                      {process.title}
                    </h3>
                    <p className="text-secondary-600 text-sm leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Technology */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Equipment & Technology
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              State-of-the-art equipment and technology infrastructure designed
              for precision manufacturing and quality assurance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipmentCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6 border border-primary-100"
              >
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.equipment.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-secondary-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Compliance */}
      <section className="bg-secondary-900 text-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Quality Assurance & Compliance
            </h2>
            <p className="text-xl text-secondary-200 max-w-3xl mx-auto">
              Comprehensive quality systems and compliance protocols ensuring
              the highest standards for defence and aerospace applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Documentation</h3>
              <p className="text-secondary-300 text-sm">
                Work instructions, inspection plans, batch records
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Process Control</h3>
              <p className="text-secondary-300 text-sm">
                Statistical process control, SPC charts
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Testing Protocols</h3>
              <p className="text-secondary-300 text-sm">
                EVT, ESS, functional acceptance tests
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
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
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Certifications</h3>
              <p className="text-secondary-300 text-sm">
                ISO 9001, AS9100, defence certifications
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
