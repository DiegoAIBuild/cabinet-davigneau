import { Reveal } from "./reveal";

const tiles = [
  { label: "01 · Accueil", cap: "Lumière naturelle", cls: "col-span-2 lg:col-span-7 lg:row-span-2 aspect-[4/3] lg:aspect-auto", bg: "linear-gradient(160deg,#d7dde8,#b9c2d3)" },
  { label: "02 · Salle de soin A", cap: "Chêne & lin", cls: "col-span-1 lg:col-span-5", bg: "linear-gradient(180deg,#e8e1cc,#cdbf99)" },
  { label: "03 · Stérilisation", cap: "ISO 13485", cls: "col-span-1 lg:col-span-3", bg: "linear-gradient(160deg,#dee2eb,#b6bfd2)" },
  { label: "04 · Chirurgie", cap: "Asepsie complète", cls: "col-span-1 lg:col-span-2", bg: "linear-gradient(180deg,#1B3A5C,#264a72)", dark: true },
];

export function Cabinet() {
  return (
    <section className="py-[var(--section-y)] bg-mist">
      <div className="max-w-[var(--max-w)] mx-auto px-[var(--gutter)]">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mb-14">
            <div>
              <div className="inline-flex items-center gap-3.5 text-[11px] font-medium tracking-[.32em] uppercase text-gold-deep">
                <span className="w-7 h-px bg-gold" />
                Le cabinet
              </div>
              <h2
                className="font-serif font-normal tracking-[-0.022em] leading-[.98] mt-[18px]"
                style={{ fontSize: "clamp(40px, 5.6vw, 84px)" }}
              >
                Un lieu pensé pour <em className="italic font-medium text-gold-deep">se sentir bien.</em>
              </h2>
            </div>
            <p className="text-ink-soft leading-[1.65] max-w-[56ch]" style={{ fontSize: "clamp(17px, 1.35vw, 20px)" }}>
              Deux salles de soins, une salle de chirurgie dédiée, une salle d&apos;attente
              baignée de lumière. Le tout au cœur de Saint-Nazaire, à deux pas du centre.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-12 lg:grid-rows-[260px_260px] gap-3.5" style={{ perspective: "1400px" }}>
          {tiles.map((tile, i) => (
            <Reveal key={tile.label} delay={i * 0.08} className={tile.cls}>
              <div
                className="relative rounded-[6px] overflow-hidden h-full min-h-[200px] hover:[transform:translateZ(20px)_scale(1.015)] hover:shadow-[0_40px_80px_-30px_rgba(27,58,92,.3)] hover:z-[2] transition-all duration-700"
                style={{
                  background: tile.bg,
                  transformStyle: "preserve-3d",
                  transitionTimingFunction: "var(--ease)",
                }}
              >
                <div className="absolute inset-0" style={{ background: "repeating-linear-gradient(135deg, rgba(255,255,255,.06) 0 1px, transparent 1px 14px)" }} />
                <span className={`absolute left-[18px] bottom-4 font-mono text-[10.5px] tracking-[.18em] uppercase px-2.5 py-1.5 rounded-[3px] ${tile.dark ? "bg-white/16 text-white" : "text-ink bg-white/90"}`}>
                  {tile.label}
                </span>
                <span className={`absolute right-[18px] top-4 font-serif italic text-[15px] px-3.5 py-1.5 rounded-full ${tile.dark ? "bg-white/92 text-ink" : "text-ink bg-white/90"}`}>
                  {tile.cap}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
