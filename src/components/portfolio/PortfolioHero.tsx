export function PortfolioHero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-navy via-navy/95 to-background">
      <div className="container mx-auto px-6 text-center">
        {/* Decorative top line */}
        <div className="w-24 h-px bg-gold mx-auto mb-8" aria-hidden="true" />
        
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-gold mb-6 tracking-tight">
          The Colorado Gold Renaissance
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-10 font-body max-w-2xl mx-auto">
          How Zero-Waste Technology Unlocked a Century of Stranded Gold Value
        </p>
        
        {/* Decorative separator */}
        <div className="w-48 h-px bg-white/20 mx-auto mb-10" aria-hidden="true" />
        
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg text-white/80 font-body leading-relaxed">
            Between 1859 and 1917, Colorado's mining districts produced billions in gold — then regulatory gridlock shut it down for 80 years.
          </p>
          <p className="text-lg text-white/80 font-body leading-relaxed">
            The material never left. It just waited for technology to evolve, regulations to adapt, and five structural factors to align.
          </p>
          <p className="text-xl text-gold font-body font-medium">
            That convergence has now occurred.
          </p>
        </div>
        
        {/* Decorative bottom line */}
        <div className="w-24 h-px bg-gold mx-auto mt-10" aria-hidden="true" />
      </div>
    </section>
  );
}