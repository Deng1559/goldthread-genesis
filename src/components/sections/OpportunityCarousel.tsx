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
    accent: "from-amber-500/20 to-yellow-600/10",
  },
  {
    icon: TrendingUp,
    headline: "Don't Miss The New Gold Rush",
    body: "Price is at an all-time high and not looking backwards. The government is emphasizing the mining of critical metals. Banks are stocking up. How do you get in on this?",
    cta: "See Why Now →",
    href: "/why-invest#convergence",
    accent: "from-emerald-500/20 to-teal-600/10",
  },
  {
    icon: Factory,
    headline: "Execution — Not Exploration",
    body: "MineTeck focuses on known material in defined jurisdictions, shortening time-to-production by prioritizing execution over speculative exploration.",
    cta: "View Our Execution Model →",
    href: "/projects",
    accent: "from-blue-500/20 to-indigo-600/10",
  },
  {
    icon: FileCheck,
    headline: "Permits, Not Geology",
    body: "In Colorado, gold is well documented. What has been scarce is permitting alignment. MineTeck advances projects designed to operate within existing reclamation and regulatory frameworks.",
    cta: "See How Permits Change the Equation →",
    href: "/technology",
    accent: "from-violet-500/20 to-purple-600/10",
  },
  {
    icon: Leaf,
    headline: "Built for Today's Regulatory Environment",
    body: "Modern regulators prioritize remediation, reclamation, and non-toxic processing. MineTeck's recovery platforms are structured to operate within these evolving priorities rather than oppose them.",
    cta: "Learn About Our Environmental Approach →",
    href: "/services",
    accent: "from-green-500/20 to-emerald-600/10",
  },
  {
    icon: Map,
    headline: "An Investable Recovery Platform — Not a One-Off Project",
    body: "MineTeck advances a portfolio-driven approach, applying a repeatable recovery strategy across multiple sites with defined material and permitting context.",
    cta: "Evaluate the Portfolio →",
    href: "/why-invest",
    accent: "from-orange-500/20 to-amber-600/10",
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

  const handleKey = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") { e.preventDefault(); prev(); pauseTemporarily(); }
      if (e.key === "ArrowRight") { e.preventDefault(); next(); pauseTemporarily(); }
    },
    [prev, next, pauseTemporarily],
  );

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
      className="w-full max-w-[800px] md:max-w-[800px] sm:max-w-[640px] mx-auto"
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
        className="relative rounded-2xl overflow-hidden group"
        style={{
          background: "rgba(15, 23, 42, 0.8)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(197, 165, 114, 0.3)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
        }}
      >
        {/* Animated accent gradient background per card */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${card.accent} transition-all duration-700 ease-in-out`}
          aria-hidden="true"
        />

        {/* Subtle decorative corner glow */}
        <div
          className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-30 blur-3xl transition-all duration-700"
          style={{ background: "radial-gradient(circle, #C5A572, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="relative px-6 py-7 md:px-12 md:py-10">
          {/* Card number badge */}
          <div className="absolute top-4 right-4 md:top-6 md:right-8">
            <span
              className="font-mono text-xs tracking-widest uppercase"
              style={{ color: "rgba(197, 165, 114, 0.5)" }}
            >
              {String(active + 1).padStart(2, "0")} / {String(CARDS.length).padStart(2, "0")}
            </span>
          </div>

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
            {/* Icon with glow ring */}
            <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl mb-5"
              style={{
                background: "rgba(197, 165, 114, 0.12)",
                border: "1px solid rgba(197, 165, 114, 0.2)",
                boxShadow: "0 0 20px rgba(197, 165, 114, 0.1)",
              }}
            >
              <Icon size={isMobile ? 28 : 32} className="text-[#C5A572]" aria-hidden="true" />
            </div>

            <h3 className="font-display text-xl md:text-2xl font-bold text-white leading-tight tracking-tight">
              {card.headline}
            </h3>

            <p className="text-white/70 text-sm md:text-base leading-relaxed mt-3 max-w-2xl">
              {card.body}
            </p>

            <a
              href={card.href}
              className="inline-flex items-center gap-2 mt-6 text-[#C5A572] text-sm md:text-[0.9rem] font-semibold
                         transition-all duration-300 hover:gap-3 hover:text-[#d4b882] group/cta"
            >
              <span className="border-b border-transparent group-hover/cta:border-[#C5A572] transition-colors duration-300">
                {card.cta.replace(" →", "")}
              </span>
              <span className="transition-transform duration-300 group-hover/cta:translate-x-1">→</span>
            </a>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8" role="tablist">
            {CARDS.map((c, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === active}
                aria-label={`Go to card ${i + 1}: ${c.headline}`}
                onClick={() => { goTo(i); pauseTemporarily(); }}
                className="rounded-full transition-all duration-400 hover:scale-125"
                style={{
                  width: i === active ? 28 : 10,
                  height: 10,
                  background: i === active
                    ? "linear-gradient(135deg, #C5A572, #D4A017)"
                    : "rgba(255,255,255,0.2)",
                  boxShadow: i === active ? "0 0 8px rgba(197, 165, 114, 0.4)" : "none",
                }}
              />
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: "rgba(255,255,255,0.06)" }}>
          <div
            className="h-full transition-none"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, #C5A572, #D4A017)",
              boxShadow: "0 0 8px rgba(197, 165, 114, 0.5)",
            }}
          />
        </div>

        {/* Desktop arrows */}
        {!isMobile && (
          <>
            <button
              onClick={() => { prev(); pauseTemporarily(); }}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center
                         transition-all duration-300 opacity-0 group-hover:opacity-100"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.5)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.9)";
                e.currentTarget.style.background = "rgba(255,255,255,0.15)";
                e.currentTarget.style.borderColor = "rgba(197, 165, 114, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
              }}
              aria-label="Previous card"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => { next(); pauseTemporarily(); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center
                         transition-all duration-300 opacity-0 group-hover:opacity-100"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.5)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.9)";
                e.currentTarget.style.background = "rgba(255,255,255,0.15)";
                e.currentTarget.style.borderColor = "rgba(197, 165, 114, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
              }}
              aria-label="Next card"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
