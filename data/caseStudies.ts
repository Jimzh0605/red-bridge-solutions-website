import { CaseStudy, Metric } from '../types';

// Re-export types for convenience
export type { CaseStudy, Metric };

export const caseStudies: CaseStudy[] = [
  {
    id: 'mechanism-assembly-1',
    title: 'Mechanism Assembly Cost-Down by Fixing RFQ Assumptions',
    client: 'North American vehicle program',
    category: 'Mechanism',
    challenge: 'Quotes were inconsistent because suppliers made different assumptions and priced unknown risk. This created delays, forced rework, and left room for cost creep later on.',
    solution: [
      'Rebuilt the RFQ pack so every supplier bid the same assumptions (volume, Incoterms, packaging, CTQs, inspection).',
      'Ran a capability-matched bid and negotiated using a should-cost breakdown and line-item transparency.',
      'Put change-control into the award so scope drift and add-on charges could not sneak in later.'
    ],
    engineering: [
      'Quick GD&T and CTQ alignment check so inspection plans were measurable and consistent.',
      'Focused DFM/DFA pass to remove obvious cost drivers like redundant hardware and unnecessary operations.'
    ],
    metrics: [
      { percentage: 18, value: "18%", label: "Landed Cost Reduction" },
      { percentage: 62, value: "62%", label: "Quote Variance Reduction" },
      { percentage: 15, value: "15%", label: "Lead-Time Reduction" }
    ]
  },
  {
    id: 'blind-spot',
    title: 'Blind Spot Indicator Integration Without a Tooling Reset',
    client: 'Vehicle platform team',
    category: 'Electronics',
    challenge: 'A full redesign path would have triggered major NRE, tooling resets, and schedule risk. The team needed a lower-impact route that still met quality and durability requirements.',
    solution: [
      'Compared full redesign vs low-impact integration using true landed cost (tooling, validation, labor, scrap risk, timing).',
      'Competitively sourced the bracket and subassembly with clear scope and inspection assumptions.',
      'Locked supplier responsibilities, deliverables, and change triggers to avoid surprise costs during launch.'
    ],
    engineering: [
      'DFA thinking to reduce assembly steps and sensitivity to variation.',
      'Tightened GD&T and interface requirements only where they controlled fit and function, preventing over-tolerancing and cost inflation.'
    ],
    metrics: [
      { percentage: 35, value: "35%", label: "NRE & Tooling Spend" },
      { percentage: 14, value: "14%", label: "Unit Cost Reduction" },
      { percentage: 20, value: "20%", label: "Assembly Time Reduction" }
    ]
  },
  {
    id: 'mechanism-assembly-2',
    title: 'Mechanism Assembly Cost-Down by Fixing RFQ Assumptions (II)',
    client: 'North American vehicle program',
    category: 'Mechanism',
    challenge: 'Quotes were inconsistent because suppliers made different assumptions and priced unknown risk. This created delays, forced rework, and left room for cost creep later on.',
    solution: [
      'Rebuilt the RFQ pack so every supplier bid the same assumptions (volume, Incoterms, packaging, CTQs, inspection).',
      'Ran a capability-matched bid and negotiated using should-cost logic and line-item transparency.',
      'Put change-control into the award so scope drift and add-on charges were controlled.'
    ],
    engineering: [
      'Quick GD&T and CTQ alignment check so inspection plans were measurable and consistent.',
      'Focused DFM/DFA pass to remove obvious cost drivers like redundant hardware and unnecessary operations.'
    ],
    metrics: [
      { percentage: 18, value: "18%", label: "Landed Cost Reduction" },
      { percentage: 62, value: "62%", label: "Quote Variance Reduction" },
      { percentage: 15, value: "15%", label: "Lead-Time Reduction" }
    ]
  },
  {
    id: 'hvac-duct',
    title: 'HVAC Duct Savings Through Manufacturing Route and Supplier Strategy',
    client: 'High-volume platform',
    category: 'HVAC',
    challenge: 'A multi-part duct assembly carried high labor content, duplicated tooling, and more defect opportunities at joints. This drove rework, chargebacks, and unstable landed cost.',
    solution: [
      'RFQ\'d multiple manufacturing scenarios and selected the lowest landed-cost route.',
      'Negotiated tooling amortization and defined build gates with deliverables at each phase.',
      'Locked packaging and logistics assumptions to prevent late landed-cost surprises.'
    ],
    engineering: [
      'DFM/DFA analysis to reduce assembly interfaces that drove defects and rework.',
      'Tightened key CTQs so suppliers did not overbuild or under-control features that mattered for sealing and fit.'
    ],
    metrics: [
      { percentage: 12, value: "12%", label: "Landed Cost Reduction" },
      { percentage: 28, value: "28%", label: "Assembly Labor Reduction" },
      { percentage: 35, value: "35%", label: "Defect Opportunities" }
    ]
  },
  {
    id: 'stamped-metal',
    title: 'Stamped Metal Total Cost of Quality Reduction Through Spec and Controls',
    client: 'Consumer product ecosystem team',
    category: 'Stamping',
    challenge: 'Piece price differences were small, but scrap, rework, and escapes drove real cost. There was also risk of silent changes in material or process that could cause field issues and revalidation.',
    solution: [
      'Locked a procurement-ready material and performance spec into the supplier agreement.',
      'Negotiated a CTQ-based inspection plan tied to measurement method and sampling, not blanket inspection.',
      'Added process controls and strict change triggers to protect long-term quality and cost stability.'
    ],
    engineering: [
      'Applied GD&T where it controlled function and measurement clarity, avoiding unnecessarily tight tolerances that inflate cost.',
      'Reviewed capability controls for critical dimensions and material properties to prevent drift and hidden quality cost.'
    ],
    metrics: [
      { percentage: 9, value: "9%", label: "Piece-Price Reduction" },
      { percentage: 28, value: "28%", label: "Total Cost of Quality" },
      { percentage: 35, value: "35%", label: "Inspection Time" }
    ]
  }
];
