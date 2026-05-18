import { BlurFade } from "./blur-fade";

const techData = [
  {
    num: "01 — Empreinte numérique",
    title: "Scanner intra-oral 3D — finis les porte-empreintes.",
    desc: "Un scan en quelques minutes remplace la pâte d'empreinte traditionnelle. Le patient voit son sourire en 3D, peut le manipuler, l'observer.",
    label: "Scan intra-oral · modèle 3D",
    span: "col-span-12 lg:col-span-7",
  },
  {
    num: "02 — Imagerie",
    title: "Cone Beam 3D à dose réduite.",
    desc: "Une vue précise des structures osseuses pour planifier en sécurité chaque intervention.",
    label: "CBCT · imagerie volumique",
    span: "col-span-12 lg:col-span-5",
  },
  {
    num: "03 — CFAO",
    title: "Conception & usinage assistés.",
    desc: "Couronnes, inlays et facettes conçus en 3D au cabinet, pour un résultat ajusté et des délais réduits.",
    label: "CFAO · céramique usinée",
    span: "col-span-12 lg:col-span-5",
  },
  {
    num: "04 — Microscope & aides optiques",
    title: "Le détail visible, le geste précis.",
    desc: "Endodontie sous aides optiques de fort grossissement pour traiter au plus juste, en préservant un maximum de tissu sain.",
    label: "Microscope opératoire",
    span: "col-span-12 lg:col-span-7",
  },
];

export function Technologie() {
  return (
    <section id="technologie" className="py-[var(--section-y)] bg-ink text-white relative overflow-hidden">
      <div
        className="absolute -top-[20%] -right-[10%] w-1/2 h-[80%] blur-[40px]"
        style={{ background: "radial-gradient(closest-side, rgba(201,169,110,.16), transparent 70%)" }}
      />
      <div className="max-w-[var(--max-w)] mx-auto px-[var(--gutter)] relative">
        <BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mb-16">
            <div>
              <div className="inline-flex items-center gap-3.5 text-[11px] font-medium tracking-[.32em] uppercase text-gold">
                <span className="w-7 h-px bg-gold" />
                Technologie
              </div>
              <h2
                className="font-serif font-normal tracking-[-0.022em] leading-[.98] mt-[18px] text-white"
                style={{ fontSize: "clamp(40px, 5.6vw, 84px)" }}
              >
                L&apos;instrument <em className="italic font-medium text-gold">juste,</em>
                <br />
                au bon moment.
              </h2>
            </div>
            <p className="text-white/70 leading-[1.65] max-w-[56ch]" style={{ fontSize: "clamp(17px, 1.35vw, 20px)" }}>
              Chaque équipement du cabinet est choisi pour ce qu&apos;il apporte au patient&nbsp;:
              plus de précision, moins d&apos;attente, et un confort réel à chaque étape.
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-12 gap-5 mt-6">
          {techData.map((card, i) => (
            <BlurFade key={card.num} delay={i % 2 * 0.12} className={card.span}>
              <article className="relative bg-white/4 border border-white/10 rounded-[6px] p-9 overflow-hidden hover:bg-white/7 hover:border-gold/40 hover:-translate-y-1 transition-all duration-500 h-full" style={{ transitionTimingFunction: "var(--ease)" }}>
                <span className="font-serif italic text-gold text-[13.5px] tracking-[.02em]">{card.num}</span>
                <h3 className="mt-[18px] mb-3 font-serif font-normal text-white leading-[1.05] tracking-[-0.015em]" style={{ fontSize: "clamp(24px, 2.4vw, 34px)" }}>
                  {card.title}
                </h3>
                <p className="text-white/70 text-[14.5px] leading-[1.6] max-w-[42ch]">{card.desc}</p>
                <div className="mt-8 aspect-video rounded border relative overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(201,169,110,.08), rgba(255,255,255,.03))", borderColor: "rgba(255,255,255,.06)" }}>
                  <div className="absolute inset-0" style={{ background: "repeating-linear-gradient(135deg, rgba(255,255,255,.03) 0 1px, transparent 1px 14px)" }} />
                  <span className="absolute left-3.5 bottom-3 font-mono text-[10px] tracking-[.16em] text-white/55 uppercase z-[2]">
                    {card.label}
                  </span>
                </div>
              </article>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
