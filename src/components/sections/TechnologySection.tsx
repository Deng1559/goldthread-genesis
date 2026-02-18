import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import mruDiagram from "@/assets/mru-diagram.png";

const MRU_FEATURES = [
  "Zero-waste gold recovery",
  "EPA TCLP/SPLP/ABA validation (1,000-year toxicity certification)",
  "First new permit in Colorado in 20+ years",
  "Deployable in 12 months",
  "Modular CAPEX: $2M vs $20M to $40M Traditional",
];

export function TechnologySection() {
  return (
    <section id="technology" className="section-padding bg-background scroll-mt-20">
      <div className="container-wide">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            The Technology That{" "}
            <span className="text-gold">Unlocked the Gold Rush</span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left Column - Visuals (60% = 3/5) */}
          <div className="lg:col-span-3 space-y-4">
            {/* Main Image Placeholder */}
            <div className="relative aspect-[16/10] bg-white rounded-lg overflow-hidden border border-border">
              <img src={mruDiagram} alt="Mobile Research Unit (MRU) process flow diagram" className="w-full h-full object-contain" />
            </div>

            {/* Secondary Images Row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] bg-muted rounded-lg overflow-hidden border border-border">
                <div className="absolute inset-0 bg-navy/10 flex items-center justify-center">
                  <span className="text-muted-foreground/40 font-body text-xs text-center px-4">
                    Processing facility detail
                  </span>
                </div>
              </div>
              <div className="relative aspect-[4/3] bg-muted rounded-lg overflow-hidden border border-border">
                <div className="absolute inset-0 bg-navy/10 flex items-center justify-center">
                  <span className="text-muted-foreground/40 font-body text-xs text-center px-4">
                    Zero-waste output demonstration
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content (40% = 2/5) */}
          <div className="lg:col-span-2">
            {/* Intro Paragraph */}
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              The MRU (Modular Recovery Unit) removes the regulatory and capital 
              barriers that have kept historic gold deposits inaccessible. Our 
              EPA-validated process makes extraction economically viable at a 
              fraction of traditional costs—with zero toxic discharge.
            </p>

            {/* Feature List */}
            <ul className="space-y-3 mb-8">
              {MRU_FEATURES.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-gold" />
                  <span className="font-body text-foreground text-sm leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* Ferguson Quote Box */}
            <div
              className="border-l-[3px] border-gold pl-4 py-4 mb-8"
              style={{ backgroundColor: "#FFF8E7" }}
            >
              <p className="font-display text-sm italic text-charcoal/80 leading-relaxed">
                "Technology enables access — doesn't guarantee outcomes. 
                Execution determines economics."
              </p>
            </div>

            {/* Download Link */}
            <div className="flex items-center gap-2 mb-8">
              <FileText className="w-4 h-4 text-gold" />
              <a
                href="#"
                className="font-body text-sm text-navy hover:text-gold transition-colors underline underline-offset-2"
              >
                View EPA Test Data (PDF)
              </a>
            </div>

            {/* CTA Button */}
            <Link to="/technology">
              <Button
                variant="default"
                size="lg"
                className="w-full bg-navy hover:bg-navy/90 text-white font-body font-semibold"
              >
                Explore Full Technology Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
