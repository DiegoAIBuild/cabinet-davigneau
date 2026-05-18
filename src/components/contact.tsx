import { BlurFade } from "./blur-fade";

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-[11px] h-[11px]">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export function Contact() {
  return (
    <section id="contact" className="py-[var(--section-y)] bg-white">
      <div className="max-w-[var(--max-w)] mx-auto px-[var(--gutter)]">
        <BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mb-12">
            <div>
              <div className="inline-flex items-center gap-3.5 text-[11px] font-medium tracking-[.32em] uppercase text-gold-deep">
                <span className="w-7 h-px bg-gold" />
                Contact &amp; Accès
              </div>
              <h2
                className="font-serif font-normal tracking-[-0.022em] leading-[.98] mt-[18px]"
                style={{ fontSize: "clamp(40px, 5.6vw, 84px)" }}
              >
                Prendre <em className="italic font-medium text-gold-deep">rendez-vous.</em>
              </h2>
            </div>
            <p className="text-ink-soft leading-[1.65] max-w-[56ch]" style={{ fontSize: "clamp(17px, 1.35vw, 20px)" }}>
              Les rendez-vous se prennent en ligne, 24h/24, sur Doctolib. Vous pouvez aussi
              nous joindre par téléphone aux horaires d&apos;ouverture.
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-[1.05fr_.95fr] gap-[clamp(40px,5vw,80px)] items-start mt-12">
          {/* Info card */}
          <BlurFade>
            <div className="border border-rule rounded-lg p-9 bg-paper">
              {[
                {
                  k: "Adresse",
                  v: (
                    <>
                      20 rue Antoine Parmentier <em className="italic text-gold-deep">—</em> 44600 Saint-Nazaire
                      <small className="block mt-1.5 font-sans not-italic text-[13px] text-ink-soft font-normal tracking-normal">
                        Bus BHNS H3 arrêt Petit Maroc · Parking à proximité
                      </small>
                    </>
                  ),
                },
                {
                  k: "Téléphone",
                  v: (
                    <>
                      02 40 70 15 59
                      <small className="block mt-1.5 font-sans not-italic text-[13px] text-ink-soft font-normal tracking-normal">
                        Du lundi au vendredi, aux horaires d&apos;ouverture
                      </small>
                    </>
                  ),
                },
                {
                  k: "Urgences",
                  v: (
                    <>
                      <em className="italic text-gold-deep">Patients suivis</em> du cabinet&nbsp;: une ligne dédiée est communiquée lors du premier rendez-vous.
                      <small className="block mt-1.5 font-sans not-italic text-[13px] text-ink-soft font-normal tracking-normal">
                        Hors patients suivis, contacter le 15 ou SOS Dentiste 44.
                      </small>
                    </>
                  ),
                },
                {
                  k: "Horaires",
                  v: (
                    <div className="font-sans text-[14px] tracking-normal space-y-0">
                      {/* TODO: Confirmer les horaires exacts avec le cabinet */}
                      <div className="text-ink-soft text-[13px] italic py-1">
                        Horaires à confirmer auprès du cabinet.
                        <br />
                        Contactez-nous au 02 40 70 15 59.
                      </div>
                    </div>
                  ),
                },
                {
                  k: "RDV en ligne",
                  v: (
                    <a
                      href="#"
                      className="inline-flex items-center gap-3.5 px-[26px] py-[17px] rounded-full text-[14.5px] font-medium bg-gold text-ink hover:bg-gold-deep hover:text-white transition-colors mt-1.5 group"
                    >
                      Prendre RDV sur Doctolib
                      <span className="inline-grid place-items-center w-[22px] h-[22px] rounded-full bg-ink text-gold group-hover:translate-x-[3px] transition-transform">
                        <Arrow />
                      </span>
                    </a>
                  ),
                },
              ].map((row, i, arr) => (
                <div
                  key={row.k}
                  className={`grid grid-cols-1 md:grid-cols-[120px_1fr] gap-x-5 gap-y-1.5 py-[22px] ${
                    i < arr.length - 1 ? "border-b border-rule" : ""
                  } ${i === 0 ? "pt-0" : ""} ${i === arr.length - 1 ? "pb-0" : ""}`}
                >
                  <div className="text-[11.5px] tracking-[.18em] uppercase text-muted font-medium pt-[3px]">
                    {row.k}
                  </div>
                  <div className="font-serif text-[18px] text-ink leading-[1.45] tracking-[-0.005em]">{row.v}</div>
                </div>
              ))}
            </div>
          </BlurFade>

          {/* Map placeholder */}
          <BlurFade delay={0.15}>
            <div
              className="relative aspect-[4/5] rounded-lg overflow-hidden border border-rule"
              style={{ background: "linear-gradient(165deg, #eef1f6, #dee3ec)" }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "repeating-linear-gradient(0deg, rgba(27,58,92,.05) 0 1px, transparent 1px 48px), repeating-linear-gradient(90deg, rgba(27,58,92,.05) 0 1px, transparent 1px 48px), repeating-linear-gradient(45deg, rgba(201,169,110,.06) 0 1px, transparent 1px 96px)",
                }}
              />
              {/* Roads */}
              <div className="absolute top-1/2 left-0 right-0 h-[34px] bg-white/70 -translate-y-1/2 -rotate-[3deg]" />
              <div className="absolute inset-y-0 right-[34%] w-[30px] bg-white/70 rotate-[8deg]" />
              {/* Pin */}
              <div className="absolute top-[48%] left-[54%] -translate-x-1/2 -translate-y-full flex flex-col items-center gap-1.5">
                <span className="font-serif italic text-[14px] text-ink bg-white px-3 py-1.5 rounded-full shadow-[0_8px_16px_-8px_rgba(27,58,92,.3)]">
                  Cabinet d&apos;Avigneau
                </span>
                <span className="relative w-6 h-6 rounded-full bg-gold border-4 border-white shadow-[0_8px_18px_-4px_rgba(201,169,110,.6)]">
                  <span
                    className="absolute inset-[-12px] rounded-full"
                    style={{
                      background: "radial-gradient(closest-side, rgba(201,169,110,.4), transparent 70%)",
                      animation: "pulse 2.2s ease-in-out infinite",
                    }}
                  />
                </span>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
