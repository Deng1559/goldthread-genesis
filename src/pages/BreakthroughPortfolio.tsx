import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";
import { HistoricalTimeline } from "@/components/portfolio/HistoricalTimeline";
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
      <ThesisSection />
      <PortfolioGrid />
      <FergusonQuote />
      <InvestorCTA />
      <Footer />
    </div>
  );
}