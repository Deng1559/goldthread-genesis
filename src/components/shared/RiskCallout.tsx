import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface RiskCalloutProps {
  title?: string;
  risks: string[];
  variant?: "warning" | "info" | "critical";
  className?: string;
}

export function RiskCallout({ 
  title = "Execution Risks", 
  risks, 
  variant = "warning",
  className 
}: RiskCalloutProps) {
  const prefersReducedMotion = useReducedMotion();

  const variantStyles = {
    warning: {
      container: "bg-gold/5 border-gold/30",
      icon: "text-gold",
      title: "text-gold",
    },
    info: {
      container: "bg-navy/5 border-navy/30",
      icon: "text-navy",
      title: "text-navy",
    },
    critical: {
      container: "bg-destructive/5 border-destructive/30",
      icon: "text-destructive",
      title: "text-destructive",
    },
  };

  const styles = variantStyles[variant];

  return (
    <motion.div
      variants={fadeUp}
      initial={prefersReducedMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={cn(
        "rounded-lg border-l-4 p-6",
        styles.container,
        className
      )}
      role="alert"
      aria-labelledby="risk-callout-title"
    >
      <div className="flex items-start gap-3">
        <AlertTriangle className={cn("h-5 w-5 mt-0.5 flex-shrink-0", styles.icon)} aria-hidden="true" />
        <div className="space-y-3">
          <h4 
            id="risk-callout-title"
            className={cn("font-display font-semibold text-lg", styles.title)}
          >
            {title}
          </h4>
          <ul className="space-y-2" role="list">
            {risks.map((risk, index) => (
              <li 
                key={index} 
                className="text-charcoal text-sm leading-relaxed flex items-start gap-2"
              >
                <span className={cn("mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0", 
                  variant === "critical" ? "bg-destructive" : 
                  variant === "info" ? "bg-navy" : "bg-gold"
                )} aria-hidden="true" />
                {risk}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
