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
import { ClosingLine } from "@/components/closing-line";

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
      <ClosingLine />
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
              "Chirurgien-dentiste à Saint-Nazaire. Soins dentaires, prothèses, prévention.",
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
              latitude: 47.2782,
              longitude: -2.2089,
            },
            medicalSpecialty: "Dentistry",
            priceRange: "€€",
            paymentAccepted: "Carte vitale, CB, chèque",
            isAcceptingNewPatients: true,
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5.0",
              reviewCount: "10",
              bestRating: "5",
            },
          }),
        }}
      />
    </>
  );
}
