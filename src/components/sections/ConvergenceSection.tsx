import { TrendingUp, Leaf, FileCheck, Landmark, Handshake } from "lucide-react";

const CONVERGENCE_FACTORS = [
  {
    icon: TrendingUp,
    title: "Gold at Historic Highs",
    text: "$2,000+ per ounce makes material economic that wasn't viable at $350/oz in the 1990s. Colorado's dump ore piles average 3-10 gpt — now extraordinarily profitable.",
  },
  {
    icon: Leaf,
    title: "Zero-Waste Breakthrough",
    text: "MineTeck's technology solved the regulatory gridlock. EPA testing shows 1,000+ year environmental stability. No toxic tailings.",
  },
  {
    icon: FileCheck,
    title: "Regulatory Precedent",
    text: "First toll mill permit in Colorado in 20 years (2022). First EVER on a major waterway. DRMS now developing new permit category for reclamation.",
  },
  {
    icon: Landmark,
    title: "Federal Policy Shift",
    text: "Domestic mineral production now a national priority. Executive orders expediting permitting. Infrastructure frameworks opening for precious metals.",
  },
  {
    icon: Handshake,
    title: "Secured Resources",
    text: "$200M+ in material under contract with documented assays. Known resources in defined locations. Not speculative exploration.",
  },
];

export function ConvergenceSection() {
  return (
    <section className="py-20 md:py-24 bg-muted/50">
      <div className="container-wide px-4">
        {/* Headlines */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Five Factors Aligned
          </h2>
          <p className="font-body text-xl md:text-2xl text-gold">
            The Convergence (2020–Present)
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-12">
          {CONVERGENCE_FACTORS.map((factor, index) => {
            const IconComponent = factor.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
              >
                {/* Gold top border */}
                <div className="h-1 bg-gold" />
                
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-gold" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-3">
                    {factor.title}
                  </h3>

                  {/* Text */}
                  <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed">
                    {factor.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Line */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="font-body text-lg md:text-xl text-foreground/80 italic border-l-4 border-gold pl-6 text-left">
            "This isn't exploration speculation. This is systematic recovery of known value from known locations through proven processes."
          </p>
        </div>
      </div>
    </section>
  );
}
