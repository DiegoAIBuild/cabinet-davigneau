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

          {/* Google Maps embed + itinéraire */}
          <BlurFade delay={0.15}>
            <div className="relative rounded-lg overflow-hidden border border-rule">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2711.5!2d-2.2089!3d47.2782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805695f3e3e2e1d%3A0x0!2s20%20Rue%20Antoine%20Parmentier%2C%2044600%20Saint-Nazaire!5e0!3m2!1sfr!2sfr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "480px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cabinet d'Avigneau — 20 rue Antoine Parmentier, Saint-Nazaire"
                className="aspect-[4/5] w-full"
              />
              {/* Bouton itinéraire */}
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=20+Rue+Antoine+Parmentier,+44600+Saint-Nazaire"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-5 left-1/2 -translate-x-1/2 inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-ink text-white text-[14px] font-medium shadow-[0_20px_40px_-16px_rgba(27,58,92,.5)] hover:-translate-y-0.5 transition-transform group"
                style={{ transitionTimingFunction: "var(--ease)" }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] text-gold">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                Itinéraire
                <span className="inline-grid place-items-center w-[22px] h-[22px] rounded-full bg-gold text-ink group-hover:translate-x-[3px] transition-transform">
                  <Arrow />
                </span>
              </a>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
