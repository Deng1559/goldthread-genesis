import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sparkles, TrendingUp, Factory, FileCheck, Leaf, Map,
  ChevronLeft, ChevronRight,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import heroHistoric from "@/assets/hero-historic.jpg";
import heroModern from "@/assets/hero-modern.jpg";

/* ── Card Data ─────────────────────────────────────────── */

interface SlideCard {
  icon: typeof Sparkles;
  badge: string;
  badgeColor: string;
  headline: string;
  body: string;
  metric: string;
  metricLabel: string;
  cta: string;
  href: string;
}

const CARDS: SlideCard[] = [
  {
    icon: Sparkles,
    badge: "INVESTMENT THESIS",
    badgeColor: "hsl(var(--gold))",
    headline: "A Century of Gold. Finally Accessible.",
    body: "Between 1859 and 1917, Colorado produced billions in gold. Regulatory gridlock stranded it for over a century. Five structural factors have now converged to unlock systematic recovery of known value from known locations.",
    metric: "5 CONVERGENCE FACTORS",
    metricLabel: "",
    cta: "Read the Full Story",
    href: "/why-invest",
  },
  {
    icon: TrendingUp,
    badge: "MARKET SIGNAL",
    badgeColor: "#22C55E",
    headline: "Gold Prices Make Stranded Material Extraordinarily Profitable",
    body: "At $4,900+ per ounce, material that was marginally economic at $350/oz becomes highly profitable. Colorado's dump ore piles average 3–10 gpt — grades that were uneconomic in the 1990s are now viable recovery targets.",
    metric: "$4,900+/oz CURRENT GOLD PRICE",
    metricLabel: "",
    cta: "See the Opportunity",
    href: "/why-invest#convergence",
  },
  {
    icon: Factory,
    badge: "OPERATIONAL",
    badgeColor: "#3B82F6",
    headline: "Operating Assets with Defined Timelines",
    body: "MineTeck focuses on known material in permitted jurisdictions — shortening time-to-production from 7+ years to 12–24 months. No exploration risk. No speculative geology. Known grades at known locations.",
    metric: "12–24 MONTHS TO REVENUE",
    metricLabel: "",
    cta: "See Our Projects",
    href: "/projects",
  },
  {
    icon: FileCheck,
    badge: "PERMITTED",
    badgeColor: "#22C55E",
    headline: "Colorado's Gold is Documented. Permitting Was the Constraint.",
    body: "100+ years of stranded gold in legacy tailings. MineTeck's zero-waste technology operates within existing reclamation frameworks — turning environmental liabilities into recovery assets. First toll mill permit in Colorado in 20+ years.",
    metric: "FIRST TOLL MILL PERMIT IN 20 YEARS",
    metricLabel: "",
    cta: "Technology Overview",
    href: "/technology",
  },
  {
    icon: Leaf,
    badge: "EPA VALIDATED",
    badgeColor: "#22C55E",
    headline: "Modern Regulators Prioritize Remediation and Non-Toxic Processing",
    body: "MineTeck's recovery platforms are structured to operate within evolving regulatory priorities rather than oppose them. No cyanide. No acid. No liquid discharge. EPA-recognized testing protocols confirm 1,000+ year non-toxicity certification (TCLP / SPLP / ABA).",
    metric: "1,000 YEAR NON-TOXICITY CERTIFICATION",
    metricLabel: "",
    cta: "Learn About Our Environmental Approach",
    href: "/services",
  },
  {
    icon: Map,
    badge: "ACCREDITED ONLY",
    badgeColor: "hsl(var(--gold-dark))",
    headline: "Participate in Gold's Next Cycle Through Permitted Recovery Projects",
    body: "Breakthrough Management Gold Fund I provides qualified investors access to a portfolio of permitted gold recovery operations with measurable environmental impact, defined timelines, and institutional governance. This is not speculation — this is infrastructure.",
    metric: "PORTFOLIO OF PERMITTED PROJECTS",
    metricLabel: "",
    cta: "Request Investor Access",
    href: "/access",
  },
];

const PROOF_STATS = [
  { value: "$200M+", label: "in Contracted Material" },
  { value: "12–24", label: "Months to Revenue" },
  { value: "$4,900+", label: "Gold Per Ounce (All-Time High)" },
  { value: "First and ONLY", label: "Toll Mill Permit in 20 Years" },
];

const INTERVAL = 8000;
const RESUME_DELAY = 3000;
const TRANSITION_MS = 600;

const OPENING_PARAGRAPH =
  "Between 1859 and 1917, Colorado's mining districts produced billions in gold — then regulatory gridlock shut it down for 80 years. The material never left. It just waited for technology to evolve, regulations to adapt, and five structural factors to align. That convergence has now occurred.";

/* ── Unified Hero ──────────────────────────────────────── */

export function Hero() {
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();

  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStart = useRef<number | null>(null);

  const goTo = useCallback(
    (idx: number) => {
      if (idx === active) return;
      setTransitioning(true);
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
    if (paused) return;
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
  const CardIcon = card.icon;

  const fadeUp = (delay: number) =>
    prefersReducedMotion
      ? {}
      : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" aria-label="Hero section">
      {/* ── Background ────────────────────── */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${heroModern})` }} aria-hidden="true" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(10,15,20,0.75) 0%, rgba(10,15,20,0.85) 60%, rgba(10,15,20,0.95) 100%)" }}
          aria-hidden="true"
        />
      </div>

      {/* ── Content ───────────────────────── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 py-20 md:py-28 flex flex-col items-center text-center">

        {/* Headline */}
        <motion.h1
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-2"
          style={{ textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}
          {...fadeUp(0)}
        >
          <span className="text-white">The Colorado Gold</span>
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg, hsl(43 79% 46%), hsl(43 79% 66%))" }}
          >
            Renaissance
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="font-body text-lg sm:text-xl md:text-2xl text-white/90 mb-6 max-w-3xl tracking-wide"
          style={{ letterSpacing: "0.02em" }}
          {...fadeUp(0.2)}
        >
          How Zero-Waste Technology Unlocked a Century of Stranded Gold Value
        </motion.p>

        {/* Opening Paragraph */}
        <motion.p
          className="font-body text-base sm:text-lg text-white/80 mb-10 max-w-[700px] leading-[1.7]"
          {...fadeUp(0.4)}
        >
          {OPENING_PARAGRAPH}
        </motion.p>

        {/* ── Proof Bar ──────────────────── */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full max-w-3xl mb-10"
          {...fadeUp(0.6)}
        >
          {PROOF_STATS.map((stat, i) => (
            <div
              key={i}
              className="text-center px-4 py-4 rounded-lg"
              style={{
                background: "rgba(0,0,0,0.4)",
                borderBottom: "2px solid hsl(var(--gold))",
              }}
            >
              <div className="font-display text-xl sm:text-2xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="font-body text-[0.7rem] sm:text-xs text-white/70 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── Embedded Carousel Panel ────── */}
        <motion.div
          className="w-full"
          style={{ maxWidth: isMobile ? "100%" : 800 }}
          {...fadeUp(0.8)}
        >
          <div
            className="relative overflow-hidden rounded-xl group"
            style={{
              background: "rgba(10,20,30,0.7)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid hsla(43, 79%, 46%, 0.3)",
            }}
            onMouseEnter={() => !isMobile && setPaused(true)}
            onMouseLeave={() => !isMobile && setPaused(false)}
            onFocus={pauseTemporarily}
            onKeyDown={handleKey}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            tabIndex={0}
            role="region"
            aria-label="Investment opportunity highlights"
            aria-roledescription="carousel"
          >
            {/* Card content */}
            <div
              className="transition-all ease-in-out p-6 sm:p-8"
              style={{
                transitionDuration: `${TRANSITION_MS}ms`,
                opacity: transitioning ? 0 : 1,
                transform: transitioning ? "translateX(20px)" : "translateX(0)",
              }}
              role="tabpanel"
              aria-label={`Card ${active + 1} of ${CARDS.length}: ${card.headline}`}
            >
              {/* Badge row */}
              <div className="flex items-center justify-between mb-5">
                <span
                  className="inline-block text-[0.65rem] sm:text-[0.7rem] font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{
                    color: card.badgeColor,
                    background: `${card.badgeColor}22`,
                    border: `1px solid ${card.badgeColor}66`,
                  }}
                >
                  {card.badge}
                </span>
                <span className="font-mono text-[0.7rem] text-white/40 tracking-widest">
                  {active + 1} / {CARDS.length}
                </span>
              </div>

              {/* Icon + Headline */}
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: "rgba(212,160,23,0.12)",
                    border: "1px solid rgba(212,160,23,0.25)",
                  }}
                >
                  <CardIcon size={isMobile ? 24 : 28} className="text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg sm:text-xl md:text-[1.3rem] font-bold text-white leading-snug pt-1">
                  {card.headline}
                </h3>
              </div>

              {/* Body */}
              <p className="text-sm sm:text-[0.95rem] leading-relaxed text-white/75 mb-5">
                {card.body}
              </p>

              {/* Metric highlight */}
              <div
                className="inline-block px-4 py-2 rounded-lg mb-5"
                style={{
                  background: "rgba(212,160,23,0.1)",
                  border: "1px solid rgba(212,160,23,0.25)",
                }}
              >
                <span className="font-mono text-xs sm:text-sm font-bold text-primary tracking-wide">
                  {card.metric}
                </span>
              </div>

              {/* CTA */}
              <div>
                <Link
                  to={card.href}
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline hover:gap-3 transition-all duration-300 group/cta"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>{card.cta}</span>
                  <span className="transition-transform duration-300 group-hover/cta:translate-x-1">→</span>
                </Link>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center gap-2 pb-4" role="tablist">
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
                    background: i === active
                      ? "linear-gradient(135deg, hsl(43 79% 46%), hsl(43 79% 56%))"
                      : "rgba(255,255,255,0.25)",
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
                  background: "linear-gradient(90deg, hsl(43 79% 46%), hsl(43 79% 56%))",
                  transition: "none",
                }}
              />
            </div>

            {/* Desktop arrows */}
            {!isMobile && (
              <>
                <button
                  onClick={() => { prev(); pauseTemporarily(); }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-white/10"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
                  aria-label="Previous card"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => { next(); pauseTemporarily(); }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-white/10"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
                  aria-label="Next card"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
