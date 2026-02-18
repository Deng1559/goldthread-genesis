import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { PROOF_METRICS } from "@/lib/content";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface CounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  footnote: string;
  isInView: boolean;
}

function Counter({ value, prefix = "", suffix = "", label, footnote, isInView }: CounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;
    
    if (prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, value, prefersReducedMotion]);

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <div className="text-center px-4 sm:px-6 md:px-8 py-3 md:py-4">
      <div className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gold mb-1 tracking-tight">
        {prefix}{value > 0 ? formatNumber(displayValue) : ""}{suffix}
      </div>
      <div className="font-body text-white text-sm sm:text-base md:text-lg font-medium mb-1">
        {label}
      </div>
      <div className="text-white/50 text-[10px] sm:text-xs">
        {footnote}
      </div>
    </div>
  );
}

export function ProofBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="proof"
      ref={ref}
      className="bg-navy py-10 md:py-0 md:h-[220px] flex items-center"
      aria-label="Key metrics"
    >
      <div className="container-wide w-full">
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 sm:gap-4"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {PROOF_METRICS.map((metric, index) => (
            <Counter
              key={index}
              value={metric.value}
              prefix={metric.prefix}
              suffix={metric.suffix}
              label={metric.label}
              footnote={metric.footnote}
              isInView={isInView}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
