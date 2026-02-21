import { motion } from "framer-motion";
import { Download, Linkedin, Mail, Award, FileCheck, Wrench, Users, Quote } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const TECHNICAL_ACHIEVEMENTS = [
"Perfected gravity concentration as a mining beneficiation technology",
"Achieved the lowest installed and operating costs in the industry",
"Operates entirely without chemicals or reagents — near-zero ecological footprint",
"Designed modular recovery units (MRUs) for rapid deployment",
"Processed material demonstrated zero waste and zero toxicity for a projected 1,000 years"];


const TESTING_PROTOCOLS = [
"Toxic Characteristic Leaching Procedure (TCLP)",
"Synthetic Precipitation Leaching Procedure (SPLP)",
"Acid-Base Accounting (ABA) tests"];


const GLADSTONE_ACHIEVEMENTS = [
"First fully permitted toll mill in Colorado in over 20 years",
"First EVER toll mill permitted on a major Colorado waterway",
"Years of rigorous engagement with DRMS, EPA, and environmental stakeholders",
"Established regulatory precedent for reclamation-focused operations"];


const UNIQUE_COMBINATION_FACTORS = [
{
  title: "Technology Visionary",
  description:
  "Perfected gravity concentration to achieve the lowest cost, zero-chemical mineral processing in the industry"
},
{
  title: "Regulatory Pioneer",
  description:
  "Secured permits that hadn't been granted in 20+ years through relentless environmental accountability"
},
{
  title: "Environmental Champion",
  description: "Proved zero waste and zero toxicity for 1,000 years using testing protocols rarely seen in mining"
},
{
  title: "Relationship Capital",
  description:
  "Earned the respect of regulatory bodies and special interest groups through dedication to environmental responsibility"
},
{
  title: "Restorative Vision",
  description:
  "Building the world's most eco-friendly milling solution — one that actively reverses existing environmental hazards"
}];


const PROJECT_TRACK_RECORD = [
{
  name: "Gladstone Toll Mill",
  status: "Permitted",
  year: "2022",
  detail: "First toll mill permit in 20+ years • Co-Owner • $4.0M CapEx"
},
{
  name: "Russell Gulch",
  status: "Permitted Reclamation",
  year: "Active",
  detail: "Fastest to revenue • 70K+ tons @ 8 gpt • $1.25M CapEx"
},
{
  name: "Crown Mining",
  status: "Lease Secured",
  year: "Development",
  detail: "Largest material volume • 500K+ tons @ 10 gpt • $3.6M CapEx"
},
{
  name: "B-Group Properties",
  status: "Under Contract",
  year: "Development",
  detail: "Strategic adjacency to Gladstone • 400K tons @ 6 gpt • $4.5M CapEx"
}];


export default function JayLesser() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section — Featured Treatment */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-b from-navy to-navy/95">
        <div className="container-narrow px-4 md:px-6">
          <div className="flex flex-col lg:grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Headshot */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="w-full max-w-[280px] mx-auto lg:max-w-none lg:mx-0 lg:col-span-2">

              <div className="aspect-[3/4] bg-charcoal/50 border-2 border-gold/30 rounded-lg overflow-hidden">
                {/* DEV NOTE: Add professional headshot when available. Recommended: 400x500px minimum, neutral background. */}
                <div className="w-full h-full flex items-center justify-center text-white/40">
                  <div className="text-center p-6 md:p-8">
                    <Users className="w-16 md:w-24 h-16 md:h-24 mx-auto mb-3 md:mb-4 opacity-50" />
                    <p className="font-mono text-xs md:text-sm">[Professional Photo TBD]</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className="lg:col-span-3 text-center lg:text-left">

              <p className="text-sm font-medium text-gold uppercase tracking-wider mb-2">
                Founder/Partner of Mineteck LLC & Technology Creator
              </p>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-2 md:mb-3">
                Harold "Jay" Lesser
              </h1>
              <p className="text-base md:text-lg text-white/60 mb-6 md:mb-8">
                Founder/Partner of MineTeck LLC;Founder/Architect of the Gladstone Toll Mill
              </p>
              <p className="text-base md:text-lg text-white/90 leading-relaxed mb-6 md:mb-8">
                Harold M. Lesser II — known as Jay — is a visionary entrepreneur whose pioneering work in gravity
                concentration technology is revolutionizing the mining industry's approach to sustainability and
                cost-efficiency.
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

      {/* Extended Bio Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="container-narrow px-4 md:px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto">

            <motion.div variants={fadeUp} className="prose prose-lg max-w-none">
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-6">
                Harold (Jay) Lesser is a highly knowledgeable professional with over three decades of experience in the
                geotechnical construction and mining industry. He excels in conducting field investigations and
                contributing to the development of large-scale projects. Mr. Lesser’s expertise encompasses geotechnical
                construction, limited access repair, restoration, pressure grouting, and particle size analysis. He has
                worked on a wide range of projects, including commercial, residential, and infrastructure undertakings.
              </p>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-6">
                As the Co-Founder of Salisbury Gladstone Toll Mill since March 2020, Mr. Lesser has been instrumental in
                designing and establishing protocols for the Gladstone Permit and Toll Mill. His responsibilities
                include developing a self-contained hard rock milling circuit, analyzing gravity separation techniques,
                and implementing water filtration and circulation systems. He has also conducted ore deposit
                exploration, geochemical mapping, and developed testing and toxicity protocols.
              </p>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-6">
                Since 1995, Mr. Lesser has served as the CEO of Alpine Companies LLC. Over the course of his 26-year
                tenure, he has undertaken extensive research and development in particle size analysis, sub-soil
                compaction grouting, and mixture design for low and high viscosity applications. Mr. Lesser has
                successfully completed over 34,000 residential and commercial projects, totaling 180,000 cubic yards of
                materials. His portfolio includes high-profile projects such as Union Station, DIA Airport, E-470
                Expansion, and Martin Marietta Aerospace.
              </p>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                Mr. Lesser holds various licenses and certifications, including a Class-A Commercial &amp; Residential
                License, safety and security certifications for classified projects, a CDOT Certification for
                Infrastructure Projects, and a Colorado Real Estate Broker&#39;s License. His skills extend to the
                fabrication of air and hydraulic rock drilling equipment for concrete and hard rock applications.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pullquote */}
      <section className="py-12 md:py-16 bg-navy/5 border-y border-gold/20">
        <div className="container-narrow px-4 md:px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto">

            <blockquote className="border-l-4 border-gold pl-6 md:pl-8">
              <Quote className="w-8 h-8 text-gold/40 mb-4" />
              <p className="font-display text-xl md:text-2xl text-foreground italic leading-relaxed">
                "Jay earned the respect of regulatory bodies and special interest groups through his dedication to
                environmental responsibility — reconstructing the way the industry thinks about tailings long after the
                work has been completed."
              </p>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Technical Expertise Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="container-narrow px-4 md:px-6">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} className="mb-8 md:mb-12">
              <div className="flex items-center gap-2 md:gap-3 mb-2">
                <Wrench className="w-5 md:w-6 h-5 md:h-6 text-gold" />
                <h2 className="font-display text-2xl md:text-3xl text-foreground">Technical Expertise</h2>
              </div>
              <p className="text-base md:text-lg text-muted-foreground">
                Gravity Concentration & Zero-Waste Process Development
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Technical Achievements */}
              <motion.div variants={fadeUp}>
                <h3 className="font-display text-lg md:text-xl text-foreground mb-4 md:mb-6 border-b border-gold/30 pb-2">
                  Key Achievements
                </h3>
                <ul className="space-y-3 md:space-y-4">
                  {TECHNICAL_ACHIEVEMENTS.map((achievement, index) =>
                  <li key={index} className="flex gap-3">
                      <span className="text-gold mt-1 md:mt-1.5 text-sm">•</span>
                      <span className="text-sm md:text-base text-foreground/80">{achievement}</span>
                    </li>
                  )}
                </ul>
              </motion.div>

              {/* Testing Protocols */}
              <motion.div variants={fadeUp}>
                <h3 className="font-display text-lg md:text-xl text-foreground mb-4 md:mb-6 border-b border-gold/30 pb-2">
                  Environmental Testing Protocols
                </h3>
                <ul className="space-y-3 md:space-y-4">
                  {TESTING_PROTOCOLS.map((item, index) =>
                  <li key={index} className="flex gap-2 md:gap-3">
                      <Award className="w-4 md:w-5 h-4 md:h-5 text-gold shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base text-foreground/80">{item}</span>
                    </li>
                  )}
                </ul>
                <p className="text-sm text-muted-foreground mt-4 italic">
                  Results: Zero waste and zero toxicity projected for 1,000 years
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Permitting Expertise Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-charcoal">
        <div className="container-narrow px-4 md:px-6">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} className="mb-8 md:mb-12">
              <div className="flex items-center gap-2 md:gap-3 mb-2">
                <FileCheck className="w-5 md:w-6 h-5 md:h-6 text-gold" />
                <h2 className="font-display text-2xl md:text-3xl text-white">Permitting Expertise</h2>
              </div>
              <p className="text-base md:text-lg text-white/70">Regulatory Navigation & Environmental Accountability</p>
            </motion.div>

            {/* Key Achievement Box */}
            <motion.div
              variants={fadeUp}
              className="border-2 border-gold bg-navy/50 p-5 md:p-8 rounded-lg mb-8 md:mb-12">

              <h3 className="font-display text-xl md:text-2xl text-gold mb-4 md:mb-6">
                Gladstone Toll Mill — Idaho Springs, Colorado
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {GLADSTONE_ACHIEVEMENTS.map((achievement, index) =>
                <li key={index} className="flex gap-2 md:gap-3">
                    <Award className="w-4 md:w-5 h-4 md:h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-white/90 text-sm md:text-base">{achievement}</span>
                  </li>
                )}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Execution Track Record */}
      <section className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="container-narrow px-4 md:px-6">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} className="mb-8 md:mb-12">
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-2">Project Execution Track Record</h2>
              <p className="text-base md:text-lg text-muted-foreground">Completed and Active Projects</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {PROJECT_TRACK_RECORD.map((project, index) =>
              <motion.div
                key={index}
                variants={fadeUp}
                className={`border rounded-lg p-4 md:p-6 ${project.status === "Permitted" || project.status === "Permitted Reclamation" ? "border-gold/40 bg-gold/5" : "border-border bg-muted/20"}`}>

                  <div className="flex justify-between items-start gap-2 mb-2 md:mb-3">
                    <h3 className="font-display text-base md:text-lg text-foreground">{project.name}</h3>
                    <span
                    className={`font-mono text-xs md:text-sm px-2 py-1 rounded shrink-0 ${
                    project.status === "Permitted" ?
                    "bg-forest/20 text-forest" :
                    project.status === "Permitted Reclamation" ?
                    "bg-forest/15 text-forest" :
                    project.status === "Lease Secured" ?
                    "bg-gold/20 text-gold" :
                    "bg-navy/20 text-navy"}`
                    }>

                      {project.status}
                    </span>
                  </div>
                  <p className="font-mono text-xs md:text-sm text-muted-foreground mb-1 md:mb-2">{project.year}</p>
                  
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Unique Combination */}
      <section className="py-12 md:py-16 lg:py-20 bg-navy">
        <div className="container-narrow px-4 md:px-6">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} className="mb-8 md:mb-12 text-center">
              <h2 className="font-display text-2xl md:text-3xl text-gold mb-4 md:mb-6">Why Jay Lesser</h2>
              <p className="text-base md:text-xl text-white/90 max-w-3xl mx-auto px-2">
                A rare intersection of technical innovation, environmental accountability, and regulatory expertise that
                no one else in the industry has demonstrated.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {UNIQUE_COMBINATION_FACTORS.map((factor, index) =>
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-white/5 border border-white/10 rounded-lg p-4 md:p-6 hover:border-gold/30 transition-colors">

                  <h3 className="font-display text-base md:text-lg text-gold mb-2 md:mb-3">{factor.title}</h3>
                  <p className="text-white/70 text-xs md:text-sm">{factor.description}</p>
                </motion.div>
              )}
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
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

            {/* Contact */}
            <motion.div variants={fadeUp}>
              <h3 className="font-display text-lg md:text-xl text-gold mb-3 md:mb-4">Contact</h3>
              <div className="space-y-2 md:space-y-3">
                <a
                  href="mailto:contact@mineteck.com"
                  className="flex items-center gap-2 text-white/70 hover:text-gold transition-colors text-sm md:text-base">

                  <Mail className="w-4 h-4 shrink-0" />
                  <span>info@mineteck.com</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-white/70 hover:text-gold transition-colors text-sm md:text-base">

                  
                  
                </a>
              </div>
            </motion.div>

            {/* References */}
            <motion.div variants={fadeUp}>
              <h3 className="font-display text-lg md:text-xl text-gold mb-3 md:mb-4">References</h3>
              <p className="text-white/70 text-xs md:text-sm mb-3 md:mb-4">
                Professional and industry references available upon request for qualified investors conducting due
                diligence.
              </p>
              <Button variant="goldOutline" size="sm" asChild className="w-full sm:w-auto">
                <a href="/access">Request References</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>);

}