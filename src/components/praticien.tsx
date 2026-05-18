"use client";

import { BlurFade } from "./blur-fade";
import { AnimatedCounter } from "./animated-counter";

export function Praticien() {
  return (
    <section id="lepraticien" className="py-[var(--section-y)] bg-white">
      <div className="max-w-[var(--max-w)] mx-auto px-[var(--gutter)]">
        <div className="grid grid-cols-1 md:grid-cols-[.9fr_1.1fr] gap-[clamp(40px,6vw,96px)] items-center">
          {/* Portrait placeholder */}
          <BlurFade>
            <div className="relative aspect-[4/5] bg-mist rounded-[6px] overflow-hidden shadow-[0_30px_80px_-30px_rgba(27,58,92,.25)]">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0) 49%, rgba(255,255,255,.04) 50%, rgba(255,255,255,0) 51%) 0 0/14px 14px, linear-gradient(180deg,#dde2ea,#c8cfdb)",
                }}
              />
              <div className="absolute bottom-[18px] left-[18px] font-mono text-[10px] tracking-[.16em] text-ink-soft bg-white/85 px-2.5 py-1.5 rounded-[3px]">
                PORTRAIT &nbsp;• &nbsp;Dr d&apos;Avigneau
              </div>
              <div className="absolute top-[18px] right-[18px] w-[84px] h-[84px] rounded-full bg-ink text-white grid place-items-center text-center leading-[1.15] font-serif italic text-[11px] tracking-[.04em] border border-gold p-2">
                <div>
                  Diplômé de
                  <span className="block font-sans not-italic text-[18px] font-medium tracking-[-0.01em] text-gold">
                    Nantes
                  </span>
                  <span className="font-sans not-italic text-[10px] tracking-[.16em] text-white/60 mt-1">
                    FACULTÉ
                  </span>
                </div>
              </div>
            </div>
          </BlurFade>

          {/* Copy */}
          <BlurFade delay={0.15}>
            <div className="inline-flex items-center gap-3.5 text-[11px] font-medium tracking-[.32em] uppercase text-gold-deep">
              <span className="w-7 h-px bg-gold" />
              Le praticien
            </div>
            <h2
              className="font-serif font-normal tracking-[-0.022em] leading-[.98] mt-[18px] mb-7"
              style={{ fontSize: "clamp(40px, 5.6vw, 84px)" }}
            >
              Une pratique <em className="italic font-medium text-gold-deep">attentive,</em>
              <br />
              une exigence constante.
            </h2>
            <p className="mb-[18px] text-ink-soft max-w-[54ch] text-[16.5px]">
              Diplômé de la Faculté de chirurgie dentaire de Nantes, le Dr d&apos;Avigneau
              a complété sa formation par des spécialisations complémentaires en
              dentisterie moderne.
            </p>
            <p className="mb-0 text-ink-soft max-w-[54ch] text-[16.5px]">
              Son approche est conservatrice par principe&nbsp;: préserver chaque tissu sain,
              n&apos;intervenir qu&apos;avec mesure, et accompagner ses patients dans la durée.
            </p>

            <div className="mt-9 flex items-center gap-[18px]">
              <span className="font-serif italic text-[30px] text-ink tracking-[-0.01em]">
                Th. d&apos;Avigneau
              </span>
              <span className="flex-1 h-px bg-rule max-w-[120px]" />
              <span className="text-[12px] tracking-[.18em] uppercase text-muted">SELARL COACH</span>
            </div>

            {/* Animated stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-rule">
              <div>
                <div className="font-serif text-[34px] font-medium text-ink tracking-[-0.015em] leading-none">
                  <AnimatedCounter end={5} suffix="/5" />
                </div>
                <div className="mt-2 text-[12.5px] text-muted tracking-[.02em]">Note Google</div>
              </div>
              <div>
                <div className="font-serif text-[34px] font-medium text-ink tracking-[-0.015em] leading-none">
                  <AnimatedCounter end={10} suffix="+" />
                </div>
                <div className="mt-2 text-[12.5px] text-muted tracking-[.02em]">Avis patients</div>
              </div>
              <div>
                <div className="font-serif text-[34px] font-medium text-ink tracking-[-0.015em] leading-none">
                  Secteur <AnimatedCounter end={1} />
                </div>
                <div className="mt-2 text-[12.5px] text-muted tracking-[.02em]">Conventionné</div>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
