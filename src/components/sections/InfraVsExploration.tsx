import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, AlertTriangle, HelpCircle } from "lucide-react";
import { INFRASTRUCTURE_POINTS, EXPLORATION_POINTS, RISK_CALLOUTS } from "@/lib/content";
import { fadeUp, slideInLeft, slideInRight, staggerContainer, staggerItem } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function InfraVsExploration() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="thesis"
      ref={ref}
      className="section-padding bg-background"
      aria-label="Infrastructure versus Exploration comparison"
    >
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={prefersReducedMotion ? {} : fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gold mb-4">
            Infrastructure vs. Exploration
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Understanding what exists versus what remains to be proven
          </p>
        </motion.div>

        {/* Two Column Comparison */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Infrastructure Column */}
          <motion.div
            className="bg-card border border-navy/20 rounded-xl p-6 md:p-8"
            variants={prefersReducedMotion ? {} : slideInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
                <Check className="w-5 h-5 text-navy" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-navy">
                Infrastructure
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 font-body">
              Existing assets and verified infrastructure that reduce project risk and timeline.
            </p>
            <motion.ul
              className="space-y-3"
              variants={prefersReducedMotion ? {} : staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {INFRASTRUCTURE_POINTS.map((point, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  variants={prefersReducedMotion ? {} : staggerItem}
                >
                  <Check className="w-5 h-5 text-navy mt-0.5 flex-shrink-0" />
                  <span className="text-foreground font-body">{point}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Exploration Column */}
          <motion.div
            className="bg-card border border-gold/20 rounded-xl p-6 md:p-8"
            variants={prefersReducedMotion ? {} : slideInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-gold">
                Exploration & Verification
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 font-body">
              What remains unproven and requires additional work before production decision.
            </p>
            <motion.ul
              className="space-y-3"
              variants={prefersReducedMotion ? {} : staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {EXPLORATION_POINTS.map((point, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  variants={prefersReducedMotion ? {} : staggerItem}
                >
                  <HelpCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-foreground font-body">{point}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        {/* Risk Callout Box */}
        <motion.div
          className="bg-destructive/5 border border-destructive/20 rounded-xl p-6 md:p-8"
          variants={prefersReducedMotion ? {} : fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-destructive" />
            <h4 className="font-display text-xl font-semibold text-foreground">
              Execution Risks
            </h4>
          </div>
          <ul className="space-y-2">
            {RISK_CALLOUTS.map((risk, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-foreground font-body"
              >
                <span className="text-destructive">•</span>
                <span>{risk}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted-foreground mt-4 italic">
            This is not an exhaustive list. Full risk disclosures available in the data room.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
