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
  mruStatus: "Operational"
},
{
  name: "Russell Gulch",
  location: "Russell Gulch, CO",
  status: "Reclamation Approved",
  statusColor: "bg-blue-100 text-blue-800",
  material: "70K+ tons @ 8 gpt",
  timeline: "6–9 months",
  capital: "$1.25M",
  mruStatus: "Proven"
},
{
  name: "The Quarry",
  location: "Central City, CO",
  status: "Lease Secured",
  statusColor: "bg-amber-100 text-amber-800",
  material: "500K+ tons @ 10 gpt",
  timeline: "18–24 months",
  capital: "$3.6M",
  mruStatus: "Scalable"
},
{
  name: "Stanley Road",
  location: "Clear Creek County, CO",
  status: "Under Contract",
  statusColor: "bg-purple-100 text-purple-800",
  material: "400K tons @ 6 gpt",
  timeline: "18–24 months",
  capital: "$4.5M",
  mruStatus: "Adjacent to Gladstone"
}];


function DataRow({ icon, label, value }: {icon: React.ReactNode;label: string;value: string;}) {
  return (
    <div className="flex items-center justify-between text-sm">
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-muted-foreground">{label}</span>
      </div>
      <span className="font-medium text-foreground">{value}</span>
    </div>);

}

export function PortfolioGrid() {
  return (
    <section className="py-20 bg-background">
      































































    </section>);

}