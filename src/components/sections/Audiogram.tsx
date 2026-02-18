import { useState, useRef, useCallback, useEffect } from "react";

const AUDIO_SRC = "/audio/andrew-gladstone-narration.mp3";
const SYNC_OFFSET = -0.15;
const TOTAL = 181;
const BAR_COUNT = 40;

interface Scene {
  id: string;
  s: number;
  e: number;
  render: (currentTime: number) => React.ReactNode;
}

function GoldLine() {
  return (
    <div className="w-16 h-px mx-auto my-4" style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />
  );
}

function SyncReveal({ at, currentTime, children }: { at: number; currentTime: number; children: React.ReactNode }) {
  const visible = currentTime >= at;
  return (
    <div
      className="transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(1rem)",
      }}
    >
      {children}
    </div>
  );
}

const SCENES: Scene[] = [
  {
    id: "s1", s: 0, e: 13.7,
    render: () => (
      <div className="flex flex-col items-center justify-center text-center">
        <p className="font-sans text-white/70 font-light text-base md:text-lg max-w-xl">In every gold rush, most people chase the gold.</p>
        <GoldLine />
        <p className="font-display text-gold text-2xl md:text-4xl font-bold leading-tight">
          The real money is in owning<br /><span className="text-gold">the infrastructure.</span>
        </p>
      </div>
    ),
  },
  {
    id: "s2", s: 13.7, e: 30.7,
    render: () => (
      <div className="flex flex-col items-center justify-center text-center">
        <div className="font-display text-[clamp(3rem,8vw,8rem)] font-extrabold tracking-tight" style={{ color: "rgba(201,168,76,0.35)", letterSpacing: "0.1em" }}>1859</div>
        <p className="font-sans text-white/70 text-sm md:text-base mt-4 max-w-lg">
          Clear Creek Canyon. The original Colorado Gold Rush.<br />Over <span className="text-gold font-semibold">$1 billion</span> in gold extracted historically.
        </p>
      </div>
    ),
  },
  {
    id: "s3", s: 30.7, e: 46.4,
    render: () => (
      <div className="flex flex-col items-center justify-center text-center">
        <p className="font-sans text-white/70 text-base md:text-lg">The gold didn't run out.</p>
        <GoldLine />
        <p className="font-display text-gold text-xl md:text-3xl font-bold leading-tight">
          Processing capacity<br /><span className="text-white/90">disappeared.</span>
        </p>
        <p className="font-sans text-white/50 text-sm mt-4 max-w-lg">
          Environmental regulations closed every mill in the region.<br />No new permits issued in <span className="text-gold">20 years</span>.
        </p>
      </div>
    ),
  },
  {
    id: "s4", s: 46.4, e: 51.1,
    render: () => (
      <div className="flex flex-col items-center justify-center text-center">
        <p className="font-display text-gold text-3xl md:text-5xl font-bold leading-tight" style={{ textShadow: "0 0 60px rgba(201,168,76,0.12)" }}>
          The permit<br /><span className="text-white">IS</span> the asset.
        </p>
      </div>
    ),
  },
  {
    id: "s5", s: 51.1, e: 64.7,
    render: () => (
      <div className="flex flex-col items-center justify-center text-center">
        <div className="font-display text-gold text-[clamp(3rem,8vw,8rem)] font-extrabold tracking-tight">4,000+</div>
        <p className="font-sans text-white/70 text-sm md:text-base mt-2">abandoned mines with stranded gold</p>
        <GoldLine />
        <p className="font-sans text-white/50 text-sm max-w-md">Millions in recoverable ore — with <span className="text-gold">nowhere to process it</span>.</p>
      </div>
    ),
  },
  {
    id: "s6", s: 64.7, e: 84.0,
    render: (currentTime: number) => (
      <div className="flex flex-col items-center justify-center">
        <p className="font-sans text-white/50 text-xs uppercase tracking-wider mb-4">Proprietary Clean Processing</p>
        <div className="flex flex-col items-start gap-3 max-w-lg">
          {[
            { at: 66.0, text: "Zero-waste, zero-toxicity processing technology" },
            { at: 70.2, text: "Closed-loop water recirculation" },
            { at: 73.5, text: "No cyanide" },
            { at: 75.1, text: "No liquid discharge" },
            { at: 77.0, text: "No toxic tailings" },
            { at: 80.0, text: "Extracts precious metals while removing toxins" },
          ].map((item) => (
            <SyncReveal key={item.at} at={item.at} currentTime={currentTime}>
              <div className="flex items-start gap-3">
                <span className="text-gold text-xs mt-0.5 flex-shrink-0">✦</span>
                <span className="font-sans text-white/90 text-sm md:text-base">{item.text}</span>
              </div>
            </SyncReveal>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "s7", s: 84.0, e: 101.9,
    render: () => (
      <div className="flex flex-col items-center justify-center text-center">
        <p className="font-sans text-white/50 text-xs uppercase tracking-wider mb-4">Competitive Moat</p>
        <p className="font-display text-gold text-2xl md:text-4xl font-bold leading-tight" style={{ textShadow: "0 0 40px rgba(201,168,76,0.12)" }}>
          The <span className="underline decoration-gold/40 underline-offset-4">only</span> permitted toll mill<br />in Colorado.
        </p>
        <GoldLine />
        <p className="font-sans text-white/50 text-sm">The first new permit in <span className="text-gold">20 years</span>.</p>
      </div>
    ),
  },
  {
    id: "s8", s: 101.9, e: 119.7,
    render: () => (
      <div className="flex flex-col items-center justify-center text-center">
        <p className="font-sans text-white/50 text-xs uppercase tracking-wider mb-4">Location</p>
        <p className="font-display text-gold text-2xl md:text-3xl font-bold" style={{ textShadow: "0 0 40px rgba(201,168,76,0.12)" }}>Gladstone, Colorado</p>
        <GoldLine />
        <p className="font-sans text-white/60 text-sm max-w-md">
          Heart of the historic Clear Creek mining district.<br />Direct access to <span className="text-gold">4,000+ abandoned mines</span> within a 50-mile radius.
        </p>
      </div>
    ),
  },
  {
    id: "s9", s: 119.7, e: 139.9,
    render: () => (
      <div className="flex flex-col items-center justify-center text-center">
        <p className="font-sans text-white/50 text-xs uppercase tracking-wider mb-4">Revenue Model</p>
        <p className="font-display text-gold text-2xl md:text-3xl font-bold" style={{ textShadow: "0 0 40px rgba(201,168,76,0.12)" }}>Toll Processing</p>
        <GoldLine />
        <p className="font-sans text-white/70 text-base md:text-lg max-w-xl">
          Miners bring their ore. <span className="text-gold font-semibold">We process it.</span><br />Recurring revenue without the mining risk.
        </p>
      </div>
    ),
  },
  {
    id: "s10", s: 139.9, e: 148.5,
    render: () => (
      <div className="flex flex-col items-center justify-center text-center">
        <p className="font-sans text-white/50 text-xs uppercase tracking-wider mb-4">Projected Annual Revenue Potential</p>
        <div className="font-display text-gold text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold tracking-tight">$24M – $40M</div>
        <GoldLine />
        <p className="font-sans text-white/35 text-[0.65rem] max-w-md leading-relaxed mt-2">
          *Projected. Based on internal estimates. Subject to operational, market, and regulatory risks. Not a guarantee of returns. See offering documents for full risk disclosures.
        </p>
      </div>
    ),
  },
  {
    id: "s11", s: 148.5, e: 162.0,
    render: (currentTime: number) => (
      <div className="flex flex-col items-center justify-center gap-6">
        {[
          { at: 149.5, text: "SCARCITY CREATES ADVANTAGE" },
          { at: 153.0, text: "PERMITTING CREATES A MOAT" },
          { at: 156.5, text: "INFRASTRUCTURE CREATES LEVERAGE" },
        ].map((item) => (
          <SyncReveal key={item.at} at={item.at} currentTime={currentTime}>
            <span className="font-display text-gold font-bold text-xl md:text-3xl tracking-wider" style={{ textShadow: "0 0 40px rgba(201,168,76,0.12)" }}>
              {item.text}
            </span>
          </SyncReveal>
        ))}
      </div>
    ),
  },
  {
    id: "s12", s: 162.0, e: 166.5,
    render: () => (
      <div className="flex flex-col items-center justify-center text-center">
        <p className="font-display text-gold text-3xl md:text-5xl font-bold tracking-wider" style={{ textShadow: "0 0 60px rgba(201,168,76,0.12)" }}>
          OWN THE SHOVELS
        </p>
      </div>
    ),
  },
  {
    id: "s13", s: 166.5, e: 181,
    render: () => (
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <div className="font-display text-white font-extrabold text-[clamp(1.8rem,4vw,3.2rem)] tracking-wider">MINETECK</div>
        <div className="font-sans text-white/50 text-sm uppercase tracking-widest font-light">The Gladstone Toll Mill</div>
        <GoldLine />
        <a href="/access" className="inline-block px-8 py-3 bg-gold text-navy font-medium text-sm uppercase tracking-wider rounded hover:brightness-110 transition-all">
          Review the Opportunity →
        </a>
        <div className="font-sans text-white/30 text-xs tracking-wider mt-4">Thank you for your time. — Andrew Ferguson</div>
      </div>
    ),
  },
];

function getSceneFor(t: number): string {
  for (let i = SCENES.length - 1; i >= 0; i--) {
    if (t >= SCENES[i].s) return SCENES[i].id;
  }
  return SCENES[0].id;
}

function fmt(s: number): string {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec < 10 ? "0" : ""}${sec}`;
}

export function Audiogram() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const rafRef = useRef<number>(0);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const playingRef = useRef(false);
  const [autoplayAttempted, setAutoplayAttempted] = useState(false);

  const activeSceneId = getSceneFor(currentTime);

  const tick = useCallback(() => {
    if (!playingRef.current) return;
    const audio = audioRef.current;
    if (!audio) return;

    let t = audio.currentTime + SYNC_OFFSET;
    if (t < 0) t = 0;

    if (t >= TOTAL) {
      setCurrentTime(TOTAL);
      setPlaying(false);
      playingRef.current = false;
      return;
    }

    setCurrentTime(t);
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  const startPlayback = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(AUDIO_SRC);
      audioRef.current.preload = "auto";
      audioRef.current.addEventListener("ended", () => {
        setPlaying(false);
        playingRef.current = false;
        setCurrentTime(TOTAL);
      });
    }

    const audio = audioRef.current;
    audio.play().then(() => {
      setStarted(true);
      setPlaying(true);
      playingRef.current = true;
      tick();
    }).catch(() => {
      // Autoplay blocked — show overlay
      setStarted(false);
    });
  }, [tick]);

  // Autoplay on mount
  useEffect(() => {
    if (!autoplayAttempted) {
      setAutoplayAttempted(true);
      startPlayback();
    }
  }, [autoplayAttempted, startPlayback]);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playingRef.current) {
      audio.pause();
      cancelAnimationFrame(rafRef.current);
      setPlaying(false);
      playingRef.current = false;
    } else {
      audio.play().then(() => {
        setPlaying(true);
        playingRef.current = true;
        tick();
      });
    }
  }, [tick]);

  const handleSeek = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const t = pct * TOTAL;
    if (audioRef.current) {
      audioRef.current.currentTime = t;
    }
    setCurrentTime(t);
  }, []);

  const handleOverlayClick = useCallback(() => {
    startPlayback();
  }, [startPlayback]);

  useEffect(() => {
    return () => {
      cancelAnimationFrame(rafRef.current);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const pct = (currentTime / TOTAL) * 100;

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-navy/95 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,160,23,0.05)_0%,transparent_50%)]" />

      <div className="container-narrow px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-gold mb-3 md:mb-4">
              The Story Behind the Renaissance
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto">
              Listen: How Zero-Waste Technology Unlocked a Century of Stranded Value
            </p>
          </div>

          {/* Audiogram Container */}
          <div className="max-w-[800px] mx-auto mb-6 md:mb-8">
            <div
              className="relative overflow-hidden rounded-lg shadow-2xl shadow-black/40 border border-white/10"
              style={{ background: "#0a0a14", aspectRatio: "16/9" }}
            >
              {/* Background glow */}
              <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(201,168,76,0.04) 0%, transparent 70%)" }} />

              {/* Scenes */}
              {SCENES.map((scene) => (
                <div
                  key={scene.id}
                  className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-12 transition-opacity duration-1000"
                  style={{
                    opacity: activeSceneId === scene.id ? 1 : 0,
                    pointerEvents: activeSceneId === scene.id ? "auto" : "none",
                    zIndex: activeSceneId === scene.id ? 10 : 0,
                  }}
                >
                  {scene.render(currentTime)}
                </div>
              ))}

              {/* Waveform */}
              {started && (
                <div className="absolute bottom-16 left-0 right-0 flex items-end justify-center gap-[2px] h-6 px-4 pointer-events-none">
                  {Array.from({ length: BAR_COUNT }).map((_, i) => (
                    <div
                      key={i}
                      className="w-[3px] rounded-sm transition-all duration-75"
                      style={{
                        height: playing ? `${4 + Math.random() * 18}px` : "4px",
                        background: "rgba(201,168,76,0.5)",
                      }}
                    />
                  ))}
                </div>
              )}

              {/* Progress Bar */}
              {started && (
                <div
                  className="absolute bottom-10 left-0 right-0 h-1 cursor-pointer z-30"
                  style={{ background: "rgba(255,255,255,0.1)" }}
                  onClick={handleSeek}
                >
                  <div
                    className="h-full relative"
                    style={{ width: `${pct}%`, background: "#C9A84C" }}
                  />
                </div>
              )}

              {/* Controls */}
              {started && (
                <div className="absolute bottom-2 left-0 right-0 flex items-center justify-center gap-3 z-30">
                  <button
                    onClick={togglePlay}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs transition-colors"
                    style={{ background: "rgba(255,255,255,0.1)" }}
                  >
                    {playing ? "⏸" : "▶"}
                  </button>
                  <span className="font-mono text-white/50 text-xs tabular-nums">
                    {fmt(currentTime)} / {fmt(TOTAL)}
                  </span>
                </div>
              )}

              {/* Start Overlay */}
              {!started && (
                <div
                  className="absolute inset-0 z-50 flex flex-col items-center justify-center cursor-pointer"
                  style={{ background: "rgba(10,10,20,0.95)", backdropFilter: "blur(4px)" }}
                  onClick={handleOverlayClick}
                >
                  <p className="font-sans text-white/50 text-xs uppercase tracking-widest mb-4">
                    A 3-Minute Investment Brief by Andrew Ferguson
                  </p>
                  <h3 className="font-display text-center text-xl md:text-3xl font-bold leading-tight mb-6">
                    The <span className="text-gold">Only</span> Toll Mill in Colorado.<br />
                    The First in <span className="text-gold">20 Years.</span>
                  </h3>
                  <button
                    className="w-16 h-16 rounded-full flex items-center justify-center text-gold text-2xl transition-colors"
                    style={{ border: "2px solid #C9A84C", background: "rgba(201,168,76,0.15)" }}
                  >
                    ▶
                  </button>
                  <p className="font-sans text-white/30 text-xs tracking-wider mt-4">Click to listen · 3:01</p>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="text-center">
            <p className="text-white/80 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
              Andrew Ferguson, Founder &amp; CEO of MineTeck, explains the regulatory gridlock
              that kept billions in gold untouchable for 80 years—and how his team solved it.{" "}
              <span className="text-white/50">(3 minutes)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
