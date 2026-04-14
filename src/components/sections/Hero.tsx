"use client";

import { WHATSAPP_URL, CRM, RQE } from "@/lib/constants";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen lg:min-h-screen flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-end overflow-hidden bg-background">

      {/* Background (imagem sem overlay) - Desktop Only */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <Image
          src="/bg-secao-hero2.avif"
          alt="Background seção hero"
          fill
          priority
          quality={100}
          className="object-cover object-center scale-105 animate-slow-zoom"
        />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-10 lg:pb-40 pt-32 lg:pt-40 flex flex-col lg:block items-center text-center lg:text-left">
        <div className="max-w-2xl space-y-6 animate-fade-up">

          <SectionLabel>
            DR. LUCAS NEMES - CRM/MT 8060 - RQE 7982
          </SectionLabel>

          <h1 className="text-3xl lg:text-4xl font-headline font-extrabold text-on-background leading-[1.05] tracking-tight">
            Nutrólogo em Cuiabá: <br />
            <span className="text-primary">Alcance a saúde plena</span> e Transforme Seu Corpo com Acompanhamento Médico Especializado!
          </h1>

          <h2 className="text-xl lg:text-2xl font-headline font-semibold text-on-surface-variant max-w-lg leading-relaxed">
            Especialista em Emagrecimento Duradouro,
            Reposição Hormonal e Performance
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
            <Button
              href={WHATSAPP_URL}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
              icon={
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12.004 2C6.477 2 2 6.477 2 12.004a9.97 9.97 0 001.376 5.043L2 22l5.09-1.348A9.96 9.96 0 0012.004 22C17.528 22 22 17.523 22 12.004 22 6.477 17.528 2 12.004 2zm0 18.16a8.144 8.144 0 01-4.17-1.148l-.298-.178-3.022.8.809-2.964-.194-.305A8.162 8.162 0 013.84 12.004c0-4.509 3.665-8.173 8.164-8.173 4.499 0 8.16 3.664 8.16 8.173 0 4.508-3.661 8.156-8.16 8.156z"/>
                </svg>
              }
            >
              Agende Sua Consulta
            </Button>
          </div>
        </div>

        {/* Foto Mobile - Visible only on mobile */}
        <div className="relative w-full mt-12 lg:hidden">
          <Image
            src="/bg-mobile.avif"
            alt="Dr. Lucas Nemes"
            width={600}
            height={800}
            priority
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Credenciais - Desktop Only */}
        <div className="absolute bottom-20 right-8 hidden lg:flex flex-col items-end gap-1">
          <p className="text-on-surface-variant/80 text-xs font-label tracking-widest uppercase">
            Credenciais
          </p>
          <p className="text-primary font-headline font-bold text-lg leading-none">
            {CRM}
          </p>
          <p className="text-on-surface-variant/90 text-xs font-label">
            {RQE}
          </p>
        </div>
      </div>
    </section>
  );
}