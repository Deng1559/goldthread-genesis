export function EightyYearSilence() {
  return (
    <section className="bg-navy/95 py-20 md:py-24">
      <div className="container-wide px-4">
        {/* Headlines */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Why It Stopped
          </h2>
          <p className="font-body text-xl md:text-2xl text-gold">
            The Eighty-Year Silence (1945–2020)
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-0 max-w-5xl mx-auto">
          {/* Left Column - The Constraint */}
          <div className="md:pr-10 md:border-r border-gold/50">
            <h3 className="font-display text-2xl md:text-3xl text-gold mb-6">
              The Constraint
            </h3>
            <p className="font-body text-white/90 text-lg leading-relaxed mb-6">
              From 1859 to 1917, Colorado produced more gold per acre than anywhere in North America. Then it stopped — not because the gold disappeared, but because the regulatory structure made recovery impossible.
            </p>
            
            <h4 className="font-display text-lg text-white font-semibold mb-4 uppercase tracking-wide">
              The Problem:
            </h4>
            <ul className="space-y-3">
              {[
                "Traditional mining uses toxic chemicals (cyanide, mercury)",
                "These create permanent environmental liability",
                "Colorado regulators blocked all new permits for 20 years",
                "The last toll mill permit issued: 2002",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-gold mt-1.5 text-sm">●</span>
                  <span className="font-body text-white/80 text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - The Result */}
          <div className="md:pl-10">
            <h3 className="font-display text-2xl md:text-3xl text-gold mb-6">
              The Result
            </h3>
            <p className="font-body text-white/90 text-lg leading-relaxed mb-6">
              Billions in gold value sat in surface piles, untouchable, for 80 years — not speculative deposits, but visible material with documented grades averaging 3–10 grams per ton.
            </p>
            
            <h4 className="font-display text-lg text-white font-semibold mb-4 uppercase tracking-wide">
              The Irony:
            </h4>
            <p className="font-body text-white/80 text-base leading-relaxed border-l-4 border-gold/60 pl-5">
              Material the original miners discarded as "waste" contains higher concentrations than what modern mining companies spend billions exploring for.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
