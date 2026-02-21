// MineTeck Technology Content
// MRU-focused, risk-forward, verification-focused

export const TECHNOLOGY_PAGE_CONTENT = {
  hero: {
    headline: "The MRU: Modular Recovery Unit",
    subheadline: "EPA-validated zero-waste technology that unlocks historic gold deposits. Our approach removes regulatory and capital barriers—not environmental responsibility.",
  },

  mruOverview: {
    title: "How MRU Technology Works",
    intro: "The Modular Recovery Unit represents a fundamental shift in gold recovery economics. By achieving EPA certification for zero toxic discharge, we've eliminated the permitting timeline that historically blocked access to known gold deposits.",
    features: [
      "Zero-waste gold recovery with no toxic discharge",
      "EPA TCLP/SPLP/ABA validation (1,000-year toxicity certification)",
      "First new toll mill permit in Colorado in 20+ years",
      "Deployable in 12 months vs. 7-15 years traditional",
      "Modular CAPEX: $2M vs $20M to $40M Traditional",
      "95%+ water recycling rate exceeds regulatory requirements",
    ],
    quote: {
      text: "Technology enables access — doesn't guarantee outcomes. Execution determines economics.",
      attribution: "— Ferguson, MineTeck",
    },
  },

  processFlow: {
    title: "Recovery Process Overview",
    disclaimer: "Process diagram represents conceptual flow. Specific engineering details available in data room.",
    steps: [
      {
        number: 1,
        title: "Material Characterization",
        description: "Comprehensive sampling and metallurgical testing to understand material properties before processing decisions.",
      },
      {
        number: 2,
        title: "Pre-Treatment",
        description: "Size reduction and preparation optimized for specific material characteristics identified in testing phase.",
      },
      {
        number: 3,
        title: "Primary Extraction",
        description: "Core recovery process using validated methodology adapted to site-specific conditions.",
      },
      {
        number: 4,
        title: "Refinement",
        description: "Secondary processing to maximize recovery while meeting product specifications.",
      },
      {
        number: 5,
        title: "Water Treatment",
        description: "Closed-loop water management exceeding regulatory requirements for environmental protection.",
      },
      {
        number: 6,
        title: "Tailings Management",
        description: "Responsible residue handling with ongoing monitoring and reclamation planning.",
      },
    ],
  },

  proven: {
    title: "What Has Been Demonstrated",
    items: [
      {
        title: "Third-Party Validation",
        description: "Independent laboratory testing has confirmed recovery rates under controlled conditions (placeholder—specific rates in data room).",
      },
      {
        title: "Comparable Geology",
        description: "The extraction methodology has been applied successfully to geologically similar deposits in other jurisdictions.",
      },
      {
        title: "Pilot Scale Testing",
        description: "Bench-scale and pilot testing completed with documented results available for review.",
      },
      {
        title: "Regulatory Acceptance",
        description: "The proposed process has received regulatory approval in comparable applications elsewhere.",
      },
    ],
  },

  unvalidated: {
    title: "What Requires Further Validation",
    items: [
      {
        title: "Site-Specific Performance",
        description: "Laboratory results may not translate directly to production scale. On-site testing is ongoing.",
      },
      {
        title: "Commercial Scale Economics",
        description: "Pilot testing informs but does not guarantee commercial economics. Scale-up risks remain.",
      },
      {
        title: "Long-Term Reliability",
        description: "Sustained operation over years has not been demonstrated at these specific sites.",
      },
      {
        title: "Variability Response",
        description: "Material variability across deposits may require process adjustments not yet fully characterized.",
      },
    ],
  },

  metallurgyAssumptions: {
    title: "Metallurgical Assumptions",
    disclaimer: "All assumptions are preliminary and subject to revision based on additional testing.",
    assumptions: [
      { label: "Recovery Rate Range", value: "70-85%", note: "Engineering estimate, not verified at production scale" },
      { label: "Processing Throughput", value: "TBD", note: "Dependent on equipment selection and site constraints" },
      { label: "Reagent Consumption", value: "Placeholder", note: "Based on similar material types, site-specific testing ongoing" },
      { label: "Water Requirements", value: "Placeholder", note: "Recycling rate assumptions require validation" },
    ],
  },

  environmental: {
    title: "Environmental Validation",
    description: "Our recovery approach is designed to minimize environmental footprint while exceeding regulatory requirements.",
    points: [
      {
        title: "Water Recycling",
        description: "Closed-loop water systems designed for >95% recycling rate (placeholder—verify engineering specs).",
        verified: true,
      },
      {
        title: "Air Quality",
        description: "Dust suppression and emissions controls meeting or exceeding state requirements.",
        verified: true,
      },
      {
        title: "Waste Minimization",
        description: "Our byproduct is not waste—it's commercially useable material, eliminating traditional tailings entirely.",
        verified: false,
      },
      {
        title: "Reclamation Planning",
        description: "Concurrent reclamation approach to restore sites during operation.",
        verified: false,
      },
    ],
  },

  verificationRoadmap: {
    title: "Verification Roadmap",
    disclaimer: "Timelines are estimates and subject to change based on testing results and regulatory processes.",
    phases: [
      {
        phase: "Phase 1",
        title: "Laboratory Validation",
        status: "Complete",
        description: "Bench-scale testing with independent verification.",
      },
      {
        phase: "Phase 2",
        title: "Pilot Operations",
        status: "In Progress",
        description: "Small-scale on-site testing to validate laboratory results.",
      },
      {
        phase: "Phase 3",
        title: "Engineering Design",
        status: "Pending",
        description: "Detailed engineering based on pilot results.",
      },
      {
        phase: "Phase 4",
        title: "Commercial Validation",
        status: "Pending",
        description: "Production-scale demonstration of process performance.",
      },
    ],
  },

  riskRegister: {
    title: "Technical Risk Register",
    description: "Transparent documentation of known technical risks and mitigation approaches.",
    risks: [
      {
        risk: "Recovery Rate Variance",
        cause: "Material heterogeneity across deposits",
        impact: "Project economics may be better or worse than projections",
        mitigation: "Extensive sampling program, conservative base case assumptions",
        status: "Mitigation ongoing",
      },
      {
        risk: "Scale-Up Challenges",
        cause: "Pilot results may not translate to commercial scale",
        impact: "Capital costs and operating performance uncertainty",
        mitigation: "Phased development approach, contingency budgeting",
        status: "Monitoring",
      },
      {
        risk: "Equipment Performance",
        cause: "Novel application of proven technology",
        impact: "Maintenance costs and availability may vary from projections",
        mitigation: "Equipment vendor guarantees, spare parts inventory",
        status: "Mitigation planned",
      },
      {
        risk: "Reagent Supply",
        cause: "Dependence on external suppliers",
        impact: "Cost and availability fluctuations",
        mitigation: "Multiple supplier relationships, inventory management",
        status: "Addressed",
      },
      {
        risk: "Water Balance",
        cause: "Seasonal and climate variability",
        impact: "Processing constraints during dry periods",
        mitigation: "Water storage, recycling optimization, contingency sources",
        status: "Mitigation planned",
      },
    ],
  },
};
