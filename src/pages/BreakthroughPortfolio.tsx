import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";
import { HistoricalTimeline } from "@/components/portfolio/HistoricalTimeline";
import { WhatThisIsnt } from "@/components/portfolio/WhatThisIsnt";
import { ThesisSection } from "@/components/portfolio/ThesisSection";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { FergusonQuote } from "@/components/portfolio/FergusonQuote";
import { InvestorCTA } from "@/components/portfolio/InvestorCTA";

export default function BreakthroughPortfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PortfolioHero />
      <HistoricalTimeline />
      
      {/* What This Isn't - Risk-Forward Section */}
      <WhatThisIsnt />
      
      {/* Why Now Section */}
      <section id="why-now" className="scroll-mt-20">
        <ThesisSection />
      </section>
      
      {/* Fund Structure Section */}
      <section id="structure" className="scroll-mt-20">
        <PortfolioGrid />
      </section>
      
      <FergusonQuote />
      <InvestorCTA />
      <Footer />
    </div>
  );
}