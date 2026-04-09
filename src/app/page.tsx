import { CRM, RQE, DOCTOR_NAME, CLINIC_ADDRESS, CLINIC_CITY, CLINIC_STATE, CLINIC_PHONE_FORMATTED, SITE_URL } from "@/lib/constants";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Technology from "@/components/sections/Technology";
import HowItWorks from "@/components/sections/HowItWorks";
import Clinic from "@/components/sections/Clinic";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: DOCTOR_NAME,
  image: `${SITE_URL}/Quem sou.avif`,
  description:
    "Médico Nutrólogo especialista em emagrecimento, reposição hormonal e performance",
  medicalSpecialty: "Nutrologia",
  availableLanguage: "pt-BR",
  address: {
    "@type": "PostalAddress",
    streetAddress: CLINIC_ADDRESS,
    addressLocality: CLINIC_CITY,
    addressRegion: CLINIC_STATE,
    postalCode: "78043-112",
    addressCountry: "BR",
  },
  contact: {
    "@type": "ContactPoint",
    telephone: CLINIC_PHONE_FORMATTED,
    contactType: "Customer Service",
  },
  areaServed: {
    "@type": "City",
    name: CLINIC_CITY,
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Technology />
        <HowItWorks />
        <Clinic />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
