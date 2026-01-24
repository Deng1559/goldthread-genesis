import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, FileText, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { KnownUnknownBlock } from "@/components/shared/KnownUnknownBlock";
import { RiskCallout } from "@/components/shared/RiskCallout";
import { GatedBlock } from "@/components/shared/GatedBlock";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/lib/projects-content";
import { fadeUp } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const prefersReducedMotion = useReducedMotion();

  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const statusColors = {
    Active: "bg-forest/10 text-forest border-forest/20",
    Development: "bg-gold/10 text-gold border-gold/20",
    Evaluation: "bg-navy/10 text-navy border-navy/20",
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="bg-navy py-12 md:py-20">
          <div className="container-wide">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6 focus-gold rounded-md"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm">Back to Projects</span>
            </Link>

            <motion.div
              variants={prefersReducedMotion ? {} : fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Badge
                    variant="outline"
                    className={cn("border", statusColors[project.status])}
                  >
                    {project.status}
                  </Badge>
                </div>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                  {project.name}
                </h1>
                <p className="text-gold text-lg font-medium">
                  {project.tagline}
                </p>
              </div>

              <div className="flex items-center gap-2 text-white/70">
                <MapPin className="h-5 w-5" />
                <span>{project.siteContext.location}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Site Context */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="max-w-4xl">
              <SectionHeader
                eyebrow="Site Context"
                title="Project Overview"
                align="left"
                className="mb-8"
              />

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="prose prose-charcoal max-w-none"
              >
                <p className="text-lg text-charcoal leading-relaxed mb-6">
                  {project.overview}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.siteContext.description}
                </p>
                {project.siteContext.historicalSignificance && (
                  <p className="text-muted-foreground leading-relaxed italic">
                    {project.siteContext.historicalSignificance}
                  </p>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Infrastructure & Permits */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Infrastructure */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6 md:p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-navy" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-charcoal">
                    {project.infrastructure.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {project.infrastructure.items.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm text-charcoal"
                    >
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-navy flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Permits */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6 md:p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-forest" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-charcoal">
                    Permits & Compliance
                  </h3>
                </div>
                <p className="text-sm text-forest font-medium mb-4">
                  {project.permits.status}
                </p>
                <ul className="space-y-3">
                  {project.permits.items.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm text-charcoal"
                    >
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-forest flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Known vs Unknown */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <SectionHeader
              eyebrow="Due Diligence Status"
              title="Known vs. Unverified"
              subtitle="Transparent categorization of what has been confirmed versus what requires further validation."
              className="mb-12"
            />

            <KnownUnknownBlock
              known={{
                title: project.known.title,
                items: project.known.items,
              }}
              unknown={{
                title: project.unknown.title,
                items: project.unknown.items,
              }}
            />
          </div>
        </section>

        {/* Execution Risks */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container-wide">
            <RiskCallout
              title="Execution Risks"
              risks={project.executionRisks}
              variant="warning"
            />
          </div>
        </section>

        {/* Gated Content */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <GatedBlock
              title={project.gatedContent.title}
              description="Detailed project analysis, financial projections, and technical documentation are available to verified investors and partners."
              items={project.gatedContent.items}
              ctaText="Request Data Room Access"
              ctaHref="/access"
            />
          </div>
        </section>

        {/* Back to Projects */}
        <section className="py-12 bg-muted/30">
          <div className="container-wide text-center">
            <Link to="/projects">
              <Button variant="outline" size="lg">
                <ArrowLeft className="mr-2 h-4 w-4" />
                View All Projects
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
