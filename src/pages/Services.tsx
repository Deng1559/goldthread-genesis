import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { 
  ClipboardList, 
  Droplets, 
  Leaf, 
  FlaskConical, 
  ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    id: "pre-mining",
    title: "Pre Mining Operation Consultation",
    icon: ClipboardList,
    services: [
      "Zero Waste Gravity Circuit Designs",
      "Mineral Viability Analysis",
      "Flowsheet Development",
      "Comminution Circuit Development",
      "Fraction Screening Analysis",
      "Permitting and Protocol Consulting",
    ],
  },
  {
    id: "clean-water",
    title: "Clean Water Solutions",
    icon: Droplets,
    services: [
      "Zero Liquid Discharge (ZLD)",
      "Multi Phase Filtration",
      "Sedimentation",
      "Concentration",
    ],
  },
  {
    id: "remediation",
    title: "Environmental Remediation",
    icon: Leaf,
    services: [
      "Clean Water Re-Circulation Systems",
      "Closed Circuit Filtration Development",
      "Tailing Pond and Dam Reclamation",
      "Toxicity Solutions",
    ],
  },
  {
    id: "analysis",
    title: "Analysis",
    icon: FlaskConical,
    services: [
      "XRF Sample Analysis",
      "Laboratory",
      "Toxicity Levels",
      "Resource Estimation",
      "Recovery Optimization",
    ],
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
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gold mb-4"
              >
                Customized Mining Solutions
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="font-display text-xl md:text-2xl text-white/90 tracking-wide mb-6"
              >
                Design · Develop · Deploy
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="font-inter text-lg text-white/80 leading-relaxed mb-8"
              >
                MineTeck will analyze and design a customized flowsheet, to safely, 
                responsibly recover your precious metals without toxic chemicals or 
                harm to the environment.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link to="/access#services">
                  <Button
                    variant="gold"
                    size="lg"
                    className="font-inter font-semibold hover:shadow-lg hover:shadow-gold/25 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Request Services
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
                  <motion.div 
                    key={service.id} 
                    id={service.id}
                    variants={staggerItem}
                    className="scroll-mt-24"
                  >
                    <Card className="h-full bg-card border-border hover:border-gold/30 transition-colors duration-300 group">
                      <CardContent className="p-8">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                            <IconComponent className="w-7 h-7 text-gold" />
                          </div>
                          <h2 className="font-display text-xl md:text-2xl font-bold text-foreground pt-2">
                            {service.title}
                          </h2>
                        </div>
                        
                        <ul className="space-y-3 mb-8">
                          {service.services.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 font-inter text-foreground/80"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>

                        <Link to="/access#services">
                          <Button
                            variant="outline"
                            className="border-gold/50 text-gold hover:bg-gold hover:text-navy font-inter font-medium transition-all duration-200 group/btn"
                          >
                            Request Services
                            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </CardContent>
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
                <Link to="/access#services">
                  <Button
                    variant="gold"
                    size="lg"
                    className="font-inter font-semibold hover:shadow-lg hover:shadow-gold/25 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Request Services
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
