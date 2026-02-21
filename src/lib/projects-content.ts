// MineTeck Projects Content
// Portfolio-focused, infrastructure-driven, multi-project approach

export interface ProjectCardData {
  slug: string;
  name: string;
  status: "Permitted" | "Permitted Reclamation" | "Lease Secured" | "Under Contract";
  image?: string; // placeholder for now
  capital: string;
  timeline: string;
  projectType: string;
  mruStatus: string;
  material: string;
  revenue?: string;
  differentiator: string;
}

// Keep the detailed ProjectData for detail pages
export interface ProjectData {
  slug: string;
  name: string;
  tagline: string;
  status: "Active" | "Development" | "Evaluation";
  overview: string;
  siteContext: {
    location: string;
    description: string;
    historicalSignificance?: string;
  };
  infrastructure: {
    title: string;
    items: string[];
  };
  permits: {
    status: string;
    items: string[];
  };
  known: {
    title: string;
    items: string[];
  };
  unknown: {
    title: string;
    items: string[];
  };
  executionRisks: string[];
  gatedContent: {
    title: string;
    items: string[];
  };
}

// New portfolio card data
export const PROJECT_CARDS: ProjectCardData[] = [
  {
    slug: "gladstone",
    name: "Gladstone Toll Mill",
    status: "Permitted",
    image: "gladstone-toll-mill",
    capital: "$6.0M",
    timeline: "12–18 months",
    projectType: "Toll Mill / Processing Site",
    mruStatus: "Pilot Upscaling to Production Volume",
    material: "12 acres, 4-6 gpt",
    revenue: "$17M/yr toll + $40M own processing",
    differentiator: "Only Toll Mill Permit Since 2002",
  },
  {
    slug: "russell-gulch",
    name: "Russell Gulch",
    status: "Permitted Reclamation",
    image: "russell-gulch",
    capital: "$1.25M",
    timeline: "3-6 months",
    projectType: "Tailings Reprocessing",
    mruStatus: "Proven",
    material: "70K+ tons @ 4 gpt. Fastest to Revenue",
    differentiator: "Fastest to Revenue",
  },
  {
    slug: "crown",
    name: "The Quarry",
    status: "Lease Secured",
    image: "the-quarry",
    capital: "$3.6M",
    timeline: "18–24 months",
    projectType: "New Mill to Process near-by piles",
    mruStatus: "Pilot",
    material: "500K+ tons @ 4-6-10 gpt",
    differentiator: "Largest Material Volume",
  },
  {
    slug: "b-group",
    name: "Stanley Road",
    status: "Under Contract",
    image: "stanley-rd",
    capital: "$4.5M",
    timeline: "18–24 months",
    projectType: "Large Resource, plus Mill Site, plus Mines",
    mruStatus: "Under Contract",
    material: "200K tons @ 4-6 gpt",
    differentiator: "Strategic Adjacency to Mill",
  },
];

export const PROJECTS_PAGE_CONTENT = {
  hero: {
    headline: "Four Projects. One Gold Rush.",
    subheadline: "Technology Proven at Gladstone. Replicating Across Colorado.",
  },
  intro:
    "MineTeck's portfolio approach de-risks the single-site gamble. Each project represents a permitted or near-permitted site with above-ground material, pre-contracted processing agreements, and staggered revenue timelines. Our Modular Recovery Unit technology—proven at Gladstone—replicates across all sites.",
  disclaimer:
    "All project information is provided for informational purposes only. Access to detailed financials, permits, and projections requires qualified investor verification.",
};

// Keep detailed project data for detail pages
export const PROJECTS: ProjectData[] = [
  {
    slug: "gladstone",
    name: "Gladstone Toll Mill",
    tagline: "First toll mill permit in Colorado since 2002",
    status: "Active",
    overview:
      "The Gladstone site represents MineTeck's primary infrastructure asset. A permitted toll mill facility with operational MRU technology, this site eliminates the greenfield permitting timeline that typically constrains new mining operations in Colorado.",
    siteContext: {
      location: "San Juan County, Colorado",
      description:
        "Located in the historic San Juan mining district, the Gladstone site sits on a legacy mill location with established road access and proximity to regional utilities.",
      historicalSignificance:
        "The site has documented production history dating to the late 1800s, with significant gold recovery during multiple operating periods.",
    },
    infrastructure: {
      title: "Existing Infrastructure",
      items: [
        "Permitted mill facility footprint",
        "Year-round road access maintained",
        "Power infrastructure within 8 miles",
        "Water rights secured",
        "Existing building foundations and utilities",
        "MRU technology operational on-site",
      ],
    },
    permits: {
      status: "Active permits in good standing",
      items: [
        "Mining and reclamation permits current",
        "Water discharge permits active",
        "Air quality permits in compliance",
        "Environmental baseline studies complete",
        "First toll mill permit issued in 20+ years",
      ],
    },
    known: {
      title: "Known & Verified",
      items: [
        "12 acres of material at 4-6 gpt",
        "Existing permit status confirmed",
        "MRU technology performance validated",
        "Revenue model: $17M/yr toll + $40M own processing",
        "Capital requirement: $4.0M",
      ],
    },
    unknown: {
      title: "Unverified / Requires Validation",
      items: [
        "Long-term metallurgical recovery rates",
        "Toll contract pipeline beyond initial agreements",
        "Operating cost optimization potential",
        "Timeline to full capacity utilization",
      ],
    },
    executionRisks: [
      "Equipment scaling may exceed initial cost estimates",
      "Toll contract acquisition dependent on market conditions",
      "Skilled labor availability in remote location",
      "Utility upgrade requirements during scale-up",
    ],
    gatedContent: {
      title: "Detailed Gladstone Analysis",
      items: [
        "Engineering feasibility study",
        "Capital expenditure breakdown",
        "Toll contract pipeline",
        "Environmental compliance documentation",
        "Financial projections and assumptions",
      ],
    },
  },
  {
    slug: "russell-gulch",
    name: "Russell Gulch",
    tagline: "Fastest path to revenue with proven MRU technology",
    status: "Development",
    overview:
      "The Russell Gulch project targets historic tailings deposits with documented gold content. With permitted reclamation status and proven MRU technology, this represents MineTeck's fastest path to revenue generation.",
    siteContext: {
      location: "Gilpin County, Colorado",
      description:
        "Situated in the historic Central City mining district, Russell Gulch contains accumulated tailings from over a century of mining activity.",
      historicalSignificance:
        "One of the earliest gold mining areas in Colorado, with production dating to the 1859 gold rush.",
    },
    infrastructure: {
      title: "Site Infrastructure",
      items: [
        "Paved road access year-round",
        "Grid power available at site boundary",
        "Municipal water connection feasible",
        "Proximity to Denver labor market (~45 miles)",
        "Existing tailings containment structures",
      ],
    },
    permits: {
      status: "Permitted Reclamation",
      items: [
        "Reclamation permits active",
        "Environmental assessments complete",
        "Tailings characterization studies complete",
        "Community engagement established",
        "6–9 month timeline to production",
      ],
    },
    known: {
      title: "Known & Verified",
      items: [
        "70K+ tons of material at 8 gpt",
        "Reclamation permit in hand",
        "MRU technology proven compatible",
        "Capital requirement: $1.25M",
        "Fastest to revenue in portfolio",
      ],
    },
    unknown: {
      title: "Unverified / Requires Validation",
      items: [
        "Actual gold grade consistency across deposit",
        "Recovery rates with proposed technology",
        "Water treatment requirements",
        "Operating cost optimization",
      ],
    },
    executionRisks: [
      "Tailings grade may vary from sampling estimates",
      "Processing throughput ramp-up timeline",
      "Water treatment costs may impact margins",
      "Equipment mobilization logistics",
    ],
    gatedContent: {
      title: "Russell Gulch Due Diligence",
      items: [
        "Tailings assay results and analysis",
        "MRU deployment specifications",
        "Environmental compliance documentation",
        "Production timeline and milestones",
        "Economic model and sensitivity analysis",
      ],
    },
  },
  {
    slug: "crown",
    name: "The Quarry",
    tagline: "Largest material volume in portfolio",
    status: "Evaluation",
    overview:
      "The Crown Property represents MineTeck's largest material opportunity with 500K+ tons at 10 gpt. With lease secured and scalable MRU technology ready for deployment, this site anchors the long-term portfolio strategy.",
    siteContext: {
      location: "Clear Creek County, Colorado",
      description:
        "The Crown Property spans multiple historic claim areas in a geologically favorable zone with documented high-grade mineralization.",
      historicalSignificance:
        "Adjacent to historically productive mines with documented gold and silver production spanning over a century.",
    },
    infrastructure: {
      title: "Available Infrastructure",
      items: [
        "Seasonal road access (improvements planned)",
        "Power lines within 5 miles",
        "Historic mine workings for underground access",
        "Water sources identified on property",
        "Scalable MRU deployment path",
      ],
    },
    permits: {
      status: "Lease Secured",
      items: [
        "Mineral rights lease executed",
        "Surface access agreements secured",
        "Permitting timeline: 18–24 months",
        "Environmental baseline work in progress",
      ],
    },
    known: {
      title: "Known & Verified",
      items: [
        "500K+ tons of material at 10 gpt",
        "Lease agreements executed",
        "Geological surveys completed",
        "Capital requirement: $3.6M",
        "Largest material volume in portfolio",
      ],
    },
    unknown: {
      title: "Unverified / Requires Validation",
      items: [
        "Optimal extraction methodology",
        "Infrastructure development final costs",
        "Permitting timeline confirmation",
        "Environmental baseline completion",
      ],
    },
    executionRisks: [
      "Extended permitting timeline possible",
      "Infrastructure costs in remote location",
      "Underground access development complexity",
      "Longer timeline before production",
    ],
    gatedContent: {
      title: "Crown Property Assessment",
      items: [
        "Geological compilation and grade analysis",
        "Lease and ownership documentation",
        "Development scenario modeling",
        "Capital structure proposal",
        "Risk-adjusted valuation framework",
      ],
    },
  },
  {
    slug: "b-group",
    name: "Stanley Road",
    tagline: "Strategic adjacency to Gladstone mill",
    status: "Evaluation",
    overview:
      "Stanley Road provides strategic adjacency to the Gladstone toll mill, enabling efficient material processing and shared infrastructure. Under contract with 400K tons at 6 gpt, this represents meaningful portfolio expansion.",
    siteContext: {
      location: "San Juan County, Colorado",
      description:
        "Adjacent to Gladstone operations, Stanley Road leverages existing infrastructure and processing capacity.",
      historicalSignificance: "Part of the broader San Juan mining district with documented production history.",
    },
    infrastructure: {
      title: "Infrastructure Status",
      items: [
        "Adjacent to Gladstone toll mill",
        "Shared road access with primary site",
        "Existing power and water infrastructure nearby",
        "MRU processing capacity available at Gladstone",
      ],
    },
    permits: {
      status: "Under Contract",
      items: [
        "Property acquisition under contract",
        "Due diligence in progress",
        "Permitting pathway identified",
        "Timeline: 18–24 months to production",
      ],
    },
    known: {
      title: "Known & Verified",
      items: [
        "400K tons of material at 6 gpt",
        "Strategic adjacency to Gladstone",
        "Shared infrastructure opportunity",
        "Capital requirement: $4.5M",
      ],
    },
    unknown: {
      title: "Unverified / Requires Validation",
      items: [
        "Final acquisition terms",
        "Independent permitting requirements",
        "Material transport logistics",
        "Integration timeline with Gladstone operations",
      ],
    },
    executionRisks: [
      "Acquisition may not close on projected terms",
      "Independent permitting may be required",
      "Integration complexity with existing operations",
      "Capital allocation timing",
    ],
    gatedContent: {
      title: "Stanley Road Portfolio Details",
      items: [
        "Acquisition term sheet",
        "Geological and material analysis",
        "Integration scenario modeling",
        "Shared infrastructure cost savings",
        "Development timeline and milestones",
      ],
    },
  },
];
