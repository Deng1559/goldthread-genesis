import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { OPPORTUNITY_CARDS } from "@/lib/content";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

const tagColors: Record<string, string> = {
  Infrastructure: "bg-navy/10 text-navy border-navy/20",
  Recovery: "bg-gold/10 text-gold-dark border-gold/20",
  Permitting: "bg-muted text-muted-foreground border-border",
  ESG: "bg-forest/10 text-forest border-forest/20",
  Team: "bg-charcoal/10 text-charcoal border-charcoal/20",
  Technology: "bg-navy/10 text-navy border-navy/20",
};

interface OpportunityCardProps {
  title: string;
  description: string;
  tags: string[];
  index: number;
}

function OpportunityCard({ title, description, tags, index }: OpportunityCardProps) {
  return (
    <motion.div
      className="group bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gold/10 hover:border-gold/30 focus-within:ring-2 focus-within:ring-gold focus-within:ring-offset-2"
      variants={staggerItem}
    >
      {/* Card Number */}
      <div className="text-gold/40 font-mono text-sm mb-3">
        {String(index + 1).padStart(2, "0")}
      </div>
      
      {/* Title */}
      <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-gold transition-colors">
        {title}
      </h3>
      
      {/* Description */}
      <p className="font-body text-muted-foreground text-sm mb-4 leading-relaxed">
        {description}
      </p>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className={cn(
              "text-xs font-medium px-2 py-1 rounded-md border",
              tagColors[tag] || "bg-muted text-muted-foreground border-border"
            )}
          >
            {tag}
          </span>
        ))}
      </div>
      
      {/* Link */}
      <Link
        to="/access"
        className="inline-flex items-center gap-2 text-gold text-sm font-medium hover:gap-3 transition-all focus-gold rounded-md"
      >
        Explore qualified access
        <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
}

export function OpportunityGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="opportunity"
      ref={ref}
      className="section-padding bg-muted/30"
      aria-label="Gold Rush Opportunities"
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
            Gold Rush Opportunity
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            A diversified portfolio of assets and opportunities. Details available to qualified investors.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={prefersReducedMotion ? {} : staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {OPPORTUNITY_CARDS.map((card, index) => (
            <OpportunityCard
              key={card.id}
              title={card.title}
              description={card.description}
              tags={card.tags}
              index={index}
            />
          ))}
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          className="text-center text-sm text-muted-foreground mt-10 italic"
          variants={prefersReducedMotion ? {} : fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Opportunity details are preliminary and subject to change. Full documentation available in the data room.
        </motion.p>
      </div>
    </section>
  );
}
