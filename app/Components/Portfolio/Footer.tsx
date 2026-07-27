import { ArrowUp } from "lucide-react";

const cols = [
  {
    title: "Navigate",
    links: ["Home", "Work", "Studio", "Lab", "Contact"],
  },
  {
    title: "Works",
    links: ["Memory Galaxy", "Time Capsule", "AI Crystal", "Value Future", "Echo Bloom"],
  },
  {
    title: "Resources",
    links: ["Newsletter", "Press Kit", "CV / Résumé", "Wallpapers", "RSS Feed"],
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full px-6 md:px-12 lg:px-16 pt-24 pb-10 overflow-hidden"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-[1200px] mx-auto">
        {/* Top corner index */}
        <div className="flex items-center gap-3 mb-14">
          <span className="font-tight text-[10px] font-semibold tracking-[0.32em] uppercase text-white/55">
            № 007 / End of Page · Footer
          </span>
          <span className="flex-1 h-px bg-white/10" />
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-20">
          <div className="col-span-2 md:col-span-3">
            <div className="flex items-center gap-3 mb-5">
              <span className="relative flex items-center justify-center w-9 h-9 rounded-full overflow-hidden"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.18)",
                    }}>
                <span className="font-serif-i italic text-[18px] leading-none"
                      style={{ color: "hsl(var(--gold))", transform: "translateY(-1px)" }}>
                  J
                </span>
                <span className="absolute -bottom-px left-1/2 -translate-x-1/2 w-2 h-px"
                      style={{ background: "hsl(var(--neon))" }} />
              </span>
              <div className="flex flex-col leading-none">
                <span className="font-tight text-[13px] font-semibold tracking-[0.18em] text-white">
                  JIAXUAN
                </span>
                <span className="font-tight text-[9px] tracking-[0.32em] uppercase text-white/45 mt-1">
                  Design Studio
                </span>
              </div>
            </div>
            <p className="font-tight text-white/55 text-[13px] leading-[1.7] font-light max-w-sm mb-6">
              An independent designer building{" "}
              <span className="font-serif-i italic" style={{ color: "hsl(var(--gold))" }}>tools</span>{" "}
              for the imagination. Based in Beijing, working with teams everywhere.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
                 style={{ border: "1px solid rgba(255,255,255,0.12)" }}>
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping"
                      style={{ background: "hsl(var(--neon))" }} />
                <span className="relative inline-flex w-1.5 h-1.5 rounded-full"
                      style={{ background: "hsl(var(--neon))" }} />
              </span>
              <span className="font-tight text-[10px] tracking-[0.22em] uppercase font-semibold text-white/70">
                Available · Q3 2026
              </span>
            </div>
          </div>

          {cols.map((c, idx) => (
            <div key={c.title}>
              <h4 className="font-tight text-[10px] tracking-[0.3em] uppercase font-semibold text-white/45 mb-5">
                0{idx + 1} · {c.title}
              </h4>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="font-tight text-white/65 hover:text-white text-[13px] font-light transition-colors inline-flex items-baseline gap-2 group">
                      <span className="font-serif-i italic text-[12px] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                            style={{ color: "hsl(var(--neon))" }}>/</span>
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Massive wordmark — auto-fits the container, never clips */}
        <div className="relative mb-12">
          <svg
            viewBox="0 0 1400 210"
            preserveAspectRatio="xMidYMid meet"
            overflow="visible"
            className="w-full h-auto block"
            aria-hidden
          >
            <defs>
              <linearGradient id="wm-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(255,255,255,0.10)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
              </linearGradient>
            </defs>
            <text
              x="0"
              y="180"
              fontSize="220"
              textLength="1400"
              lengthAdjust="spacingAndGlyphs"
              dominantBaseline="alphabetic"
            >
              <tspan
                fontFamily="'Inter Tight', sans-serif"
                fontWeight={500}
                letterSpacing="-6"
                fill="url(#wm-fill)"
              >
                JIAXUAN
              </tspan>
              <tspan
                fontFamily="'Instrument Serif', serif"
                fontStyle="italic"
                fontWeight={400}
                fill="hsl(45 90% 65% / 0.4)"
              >
                .studio
              </tspan>
            </text>
          </svg>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-7"
             style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="font-tight text-white/40 text-[11px] font-light tracking-wide">
            © 2026 JIAXUAN STUDIO · All rights reserved · Crafted in{" "}
            <span className="font-serif-i italic" style={{ color: "hsl(var(--gold) / 0.7)" }}>Beijing</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="font-tight text-white/45 hover:text-white text-[11px] tracking-wide transition-colors">Privacy</a>
            <a href="#" className="font-tight text-white/45 hover:text-white text-[11px] tracking-wide transition-colors">Colophon</a>
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="flex items-center gap-2 group">
              <span className="font-tight text-white/65 group-hover:text-white text-[11px] tracking-[0.22em] uppercase font-semibold transition-colors">
                Back to top
              </span>
              <span className="w-7 h-7 rounded-full flex items-center justify-center transition-all"
                    style={{ background: "hsl(var(--neon))" }}>
                <ArrowUp size={11} className="text-black" strokeWidth={2.5} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
