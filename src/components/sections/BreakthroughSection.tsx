import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { CheckCircle, Shield, MapPin, FileCheck } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const VALIDATIONS = [
  {
    icon: Shield,
    title: "EPA TCLP/SPLP Testing",
    description: "1,000+ year environmental stability",
  },
  {
    icon: FileCheck,
    title: "First Toll Mill Permit",
    description: "First in Colorado in 20 years (2022)",
  },
  {
    icon: MapPin,
    title: "Gladstone Facility",
    description: "First EVER on a major waterway",
  },
  {
    icon: CheckCircle,
    title: "Regulatory Precedent",
    description: "Now established for reclamation operations",
  },
];

export function BreakthroughSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="breakthrough" className="section-padding bg-charcoal scroll-mt-20">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          variants={prefersReducedMotion ? {} : fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* Decorative top border */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gold" />
            <span className="font-mono text-gold text-sm uppercase tracking-wider">
              What Changed
            </span>
            <div className="h-px w-16 bg-gold" />
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Zero-Waste Technology
          </h2>
        </motion.div>

        {/* Main Content Box */}
        <motion.div
          variants={prefersReducedMotion ? {} : fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="border border-gold/30 bg-navy/30 p-8 md:p-12">
            <p className="font-body text-lg md:text-xl text-white/90 leading-relaxed mb-6">
              MineTeck developed a processing system that achieves gold extraction without toxic chemicals. 
              What remains is inert sand and gravel — not hazardous waste requiring perpetual containment.
            </p>

            {/* Validation Section */}
            <div className="border-t border-gold/20 pt-8 mt-8">
              <h3 className="font-mono text-gold text-sm uppercase tracking-wider mb-6">
                The Validation
              </h3>

              <motion.div
                variants={prefersReducedMotion ? {} : staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {VALIDATIONS.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={prefersReducedMotion ? {} : fadeUp}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="font-body text-white/70 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Closing Statement */}
            <div className="border-t border-gold/20 pt-8 mt-8">
              <p className="font-body text-xl text-gold font-medium text-center">
                This isn't theoretical. It's permitted, proven, and operational.
              </p>
            </div>
          </div>

          {/* Decorative bottom border */}
          <div className="flex items-center justify-center mt-8">
            <div className="h-px w-24 bg-gold" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
