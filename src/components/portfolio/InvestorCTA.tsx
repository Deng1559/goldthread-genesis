import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const FUND_BENEFITS = [
  "Permitted infrastructure (not speculative exploration)",
  "Contracted resources with documented values",
  "12-24 month revenue timelines (not 7-15 years)",
  "Zero-waste technology with regulatory validation",
  "Portfolio diversification across 4+ projects",
];

const FUND_TERMS = [
  { label: "Target", value: "10% preferred annual return + equity upside" },
  { label: "Structure", value: "Asset-backed with real property security" },
  { label: "Minimum", value: "$50K (accredited investors only)" },
];

export function InvestorCTA() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          variants={prefersReducedMotion ? {} : fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Main CTA Box */}
          <div className="border border-gold/40 bg-navy p-8 md:p-12">
            {/* Header */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-12 bg-gold" />
              <h2 className="font-display text-2xl md:text-3xl font-bold text-gold text-center">
                Qualified Investor Inquiry
              </h2>
              <div className="h-px w-12 bg-gold" />
            </div>

            <p className="text-center text-white/90 font-body mb-8 max-w-2xl mx-auto">
              Breakthrough Management Gold Fund I offers accredited investors access to this convergence:
            </p>

            {/* Benefits List */}
            <div className="space-y-3 mb-8">
              {FUND_BENEFITS.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={prefersReducedMotion ? {} : fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="font-body text-white/80">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-gold/20 my-8" />

            {/* Fund Terms */}
            <div className="space-y-4 mb-8">
              {FUND_TERMS.map((term, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <span className="font-mono text-gold text-sm uppercase tracking-wider min-w-[80px]">
                    {term.label}:
                  </span>
                  <span className="font-body text-white/90">{term.value}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button asChild variant="gold" size="xl">
                <Link to="/access" className="inline-flex items-center gap-2">
                  Submit Investor Inquiry
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="mt-10 text-center">
            <div className="h-px w-48 bg-gold/30 mx-auto mb-8" />
            <p className="font-body text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-4">
              The gold never left Colorado. It just waited for prices to rise, technology to evolve, regulations to
              adapt, and five factors to align.
            </p>
            <p className="font-body text-gold font-medium text-lg">That convergence has now occurred.</p>
            <div className="h-px w-48 bg-gold/30 mx-auto mt-8" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
