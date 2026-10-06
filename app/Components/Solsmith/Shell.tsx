import Link from "next/link";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";

const nav = [
  ["About", "/about"],
  ["Solutions", "/solutions"],
  ["Tech + Inventory", "/tech"],
  ["Our Process", "/process"],
  ["Insights", "/insights"],
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-[1280px] items-center justify-between px-5 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="SOLSMITH home">
          <span className="flex h-10 w-10 items-center justify-center bg-slate-800 text-lg font-black text-amber-400">S</span>
          <span className="leading-none"><strong className="block text-[15px] font-black tracking-[0.2em] text-slate-800">SOLSMITH</strong><small className="mt-1 block text-[9px] font-bold tracking-[0.18em] text-slate-500">SOLAR ENGINEERING</small></span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {nav.map(([label, href]) => <Link key={href} href={href} className="text-[12px] font-bold uppercase tracking-[0.08em] text-slate-600 transition-colors hover:text-cyan-600">{label}</Link>)}
        </nav>
        <Link href="/contact" className="group flex items-center gap-2 bg-amber-400 px-4 py-3 text-[11px] font-black uppercase tracking-[0.08em] text-slate-900 transition-colors hover:bg-amber-300">
          Free quote <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 py-16 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2"><div className="mb-5 flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center bg-amber-400 text-lg font-black text-slate-900">S</span><strong className="text-[15px] tracking-[0.2em]">SOLSMITH</strong></div><p className="max-w-sm text-sm leading-7 text-slate-300">Premium solar systems, engineered for the way your property actually works. Local expertise. Measurable performance.</p><div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-300"><MapPin size={14} /> Serving the greater metro area</div></div>
        <div><h3 className="mb-5 text-xs font-black uppercase tracking-[0.16em] text-amber-400">Explore</h3><div className="grid gap-3 text-sm text-slate-300">{nav.concat([["Contact", "/contact"]]).map(([label, href]) => <Link key={href} href={href} className="hover:text-white">{label}</Link>)}</div></div>
        <div><h3 className="mb-5 text-xs font-black uppercase tracking-[0.16em] text-amber-400">Start here</h3><p className="mb-4 text-sm leading-6 text-slate-300">Talk with a solar advisor about your home or business.</p><Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-amber-300">Book your assessment <ArrowUpRight size={15} /></Link><a href="tel:5550140198" className="mt-4 flex items-center gap-2 text-sm text-slate-300"><Phone size={14} /> (555) 014-0198</a></div>
      </div>
      <div className="border-t border-white/10"><div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-2 px-5 py-5 text-[11px] text-slate-400 sm:flex-row lg:px-8"><span>© 2026 SOLSMITH ENERGY, LLC</span><span>Licensed · Insured · Built to last</span></div></div>
    </footer>
  );
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return <><Header /><main className="pt-[76px]">{children}</main><Footer /></>;
}

export function PageIntro({ index, eyebrow, title, text }: { index: string; eyebrow: string; title: React.ReactNode; text: string }) {
  return <section className="site-grid border-b border-slate-200 bg-slate-50 px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto max-w-[1280px]"><p className="eyebrow mb-6">{index} / {eyebrow}</p><h1 className="max-w-4xl text-balance text-5xl font-black leading-[0.96] tracking-[-0.04em] text-slate-800 md:text-7xl">{title}</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">{text}</p></div></section>;
}

export function SectionLabel({ children }: { children: React.ReactNode }) { return <p className="eyebrow mb-4">{children}</p>; }

export function CTA({ href = "/contact", children = "Get a free quote" }: { href?: string; children?: React.ReactNode }) { return <Link href={href} className="group inline-flex items-center gap-3 bg-slate-800 px-5 py-4 text-xs font-black uppercase tracking-[0.1em] text-white transition-colors hover:bg-cyan-700">{children}<ArrowUpRight size={16} className="text-amber-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>; }
