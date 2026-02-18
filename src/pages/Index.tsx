import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Audiogram } from "@/components/sections/Audiogram";
import { RenaissanceTimeline } from "@/components/sections/RenaissanceTimeline";
import { EightyYearSilence } from "@/components/sections/EightyYearSilence";
import { ConvergenceSection } from "@/components/sections/ConvergenceSection";
import { InfrastructureComparison } from "@/components/sections/InfrastructureComparison";
import { OpportunityCards } from "@/components/sections/OpportunityCards";
import { ProofBar } from "@/components/sections/ProofBar";
import { TechnologySection } from "@/components/sections/TechnologySection";
import { FinalCTA } from "@/components/sections/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Audiogram Section */}
        <section id="vsl">
          <Audiogram />
        </section>

        {/* Visual Timeline - The Renaissance Story */}
        <section id="breakthrough">
          <RenaissanceTimeline variant="compact" />
        </section>

        {/* The Eighty-Year Silence Section */}
        <section id="silence" className="scroll-mt-20">
          <EightyYearSilence />
        </section>

        {/* The Convergence Section */}
        <section id="convergence" className="scroll-mt-20">
          <ConvergenceSection />
        </section>

        {/* Infrastructure vs Traditional Mining Comparison */}
        <section id="infrastructure" className="scroll-mt-20">
          <InfrastructureComparison />
        </section>

        {/* Opportunity Cards */}
        <OpportunityCards />

        {/* Proof Section */}
        <section id="proof" className="scroll-mt-20">
          <ProofBar />
        </section>

        {/* Technology Section */}
        <TechnologySection />

        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
