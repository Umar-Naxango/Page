"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const BG_VIDEO = "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100059067/c72b493c-8e53-4b.mp4";
const POSTER = "/hero-poster.svg";

/** Two stacked videos. Bottom is held at opacity 1, only the top fades 1 → 0.
 *  No brightness dip, and the visual seam of the source video is hidden because
 *  the next loop is already fully visible underneath before the top disappears. */
function SeamlessVideo() {
  const videoA = useRef<HTMLVideoElement>(null);
  const videoB = useRef<HTMLVideoElement>(null);
  const [topIsA, setTopIsA] = useState(true);
  const [topOpacity, setTopOpacity] = useState(1);
  const [mountB, setMountB] = useState(false);

  // Start playback and mount the second buffer.
  useEffect(() => {
    const a = videoA.current;
    if (!a) return;
    let cancelled = false;

    const tryPlay = () => {
      a.play().catch(() => undefined);
      window.setTimeout(() => !cancelled && setMountB(true), 900);
    };

    if (a.readyState >= 2) tryPlay();
    else a.addEventListener("loadeddata", tryPlay, { once: true });

    return () => {
      cancelled = true;
      a.removeEventListener("loadeddata", tryPlay);
    };
  }, []);

  useEffect(() => {
    const a = videoA.current;
    const b = videoB.current;
    if (!a || !b || !mountB) return;

    const FADE_MS = 700;
    const TRIGGER_AHEAD_S = 0.55;

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

      // Wait until the bottom video has actually painted a fresh frame.
      window.setTimeout(() => {
        setTopOpacity(0); // only the top fades; bottom stays at 1 → constant luminance.
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
    transitionDuration: "700ms",
    transitionTimingFunction: "linear",
  } as const;

  return (
    <>
      <video
        key={BG_VIDEO}
        ref={videoA}
        src={BG_VIDEO}
        poster={POSTER}
        muted
        autoPlay
        playsInline
        preload="auto"
        fetchPriority="high"
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

export default function PortfolioHero() {
  return (
    <section id="home" className="relative w-full h-screen min-h-[760px] overflow-hidden">
      {/* === FULL-BLEED BACKGROUND === */}
      <div className="absolute inset-0 z-0">
        <SeamlessVideo />
        {/* 15% black overlay on the video */}
        <div className="absolute inset-0 bg-black/15 pointer-events-none z-10" />
        {/* Subtle vignette — strong at bottom for legibility, very light on top */}
        <div className="absolute inset-0 z-10 pointer-events-none"
             style={{
               background:
                 "radial-gradient(ellipse at 50% 35%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.25) 60%, rgba(18,16,14,0.85) 100%)",
             }} />
        <div className="absolute inset-x-0 bottom-0 h-[40%] z-10 pointer-events-none"
             style={{
               background:
                 "linear-gradient(to bottom, transparent 0%, rgba(18,16,14,0.55) 60%, rgba(18,16,14,0.98) 100%)",
             }} />
        {/* Subtle film grain feel */}
        <div className="absolute inset-0 mix-blend-overlay opacity-[0.07] pointer-events-none z-10"
             style={{
               background:
                 "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/></svg>\")",
             }} />
      </div>

      {/* === EDITORIAL FRAME — corner labels === */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Bottom-left tagline */}
        <div className="absolute bottom-24 md:bottom-28 left-6 md:left-12 lg:left-16 hidden md:flex items-end gap-3
                        animate-fade-in-up" style={{ animationDelay: "0.9s", animationFillMode: "both" }}>
          <span className="w-1.5 h-1.5 rounded-full mb-1.5"
                style={{ background: "hsl(var(--neon))", boxShadow: "0 0 6px hsl(var(--neon))" }} />
          <div>
            <div className="font-tight text-[10px] font-semibold tracking-[0.3em] uppercase text-white/55">
              Currently Open · Q3 2026
            </div>
            <div className="font-tight text-[11px] text-white/35 tracking-wide mt-1">
              Selected freelance &amp; long-form collaborations
            </div>
          </div>
        </div>

        {/* Bottom-right scroll cue */}
        <div className="absolute bottom-24 md:bottom-28 right-6 md:right-12 lg:right-16 flex items-center gap-3
                        animate-fade-in-up" style={{ animationDelay: "1s", animationFillMode: "both" }}>
          <span className="font-tight text-[10px] tracking-[0.4em] uppercase text-white/55">Scroll</span>
          <div className="relative w-14 h-px bg-white/15 overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-1/3 animate-marquee-line"
                 style={{ background: "hsl(var(--neon))", boxShadow: "0 0 6px hsl(var(--neon))" }} />
          </div>
        </div>
      </div>

      {/* === CENTERED EDITORIAL HEADLINE === */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-7 animate-fade-in-up"
             style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
          <span className="w-8 h-px bg-white/40" />
          <span className="font-tight text-[10px] font-semibold tracking-[0.5em] uppercase text-white/75">
            Designer · Beijing
          </span>
          <span className="w-8 h-px bg-white/40" />
        </div>

        {/* Headline — two lines, mixed typography */}
        <h1 className="animate-fade-in-up"
            style={{ animationDelay: "0.55s", animationFillMode: "both" }}>
          <span className="block font-tight font-medium text-white tracking-[-0.02em]
                           text-[44px] md:text-[68px] lg:text-[88px] leading-[0.95]">
            Crafting visual <span className="font-serif-i font-normal italic" style={{ color: "hsl(var(--gold))" }}>systems</span>
          </span>
          <span className="block font-tight font-medium text-white tracking-[-0.02em]
                           text-[44px] md:text-[68px] lg:text-[88px] leading-[0.95] mt-1 md:mt-2">
            for the <span className="font-serif-i font-normal italic" style={{ color: "hsl(var(--neon))" }}>AI&nbsp;era</span>.
          </span>
        </h1>

        {/* Subline */}
        <p className="font-tight text-white/65 text-[13px] md:text-[15px] font-light tracking-wide leading-relaxed
                      mt-9 max-w-[480px] animate-fade-in-up"
           style={{ animationDelay: "0.75s", animationFillMode: "both" }}>
          I'm <span className="text-white font-medium">Jiaxuan</span> — designing identity, product
          and motion at the seam where craftsmanship meets generative tools.
        </p>

        {/* CTA pair */}
        <div className="flex items-center gap-3 mt-10 animate-fade-in-up"
             style={{ animationDelay: "0.9s", animationFillMode: "both" }}>
          <button className="group flex items-center gap-2.5 rounded-full pl-5 pr-2 py-2 transition-all hover:scale-[1.03]"
                  style={{ background: "#fff" }}>
            <span className="text-black text-[12px] font-semibold tracking-wide">View Selected Work</span>
            <span className="w-7 h-7 rounded-full flex items-center justify-center bg-black">
              <ArrowUpRight size={13} className="text-white group-hover:rotate-45 transition-transform" />
            </span>
          </button>
          <button className="font-tight text-white/80 hover:text-white text-[12px] font-medium tracking-wide
                             rounded-full px-5 py-2.5 border border-white/20 hover:border-white/45 transition-all">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
}
