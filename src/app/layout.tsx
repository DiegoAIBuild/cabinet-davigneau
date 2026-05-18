import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr Thibaud Marie d'Avigneau — Chirurgien-dentiste · Saint-Nazaire",
  description:
    "Cabinet du Dr Thibaud Marie d'Avigneau. Dentisterie d'excellence, technologies de pointe, sérénité. 20 rue Antoine Parmentier, Saint-Nazaire.",
  openGraph: {
    title: "Dr Thibaud Marie d'Avigneau — Chirurgien-dentiste",
    description:
      "Dentisterie d'excellence à Saint-Nazaire. Implantologie, orthodontie invisible, esthétique du sourire.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
