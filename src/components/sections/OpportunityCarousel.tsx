import { useState, useEffect, useCallback, useRef } from "react";
import { Sparkles, TrendingUp, Factory, FileCheck, Leaf, Map, ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const CARDS = [
  {
    icon: Sparkles,
    headline: "The New Colorado Gold Renaissance",
    body: "Colorado's next phase of gold production is not driven by new discovery, but by recovery. MineTeck advances gold production through the reactivation of legacy material using recovery models aligned with today's regulatory and environmental priorities.",
    cta: "Explore the Renaissance →",
    href: "/why-invest",
  },
  {
    icon: TrendingUp,
    headline: "Don't Miss The New Gold Rush",
    body: "Price is at an all-time high and not looking backwards. The government is emphasizing the mining of critical metals. Banks are stocking up. How do you get in on this?",
    cta: "See Why Now →",
    href: "/why-invest#convergence",
  },
  {
    icon: Factory,
    headline: "Execution — Not Exploration",
    body: "MineTeck focuses on known material in defined jurisdictions, shortening time-to-production by prioritizing execution over speculative exploration.",
    cta: "View Our Execution Model →",
    href: "/projects",
  },
  {
    icon: FileCheck,
    headline: "Permits, Not Geology",
    body: "In Colorado, gold is well documented. What has been scarce is permitting alignment. MineTeck advances projects designed to operate within existing reclamation and regulatory frameworks.",
    cta: "See How Permits Change the Equation →",
    href: "/technology",
  },
  {
    icon: Leaf,
    headline: "Built for Today's Regulatory Environment",
    body: "Modern regulators prioritize remediation, reclamation, and non-toxic processing. MineTeck's recovery platforms are structured to operate within these evolving priorities rather than oppose them.",
    cta: "Learn About Our Environmental Approach →",
    href: "/services",
  },
  {
    icon: Map,
    headline: "An Investable Recovery Platform — Not a One-Off Project",
    body: "MineTeck advances a portfolio-driven approach, applying a repeatable recovery strategy across multiple sites with defined material and permitting context.",
    cta: "Evaluate the Portfolio →",
    href: "/why-invest",
  },
];

const INTERVAL = 8000;
const RESUME_DELAY = 3000;
const TRANSITION_MS = 500;

export function OpportunityCarousel() {
  const isMobile = useIsMobile();
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("left");
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStart = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback(
    (idx: number, dir?: "left" | "right") => {
      if (idx === active) return;
      setDirection(dir ?? (idx > active ? "left" : "right"));
      setTransitioning(true);
      setTimeout(() => {
        setActive(idx);
        setProgress(0);
        setTransitioning(false);
      }, TRANSITION_MS / 2);
    },
    [active],
  );

  const next = useCallback(() => goTo((active + 1) % CARDS.length, "left"), [active, goTo]);
  const prev = useCallback(() => goTo((active - 1 + CARDS.length) % CARDS.length, "right"), [active, goTo]);

  // Auto-advance + progress bar
  useEffect(() => {
    if (paused) return;
    const tick = 50;
    const id = setInterval(() => {
      setProgress((p) => {
        const next = p + (tick / INTERVAL) * 100;
        if (next >= 100) {
          setActive((a) => {
            const n = (a + 1) % CARDS.length;
            setDirection("left");
            setTransitioning(true);
            setTimeout(() => setTransitioning(false), TRANSITION_MS / 2);
            return n;
          });
          return 0;
        }
        return next;
      });
    }, tick);
    return () => clearInterval(id);
  }, [paused]);

  const pauseTemporarily = useCallback(() => {
    setPaused(true);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setPaused(false), RESUME_DELAY);
  }, []);

  // Keyboard
  const handleKey = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") { e.preventDefault(); prev(); pauseTemporarily(); }
      if (e.key === "ArrowRight") { e.preventDefault(); next(); pauseTemporarily(); }
    },
    [prev, next, pauseTemporarily],
  );

  // Touch swipe
  const onTouchStart = (e: React.TouchEvent) => { touchStart.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
      pauseTemporarily();
    }
    touchStart.current = null;
  };

  const card = CARDS[active];
  const Icon = card.icon;

  return (
    <div
      ref={containerRef}
      className="w-full max-w-[800px] md:max-w-[800px] sm:max-w-[640px] mx-auto my-8"
      style={{ margin: "32px auto" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => { setPaused(false); setProgress((p) => p); }}
      onFocus={pauseTemporarily}
      onKeyDown={handleKey}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      tabIndex={0}
      role="region"
      aria-label="Investment opportunity highlights"
      aria-roledescription="carousel"
    >
      <div
        className="relative rounded-xl px-5 py-6 md:px-10 md:py-9 overflow-hidden"
        style={{
          background: "rgba(15, 23, 42, 0.75)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          border: "1px solid rgba(197, 165, 114, 0.25)",
        }}
      >
        {/* Card content */}
        <div
          role="tabpanel"
          aria-label={`Card ${active + 1} of ${CARDS.length}: ${card.headline}`}
          className="transition-all duration-500 ease-in-out"
          style={{
            opacity: transitioning ? 0 : 1,
            transform: transitioning
              ? `translateX(${direction === "left" ? "-20px" : "20px"})`
              : "translateX(0)",
          }}
        >
          <Icon size={36} className="text-[#C5A572] mb-4" aria-hidden="true" />
          <h3 className="text-white text-lg md:text-[1.3rem] font-bold leading-tight">
            {card.headline}
          </h3>
          <p className="text-[#D1D5DB] text-sm md:text-[0.95rem] leading-relaxed mt-3">
            {card.body}
          </p>
          <a
            href={card.href}
            className="inline-block mt-5 text-[#C5A572] text-sm md:text-[0.9rem] font-semibold hover:underline"
          >
            {card.cta}
          </a>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2.5 mt-6" role="tablist">
          {CARDS.map((c, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              aria-label={`Go to card ${i + 1}: ${c.headline}`}
              onClick={() => { goTo(i); pauseTemporarily(); }}
              className="rounded-full transition-colors duration-300"
              style={{
                width: 10,
                height: 10,
                background: i === active ? "#C5A572" : "rgba(255,255,255,0.3)",
              }}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-transparent">
          <div
            className="h-full transition-none"
            style={{
              width: `${progress}%`,
              background: "#C5A572",
            }}
          />
        </div>

        {/* Desktop arrows */}
        {!isMobile && (
          <>
            <button
              onClick={() => { prev(); pauseTemporarily(); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1 transition-colors"
              style={{ color: "rgba(255,255,255,0.4)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
              aria-label="Previous card"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => { next(); pauseTemporarily(); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1 transition-colors"
              style={{ color: "rgba(255,255,255,0.4)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
              aria-label="Next card"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
