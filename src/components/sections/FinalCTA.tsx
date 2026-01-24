import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTA_SECTIONS } from "@/lib/content";
import { fadeUp, slideInLeft, slideInRight } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  const { investors, partners } = CTA_SECTIONS;

  return (
    <section
      id="access"
      ref={ref}
      className="section-padding bg-background"
      aria-label="Access options"
    >
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={prefersReducedMotion ? {} : fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ready to Learn More?
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Select the path that best describes your interest
          </p>
        </motion.div>

        {/* Two Column CTA Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Investors Card */}
          <motion.div
            className="bg-card border-2 border-gold/30 rounded-2xl p-8 md:p-10 hover:border-gold/60 transition-colors"
            variants={prefersReducedMotion ? {} : slideInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-gold" />
            </div>
            
            <h3 className="font-display text-2xl font-bold text-gold mb-2">
              {investors.title}
            </h3>
            <p className="font-body text-muted-foreground mb-6">
              {investors.subtitle}
            </p>

            <ul className="space-y-3 mb-8">
              {investors.points.map((point, index) => (
                <li key={index} className="flex items-center gap-3 font-body text-foreground">
                  <ArrowRight className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <Link to="/access#investors">
              <Button variant="gold" size="lg" className="w-full">
                {investors.cta}
              </Button>
            </Link>
          </motion.div>

          {/* Partners Card */}
          <motion.div
            className="bg-card border-2 border-navy/30 rounded-2xl p-8 md:p-10 hover:border-navy/60 transition-colors"
            variants={prefersReducedMotion ? {} : slideInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="w-14 h-14 rounded-full bg-navy/10 flex items-center justify-center mb-6">
              <Handshake className="w-7 h-7 text-navy" />
            </div>
            
            <h3 className="font-display text-2xl font-bold text-navy mb-2">
              {partners.title}
            </h3>
            <p className="font-body text-muted-foreground mb-6">
              {partners.subtitle}
            </p>

            <ul className="space-y-3 mb-8">
              {partners.points.map((point, index) => (
                <li key={index} className="flex items-center gap-3 font-body text-foreground">
                  <ArrowRight className="w-4 h-4 text-navy flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <Link to="/access#partners">
              <Button variant="navy" size="lg" className="w-full">
                {partners.cta}
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.p
          className="text-center text-sm text-muted-foreground mt-10 italic max-w-2xl mx-auto"
          variants={prefersReducedMotion ? {} : fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          By requesting access, you confirm your status as an accredited investor or qualified partner.
          All information is provided subject to our terms of use and legal review.
        </motion.p>
      </div>
    </section>
  );
}
