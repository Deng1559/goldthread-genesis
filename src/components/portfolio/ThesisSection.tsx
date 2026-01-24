import { Shield, Recycle, Package, TrendingUp, FileCheck, Building, Clock, Landmark } from "lucide-react";

const thesisPoints = [
  {
    icon: Shield,
    title: "Permitted Projects",
    description: "A 20-year regulatory head start — the first new permits in Colorado in two decades.",
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
    detail: "At $2,000+/oz, dump ore averaging 3–10 gpt is now extraordinarily profitable — grades that would have been discarded a decade ago.",
  },
  {
    icon: FileCheck,
    title: "Regulatory Precedent",
    detail: "The Gladstone permit established a new category for reclamation operations. The agency that said 'no' for 20 years is now asking how to say 'yes' more efficiently.",
  },
  {
    icon: Building,
    title: "Infrastructure in Place",
    detail: "Roads, power, experienced workforce — all within 30–50 miles of Denver. No greenfield construction required.",
  },
  {
    icon: Landmark,
    title: "Federal Policy Shift",
    detail: "Domestic critical mineral production is now a national priority. The regulatory door opening for lithium and rare earths is also opening for gold.",
  },
];

const comparisonData = [
  { factor: "Exploration Risk", traditional: "High — will we find it?", infrastructure: "None — resource is visible" },
  { factor: "Permitting Risk", traditional: "High — 2–7 year timeline", infrastructure: "Low — permits secured" },
  { factor: "Grade Uncertainty", traditional: "High — estimates only", infrastructure: "Low — material sampled" },
  { factor: "Time to Revenue", traditional: "7–15 years", infrastructure: "12–24 months" },
  { factor: "Capital Intensity", traditional: "$500M–$2B typical", infrastructure: "$1M–$5M per project" },
];

export function ThesisSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        
        {/* Narrative Opening */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="font-playfair text-3xl md:text-4xl text-foreground mb-8 text-center">
            The Richest Square Mile on Earth
          </h2>
          <div className="prose prose-lg max-w-none font-inter text-muted-foreground space-y-6">
            <p className="text-lg leading-relaxed">
              Between 1859 and 1917, the hills west of Denver yielded more gold per acre than anywhere 
              else in North America. Central City became the largest city in Colorado. The ore was so 
              rich that miners focused only on the highest-grade material — anything below their threshold 
              was cast aside.
            </p>
            <p className="text-lg leading-relaxed">
              Then came World War I. The mines closed. The miners left. And for <span className="text-foreground font-semibold">80 years</span>, 
              billions in gold value sat untouched — not for lack of gold, but because no one could 
              legally extract it without the toxic processes that regulators had rightfully banned.
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              That problem has now been solved.
            </p>
          </div>
        </div>

        {/* The Stranded Value - Data Highlight */}
        <div className="max-w-5xl mx-auto mb-20 bg-card rounded-2xl border border-border/50 p-8 md:p-12">
          <h3 className="font-playfair text-2xl text-center text-foreground mb-8">
            The Stranded Value
          </h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm font-inter">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Material Type</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Typical Grade</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Economic Viability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                <tr>
                  <td className="py-3 px-4 text-foreground">Original high-grade ore (1859–1917)</td>
                  <td className="py-3 px-4 text-muted-foreground">15–30+ gpt</td>
                  <td className="py-3 px-4 text-muted-foreground italic">Exhausted</td>
                </tr>
                <tr className="bg-gold/5">
                  <td className="py-3 px-4 text-foreground font-medium">Dump ore piles (discarded)</td>
                  <td className="py-3 px-4 text-gold font-semibold">3–10 gpt</td>
                  <td className="py-3 px-4 text-gold font-semibold">Highly profitable today</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-foreground">Mill tailings (processed)</td>
                  <td className="py-3 px-4 text-muted-foreground">1–3 gpt</td>
                  <td className="py-3 px-4 text-muted-foreground">Marginally profitable</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-foreground">Typical new mine discovery</td>
                  <td className="py-3 px-4 text-muted-foreground">1–2 gpt</td>
                  <td className="py-3 px-4 text-muted-foreground">Requires massive scale</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-muted-foreground font-inter text-sm">
            The irony is stark: material that 19th-century miners discarded as waste contains higher 
            gold concentrations than what modern companies spend billions exploring for.
          </p>
        </div>

        {/* Why a Portfolio Model */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl text-foreground mb-4">
            Why a Portfolio Model?
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground font-inter">
            Rather than concentrating capital in a single project with binary outcomes, 
            MineTeck invests across multiple permitted or near-permitted sites — each standing 
            on its own economics while sharing common infrastructure, expertise, and technology.
          </p>
        </div>

        {/* Core Thesis Points */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-24">
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

        {/* The Breakthrough - Zero Waste Technology */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="bg-navy rounded-2xl p-8 md:p-12 text-center">
            <h3 className="font-playfair text-2xl md:text-3xl text-white mb-6">
              The 1,000-Year Certification
            </h3>
            <p className="text-white/80 font-inter mb-8 leading-relaxed">
              MineTeck's zero-waste process was submitted to three rigorous EPA tests rarely 
              attempted in mining applications: TCLP, SPLP, and ABA. The results were unprecedented — 
              non-detect levels across all hazardous constituents, with calculated environmental 
              stability of <span className="text-gold font-semibold">1,000+ years</span>.
            </p>
            <p className="text-white/60 font-inter text-sm italic">
              In plain terms: the material that comes out of MineTeck's process is cleaner than 
              the dirt it sits on.
            </p>
          </div>
        </div>

        {/* The Convergence - Why Now */}
        <div className="max-w-5xl mx-auto mb-24">
          <h3 className="font-playfair text-2xl md:text-3xl text-center text-foreground mb-4">
            The Convergence: Why Now?
          </h3>
          <p className="text-center text-muted-foreground font-inter mb-12 max-w-2xl mx-auto">
            Technology breakthroughs matter, but timing matters more. The Colorado Gold Renaissance 
            is about the convergence of multiple factors that have aligned for the first time in a century.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {convergenceFactors.map((factor, index) => (
              <div 
                key={index}
                className="flex gap-4 p-6 border border-border/30 rounded-xl bg-card/50"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <factor.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-foreground mb-2">
                    {factor.title}
                  </h4>
                  <p className="text-muted-foreground text-sm font-inter leading-relaxed">
                    {factor.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Infrastructure vs Traditional Mining */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="font-playfair text-2xl md:text-3xl text-center text-foreground mb-4">
            A Different Kind of Mining Investment
          </h3>
          <p className="text-center text-muted-foreground font-inter mb-10 max-w-2xl mx-auto">
            This is not mining in the traditional sense. It is resource processing — taking known 
            materials from known locations through proven technology to produce known outputs.
          </p>
          <div className="overflow-x-auto bg-card rounded-2xl border border-border/50 p-6">
            <table className="w-full text-sm font-inter">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 text-muted-foreground font-medium">Risk Factor</th>
                  <th className="text-left py-4 px-4 text-muted-foreground font-medium">Traditional Mining</th>
                  <th className="text-left py-4 px-4 text-gold font-semibold">Gold Infrastructure</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {comparisonData.map((row, index) => (
                  <tr key={index}>
                    <td className="py-4 px-4 text-foreground font-medium">{row.factor}</td>
                    <td className="py-4 px-4 text-muted-foreground">{row.traditional}</td>
                    <td className="py-4 px-4 text-foreground font-medium">{row.infrastructure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Secured Resources Highlight */}
        <div className="max-w-3xl mx-auto text-center bg-gold/5 border border-gold/20 rounded-2xl p-8 md:p-10">
          <Clock className="w-10 h-10 text-gold mx-auto mb-4" />
          <h4 className="font-playfair text-xl text-foreground mb-4">
            $200M+ in Contracted Above-Ground Material
          </h4>
          <p className="text-muted-foreground font-inter leading-relaxed">
            This is not speculative exploration. These are known resources, with documented assays, 
            in defined locations, under contractual control. The gold is there. It has always been there. 
            MineTeck simply solved the problem that kept it locked away.
          </p>
        </div>
      </div>
    </section>
  );
}