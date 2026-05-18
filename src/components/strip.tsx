"use client";

import { ScrollVelocityMarquee } from "./scroll-velocity";

export function Strip() {
  const items = [
    "Implantologie",
    "Orthodontie invisible",
    "Esthétique du sourire",
    "Soins conservateurs",
    "Pédodontie",
    "Chirurgie orale",
  ];

  const track = items.map((item, i) => (
    <span key={i} className="inline-flex items-center gap-16">
      <span>{item}</span>
      <span className="text-gold text-[.7em] -translate-y-0.5 inline-block">&#10022;</span>
    </span>
  ));

  return (
    <div className="border-t border-b border-rule bg-paper overflow-hidden py-[22px]">
      <ScrollVelocityMarquee
        baseVelocity={-2}
        className="font-serif font-normal tracking-[-0.005em] text-ink"
      >
        <span
          className="inline-flex items-center gap-16"
          style={{ fontSize: "clamp(18px, 2vw, 28px)" }}
        >
          {track}
        </span>
      </ScrollVelocityMarquee>
    </div>
  );
}
