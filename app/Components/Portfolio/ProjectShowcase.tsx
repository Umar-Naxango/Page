"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import Reveal from "./Reveal";

const allProjects = [
  {
    id: 1,
    title: "Memory Galaxy",
    subtitle: "AI · Spatial Archive",
    year: "2026",
    cat: "AI",
    tags: ["AI", "WebGL", "Three.js"],
    desc: "A spatial memory archive that turns photographs into navigable star systems through neural embeddings — quiet, slow, and entirely your own.",
    cover: "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100059067/proj_cover_memory_1797b742.png",
  },
  {
    id: 2,
    title: "Time Capsule",
    subtitle: "Interactive · Story",
    year: "2025",
    cat: "Interactive",
    tags: ["Generative", "Motion", "Story"],
    desc: "Send messages to your future self inside hand-crafted micro-worlds, rendered in real-time and unsealed only by patience.",
    cover: "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100059067/proj_cover_capsule_b062ad81.png",
  },
  {
    id: 3,
    title: "AI Crystal",
    subtitle: "Product · Ambient",
    year: "2025",
    cat: "Product",
    tags: ["Hardware", "AI", "Ambient"],
    desc: "A desktop object that visualises the mood of your conversations through refracted light — a quiet barometer for attention.",
    cover: "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100059067/proj_cover_crystal_d23e0190.png",
  },
  {
    id: 5,
    title: "Echo Bloom",
    subtitle: "Brand · Generative",
    year: "2024",
    cat: "Brand",
    tags: ["Identity", "Type", "Print"],
    desc: "A generative identity system for a sound-healing studio — every visit produces its own bloom, no two business cards alike.",
    cover: "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100059067/proj_cover_bloom_d4fc051e.png",
  },
  {
    id: 6,
    title: "Nomad OS",
    subtitle: "Product · Travel",
    year: "2024",
    cat: "Product",
    tags: ["iOS", "Travel", "AI"],
    desc: "An AI travel companion that drafts itineraries inside a calm, paper-textured interface — built for the slow traveller.",
    cover: "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100059067/proj_cover_nomad_c00ddd36.png",
  },
];

export default function ProjectsShowcase() {
  const [focusId, setFocusId] = useState(1);

  const list = allProjects;
  const focus = list.find((p) => p.id === focusId) ?? list[0];

  return (
    <section id="projects" className="relative w-full py-20 md:py-24 px-6 md:px-12 lg:px-16 overflow-hidden">
      {/* Soft atmosphere */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.05]"
             style={{ background: "hsl(var(--neon))" }} />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.04]"
             style={{ background: "hsl(var(--gold))" }} />
      </div>

      <div className="max-w-[1200px] mx-auto">
        {/* Corner index */}
        <Reveal variant="fade">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-tight text-[10px] font-semibold tracking-[0.32em] uppercase text-white/55">
              № 003 / Selected Works · 2024 — 2026
            </span>
            <span className="flex-1 h-px bg-white/10" />
          </div>
        </Reveal>

        {/* === Editorial headline === */}
        <Reveal variant="fade-up" delay={80}>
          <h2 className="text-white tracking-[-0.025em] leading-[0.95] mb-16 md:mb-24">
            <span className="font-tight font-medium text-[36px] md:text-[52px] lg:text-[68px]">
              An archive of
            </span>
            <br />
            <span className="font-serif-i italic font-normal text-[38px] md:text-[56px] lg:text-[74px]"
                  style={{ color: "hsl(var(--gold))" }}>
              quiet
            </span>{" "}
            <span className="font-serif-i italic font-normal text-[38px] md:text-[56px] lg:text-[74px]"
                  style={{ color: "hsl(var(--neon))" }}>
              obsessions
            </span>
            <span className="font-tight font-medium text-[36px] md:text-[52px] lg:text-[68px]">.</span>
          </h2>
        </Reveal>

        {/* === Editorial focus + index === */}
        <Reveal variant="fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">

            {/* === LEFT — big focus card === */}
            <div className="lg:col-span-7 relative">
              {/* category label sitting above frame */}
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-tight text-[10px] font-semibold tracking-[0.35em] uppercase text-white/40">
                  Now showing
                </span>
                <span className="flex-1 h-px bg-white/10" />
                <span className="font-serif-i italic text-white/40 text-[13px]">
                  {String(list.findIndex((p) => p.id === focus.id) + 1).padStart(2, "0")} / {String(list.length).padStart(2, "0")}
                </span>
              </div>

              {/* image */}
              <div key={focus.id}
                   className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-[2px] group cursor-pointer animate-fade-in"
                   style={{
                     border: "1px solid rgba(255,255,255,0.06)",
                     animationDuration: "500ms",
                     animationFillMode: "both",
                   }}>
                <img src={focus.cover}
                     alt={focus.title}
                     className="w-full h-full object-cover transition-transform duration-[2200ms] ease-out group-hover:scale-[1.04]"
                     style={{ filter: "saturate(0.92) brightness(0.95)" }} />

                {/* atmospheric gradient */}
                <div className="absolute inset-0 pointer-events-none"
                     style={{
                       background:
                         "linear-gradient(to top, rgba(18,16,14,0.95) 0%, rgba(18,16,14,0.45) 38%, rgba(18,16,14,0.05) 70%, rgba(18,16,14,0.25) 100%)",
                     }} />

                {/* corner ticks */}
                <span className="absolute top-3 left-3 w-3 h-3 border-l border-t border-white/40" />
                <span className="absolute top-3 right-3 w-3 h-3 border-r border-t border-white/40" />
                <span className="absolute bottom-3 left-3 w-3 h-3 border-l border-b border-white/40" />
                <span className="absolute bottom-3 right-3 w-3 h-3 border-r border-b border-white/40" />

                {/* Top — index + year */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-white/75">
                  <span className="font-tight text-[10px] font-semibold tracking-[0.32em] uppercase">
                    Fig. {String(focus.id).padStart(2, "0")}
                  </span>
                  <span className="font-serif-i italic text-[15px]" style={{ color: "hsl(var(--gold))" }}>
                    {focus.year}
                  </span>
                </div>

                {/* Bottom caption */}
                <div className="absolute left-5 right-5 bottom-5">
                  <div className="font-tight text-[10px] font-semibold tracking-[0.35em] uppercase text-white/55 mb-1.5">
                    {focus.subtitle}
                  </div>
                  <h3 className="text-white tracking-[-0.012em] leading-[1.05]">
                    <span className="font-tight font-medium text-[22px] md:text-[28px] lg:text-[30px]">
                      {focus.title}
                    </span>
                    <span className="font-serif-i italic ml-2 text-[16px] md:text-[18px]"
                          style={{ color: "hsl(var(--gold))" }}>
                      /{String(focus.id).padStart(2, "0")}
                    </span>
                  </h3>
                  <p className="font-tight text-white/70 text-[12.5px] md:text-[13px] font-light leading-[1.6] mt-2 max-w-[480px]">
                    {focus.desc}
                  </p>

                  <div className="mt-3 flex items-end justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {focus.tags.map((t) => (
                        <span key={t}
                              className="font-tight text-[9.5px] font-medium tracking-[0.18em] uppercase text-white/70 px-2 py-0.5 rounded-md"
                              style={{ border: "1px solid rgba(255,255,255,0.18)", backdropFilter: "blur(8px)" }}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <button className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-105"
                            style={{ background: "hsl(var(--neon))" }}>
                      <ArrowUpRight size={14} className="text-black" strokeWidth={2.5} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* === RIGHT — vertical index === */}
            <div className="lg:col-span-5">
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-tight text-[10px] font-semibold tracking-[0.35em] uppercase text-white/40">
                  Index
                </span>
                <span className="flex-1 h-px bg-white/10" />
                <span className="font-serif-i italic text-white/40 text-[12.5px]">
                  hover to preview
                </span>
              </div>

              <ul className="divide-y divide-white/8" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                {list.map((p, i) => {
                  const isFocus = p.id === focus.id;
                  return (
                    <li key={p.id}>
                      <button
                        type="button"
                        onMouseEnter={() => setFocusId(p.id)}
                        onFocus={() => setFocusId(p.id)}
                        onClick={() => setFocusId(p.id)}
                        className="w-full text-left grid grid-cols-12 items-center gap-3 py-2.5 group/row outline-none transition-colors"
                        style={{ background: isFocus ? "rgba(255,255,255,0.025)" : "transparent" }}
                      >
                        {/* number */}
                        <span className="col-span-2 font-serif-i italic text-[16px] leading-none tabular-nums"
                              style={{ color: isFocus ? "hsl(var(--gold))" : "rgba(255,255,255,0.35)", transition: "color 280ms" }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        {/* mini thumb */}
                        <span className="col-span-3 relative block aspect-[5/4] overflow-hidden rounded-[2px]"
                              style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                          <img src={p.cover} alt=""
                               className="w-full h-full object-cover"
                               style={{
                                 transform: isFocus ? "scale(1.08)" : "scale(1)",
                                 filter: isFocus ? "saturate(1) brightness(1)" : "saturate(0.55) brightness(0.6)",
                                 transition: "transform 700ms cubic-bezier(0.22,1,0.36,1), filter 380ms ease",
                               }} />
                        </span>

                        {/* title + sub */}
                        <span className="col-span-5 min-w-0">
                          <span className="block font-tight text-[13.5px] md:text-[14px] font-medium tracking-[-0.005em] truncate"
                                style={{ color: isFocus ? "#fff" : "rgba(255,255,255,0.7)", transition: "color 280ms" }}>
                            {p.title}
                          </span>
                          <span className="block font-tight text-[9.5px] font-medium tracking-[0.28em] uppercase text-white/35 mt-1">
                            {p.subtitle}
                          </span>
                        </span>

                        {/* year + arrow */}
                        <span className="col-span-2 flex items-center justify-end gap-2 text-white/45">
                          <span className="font-tight text-[11px] tabular-nums tracking-wide">
                            {p.year}
                          </span>
                          <ArrowUpRight
                            size={12}
                            strokeWidth={2}
                            className="transition-all duration-300"
                            style={{
                              opacity: isFocus ? 1 : 0,
                              transform: isFocus ? "translate(0,0)" : "translate(-4px, 4px)",
                              color: "hsl(var(--gold))",
                            }}
                          />
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-3 flex items-center justify-between font-tight text-[10px] tracking-[0.3em] uppercase text-white/30">
                <span>Total {String(list.length).padStart(2, "0")} works</span>
                <span className="font-serif-i italic normal-case tracking-normal text-[11.5px] text-white/40">
                  curated selection
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal variant="fade-up" className="mt-10 flex justify-center">
          <button className="group flex items-center gap-3 rounded-full pl-6 pr-2 py-1.5 transition-all hover:bg-white"
                  style={{ border: "1px solid rgba(255,255,255,0.2)" }}>
            <span className="font-tight text-white text-[11px] font-semibold tracking-[0.18em] uppercase group-hover:text-black transition-colors">
              View Full Archive
            </span>
            <span className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "hsl(var(--neon))" }}>
              <ArrowUpRight size={13} className="text-black group-hover:rotate-45 transition-transform" strokeWidth={2.5} />
            </span>
          </button>
        </Reveal>
      </div>
    </section>
  );
}
