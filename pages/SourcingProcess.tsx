import React, { memo } from 'react';
import {
  MagnifyingGlass,
  Factory,
  Cube,
  Wrench,
  ShieldCheck,
  TrendUp,
  Check,
  Icon
} from 'phosphor-react';

interface Stage {
  id: number;
  title: string;
  icon: Icon;
  duration: string;
  bullets: Array<{
    icon: Icon;
    text: string;
  }>;
}

const STAGES: Stage[] = [
  {
    id: 1,
    title: 'Project Assessment',
    icon: MagnifyingGlass,
    duration: 'Week 1-2',
    bullets: [
      { icon: MagnifyingGlass, text: 'Technical review identifying cost-saving opportunities' },
      { icon: MagnifyingGlass, text: 'Scope document with timeline and feasibility assessment' },
      { icon: MagnifyingGlass, text: 'Go/no-go recommendation with risk analysis' },
    ],
  },
  {
    id: 2,
    title: 'Supplier Selection',
    icon: Factory,
    duration: 'Week 3-6',
    bullets: [
      { icon: Factory, text: 'Factory audits evaluating capabilities and quality systems' },
      { icon: Factory, text: 'Supplier comparison matrix with engineering assessment' },
      { icon: Factory, text: 'Vetted supplier recommendation with negotiated pricing' },
    ],
  },
  {
    id: 3,
    title: 'Sample Development',
    icon: Cube,
    duration: 'Week 7-14',
    bullets: [
      { icon: Cube, text: 'Prototype testing and DFM optimization iterations' },
      { icon: Cube, text: 'Sample validation with design refinements' },
      { icon: Cube, text: 'Cost optimization and detailed sample reports' },
    ],
  },
  {
    id: 4,
    title: 'Production Setup',
    icon: Wrench,
    duration: 'Week 15-26',
    bullets: [
      { icon: Wrench, text: 'Tooling validation and first article inspection' },
      { icon: Wrench, text: 'Production launch with FAI reports' },
      { icon: Wrench, text: 'Tooling approval and production readiness confirmation' },
    ],
  },
  {
    id: 5,
    title: 'Quality Assurance',
    icon: ShieldCheck,
    duration: 'Week 27-29',
    bullets: [
      { icon: ShieldCheck, text: 'QC plan development and inspection protocols' },
      { icon: ShieldCheck, text: 'Defect management with sampling plans' },
      { icon: ShieldCheck, text: 'QC documentation and acceptance criteria' },
    ],
  },
  {
    id: 6,
    title: 'Ongoing Optimization',
    icon: TrendUp,
    duration: 'Ongoing',
    bullets: [
      { icon: TrendUp, text: 'Performance monitoring with supplier scorecards' },
      { icon: TrendUp, text: 'Continuous improvement and cost reduction opportunities' },
      { icon: TrendUp, text: 'Quality metrics and monitoring reports' },
    ],
  },
];

interface ServiceTier {
  name: string;
  stages: boolean[];
  timeline: string;
  bestFor: string;
  description: string;
}

const SERVICE_TIERS: ServiceTier[] = [
  {
    name: 'Essentials',
    stages: [true, true, false, false, false, false],
    timeline: '2-4 weeks',
    bestFor: 'Discovery & introductions',
    description: 'Perfect for companies exploring Asian manufacturing options',
  },
  {
    name: 'Professional',
    stages: [true, true, true, true, true, false],
    timeline: '2-4 months',
    bestFor: 'Full sourcing & production launch',
    description: 'Complete sourcing solution from assessment to first production run',
  },
  {
    name: 'Enterprise',
    stages: [true, true, true, true, true, true],
    timeline: '4-12+ months',
    bestFor: 'Multi-site lifecycle management',
    description: 'End-to-end partnership with ongoing optimization and monitoring',
  },
];

const StageCard = memo<{
  stage: Stage;
}>(({ stage }) => {
  const Icon = stage.icon;

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg shadow-gray-300/50">
      {/* Stage Header with colored background */}
      <div className="bg-primary text-white px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center rounded-full bg-white bg-opacity-20 w-10 h-10 flex-shrink-0">
              <Icon size={22} weight="bold" />
            </div>
            <h3 className="font-serif font-bold text-lg md:text-xl">
              {stage.title}
            </h3>
          </div>
          <div className="text-xs md:text-sm font-medium bg-white bg-opacity-20 px-3 py-1 rounded-full whitespace-nowrap ml-2">
            {stage.duration}
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="py-6 px-6">
        <ul className="space-y-3">
          {stage.bullets.map((bullet, idx) => {
            const BulletIcon = bullet.icon;
            return (
              <li key={idx} className="flex items-start gap-3">
                <BulletIcon
                  size={18}
                  weight="regular"
                  className="text-primary flex-shrink-0 mt-0.5"
                />
                <span className="text-gray-700 text-sm leading-relaxed">
                  {bullet.text}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
});

StageCard.displayName = 'StageCard';


export const SourcingProcess: React.FC = memo(() => {

  return (
    <div className="bg-offwhite">
      {/* Header Section */}
      <section className="bg-primary text-white py-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-5 transform skew-x-12 translate-x-20" aria-hidden="true"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            Our Sourcing Process
          </h1>
          <p className="text-lg md:text-xl font-light leading-relaxed opacity-90">
            Six proven stages that reduce risk, control costs, and deliver quality manufacturing partnerships
          </p>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 md:py-32" aria-label="Sourcing process roadmap">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stage Cards - Zigzag Layout with Vertical Line */}
          <div className="relative">
            {/* Vertical Line - Desktop only */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary -translate-x-1/2" aria-hidden="true">
              {/* Dots on the line */}
              {STAGES.map((stage, index) => (
                <div
                  key={`dot-${stage.id}`}
                  className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"
                  style={{
                    top: `${(index / (STAGES.length - 1)) * 100}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  aria-hidden="true"
                />
              ))}
            </div>

            {STAGES.map((stage, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={stage.id}
                  className={`
                    relative mb-12 md:mb-16
                    ${isLeft ? 'md:mr-[50%] md:pr-16' : 'md:ml-[50%] md:pl-16'}
                  `}
                >
                  <StageCard stage={stage} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Tiers Table */}
      <section className="py-20 md:py-32 bg-white" aria-label="Service tier comparison">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
              Choose Your Service Tier
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select the level of support that matches your sourcing needs
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-4 px-6 font-serif font-bold text-lg text-charcoal">
                    Stage
                  </th>
                  {SERVICE_TIERS.map((tier) => (
                    <th
                      key={tier.name}
                      className="py-4 px-6 text-center font-serif font-bold text-lg text-charcoal"
                    >
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {STAGES.map((stage, stageIdx) => (
                  <tr
                    key={stage.id}
                    className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 px-6 font-medium text-charcoal">
                      {stage.title}
                    </td>
                    {SERVICE_TIERS.map((tier) => (
                      <td key={tier.name} className="py-4 px-6 text-center">
                        {tier.stages[stageIdx] ? (
                          <Check size={24} weight="bold" className="inline-block text-primary" />
                        ) : (
                          <span className="text-gray-300 text-xl">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
                {/* Timeline Row */}
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-4 px-6 font-semibold text-charcoal">
                    Timeline
                  </td>
                  {SERVICE_TIERS.map((tier) => (
                    <td key={tier.name} className="py-4 px-6 text-center font-medium text-charcoal">
                      {tier.timeline}
                    </td>
                  ))}
                </tr>
                {/* Best For Row */}
                <tr className="bg-gray-50">
                  <td className="py-4 px-6 font-semibold text-charcoal">
                    Best For
                  </td>
                  {SERVICE_TIERS.map((tier) => (
                    <td key={tier.name} className="py-4 px-6 text-center">
                      <div className="font-medium text-primary mb-1">
                        {tier.bestFor}
                      </div>
                      <div className="text-sm text-gray-600">
                        {tier.description}
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-8">
            {SERVICE_TIERS.map((tier) => (
              <div
                key={tier.name}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-2xl font-serif font-bold text-charcoal mb-2">
                  {tier.name}
                </h3>
                <p className="text-primary font-medium mb-1">{tier.bestFor}</p>
                <p className="text-sm text-gray-600 mb-4">{tier.description}</p>
                <p className="text-sm font-semibold text-charcoal mb-4">
                  Timeline: {tier.timeline}
                </p>
                <div className="space-y-2 border-t border-gray-200 pt-4">
                  {STAGES.map((stage, stageIdx) => (
                    <div key={stage.id} className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">{stage.title}</span>
                      {tier.stages[stageIdx] ? (
                        <Check size={20} weight="bold" className="text-primary" />
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
});

SourcingProcess.displayName = 'SourcingProcess';
