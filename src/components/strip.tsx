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
    <span key={i}>
      {item} <span className="text-gold text-[.7em] -translate-y-0.5 inline-block">&#10022;</span>{" "}
    </span>
  ));

  return (
    <div className="border-t border-b border-rule bg-paper overflow-hidden py-[22px]">
      <div
        className="flex gap-16 whitespace-nowrap font-serif font-normal tracking-[-0.005em] text-ink"
        style={{
          fontSize: "clamp(18px, 2vw, 28px)",
          animation: "marquee var(--strip-speed) linear infinite",
        }}
      >
        <span className="inline-flex items-center gap-16">{track}</span>
        <span className="inline-flex items-center gap-16">{track}</span>
      </div>
    </div>
  );
}
