import { motion } from "framer-motion";
import { CheckCircle2, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface KnownUnknownBlockProps {
  known: {
    title?: string;
    items: string[];
  };
  unknown: {
    title?: string;
    items: string[];
  };
  className?: string;
}

export function KnownUnknownBlock({ 
  known, 
  unknown, 
  className 
}: KnownUnknownBlockProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={fadeUp}
      initial={prefersReducedMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={cn("grid md:grid-cols-2 gap-6", className)}
    >
      {/* Known / Verified */}
      <div className="rounded-xl border border-forest/20 bg-forest/5 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center">
            <CheckCircle2 className="h-5 w-5 text-forest" aria-hidden="true" />
          </div>
          <h4 className="font-display font-semibold text-lg text-forest">
            {known.title || "Known & Verified"}
          </h4>
        </div>
        <ul className="space-y-3" role="list">
          {known.items.map((item, index) => (
            <li 
              key={index}
              className="flex items-start gap-3 text-sm text-charcoal leading-relaxed"
            >
              <CheckCircle2 className="h-4 w-4 mt-0.5 text-forest flex-shrink-0" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Unknown / Unverified */}
      <div className="rounded-xl border border-gold/20 bg-gold/5 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
            <HelpCircle className="h-5 w-5 text-gold" aria-hidden="true" />
          </div>
          <h4 className="font-display font-semibold text-lg text-gold">
            {unknown.title || "Unverified / Requires Validation"}
          </h4>
        </div>
        <ul className="space-y-3" role="list">
          {unknown.items.map((item, index) => (
            <li 
              key={index}
              className="flex items-start gap-3 text-sm text-charcoal leading-relaxed"
            >
              <HelpCircle className="h-4 w-4 mt-0.5 text-gold flex-shrink-0" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
