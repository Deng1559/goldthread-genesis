import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const COMPARISON_DATA = [
  {
    label: "Timeline to Revenue",
    traditional: "7-15 years",
    infrastructure: "12-24 months",
  },
  {
    label: "Capital Required",
    traditional: "$200M-$2B",
    infrastructure: "$2-8M per project",
  },
  {
    label: "Material Risk",
    traditional: "Exploration risk",
    infrastructure: "Known grades (assayed)",
  },
  {
    label: "Permitting",
    traditional: "Ground-up (2-7 years)",
    infrastructure: "Precedent established",
  },
  {
    label: "Environmental",
    traditional: "Toxic tailings",
    infrastructure: "Zero-waste process",
  },
  {
    label: "Exit Strategy",
    traditional: "Decade+ mine life",
    infrastructure: "18-36 month operations",
  },
];

export function InfrastructureComparison() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section ref={ref} className="py-20 md:py-24 bg-background">
      <div className="container-wide px-4">
        {/* Headlines */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Infrastructure vs Traditional Mining
          </h2>
          <p className="font-body text-xl md:text-2xl text-gold">
            A Different Investment Model
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block max-w-4xl mx-auto mb-12">
          <div className="overflow-hidden rounded-xl border border-border shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-navy">
                  <th className="text-left py-4 px-6 font-body font-semibold text-white/80 text-sm uppercase tracking-wide w-1/3">
                    Factor
                  </th>
                  <th className="text-center py-4 px-6 font-body font-semibold text-white text-sm uppercase tracking-wide w-1/3">
                    Traditional Mining
                  </th>
                  <th className="text-center py-4 px-6 font-body font-semibold text-gold text-sm uppercase tracking-wide w-1/3">
                    Gold Infrastructure
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_DATA.map((row, index) => (
                  <motion.tr
                    key={row.label}
                    initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className={index % 2 === 0 ? "bg-muted/30" : "bg-white"}
                  >
                    <td className="py-4 px-6 font-mono text-sm font-medium text-foreground border-t border-border">
                      {row.label}
                    </td>
                    <td className="py-4 px-6 font-mono text-sm text-center text-muted-foreground border-t border-border">
                      {row.traditional}
                    </td>
                    <td className="py-4 px-6 font-mono text-sm text-center font-semibold text-foreground border-t border-border bg-gold/10">
                      {row.infrastructure}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4 mb-12">
          {COMPARISON_DATA.map((row, index) => (
            <motion.div
              key={row.label}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="bg-white rounded-xl border border-border shadow-sm overflow-hidden"
            >
              {/* Label Header */}
              <div className="bg-navy py-3 px-4">
                <span className="font-mono text-sm font-semibold text-white">
                  {row.label}
                </span>
              </div>
              
              {/* Comparison Values */}
              <div className="grid grid-cols-2 divide-x divide-border">
                <div className="p-4 bg-muted/30">
                  <p className="font-body text-xs text-muted-foreground uppercase tracking-wide mb-1">
                    Traditional
                  </p>
                  <p className="font-mono text-sm text-foreground">
                    {row.traditional}
                  </p>
                </div>
                <div className="p-4 bg-gold/10">
                  <p className="font-body text-xs text-gold uppercase tracking-wide mb-1">
                    Infrastructure
                  </p>
                  <p className="font-mono text-sm font-semibold text-foreground">
                    {row.infrastructure}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Text */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="font-body text-lg md:text-xl text-foreground/80 italic border-l-4 border-gold pl-6 text-left">
            "This is not a mining company. This is processing infrastructure for a century of stranded material."
          </p>
        </div>
      </div>
    </section>
  );
}
