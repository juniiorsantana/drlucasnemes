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
const YOUTUBE_URL = "https://youtube.com/@drlucasnemes";

const links = [
  {
    id: "agendar",
    label: "Agendar Consulta",
    sublabel: "Resposta rápida via WhatsApp",
    href: WHATSAPP_URL,
    icon: "chat",
    variant: "whatsapp" as const,
  },
  {
    id: "site",
    label: "Acesse o Site", //* MUDAR PARA: "Acesse o Site"//
    sublabel: "Conheça todas as especialidades",
    href: SITE_URL,
    icon: "open_in_new",
    variant: "primary" as const,
  },
  {
    id: "instagram",
    label: "Instagram",
    sublabel: "@drlucasnemes",
    href: INSTAGRAM_URL,
    icon: "photo_camera",
    variant: "social" as const,
  },
  {
    id: "youtube",
    label: "YouTube",
    sublabel: "Conteúdo sobre saúde e nutrologia",
    href: YOUTUBE_URL,
    icon: "play_circle",
    variant: "social" as const,
  },
  {
    id: "maps",
    label: "Ver no Google Maps",
    sublabel: `${CLINIC_ADDRESS}, ${CLINIC_CITY}-${CLINIC_STATE}`,
    href: MAPS_URL,
    icon: "location_on",
    variant: "map" as const,
  },
  {
    id: "waze",
    label: "Abrir no Waze",
    sublabel: "Traçar rota até a clínica",
    href: WAZE_URL,
    icon: "navigation",
    variant: "map" as const,
  },
];

const specialties = [
  "Emagrecimento Saudável",
  "Longevidade & Bem-estar",
  "Alta Performance",
  "Reposição Hormonal",
  "Nutrologia Clínica",
];

const variantStyles: Record<string, string> = {
  whatsapp: [
    "bg-[#25D366] text-white",
    "shadow-[0_6px_24px_rgba(37,211,102,0.35)]",
    "hover:shadow-[0_10px_36px_rgba(37,211,102,0.55)]",
    "hover:-translate-y-0.5",
  ].join(" "),
  primary: [
    "bg-gradient-to-r from-[#164ea3] to-[#2563C2] text-white",
    "shadow-[0_6px_24px_rgba(22,78,163,0.3)]",
    "hover:shadow-[0_10px_36px_rgba(22,78,163,0.5)]",
    "hover:-translate-y-0.5",
  ].join(" "),
  social: [
    "bg-white text-[#0D1B4B] border border-[#CBD5E0]",
    "hover:border-[#164ea3] hover:text-[#164ea3]",
    "shadow-sm hover:shadow-md hover:-translate-y-0.5",
  ].join(" "),
  map: [
    "bg-[#F0F3F7] text-[#0D1B4B] border border-[#CBD5E0]",
    "hover:border-[#164ea3] hover:bg-white",
    "shadow-sm hover:shadow-md hover:-translate-y-0.5",
  ].join(" "),
};

export default function BioPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0D1B4B] via-[#1A3F8F] to-[#0D1B4B] flex flex-col items-center px-4 py-10 pb-16">
      {/* Background subtle pattern */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 0%, #7FA8D4 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 w-full max-w-sm flex flex-col items-center gap-6">

        {/* ── Avatar ────────────────────────────────────── */}
        <div className="relative mt-4">
          <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            <Image
              src="/dr-lucas-nemes-og.avif"
              alt={`Foto de ${DOCTOR_NAME}`}
              width={112}
              height={112}
              className="w-full h-full object-cover object-top"
              priority
            />
          </div>
          {/* Online badge */}
          <span className="absolute bottom-1 right-1 w-4 h-4 bg-[#25D366] rounded-full border-2 border-[#0D1B4B]" />
        </div>

        {/* ── Identity ──────────────────────────────────── */}
        <div className="text-center space-y-1">
          <h1
            className="text-2xl font-extrabold text-white tracking-tight"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            {DOCTOR_NAME}
          </h1>
          <p className="text-[#7FA8D4] font-medium text-sm">
            {DOCTOR_SPECIALTY}
          </p>
          <p className="text-white/40 text-xs">
            {CRM} &nbsp;·&nbsp; {RQE}
          </p>
        </div>

        {/* ── Specialty badges ──────────────────────────── */}
        <div className="flex flex-wrap justify-center gap-2">
          {specialties.map((s) => (
            <span
              key={s}
              className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-medium border border-white/10 backdrop-blur-sm"
            >
              {s}
            </span>
          ))}
        </div>

        {/* ── Divider ───────────────────────────────────── */}
        <div className="w-full h-px bg-white/10" />

        {/* ── Links ─────────────────────────────────────── */}
        <div className="w-full flex flex-col gap-3">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={[
                "w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl",
                "transition-all duration-200 active:scale-95 cursor-pointer",
                variantStyles[link.variant],
              ].join(" ")}
            >
              <span className="material-symbols-outlined text-[22px] shrink-0">
                {link.icon}
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm leading-tight">
                  {link.label}
                </p>
                {link.sublabel && (
                  <p className="text-xs opacity-70 truncate mt-0.5">
                    {link.sublabel}
                  </p>
                )}
              </div>
              <span className="material-symbols-outlined text-base opacity-40 shrink-0">
                chevron_right
              </span>
            </a>
          ))}
        </div>

        {/* ── Clinic info card ──────────────────────────── */}
        <div className="w-full rounded-2xl bg-white/8 border border-white/12 backdrop-blur-sm p-4 space-y-3">
          <p className="text-white/60 text-xs font-semibold uppercase tracking-widest">
            Clínica
          </p>
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-[#7FA8D4] text-xl mt-0.5 shrink-0">
              location_on
            </span>
            <div>
              <p className="text-white text-sm font-medium leading-snug">
                {CLINIC_ADDRESS}
              </p>
              <p className="text-white/50 text-xs mt-0.5">
                {CLINIC_CITY} — {CLINIC_STATE}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#7FA8D4] text-xl shrink-0">
              schedule
            </span>
            <p className="text-white/70 text-sm">{CLINIC_HOURS}</p>
          </div>
        </div>

        {/* ── Footer ────────────────────────────────────── */}
        <div className="pt-4 text-center space-y-1">
          <Image
            src="/Logo-light.png"
            alt={DOCTOR_NAME}
            width={120}
            height={32}
            className="mx-auto opacity-60"
          />
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} {DOCTOR_NAME} · Todos os direitos
            reservados
          </p>
        </div>
      </div>
    </main>
  );
}
