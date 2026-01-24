import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HERO_CONTENT } from "@/lib/content";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import heroHistoric from "@/assets/hero-historic.jpg";
import heroModern from "@/assets/hero-modern.jpg";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [imagePhase, setImagePhase] = useState(0); // 0 = historic, 1 = transition, 2 = modern

  useEffect(() => {
    if (prefersReducedMotion) return;
    
    const timer = setTimeout(() => {
      setImagePhase(1);
      setTimeout(() => setImagePhase(2), 1500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [prefersReducedMotion]);

  return (
    <section
      className="relative min-h-[95vh] flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Layers */}
      <div className="absolute inset-0">
        {/* Historic Layer (Sepia) */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms]"
          style={{
            backgroundImage: `
              linear-gradient(180deg, 
                rgba(0,0,0,0.55) 0%, 
                rgba(0,0,0,0.35) 40%, 
                rgba(0,0,0,0.65) 100%
              ),
              url(${heroHistoric})
            `,
            opacity: imagePhase < 2 ? 1 : 0,
          }}
          aria-hidden="true"
        />
        
        {/* Modern Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms]"
          style={{
            backgroundImage: `
              linear-gradient(180deg, 
                rgba(30, 58, 95, 0.75) 0%, 
                rgba(30, 58, 95, 0.45) 40%, 
                rgba(30, 58, 95, 0.8) 100%
              ),
              url(${heroModern})
            `,
            opacity: imagePhase === 2 ? 1 : 0,
          }}
          aria-hidden="true"
        />

        {/* Gold accent overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 container-wide text-center max-w-4xl mx-auto px-4"
        variants={prefersReducedMotion ? {} : staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Headline */}
        <motion.h1
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gold mb-6 leading-tight"
          variants={prefersReducedMotion ? {} : fadeUp}
        >
          {HERO_CONTENT.headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="font-body text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed"
          variants={prefersReducedMotion ? {} : fadeUp}
        >
          {HERO_CONTENT.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          variants={prefersReducedMotion ? {} : fadeUp}
        >
          <Link to="/access">
            <Button variant="hero" size="lg" className="w-full sm:w-auto">
              {HERO_CONTENT.primaryCta}
            </Button>
          </Link>
          <a href="#thesis">
            <Button variant="heroOutline" size="lg" className="w-full sm:w-auto">
              {HERO_CONTENT.secondaryCta}
            </Button>
          </a>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          className="text-white/60 text-sm mb-12"
          variants={prefersReducedMotion ? {} : fadeUp}
        >
          {HERO_CONTENT.disclaimer}
        </motion.p>

        {/* Quote Box */}
        <motion.blockquote
          className="border-l-4 border-gold/50 pl-6 py-4 text-left max-w-2xl mx-auto bg-charcoal/40 backdrop-blur-sm rounded-r-lg"
          variants={prefersReducedMotion ? {} : fadeUp}
        >
          <p className="text-white/90 italic font-body text-lg mb-2">
            "{HERO_CONTENT.quote.text}"
          </p>
          <cite className="text-gold text-sm not-italic">
            {HERO_CONTENT.quote.attribution}
          </cite>
        </motion.blockquote>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-3 bg-gold rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
