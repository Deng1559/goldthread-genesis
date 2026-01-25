import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const sections = [
  {
    headline: "Gold Has a Problem — And That's Where the Opportunity Is",
    content: [
      "Gold prices are strong. Demand is global.",
      "Yet most gold never gets mined.",
      "Why?",
      "Because modern mining is slow, capital-intensive, environmentally constrained, and buried under years—sometimes decades—of permitting risk. Traditional exploration models no longer match today's regulatory or capital realities.",
    ],
    emphasis: "MineTeck exists precisely at this intersection: where gold value is real, but conventional mining can't operate.",
  },
  {
    headline: "This Is Not Exploration. It's Execution.",
    content: [
      "MineTeck does not drill holes hoping to find something.",
      "We recover gold from known material—tailings, waste piles, and legacy sites that already exist, already contain gold, and already sit within defined jurisdictions.",
    ],
    bullets: [
      "Less geological uncertainty",
      "Shorter development timelines",
      "Capital deployed into execution, not speculation",
    ],
    emphasis: "This is exposure to gold through doing, not guessing.",
  },
  {
    headline: "In Colorado, Permits Are the Moat",
    content: [
      "Colorado is not short on gold.",
      "It is short on approved pathways to process it.",
      "For decades, regulatory barriers—not geology—have kept gold locked in place. MineTeck advances recovery models designed to operate with modern environmental and reclamation priorities, not against them.",
    ],
    emphasis: "Permitting alignment is not a checkbox here. It is the competitive advantage.",
  },
  {
    headline: "Capital Efficiency Changes Everything",
    content: [
      "Traditional mining requires massive upfront capital before a dollar of revenue appears.",
      "MineTeck takes a different approach:",
    ],
    bullets: [
      "Modular recovery systems",
      "Site-specific deployment",
      "Repeatable execution across multiple projects",
    ],
    emphasis: "Lower capital intensity. Faster deployment. A model built for disciplined investors—not endless funding cycles.",
  },
  {
    headline: "Shorter Paths to Production",
    content: ["MineTeck advances projects defined by:"],
    bullets: [
      "Known material volumes",
      "Documented site histories",
      "Clear regulatory context",
    ],
    followUp: "By working with legacy material instead of undeveloped deposits, MineTeck targets meaningfully shorter paths to production compared to greenfield mining projects.",
    emphasis: "Time matters. Capital velocity matters. This model respects both.",
  },
  {
    headline: "Mining That Regulators Can Approve",
    content: [
      "The regulatory environment has changed.",
      "Projects that reduce environmental liability, stabilize historic sites, and avoid toxic processing now stand a chance where others fail.",
      "MineTeck's recovery-first model aligns with this shift—turning historic liabilities into productive assets while reducing long-term environmental risk.",
    ],
    emphasis: "This is mining that fits the moment.",
  },
  {
    headline: "An Infrastructure Platform — Not a One-Off Project",
    content: [
      "MineTeck is not built around a single asset.",
      "It is an infrastructure-led recovery platform designed to be applied across multiple sites, jurisdictions, and recovery opportunities—while maintaining consistent governance and operational discipline.",
    ],
    bullets: [
      "Portfolio logic",
      "Risk distribution",
      "Repeatability",
    ],
    bulletPrefix: "For investors, this means:",
  },
  {
    headline: "Built for Serious Investors",
    content: ["MineTeck is structured for accredited and sophisticated investors who value:"],
    bullets: [
      "Tangible operating assets",
      "Defined risk parameters",
      "Regulatory alignment",
      "Governance discipline",
    ],
    emphasis: "Participation is structured, deliberate, and NDA-based. This is not a public promotion. It is a qualified conversation.",
  },
  {
    headline: "Why Now",
    content: ["This opportunity exists because several forces have converged:"],
    bullets: [
      "Gold prices remain structurally strong",
      "Traditional mining faces mounting constraints",
      "Regulators favor remediation-aligned recovery",
      "Recovery technology has finally caught up",
    ],
    emphasis: "These windows don't stay open forever.",
  },
  {
    headline: "Participation Through Execution",
    content: [
      "MineTeck offers exposure to gold not through exploration stories—but through permitted recovery, disciplined capital deployment, and repeatable execution.",
    ],
    emphasis: "That difference is the opportunity.",
    isFinal: true,
  },
];

export function ThesisSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-gold font-mono text-sm font-semibold tracking-wider uppercase mb-4 block">
            For Accredited Investors
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl text-foreground mb-6">
            Why Invest in MineTeck
          </h2>
        </div>

        {/* Content Sections */}
        <div className="max-w-3xl mx-auto space-y-16">
          {sections.map((section, index) => (
            <div key={index} className="space-y-5">
              {/* Headline */}
              <h3 className="font-playfair text-2xl md:text-3xl text-foreground leading-tight">
                {section.headline}
              </h3>

              {/* Content paragraphs */}
              <div className="space-y-4">
                {section.content.map((paragraph, pIndex) => (
                  <p 
                    key={pIndex}
                    className="font-inter text-muted-foreground leading-relaxed text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Bullet prefix if present */}
              {section.bulletPrefix && (
                <p className="font-inter text-muted-foreground leading-relaxed text-lg">
                  {section.bulletPrefix}
                </p>
              )}

              {/* Bullets */}
              {section.bullets && (
                <ul className="space-y-3 pl-1">
                  {section.bullets.map((bullet, bIndex) => (
                    <li 
                      key={bIndex}
                      className="flex items-start gap-4 font-inter text-foreground text-lg"
                    >
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-gold mt-2.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Follow up text */}
              {section.followUp && (
                <p className="font-inter text-muted-foreground leading-relaxed text-lg">
                  {section.followUp}
                </p>
              )}

              {/* Emphasis */}
              {section.emphasis && (
                <p className="font-inter text-foreground font-semibold text-lg md:text-xl leading-relaxed border-l-4 border-gold pl-6 py-2">
                  {section.emphasis}
                </p>
              )}

              {/* Divider (except for last item) */}
              {!section.isFinal && index < sections.length - 1 && (
                <div className="pt-8">
                  <div className="h-px bg-border/60 w-24 mx-auto" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto mt-20 text-center">
          <div className="bg-navy rounded-2xl p-10 md:p-14">
            <h3 className="font-playfair text-2xl md:text-3xl text-white mb-4">
              Qualified Investor Inquiry
            </h3>
            <p className="text-white/70 font-inter mb-8 max-w-xl mx-auto text-lg">
              Access detailed project information, financial models, and schedule a conversation with our team.
            </p>
            <Link to="/access">
              <Button 
                size="lg" 
                className="bg-gold hover:bg-gold/90 text-navy font-semibold px-8"
              >
                Submit Investor Inquiry
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
