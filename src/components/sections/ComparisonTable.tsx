import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X, Check } from "lucide-react";

const COMPARISON_DATA = [
  {
    traditional: "7–15 years to production",
    mineteck: "12–24 months to revenue",
  },
  {
    traditional: "Geological speculation",
    mineteck: "Contracted above-ground material",
  },
  {
    traditional: "$500M–$2B capital required",
    mineteck: "$1M–$5M per project",
  },
  {
    traditional: "Permitting risk (2–7 years)",
    mineteck: "Permits in hand",
  },
  {
    traditional: "Environmental liability",
    mineteck: "EPA-certified zero-waste",
  },
  {
    traditional: "Binary exploration outcome",
    mineteck: "Diversified infrastructure model",
  },
];

export function ComparisonTable() {
  return (
    <section id="thesis" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            This Isn't Speculation.{" "}
            <span className="text-gold">This Is Infrastructure.</span>
          </h2>
        </div>

        {/* Comparison Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-lg overflow-hidden border border-border shadow-lg">
          {/* Column Headers */}
          <div className="bg-red-100 dark:bg-red-950/30 p-6 border-b border-border">
            <h3 className="font-display text-xl md:text-2xl font-bold text-red-800 dark:text-red-400 text-center">
              Traditional Mining
            </h3>
          </div>
          <div className="bg-green-100 dark:bg-green-950/30 p-6 border-b border-border">
            <h3 className="font-display text-xl md:text-2xl font-bold text-forest text-center">
              MineTeck
            </h3>
          </div>

          {/* Comparison Rows */}
          {COMPARISON_DATA.map((row, index) => (
            <div key={index} className="contents">
              {/* Traditional Mining Cell */}
              <div
                className={`bg-red-50 dark:bg-red-950/20 p-5 flex items-center gap-4 border-b border-border ${
                  index === COMPARISON_DATA.length - 1 ? "border-b-0 md:border-b-0" : ""
                }`}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-200 dark:bg-red-900/50 flex items-center justify-center">
                  <X className="w-5 h-5 text-red-600 dark:text-red-400" />
                </div>
                <span className="font-body text-foreground/80 text-sm md:text-base">
                  {row.traditional}
                </span>
              </div>

              {/* MineTeck Cell */}
              <div
                className={`bg-green-50 dark:bg-green-950/20 p-5 flex items-center gap-4 border-b border-border ${
                  index === COMPARISON_DATA.length - 1 ? "border-b-0" : ""
                }`}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-200 dark:bg-green-900/50 flex items-center justify-center">
                  <Check className="w-5 h-5 text-forest" />
                </div>
                <span className="font-body text-foreground font-medium text-sm md:text-base">
                  {row.mineteck}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <Link to="/technology">
            <Button
              variant="default"
              size="lg"
              className="bg-navy hover:bg-navy/90 text-white font-body font-semibold px-8 py-6 text-base"
            >
              Understand the Technology Breakthrough
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
