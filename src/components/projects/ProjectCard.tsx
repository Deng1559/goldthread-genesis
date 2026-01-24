import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { ProjectCardData } from "@/lib/projects-content";
import { DollarSign, Clock, Settings, Cpu, Mountain, Star } from "lucide-react";

interface ProjectCardProps {
  project: ProjectCardData;
}

const statusStyles = {
  "Permitted": "bg-forest/10 text-forest border-forest/30",
  "Permitted Reclamation": "bg-gold/10 text-gold border-gold/30",
  "Lease Secured": "bg-navy/10 text-navy border-navy/30",
  "Under Contract": "bg-charcoal/10 text-charcoal border-charcoal/30",
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="bg-white rounded-2xl border-0 shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full flex flex-col">
      {/* Placeholder Image */}
      <div className="h-48 bg-gradient-to-br from-navy/20 to-navy/5 flex items-center justify-center">
        <Mountain className="w-16 h-16 text-navy/30" />
      </div>

      <CardContent className="p-6 flex flex-col flex-1">
        {/* Status Badge */}
        <Badge
          variant="outline"
          className={cn("w-fit mb-3 text-xs font-medium", statusStyles[project.status])}
        >
          {project.status}
        </Badge>

        {/* Title */}
        <h3 className="font-display text-xl font-bold text-charcoal mb-4">
          {project.name}
        </h3>

        {/* Key Data Points */}
        <div className="space-y-3 mb-4 flex-1">
          <DataRow
            icon={<DollarSign className="w-4 h-4" />}
            label="Capital Required"
            value={project.capital}
          />
          <DataRow
            icon={<Clock className="w-4 h-4" />}
            label="Timeline"
            value={project.timeline}
          />
          <DataRow
            icon={<Settings className="w-4 h-4" />}
            label="Project Type"
            value={project.projectType}
          />
          <DataRow
            icon={<Cpu className="w-4 h-4" />}
            label="MRU Status"
            value={project.mruStatus}
          />
          <DataRow
            icon={<Mountain className="w-4 h-4" />}
            label="Material"
            value={project.material}
          />
        </div>

        {/* Differentiator */}
        <div className="flex items-start gap-2 mb-5 p-3 bg-gold/5 rounded-lg border border-gold/20">
          <Star className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
          <span className="text-sm font-medium text-charcoal">
            {project.differentiator}
          </span>
        </div>

        {/* CTA Button */}
        <Button
          variant="goldOutline"
          size="sm"
          className="w-full"
          onClick={() => {
            // Placeholder action - will link to gated content later
          }}
        >
          Qualified Investors Only
        </Button>
      </CardContent>
    </Card>
  );
}

function DataRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-navy/60 mt-0.5">{icon}</span>
      <div className="flex-1 min-w-0">
        <span className="text-xs text-muted-foreground block">{label}</span>
        <span className="text-sm font-medium text-charcoal">{value}</span>
      </div>
    </div>
  );
}
