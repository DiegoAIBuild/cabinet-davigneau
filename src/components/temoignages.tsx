import { Reveal } from "./reveal";

const Star = ({ delay }: { delay: number }) => (
  <svg
    viewBox="0 0 24 24"
    className="w-3.5 h-3.5 fill-gold"
    style={{ animation: `starpop .6s var(--ease) backwards ${delay}s` }}
  >
    <path d="M12 2l3 6.5 7 .9-5 4.9 1.4 7L12 17.8 5.6 21.3 7 14.3l-5-4.9 7-.9z" />
  </svg>
);

const Stars = () => (
  <div className="flex gap-1 mb-[22px]">
    {[0, 0.06, 0.12, 0.18, 0.24].map((d, i) => (
      <Star key={i} delay={d} />
    ))}
  </div>
);

const testimonials = [
  {
    quote:
      "Un cabinet où l'on se sent réellement écouté. Le Dr d'Avigneau explique tout, prend le temps qu'il faut, et les soins sont d'une précision rare.",
    name: "Marion L.",
    source: "Doctolib · mars 2026",
    initial: "M",
  },
  {
    quote:
      "J'avais une vraie appréhension du dentiste. Ici, tout est apaisant — la salle, l'équipe, l'approche. Mon implant s'est posé sans douleur.",
    name: "Antoine R.",
    source: "Google · février 2026",
    initial: "A",
  },
  {
    quote:
      "Le scanner 3D au lieu de la pâte d'empreinte, ça change tout. Et le résultat de mes facettes est exactement ce que j'avais imaginé.",
    name: "Camille P.",
    source: "Doctolib · janvier 2026",
    initial: "C",
  },
];

export function Temoignages() {
  return (
    <section id="temoignages" className="py-[var(--section-y)] bg-white">
      <div className="max-w-[var(--max-w)] mx-auto px-[var(--gutter)]">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mb-14">
            <div>
              <div className="inline-flex items-center gap-3.5 text-[11px] font-medium tracking-[.32em] uppercase text-gold-deep">
                <span className="w-7 h-px bg-gold" />
                Témoignages
              </div>
              <h2
                className="font-serif font-normal tracking-[-0.022em] leading-[.98] mt-[18px]"
                style={{ fontSize: "clamp(40px, 5.6vw, 84px)" }}
              >
                Ce que disent <em className="italic font-medium text-gold-deep">nos patients.</em>
              </h2>
            </div>
            <p className="text-ink-soft leading-[1.65] max-w-[56ch]" style={{ fontSize: "clamp(17px, 1.35vw, 20px)" }}>
              Avis vérifiés par Doctolib et Google. La note moyenne du cabinet est de{" "}
              <strong className="text-ink">4,9 / 5</strong> sur plus de 240 retours.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className="border border-rule rounded-lg p-9 pb-8 bg-paper flex flex-col hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(27,58,92,.18)] transition-all duration-500 h-full" style={{ transitionTimingFunction: "var(--ease)" }}>
                <Stars />
                <p className="font-serif text-[21px] leading-[1.45] text-ink tracking-[-0.01em] font-normal">
                  &laquo;&nbsp;{t.quote}&nbsp;&raquo;
                </p>
                <div className="mt-auto pt-8 flex items-center gap-3.5 border-t border-rule">
                  <div className="w-[42px] h-[42px] rounded-full bg-mist-deep grid place-items-center font-serif italic text-ink text-[15px] font-medium">
                    {t.initial}
                  </div>
                  <div>
                    <div className="text-[14px] font-medium text-ink">{t.name}</div>
                    <div className="text-[12px] text-muted mt-0.5">{t.source}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
