import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroHistoric from "@/assets/hero-historic.jpg";
import heroModern from "@/assets/hero-modern.jpg";

const HERO_STATS = [
  { value: "$200M+", label: "in Contracted Material" },
  { value: "12–24", label: "Months to Revenue" },
  { value: "First", label: "Toll Mill Permit in 20 Years" },
];

export function Hero() {
  return (
    <section
      className="relative h-[60vh] md:h-[70vh] lg:h-[95vh] flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Split-Screen Background */}
      <div className="absolute inset-0 flex">
        {/* Left Side - Historic (Sepia) */}
        <div
          className="w-1/2 h-full bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${heroHistoric})`,
          }}
          aria-hidden="true"
        >
          {/* Sepia overlay */}
          <div className="absolute inset-0 bg-sepia mix-blend-color" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Right Side - Modern (2025) */}
        <div
          className="w-1/2 h-full bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${heroModern})`,
          }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Center blend gradient */}
        <div 
          className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-32 bg-gradient-to-r from-black/60 via-black/80 to-black/60"
          aria-hidden="true"
        />
      </div>

      {/* Full overlay for text readability */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 container-wide text-center max-w-5xl mx-auto px-4">
        {/* Headline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gold mb-4 leading-tight">
          The New Colorado Gold Rush
        </h1>

        {/* Subheadline */}
        <p className="font-body text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
          80 Years of Stranded Gold — Now Accessible
        </p>

        {/* Stats Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 lg:gap-16 mb-10">
          {HERO_STATS.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-mono text-2xl sm:text-3xl lg:text-4xl font-bold text-gold mb-1">
                {stat.value}
              </div>
              <div className="font-body text-sm sm:text-base text-white/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/access">
            <Button variant="hero" size="lg" className="w-full sm:w-auto">
              See the Opportunity
            </Button>
          </Link>
          <Link to="/technology">
            <Button variant="heroOutline" size="lg" className="w-full sm:w-auto">
              How Technology Makes This Possible
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
