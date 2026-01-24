import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { OpportunityCards } from "@/components/sections/OpportunityCards";
import { ProofBar } from "@/components/sections/ProofBar";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { InfraVsExploration } from "@/components/sections/InfraVsExploration";
import { OpportunityGrid } from "@/components/sections/OpportunityGrid";
import { TechTeaser } from "@/components/sections/TechTeaser";
import { FinalCTA } from "@/components/sections/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Opportunity Cards - directly below hero */}
        <OpportunityCards />

        {/* Proof Section */}
        <section id="proof" className="scroll-mt-20">
          <ProofBar />
        </section>

        {/* Thesis/Comparison Section */}
        <section id="thesis" className="scroll-mt-20">
          <ComparisonTable />
        </section>

        {/* Opportunity Section */}
        <section id="opportunity" className="scroll-mt-20">
          <InfraVsExploration />
          <OpportunityGrid />
        </section>

        {/* Technology Section */}
        <section id="technology" className="scroll-mt-20">
          <TechTeaser />
        </section>

        {/* Risks Section */}
        <section id="risks" className="scroll-mt-20">
          {/* Risk content is embedded in InfraVsExploration - adding explicit section */}
        </section>

        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
