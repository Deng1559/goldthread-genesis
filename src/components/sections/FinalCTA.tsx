import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const INVESTOR_POINTS = [
  "Accredited investors only",
  "$50K–$250K typical commitments",
  "3–5 year investment timeline",
  "Full capital risk disclosed",
];

const PARTNER_POINTS = [
  "Toll milling services",
  "R&D collaboration (e.g., Colorado School of Mines)",
  "JV inquiries welcome",
];

export function FinalCTA() {
  return (
    <section
      className="py-16 md:py-24 bg-navy"
      aria-label="Call to action"
    >
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 max-w-4xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
            The New Colorado Gold Rush Is Real.{" "}
            <span className="text-gold">Technology Made It Possible.</span>{" "}
            Capital Makes It Accessible — For Some.
          </h2>
          <p className="font-body text-white/80 text-base md:text-lg leading-relaxed">
            Permits secured. Technology validated by the EPA. Over $200M in contracted 
            material ready for processing. Access to detailed investment documentation 
            is limited to qualified participants who meet accreditation requirements.
          </p>
        </div>

        {/* Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Investor Card */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg transition-shadow hover:shadow-xl">
            <h3 className="font-display text-xl md:text-2xl font-bold text-gold mb-4">
              Qualified Investor Access
            </h3>

            <ul className="space-y-3 mb-8">
              {INVESTOR_POINTS.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-gold" />
                  <span className="font-body text-charcoal text-sm leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <Link to="/access#investors" className="block">
              <Button
                variant="default"
                size="lg"
                className="w-full bg-gold hover:bg-gold/90 text-charcoal font-body font-bold"
              >
                Request Data Room Access
              </Button>
            </Link>
          </div>

          {/* Partner Card */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg transition-shadow hover:shadow-xl">
            <h3 className="font-display text-xl md:text-2xl font-bold text-navy mb-4">
              Partnership Opportunities
            </h3>

            <ul className="space-y-3 mb-8">
              {PARTNER_POINTS.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-navy" />
                  <span className="font-body text-charcoal text-sm leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <Link to="/access#partners" className="block">
              <Button
                variant="default"
                size="lg"
                className="w-full bg-navy hover:bg-navy/90 text-white font-body font-bold"
              >
                Contact Partnership Team
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
