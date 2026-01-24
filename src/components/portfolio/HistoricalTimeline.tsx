import { motion } from "framer-motion";
import { Pickaxe, Ban, Clock, Sparkles } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const timelineEvents = [
  {
    year: "1859",
    endYear: "1917",
    title: "The Original Rush",
    icon: Pickaxe,
    description: "The richest square mile on earth. Central City becomes Colorado's largest city. Miners extract high-grade ore, discarding anything below 15 gpt as 'waste.'",
    highlight: "$3B+ in gold extracted",
    color: "bg-gold",
  },
  {
    year: "1917",
    title: "The Shutdown",
    icon: Ban,
    description: "WWI halts gold mining nationwide. Miners leave. Equipment rusts. The easy deposits are gone, and the economics have shifted.",
    highlight: "War Industries Board L-208",
    color: "bg-destructive",
  },
  {
    year: "1945",
    endYear: "2020",
    title: "The 80-Year Silence",
    icon: Clock,
    description: "Environmental regulations rightfully block toxic extraction. No new toll mill permits issued in Colorado for 20 years. Billions in gold sits untouched.",
    highlight: "50M+ tons stranded",
    color: "bg-muted-foreground",
  },
  {
    year: "2020",
    endYear: "Present",
    title: "The Breakthrough",
    icon: Sparkles,
    description: "Zero-waste technology achieves 1,000-year EPA certification. The first new toll mill permit in 20 years is issued. The gold is finally accessible.",
    highlight: "First permit since 2002",
    color: "bg-gold",
  },
];

export function HistoricalTimeline() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0 : 0.5 },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-4xl text-gold mb-4">
            A Century in the Making
          </h2>
          <p className="text-white/70 font-inter max-w-2xl mx-auto">
            The story of Colorado's stranded gold — from the original rush to 
            the breakthrough that finally unlocks it.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="hidden lg:block relative max-w-6xl mx-auto"
        >
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/20 -translate-y-1/2" />
          <motion.div 
            className="absolute top-1/2 left-0 h-0.5 bg-gold -translate-y-1/2"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0 : 2, ease: "easeOut" }}
          />

          <div className="grid grid-cols-4 gap-8">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                {/* Connector dot */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className={`w-4 h-4 rounded-full ${event.color} ring-4 ring-slate-900`} />
                </div>

                {/* Card - alternating top/bottom */}
                <div className={`${index % 2 === 0 ? 'pt-12' : 'pb-12 -mt-[calc(100%+3rem)]'}`}>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                    {/* Year badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-gold font-mono text-lg font-bold">
                        {event.year}
                        {event.endYear && <span className="text-white/50">–{event.endYear}</span>}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-full ${event.color}/20 flex items-center justify-center mb-4`}>
                      <event.icon className={`w-6 h-6 ${event.color === 'bg-gold' ? 'text-gold' : event.color === 'bg-destructive' ? 'text-destructive' : 'text-muted-foreground'}`} />
                    </div>

                    {/* Content */}
                    <h3 className="font-playfair text-xl text-white mb-2">
                      {event.title}
                    </h3>
                    <p className="text-white/60 font-inter text-sm leading-relaxed mb-4">
                      {event.description}
                    </p>

                    {/* Highlight */}
                    <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-inter">
                      {event.highlight}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mobile/Tablet Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="lg:hidden relative max-w-lg mx-auto"
        >
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-white/20" />
          <motion.div 
            className="absolute left-6 top-0 w-0.5 bg-gold"
            initial={{ height: "0%" }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0 : 2, ease: "easeOut" }}
          />

          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-16"
              >
                {/* Connector dot */}
                <div className="absolute left-6 top-6 -translate-x-1/2 z-10">
                  <div className={`w-4 h-4 rounded-full ${event.color} ring-4 ring-slate-900`} />
                </div>

                {/* Card */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  {/* Year badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-gold font-mono text-lg font-bold">
                      {event.year}
                      {event.endYear && <span className="text-white/50">–{event.endYear}</span>}
                    </span>
                    <div className={`w-8 h-8 rounded-full ${event.color}/20 flex items-center justify-center`}>
                      <event.icon className={`w-4 h-4 ${event.color === 'bg-gold' ? 'text-gold' : event.color === 'bg-destructive' ? 'text-destructive' : 'text-muted-foreground'}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-playfair text-xl text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-white/60 font-inter text-sm leading-relaxed mb-4">
                    {event.description}
                  </p>

                  {/* Highlight */}
                  <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-inter">
                    {event.highlight}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}