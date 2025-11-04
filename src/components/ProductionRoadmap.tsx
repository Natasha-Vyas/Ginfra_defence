const ProductionRoadmap = () => {
  const stages = [
    {
      stage: 'Stage 1',
      title: 'Electronic Point-Detonating Fuze',
      description: '105 mm, 130 mm, 155 mm artillery calibres',
      status: 'In Development',
      timeline: '9-12 months',
      features: [
        'Precision electronics',
        'Environmental testing',
        'Defence compliance',
      ],
    },
    {
      stage: 'Stage 2',
      title: 'Time & Proximity Fuze',
      description: 'Advanced timing systems for artillery calibres',
      status: 'Planning',
      timeline: '6-9 months',
      features: [
        'Timing mechanisms',
        'Proximity sensors',
        'Multi-calibre support',
      ],
    },
    {
      stage: 'Stage 3',
      title: 'Proximity Fuze',
      description: '81 mm & 120 mm mortar applications',
      status: 'Planning',
      timeline: '6-9 months',
      features: [
        'Mortar compatibility',
        'Proximity detection',
        'Compact design',
      ],
    },
    {
      stage: 'Stage 4',
      title: 'Pinaka Rocket Fuzes',
      description: 'Proximity & Point Detonating for Pinaka rockets',
      status: 'Future',
      timeline: 'TBD',
      features: [
        'Rocket integration',
        'High-velocity rated',
        'Advanced targeting',
      ],
    },
    {
      stage: 'Stage 5',
      title: 'Reserve Batteries',
      description: 'Power systems for artillery fuzes',
      status: 'Future',
      timeline: 'TBD',
      features: [
        'Long shelf life',
        'Reliable activation',
        'Temperature resistant',
      ],
    },
    {
      stage: 'Stage 6',
      title: 'Electrical Components',
      description: 'Detonators & relays for fuzes and mortars',
      status: 'Future',
      timeline: 'TBD',
      features: ['Precision timing', 'Safety mechanisms', 'Modular design'],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Development':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Planning':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Future':
        return 'bg-secondary-100 text-secondary-800 border-secondary-200';
      default:
        return 'bg-secondary-100 text-secondary-800 border-secondary-200';
    }
  };

  return (
    <section className="bg-secondary-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Staged Production Roadmap
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Our modular, stage-wise approach minimizes risk and enables targeted
            Transfer of Technology (ToT) per stage, ensuring rapid qualification
            and high-volume supply capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {stages.map((stage, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-secondary-200 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-600 text-white rounded-lg flex items-center justify-center font-semibold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900">
                      {stage.title}
                    </h3>
                    <p className="text-sm text-secondary-600">{stage.stage}</p>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                    stage.status
                  )}`}
                >
                  {stage.status}
                </span>
              </div>

              <p className="text-secondary-700 mb-4">{stage.description}</p>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4 text-primary-600"
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
                  <span className="text-sm text-secondary-600">
                    Timeline: {stage.timeline}
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-secondary-900">
                    Key Features:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {stage.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-2 py-1 bg-primary-50 text-primary-700 rounded text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Future Expansion */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-700 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">
                Future Turnkey Expansion
              </h3>
              <p className="text-primary-100 max-w-2xl mx-auto">
                Strategic expansion into complete propellant production
                capabilities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3">
                  Nitrocellulose Production
                </h4>
                <p className="text-primary-100 text-sm mb-3">
                  High-grade nitrocellulose production (10.8%–13.4% N) for
                  propellant manufacturing
                </p>
                <ul className="text-primary-200 text-sm space-y-1">
                  <li>• Controlled nitrogen content</li>
                  <li>• Quality assurance protocols</li>
                  <li>• Environmental compliance</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3">
                  Propellant Production Lines
                </h4>
                <p className="text-primary-100 text-sm mb-3">
                  Complete single, double, and triple base propellant
                  manufacturing
                </p>
                <ul className="text-primary-200 text-sm space-y-1">
                  <li>• Single base propellants</li>
                  <li>• Double base formulations</li>
                  <li>• Triple base advanced systems</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionRoadmap;
