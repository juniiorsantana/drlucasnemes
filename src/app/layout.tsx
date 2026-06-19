import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { DOCTOR_NAME, CLINIC_NAME, SITE_URL, SEO_KEYWORDS } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dr. Lucas Nemes — Nutrólogo em Cuiabá | CRM/MT 8060",
    template: "%s | Dr. Lucas Nemes",
  },
  description:
    "Médico Nutrólogo especialista em emagrecimento, reposição hormonal e performance em Cuiabá-MT. Tecnologia de ponta, diagnóstico preciso e acompanhamento personalizado.",
  keywords: SEO_KEYWORDS.split(", "),
  authors: [{ name: DOCTOR_NAME }],
  creator: DOCTOR_NAME,
  publisher: CLINIC_NAME,
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Dr. Lucas Nemes — Nutrólogo em Cuiabá",
    description:
      "Especialista em emagrecimento duradouro, reposição hormonal e performance. CRM/MT 8060 · RQE 7982",
    url: SITE_URL,
    siteName: "Dr. Lucas Nemes",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/dr-lucas-nemes-og.avif`,
        width: 1200,
        height: 630,
        alt: "Dr. Lucas Nemes - Nutrologia em Cuiabá",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Lucas Nemes — Nutrólogo em Cuiabá",
    description:
      "Médico Nutrólogo especialista em emagrecimento, reposição hormonal e performance em Cuiabá-MT.",
    creator: "@drlucasnemes",
    images: [`${SITE_URL}/dr-lucas-nemes-og.avif`],
  },
  icons: {
    icon: "/icon-lucasnemes.svg",
    shortcut: "/icon-lucasnemes.svg",
    apple: "/icon-lucasnemes.svg",
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "health",
};

import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { THEME } from "@/lib/constants";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      data-theme={THEME}
      className={`${inter.variable}`}
      suppressHydrationWarning
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
      <body className="bg-surface text-on-surface selection:bg-secondary-container antialiased" suppressHydrationWarning>
        <SmoothScroll>
          {children}
        </SmoothScroll>
        {/* Google Ads tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-11248666884"
          strategy="afterInteractive"
        />
        <Script id="google-ads-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11248666884');
          `}
        </Script>
        {/* MajorHub Tracker */}
        <Script
          src="https://tracker.majorhub.com.br/tracker.js"
          data-token="07ed9457-6ea1-4cc1-b364-80ebab3bab65"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
