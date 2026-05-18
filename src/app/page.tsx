import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Strip } from "@/components/strip";
import { Praticien } from "@/components/praticien";
import { Soins } from "@/components/soins";
import { Technologie } from "@/components/technologie";
import { AvantApres } from "@/components/avant-apres";
import { Temoignages } from "@/components/temoignages";
import { Cabinet } from "@/components/cabinet";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { FloatingCta } from "@/components/floating-cta";
import { CursorTrail } from "@/components/cursor-trail";
import { Reveal } from "@/components/reveal";

export default function Home() {
  return (
    <>
      <CursorTrail />
      <Nav />
      <Hero />
      <Strip />
      <Praticien />
      <div className="max-w-[var(--max-w)] mx-auto px-[var(--gutter)]">
        <div className="h-px bg-rule" />
      </div>
      <Soins />
      <Technologie />
      <AvantApres />
      <Temoignages />
      <Cabinet />

      {/* Closing line */}
      <section className="pt-[var(--section-y)] text-center">
        <div className="max-w-[var(--max-w)] mx-auto px-[var(--gutter)]">
          <Reveal>
            <h2
              className="font-serif font-normal tracking-[-0.022em] leading-[.98] max-w-[14ch] mx-auto"
              style={{ fontSize: "clamp(48px, 8vw, 128px)" }}
            >
              Reprendre soin de <em className="italic font-medium text-gold-deep">son sourire,</em>
              <br />
              simplement.
            </h2>
          </Reveal>
        </div>
      </section>

      <Contact />
      <Footer />
      <FloatingCta />

      {/* JSON-LD schema.org/Dentist */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            name: "Cabinet d'Avigneau — Dr Thibaud Marie d'Avigneau",
            description:
              "Chirurgien-dentiste à Saint-Nazaire. Implantologie, orthodontie invisible, esthétique du sourire, soins conservateurs.",
            url: "https://cabinet-davigneau.fr",
            telephone: "+33240701559",
            address: {
              "@type": "PostalAddress",
              streetAddress: "20 rue Antoine Parmentier",
              addressLocality: "Saint-Nazaire",
              postalCode: "44600",
              addressCountry: "FR",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 47.2833,
              longitude: -2.2,
            },
            openingHoursSpecification: [
              { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Thursday"], opens: "08:30", closes: "19:00" },
              { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "08:30", closes: "13:00" },
              { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "08:30", closes: "17:00" },
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "240",
            },
            priceRange: "€€",
          }),
        }}
      />
    </>
  );
}
