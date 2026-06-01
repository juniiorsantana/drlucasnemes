"use client";

import { WHATSAPP_URL, CRM, RQE } from "@/lib/constants";
import { trackWhatsAppConversion } from "@/lib/analytics";
import Button from "@/components/ui/Button";
import Image from "next/image";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12.004 2C6.477 2 2 6.477 2 12.004a9.97 9.97 0 001.376 5.043L2 22l5.09-1.348A9.96 9.96 0 0012.004 22C17.528 22 22 17.523 22 12.004 22 6.477 17.528 2 12.004 2zm0 18.16a8.144 8.144 0 01-4.17-1.148l-.298-.178-3.022.8.809-2.964-.194-.305A8.162 8.162 0 013.84 12.004c0-4.509 3.665-8.173 8.164-8.173 4.499 0 8.16 3.664 8.16 8.173 0 4.508-3.661 8.156-8.16 8.156z" />
  </svg>
);


export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-end lg:justify-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* Mobile */}
        <Image
          src="/bgheroMobile.avif"
          alt="Dr. Lucas Nemes — Nutrólogo em Cuiabá"
          fill
          priority
          quality={90}
          className="object-cover object-top lg:hidden"
        />
        {/* Desktop */}
        <Image
          src="/bghero.avif"
          alt="Dr. Lucas Nemes — Nutrólogo em Cuiabá"
          fill
          priority
          quality={90}
          className="object-cover object-center hidden lg:block"
        />
        {/* Mobile: gradiente de baixo para cima */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080f2a]/90 via-[#080f2a]/55 to-[#080f2a]/10 lg:hidden" />
        {/* Desktop: gradiente começa na direita e some antes da foto */}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              "linear-gradient(to left, rgba(8,15,42,0.96) 0%, rgba(8,15,42,0.88) 28%, rgba(8,15,42,0.45) 52%, transparent 72%)",
          }}
        />
        <div className="absolute inset-0 hidden lg:block bg-[radial-gradient(ellipse_50%_70%_at_90%_60%,rgba(127,179,232,0.06)_0%,transparent_70%)]" />
      </div>

      {/* Card de credenciais glass — desktop, lado esquerdo */}
      <div className="absolute left-8 bottom-10 hidden lg:flex flex-col gap-3 z-20">
        <div
          className="flex flex-col gap-2.5 px-5 py-4 rounded-2xl"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.10)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          <div className="flex items-center gap-2 mb-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7FB3E8] animate-pulse shrink-0" />
            <p className="text-white/40 text-[9px] font-label tracking-[0.2em] uppercase">
              Credenciais Médicas
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-white/20 text-[9px] font-label uppercase tracking-widest w-8">CRM</span>
              <span className="text-white font-headline font-bold text-sm leading-none">
                {CRM.replace("CRM/MT ", "")}
              </span>
              <span className="text-white/30 text-[9px] font-label uppercase">MT</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white/20 text-[9px] font-label uppercase tracking-widest w-8">RQE</span>
              <span className="text-[#7FB3E8] font-headline font-semibold text-sm leading-none">
                {RQE.replace("RQE ", "")}
              </span>
            </div>
          </div>

          <div className="h-px bg-white/[0.07]" />

          <p className="text-white/35 text-[10px] font-label leading-snug">
            Nutrologia · Medicina do Esporte
          </p>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-16 lg:pb-0 pt-20 lg:pt-20 flex flex-col lg:flex-row lg:justify-end items-center lg:items-center text-center lg:text-left">
        <div className="w-full max-w-[420px] lg:mr-[13%] space-y-5 animate-fade-up">

          {/* Micro-texto (subiu) */}
          <p className="text-white/40 text-[11px] font-label tracking-wide">
            Consultas presenciais e online · Cuiabá, MT
          </p>

          {/* Overline */}
          <p className="font-label text-[11px] font-bold uppercase tracking-[0.22em] text-[#7FB3E8]">
            Nutrólogo em Cuiabá
          </p>

          {/* Headline principal */}
          <h1 className="text-[1.3rem] sm:text-[1.85rem] lg:text-[2.1rem] font-headline font-extrabold text-white leading-[1.15] tracking-tight">
            <span className="text-[#7FB3E8]">Alcance a saúde plena</span>{" "}
            e Transforme Seu Corpo com Acompanhamento Médico Especializado
          </h1>

          {/* Subtítulo */}
          <p className="text-sm sm:text-base lg:text-[16px] font-body text-white/80 leading-relaxed">
            Especialista certificado com abordagem médica completa e personalizada para resultados duradouros.
          </p>

          {/* Divisor sutil */}
          <div className="flex items-center gap-3 lg:justify-start opacity-40">
            <span className="flex-1 lg:flex-none lg:w-12 h-px bg-white/40" />
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span className="flex-1 lg:flex-none lg:w-12 h-px bg-white/40" />
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <Button
              href={WHATSAPP_URL}
              variant="whatsapp"
              size="lg"
              className="w-full sm:w-auto"
              onLinkClick={trackWhatsAppConversion}
              icon={<WhatsAppIcon />}
            >
              Agende Sua Consulta
            </Button>
          </div>

          {/* Badge de identidade — linha única */}
          <div className="flex justify-center lg:justify-start">
            <div
              className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(127,179,232,0.2)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3 shrink-0 text-[#7FB3E8]">
                <path d="M8 1l1.8 2.2 2.7-.7-.7 2.7L14 7l-2.2 1 .7 2.7-2.7-.7L8 12.3 6.2 10l-2.7.7.7-2.7L2 7l2.2-1.8-.7-2.7 2.7.7L8 1z" fill="currentColor" opacity="0.3"/>
                <path d="M6 8l1.5 1.5 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-label text-[10px] font-bold uppercase tracking-[0.13em] text-white/85 whitespace-nowrap">
                Dr. Lucas Nemes
              </span>
              <span className="w-px h-2.5 bg-white/20 shrink-0" />
              <span className="font-label text-[9px] font-medium uppercase tracking-[0.1em] text-white/40 whitespace-nowrap">
                {CRM} · {RQE}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
