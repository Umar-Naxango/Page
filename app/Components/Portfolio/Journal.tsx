import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import Stagger from "./Stagger";

const posts = [
  {
    cat: "Essay",
    date: "May 18, 2026",
    read: "8 min",
    title: "Designing in the age of co-creation",
    excerpt: "A field note from a year of pairing with language models — what changed, what didn't, what I miss.",
    cover: "https://images.unsplash.com/photo-1542435503-956c469947f6?w=1200&h=800&fit=crop&q=85",
    featured: true,
  },
  {
    cat: "Process",
    date: "Apr 02, 2026",
    read: "5 min",
    title: "Sketching motion with one hand on the keyboard",
    excerpt: "How I prototype interaction inside the browser instead of Figma — and why the friction is the point.",
    cover: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop&q=85",
  },
  {
    cat: "Talk",
    date: "Feb 11, 2026",
    read: "3 min",
    title: "Slow design in fast software",
    excerpt: "Notes from my Design Shanghai talk on bringing patience back into AI-powered products.",
    cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop&q=85",
  },
];

export default function Journal() {
  return (
    <section id="journal" className="relative w-full py-32 md:py-40 px-6 md:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        {/* Corner index */}
        <Reveal variant="fade">
          <div className="flex items-center gap-3 mb-10">
            <span className="font-tight text-[10px] font-semibold tracking-[0.32em] uppercase text-white/55">
              № 005 / Field Notes · Journal
            </span>
            <span className="flex-1 h-px bg-white/10" />
          </div>
        </Reveal>

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
          <Reveal variant="fade-up">
            <h2 className="text-white tracking-[-0.025em] leading-[0.95]">
              <span className="font-tight font-medium text-[36px] md:text-[52px] lg:text-[68px]">
                Letters from
              </span>
              <br />
              <span className="font-tight font-medium text-[36px] md:text-[52px] lg:text-[68px]">
                the{" "}
              </span>
              <span className="font-serif-i font-normal italic text-[38px] md:text-[56px] lg:text-[74px]"
                    style={{ color: "hsl(var(--gold))" }}>
                drawing
              </span>{" "}
              <span className="font-serif-i font-normal italic text-[38px] md:text-[56px] lg:text-[74px]"
                    style={{ color: "hsl(var(--neon))" }}>
                board
              </span>
              <span className="font-tight font-medium text-[36px] md:text-[52px] lg:text-[68px]">.</span>
            </h2>
          </Reveal>
          <Reveal variant="fade-up" delay={150}>
            <button className="group flex items-center gap-3 rounded-full pl-5 pr-1.5 py-1.5 transition-all hover:bg-white"
                    style={{ border: "1px solid rgba(255,255,255,0.2)" }}>
              <span className="font-tight text-white text-[11px] font-semibold tracking-[0.18em] uppercase group-hover:text-black transition-colors">
                All Articles
              </span>
              <span className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: "hsl(var(--neon))" }}>
                <ArrowUpRight size={12} className="text-black group-hover:rotate-45 transition-transform" strokeWidth={2.5} />
              </span>
            </button>
          </Reveal>
        </div>

        {/* Grid: 1 featured + 2 stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-7 lg:gap-8">
          {/* Featured */}
          <Reveal variant="fade-right" className="lg:col-span-3">
            <article className="group cursor-pointer relative h-full flex flex-col rounded-2xl overflow-hidden"
                     style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="relative h-[280px] md:h-[380px] overflow-hidden">
                <img src={posts[0].cover} alt={posts[0].title}
                     className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                     style={{ filter: "saturate(0.85) brightness(0.9)" }} />
                <div className="absolute inset-0"
                     style={{
                       background:
                         "linear-gradient(to top, rgba(20,32,74,0.85) 0%, rgba(20,32,74,0.3) 50%, rgba(20,32,74,0.1) 100%)",
                     }} />
                <span className="absolute top-5 left-5 font-tight text-[10px] tracking-[0.25em] uppercase font-semibold px-3 py-1.5 rounded-full"
                      style={{ background: "hsl(var(--neon))", color: "hsl(var(--background))" }}>
                  Featured
                </span>
                <span className="absolute top-5 right-5 font-tight text-[10px] font-semibold tracking-[0.25em] uppercase text-white/80 px-2.5 py-1 rounded-full"
                      style={{ border: "1px solid rgba(255,255,255,0.25)", backdropFilter: "blur(8px)" }}>
                  {posts[0].read}
                </span>
              </div>
              <div className="p-7 md:p-9 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-serif-i italic text-[14px]" style={{ color: "hsl(var(--gold))" }}>
                    {posts[0].cat}
                  </span>
                  <span className="w-3 h-px bg-white/20" />
                  <span className="font-tight text-[10px] tracking-[0.25em] uppercase text-white/45 font-semibold">
                    {posts[0].date}
                  </span>
                </div>
                <h3 className="font-tight text-white text-[28px] md:text-[36px] font-medium tracking-[-0.01em] leading-[1.1] mb-4">
                  {posts[0].title}
                </h3>
                <p className="font-tight text-white/55 text-[13.5px] leading-relaxed font-light max-w-xl">
                  {posts[0].excerpt}
                </p>
                <div className="mt-auto pt-6 flex items-center gap-2 text-white/65 group-hover:text-white transition-colors">
                  <span className="font-tight text-[11px] font-semibold tracking-[0.2em] uppercase">Read article</span>
                  <ArrowUpRight size={13} className="group-hover:rotate-45 transition-transform" />
                </div>
              </div>
            </article>
          </Reveal>

          {/* Stack */}
          <Stagger className="lg:col-span-2 flex flex-col gap-7 lg:gap-8">
            {posts.slice(1).map((p, i) => (
              <article key={p.title}
                       className="group cursor-pointer flex-1 flex flex-row rounded-2xl overflow-hidden"
                       style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="relative w-[42%] overflow-hidden flex-shrink-0">
                  <img src={p.cover} alt={p.title}
                       className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                       style={{ filter: "saturate(0.85) brightness(0.9)" }} />
                  <div className="absolute inset-0"
                       style={{
                         background:
                           "linear-gradient(to right, rgba(20,32,74,0.4), rgba(20,32,74,0.1))",
                       }} />
                </div>
                <div className="p-5 md:p-6 flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-serif-i italic text-[13px]" style={{ color: "hsl(var(--gold))" }}>
                      {p.cat}
                    </span>
                    <span className="w-2 h-px bg-white/20" />
                    <span className="font-tight text-[9px] tracking-[0.25em] uppercase font-semibold text-white/40">
                      {p.read}
                    </span>
                  </div>
                  <h3 className="font-tight text-white text-[18px] md:text-[20px] font-medium tracking-[-0.005em] leading-tight mb-2">
                    {p.title}
                  </h3>
                  <p className="font-tight text-white/45 text-[12px] leading-relaxed font-light line-clamp-2">
                    {p.excerpt}
                  </p>
                  <span className="font-tight text-[9px] font-semibold tracking-[0.3em] uppercase text-white/35 mt-3">
                    № 0{i + 2}
                  </span>
                </div>
              </article>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
