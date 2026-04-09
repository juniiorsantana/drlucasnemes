import type { Metadata } from "next";
import Image from "next/image";
import {
  DOCTOR_NAME,
  DOCTOR_SPECIALTY,
  CRM,
  RQE,
  WHATSAPP_URL,
  CLINIC_ADDRESS,
  CLINIC_CITY,
  CLINIC_STATE,
  CLINIC_HOURS,
  SITE_URL,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: `${DOCTOR_NAME} — Bio`,
  description: `${DOCTOR_SPECIALTY} em Cuiabá-MT. ${CRM} · ${RQE}. Emagrecimento, Longevidade e Alta Performance.`,
  openGraph: {
    title: `${DOCTOR_NAME} — Bio`,
    description: `${DOCTOR_SPECIALTY} especialista em emagrecimento, longevidade e performance. ${CRM}`,
    url: `${SITE_URL}/bio`,
    images: [{ url: `${SITE_URL}/dr-lucas-nemes-og.avif` }],
  },
};

const MAPS_URL =
  "https://maps.google.com/?q=R.+das+Beg%C3%B4nias,+615,+Jardim+Cuiab%C3%A1,+Cuiab%C3%A1,+MT";
const WAZE_URL =
  "https://waze.com/ul?q=R.+das+Beg%C3%B4nias,+615,+Jardim+Cuiab%C3%A1,+Cuiab%C3%A1,+MT&navigate=yes";
const INSTAGRAM_URL = "https://instagram.com/drlucasnemes";

const specialties = [
  "Emagrecimento Saudável",
  "Longevidade & Bem-estar",
  "Alta Performance",
  "Reposição Hormonal",
  "Nutrologia Clínica",
];

export default function BioPage() {
  return (
    <main className="min-h-screen bg-[#F0F3F7] flex flex-col items-center px-4 py-10 pb-16">
      <div className="w-full max-w-sm flex flex-col items-center gap-5">

        {/* ── Avatar ────────────────────────────────────── */}
        <div className="relative mt-2">
          <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-white shadow-[0_8px_24px_rgba(13,27,75,0.15)]">
            <Image
              src="/dr-lucas-nemes-og.avif"
              alt={`Foto de ${DOCTOR_NAME}`}
              width={96}
              height={96}
              className="w-full h-full object-cover object-top"
              priority
            />
          </div>
          <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-[#25D366] rounded-full border-2 border-[#F0F3F7]" />
        </div>

        {/* ── Identity ──────────────────────────────────── */}
        <div className="text-center space-y-1">
          <h1
            className="text-xl font-extrabold text-[#0D1B4B] tracking-tight"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            {DOCTOR_NAME}
          </h1>
          <p className="text-[#164ea3] font-medium text-sm">{DOCTOR_SPECIALTY}</p>
          <p className="text-[#6B7280] text-xs">
            {CRM} &nbsp;·&nbsp; {RQE}
          </p>
        </div>

        {/* ── Bento Grid ────────────────────────────────── */}
        <div className="w-full grid grid-cols-2 gap-3">

          {/* Agendar — destaque full-width (Sutil) */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-2 flex items-center gap-4 px-5 py-4 rounded-2xl bg-white border border-[#CBD5E0] text-[#0D1B4B] shadow-sm hover:border-[#164ea3] hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
          >
            <div className="w-10 h-10 shrink-0 relative flex items-center justify-center">
              <span className="material-symbols-outlined text-[32px] text-[#25D366]">
                chat
              </span>
            </div>
            <div className="flex-1">
              <p className="font-bold text-sm leading-tight text-[#0D1B4B]">Agendar Consulta</p>
              <p className="text-[#6B7280] text-xs mt-0.5">Resposta rápida via WhatsApp</p>
            </div>
            <span className="material-symbols-outlined text-lg opacity-40 shrink-0">chevron_right</span>
          </a>

          {/* Site — meia largura */}
          <a
            href={SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-start gap-3 p-4 rounded-2xl bg-gradient-to-br from-[#0D1B4B] to-[#1A3F8F] text-white shadow-[0_4px_16px_rgba(13,27,75,0.2)] hover:shadow-[0_8px_28px_rgba(13,27,75,0.35)] hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
          >
            <Image 
              src="/renderizacao-3d-do-icone-da-interface-do-usuario.png" 
              alt="Site" 
              width={40} 
              height={40} 
              className="object-contain"
            />
            <div>
              <p className="font-bold text-sm leading-tight">Acesse o Site</p>
              <p className="text-white/60 text-xs mt-0.5">Especialidades</p>
            </div>
          </a>

          {/* Instagram — meia largura */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-start gap-3 p-4 rounded-2xl bg-white border border-[#CBD5E0] text-[#0D1B4B] shadow-sm hover:border-[#164ea3] hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
          >
            <Image 
              src="/insta.png" 
              alt="Instagram" 
              width={40} 
              height={40} 
              className="object-contain"
            />
            <div>
              <p className="font-bold text-sm leading-tight">Instagram</p>
              <p className="text-[#6B7280] text-xs mt-0.5">@drlucasnemes</p>
            </div>
          </a>

          {/* Google Maps — meia largura */}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-start gap-3 p-4 rounded-2xl bg-white border border-[#CBD5E0] text-[#0D1B4B] shadow-sm hover:border-[#164ea3] hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
          >
            <Image 
              src="/mapa.png" 
              alt="Maps" 
              width={40} 
              height={40} 
              className="object-contain"
            />
            <div>
              <p className="font-bold text-sm leading-tight">Google Maps</p>
              <p className="text-[#6B7280] text-xs mt-0.5">Ver localização</p>
            </div>
          </a>

          {/* Waze — meia largura */}
          <a
            href={WAZE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-start gap-3 p-4 rounded-2xl bg-white border border-[#CBD5E0] text-[#0D1B4B] shadow-sm hover:border-[#164ea3] hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
          >
            <span className="material-symbols-outlined text-xl text-[#33CCFF]">navigation</span>
            <div>
              <p className="font-bold text-sm leading-tight">Waze</p>
              <p className="text-[#6B7280] text-xs mt-0.5">Traçar rota</p>
            </div>
          </a>

        </div>

        {/* ── Clinic info card ──────────────────────────── */}
        <div className="w-full rounded-2xl bg-white border border-[#CBD5E0] shadow-sm p-4 space-y-3">
          <p className="text-[#6B7280] text-xs font-semibold uppercase tracking-widest">
            Clínica
          </p>
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-[#164ea3] text-xl mt-0.5 shrink-0">
              location_on
            </span>
            <div>
              <p className="text-[#0D1B4B] text-sm font-medium leading-snug">
                {CLINIC_ADDRESS}
              </p>
              <p className="text-[#6B7280] text-xs mt-0.5">
                {CLINIC_CITY} — {CLINIC_STATE}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#164ea3] text-xl shrink-0">
              schedule
            </span>
            <p className="text-[#4A5568] text-sm">{CLINIC_HOURS}</p>
          </div>
        </div>

        {/* ── Footer ────────────────────────────────────── */}
        <div className="pt-2 text-center space-y-2">
          <Image
            src="/logo-azul.png"
            alt={DOCTOR_NAME}
            width={110}
            height={28}
            className="mx-auto opacity-70"
          />
          <div className="space-y-1">
            <p className="text-[#9CA3AF] text-xs">
              © {new Date().getFullYear()} {DOCTOR_NAME} · Todos os direitos reservados
            </p>
            <a 
              href="https://majorhub.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-[#9CA3AF] text-[10px] hover:text-[#164ea3] transition-colors"
            >
              desenvolvido por @hub.major
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
