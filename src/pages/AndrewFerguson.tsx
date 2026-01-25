import { motion } from "framer-motion";
import { Download, Linkedin, Mail, Award, FileCheck, Wrench, Users } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const TECHNICAL_ACHIEVEMENTS = [
  "Led development of MineTeck's proprietary zero-waste processing system",
  "Achieved EPA TCLP/SPLP certification (1,000+ year toxicity stability)",
  "Eliminated toxic chemical usage while maintaining commercial recovery rates",
  "Designed modular recovery units (MRUs) for rapid deployment",
  "[Additional technical achievements to be provided]",
];

const ENGINEERING_BACKGROUND = [
  "[Degree/University - TO BE PROVIDED]",
  "[Previous technical roles - TO BE PROVIDED]",
  "[Certifications - TO BE PROVIDED]",
  "[Patents/Publications - TO BE PROVIDED]",
];

const GLADSTONE_ACHIEVEMENTS = [
  "First toll mill permit issued in Colorado in 20+ years",
  "First EVER toll mill permit on a major Colorado waterway",
  "Established regulatory precedent for reclamation-focused operations",
  "Demonstrated pathway for future responsible mining permits",
];

const REGULATORY_EXPERIENCE = [
  "Established collaborative relationships with Colorado DRMS",
  "Navigated complex multi-agency permitting requirements",
  "[Additional regulatory experience - TO BE PROVIDED]",
  "[Other permits secured - TO BE PROVIDED]",
];

const UNIQUE_COMBINATION_FACTORS = [
  {
    title: "Technical + Regulatory",
    description: "Rare combination of metallurgical engineering knowledge and deep regulatory expertise",
  },
  {
    title: "Execution Track Record",
    description: "Has actually secured permits and built infrastructure, not just theorized about it",
  },
  {
    title: "Relationship Capital",
    description: "Established trust with Colorado regulatory agencies through years of transparent engagement",
  },
  {
    title: "Zero-Waste Innovation",
    description: "Developed technology that aligns economic incentives with environmental outcomes",
  },
  {
    title: "Local Knowledge",
    description: "Deep understanding of Colorado's mining districts, their history, and their potential",
  },
];

const PROJECT_TRACK_RECORD = [
  {
    name: "Gladstone Toll Mill",
    status: "Permitted",
    year: "2022",
    detail: "First toll mill permit in 20+ years • $4.0M CapEx",
  },
  {
    name: "Russell Gulch",
    status: "Permitted Reclamation",
    year: "Active",
    detail: "Fastest to revenue • 70K+ tons @ 8 gpt • $1.25M CapEx",
  },
  {
    name: "Crown Mining",
    status: "Lease Secured",
    year: "Development",
    detail: "Largest material volume • 500K+ tons @ 10 gpt • $3.6M CapEx",
  },
  {
    name: "B-Group Properties",
    status: "Under Contract",
    year: "Development",
    detail: "Strategic adjacency to Gladstone • 400K tons @ 6 gpt • $4.5M CapEx",
  },
];

const PROFESSIONAL_AFFILIATIONS = [
  "[Industry Association 1 - TO BE PROVIDED]",
  "[Industry Association 2 - TO BE PROVIDED]",
  "[Board Positions - TO BE PROVIDED]",
];

export default function AndrewFerguson() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-b from-navy to-navy/95">
        <div className="container-narrow px-4 md:px-6">
          <div className="flex flex-col lg:grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Headshot - Top on mobile, Left on desktop */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="w-full max-w-[280px] mx-auto lg:max-w-none lg:mx-0 lg:col-span-2"
            >
              <div className="aspect-[3/4] bg-charcoal/50 border-2 border-gold/30 rounded-lg overflow-hidden">
                {/* Placeholder for professional headshot */}
                <div className="w-full h-full flex items-center justify-center text-white/40">
                  <div className="text-center p-6 md:p-8">
                    <Users className="w-16 md:w-24 h-16 md:h-24 mx-auto mb-3 md:mb-4 opacity-50" />
                    <p className="font-mono text-xs md:text-sm">[Professional Headshot]</p>
                    <p className="font-mono text-xs mt-1 md:mt-2">[TO BE PROVIDED]</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bio - Below on mobile, Right on desktop */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className="lg:col-span-3 text-center lg:text-left"
            >
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-gold mb-2 md:mb-3">
                Andrew Ferguson
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-6 md:mb-8">
                Founder & CEO, MineTeck LLC & Breakthrough Management
              </p>
              <p className="text-base md:text-lg text-white/90 leading-relaxed mb-6 md:mb-8">
                Andrew Ferguson is the founder and CEO of MineTeck LLC, the company that developed 
                the zero-waste gold processing technology that secured Colorado's first toll mill 
                permit in twenty years. His work has focused on solving the regulatory and technical 
                challenges that have kept billions in gold value locked in Colorado's historic 
                mining districts since World War II.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 md:gap-4">
                <Button variant="goldOutline" className="gap-2 w-full sm:w-auto">
                  <Download className="w-4 h-4" />
                  Download Full CV
                </Button>
                <Button variant="ghost" className="text-white/70 hover:text-white gap-2 w-full sm:w-auto">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn Profile
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Expertise Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="container-narrow px-4 md:px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUp} className="mb-8 md:mb-12">
              <div className="flex items-center gap-2 md:gap-3 mb-2">
                <Wrench className="w-5 md:w-6 h-5 md:h-6 text-gold" />
                <h2 className="font-display text-2xl md:text-3xl text-foreground">Technical Expertise</h2>
              </div>
              <p className="text-base md:text-lg text-muted-foreground">Zero-Waste Process Development</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Technical Achievements */}
              <motion.div variants={fadeUp}>
                <h3 className="font-display text-lg md:text-xl text-foreground mb-4 md:mb-6 border-b border-gold/30 pb-2">
                  Technical Achievements
                </h3>
                <ul className="space-y-3 md:space-y-4">
                  {TECHNICAL_ACHIEVEMENTS.map((achievement, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="text-gold mt-1 md:mt-1.5 text-sm">•</span>
                      <span className={`text-sm md:text-base text-foreground/80 ${achievement.includes("TO BE PROVIDED") ? "italic text-muted-foreground" : ""}`}>
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Engineering Background */}
              <motion.div variants={fadeUp}>
                <h3 className="font-display text-lg md:text-xl text-foreground mb-4 md:mb-6 border-b border-gold/30 pb-2">
                  Engineering Background
                </h3>
                <ul className="space-y-3 md:space-y-4">
                  {ENGINEERING_BACKGROUND.map((item, index) => (
                    <li key={index} className="flex gap-2 md:gap-3">
                      <span className="text-gold mt-1 md:mt-1.5 text-sm">•</span>
                      <span className="italic text-muted-foreground text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Permitting Expertise Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-charcoal">
        <div className="container-narrow px-4 md:px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUp} className="mb-8 md:mb-12">
              <div className="flex items-center gap-2 md:gap-3 mb-2">
                <FileCheck className="w-5 md:w-6 h-5 md:h-6 text-gold" />
                <h2 className="font-display text-2xl md:text-3xl text-white">Permitting Expertise</h2>
              </div>
              <p className="text-base md:text-lg text-white/70">Regulatory Navigation & Relationship Building</p>
            </motion.div>

            {/* Key Achievement Box */}
            <motion.div
              variants={fadeUp}
              className="border-2 border-gold bg-navy/50 p-5 md:p-8 rounded-lg mb-8 md:mb-12"
            >
              <h3 className="font-display text-xl md:text-2xl text-gold mb-4 md:mb-6">
                Gladstone Toll Mill Permit (2022)
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {GLADSTONE_ACHIEVEMENTS.map((achievement, index) => (
                  <li key={index} className="flex gap-2 md:gap-3">
                    <Award className="w-4 md:w-5 h-4 md:h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-white/90 text-sm md:text-base">{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Regulatory Experience */}
            <motion.div variants={fadeUp}>
              <h3 className="font-display text-lg md:text-xl text-white mb-4 md:mb-6 border-b border-gold/30 pb-2">
                Regulatory Relationships & Experience
              </h3>
              <ul className="space-y-3 md:space-y-4">
                {REGULATORY_EXPERIENCE.map((item, index) => (
                  <li key={index} className="flex gap-2 md:gap-3">
                    <span className="text-gold mt-1 md:mt-1.5 text-sm">•</span>
                    <span className={`text-sm md:text-base text-white/80 ${item.includes("TO BE PROVIDED") ? "italic text-white/50" : ""}`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Execution Track Record */}
      <section className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="container-narrow px-4 md:px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUp} className="mb-8 md:mb-12">
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-2">
                Project Execution Track Record
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">Completed and Active Projects</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {PROJECT_TRACK_RECORD.map((project, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className={`border rounded-lg p-4 md:p-6 ${
                    project.status === "Permitted" || project.status === "Permitted Reclamation"
                      ? "border-gold/40 bg-gold/5" 
                      : "border-border bg-muted/20"
                  }`}
                >
                  <div className="flex justify-between items-start gap-2 mb-2 md:mb-3">
                    <h3 className="font-display text-base md:text-lg text-foreground">
                      {project.name}
                    </h3>
                    <span className={`font-mono text-xs md:text-sm px-2 py-1 rounded shrink-0 ${
                      project.status === "Permitted" 
                        ? "bg-forest/20 text-forest" 
                        : project.status === "Permitted Reclamation"
                        ? "bg-forest/15 text-forest"
                        : project.status === "Lease Secured"
                        ? "bg-gold/20 text-gold"
                        : "bg-navy/20 text-navy"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="font-mono text-xs md:text-sm text-muted-foreground mb-1 md:mb-2">{project.year}</p>
                  <p className="text-xs md:text-sm text-foreground/80">
                    {project.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Andrew Ferguson? */}
      <section className="py-12 md:py-16 lg:py-20 bg-navy">
        <div className="container-narrow px-4 md:px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUp} className="mb-8 md:mb-12 text-center">
              <h2 className="font-display text-2xl md:text-3xl text-gold mb-4 md:mb-6">
                The Unique Combination
              </h2>
              <p className="text-base md:text-xl text-white/90 max-w-3xl mx-auto px-2">
                "Most people in mining understand either the technical side or the regulatory side. 
                Very few understand both—and almost no one has actually executed at the intersection 
                of the two."
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {UNIQUE_COMBINATION_FACTORS.map((factor, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="bg-white/5 border border-white/10 rounded-lg p-4 md:p-6 hover:border-gold/30 transition-colors"
                >
                  <h3 className="font-display text-base md:text-lg text-gold mb-2 md:mb-3">{factor.title}</h3>
                  <p className="text-white/70 text-xs md:text-sm">{factor.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Contact Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-charcoal border-t border-gold/20">
        <div className="container-narrow px-4 md:px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          >
            {/* Contact */}
            <motion.div variants={fadeUp}>
              <h3 className="font-display text-lg md:text-xl text-gold mb-3 md:mb-4">Contact</h3>
              <div className="space-y-2 md:space-y-3">
                <a 
                  href="mailto:contact@mineteck.com" 
                  className="flex items-center gap-2 text-white/70 hover:text-gold transition-colors text-sm md:text-base"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>[Email - TO BE PROVIDED]</span>
                </a>
                <a 
                  href="#" 
                  className="flex items-center gap-2 text-white/70 hover:text-gold transition-colors text-sm md:text-base"
                >
                  <Linkedin className="w-4 h-4 shrink-0" />
                  <span>[LinkedIn - TO BE PROVIDED]</span>
                </a>
              </div>
            </motion.div>

            {/* Professional Affiliations */}
            <motion.div variants={fadeUp}>
              <h3 className="font-display text-lg md:text-xl text-gold mb-3 md:mb-4">Professional Affiliations</h3>
              <ul className="space-y-1.5 md:space-y-2">
                {PROFESSIONAL_AFFILIATIONS.map((affiliation, index) => (
                  <li key={index} className="text-white/50 italic text-xs md:text-sm">{affiliation}</li>
                ))}
              </ul>
            </motion.div>

            {/* References */}
            <motion.div variants={fadeUp}>
              <h3 className="font-display text-lg md:text-xl text-gold mb-3 md:mb-4">References</h3>
              <p className="text-white/70 text-xs md:text-sm mb-3 md:mb-4">
                Professional and industry references available upon request for qualified investors 
                conducting due diligence.
              </p>
              <Button variant="goldOutline" size="sm" asChild className="w-full sm:w-auto">
                <a href="/access">Request References</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
