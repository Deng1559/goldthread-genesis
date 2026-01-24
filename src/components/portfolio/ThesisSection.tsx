import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Target, 
  Shield, 
  Package, 
  Clock, 
  Scale, 
  Building, 
  Users, 
  Zap, 
  ArrowRight 
} from "lucide-react";

const investmentPoints = [
  {
    number: "1",
    icon: TrendingUp,
    title: "A Structural Opportunity in Gold — Not a Speculative Bet",
    content: `The gold market faces a structural imbalance. While gold prices remain strong, traditional mining models struggle with declining grades, extended permitting timelines, and rising capital requirements. At the same time, vast quantities of gold-bearing material already exist above ground—left behind by historical mining but inaccessible under legacy processing models.

MineTeck is built to operate where conventional mining cannot.`,
  },
  {
    number: "2",
    icon: Target,
    title: "Recovery, Not Exploration",
    content: `MineTeck does not rely on discovery risk. Our model focuses on recovering gold from known material in defined jurisdictions, including historic tailings, waste piles, and environmentally constrained sites.

This shifts investor exposure from geological uncertainty to execution against known inputs, shortening development timelines and reducing capital risk.`,
  },
  {
    number: "3",
    icon: Shield,
    title: "Permitting as a Competitive Advantage",
    content: `In jurisdictions like Colorado, permits—not gold—are the scarce asset. MineTeck advances projects designed to align with existing reclamation frameworks and modern environmental priorities, creating viable pathways where traditional mining has stalled for decades.

This permitting alignment represents a durable competitive moat that is difficult to replicate.`,
  },
  {
    number: "4",
    icon: Package,
    title: "Capital-Efficient, Modular Execution",
    content: `MineTeck deploys modular, non-toxic recovery systems that can be tailored to site-specific conditions and scaled across multiple projects.`,
    highlights: [
      "Requires lower upfront capital",
      "Enables faster deployment",
      "Supports repeatable execution across a portfolio of sites",
    ],
    conclusion: "The result is a recovery platform built for disciplined capital allocation.",
  },
  {
    number: "5",
    icon: Clock,
    title: "Defined Projects, Shorter Timelines",
    content: `MineTeck advances projects characterized by:`,
    highlights: [
      "Defined material volumes",
      "Established regulatory context",
      "Clear development pathways",
    ],
    conclusion: "By operating on legacy material rather than undeveloped deposits, MineTeck targets shorter time-to-production horizons relative to traditional mining investments.",
  },
  {
    number: "6",
    icon: Scale,
    title: "Regulatory Alignment in a Changing Environment",
    content: `Regulatory priorities increasingly favor remediation, reclamation, and non-toxic processing over new land disturbance.

MineTeck's recovery-first model is structured to operate within these realities—turning historic environmental liabilities into productive recovery assets while reducing long-term risk.`,
  },
  {
    number: "7",
    icon: Building,
    title: "An Infrastructure-Led Gold Platform",
    content: `Rather than a single-asset mining story, MineTeck advances a portfolio-oriented recovery platform. This infrastructure-led approach supports diversification across projects, sites, and timelines while maintaining a consistent operational and governance framework.`,
  },
  {
    number: "8",
    icon: Users,
    title: "Structured for Sophisticated Investors",
    content: `MineTeck is designed for accredited and sophisticated investors seeking:`,
    highlights: [
      "Exposure to gold through operating assets",
      "Defined risk parameters",
      "Governance discipline and capital oversight",
      "Participation through execution rather than speculation",
    ],
    conclusion: "Engagement occurs through a structured, NDA-based diligence process.",
  },
  {
    number: "9",
    icon: Zap,
    title: "Why Now",
    content: `The convergence of four forces defines the opportunity:`,
    highlights: [
      "Persistent strength in gold prices",
      "Increasing regulatory constraints on traditional mining",
      "Growing emphasis on remediation-aligned projects",
      "Advances in non-toxic, modular recovery technology",
    ],
    conclusion: "MineTeck is positioned to operate within this convergence—not in opposition to it.",
  },
  {
    number: "10",
    icon: ArrowRight,
    title: "Participation Through Execution",
    content: `This is not a story about future discovery. It is participation in the gold market through regulated recovery, capital discipline, and repeatable execution.`,
  },
];

export function ThesisSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="font-playfair text-4xl md:text-5xl text-foreground mb-6">
            Why Invest in MineTeck
          </h2>
          <p className="text-lg text-muted-foreground font-inter max-w-3xl mx-auto leading-relaxed">
            A structural approach to gold exposure through infrastructure, execution, and regulatory alignment.
          </p>
        </div>

        {/* Investment Points */}
        <div className="max-w-4xl mx-auto space-y-12">
          {investmentPoints.map((point) => (
            <div 
              key={point.number}
              className="bg-card rounded-2xl border border-border/50 p-8 md:p-10 shadow-sm"
            >
              {/* Header */}
              <div className="flex items-start gap-5 mb-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center">
                  <point.icon className="w-7 h-7 text-gold" />
                </div>
                <div className="flex-1 pt-2">
                  <span className="text-gold font-mono text-sm font-semibold mb-1 block">
                    {point.number.padStart(2, '0')}
                  </span>
                  <h3 className="font-playfair text-xl md:text-2xl text-foreground leading-tight">
                    {point.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="pl-0 md:pl-[76px]">
                <div className="font-inter text-muted-foreground leading-relaxed whitespace-pre-line">
                  {point.content}
                </div>

                {/* Highlights if present */}
                {point.highlights && (
                  <ul className="mt-6 space-y-3">
                    {point.highlights.map((highlight, idx) => (
                      <li 
                        key={idx}
                        className="flex items-start gap-3 font-inter text-foreground"
                      >
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold mt-2.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Conclusion if present */}
                {point.conclusion && (
                  <p className="mt-6 font-inter text-foreground font-medium">
                    {point.conclusion}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto mt-20 text-center">
          <div className="bg-navy rounded-2xl p-10 md:p-14">
            <h3 className="font-playfair text-2xl md:text-3xl text-white mb-4">
              Ready to Learn More?
            </h3>
            <p className="text-white/70 font-inter mb-8 max-w-xl mx-auto">
              Access detailed project information, financial models, and schedule a conversation with our team.
            </p>
            <Link to="/access">
              <Button 
                size="lg" 
                className="bg-gold hover:bg-gold/90 text-navy font-semibold px-8"
              >
                Request Investor Information
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
