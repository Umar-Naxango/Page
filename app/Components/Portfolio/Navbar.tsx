import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Studio", cn: "工作室", target: "about", num: "01" },
  { label: "Work", cn: "作品", target: "projects", num: "02" },
  { label: "Lab", cn: "实验", target: "lab", num: "03" },
];

export default function Navbar() {
  const [activeNav, setActiveNav] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const handleNavClick = (target: string) => {
    setActiveNav(target);
    if (target === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(target);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const ids = ["about", "projects", "lab", "contact"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveNav(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      if (window.scrollY < 200) setActiveNav("home");
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
      style={{
        background: scrolled
          ? "linear-gradient(to bottom, rgba(18,16,14,0.78) 0%, rgba(18,16,14,0.55) 70%, rgba(18,16,14,0) 100%)"
          : "linear-gradient(to bottom, rgba(18,16,14,0.35) 0%, rgba(18,16,14,0.12) 60%, rgba(18,16,14,0) 100%)",
        backdropFilter: scrolled ? "blur(14px) saturate(140%)" : "blur(4px)",
        WebkitBackdropFilter: scrolled ? "blur(14px) saturate(140%)" : "blur(4px)",
      }}
    >
      {/* hairline at bottom when scrolled */}
      {scrolled && (
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)" }}
        />
      )}

      <nav className="relative flex items-center justify-between px-6 md:px-10 lg:px-14">
        {/* === LEFT: Monogram + wordmark + status === */}
        <button
          onClick={() => handleNavClick("home")}
          className="group flex items-center gap-3.5"
        >
          {/* J monogram */}
          <span
            className="relative flex items-center justify-center w-9 h-9 rounded-full overflow-hidden transition-transform group-hover:scale-105"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.18)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span
              className="font-serif-i text-[18px] leading-none"
              style={{ color: "hsl(var(--gold))", transform: "translateY(-1px)" }}
            >
              J
            </span>
            <span
              className="absolute -bottom-px left-1/2 -translate-x-1/2 w-2 h-px"
              style={{ background: "hsl(var(--neon))" }}
            />
          </span>

          {/* Wordmark */}
          <span className="hidden sm:flex flex-col items-start leading-none">
            <span className="font-tight text-[13px] font-semibold tracking-[0.18em] text-white">
              JIAXUAN
            </span>
            <span className="font-tight text-[9px] tracking-[0.32em] uppercase text-white/45 mt-1">
              Design Studio
            </span>
          </span>
        </button>

        {/* === CENTER: Editorial text nav with index numbers === */}
        <div
          className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-1 px-2 py-1.5 rounded-full"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          {navLinks.map((link, i) => {
            const isActive = activeNav === link.target;
            return (
              <div key={link.target} className="flex items-center">
                <button
                  onClick={() => handleNavClick(link.target)}
                  className={`group relative flex items-baseline gap-1.5 px-4 py-1.5 rounded-full transition-all duration-300 ${
                    isActive ? "bg-white/10" : "hover:bg-white/[0.04]"
                  }`}
                >
                  <span
                    className={`font-tight text-[9px] font-semibold tracking-[0.15em] transition-colors ${
                      isActive ? "text-white/90" : "text-white/35 group-hover:text-white/55"
                    }`}
                    style={isActive ? { color: "hsl(var(--neon))" } : {}}
                  >
                    {link.num}
                  </span>
                  <span
                    className={`font-tight text-[12px] font-medium tracking-[0.02em] transition-colors ${
                      isActive ? "text-white" : "text-white/60 group-hover:text-white"
                    }`}
                  >
                    {link.label}
                  </span>
                </button>
                {i < navLinks.length - 1 && (
                  <span className="w-px h-3 bg-white/10" aria-hidden="true" />
                )}
              </div>
            );
          })}
        </div>

        {/* === RIGHT: Status + CTA === */}
        <div className="flex items-center gap-4">
          {/* Available indicator */}
          <div className="hidden lg:flex items-center gap-2">
            <span className="relative flex w-1.5 h-1.5">
              <span
                className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping"
                style={{ background: "hsl(var(--neon))" }}
              />
              <span
                className="relative inline-flex w-1.5 h-1.5 rounded-full"
                style={{ background: "hsl(var(--neon))" }}
              />
            </span>
            <span className="font-tight text-[10px] font-medium tracking-[0.22em] uppercase text-white/65">
              Available · Q3
            </span>
          </div>

          {/* CTA — outline ghost with arrow */}
          <button
            onClick={() => handleNavClick("contact")}
            className="cta-talk group flex items-center gap-2 rounded-full pl-4 pr-1.5 py-1.5 transition-all hover:pl-5"
            style={{
              border: "1px solid rgba(255,255,255,0.22)",
            }}
          >
            <span className="font-tight text-[11px] font-semibold tracking-[0.12em] uppercase text-white group-hover:text-black transition-colors">
              Let's Talk
            </span>
            <span
              className="w-7 h-7 rounded-full flex items-center justify-center transition-all group-hover:rotate-45"
              style={{ background: "hsl(var(--neon))" }}
            >
              <ArrowUpRight size={13} className="text-black" strokeWidth={2.5} />
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}
