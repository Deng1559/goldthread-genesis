import { motion } from "framer-motion";
import { Lock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface GatedBlockProps {
  title?: string;
  description?: string;
  items?: string[];
  ctaText?: string;
  ctaHref?: string;
  variant?: "default" | "compact" | "minimal";
  className?: string;
}

export function GatedBlock({
  title = "Detailed Information Available",
  description = "Access to technical specifications, financial projections, and engineering reports requires investor verification.",
  items,
  ctaText = "Request Data Room Access",
  ctaHref = "/access",
  variant = "default",
  className,
}: GatedBlockProps) {
  const prefersReducedMotion = useReducedMotion();

  if (variant === "minimal") {
    return (
      <Link
        to={ctaHref}
        className={cn(
          "group inline-flex items-center gap-2 text-gold hover:text-gold-dark transition-colors focus-gold rounded-md",
          className
        )}
      >
        <Lock className="h-4 w-4" aria-hidden="true" />
        <span className="text-sm font-medium">{ctaText}</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <motion.div
        variants={fadeUp}
        initial={prefersReducedMotion ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className={cn(
          "flex items-center justify-between gap-4 p-4 bg-muted/50 rounded-lg border border-border",
          className
        )}
      >
        <div className="flex items-center gap-3">
          <Lock className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
          <span className="text-sm text-charcoal">{description}</span>
        </div>
        <Link to={ctaHref}>
          <Button variant="gold" size="sm">
            {ctaText}
          </Button>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={fadeUp}
      initial={prefersReducedMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={cn(
        "relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-muted/30 to-muted/60 p-8 md:p-10",
        className
      )}
      role="region"
      aria-labelledby="gated-block-title"
    >
      {/* Decorative lock pattern */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 opacity-5" aria-hidden="true">
        <Lock className="h-48 w-48 text-charcoal" />
      </div>

      <div className="relative space-y-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
            <Lock className="h-6 w-6 text-gold" aria-hidden="true" />
          </div>
          <div className="space-y-2">
            <h3 
              id="gated-block-title"
              className="font-display text-xl font-semibold text-charcoal"
            >
              {title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {items && items.length > 0 && (
          <div className="pl-16">
            <p className="text-sm font-medium text-charcoal mb-3">Includes access to:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2" role="list">
              {items.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="pl-16 pt-2">
          <Link to={ctaHref}>
            <Button variant="gold" size="lg" className="group">
              {ctaText}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Button>
          </Link>
          <p className="mt-3 text-xs text-muted-foreground">
            Access subject to review and approval. For accredited investors only.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
