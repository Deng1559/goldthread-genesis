import { motion } from "framer-motion";
import { AlertTriangle, Linkedin, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { RiskCallout } from "@/components/shared/RiskCallout";
import { GatedBlock } from "@/components/shared/GatedBlock";
import { ABOUT_PAGE_CONTENT } from "@/lib/about-content";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";
import andrewFergusonPhoto from "@/assets/andrew-ferguson.jpg";
import brettStokesPhoto from "@/assets/brett-stokes.png";
import jayLesserPhoto from "@/assets/jay-lesser.jpg";

const TEAM_PHOTOS: Record<string, string> = {
  "Andrew Ferguson": andrewFergusonPhoto,
  "Brett Stokes": brettStokesPhoto,
  "Harold (Jay) Lesser": jayLesserPhoto,
};

export default function About() {
  const prefersReducedMotion = useReducedMotion();
  const content = ABOUT_PAGE_CONTENT;

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
              animate="visible">

              {content.hero.headline}
            </motion.h1>
            <motion.p
              className="font-body text-lg text-white/80 max-w-2xl mx-auto"
              variants={prefersReducedMotion ? {} : fadeUp}
              initial="hidden"
              animate="visible">

              {content.hero.subheadline}
            </motion.p>
          </div>
        </section>

        {/* Mission & Principles - MineTeck Section */}
        <section id="mineteck" className="section-padding bg-background scroll-mt-20">
          <div className="container-wide">
            <SectionHeader
              eyebrow="Our Approach"
              title={content.mission.title}
              className="mb-8" />


            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl mx-auto mb-12">

              <p className="text-lg text-charcoal leading-relaxed text-center">
                {content.mission.statement}
              </p>
            </motion.div>

            <motion.div
              variants={prefersReducedMotion ? {} : staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {content.mission.principles.map((principle, index) =>
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-card border border-border rounded-xl p-6">

                  <h4 className="font-display font-semibold text-gold mb-2">
                    {principle.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Management Risk Disclosure */}
        


















        {/* Leadership Team - Breakthrough Management */}
        <section id="breakthrough" className="section-padding bg-muted/30 scroll-mt-20">
          <div className="container-wide">
            <SectionHeader
              eyebrow="Team"
              title={content.team.title}
              subtitle={content.team.disclaimer}
              className="mb-12" />


            <motion.div
              variants={prefersReducedMotion ? {} : staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {content.team.members.map((member, index) =>
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-card border border-border rounded-xl p-6">

                  {TEAM_PHOTOS[member.name] ? (
                    <img
                      src={TEAM_PHOTOS[member.name]}
                      alt={member.name}
                      className="w-16 h-16 rounded-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-navy/10 flex items-center justify-center">
                      <span className="font-display text-xl font-bold text-navy">
                        {member.name.split(" ").slice(-1)[0][0]}
                      </span>
                    </div>
                  )}
                  
                  <h4 className="font-display font-semibold text-charcoal">
                    {member.name}
                  </h4>
                  <p className="text-sm text-gold font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  
                  <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-navy hover:text-navy-light transition-colors focus-gold rounded-md"
                  aria-label={`${member.name}'s LinkedIn profile`}>

                    <Linkedin className="h-4 w-4" />
                    <span>LinkedIn</span>
                  </a>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Advisory Board */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <SectionHeader
              eyebrow="Advisors"
              title={content.advisors.title}
              subtitle={content.advisors.disclaimer}
              className="mb-12" />


            <motion.div
              variants={prefersReducedMotion ? {} : staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid md:grid-cols-2 gap-6">

              {content.advisors.members.map((advisor, index) =>
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-card border border-border rounded-xl p-6 flex gap-4">

                  {/* Placeholder avatar */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <span className="font-display text-lg font-bold text-gold">
                      {advisor.name.split(" ").slice(-1)[0][0]}
                    </span>
                  </div>
                  
                  <div>
                    <h4 className="font-display font-semibold text-charcoal">
                      {advisor.name}
                    </h4>
                    <p className="text-sm text-gold font-medium mb-2">
                      {advisor.expertise}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {advisor.bio}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Governance & Reporting */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <SectionHeader
              eyebrow="Accountability"
              title={content.governance.title}
              subtitle={content.governance.description}
              className="mb-12" />


            <motion.div
              variants={prefersReducedMotion ? {} : staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid md:grid-cols-2 gap-6 mb-12">

              {content.governance.points.map((point, index) =>
              <motion.div
                key={index}
                variants={fadeUp}
                className="flex items-start gap-4">

                  <CheckCircle2 className="h-5 w-5 text-forest flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">
                      {point.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-navy/5 border border-navy/20 rounded-xl p-6 max-w-3xl mx-auto">

              <p className="text-charcoal leading-relaxed text-center italic">
                "{content.governance.philosophy}"
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact / Gated Content CTA */}
        <section id="contact" className="section-padding bg-background scroll-mt-20">
          <div className="container-wide">
            <GatedBlock
              title="Complete Team & Governance Documentation"
              description="Detailed backgrounds, track records, and governance documentation available to verified investors."
              items={[
              "Full management biographies",
              "Board composition and charters",
              "Compensation philosophy",
              "Reporting templates and schedules"]
              }
              ctaText="Request Access"
              ctaHref="/access" />

          </div>
        </section>
      </main>

      <Footer />
    </div>);

}