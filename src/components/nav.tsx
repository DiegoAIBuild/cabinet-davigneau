"use client";

import { useEffect, useState } from "react";

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-[11px] h-[11px]">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-100 border-b transition-all duration-400 ${
        scrolled
          ? "bg-white/82 backdrop-blur-[20px] backdrop-saturate-[1.2] border-rule"
          : "bg-transparent border-transparent"
      }`}
      style={{ transitionTimingFunction: "var(--ease)" }}
    >
      <div className="max-w-[var(--max-w)] mx-auto px-[var(--gutter)]">
        <div className="flex items-center justify-between py-[22px] gap-6">
          {/* Brand */}
          <a className="flex items-center gap-3.5" href="#top">
            <span className="w-[38px] h-[38px] rounded-full border border-gold inline-flex items-center justify-center font-serif text-[17px] font-medium bg-[radial-gradient(circle_at_30%_30%,#fff,var(--color-mist))]">
              <em className="italic text-gold-deep">d</em>A
            </span>
            <span className="leading-[1.1]">
              <span className="font-serif text-[16px] font-medium tracking-[-0.005em]">
                Cabinet d&apos;Avigneau
              </span>
              <span className="block text-[10.5px] tracking-[.2em] uppercase text-muted mt-[3px] font-medium max-md:hidden">
                Chirurgien-dentiste · Saint-Nazaire
              </span>
            </span>
          </a>

          {/* Nav links */}
          <nav className="hidden lg:flex gap-[38px] text-[13.5px] text-ink-soft font-medium">
            {["Le praticien", "Soins", "Technologie", "Témoignages", "Contact"].map(
              (label) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase().replace(/\s/g, "").normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                  className="relative py-1 hover:text-ink group"
                >
                  {label}
                  <span className="absolute left-0 bottom-[-2px] h-px bg-gold w-0 group-hover:w-full transition-all duration-400" style={{ transitionTimingFunction: "var(--ease)" }} />
                </a>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-[18px]">
            <span className="hidden md:flex items-center gap-2 text-[13.5px] text-ink font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_0_4px_rgba(201,169,110,.18)]" />
              02 40 70 15 59
            </span>
            <a
              href="#contact"
              className="inline-flex items-center gap-3.5 px-5 py-3 rounded-full text-[13px] font-medium bg-ink text-white border border-transparent hover:-translate-y-px transition-transform"
              style={{ transitionTimingFunction: "var(--ease)" }}
            >
              Prendre rendez-vous
              <span className="inline-grid place-items-center w-[22px] h-[22px] rounded-full bg-white/14">
                <Arrow />
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
