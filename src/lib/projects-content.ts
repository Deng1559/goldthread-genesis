// MineTeck Projects Content
// All placeholder copy - thesis-driven, risk-forward, no hype

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

export const PROJECTS: ProjectData[] = [
  {
    slug: "gladstone",
    name: "Gladstone Site",
    tagline: "Historic mill site with existing infrastructure",
    status: "Active",
    overview: "The Gladstone site represents MineTeck's primary infrastructure asset. A permitted facility with existing processing infrastructure, this site eliminates the greenfield permitting timeline that typically constrains new mining operations in Colorado.",
    siteContext: {
      location: "San Juan County, Colorado",
      description: "Located in the historic San Juan mining district, the Gladstone site sits on a legacy mill location with established road access and proximity to regional utilities.",
      historicalSignificance: "The site has documented production history dating to the late 1800s, with significant gold recovery during multiple operating periods (placeholder—verify with data room).",
    },
    infrastructure: {
      title: "Existing Infrastructure",
      items: [
        "Permitted mill facility footprint",
        "Year-round road access maintained",
        "Power infrastructure within 8 miles",
        "Water rights secured (placeholder—verify)",
        "Existing building foundations and utilities",
        "Rail spur connection available in region",
      ],
    },
    permits: {
      status: "Active permits in good standing",
      items: [
        "Mining and reclamation permits current",
        "Water discharge permits active",
        "Air quality permits in compliance",
        "Environmental baseline studies complete",
        "Placeholder—specific permit details in data room",
      ],
    },
    known: {
      title: "Known & Verified",
      items: [
        "Documented historical production records",
        "Existing permit status confirmed",
        "Infrastructure condition assessed",
        "Access routes and easements verified",
        "Utility connection feasibility confirmed",
      ],
    },
    unknown: {
      title: "Unverified / Requires Validation",
      items: [
        "Current metallurgical recovery rates",
        "Remaining resource estimates",
        "Equipment modernization costs",
        "Timeline to production restart",
        "Operating cost projections",
      ],
    },
    executionRisks: [
      "Equipment modernization may exceed initial cost estimates",
      "Regulatory re-approval process timeline uncertain",
      "Skilled labor availability in remote location",
      "Utility upgrade requirements not fully scoped",
    ],
    gatedContent: {
      title: "Detailed Gladstone Analysis",
      items: [
        "Engineering feasibility study",
        "Capital expenditure breakdown",
        "Production timeline modeling",
        "Environmental compliance documentation",
        "Financial projections and assumptions",
      ],
    },
  },
  {
    slug: "russell-gulch",
    name: "Russell Gulch",
    tagline: "Tailings reprocessing opportunity with ESG alignment",
    status: "Development",
    overview: "The Russell Gulch project targets historic tailings deposits with documented gold content. Modern extraction methods may unlock value from material that was uneconomic under legacy processing technology.",
    siteContext: {
      location: "Gilpin County, Colorado",
      description: "Situated in the historic Central City mining district, Russell Gulch contains accumulated tailings from over a century of mining activity.",
      historicalSignificance: "One of the earliest gold mining areas in Colorado, with production dating to the 1859 gold rush (placeholder—verify dates).",
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
      status: "Permitting in progress",
      items: [
        "Initial environmental assessments complete",
        "Tailings characterization studies ongoing",
        "Community engagement initiated",
        "Reclamation bond requirements being evaluated",
        "Placeholder—permit timeline in data room",
      ],
    },
    known: {
      title: "Known & Verified",
      items: [
        "Tailings volume estimates from historical records",
        "Access and land control confirmed",
        "Preliminary environmental baseline established",
        "Community stakeholder mapping complete",
      ],
    },
    unknown: {
      title: "Unverified / Requires Validation",
      items: [
        "Actual gold grade in tailings material",
        "Recovery rates with proposed technology",
        "Full permitting timeline and costs",
        "Water treatment requirements",
        "Community approval outcome",
      ],
    },
    executionRisks: [
      "Tailings grade may be lower than historical estimates suggest",
      "Permitting timeline subject to regulatory discretion",
      "Community opposition could delay or block project",
      "Water treatment costs may impact project economics",
    ],
    gatedContent: {
      title: "Russell Gulch Due Diligence",
      items: [
        "Tailings assay results and analysis",
        "Proposed recovery technology specifications",
        "Environmental impact assessment",
        "Permitting roadmap and timeline",
        "Economic model and sensitivity analysis",
      ],
    },
  },
  {
    slug: "crown",
    name: "Crown Property",
    tagline: "Land consolidation play with exploration upside",
    status: "Evaluation",
    overview: "The Crown Property represents a strategic mineral rights assembly in a proven gold belt. While currently in evaluation phase, the consolidated land package provides optionality for future development.",
    siteContext: {
      location: "Clear Creek County, Colorado",
      description: "The Crown Property spans multiple historic claim areas in a geologically favorable zone with documented mineralization.",
      historicalSignificance: "Adjacent to historically productive mines with documented gold and silver production (placeholder—verify production figures).",
    },
    infrastructure: {
      title: "Available Infrastructure",
      items: [
        "Seasonal road access (improvements required)",
        "Power lines within 5 miles",
        "Historic mine workings for underground access",
        "Water sources identified on property",
      ],
    },
    permits: {
      status: "Early-stage evaluation",
      items: [
        "Mineral rights ownership verified",
        "Surface access agreements in negotiation",
        "Exploration permits not yet submitted",
        "Baseline environmental work not started",
      ],
    },
    known: {
      title: "Known & Verified",
      items: [
        "Mineral rights ownership and extent",
        "Historical geological surveys on file",
        "Adjacent property production history",
        "Basic access feasibility confirmed",
      ],
    },
    unknown: {
      title: "Unverified / Requires Validation",
      items: [
        "Current resource potential (no modern drilling)",
        "Infrastructure development costs",
        "Permitting requirements and timeline",
        "Environmental baseline conditions",
        "Community and regulatory reception",
      ],
    },
    executionRisks: [
      "Exploration may not confirm economic mineralization",
      "Infrastructure costs in remote location potentially significant",
      "Surface access negotiations may not conclude favorably",
      "Extended timeline before any production decision possible",
    ],
    gatedContent: {
      title: "Crown Property Assessment",
      items: [
        "Geological compilation and target identification",
        "Land package and ownership documentation",
        "Preliminary development scenarios",
        "Exploration program proposal",
        "Risk-adjusted valuation framework",
      ],
    },
  },
  {
    slug: "b-group",
    name: "B-Group Claims",
    tagline: "Expansion optionality with exploration potential",
    status: "Evaluation",
    overview: "The B-Group Claims represent future optionality—adjacent properties with exploration potential that could extend operations if initial MineTeck sites prove successful.",
    siteContext: {
      location: "Multiple Colorado Counties",
      description: "A portfolio of claim groups in geologically prospective areas, assembled to provide development optionality.",
      historicalSignificance: "Various levels of historic activity across the portfolio, from small-scale workings to documented producers (placeholder—verify individual histories).",
    },
    infrastructure: {
      title: "Infrastructure Status",
      items: [
        "Variable access across claim groups",
        "Some claims near existing infrastructure",
        "Others in remote locations requiring development",
        "Detailed assessment not yet complete",
      ],
    },
    permits: {
      status: "Claims maintained, permits not initiated",
      items: [
        "Annual claim maintenance current",
        "No active exploration or mining permits",
        "Baseline work not commenced",
        "Development timeline TBD based on portfolio priorities",
      ],
    },
    known: {
      title: "Known & Verified",
      items: [
        "Claim boundaries and ownership status",
        "Annual maintenance obligations",
        "General geological context",
        "Proximity to other MineTeck assets",
      ],
    },
    unknown: {
      title: "Unverified / Requires Validation",
      items: [
        "Resource potential on any individual claim group",
        "Development feasibility and costs",
        "Permitting requirements",
        "Priority ranking within portfolio",
        "Timeline for evaluation activities",
      ],
    },
    executionRisks: [
      "Limited due diligence completed to date",
      "Portfolio approach means varied quality across claims",
      "Development depends on success of primary projects",
      "Holding costs while awaiting development decision",
    ],
    gatedContent: {
      title: "B-Group Portfolio Details",
      items: [
        "Individual claim group summaries",
        "Geological and historical compilation",
        "Prioritization framework",
        "Holding cost analysis",
        "Development scenario modeling",
      ],
    },
  },
];

export const PROJECTS_PAGE_CONTENT = {
  hero: {
    headline: "Project Portfolio",
    subheadline: "A thesis-driven approach to resource development—focused on infrastructure, permitting, and proven geology rather than speculative exploration.",
  },
  disclaimer: "All project information is provided for informational purposes only. Specific metrics, timelines, and projections are available in the data room for qualified parties.",
};
