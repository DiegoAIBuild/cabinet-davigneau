export function Footer() {
  return (
    <footer className="bg-ink text-white pt-[84px] pb-7">
      <div className="max-w-[var(--max-w)] mx-auto px-[var(--gutter)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_.8fr_.8fr_.8fr] gap-12 items-start">
          {/* Brand */}
          <div>
            <div className="inline-flex items-center gap-3.5 text-[11px] font-medium tracking-[.32em] uppercase text-gold mb-6">
              <span className="w-7 h-px bg-gold" />
              Cabinet d&apos;Avigneau
            </div>
            <div className="font-serif font-normal tracking-[-0.015em] leading-none" style={{ fontSize: "clamp(36px, 4.6vw, 56px)" }}>
              Une dentisterie de <em className="italic text-gold">proximité</em> et d&apos;excellence.
            </div>
            <p className="mt-5 text-white/60 max-w-[36ch] text-[14.5px]">
              SELARL COACH — 20 rue Antoine Parmentier, 44600 Saint-Nazaire.
              <br />
              Conventionné secteur 1. Carte vitale &amp; mutuelles acceptées.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="mb-[18px] text-[11.5px] tracking-[.22em] uppercase text-gold font-medium">
              Naviguer
            </h4>
            <ul className="space-y-[11px]">
              {["Le praticien", "Nos soins", "Technologie", "Témoignages", "Le cabinet"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s/g, "").normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} className="text-white/70 text-[14px] hover:text-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Pratique */}
          <div>
            <h4 className="mb-[18px] text-[11.5px] tracking-[.22em] uppercase text-gold font-medium">
              Pratique
            </h4>
            <ul className="space-y-[11px]">
              <li><a href="#contact" className="text-white/70 text-[14px] hover:text-gold transition-colors">Prendre RDV</a></li>
              <li><a href="#contact" className="text-white/70 text-[14px] hover:text-gold transition-colors">Horaires &amp; accès</a></li>
              <li><a href="#" className="text-white/70 text-[14px] hover:text-gold transition-colors">FAQ patients</a></li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 className="mb-[18px] text-[11.5px] tracking-[.22em] uppercase text-gold font-medium">
              Légal
            </h4>
            <ul className="space-y-[11px]">
              {["Mentions légales", "Politique de confidentialité", "Charte qualité ordre", "Cookies"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/70 text-[14px] hover:text-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-6 border-t border-white/10 flex justify-between gap-6 flex-wrap text-[12px] text-white/50 tracking-[.02em]">
          <span>© 2026 SELARL COACH — Dr Thibaud Marie d&apos;Avigneau, chirurgien-dentiste · n° RPPS 10000000000</span>
          <a href="#top" className="hover:text-white transition-colors">Retour en haut ↑</a>
        </div>
      </div>
    </footer>
  );
}
