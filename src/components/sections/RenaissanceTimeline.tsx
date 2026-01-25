import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Pickaxe, 
  OctagonX, 
  Lock, 
  Lightbulb, 
  FileCheck2, 
  GitMerge, 
  Sunrise 
} from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

interface TimelineEvent {
  year: string;
  title: string;
  icon: React.ElementType;
  text: string;
}

const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: "1859-1917",
    title: "THE ORIGINAL RUSH",
    icon: Pickaxe,
    text: "Billions in gold produced from 'the richest square mile on earth.' Miners discarded low-grade material as waste.",
  },
  {
    year: "1917-1945",
    title: "THE SHUTDOWN",
    icon: OctagonX,
    text: "WWI Order L-208 closed mines. Great Depression and WWII prevented recovery. Infrastructure deteriorated.",
  },
  {
    year: "1945-2020",
    title: "THE EIGHTY-YEAR SILENCE",
    icon: Lock,
    text: "Environmental regulation blocked extraction. Traditional processes created toxic waste. No permits issued for 20 years.",
  },
  {
    year: "2020-2022",
    title: "THE BREAKTHROUGH",
    icon: Lightbulb,
    text: "MineTeck develops zero-waste technology. EPA validation: 1,000+ year environmental stability.",
  },
  {
    year: "2022",
    title: "REGULATORY PRECEDENT",
    icon: FileCheck2,
    text: "First toll mill permit in 20 years. Gladstone facility approved on major waterway.",
  },
  {
    year: "2023-2025",
    title: "THE CONVERGENCE",
    icon: GitMerge,
    text: "Gold prices surge. Federal policy shifts. $200M+ in material contracted. Five factors align.",
  },
  {
    year: "2026+",
    title: "THE RENAISSANCE",
    icon: Sunrise,
    text: "Systematic recovery begins. Infrastructure expands. Century of stranded value becomes accessible.",
  },
];

function TimelineNode({ 
  event, 
  index, 
  isInView,
  prefersReducedMotion
}: { 
  event: TimelineEvent; 
  index: number; 
  isInView: boolean;
  prefersReducedMotion: boolean;
}) {
  const IconComponent = event.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="relative flex flex-col items-center"
    >
      {/* Desktop: Alternating content above/below */}
      <div className={cn(
        "hidden lg:flex flex-col items-center",
        isEven ? "flex-col" : "flex-col-reverse"
      )}>
        {/* Content Card */}
        <div className={cn(
          "w-48 text-center",
          isEven ? "mb-4" : "mt-4"
        )}>
          <p className="font-mono text-xs text-gold font-bold mb-1">
            {event.year}
          </p>
          <h4 className="font-display text-sm font-bold text-foreground mb-2">
            {event.title}
          </h4>
          <p className="font-body text-xs text-muted-foreground leading-relaxed">
            {event.text}
          </p>
        </div>

        {/* Icon Node */}
        <div className="relative z-10">
          <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center shadow-lg shadow-gold/20">
            <IconComponent className="w-6 h-6 text-navy" />
          </div>
        </div>

        {/* Spacer for alternating layout */}
        <div className={cn(
          "w-48 h-24",
          isEven ? "block" : "hidden"
        )} />
      </div>

      {/* Mobile/Tablet: Vertical layout */}
      <div className="lg:hidden flex gap-4 items-start">
        {/* Timeline line and node */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center shadow-lg shadow-gold/20 z-10">
            <IconComponent className="w-5 h-5 text-navy" />
          </div>
          {index < TIMELINE_EVENTS.length - 1 && (
            <div className="w-0.5 h-full min-h-[80px] bg-gold/30 mt-2" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 pb-8">
          <p className="font-mono text-xs text-gold font-bold mb-1">
            {event.year}
          </p>
          <h4 className="font-display text-base font-bold text-foreground mb-2">
            {event.title}
          </h4>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            {event.text}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

interface RenaissanceTimelineProps {
  variant?: "full" | "compact";
  className?: string;
}

export function RenaissanceTimeline({ variant = "full", className }: RenaissanceTimelineProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section 
      ref={ref}
      id="timeline"
      className={cn(
        "py-16 md:py-24 relative overflow-hidden",
        variant === "full" ? "bg-muted/30" : "bg-background",
        className
      )}
    >
      {/* Subtle background texture */}
      <div 
        className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLThoLTJ2LTRoMnY0em0tOCA4aC0ydi00aDJ2NHptMC04aC0ydi00aDJ2NHoiLz48L2c+PC9nPjwvc3ZnPg==')]"
        aria-hidden="true"
      />

      <div className="container-wide px-4 relative z-10">
        {/* Headlines */}
        {variant === "full" && (
          <div className="text-center mb-12 md:mb-16">
            <motion.h2 
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
            >
              The Colorado Gold <span className="text-gold">Renaissance</span>
            </motion.h2>
            <motion.p 
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              A 165-year story of discovery, shutdown, silence, and breakthrough
            </motion.p>
          </div>
        )}

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block relative">
          {/* Horizontal timeline line */}
          <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-gold/20 via-gold to-gold/20 rounded-full" />
          
          {/* Timeline nodes */}
          <div className="flex justify-between items-center relative">
            {TIMELINE_EVENTS.map((event, index) => (
              <TimelineNode
                key={event.year}
                event={event}
                index={index}
                isInView={isInView}
                prefersReducedMotion={prefersReducedMotion}
              />
            ))}
          </div>
        </div>

        {/* Mobile/Tablet: Vertical Timeline */}
        <div className="lg:hidden">
          {TIMELINE_EVENTS.map((event, index) => (
            <TimelineNode
              key={event.year}
              event={event}
              index={index}
              isInView={isInView}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </div>

        {/* Closing statement */}
        {variant === "full" && (
          <motion.div 
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="text-center mt-12 md:mt-16"
          >
            <p className="font-body text-lg text-foreground/70 italic max-w-2xl mx-auto">
              "The gold never left. The technology finally arrived."
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
