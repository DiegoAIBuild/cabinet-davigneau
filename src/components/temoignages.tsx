import { BlurFade } from "./blur-fade";

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

// Vrais avis Google (fiche Dr Thibaud MARIE d'AVIGNEAU — 5/5, 10 avis)
const testimonials = [
  {
    quote:
      "Enfin trouvé un bon dentiste qui répare les erreurs des autres. Il est jeune mais doué et il ne fera que s'améliorer avec le temps. Très arrangeant sur les remboursements, il nous voit comme des patients et non des clients.",
    name: "Teatch D.",
    source: "Google · mars 2024",
    initial: "T",
  },
  {
    quote:
      "Excellent praticien très à l'écoute et humain. Assistante au top également.",
    name: "Stéphane P.",
    source: "Google · septembre 2024",
    initial: "S",
  },
  {
    quote:
      "Un avis très favorable, les soins au top et son assistante est très sympa. Tout est parfait.",
    name: "Kad K.",
    source: "Google · décembre 2024",
    initial: "K",
  },
];

export function Temoignages() {
  return (
    <section id="temoignages" className="py-[var(--section-y)] bg-white">
      <div className="max-w-[var(--max-w)] mx-auto px-[var(--gutter)]">
        <BlurFade>
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
              Nos patients partagent leur expérience. Note Google&nbsp;:
              {" "}<strong className="text-ink">5,0 / 5</strong> — 10 avis, tous 5 étoiles.
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <BlurFade key={t.name} delay={i * 0.12}>
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
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
