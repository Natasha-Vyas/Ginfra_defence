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
    <section className="hidden lg:block relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 section-padding overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-200/50 mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-medium text-blue-700">
              Production Roadmap
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
              Staged Production
            </span>
            <br />
            <span className="text-slate-700 text-2xl md:text-3xl lg:text-4xl font-medium">
              Roadmap
            </span>
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our modular, stage-wise approach minimizes risk and enables targeted
            Transfer of Technology (ToT) per stage, ensuring rapid qualification
            and high-volume supply capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {stages.map((stage, index) => (
            <div
              key={index}
              className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 hover:border-blue-300/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-2xl flex items-center justify-center font-bold text-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {stage.title}
                      </h3>
                      <p className="text-sm text-slate-500 font-medium">{stage.stage}</p>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${getStatusColor(
                      stage.status
                    )}`}
                  >
                    {stage.status}
                  </span>
                </div>

                <p className="text-slate-600 leading-relaxed mb-6">{stage.description}</p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-blue-600"
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
                    <span className="text-sm text-slate-600 font-medium">
                      Timeline: {stage.timeline}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-slate-800">
                      Key Features:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {stage.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-lg text-xs font-medium border border-blue-200/50"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductionRoadmap;
