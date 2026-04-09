"use client";

import { WHATSAPP_URL, CRM, RQE } from "@/lib/constants";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">

      {/* Background (imagem sem overlay) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-secao-hero.avif"
          alt="Background seção hero"
          fill
          priority
          quality={100}
          className="object-cover object-center scale-105 animate-slow-zoom"
        />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 pb-20 pt-40">
        <div className="max-w-2xl space-y-6 animate-fade-up">

          <SectionLabel>
            DR. LUCAS NEMES
          </SectionLabel>

          <h1 className="text-3xl lg:text-4xl font-headline font-extrabold text-on-background leading-[1.05] tracking-tight">
            Nutrólogo em Cuiabá: <br />
            <span className="text-primary">Elimine o Cansaço</span> e Transforme Seu Corpo com Acompanhamento Médico Especializado!
          </h1>

          <h2 className="text-xl lg:text-2xl font-headline font-semibold text-on-surface-variant max-w-lg leading-relaxed">
            Especialista em Emagrecimento Duradouro,
            Reposição Hormonal e Performance
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              href={WHATSAPP_URL}
              variant="primary"
              size="lg"
              icon="arrow_forward"
            >
              Agende Sua Consulta
            </Button>
          </div>
        </div>

        {/* Credenciais */}
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