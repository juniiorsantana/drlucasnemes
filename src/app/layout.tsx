import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Dr. Lucas Nemes — Nutrólogo em Cuiabá | CRM/MT 8060",
  description:
    "Médico Nutrólogo especialista em emagrecimento, reposição hormonal e performance em Cuiabá-MT. Tecnologia de ponta, diagnóstico preciso e acompanhamento personalizado.",
  keywords: [
    "nutrólogo",
    "cuiabá",
    "emagrecimento",
    "nutrologia",
    "reposição hormonal",
    "performance",
    "médico",
    "mt",
  ],
  openGraph: {
    title: "Dr. Lucas Nemes — Nutrólogo em Cuiabá",
    description:
      "Especialista em emagrecimento duradouro, reposição hormonal e performance. CRM/MT 8060 · RQE 7982",
    type: "website",
    locale: "pt_BR",
  },
  alternates: {
    canonical: "https://www.drlucasnemes.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${manrope.variable} scroll-smooth`}
    >
      <head>
        {/* Material Symbols Font */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="scroll-smooth bg-surface text-on-surface selection:bg-secondary-container antialiased">
        {children}
      </body>
    </html>
  );
}
