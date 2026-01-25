import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function InvestorCTA() {
  return (
    <section className="py-20 bg-navy">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-playfair text-3xl md:text-4xl text-white mb-6">
          View Terms & Investment Documents
        </h2>
        <p className="max-w-2xl mx-auto text-white/80 font-inter mb-4 leading-relaxed">
          Access detailed economics, capital requirements, and execution milestones. 
          The data room includes project-level financials, technical specifications, and legal documentation.
        </p>
        <p className="text-white/60 font-inter mb-8 text-sm">
          Available to accredited investors only. Verification required under SEC Reg D 506(c).
        </p>
        <Button asChild variant="gold" size="xl">
          <Link to="/access">Submit Investor Inquiry</Link>
        </Button>
      </div>
    </section>
  );
}