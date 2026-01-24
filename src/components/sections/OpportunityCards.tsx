import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const OPPORTUNITY_CARDS = [
  {
    id: 1,
    title: "Why This Gold Rush Sat Dormant for 80 Years",
    description:
      "Thousands of tons of gold-bearing material sat untouched across Colorado—not because it wasn't valuable, but because the economics didn't work. Until now.",
    quote:
      "The gold was always there. What changed was the technology to recover it profitably.",
  },
  {
    id: 2,
    title: "The Technology That Unlocked $200M in Gold",
    description:
      "Our proprietary recovery process achieves 95%+ extraction rates from material that traditional methods couldn't touch—with zero toxic discharge.",
    quote:
      "We don't mine. We recover. And that distinction changes everything about the risk profile.",
  },
  {
    id: 3,
    title: "Permits That Took 20 Years — Now Approved in 18 Months",
    description:
      "MineTeck secured the first new toll mill permit in Colorado in two decades. Our EPA-certified process accelerated what typically takes 7-15 years.",
    quote:
      "When regulators see zero-waste, they see zero liability. That's why our permits moved fast.",
  },
  {
    id: 4,
    title: "Infrastructure First — $4M Not $400M",
    description:
      "We don't build mines. We build processing facilities for material that's already above ground, already contracted, and already permitted.",
    quote:
      "Traditional mining is a geological bet. We're an infrastructure play with contracted supply.",
  },
  {
    id: 5,
    title: "12-24 Months to Revenue — Not 7-15 Years",
    description:
      "Our first facility is operational in 2025. Revenue generation begins immediately upon commissioning—not after a decade of exploration.",
    quote:
      "Most mining investments require patience measured in decades. Ours requires patience measured in quarters.",
  },
  {
    id: 6,
    title: "Who Can Participate — Accredited Investors Only",
    description:
      "This opportunity is available exclusively to accredited investors who meet SEC requirements. Full documentation available upon verification.",
    quote:
      "We're selective about our partners because we're building something that requires aligned long-term thinking.",
  },
];

export function OpportunityCards() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OPPORTUNITY_CARDS.map((card) => (
            <article
              key={card.id}
              className="group flex flex-col bg-card border border-border rounded-lg overflow-hidden shadow-sm transition-all duration-300 ease-out hover:-translate-y-3 hover:shadow-xl"
              style={{ minHeight: "580px" }}
            >
              {/* Image Placeholder */}
              <div className="relative h-48 bg-muted overflow-hidden">
                <div
                  className="absolute inset-0 bg-navy/20 flex items-center justify-center transition-transform duration-300 ease-out group-hover:scale-105"
                  aria-hidden="true"
                >
                  <span className="text-muted-foreground/50 font-body text-sm">
                    Image Placeholder
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                {/* Title */}
                <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground mb-3 leading-tight">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                  {card.description}
                </p>

                {/* Ferguson Quote Box */}
                <div
                  className="border-l-[3px] border-gold pl-4 py-3 mb-6"
                  style={{ backgroundColor: "#FFF8E7" }}
                >
                  <p className="font-display text-sm italic text-charcoal/80 leading-relaxed">
                    "{card.quote}"
                  </p>
                </div>

                {/* CTA Button */}
                <Link to="/access" className="mt-auto">
                  <Button
                    variant="default"
                    className="w-full bg-gold hover:bg-gold/90 text-charcoal font-body font-semibold"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
