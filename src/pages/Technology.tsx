import { motion } from "framer-motion";
import { CheckCircle2, HelpCircle, AlertTriangle, ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { RiskCallout } from "@/components/shared/RiskCallout";
import { GatedBlock } from "@/components/shared/GatedBlock";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TECHNOLOGY_PAGE_CONTENT } from "@/lib/technology-content";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

export default function Technology() {
  const prefersReducedMotion = useReducedMotion();
  const content = TECHNOLOGY_PAGE_CONTENT;

  const statusColors = {
    Complete: "bg-forest text-white",
    "In Progress": "bg-gold text-white",
    Pending: "bg-muted text-muted-foreground",
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
              {content.hero.headline}
            </motion.h1>
            <motion.p
              className="font-body text-lg text-white/80 max-w-2xl mx-auto mb-8"
              variants={prefersReducedMotion ? {} : fadeUp}
              initial="hidden"
              animate="visible"
            >
              {content.hero.subheadline}
            </motion.p>
          </div>
        </section>

        {/* MRU Overview Section */}
        <section id="mru" className="section-padding bg-background scroll-mt-20">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left - Image Placeholders */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="relative aspect-[16/10] bg-muted rounded-lg overflow-hidden border border-border">
                  <div className="absolute inset-0 bg-navy/10 flex items-center justify-center">
                    <div className="text-center">
                      <span className="block text-muted-foreground/60 font-body text-sm mb-2">
                        MRU (Modular Recovery Unit)
                      </span>
                      <span className="block text-muted-foreground/40 font-body text-xs">
                        High-resolution image placeholder
                      </span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative aspect-[4/3] bg-muted rounded-lg overflow-hidden border border-border">
                    <div className="absolute inset-0 bg-navy/10 flex items-center justify-center">
                      <span className="text-muted-foreground/40 font-body text-xs text-center px-4">
                        Processing detail
                      </span>
                    </div>
                  </div>
                  <div className="relative aspect-[4/3] bg-muted rounded-lg overflow-hidden border border-border">
                    <div className="absolute inset-0 bg-navy/10 flex items-center justify-center">
                      <span className="text-muted-foreground/40 font-body text-xs text-center px-4">
                        Zero-waste output
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right - Content */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <p className="font-mono text-gold text-sm uppercase tracking-wider mb-2">
                  The Technology
                </p>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  The MRU: Modular Recovery Unit
                </h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  {content.mruOverview.intro}
                </p>
                <ul className="space-y-3 mb-8">
                  {content.mruOverview.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-gold" />
                      <span className="font-body text-foreground text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                {/* Quote Box */}
                <div
                  className="border-l-[3px] border-gold pl-4 py-4 mb-6"
                  style={{ backgroundColor: "#FFF8E7" }}
                >
                  <p className="font-display text-sm italic text-charcoal/80 leading-relaxed mb-1">
                    "{content.mruOverview.quote.text}"
                  </p>
                  <p className="font-body text-xs text-charcoal/60">
                    {content.mruOverview.quote.attribution}
                  </p>
                </div>

                {/* CTA Links */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/access">
                    <Button variant="gold" size="lg" className="w-full sm:w-auto">
                      Submit Investor Inquiry
                    </Button>
                  </Link>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-navy hover:text-gold transition-colors font-body text-sm font-medium"
                  >
                    <ArrowRight className="w-4 h-4" />
                    View EPA Test Data (PDF)
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Flow */}
        <section id="process" className="section-padding bg-background scroll-mt-20">
          <div className="container-wide">
            <SectionHeader
              eyebrow="Process Overview"
              title={content.processFlow.title}
              subtitle={content.processFlow.disclaimer}
              className="mb-12"
            />

            <motion.div
              variants={prefersReducedMotion ? {} : staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {content.processFlow.steps.map((step) => (
                <motion.div
                  key={step.number}
                  variants={fadeUp}
                  className="relative bg-card border border-border rounded-xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center">
                      <span className="font-mono text-sm font-bold text-white">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-charcoal">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  {step.number < content.processFlow.steps.length && (
                    <ChevronRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground/30" />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Proven vs Unvalidated */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Proven */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="bg-forest/5 border border-forest/20 rounded-xl p-6 md:p-8 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <CheckCircle2 className="h-6 w-6 text-forest" />
                    <h3 className="font-display text-xl font-bold text-forest">
                      {content.proven.title}
                    </h3>
                  </div>
                  <div className="space-y-6">
                    {content.proven.items.map((item, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-charcoal mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Unvalidated */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="bg-gold/5 border border-gold/20 rounded-xl p-6 md:p-8 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <HelpCircle className="h-6 w-6 text-gold" />
                    <h3 className="font-display text-xl font-bold text-gold">
                      {content.unvalidated.title}
                    </h3>
                  </div>
                  <div className="space-y-6">
                    {content.unvalidated.items.map((item, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-charcoal mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Metallurgy Assumptions */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <SectionHeader
              eyebrow="Engineering Estimates"
              title={content.metallurgyAssumptions.title}
              subtitle={content.metallurgyAssumptions.disclaimer}
              className="mb-12"
            />

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-navy text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-display font-semibold">
                        Parameter
                      </th>
                      <th className="px-6 py-4 text-left font-mono font-semibold">
                        Value
                      </th>
                      <th className="px-6 py-4 text-left font-display font-semibold">
                        Note
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {content.metallurgyAssumptions.assumptions.map((assumption, index) => (
                      <tr key={index} className="hover:bg-muted/50 transition-colors">
                        <td className="px-6 py-4 font-medium text-charcoal">
                          {assumption.label}
                        </td>
                        <td className="px-6 py-4 font-mono text-gold">
                          {assumption.value}
                        </td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">
                          {assumption.note}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Environmental Validation */}
        <section id="validation" className="bg-forest py-16 md:py-24 scroll-mt-20">
          <div className="container-wide">
            <SectionHeader
              eyebrow="ESG Commitment"
              title={content.environmental.title}
              subtitle={content.environmental.description}
              className="mb-12 [&_h2]:text-white [&_p]:text-white/80 [&_p:first-child]:text-forest-light"
            />

            <motion.div
              variants={prefersReducedMotion ? {} : staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid md:grid-cols-2 gap-6"
            >
              {content.environmental.points.map((point, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <div className="flex items-start gap-4">
                    <div className={cn(
                      "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
                      point.verified ? "bg-white/20" : "bg-gold/20"
                    )}>
                      {point.verified ? (
                        <CheckCircle2 className="h-5 w-5 text-white" />
                      ) : (
                        <HelpCircle className="h-5 w-5 text-gold" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold text-white">
                          {point.title}
                        </h4>
                        <Badge
                          variant="outline"
                          className={cn(
                            "text-xs",
                            point.verified
                              ? "border-white/30 text-white"
                              : "border-gold/50 text-gold"
                          )}
                        >
                          {point.verified ? "Verified" : "Validation Pending"}
                        </Badge>
                      </div>
                      <p className="text-sm text-white/70 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Verification Roadmap / Permitting */}
        <section id="permitting" className="section-padding bg-background scroll-mt-20">
          <div className="container-wide">
            <SectionHeader
              eyebrow="Development Status"
              title={content.verificationRoadmap.title}
              subtitle={content.verificationRoadmap.disclaimer}
              className="mb-12"
            />

            <motion.div
              variants={prefersReducedMotion ? {} : staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-4"
            >
              {content.verificationRoadmap.phases.map((phase, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="flex items-center gap-4 md:gap-8 bg-card border border-border rounded-xl p-4 md:p-6"
                >
                  <div className="flex-shrink-0 w-16 text-center">
                    <span className="font-mono text-sm font-bold text-navy">
                      {phase.phase}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-charcoal mb-1">
                      {phase.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {phase.description}
                    </p>
                  </div>
                  <Badge className={cn(statusColors[phase.status as keyof typeof statusColors])}>
                    {phase.status}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Risk Register */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <SectionHeader
              eyebrow="Risk Management"
              title={content.riskRegister.title}
              subtitle={content.riskRegister.description}
              className="mb-12"
            />

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-navy text-white">
                    <tr>
                      <th className="px-4 py-3 text-left font-display font-semibold whitespace-nowrap">
                        Risk
                      </th>
                      <th className="px-4 py-3 text-left font-display font-semibold whitespace-nowrap">
                        Cause
                      </th>
                      <th className="px-4 py-3 text-left font-display font-semibold whitespace-nowrap">
                        Impact
                      </th>
                      <th className="px-4 py-3 text-left font-display font-semibold whitespace-nowrap">
                        Mitigation
                      </th>
                      <th className="px-4 py-3 text-left font-display font-semibold whitespace-nowrap">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {content.riskRegister.risks.map((risk, index) => (
                      <tr key={index} className="hover:bg-muted/50 transition-colors">
                        <td className="px-4 py-4 font-medium text-charcoal">
                          <div className="flex items-center gap-2">
                            <AlertTriangle className="h-4 w-4 text-gold flex-shrink-0" />
                            {risk.risk}
                          </div>
                        </td>
                        <td className="px-4 py-4 text-muted-foreground">
                          {risk.cause}
                        </td>
                        <td className="px-4 py-4 text-muted-foreground">
                          {risk.impact}
                        </td>
                        <td className="px-4 py-4 text-muted-foreground">
                          {risk.mitigation}
                        </td>
                        <td className="px-4 py-4">
                          <Badge variant="outline" className="whitespace-nowrap">
                            {risk.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Gated Content CTA */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <GatedBlock
              title="Complete Technical Documentation"
              description="Full engineering reports, process specifications, and verification data are available to qualified investors and partners."
              items={[
                "Detailed process flow diagrams",
                "Metallurgical test results",
                "Equipment specifications",
                "Environmental assessments",
                "Third-party validation reports",
              ]}
              ctaText="Submit Technical Inquiry"
              ctaHref="/access"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
