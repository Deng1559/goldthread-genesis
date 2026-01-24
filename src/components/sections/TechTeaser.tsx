import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, Beaker, Shield, Leaf } from "lucide-react";
import { TECH_POINTS } from "@/lib/content";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const icons = [Beaker, Shield, Leaf];

export function TechTeaser() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="technology"
      ref={ref}
      className="bg-navy section-padding"
      aria-label="Technology overview"
    >
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Diagram Placeholder */}
          <motion.div
            className="bg-navy-light/30 border border-white/10 rounded-2xl p-8 md:p-12 flex items-center justify-center aspect-[4/3]"
            variants={prefersReducedMotion ? {} : fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
                <Beaker className="w-12 h-12 text-gold" />
              </div>
              <p className="text-white/60 font-body text-lg">
                Recovery Technology Diagram
              </p>
              <p className="text-white/40 text-sm mt-2">
                Detailed technical documentation available in the data room
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={prefersReducedMotion ? {} : staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h2
              className="font-display text-3xl md:text-4xl font-bold text-white mb-6"
              variants={prefersReducedMotion ? {} : fadeUp}
            >
              Modern Recovery Technology
            </motion.h2>
            
            <motion.p
              className="text-white/70 font-body text-lg mb-8 leading-relaxed"
              variants={prefersReducedMotion ? {} : fadeUp}
            >
              Applying proven extraction methodology to historically documented deposits. 
              Our approach emphasizes verification, transparency, and environmental responsibility.
            </motion.p>

            <motion.div
              className="space-y-6"
              variants={prefersReducedMotion ? {} : staggerContainer}
            >
              {TECH_POINTS.map((point, index) => {
                const Icon = icons[index];
                return (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    variants={prefersReducedMotion ? {} : staggerItem}
                  >
                    <div className="w-10 h-10 rounded-full bg-forest/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-forest-light" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-white mb-1">
                        {point.title}
                      </h3>
                      <p className="text-white/60 font-body text-sm">
                        {point.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
