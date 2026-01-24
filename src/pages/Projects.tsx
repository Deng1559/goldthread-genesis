import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, ChevronRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { PROJECTS, PROJECTS_PAGE_CONTENT } from "@/lib/projects-content";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

export default function Projects() {
  const prefersReducedMotion = useReducedMotion();

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
        <section className="bg-navy py-16 md:py-24">
          <div className="container-narrow text-center">
            <motion.h1
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
              variants={prefersReducedMotion ? {} : fadeUp}
              initial="hidden"
              animate="visible"
            >
              {PROJECTS_PAGE_CONTENT.hero.headline}
            </motion.h1>
            <motion.p
              className="font-body text-lg text-white/80 max-w-2xl mx-auto"
              variants={prefersReducedMotion ? {} : fadeUp}
              initial="hidden"
              animate="visible"
            >
              {PROJECTS_PAGE_CONTENT.hero.subheadline}
            </motion.p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <SectionHeader
              eyebrow="Portfolio"
              title="Current Projects"
              subtitle="Each project is evaluated against our infrastructure-first thesis. Status indicates current development stage."
              className="mb-12"
            />

            <motion.div
              variants={prefersReducedMotion ? {} : staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid md:grid-cols-2 gap-6"
            >
              {PROJECTS.map((project) => (
                <motion.div
                  key={project.slug}
                  variants={fadeUp}
                  className="group"
                >
                  <Link
                    to={`/projects/${project.slug}`}
                    className="block h-full bg-card border border-border rounded-xl p-6 md:p-8 card-hover focus-gold"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <Badge
                        variant="outline"
                        className={cn(statusColors[project.status])}
                      >
                        {project.status}
                      </Badge>
                      <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
                    </div>

                    <h3 className="font-display text-xl md:text-2xl font-bold text-charcoal mb-2">
                      {project.name}
                    </h3>

                    <p className="text-gold text-sm font-medium mb-3">
                      {project.tagline}
                    </p>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.overview}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{project.siteContext.location}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Disclaimer */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-12 text-center text-sm text-muted-foreground max-w-3xl mx-auto"
            >
              {PROJECTS_PAGE_CONTENT.disclaimer}
            </motion.p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
