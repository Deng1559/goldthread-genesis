import { Shield, Recycle, Package, TrendingUp, FileCheck, Building } from "lucide-react";

const thesisPoints = [
  {
    icon: Shield,
    title: "Permitted Projects",
    description: "20-year regulatory head start — the first new permits in Colorado in two decades.",
  },
  {
    icon: Recycle,
    title: "Zero-Waste Process",
    description: "EPA-validated for 1,000-year stability (TCLP/SPLP/ABA). No tailings ponds. No toxic byproducts.",
  },
  {
    icon: Package,
    title: "Modular Deployment",
    description: "$1M–$5M per site with 12–24 month revenue timelines, not 7–15 year construction cycles.",
  },
];

const convergenceFactors = [
  {
    icon: TrendingUp,
    title: "Gold at Historic Highs",
    detail: "At $2,000+/oz, material averaging 3–10 gpt is now extraordinarily profitable.",
  },
  {
    icon: FileCheck,
    title: "Regulatory Precedent",
    detail: "The Gladstone permit established a new category for reclamation operations.",
  },
  {
    icon: Building,
    title: "Infrastructure in Place",
    detail: "Roads, power, workforce — all within 30–50 miles of Denver.",
  },
];

export function ThesisSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl text-foreground mb-4">
            Why a Portfolio Model?
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground font-inter">
            For 80 years, billions in gold value sat untouched — not for lack of gold, but for lack of a process that could extract it cleanly. That problem has now been solved.
          </p>
        </div>

        {/* Core Thesis Points */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          {thesisPoints.map((point, index) => (
            <div 
              key={index}
              className="text-center p-8 bg-card rounded-2xl shadow-sm border border-border/50"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
                <point.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-playfair text-xl text-foreground mb-3">
                {point.title}
              </h3>
              <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* The Convergence - Why Now */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-playfair text-2xl text-center text-foreground mb-10">
            The Convergence: Why Now?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {convergenceFactors.map((factor, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center p-6 border border-border/30 rounded-xl bg-card/50"
              >
                <factor.icon className="w-6 h-6 text-gold mb-3" />
                <h4 className="font-inter font-semibold text-foreground mb-2">
                  {factor.title}
                </h4>
                <p className="text-muted-foreground text-sm font-inter">
                  {factor.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Infrastructure vs Traditional Mining */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="font-playfair text-2xl text-center text-foreground mb-8">
            A Different Kind of Mining Investment
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-inter">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 text-muted-foreground font-medium">Risk Factor</th>
                  <th className="text-left py-4 px-4 text-muted-foreground font-medium">Traditional Mining</th>
                  <th className="text-left py-4 px-4 text-gold font-medium">Gold Infrastructure</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                <tr>
                  <td className="py-4 px-4 text-foreground">Exploration Risk</td>
                  <td className="py-4 px-4 text-muted-foreground">High — will we find it?</td>
                  <td className="py-4 px-4 text-foreground font-medium">None — resource is visible</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-foreground">Permitting Risk</td>
                  <td className="py-4 px-4 text-muted-foreground">High — 2–7 year timeline</td>
                  <td className="py-4 px-4 text-foreground font-medium">Low — permits secured</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-foreground">Time to Revenue</td>
                  <td className="py-4 px-4 text-muted-foreground">7–15 years</td>
                  <td className="py-4 px-4 text-foreground font-medium">12–24 months</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-foreground">Capital Intensity</td>
                  <td className="py-4 px-4 text-muted-foreground">$500M–$2B typical</td>
                  <td className="py-4 px-4 text-foreground font-medium">$1M–$5M per project</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Closing Quote */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <blockquote className="font-playfair text-xl md:text-2xl text-foreground/80 italic leading-relaxed">
            "This is not mining in the traditional sense. It is resource processing — taking known materials from known locations through proven technology to produce known outputs."
          </blockquote>
        </div>
      </div>
    </section>
  );
}