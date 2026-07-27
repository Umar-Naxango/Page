import { useEffect, useRef, useState } from "react";
import { Image as ImageIcon, Film, Lightbulb } from "lucide-react";
import Reveal from "./Reveal";

const BG_VIDEO =
  "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100059067/64bad395-f535-46.mp4";

const experiments = [
  {
    icon: ImageIcon,
    name: "AI Scenery",
    tags: ["Natural Context", "Photo Realism", "Infinite Settings", "Eco-Vibe"],
    desc: "AI analyzes your product to create indistinguishable natural environments — from Icelandic cliffs to misty forests.",
  },
  {
    icon: Film,
    name: "Batch Production",
    tags: ["Scale Fast", "Visual Consistency", "Time Saver", "Ready to Post"],
    desc: "Style your entire product line in minutes. Create a unified visual identity for catalogues and social media without weeks of retouching.",
  },
  {
    icon: Lightbulb,
    name: "Smart Lighting",
    tags: ["Ray Tracing", "Studio Quality", "Auto Shadows", "HDR"],
    desc: "Automatic lighting and material adjustment. Achieve flawless integration with realistic shadows and sunlight.",
  },
];

/** Two stacked videos with asymmetric crossfade for seamless loop (no jump / flash). */
function SeamlessVideo() {
  const videoA = useRef<HTMLVideoElement>(null);
  const videoB = useRef<HTMLVideoElement>(null);
  const [topIsA, setTopIsA] = useState(true);
  const [topOpacity, setTopOpacity] = useState(1);
  const [mountB, setMountB] = useState(false);

  useEffect(() => {
    const a = videoA.current;
    if (!a) return;
    const onCanPlay = () => {
      a.play().catch(() => undefined);
      window.setTimeout(() => setMountB(true), 600);
    };
    if (a.readyState >= 2) onCanPlay();
    else a.addEventListener("loadeddata", onCanPlay, { once: true });
    return () => a.removeEventListener("loadeddata", onCanPlay);
  }, []);

  useEffect(() => {
    const a = videoA.current;
    const b = videoB.current;
    if (!a || !b || !mountB) return;

    const FADE_MS = 1100;
    const TRIGGER_AHEAD_S = 1.8;

    let rafId = 0;
    let topIsACurrent = true;
    let inFade = false;

    const beginCycle = () => {
      if (inFade) return;
      const top = topIsACurrent ? a : b;
      const next = topIsACurrent ? b : a;
      inFade = true;
      try {
        next.currentTime = 0;
      } catch {
        /* noop */
      }
      const playP = next.play();
      if (playP) playP.catch(() => undefined);

      window.setTimeout(() => {
        setTopOpacity(0);
        window.setTimeout(() => {
          try {
            top.pause();
            top.currentTime = 0;
          } catch {
            /* noop */
          }
          topIsACurrent = !topIsACurrent;
          setTopIsA(topIsACurrent);
          setTopOpacity(1);
          inFade = false;
        }, FADE_MS + 80);
      }, 100);
    };

    const tick = () => {
      const top = topIsACurrent ? a : b;
      const dur = top.duration;
      if (!inFade && dur && dur - top.currentTime <= TRIGGER_AHEAD_S) {
        beginCycle();
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [mountB]);

  const baseStyle = {
    transitionProperty: "opacity",
    transitionDuration: "1100ms",
    transitionTimingFunction: "linear",
  } as const;

  return (
    <>
      <video
        key={BG_VIDEO}
        ref={videoA}
        src={BG_VIDEO}
        muted
        autoPlay
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{
          ...baseStyle,
          opacity: topIsA ? topOpacity : 1,
          zIndex: topIsA ? 2 : 1,
        }}
      />
      {mountB && (
        <video
          key={`${BG_VIDEO}-b`}
          ref={videoB}
          src={BG_VIDEO}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{
            ...baseStyle,
            opacity: topIsA ? 1 : topOpacity,
            zIndex: topIsA ? 1 : 2,
          }}
        />
      )}
    </>
  );
}

export default function Lab() {
  // Very soft top fade so the video gently emerges from the previous module's dark area,
  // and a softer bottom fade so it dissolves into the cards area without a hard cut.
  const softMask =
    "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.25) 6%, rgba(0,0,0,0.7) 14%, rgba(0,0,0,1) 24%, rgba(0,0,0,1) 76%, rgba(0,0,0,0.55) 90%, transparent 100%)";

  return (
    <section
      id="lab"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* ── Section-wide pre-darken: gives a smooth transition coming in from the previous section ── */}
      <div
        className="absolute inset-x-0 top-0 z-[1] pointer-events-none"
        style={{
          height: "32%",
          background:
            "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--background)) 35%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* ── Video band (taller now, sits higher so more of the top is visible) ── */}
      <div
        className="absolute left-0 right-0 z-0 pointer-events-none"
        style={{
          top: "10%",
          height: "78%",
          WebkitMaskImage: softMask,
          maskImage: softMask,
        }}
      >
        <SeamlessVideo />
        {/* Slight horizontal darkening for headline legibility */}
        <div
          className="absolute inset-0"
          style={{
            zIndex: 3,
            background:
              "linear-gradient(90deg, rgba(12,11,10,0.45) 0%, rgba(12,11,10,0.15) 35%, rgba(12,11,10,0) 65%)",
          }}
        />
      </div>

      {/* ── Content layer ── */}
      <div className="relative z-10 min-h-screen flex flex-col px-6 md:px-12 lg:px-16 pt-20 pb-16">
        {/* Section label */}
        <Reveal variant="fade">
          <span className="font-tight text-[10px] font-semibold tracking-[0.36em] uppercase text-foreground/55">
            // Side Quests · The Lab
          </span>
        </Reveal>

        {/* Editorial headline — smaller, refined, two lines */}
        <Reveal variant="fade-up" delay={80}>
          <h2
            className="font-serif-i font-normal italic leading-[1.02] tracking-[-0.015em] text-white mt-4 max-w-[640px]"
            style={{ fontSize: "clamp(34px, 4.2vw, 64px)" }}
          >
            Small <span style={{ color: "hsl(var(--gold))" }}>toys,</span>
            <br />
            tender{" "}
            <span style={{ color: "hsl(var(--neon))" }}>experiments.</span>
          </h2>
        </Reveal>

        {/* ── Bottom cards row ── */}
        <div className="mt-auto">
          <Reveal variant="fade-up" delay={180}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
              {experiments.map((exp) => {
                const Icon = exp.icon;
                return (
                  <article
                    key={exp.name}
                    className="group relative flex flex-col cursor-pointer transition-all duration-500 hover:-translate-y-1"
                    style={{
                      background: "rgba(16,14,12,0.42)",
                      backdropFilter: "blur(28px) saturate(140%)",
                      WebkitBackdropFilter: "blur(28px) saturate(140%)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: "18px",
                      padding: "22px 22px 26px",
                      minHeight: "290px",
                    }}
                  >
                    {/* Inner highlight */}
                    <div
                      className="absolute inset-0 pointer-events-none rounded-[18px]"
                      style={{
                        boxShadow:
                          "inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.25)",
                      }}
                    />

                    {/* Top: icon + tag pills */}
                    <div className="flex items-start justify-between gap-3">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{
                          border: "1px solid rgba(255,255,255,0.16)",
                          background: "rgba(255,255,255,0.06)",
                        }}
                      >
                        <Icon
                          size={15}
                          className="text-white/75"
                          strokeWidth={1.6}
                        />
                      </div>

                      <div className="flex flex-wrap gap-1.5 justify-end max-w-[68%]">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-tight text-[9px] font-medium tracking-[0.06em] px-2.5 py-1 rounded-full whitespace-nowrap"
                            style={{
                              border: "1px solid rgba(255,255,255,0.16)",
                              color: "rgba(255,255,255,0.78)",
                              background: "rgba(255,255,255,0.05)",
                              backdropFilter: "blur(8px)",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Spacer (lets video show through) */}
                    <div className="flex-1 min-h-[60px]" />

                    {/* Bottom: title + description */}
                    <div>
                      <h3
                        className="font-serif-i font-normal italic leading-[1.05] mb-2.5 text-white"
                        style={{ fontSize: "clamp(22px, 1.9vw, 28px)" }}
                      >
                        {exp.name}
                      </h3>
                      <p className="font-tight text-[12.5px] leading-[1.65] font-light text-white/65">
                        {exp.desc}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
