import { useState, useEffect, useCallback, useRef } from "react";
import { Sparkles, TrendingUp, Factory, FileCheck, Leaf, Map, ChevronLeft, ChevronRight, Mountain, Pickaxe, ClipboardList, BarChart3, Landmark, Building, CheckCircle, TestTube, Handshake, Droplets, MapPin } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

type ProofPoint = { icon: React.ReactNode; text: string };

interface CardData {
  icon: typeof Sparkles;
  headline: string;
  body: string;
  cta: string;
  href: string;
  badge: string;
  counterValue: number;
  counterPrefix?: string;
  counterSuffix?: string;
  counterLabel: string;
  counterSpecial?: "range" | "typewriter";
  counterRangeEnd?: number;
  accent: string;
  proofPoints: ProofPoint[];
}

const CARDS: CardData[] = [
  {
    icon: Sparkles,
    badge: "RECOVERY ERA",
    headline: "The New Colorado Gold Renaissance",
    body: "Colorado's next phase of gold production is not driven by new discovery, but by recovery. MineTeck advances gold production through the reactivation of legacy material using recovery models aligned with today's regulatory and environmental priorities.",
    counterValue: 200,
    counterPrefix: "$",
    counterSuffix: "M+",
    counterLabel: "IN CONTRACTED MATERIAL",
    cta: "Explore the Renaissance",
    href: "/why-invest",
    accent: "from-amber-500/20 to-yellow-600/10",
    proofPoints: [
      { icon: <Mountain size={16} />, text: "4 permitted Colorado project sites" },
      { icon: <Pickaxe size={16} />, text: "1M+ tons of defined legacy material" },
      { icon: <ClipboardList size={16} />, text: "First toll mill permit in 20+ years" },
    ],
  },
  {
    icon: TrendingUp,
    badge: "MARKET TIMING",
    headline: "Don't Miss The New Gold Rush",
    body: "Price is at an all-time high and not looking backwards. The government is emphasizing the mining of critical metals. Banks are stocking up. How do you get in on this?",
    counterValue: 2700,
    counterPrefix: "$",
    counterSuffix: "+",
    counterLabel: "GOLD PRICE PER OUNCE (ATH)",
    cta: "See Why Now",
    href: "/why-invest#convergence",
    accent: "from-emerald-500/20 to-teal-600/10",
    proofPoints: [
      { icon: <BarChart3 size={16} />, text: "Gold up 35%+ in the last 12 months" },
      { icon: <Landmark size={16} />, text: "U.S. policy prioritizing domestic mineral production" },
      { icon: <Building size={16} />, text: "Central banks buying at record pace" },
    ],
  },
  {
    icon: Factory,
    badge: "EXECUTION STAGE",
    headline: "Execution — Not Exploration",
    body: "MineTeck focuses on known material in defined jurisdictions, shortening time-to-production by prioritizing execution over speculative exploration.",
    counterValue: 6,
    counterSuffix: "",
    counterLabel: "MONTHS TO REVENUE (NOT YEARS)",
    counterSpecial: "range",
    counterRangeEnd: 24,
    cta: "View Our Execution Model",
    href: "/projects",
    accent: "from-blue-500/20 to-indigo-600/10",
    proofPoints: [
      { icon: <CheckCircle size={16} />, text: "Russell Gulch: 6–9 months to revenue" },
      { icon: <CheckCircle size={16} />, text: "Gladstone Mill: 12–18 months to revenue" },
      { icon: <CheckCircle size={16} />, text: "No exploration drilling required" },
    ],
  },
  {
    icon: FileCheck,
    badge: "PERMITTED",
    headline: "Permits, Not Geology",
    body: "In Colorado, gold is well documented. What has been scarce is permitting alignment. MineTeck advances projects designed to operate within existing reclamation and regulatory frameworks.",
    counterValue: 3,
    counterLabel: "PROJECTS FULLY PERMITTED OR IN LATE-STAGE",
    cta: "See How Permits Change the Equation",
    href: "/technology",
    accent: "from-violet-500/20 to-purple-600/10",
    proofPoints: [
      { icon: <CheckCircle size={16} />, text: "Gladstone: Permitted — first in Colorado since 2002" },
      { icon: <CheckCircle size={16} />, text: "Russell Gulch: Fully permitted reclamation" },
      { icon: <MapPin size={16} />, text: "Crown & B-Group: Lease secured / under contract" },
    ],
  },
  {
    icon: Leaf,
    badge: "EPA VALIDATED",
    headline: "Built for Today's Regulatory Environment",
    body: "Modern regulators prioritize remediation, reclamation, and non-toxic processing. MineTeck's recovery platforms are structured to operate within these evolving priorities rather than oppose them.",
    counterValue: 1000,
    counterLabel: "YEAR NON-TOXICITY CERTIFICATION (TCLP / SPLP / ABA)",
    cta: "Learn About Our Environmental Approach",
    href: "/services",
    accent: "from-green-500/20 to-emerald-600/10",
    proofPoints: [
      { icon: <TestTube size={16} />, text: "Zero-waste, zero-toxicity processing verified" },
      { icon: <Handshake size={16} />, text: "DRMS collaborating on new reclamation permit class" },
      { icon: <Droplets size={16} />, text: "Zero liquid discharge — no tailings ponds" },
    ],
  },
  {
    icon: Map,
    badge: "PORTFOLIO APPROACH",
    headline: "An Investable Recovery Platform — Not a One-Off Project",
    body: "MineTeck advances a portfolio-driven approach, applying a repeatable recovery strategy across multiple sites with defined material and permitting context.",
    counterValue: 4,
    counterLabel: "ACTIVE PROJECT SITES IN COLORADO",
    cta: "Evaluate the Portfolio",
    href: "/why-invest",
    accent: "from-orange-500/20 to-amber-600/10",
    proofPoints: [
      { icon: <MapPin size={16} />, text: "Gladstone Toll Mill — $4.0M capital" },
      { icon: <MapPin size={16} />, text: "Russell Gulch — $1.25M capital" },
      { icon: <MapPin size={16} />, text: "Crown + B-Group — $8.1M combined capital" },
    ],
  },
];

const INTERVAL = 10000;
const RESUME_DELAY = 3000;
const TRANSITION_MS = 500;
const COUNTER_DURATION = 1500;

function useAnimatedCounter(target: number, active: boolean, special?: "range" | "typewriter", rangeEnd?: number, prefix?: string, suffix?: string) {
  const [display, setDisplay] = useState("0");
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!active) { setDisplay("0"); return; }
    const start = performance.now();

    if (special === "range") {
      // Count 0→target in 0.8s, pause, then reveal "– rangeEnd"
      const phase1 = 800;
      const pause = 300;
      const animate = (now: number) => {
        const elapsed = now - start;
        if (elapsed < phase1) {
          const progress = Math.min(elapsed / phase1, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const val = Math.round(eased * target);
          setDisplay(`${prefix || ""}${val.toLocaleString()}${suffix || ""}`);
          frameRef.current = requestAnimationFrame(animate);
        } else if (elapsed < phase1 + pause) {
          setDisplay(`${prefix || ""}${target.toLocaleString()}${suffix || ""}`);
          frameRef.current = requestAnimationFrame(animate);
        } else {
          setDisplay(`${prefix || ""}${target}–${rangeEnd}${suffix || ""}`);
        }
      };
      frameRef.current = requestAnimationFrame(animate);
    } else {
      const animate = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / COUNTER_DURATION, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const val = Math.round(eased * target);
        setDisplay(`${prefix || ""}${val.toLocaleString()}${suffix || ""}`);
        if (progress < 1) frameRef.current = requestAnimationFrame(animate);
      };
      frameRef.current = requestAnimationFrame(animate);
    }

    return () => cancelAnimationFrame(frameRef.current);
  }, [active, target, special, rangeEnd, prefix, suffix]);

  return display;
}

function CardContent({ card, index, total, isActive }: { card: CardData; index: number; total: number; isActive: boolean }) {
  const isMobile = useIsMobile();
  const [revealed, setRevealed] = useState(false);
  const Icon = card.icon;
  const counterDisplay = useAnimatedCounter(
    card.counterValue, isActive, card.counterSpecial, card.counterRangeEnd, card.counterPrefix, card.counterSuffix
  );

  // Reset reveal when card changes
  useEffect(() => { setRevealed(false); }, [index]);

  const handleTap = () => {
    if (isMobile) setRevealed((r) => !r);
  };

  return (
    <div onClick={handleTap}>
      <div className="px-5 pt-5 pb-4 md:px-10 md:pt-9 md:pb-6">
        {/* Top row: badge + counter */}
        <div className="flex items-start justify-between mb-4">
          <span
            className="inline-block text-[0.7rem] font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
            style={{
              color: "#C5A572",
              background: "rgba(197, 165, 114, 0.15)",
              border: "1px solid rgba(197, 165, 114, 0.4)",
            }}
          >
            {card.badge}
          </span>
          <span className="font-mono text-xs tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>
            {index + 1} / {total}
          </span>
        </div>

        {/* Icon */}
        <div
          className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4"
          style={{
            background: "rgba(197, 165, 114, 0.12)",
            border: "1px solid rgba(197, 165, 114, 0.2)",
            boxShadow: "0 0 20px rgba(197, 165, 114, 0.1)",
          }}
        >
          <Icon size={isMobile ? 28 : 36} color="#C5A572" aria-hidden="true" />
        </div>

        {/* Headline */}
        <h3 className="text-white font-bold leading-tight" style={{ fontSize: isMobile ? "1.1rem" : "1.3rem", marginTop: 14 }}>
          {card.headline}
        </h3>

        {/* Body */}
        <p style={{ color: "#D1D5DB", fontSize: isMobile ? "0.875rem" : "0.95rem", lineHeight: 1.65, marginTop: 10 }}>
          {card.body}
        </p>

        {/* Animated Counter */}
        <div className="mt-5" aria-live="polite">
          <div className="text-white font-extrabold" style={{ fontSize: isMobile ? "1.25rem" : "1.5rem" }}>
            {counterDisplay}
          </div>
          <div className="uppercase tracking-wider font-medium" style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.75rem", marginTop: 2 }}>
            {card.counterLabel}
          </div>
        </div>

        {/* CTA + Hover hint */}
        <div className="flex items-center justify-between mt-5">
          <a
            href={card.href}
            className="inline-flex items-center gap-2 text-[#C5A572] font-semibold transition-all duration-300 hover:gap-3 hover:underline group/cta"
            style={{ fontSize: isMobile ? "0.85rem" : "0.9rem" }}
            onClick={(e) => e.stopPropagation()}
          >
            <span>{card.cta}</span>
            <span className="transition-transform duration-300 group-hover/cta:translate-x-1">→</span>
          </a>
          {!isMobile && !revealed && (
            <span
              className="text-xs animate-pulse"
              style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.75rem" }}
            >
              Details ↓
            </span>
          )}
          {isMobile && !revealed && (
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
              Tap for details
            </span>
          )}
        </div>
      </div>

      {/* Hover / Tap Reveal Panel */}
      <div
        className="overflow-hidden transition-all duration-350 ease-in-out"
        style={{
          maxHeight: revealed || (!isMobile && false) ? 120 : 0,
          opacity: revealed ? 1 : 0,
        }}
        aria-expanded={revealed}
      >
        <div className="mx-5 md:mx-10" style={{ borderTop: "1px solid rgba(197, 165, 114, 0.2)" }} />
        <div className="px-5 md:px-10 pt-4 pb-5 flex flex-col md:flex-row gap-3 md:gap-6">
          {card.proofPoints.map((pp, i) => (
            <div key={i} className="flex items-center gap-2" style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8rem" }}>
              <span style={{ color: "rgba(255,255,255,0.5)" }}>{pp.icon}</span>
              <span>{pp.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function OpportunityCarousel() {
  const isMobile = useIsMobile();
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStart = useRef<number | null>(null);

  const goTo = useCallback(
    (idx: number) => {
      if (idx === active) return;
      setTransitioning(true);
      setRevealed(false);
      setTimeout(() => {
        setActive(idx);
        setProgress(0);
        setTransitioning(false);
      }, TRANSITION_MS / 2);
    },
    [active],
  );

  const next = useCallback(() => goTo((active + 1) % CARDS.length), [active, goTo]);
  const prev = useCallback(() => goTo((active - 1 + CARDS.length) % CARDS.length), [active, goTo]);

  // Auto-advance
  useEffect(() => {
    if (paused || revealed) return;
    const tick = 50;
    const id = setInterval(() => {
      setProgress((p) => {
        const nxt = p + (tick / INTERVAL) * 100;
        if (nxt >= 100) {
          setTransitioning(true);
          setTimeout(() => {
            setActive((a) => (a + 1) % CARDS.length);
            setTransitioning(false);
          }, TRANSITION_MS / 2);
          return 0;
        }
        return nxt;
      });
    }, tick);
    return () => clearInterval(id);
  }, [paused, revealed]);

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

  return (
    <div
      className="w-full mx-4 md:mx-auto"
      style={{ maxWidth: isMobile ? "calc(100% - 32px)" : 800, margin: "32px auto" }}
      onMouseEnter={() => { if (!isMobile) { setPaused(true); setRevealed(true); } }}
      onMouseLeave={() => { if (!isMobile) { setPaused(false); setRevealed(false); } }}
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
        className="relative overflow-hidden group"
        style={{
          background: "rgba(15, 23, 42, 0.75)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          border: "1px solid rgba(197, 165, 114, 0.25)",
          borderRadius: 12,
        }}
      >
        {/* Accent gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${card.accent} transition-all duration-700`} aria-hidden="true" />

        {/* Corner glow */}
        <div
          className="absolute -top-16 -right-16 w-32 h-32 rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, #C5A572, transparent 70%)" }}
          aria-hidden="true"
        />

        {/* Card content with transition */}
        <div
          className="relative transition-all duration-500 ease-in-out"
          style={{
            opacity: transitioning ? 0 : 1,
            transform: transitioning ? "translateX(30px)" : "translateX(0)",
          }}
        >
          <CardContent
            card={card}
            index={active}
            total={CARDS.length}
            isActive={!transitioning}
          />
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 px-5 pb-4 md:px-10" role="tablist">
          {CARDS.map((c, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              aria-label={`Go to card ${i + 1}: ${c.headline}`}
              onClick={() => { goTo(i); pauseTemporarily(); }}
              className="rounded-full transition-all duration-300 hover:scale-125"
              style={{
                width: i === active ? 24 : 10,
                height: 10,
                background: i === active ? "#C5A572" : "rgba(255,255,255,0.3)",
              }}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="h-[3px] w-full" style={{ background: "rgba(255,255,255,0.06)" }}>
          <div
            className="h-full"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, #C5A572, #D4A017)",
              transition: "none",
            }}
          />
        </div>

        {/* Desktop arrows */}
        {!isMobile && (
          <>
            <button
              onClick={() => { prev(); pauseTemporarily(); }}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.4)" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.8)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.4)"; }}
              aria-label="Previous card"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => { next(); pauseTemporarily(); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.4)" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.8)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.4)"; }}
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
