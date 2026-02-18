import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FUND_BENEFITS = [
"Permitted infrastructure (not speculative exploration)",
"Contracted resources with documented values",
"12-24 month revenue timelines (not 7-15 years)",
"Zero-waste technology with regulatory validation",
"Portfolio diversification across 4+ projects"];


export function FinalCTA() {
  return (
    <section
      className="py-16 md:py-24 bg-navy"
      aria-label="Qualified investor inquiry">

      <div className="container-wide px-4">
        {/* Main CTA Card */}
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
            Qualified Investor Inquiry
          </h2>

          {/* Body Text */}
          <p className="font-body text-lg md:text-xl text-white/90 mb-8">
            Breakthrough Management Gold Fund I offers accredited investors access to this convergence:
          </p>

          {/* Benefits List */}
          <ul className="space-y-3 mb-8 text-left max-w-xl mx-auto">
            {FUND_BENEFITS.map((benefit, index) =>
            <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-gold" />
                <span className="font-body text-white/85 text-base md:text-lg">
                  {benefit}
                </span>
              </li>
            )}
          </ul>

          {/* Investment Terms */}
          <div className="bg-white/10 rounded-xl p-6 mb-10 max-w-xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div>
                <p className="font-body text-white/60 text-sm uppercase tracking-wide mb-1">Target Return</p>
                <p className="font-display text-gold text-xl font-semibold">10% preferred annual + equity upside</p>
              </div>
              <div>
                <p className="font-body text-white/60 text-sm uppercase tracking-wide mb-1">Minimum Investment</p>
                <p className="font-display text-white text-xl font-semibold">$50K (accredited only)<span className="text-white/70 text-sm font-normal">(accredited only)</span></p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Link to="/access">
            <Button
              variant="default"
              size="lg"
              className="bg-gold hover:bg-gold/90 text-charcoal font-body font-bold text-lg px-10 py-6 h-auto hover:shadow-lg hover:shadow-gold/25 transition-all">

              Submit Investor Inquiry
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>

          {/* Closing Statement */}
          <p className="font-body text-white/60 text-sm md:text-base mt-8 max-w-2xl mx-auto italic leading-relaxed">
            "The gold never left Colorado. It just waited for prices to rise, technology to evolve, regulations to adapt, and five factors to align. That convergence has now occurred."
          </p>
        </div>
      </div>
    </section>);

}