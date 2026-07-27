"use client";

import { ArrowUpRight, Circle, Sparkles, Link, MessageCircle } from "lucide-react";
import { useRef, useState } from "react";
import Reveal from "./Reveal";
import Stagger from "./Stagger";

const socials = [
  { icon: Circle, label: "GitHub", handle: "@jiaxuan" },
  { icon: Sparkles, label: "X / Twitter", handle: "@jiaxuan_design" },
  { icon: Link, label: "LinkedIn", handle: "in/jiaxuan" },
  { icon: MessageCircle, label: "Instagram", handle: "@jiaxuan.studio" },
];

export default function Contact() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [pointer, setPointer] = useState({ x: 50, y: 50, active: false });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const r = card.getBoundingClientRect();
    setPointer({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
      active: true,
    });
  };
  const handleLeave = () =>
    setPointer((p) => ({ ...p, active: false }));

  return (
    <section id="contact" className="relative w-full py-32 md:py-40 px-6 md:px-12 lg:px-16 overflow-hidden">
      {/* Atmospheric glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full blur-3xl opacity-[0.07]"
             style={{ background: "hsl(var(--neon))" }} />
      </div>

      <div className="max-w-[1180px] mx-auto">
        {/* Corner index */}
        <Reveal variant="fade">
          <div className="flex items-center gap-3 mb-12">
            <span className="font-tight text-[10px] font-semibold tracking-[0.32em] uppercase text-white/55">
              № 006 / Get in Touch · Contact
            </span>
            <span className="flex-1 h-px bg-white/10" />
          </div>
        </Reveal>

        {/* Big editorial headline */}
        <Reveal variant="blur-in" className="text-center mb-14" duration={1100}>
          <div className="flex items-center justify-center gap-3 mb-7">
            <span className="w-8 h-px bg-white/30" />
            <span className="font-tight text-[10px] font-semibold tracking-[0.5em] uppercase text-white/75">
              Let's Build Something
            </span>
            <span className="w-8 h-px bg-white/30" />
          </div>

          <h2 className="font-tight font-medium text-white tracking-[-0.025em]
                         text-[36px] md:text-[52px] lg:text-[68px] leading-[0.95]">
            Have an{" "}
            <span className="font-serif-i font-normal italic" style={{ color: "hsl(var(--gold))" }}>
              idea
            </span>
            <br />
            quietly{" "}
            <span className="font-serif-i font-normal italic" style={{ color: "hsl(var(--neon))" }}>
              brewing
            </span>
            ?
          </h2>

          <p className="font-tight text-white/55 text-[14px] md:text-[15px] font-light leading-relaxed max-w-lg mx-auto mt-8">
            I take on a small number of collaborations each season — from one-week sprints to
            multi-month builds. Send a note and let's see if we fit.
          </p>
        </Reveal>

        {/* Email CTA — editorial card with pointer-following spotlight */}
        <Reveal variant="zoom" delay={150}>
          <div
            ref={cardRef}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            className="group/card relative rounded-3xl p-8 md:p-12 mb-12 overflow-hidden cursor-crosshair"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.025) 0%, rgba(255,255,255,0.005) 100%)",
            }}
          >
            {/* Static ambient blobs */}
            <div
              className="absolute -top-32 -right-32 w-72 h-72 rounded-full blur-3xl opacity-25 transition-opacity duration-700"
              style={{
                background: "hsl(var(--neon))",
                opacity: pointer.active ? 0.08 : 0.25,
              }}
            />
            <div
              className="absolute -bottom-32 -left-32 w-72 h-72 rounded-full blur-3xl opacity-15 transition-opacity duration-700"
              style={{
                background: "hsl(var(--gold))",
                opacity: pointer.active ? 0.06 : 0.15,
              }}
            />

            {/* Pointer-following neon spotlight */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-500"
              style={{
                opacity: pointer.active ? 1 : 0,
                background: `radial-gradient(420px circle at ${pointer.x}% ${pointer.y}%, hsl(76 100% 50% / 0.18), transparent 60%)`,
              }}
            />
            {/* Trailing gold halo offset for depth */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-700 mix-blend-screen"
              style={{
                opacity: pointer.active ? 1 : 0,
                background: `radial-gradient(260px circle at ${pointer.x}% ${pointer.y}%, hsl(45 90% 65% / 0.14), transparent 65%)`,
              }}
            />
            {/* Hairline grid that lights up under cursor */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-500"
              style={{
                opacity: pointer.active ? 0.5 : 0,
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
                backgroundSize: "44px 44px",
                WebkitMaskImage: `radial-gradient(320px circle at ${pointer.x}% ${pointer.y}%, black, transparent 70%)`,
                maskImage: `radial-gradient(320px circle at ${pointer.x}% ${pointer.y}%, black, transparent 70%)`,
              }}
            />
            {/* Inner luminous border on hover */}
            <div
              className="absolute inset-0 pointer-events-none rounded-3xl transition-opacity duration-500"
              style={{
                opacity: pointer.active ? 1 : 0,
                background: `radial-gradient(600px circle at ${pointer.x}% ${pointer.y}%, hsl(76 100% 50% / 0.5), transparent 40%)`,
                WebkitMask:
                  "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                padding: "1px",
              }}
            />

            <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{
                      background: "hsl(var(--neon))",
                      boxShadow: "0 0 6px hsl(var(--neon))",
                    }}
                  />
                  <span className="font-tight text-[10px] tracking-[0.32em] uppercase font-semibold text-white/55">
                    Drop a line — Reply within 48h
                  </span>
                </div>
                <a
                  href="mailto:hi@jiaxuan.studio"
                  className="font-tight text-white text-[28px] md:text-[44px] lg:text-[52px] font-medium tracking-[-0.02em] hover:opacity-90 transition-opacity inline-flex items-center gap-3 group"
                >
                  hi@
                  <span
                    className="font-serif-i italic font-normal"
                    style={{ color: "hsl(var(--gold))" }}
                  >
                    jiaxuan
                  </span>
                  .studio
                  <ArrowUpRight
                    size={28}
                    className="group-hover:rotate-45 transition-transform"
                    style={{ color: "hsl(var(--neon))" }}
                  />
                </a>
              </div>
              <button
                className="flex-shrink-0 group flex items-center gap-2.5 rounded-full pl-5 pr-1.5 py-2 transition-all hover:scale-[1.03]"
                style={{ background: "#fff" }}
              >
                <span className="font-tight text-black text-[12px] font-semibold tracking-[0.12em] uppercase">
                  Start a Project
                </span>
                <span className="w-7 h-7 rounded-full flex items-center justify-center bg-black">
                  <ArrowUpRight
                    size={13}
                    className="text-white group-hover:rotate-45 transition-transform"
                  />
                </span>
              </button>
            </div>
          </div>
        </Reveal>

        {/* Socials grid — editorial row */}
        <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-px"
                 style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.06)" }}>
          {socials.map(({ icon: Icon, label, handle }, i) => (
            <a key={label} href="#"
               className="group p-6 flex items-center justify-between transition-all hover:bg-white/[0.02]"
               style={{ background: "rgba(22,19,16,1)" }}>
              <div>
                <div className="font-tight text-[9.5px] tracking-[0.3em] uppercase font-semibold text-white/45 mb-1.5">
                  0{i + 1} · {label}
                </div>
                <div className="font-tight text-white text-[13.5px] font-medium tracking-[-0.005em]">
                  {handle}
                </div>
              </div>
              <span className="w-8 h-8 rounded-full flex items-center justify-center transition-all group-hover:rotate-[20deg]"
                    style={{ border: "1px solid rgba(255,255,255,0.15)" }}>
                <Icon size={13} className="text-white/65 group-hover:text-white transition-colors" />
              </span>
            </a>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
