import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RenaissanceTimeline } from "@/components/sections/RenaissanceTimeline";
import { EightyYearSilence } from "@/components/sections/EightyYearSilence";
import { BreakthroughSection } from "@/components/sections/BreakthroughSection";
import { ConvergenceSection } from "@/components/sections/ConvergenceSection";
import { InfrastructureComparison } from "@/components/sections/InfrastructureComparison";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Renaissance() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-navy relative overflow-hidden">
          {/* Subtle background pattern */}
          <div 
            className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLThoLTJ2LTRoMnY0em0tOCA4aC0ydi00aDJ2NHptMC04aC0ydi00aDJ2NHoiLz48L2c+PC9nPjwvc3ZnPg==')]"
            aria-hidden="true"
          />
          
          <div className="container-wide px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.p
                variants={prefersReducedMotion ? {} : fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0 }}
                className="font-mono text-gold text-sm uppercase tracking-wider mb-4"
              >
                The Complete Story
              </motion.p>
              <motion.h1
                variants={prefersReducedMotion ? {} : fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
              >
                The Colorado Gold <span className="text-gold">Renaissance</span>
              </motion.h1>
              <motion.p
                variants={prefersReducedMotion ? {} : fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
                className="font-body text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8"
              >
                How zero-waste technology unlocked 165 years of stranded gold value — 
                and why the convergence of five structural factors created the opportunity of a generation.
              </motion.p>
              <motion.div
                variants={prefersReducedMotion ? {} : fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
              >
                <Link to="/access">
                  <Button 
                    variant="gold" 
                    size="lg"
                    className="font-inter font-semibold"
                  >
                    Submit Investor Inquiry
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Visual Timeline */}
        <RenaissanceTimeline variant="full" />

        {/* The Eighty-Year Silence - Detailed */}
        <section id="silence">
          <EightyYearSilence />
        </section>

        {/* The Breakthrough - Zero-Waste Technology */}
        <BreakthroughSection />

        {/* The Convergence */}
        <section id="convergence">
          <ConvergenceSection />
        </section>

        {/* Infrastructure Thesis */}
        <section id="infrastructure">
          <InfrastructureComparison />
        </section>

        {/* Final CTA */}
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
