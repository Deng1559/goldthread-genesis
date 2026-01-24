import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProofBar } from "@/components/sections/ProofBar";
import { InfraVsExploration } from "@/components/sections/InfraVsExploration";
import { OpportunityGrid } from "@/components/sections/OpportunityGrid";
import { TechTeaser } from "@/components/sections/TechTeaser";
import { FinalCTA } from "@/components/sections/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <Hero />
        <ProofBar />
        <InfraVsExploration />
        <OpportunityGrid />
        <TechTeaser />
        <div id="risks" className="scroll-mt-20">
          {/* Risks section is included in InfraVsExploration */}
        </div>
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
