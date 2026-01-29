export interface Metric {
  percentage: number; // For the progress bar width (0-100)
  value: string;      // The display text (e.g., "18%", "$215k")
  label: string;      // The label (e.g., "Landed Cost")
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string; // Used for filtering
  challenge: string;
  solution: string;
  metrics: [Metric, Metric, Metric]; // Exactly 3 metrics per case
  image: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'mechanism-assembly',
    title: 'Mechanism Assembly: Landed Cost Down + Quote Variance Eliminated',
    client: 'North American vehicle program',
    category: 'Mechanism',
    challenge: 'Quote spread was huge due to unclear assumptions and suppliers padding risk.',
    solution: 'Standardized RFQ pack + apples-to-apples assumptions. Competitive bid across capability-matched suppliers + should-cost negotiation. Locked change-control to prevent cost creep.',
    metrics: [
      { percentage: 18, value: "18%", label: "Landed Cost Redux" },
      { percentage: 62, value: "62%", label: "Variance Reduction" },
      { percentage: 15, value: "15%", label: "Lead-Time Redux" }
    ],
    image: 'https://images.unsplash.com/photo-1532187643605-48419630508d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'safety-clip',
    title: 'Safety-Critical Clip: Piece Price Reduced Without Paying a "Risk Tax"',
    client: 'High-volume interior system',
    category: 'Molding',
    challenge: 'Suppliers priced high due to ambiguous acceptance/testing and perceived liability risk.',
    solution: 'Converted requirements into measurable procurement language (CTQs, sampling). Expanded supplier pool to automation specialists. Negotiated line-item transparency.',
    metrics: [
      { percentage: 55, value: "55%", label: "Price Reduction" },
      { percentage: 40, value: "40%", label: "ECO Cost Avoidance" },
      { percentage: 30, value: "30%", label: "Delay Reduction" }
    ],
    image: 'https://images.unsplash.com/photo-1622467827417-bbe2237067a9?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hvac-duct',
    title: 'HVAC Duct: $/Unit Savings via Manufacturing Route + Sourcing Strategy',
    client: 'High-volume platform',
    category: 'HVAC',
    challenge: 'Multi-part assemblies drove high labor, tooling duplication, and defect risk.',
    solution: 'RFQ\'d multiple manufacturing scenarios, selected lowest landed-cost route. Negotiated tooling amortization and validation gates. Locked packaging/logistics assumptions.',
    metrics: [
      { percentage: 12, value: "12%", label: "Landed Cost Redux" },
      { percentage: 28, value: "28%", label: "Labor Content Redux" },
      { percentage: 35, value: "35%", label: "Defect Reduction" }
    ],
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sun-visor',
    title: 'Sun Visor: Unit Cost Down + Warranty Risk Controlled',
    client: 'High-volume interior commodity',
    category: 'Interior',
    challenge: 'High piece price; redesign risk could create warranty exposure and wipe out savings.',
    solution: 'Split cost drivers in RFQ to force transparency. Negotiated standardized materials/hardware. Defined durability acceptance so suppliers didn\'t price "unknown risk".',
    metrics: [
      { percentage: 16, value: "16%", label: "Unit Cost Redux" },
      { percentage: 22, value: "22%", label: "Warranty Risk Redux" },
      { percentage: 10, value: "10%", label: "Freight Cost Redux" }
    ],
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sourcing-os',
    title: 'Sourcing Operating System: Repeatable Cost-Down Without Chaos',
    client: 'Multi-product hardware brand',
    category: 'Strategy',
    challenge: 'Inconsistent quoting and supplier churn created change orders and missed dates.',
    solution: 'Implemented RFQ templates, supplier scorecards, quote model, build gates. Standardized commercial terms (Incoterms, MOQ, Warranty).',
    metrics: [
      { percentage: 25, value: "25%", label: "Faster Onboarding" },
      { percentage: 18, value: "18%", label: "Avg Cost Reduction" },
      { percentage: 30, value: "30%", label: "Change Order Redux" }
    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'blind-spot',
    title: 'Blind Spot Indicator Integration: Avoided Major Re-Tooling Cost Bucket',
    client: 'Vehicle platform team',
    category: 'Electronics',
    challenge: 'Mirror redesign would trigger major tooling/NRE and schedule risk.',
    solution: 'Compared full redesign vs low-impact integration route. Competitive bid for bracket/subassembly. Locked scope assumptions to prevent supplier "extras".',
    metrics: [
      { percentage: 35, value: "35%", label: "NRE/Tooling Saved" },
      { percentage: 14, value: "14%", label: "Unit Cost Redux" },
      { percentage: 20, value: "20%", label: "Assembly Time Redux" }
    ],
    image: 'https://images.unsplash.com/photo-1552857026-64bc952f444c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'compliance',
    title: 'Compliance Component: Cost-Stable Supplier + Controlled Process',
    client: 'Safety-focused interior system',
    category: 'Safety',
    challenge: 'Compliance uncertainty drives inflated pricing and long-term revalidation risk.',
    solution: 'Selected suppliers on process-control maturity. RFQ language: measurable pass/fail. Long-term price stability via locked process parameters.',
    metrics: [
      { percentage: 10, value: "10%", label: "Unit Cost Redux" },
      { percentage: 45, value: "45%", label: "Process Drift Risk" },
      { percentage: 20, value: "20%", label: "Revalidation Expense" }
    ],
    image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'interior-refresh',
    title: 'Interior Refresh: Prevented Launch "Cost Blowups" via Supplier Alignment',
    client: 'High-volume vehicle refresh',
    category: 'Interior',
    challenge: 'Many suppliers + inconsistent assumptions = change orders, delays, cosmetic disputes.',
    solution: 'Standardized RFQ packages. Build-phase gates with defined deliverables. Cosmetic acceptance + packaging requirements + dispute rules.',
    metrics: [
      { percentage: 33, value: "33%", label: "Change Order Value" },
      { percentage: 17, value: "17%", label: "OTD Improvement" },
      { percentage: 22, value: "22%", label: "Rework Reduction" }
    ],
    image: 'https://images.unsplash.com/photo-1562657563-7eb6da61661d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'multi-program',
    title: 'Multi-Program VA/VE: Portfolio-Level Cost Down Through Leverage',
    client: 'Multiple mechanism programs',
    category: 'Strategy',
    challenge: 'One-off sourcing missed leverage; suppliers priced each program independently.',
    solution: 'Grouped parts into commodity families to negotiate volume tiers. Used should-cost playbook. Routed work to specialists vs integrators.',
    metrics: [
      { percentage: 15, value: "15%", label: "Avg Cost Reduction" },
      { percentage: 50, value: "50%", label: "Spread Reduction" },
      { percentage: 12, value: "12%", label: "Supplier Consolidation" }
    ],
    image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'stamped-metal',
    title: 'Stamped-Metal Component: Total Cost of Quality Reduced',
    client: 'Consumer product ecosystem team',
    category: 'Stamping',
    challenge: 'Hidden costs (scrap, rework, escapes) outweighed small piece-price differences.',
    solution: 'Locked procurement-ready material spec. Negotiated "right-sized" inspection. Added GR&R expectations + strict change-control.',
    metrics: [
      { percentage: 9, value: "9%", label: "Piece-Price Redux" },
      { percentage: 28, value: "28%", label: "Cost of Quality" },
      { percentage: 35, value: "35%", label: "Inspection Time" }
    ],
    image: 'https://images.unsplash.com/photo-1563968743333-044cef8004c3?auto=format&fit=crop&q=80&w=800'
  }
];