import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { AlertTriangle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const NOT_STATEMENTS = [
  "This is not exploration for new deposits.",
  "This is not geological speculation.",
  "This is not a bet on discovery.",
];

const RISK_STATEMENTS = [
  "Material grades could be lower than historical data suggests.",
  "Recovery rates could disappoint.",
  "Permitting could stall despite precedent.",
  "Gold prices could collapse.",
  "Operating costs could exceed projections.",
];

export function WhatThisIsnt() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="what-this-isnt" className="section-padding bg-charcoal scroll-mt-20">
      <div className="container-wide">
        <motion.div
          variants={prefersReducedMotion ? {} : fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-16 bg-gold" />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white text-center">
              What This Isn't
            </h2>
            <div className="h-px w-16 bg-gold" />
          </div>

          {/* Content Box */}
          <div className="border border-gold/30 bg-navy/20 p-8 md:p-10">
            {/* Not Statements */}
            <div className="space-y-3 mb-8">
              {NOT_STATEMENTS.map((statement, index) => (
                <motion.p
                  key={index}
                  variants={prefersReducedMotion ? {} : fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="font-body text-lg text-white/90"
                >
                  {statement}
                </motion.p>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-gold/20 my-8" />

            {/* Risk Statements */}
            <div className="space-y-3 mb-8">
              {RISK_STATEMENTS.map((statement, index) => (
                <motion.p
                  key={index}
                  variants={prefersReducedMotion ? {} : fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: (NOT_STATEMENTS.length + index) * 0.05 }}
                  className="font-body text-white/70 flex items-start gap-3"
                >
                  <AlertTriangle className="w-4 h-4 text-gold/60 flex-shrink-0 mt-1" />
                  <span>{statement}</span>
                </motion.p>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-gold/20 my-8" />

            {/* Closing Statements */}
            <div className="space-y-4">
              <p className="font-body text-white/70 italic">
                If you need promotional narratives and forward-looking excitement, this isn't for you.
              </p>
              <p className="font-body text-gold font-medium">
                If you think structurally about infrastructure, regulatory moats, and timeline arbitrage, keep reading.
              </p>
            </div>
          </div>

          {/* Bottom decorative line */}
          <div className="flex justify-center mt-8">
            <div className="h-px w-24 bg-gold" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
