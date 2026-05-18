"use client";

import { Reveal } from "./reveal";

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-[11px] h-[11px]">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

function ToothSVG() {
  return (
    <svg viewBox="0 0 200 240" aria-hidden="true" className="w-full h-full block overflow-visible">
      <defs>
        <radialGradient id="toothBody" cx="38%" cy="28%" r="82%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="38%" stopColor="#f6f8fb" />
          <stop offset="78%" stopColor="#dfe4ee" />
          <stop offset="100%" stopColor="#b8c1d2" />
        </radialGradient>
        <linearGradient id="toothRoot" x1="0" x2="0" y1="0.4" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="55%" stopColor="#C9A96E" stopOpacity=".22" />
          <stop offset="100%" stopColor="#C9A96E" stopOpacity=".05" />
        </linearGradient>
        <linearGradient id="toothEdge" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#1B3A5C" stopOpacity=".06" />
          <stop offset="50%" stopColor="#1B3A5C" stopOpacity=".12" />
          <stop offset="100%" stopColor="#1B3A5C" stopOpacity=".18" />
        </linearGradient>
        <radialGradient id="toothCore" cx="50%" cy="55%" r="55%">
          <stop offset="0%" stopColor="#1B3A5C" stopOpacity=".05" />
          <stop offset="60%" stopColor="#1B3A5C" stopOpacity=".01" />
          <stop offset="100%" stopColor="#1B3A5C" stopOpacity="0" />
        </radialGradient>
      </defs>
      <path
        d="M100,12 C62,12 36,30 32,68 C30,96 38,124 52,148 C60,162 66,176 66,200 C66,218 72,228 82,228 C90,228 94,216 98,196 C100,186 100,184 100,184 C100,184 100,186 102,196 C106,216 110,228 118,228 C128,228 134,218 134,200 C134,176 140,162 148,148 C162,124 170,96 168,68 C164,30 138,12 100,12 Z"
        fill="url(#toothBody)" stroke="url(#toothEdge)" strokeWidth="1"
      />
      <path
        d="M100,12 C62,12 36,30 32,68 C30,96 38,124 52,148 C60,162 66,176 66,200 C66,218 72,228 82,228 C90,228 94,216 98,196 C100,186 100,184 100,184 C100,184 100,186 102,196 C106,216 110,228 118,228 C128,228 134,218 134,200 C134,176 140,162 148,148 C162,124 170,96 168,68 C164,30 138,12 100,12 Z"
        fill="url(#toothCore)"
      />
      <path
        d="M52,148 C60,162 66,176 66,200 C66,218 72,228 82,228 C90,228 94,216 98,196 C100,186 100,184 100,184 C100,184 100,186 102,196 C106,216 110,228 118,228 C128,228 134,218 134,200 C134,176 140,162 148,148 C150,160 145,180 138,200 C130,222 118,232 100,232 C82,232 70,222 62,200 C55,180 50,160 52,148 Z"
        fill="url(#toothRoot)"
      />
      <path
        d="M70,40 C58,56 50,82 56,118 C46,98 44,68 60,46 C64,40 68,38 70,40 Z"
        fill="#ffffff" opacity=".75" className="origin-center"
        style={{ animation: "glint 6s ease-in-out infinite", mixBlendMode: "screen" }}
      />
      <ellipse cx="86" cy="38" rx="7" ry="16" fill="#ffffff" opacity=".55" transform="rotate(-18 86 38)" />
      <circle cx="132" cy="56" r="2" fill="#ffffff" opacity=".9" />
      <circle cx="138" cy="60" r="1" fill="#ffffff" opacity=".7" />
      <path
        d="M96,184 C99,188 101,188 104,184 C104,196 102,210 100,214 C98,210 96,196 96,184 Z"
        fill="#1B3A5C" opacity=".08"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="pt-[140px] pb-[var(--section-y)] relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, var(--color-white) 0%, var(--color-paper) 60%, var(--color-mist) 100%)",
      }}
    >
      {/* BG blurs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-[20%] -right-[15%] w-[60%] h-[80%] blur-[20px]"
          style={{ background: "radial-gradient(closest-side, rgba(201,169,110,.12), transparent 70%)" }}
        />
        <div
          className="absolute -bottom-[30%] -left-[20%] w-[60%] h-[80%] blur-[20px]"
          style={{ background: "radial-gradient(closest-side, rgba(27,58,92,.08), transparent 70%)" }}
        />
      </div>

      <div className="max-w-[var(--max-w)] mx-auto px-[var(--gutter)] relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_.9fr] gap-[clamp(32px,5vw,80px)] items-center min-h-[min(78vh,820px)]">
          {/* Left */}
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-3.5 text-[11px] font-medium tracking-[.32em] uppercase text-gold-deep mb-9">
                <span className="w-7 h-px bg-gold" />
                Cabinet d&apos;excellence — depuis 2014
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-serif font-normal tracking-[-0.025em] leading-[.95] text-ink" style={{ fontSize: "clamp(54px, 8.6vw, 140px)" }}>
                Votre sourire,<br />
                <em className="italic font-medium text-gold-deep">notre</em> expertise
                <span className="italic text-gold-deep font-normal inline-block translate-y-[0.06em]">.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-[34px] max-w-[46ch] text-ink-soft leading-[1.65]" style={{ fontSize: "clamp(16px, 1.2vw, 18.5px)" }}>
                À Saint-Nazaire, le Dr Thibaud Marie d&apos;Avigneau accompagne ses patients
                avec une exigence rare&nbsp;: une dentisterie précise, respectueuse, mise
                au service du long terme.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-11 flex flex-wrap gap-3.5 items-center">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3.5 px-[26px] py-[17px] rounded-full text-[14.5px] font-medium bg-ink text-white hover:-translate-y-px transition-transform group"
                >
                  Prendre rendez-vous
                  <span className="inline-grid place-items-center w-[22px] h-[22px] rounded-full bg-white/14 group-hover:translate-x-[3px] transition-transform">
                    <Arrow />
                  </span>
                </a>
                <a
                  href="#soins"
                  className="inline-flex items-center gap-3.5 px-[26px] py-[17px] rounded-full text-[14.5px] font-medium text-ink border border-rule hover:border-ink hover:-translate-y-px transition-all group"
                >
                  Découvrir les soins
                  <span className="inline-grid place-items-center w-[22px] h-[22px] rounded-full bg-mist group-hover:translate-x-[3px] transition-transform">
                    <Arrow />
                  </span>
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-16 flex flex-wrap gap-y-6 gap-x-14 items-start">
                {[
                  { k: "Adresse", v: <>20 rue A. Parmentier<br />44600 Saint-Nazaire</> },
                  { k: "Téléphone", v: "02 40 70 15 59" },
                  { k: "RDV en ligne", v: "24h/24, 7j/7" },
                ].map((item) => (
                  <div key={item.k} className="flex flex-col gap-1.5 min-w-0">
                    <span className="text-[10.5px] tracking-[.22em] uppercase text-muted font-medium">{item.k}</span>
                    <span className="font-serif text-[18px] font-medium text-ink tracking-[-0.005em]">{item.v}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right — tooth illustration */}
          <Reveal delay={0.16} className="relative grid place-items-center min-h-[380px] lg:min-h-[520px] max-lg:order-2">
            <div className="relative w-[min(560px,90%)] aspect-square grid place-items-center">
              {/* Glow */}
              <div
                className="absolute inset-[8%] rounded-full blur-[8px]"
                style={{ background: "radial-gradient(circle at 50% 40%, rgba(255,255,255,.9), rgba(245,245,247,.5) 60%, transparent 75%)" }}
              />
              {/* Rings */}
              <div className="absolute inset-0 rounded-full border border-dashed border-rule opacity-70" style={{ animation: "spin 60s linear infinite" }} />
              <div className="absolute inset-[11%] rounded-full border border-solid opacity-70" style={{ borderColor: "rgba(201,169,110,.25)" }} />
              <div className="absolute inset-[24%] rounded-full border border-dashed opacity-70" style={{ borderColor: "rgba(27,58,92,.08)" }} />
              {/* Tooth */}
              <div
                className="relative w-[62%] aspect-[.78/1]"
                style={{
                  filter: "drop-shadow(0 30px 40px rgba(27,58,92,.18)) drop-shadow(0 6px 14px rgba(201,169,110,.22))",
                  transformStyle: "preserve-3d",
                  animation: "float 8s ease-in-out infinite",
                }}
              >
                <ToothSVG />
              </div>
              {/* Floaters */}
              {[
                { label: "Scanner 3D iTero", cls: "top-[8%] left-[-2%]", delay: "-2s" },
                { label: "Sans empreinte physique", cls: "bottom-[14%] right-[-4%]", delay: "-4s" },
                { label: "Conservatrice avant tout", cls: "top-[46%] right-[-8%]", delay: "-6s" },
              ].map((f) => (
                <div
                  key={f.label}
                  className={`absolute ${f.cls} font-serif italic text-ink bg-white border border-rule rounded-full px-[18px] py-2.5 text-[13.5px] tracking-[-0.005em] shadow-[0_14px_30px_-10px_rgba(27,58,92,.18)] flex items-center gap-2.5`}
                  style={{ animation: `float 9s ease-in-out infinite ${f.delay}` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  {f.label}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
