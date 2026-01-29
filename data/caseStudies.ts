export interface Metric {
  percentage: number;
  value: string;
  label: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  clientType: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: Metric[];
  image?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'automotive-die-cast',
    title: 'Precision Aluminum Die-Casting for Tier 1 Automotive',
    clientType: 'Tier 1 Automotive Supplier',
    industry: 'Automotive',
    challenge: 'The client was experiencing a 15% rejection rate on complex aluminum housings due to internal porosity, leading to significant production line stoppages and substantial rework costs.',
    solution: 'Red Bridge Solutions audited the existing supply chain and identified process failures. We migrated production to a vetted facility with high-vacuum die-casting capabilities and implemented a mandatory ISO-standard X-ray inspection protocol for every batch.',
    results: [
      'Defect rate reduced from 15% to <0.5%',
      'Annual savings of $215,000 in scrap reduction',
      'Zero production line stoppages in 12 months'
    ],
    metrics: [
      {
        percentage: 99,
        value: "99.2%",
        label: "Acceptance Rate",
        description: "Achieved through high-vacuum die-casting and X-ray protocols."
      },
      {
        percentage: 85,
        value: "$215k",
        label: "Annual Savings",
        description: "Direct capital preservation via scrap reduction and efficiency."
      }
    ],
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'iot-enclosure-dfm',
    title: 'DFM Optimization for Consumer IoT Device',
    clientType: 'Hardware Startup',
    industry: 'Consumer Electronics',
    challenge: 'A startup needed to transition from 3D-printed prototypes to mass production (10k units) but received prohibitive tooling quotes due to complex undercuts in their initial design.',
    solution: 'Our engineering team performed a comprehensive Design for Manufacturing (DFM) review. We redesigned the snap-fits and internal bosses to eliminate the need for complex side-action sliders in the mold tool, without compromising the device aesthetic or function.',
    results: [
      'Mold tooling cost reduced by 38% ($11.5k savings)',
      'Cycle time reduced by 15%',
      'Accelerated time-to-market by 3 weeks'
    ],
    metrics: [
      {
        percentage: 38,
        value: "38%",
        label: "Tooling Cost Reduction",
        description: "Smart DFM eliminated complex side-actions in the mold."
      },
      {
        percentage: 65,
        value: "3 Wks",
        label: "Faster Market Entry",
        description: "Accelerated production timeline versus initial estimates."
      }
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'heavy-machinery-logistics',
    title: 'Supply Chain Stabilization for Heavy Machinery',
    clientType: 'Industrial Equipment Manufacturer',
    industry: 'Industrial Machinery',
    challenge: 'Volatile shipping lanes caused unpredictable delays (up to 6 weeks) for critical cast iron components, disrupting the client’s North American assembly schedule.',
    solution: 'We restructured the logistics strategy, consolidating shipments at a central Asian hub to enable full container loads (FCL) and negotiated priority space guarantees with freight forwarders. We also established a buffer stock agreement with the manufacturer.',
    results: [
      'Lead time variability reduced by 72%',
      'Freight costs lowered by 12% through consolidation',
      'Restored just-in-time assembly workflow'
    ],
    metrics: [
      {
        percentage: 72,
        value: "72%",
        label: "Less Variability",
        description: "Stabilized lead times ensuring predictable assembly schedules."
      },
      {
        percentage: 12,
        value: "12%",
        label: "Logistics Savings",
        description: "Achieved through FCL consolidation strategies."
      }
    ],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800'
  }
];