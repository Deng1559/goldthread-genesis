import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroHistoric from "@/assets/hero-historic.jpg";
import heroModern from "@/assets/hero-modern.jpg";

const HERO_STATS = [
  { value: "$200M+", label: "in Contracted Material" },
  { value: "12–24", label: "Months to Revenue" },
  { value: "First", label: "Toll Mill Permit in 20 Years" },
];

const OPENING_PARAGRAPH = "Between 1859 and 1917, Colorado's mining districts produced billions in gold — then regulatory gridlock shut it down for 80 years. The material never left. It just waited for technology to evolve, regulations to adapt, and five structural factors to align. That convergence has now occurred.";

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
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
          The Colorado Gold <span className="text-gold">Renaissance</span>
        </h1>

        {/* Subheadline */}
        <p className="font-body text-lg sm:text-xl md:text-2xl text-white/90 mb-6 max-w-3xl mx-auto">
          How Zero-Waste Technology Unlocked a Century of Stranded Gold Value
        </p>

        {/* Opening Paragraph */}
        <p className="font-body text-base sm:text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
          {OPENING_PARAGRAPH}
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
          <Link to="/why-invest">
            <Button variant="hero" size="lg" className="w-full sm:w-auto">
              Explore the Renaissance
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
