"use client";

import { BlurFade } from "./blur-fade";

const soinsData = [
  {
    num: "01",
    label: "Implantologie",
    title: "Implantologie",
    desc: "Remplacement durable d'une ou plusieurs dents par implants titane et zircone, posés sous guide chirurgical.",
    icon: (
      <svg viewBox="0 0 24 24"><path d="M12 3v12" /><path d="M9 6h6" /><path d="M9.5 9h5" /><path d="M10 12h4" /><circle cx="12" cy="19" r="2.5" /></svg>
    ),
  },
  {
    num: "02",
    label: "Orthodontie",
    title: "Orthodontie invisible",
    desc: "Aligneurs transparents Invisalign® et solutions linguales pour adultes et adolescents.",
    icon: (
      <svg viewBox="0 0 24 24"><rect x="3" y="9" width="18" height="6" rx="1" /><path d="M7 9v6M11 9v6M15 9v6M19 9v6" /></svg>
    ),
  },
  {
    num: "03",
    label: "Esthétique",
    title: "Esthétique du sourire",
    desc: "Facettes en céramique, éclaircissement professionnel, recouvrement minutieux des défauts.",
    icon: (
      <svg viewBox="0 0 24 24"><path d="M4 14c0-4 3-7 8-7s8 3 8 7c0 3-2 5-4 5-3 0-3-3-4-3s-1 3-4 3c-2 0-4-2-4-5z" /><path d="M9 11h.01M15 11h.01" /></svg>
    ),
  },
  {
    num: "04",
    label: "Conservateur",
    title: "Soins courants",
    desc: "Caries, dévitalisations sous microscope, restauration en céramique, suivi préventif annuel.",
    icon: (
      <svg viewBox="0 0 24 24"><path d="M8 4c-2 0-4 2-4 5 0 4 2 11 5 11 1.5 0 2-2 3-2s1.5 2 3 2c3 0 5-7 5-11 0-3-2-5-4-5-2 0-3 1-4 1s-2-1-4-1z" /></svg>
    ),
  },
  {
    num: "05",
    label: "Pédodontie",
    title: "Pédodontie",
    desc: "Accueil bienveillant des enfants dès 3 ans, prévention ludique et premiers soins en douceur.",
    icon: (
      <svg viewBox="0 0 24 24"><circle cx="12" cy="9" r="4" /><path d="M5 20c0-4 3-6 7-6s7 2 7 6" /><path d="M10 8.5h.01M14 8.5h.01M10.5 11c.5.5 1.5.5 2 0" /></svg>
    ),
  },
  {
    num: "06",
    label: "Chirurgie",
    title: "Chirurgie orale",
    desc: "Extractions complexes, dents de sagesse, greffes osseuses et gingivales, sédation consciente.",
    icon: (
      <svg viewBox="0 0 24 24"><path d="M15 4l5 5-9 9-5 1 1-5z" /><path d="M14 5l5 5" /></svg>
    ),
  },
];

export function Soins() {
  return (
    <section id="soins" className="py-[var(--section-y)] bg-mist">
      <div className="max-w-[var(--max-w)] mx-auto px-[var(--gutter)]">
        {/* Header */}
        <BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mb-16">
            <div>
              <div className="inline-flex items-center gap-3.5 text-[11px] font-medium tracking-[.32em] uppercase text-gold-deep">
                <span className="w-7 h-px bg-gold" />
                Nos soins
              </div>
              <h2
                className="font-serif font-normal tracking-[-0.022em] leading-[.98] mt-[18px]"
                style={{ fontSize: "clamp(40px, 5.6vw, 84px)" }}
              >
                Un soin <em className="italic font-medium text-gold-deep">juste</em>
                <br />
                pour chaque sourire.
              </h2>
            </div>
            <p className="text-ink-soft leading-[1.65] max-w-[56ch]" style={{ fontSize: "clamp(17px, 1.35vw, 20px)" }}>
              De la prévention à la réhabilitation complète, le cabinet propose
              l&apos;ensemble des soins dentaires, dans une logique de discrétion,
              de précision et de confort.
            </p>
          </div>
        </BlurFade>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-rule border border-rule rounded-lg overflow-hidden">
          {soinsData.map((soin, i) => (
            <BlurFade key={soin.num} delay={i % 3 * 0.1}>
              <div className="bg-white p-8 pb-8 min-h-[340px] flex flex-col group hover:bg-paper transition-colors duration-500">
                <span className="font-serif italic text-[14px] text-gold-deep tracking-[.02em]">
                  {soin.num} / {soin.label}
                </span>
                <div className="mt-[18px] w-[84px] h-[84px]" style={{ perspective: "600px" }}>
                  <div
                    className="w-full h-full rounded-full border border-rule grid place-items-center text-ink transition-all duration-700 group-hover:[transform:rotateY(180deg)_rotateZ(-6deg)] group-hover:border-gold group-hover:shadow-[0_20px_40px_-16px_rgba(201,169,110,.4)]"
                    style={{
                      background: "radial-gradient(circle at 30% 30%, #fff, var(--color-mist) 70%, var(--color-mist-deep))",
                      transformStyle: "preserve-3d",
                      transitionTimingFunction: "var(--ease)",
                    }}
                  >
                    <div className="w-[38px] h-[38px] [&_svg]:w-full [&_svg]:h-full [&_svg]:stroke-ink [&_svg]:stroke-[1.4] [&_svg]:stroke-linecap-round [&_svg]:stroke-linejoin-round [&_svg]:fill-none group-hover:[&_svg]:stroke-gold-deep transition-colors duration-500">
                      {soin.icon}
                    </div>
                  </div>
                </div>
                <h3 className="mt-[26px] mb-2.5 font-serif text-[24px] font-medium tracking-[-0.01em] text-ink">
                  {soin.title}
                </h3>
                <p className="text-ink-soft text-[14.5px] leading-[1.6] max-w-[38ch]">{soin.desc}</p>
                <span className="mt-auto pt-[22px] flex items-center gap-2.5 text-[13px] text-ink font-medium">
                  En savoir plus{" "}
                  <span className="text-gold-deep group-hover:translate-x-1 transition-transform" style={{ transitionTimingFunction: "var(--ease)" }}>
                    &rarr;
                  </span>
                </span>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
