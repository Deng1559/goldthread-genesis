import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Recycle, 
  Package,
  MapPin,
  Clock,
  DollarSign,
  Cpu,
  Mountain
} from "lucide-react";

const portfolioProjects = [
  {
    name: "Gladstone Toll Mill",
    location: "Idaho Springs, CO",
    status: "Permitted",
    statusColor: "bg-emerald-100 text-emerald-800",
    material: "12 acres @ 6–10 gpt",
    timeline: "12–18 months",
    capital: "$4.0M",
    mruStatus: "Operational",
  },
  {
    name: "Russell Gulch",
    location: "Russell Gulch, CO",
    status: "Reclamation Approved",
    statusColor: "bg-blue-100 text-blue-800",
    material: "70K+ tons @ 8 gpt",
    timeline: "6–9 months",
    capital: "$1.25M",
    mruStatus: "Proven",
  },
  {
    name: "Crown Mining",
    location: "Central City, CO",
    status: "In Development",
    statusColor: "bg-amber-100 text-amber-800",
    material: "500K+ tons @ 10 gpt",
    timeline: "18–24 months",
    capital: "$3.6M",
    mruStatus: "Scalable",
  },
  {
    name: "B-Group Properties",
    location: "Clear Creek County, CO",
    status: "Under Contract",
    statusColor: "bg-purple-100 text-purple-800",
    material: "400K tons @ 6 gpt",
    timeline: "18–24 months",
    capital: "$4.5M",
    mruStatus: "Adjacent to Gladstone",
  },
];

const thesisPoints = [
  {
    icon: Shield,
    title: "Permitted Projects",
    description: "20-year regulatory head start",
  },
  {
    icon: Recycle,
    title: "Zero-Waste Process",
    description: "1,000-year EPA validation (TCLP/SPLP/ABA)",
  },
  {
    icon: Package,
    title: "Modular Deployment",
    description: "$1M–$5M per site, 12–24 month revenue",
  },
];

export default function BreakthroughPortfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-gold mb-6">
            The MineTeck Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-inter">
            Permitted Infrastructure. Proven Material. No Speculation.
          </p>
          <p className="max-w-3xl mx-auto text-lg text-white/70 font-inter leading-relaxed">
            80 years of stranded gold is now recoverable — not through exploration, but infrastructure. 
            MineTeck holds 4 permitted or near-permitted projects in Colorado, all backed by EPA-validated, 
            zero-toxicity recovery tech and rapid deployment models.
          </p>
        </div>
      </section>

      {/* Investment Thesis Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="font-playfair text-3xl md:text-4xl text-center text-foreground mb-16">
            Why a Portfolio Model?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {thesisPoints.map((point, index) => (
              <div 
                key={index}
                className="text-center p-8 bg-white rounded-2xl shadow-sm border border-border/50"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
                  <point.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-playfair text-xl text-foreground mb-3">
                  {point.title}
                </h3>
                <p className="text-muted-foreground font-inter">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="font-playfair text-3xl md:text-4xl text-center text-foreground mb-16">
            Included in This Portfolio
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {portfolioProjects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-md border border-border/50 p-6 hover:shadow-lg transition-shadow"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-playfair text-xl text-foreground mb-1">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.statusColor}`}>
                    {project.status}
                  </span>
                </div>

                {/* Data Points */}
                <div className="space-y-3 mb-6">
                  <DataRow 
                    icon={<Mountain className="w-4 h-4 text-muted-foreground" />}
                    label="Material"
                    value={project.material}
                  />
                  <DataRow 
                    icon={<Clock className="w-4 h-4 text-muted-foreground" />}
                    label="Timeline"
                    value={project.timeline}
                  />
                  <DataRow 
                    icon={<DollarSign className="w-4 h-4 text-muted-foreground" />}
                    label="Capital Required"
                    value={project.capital}
                  />
                  <DataRow 
                    icon={<Cpu className="w-4 h-4 text-muted-foreground" />}
                    label="MRU Status"
                    value={project.mruStatus}
                  />
                </div>

                {/* CTA */}
                <Button 
                  asChild
                  variant="goldOutline" 
                  size="sm"
                  className="w-full"
                >
                  <Link to="/access">Qualified Investors Only</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ferguson Quote Section */}
      <section className="py-20" style={{ backgroundColor: '#FFF8E7' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <blockquote className="border-l-4 border-gold pl-8">
              <p className="font-playfair text-2xl md:text-3xl text-foreground italic leading-relaxed">
                "This is infrastructure, not speculation. Risk remains — but it's no longer binary. 
                That's what changes the economics."
              </p>
              <footer className="mt-6 text-muted-foreground font-inter">
                — Ferguson, MineTeck
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl text-white mb-6">
            View Portfolio Terms & Investment Materials
          </h2>
          <p className="max-w-2xl mx-auto text-white/80 font-inter mb-4 leading-relaxed">
            Detailed economics, capital requirements, and execution milestones are available 
            for accredited investors only.
          </p>
          <p className="text-white/60 font-inter mb-8 text-sm">
            Accreditation verification required before access.
          </p>
          <Button asChild variant="gold" size="xl">
            <Link to="/access">Request Portfolio Access</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function DataRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-muted-foreground">{label}</span>
      </div>
      <span className="font-medium text-foreground">{value}</span>
    </div>
  );
}
