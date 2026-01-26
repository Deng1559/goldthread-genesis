import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { ClipboardList, Droplets, Leaf, Microscope, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    id: "pre-mining",
    title: "Pre-Mining Consultation",
    icon: ClipboardList,
    description: "Launch your operation with environmental compliance built in. We develop zero-waste gravity circuits, custom flowsheets, and comminution designs that eliminate toxic chemicals while maximizing recovery rates.",
    services: [
      "Mineral Viability Analysis",
      "Zero Waste Circuit Design",
      "Flowsheet Development",
      "Permitting & Protocol Consulting",
    ],
    cta: "Schedule Consultation",
    ctaHref: "/access",
  },
  {
    id: "clean-water",
    title: "Clean Water Solutions",
    icon: Droplets,
    description: "Protect water resources with closed-loop systems. Our Zero Liquid Discharge (ZLD) technology eliminates wastewater, reduces freshwater consumption, and ensures compliance with the strictest environmental regulations.",
    services: [
      "Zero Liquid Discharge (ZLD)",
      "Multi-Phase Filtration",
      "Sedimentation Systems",
      "Concentration Technology",
    ],
    cta: "Schedule Consultation",
    ctaHref: "/access",
  },
  {
    id: "remediation",
    title: "Environmental Remediation",
    icon: Leaf,
    description: "Transform legacy liabilities into environmental assets. We remediate contaminated water, reclaim tailing ponds, and eliminate toxicity issues using proven technologies that restore environmental quality while often recovering additional minerals.",
    services: [
      "Water Re-Circulation Systems",
      "Closed Circuit Filtration",
      "Tailing Pond Reclamation",
      "Toxicity Solutions",
    ],
    cta: "Start Remediation",
    ctaHref: "/access",
  },
  {
    id: "laboratory",
    title: "Analysis & Laboratory",
    icon: Microscope,
    description: "Make informed decisions with precise analytical data. Our XRF technology and comprehensive laboratory testing provide rapid results for resource estimation, process optimization, and environmental compliance.",
    services: [
      "XRF Sample Analysis",
      "Laboratory Testing",
      "Toxicity Assessment",
      "Resource Estimation",
      "Recovery Optimization",
    ],
    cta: "Schedule Consultation",
    ctaHref: "/access",
  },
];

const Services = () => {
  const prefersReducedMotion = useReducedMotion();
  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-50px" },
      };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-navy pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy via-navy to-charcoal/20" />
          <div className="container-wide relative z-10">
            <motion.div
              {...motionProps}
              variants={staggerContainer}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.h1
                variants={fadeUp}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
              >
                Eco-Friendly Mining{" "}
                <span className="text-gold">Solutions</span>
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="font-display text-xl md:text-2xl text-gold/80 tracking-wide mb-6"
              >
                Design · Develop · Deploy
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="font-inter text-lg text-white/80 leading-relaxed mb-8"
              >
                MineTeck analyzes and designs customized flowsheets to safely and 
                responsibly recover precious metals without toxic chemicals or 
                environmental harm. Our zero-waste approach combines proven gravity 
                separation technology with advanced water management systems, 
                delivering regulatory compliance and operational efficiency from day one.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link to="/access">
                  <Button
                    variant="gold"
                    size="lg"
                    className="font-inter font-semibold hover:shadow-lg hover:shadow-gold/25 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Service Cards */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container-wide">
            <motion.div
              {...motionProps}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
            >
              {SERVICES.map((service) => {
                const IconComponent = service.icon;
                return (
                  <motion.div key={service.id} variants={staggerItem}>
                    <Card className="h-full bg-card border-border hover:border-gold/30 transition-colors duration-300 group">
                      <CardHeader className="pb-4">
                        <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                          <IconComponent className="w-7 h-7 text-gold" />
                        </div>
                        <CardTitle className="font-display text-xl md:text-2xl text-foreground">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="font-inter text-muted-foreground leading-relaxed">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pb-4">
                        <ul className="space-y-2">
                          {service.services.map((item) => (
                            <li
                              key={item}
                              className="flex items-center gap-2 font-inter text-sm text-foreground/80"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Link to={service.ctaHref} className="w-full">
                          <Button
                            variant="outline"
                            className="w-full border-gold/50 text-gold hover:bg-gold hover:text-navy font-inter font-medium transition-all duration-200"
                          >
                            {service.cta}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="py-16 md:py-24 bg-navy">
          <div className="container-wide">
            <motion.div
              {...motionProps}
              variants={staggerContainer}
              className="max-w-2xl mx-auto text-center"
            >
              <motion.h2
                variants={fadeUp}
                className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6"
              >
                Ready to Design Your{" "}
                <span className="text-gold">Zero-Waste Operation?</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="font-inter text-lg text-white/80 leading-relaxed mb-8"
              >
                Our team will analyze your specific requirements and develop a 
                customized solution that meets environmental standards while 
                optimizing your recovery rates and operational efficiency.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link to="/access">
                  <Button
                    variant="gold"
                    size="lg"
                    className="font-inter font-semibold hover:shadow-lg hover:shadow-gold/25 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
