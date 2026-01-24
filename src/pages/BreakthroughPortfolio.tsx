import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Shield, 
  FileCheck, 
  Truck, 
  FlaskConical, 
  Clock, 
  MapPin, 
  CheckCircle,
  BadgeCheck,
  DollarSign,
  Sparkles
} from "lucide-react";

const portfolioProjects = [
  {
    name: "Gladstone Toll Mill",
    location: "Idaho Springs, CO",
    status: "Permitted",
    statusColor: "bg-forest-green",
    projectedRevenue: "$17M/year",
    edge: "First permitted toll mill in CO since 2002",
    revenueTimeline: "2026",
    tons: "12 acres, 6–10 gpt material"
  },
  {
    name: "Russell Gulch",
    location: "Russell Gulch, CO",
    status: "Permitted Reclamation",
    statusColor: "bg-gold",
    projectedRevenue: "$8M/year",
    edge: "Fastest path to revenue in portfolio",
    revenueTimeline: "2025",
    tons: "70K+ tons @ 8 gpt"
  },
  {
    name: "Crown Mining",
    location: "Black Hawk, CO",
    status: "Lease Secured",
    statusColor: "bg-navy",
    projectedRevenue: "$25M/year",
    edge: "Largest material volume in portfolio",
    revenueTimeline: "2027",
    tons: "500K+ tons @ 10 gpt"
  },
  {
    name: "B-Group Properties",
    location: "Clear Creek County, CO",
    status: "Under Contract",
    statusColor: "bg-charcoal",
    projectedRevenue: "$12M/year",
    edge: "Strategic adjacency to Gladstone Mill",
    revenueTimeline: "2027",
    tons: "400K tons @ 6 gpt"
  }
];

const opportunityPoints = [
  {
    icon: Shield,
    title: "Zero Toxicity",
    description: "Proven clean-tech process with 1,000-year EPA-rated stability."
  },
  {
    icon: FileCheck,
    title: "Permitting Advantage",
    description: "First toll mill permitted in 20 years in Colorado."
  },
  {
    icon: Truck,
    title: "Mobile Infrastructure",
    description: "MRU units skip years of construction delays."
  }
];

export default function BreakthroughPortfolio() {
  return (
    <div className="min-h-screen bg-muted">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-charcoal to-navy text-white">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-gold mb-6">
            The Breakthrough Portfolio
          </h1>
          <p className="font-inter text-xl md:text-2xl text-white/90 mb-8">
            Permitted Assets. Mobile Infrastructure. Zero-Toxicity Mining.
          </p>
          <p className="font-inter text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            The mining industry is undergoing a seismic shift. With regulatory hurdles, environmental pressure, 
            and inefficiency plaguing traditional mining, Breakthrough's portfolio offers a new model: clean 
            tech-enabled, rapid-to-market infrastructure that unlocks revenue from waste, tailings, and e-waste 
            — with zero tailings ponds and faster permitting.
          </p>
        </div>
      </section>

      {/* Opportunity Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal text-center mb-4">
            An Infrastructure Platform, Not a Single Mine
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Diversified assets with a unified technology advantage
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {opportunityPoints.map((point, index) => (
              <div 
                key={index}
                className="bg-muted rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <point.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-charcoal mb-3">
                  {point.title}
                </h3>
                <p className="font-inter text-muted-foreground">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          <blockquote className="border-l-4 border-gold bg-muted rounded-r-xl p-8 max-w-4xl mx-auto">
            <p className="font-inter text-lg italic text-charcoal mb-4">
              "We're not betting on one mine. We're deploying a platform of permitted infrastructure 
              that generates revenue fast, with no permanent impact."
            </p>
            <footer className="font-inter text-sm text-muted-foreground">
              – Fund Manager
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal text-center mb-4">
            Included in the Portfolio
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Four permitted or near-permitted projects with staggered revenue timelines
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolioProjects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-playfair text-2xl font-bold text-charcoal mb-2">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="font-inter text-sm">{project.location}</span>
                    </div>
                  </div>
                  <span className={`${project.statusColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                    {project.status}
                  </span>
                </div>

                {/* Data Points */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <p className="font-inter text-xs text-muted-foreground">Projected Revenue</p>
                      <p className="font-inter font-semibold text-charcoal">{project.projectedRevenue}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-navy/10 rounded-lg flex items-center justify-center">
                      <Truck className="w-4 h-4 text-navy" />
                    </div>
                    <div>
                      <p className="font-inter text-xs text-muted-foreground">Material</p>
                      <p className="font-inter font-semibold text-charcoal">{project.tons}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-forest-green/10 rounded-lg flex items-center justify-center">
                      <FlaskConical className="w-4 h-4 text-forest-green" />
                    </div>
                    <div>
                      <p className="font-inter text-xs text-muted-foreground">Unique Edge</p>
                      <p className="font-inter font-semibold text-charcoal">{project.edge}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <p className="font-inter text-xs text-muted-foreground">Revenue Timeline</p>
                      <p className="font-inter font-semibold text-charcoal">{project.revenueTimeline}</p>
                    </div>
                  </div>
                </div>

                {/* Portfolio Badge */}
                <div className="flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-lg px-4 py-3">
                  <BadgeCheck className="w-5 h-5 text-gold" />
                  <span className="font-inter text-sm font-semibold text-gold">Included in Portfolio</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gold/10">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <Sparkles className="w-12 h-12 text-gold mx-auto mb-8" />
          <blockquote className="font-playfair text-2xl md:text-3xl text-charcoal italic mb-8 leading-relaxed">
            "The future of mining isn't digging deeper — it's recovering value from what others left behind. 
            That's how we turn liabilities into revenue."
          </blockquote>
          <footer className="font-inter text-lg text-muted-foreground">
            – Breakthrough Management
          </footer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">
            View Terms & Investment Documents
          </h2>
          <p className="font-inter text-lg text-white/80 mb-4">
            Access private details, data room, and investment structure upon accreditation.
          </p>
          <p className="font-inter text-white/60 mb-10">
            Limited slots available for this round.
          </p>
          <Button 
            asChild
            variant="gold"
            size="xl"
            className="font-inter"
          >
            <Link to="/access">
              Request Portfolio Access
            </Link>
          </Button>
          <p className="font-inter text-xs text-white/50 mt-6">
            Accredited investors only. This is not an offer to sell securities.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
