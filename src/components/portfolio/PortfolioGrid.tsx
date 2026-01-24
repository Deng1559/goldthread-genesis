import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Clock, DollarSign, Cpu, Mountain } from "lucide-react";

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
    status: "Lease Secured",
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

export function PortfolioGrid() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="font-playfair text-3xl md:text-4xl text-center text-foreground mb-16">
          Included in This Portfolio
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {portfolioProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl shadow-md border border-border/50 p-6 hover:shadow-lg transition-shadow"
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
  );
}