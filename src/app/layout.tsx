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
  metadataBase: new URL("https://cabinet-davigneau.vercel.app"),
  title: "Dr Thibaud Marie d'Avigneau — Chirurgien-dentiste · Saint-Nazaire",
  description:
    "Cabinet du Dr Thibaud Marie d'Avigneau, chirurgien-dentiste à Saint-Nazaire. 20 rue Antoine Parmentier, 44600.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dr Thibaud Marie d'Avigneau — Chirurgien-dentiste",
    description:
      "Cabinet dentaire à Saint-Nazaire. Soins dentaires, prothèses, prévention.",
    locale: "fr_FR",
    type: "website",
    url: "https://cabinet-davigneau.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr d'Avigneau — Chirurgien-dentiste · Saint-Nazaire",
    description: "Cabinet dentaire à Saint-Nazaire. Soins, prothèses, prévention.",
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
