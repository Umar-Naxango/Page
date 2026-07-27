import { ArrowUpRight, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import Reveal from "./Reveal";
import Stagger from "./Stagger";
import { useInView } from "@/hooks/use-in-view";

const meta = [
  { k: "Based in", v: "Beijing, CN", icon: MapPin },
  { k: "Local Time", v: "GMT +8", icon: Clock },
  { k: "Studio Since", v: "2017", icon: null },
  { k: "Languages", v: "中文 · English", icon: null },
];

const stats = [
  { value: "48", suffix: "+", label: "Shipped Projects" },
  { value: "12", suffix: "", label: "Design Awards" },
  { value: "09", suffix: "y", label: "Years of Craft" },
  { value: "26", suffix: "", label: "Studios & Brands" },
];

const skills = [
  { name: "AI & Generative Systems", pct: 92 },
  { name: "Product & UX Design", pct: 95 },
  { name: "Interaction & Motion", pct: 88 },
  { name: "Brand & Visual Identity", pct: 84 },
  { name: "Frontend Engineering", pct: 78 },
];

const timeline = [
  { year: "2026", role: "Independent Designer · Beijing", note: "Founded JIAXUAN STUDIO — designing AI-native products." },
  { year: "2023", role: "Design Lead · ByteDance", note: "Led the visual language for an internal AI tooling platform." },
  { year: "2020", role: "Senior Product Designer · Tencent", note: "Shipped four consumer products spanning music, social, and EdTech." },
  { year: "2017", role: "BFA · China Academy of Art", note: "Graduated with honors in Interaction Design." },
];

export default function About() {
  const skillsView = useInView<HTMLDivElement>();
  const [activeYear, setActiveYear] = useState(0);
  const active = timeline[activeYear];

  return (
    <section id="about" className="relative w-full overflow-hidden px-6 md:px-12 lg:px-16 py-28 md:py-36">
      <div className="max-w-[1200px] mx-auto">
        {/* === Corner index === */}
        <Reveal variant="fade">
          <div className="flex items-center gap-3 mb-12">
            <span className="font-tight text-[10px] font-semibold tracking-[0.32em] uppercase text-white/55">
              № 002 / Studio Notes · About
            </span>
            <span className="flex-1 h-px bg-white/10" />
          </div>
        </Reveal>

        {/* === Editorial headline === */}
        <Reveal variant="fade-up" delay={80}>
          <h2 className="text-white tracking-[-0.025em] leading-[0.95] mb-16 md:mb-24">
            <span className="font-tight font-medium text-[36px] md:text-[52px] lg:text-[68px]">
              I make{" "}
            </span>
            <span className="font-serif-i italic font-normal text-[38px] md:text-[56px] lg:text-[74px]"
                  style={{ color: "hsl(var(--neon))" }}>
              tools
            </span>
            <br />
            <span className="font-tight font-medium text-[36px] md:text-[52px] lg:text-[68px]">
              for the{" "}
            </span>
            <span className="font-serif-i italic font-normal text-[38px] md:text-[56px] lg:text-[74px]"
                  style={{ color: "hsl(var(--gold))" }}>
              imagination
            </span>
            <span className="font-tight font-medium text-[36px] md:text-[52px] lg:text-[68px]">.</span>
          </h2>
        </Reveal>

        {/* === Bio — full-width, no photo card === */}
        <Reveal variant="fade-up" delay={100}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 mb-24 md:mb-28">
            {/* Left: bio text */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-7">
                <span className="w-8 h-px bg-white/30" />
                <span className="font-tight text-[10px] font-semibold tracking-[0.4em] uppercase text-white/65">
                  Short Bio
                </span>
              </div>

              <p className="font-tight text-white/90 text-[19px] md:text-[22px] leading-[1.5] font-light tracking-[-0.005em] mb-8">
                I'm <span className="text-white font-medium">Jiaxuan</span> — an independent designer working
                at the seam where{" "}
                <span className="font-serif-i italic" style={{ color: "hsl(var(--gold))" }}>human craft</span>{" "}
                meets{" "}
                <span className="font-serif-i italic" style={{ color: "hsl(var(--neon))" }}>machine intelligence</span>.
              </p>

              <p className="font-tight text-white/55 text-[14px] md:text-[14.5px] leading-[1.8] font-light mb-10">
                For nine years I've designed identity systems, ambient interfaces and quiet
                products for studios across Asia. I care most about the slow hours behind the
                work — the sketching, the listening, the rewriting until a tool feels
                effortless to the hand.
              </p>

              <div className="relative pl-5 mb-12 border-l border-white/15">
                <p className="font-serif-i italic text-white/70 text-[14.5px] md:text-[15.5px] leading-[1.7] font-light">
                  Good design isn't an answer to a problem —
                  <br className="hidden md:block" />
                  it's a gentler way of asking the question.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button className="group flex items-center gap-2.5 rounded-full pl-5 pr-1.5 py-2 transition-all hover:scale-[1.03]"
                        style={{ background: "#fff" }}>
                  <span className="font-tight text-black text-[11px] font-semibold tracking-[0.18em] uppercase">
                    Download CV
                  </span>
                  <span className="w-7 h-7 rounded-full flex items-center justify-center bg-black">
                    <ArrowUpRight size={12} className="text-white group-hover:rotate-45 transition-transform" strokeWidth={2.5} />
                  </span>
                </button>
                <button className="font-tight text-white/80 hover:text-white text-[11px] font-semibold tracking-[0.18em] uppercase
                                   rounded-full px-5 py-2.5 transition-all"
                        style={{ border: "1px solid rgba(255,255,255,0.22)" }}>
                  Read Full Story
                </button>
              </div>
            </div>

            {/* Right: meta info */}
            <div className="lg:col-span-5">
              <div className="border border-white/10 rounded-xl overflow-hidden">
                {meta.map(({ k, v, icon: Icon }, i) => (
                  <div key={k} className="px-6 py-5 border-b border-white/08 last:border-b-0 flex items-center justify-between"
                       style={{ borderBottomColor: "rgba(255,255,255,0.07)" }}>
                    <span className="font-tight text-[9px] font-semibold tracking-[0.32em] uppercase text-white/35">
                      {String(i + 1).padStart(2, "0")} · {k}
                    </span>
                    <span className="font-tight text-white text-[13px] font-medium tracking-[-0.005em] flex items-center gap-1.5">
                      {Icon && <Icon size={12} style={{ color: "hsl(var(--neon))" }} />}
                      {v}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>


        {/* === Stats strip === */}
        <Reveal variant="fade-up">
          <div className="flex items-center gap-3 mb-7">
            <span className="font-tight text-[10px] font-semibold tracking-[0.32em] uppercase text-white/55">
              By the Numbers
            </span>
            <span className="flex-1 h-px bg-white/10" />
          </div>
        </Reveal>
        <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-px mb-24 md:mb-28"
                 style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.06)" }}>
          {stats.map(({ value, suffix, label }, i) => (
            <div key={label} className="p-6 md:p-8 relative group transition-colors hover:bg-white/[0.02]"
                 style={{ background: "rgba(22,19,16,1)" }}>
              <span className="font-tight text-[10px] font-semibold tracking-[0.3em] uppercase text-white/35 mb-3 block">
                {String(i + 1).padStart(2, "0")} ·{" "}
                <span className="font-serif-i italic font-normal text-white/55">{label}</span>
              </span>
              <div className="flex items-baseline gap-1">
                <span className="font-tight text-white text-[52px] md:text-[64px] font-medium leading-none tracking-[-0.03em]">
                  {value}
                </span>
                <span className="font-serif-i italic text-[24px] md:text-[30px]" style={{ color: "hsl(var(--neon))" }}>
                  {suffix || "."}
                </span>
              </div>
            </div>
          ))}
        </Stagger>

        {/* === Skills + Timeline === */}
        <div ref={skillsView.ref} className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* ===== Capabilities — Table of Contents ===== */}
          <Reveal variant="fade-right" className="lg:col-span-5">
            {/* Section heading */}
            <div className="flex items-baseline gap-4 mb-2">
              <span className="font-serif-i italic text-[44px] leading-none tracking-[-0.02em]"
                    style={{ color: "hsl(var(--gold) / 0.9)" }}>
                I.
              </span>
              <span className="font-tight text-[10px] font-medium tracking-[0.4em] uppercase text-white/45">
                Capabilities
              </span>
            </div>
            <p className="font-tight text-white/35 text-[12.5px] font-light tracking-wide mb-10 pl-12">
              Five disciplines, daily practice.
            </p>

            {/* TOC-style list */}
            <ul className="space-y-6">
              {skills.map((s, i) => (
                <li key={s.name} className="group">
                  <div className="flex items-baseline gap-4">
                    {/* serial */}
                    <span className="font-serif-i italic text-[13px] text-white/30 w-6 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {/* name */}
                    <span className="font-tight text-white text-[14.5px] font-normal tracking-[-0.005em]
                                     transition-colors duration-300 group-hover:text-white">
                      {s.name}
                    </span>
                    {/* dotted leader */}
                    <span className="flex-1 self-end mb-[5px] h-px"
                          style={{
                            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.28) 0.6px, transparent 1px)",
                            backgroundSize: "6px 1px",
                            backgroundRepeat: "repeat-x",
                          }} />
                    {/* italic % */}
                    <span className="font-serif-i italic text-white/85 text-[15px] tabular-nums leading-none">
                      {s.pct}
                      <span className="text-white/25 text-[10px] ml-0.5 tracking-wide">%</span>
                    </span>
                  </div>

                  {/* subtle progress hairline that grows in view */}
                  <div className="mt-2.5 ml-10 relative h-px">
                    <span className="absolute inset-y-0 left-0 right-0 bg-white/5" />
                    <span className="absolute inset-y-0 left-0"
                          style={{
                            width: skillsView.inView ? `${s.pct}%` : "0%",
                            background: "linear-gradient(to right, hsl(var(--gold) / 0.85), hsl(var(--gold) / 0.15))",
                            transition: `width 1.1s cubic-bezier(0.22,1,0.36,1) ${i * 90}ms`,
                          }} />
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* ===== Journey — interactive year ruler + focus card ===== */}
          <Reveal variant="fade-left" delay={120} className="lg:col-span-7">
            {/* Section heading */}
            <div className="flex items-baseline gap-4 mb-2">
              <span className="font-serif-i italic text-[44px] leading-none tracking-[-0.02em]"
                    style={{ color: "hsl(var(--gold) / 0.9)" }}>
                II.
              </span>
              <span className="font-tight text-[10px] font-medium tracking-[0.4em] uppercase text-white/45">
                Journey
              </span>
            </div>
            <p className="font-tight text-white/35 text-[12.5px] font-light tracking-wide mb-12 pl-12">
              Hover the years to scrub through a decade.
            </p>

            {/* === Year ruler === */}
            {(() => {
              // build a tick range from oldest year → now (1 tick per year)
              const years = timeline.map(t => parseInt(t.year, 10));
              const min = Math.min(...years);
              const max = Math.max(...years);
              const total = max - min + 1;
              const milestoneSet = new Set(years);
              const yearToIndex = (y: number) => timeline.findIndex(t => parseInt(t.year, 10) === y);

              return (
                <div className="relative mb-12">
                  {/* baseline */}
                  <div className="relative h-[58px]">
                    <span className="absolute left-0 right-0 top-[34px] h-px bg-white/12" />

                    {/* ticks */}
                    <div className="absolute inset-0 flex">
                      {Array.from({ length: total }).map((_, i) => {
                        const y = min + i;
                        const isMilestone = milestoneSet.has(y);
                        const tIdx = yearToIndex(y);
                        const isActive = isMilestone && tIdx === activeYear;
                        return (
                          <button
                            key={y}
                            type="button"
                            disabled={!isMilestone}
                            onMouseEnter={() => isMilestone && setActiveYear(tIdx)}
                            onFocus={() => isMilestone && setActiveYear(tIdx)}
                            onClick={() => isMilestone && setActiveYear(tIdx)}
                            className="flex-1 relative h-full group/tick outline-none"
                            aria-label={isMilestone ? `${y} — ${timeline[tIdx].role}` : `${y}`}
                          >
                            {/* tick line */}
                            <span
                              className="absolute left-1/2 -translate-x-1/2 top-[26px] w-px transition-all duration-300"
                              style={{
                                height: isMilestone ? (isActive ? "22px" : "16px") : "8px",
                                background: isActive
                                  ? "hsl(var(--gold))"
                                  : isMilestone
                                    ? "rgba(255,255,255,0.55)"
                                    : "rgba(255,255,255,0.18)",
                              }}
                            />
                            {/* milestone dot for active */}
                            {isActive && (
                              <span
                                className="absolute left-1/2 -translate-x-1/2 top-[30px] w-[7px] h-[7px] rounded-full"
                                style={{
                                  background: "hsl(var(--gold))",
                                  boxShadow: "0 0 0 4px hsl(30 7% 6%), 0 0 0 5px hsl(var(--gold) / 0.35)",
                                  transform: "translate(-50%, -50%)",
                                }}
                              />
                            )}
                            {/* milestone label */}
                            {isMilestone && (
                              <span
                                className="absolute left-1/2 -translate-x-1/2 top-0 font-serif-i italic leading-none transition-all duration-300"
                                style={{
                                  fontSize: isActive ? "20px" : "13px",
                                  color: isActive ? "hsl(var(--gold))" : "rgba(255,255,255,0.55)",
                                }}
                              >
                                {y}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* range caption */}
                  <div className="mt-3 flex items-center justify-between font-tight text-[10px] tracking-[0.3em] uppercase text-white/30">
                    <span>{min}</span>
                    <span className="font-serif-i italic normal-case tracking-normal text-[11px] text-white/40">
                      {timeline.length} milestones · {total} years
                    </span>
                    <span>{max}</span>
                  </div>
                </div>
              );
            })()}

            {/* === Focus card === */}
            <div
              key={active.year}
              className="relative overflow-hidden animate-fade-in-up"
              style={{
                animationDuration: "400ms",
                animationFillMode: "both",
              }}
            >
              <div className="grid grid-cols-12 gap-6 items-center">
                {/* left: huge outlined year */}
                <div className="col-span-12 md:col-span-4">
                  {activeYear === 0 && (
                    <div className="mb-2 font-tight text-[9.5px] font-medium tracking-[0.32em] uppercase"
                         style={{ color: "hsl(var(--gold))" }}>
                      ◇ Now
                    </div>
                  )}
                  <span
                    className="font-serif-i italic block leading-[0.85] tracking-[-0.04em]"
                    style={{
                      fontSize: "112px",
                      color: "transparent",
                      WebkitTextStroke: "1px hsl(var(--gold) / 0.55)",
                    }}
                  >
                    {active.year}
                  </span>
                </div>

                {/* right: chapter content */}
                <div className="col-span-12 md:col-span-8">
                  <div className="font-tight text-[10px] font-medium tracking-[0.4em] uppercase text-white/35 mb-3">
                    Chapter 0{timeline.length - activeYear}
                  </div>
                  <h4 className="font-tight text-white text-[19px] md:text-[21px] font-normal tracking-[-0.012em] leading-[1.3] mb-3">
                    {active.role}
                  </h4>
                  <p className="font-tight text-white/55 text-[13.5px] font-light leading-[1.8] max-w-[440px] mb-6">
                    {active.note}
                  </p>

                  {/* meta strip */}
                  <div className="flex items-center gap-4 text-white/35">
                    <span className="font-tight text-[10px] tracking-[0.3em] uppercase">
                      {String(activeYear + 1).padStart(2, "0")} / {String(timeline.length).padStart(2, "0")}
                    </span>
                    <span className="flex-1 h-px bg-white/10" />
                    <div className="flex items-center gap-1">
                      {timeline.map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setActiveYear(i)}
                          aria-label={`Show ${timeline[i].year}`}
                          className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                          style={{
                            background: i === activeYear ? "hsl(var(--gold))" : "rgba(255,255,255,0.25)",
                            transform: i === activeYear ? "scale(1.4)" : "scale(1)",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
