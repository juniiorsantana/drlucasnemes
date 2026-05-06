"use client";

import { WHATSAPP_URL } from "@/lib/constants";
import { trackWhatsAppConversion } from "@/lib/analytics";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  const highlights = [
    "Sem fidelidade",
    "Resposta em até 24h",
    "Plano 100% individualizado",
  ];

  return (
    <section className="relative overflow-hidden py-24 bg-primary text-on-primary">
      {/* Círculos decorativos de fundo */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute -bottom-20 -right-16 h-72 w-72 rounded-full bg-white/5" />

      <div className="relative z-10 max-w-2xl mx-auto px-8 text-center">

        {/* Badge de disponibilidade */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-on-primary/80 mb-8">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Consultas disponíveis esta semana
        </div>

        <h2 className="text-4xl font-headline font-black tracking-tight leading-tight mb-5">
          Pronto para transformar
          <br />
          sua saúde de verdade?
        </h2>

        <p className="text-lg text-on-primary/70 leading-relaxed mb-10">
          Na primeira consulta, avaliamos suas metas, analisamos seus dados e
          montamos um plano personalizado. Simples, direto e eficaz.
        </p>

        {/* Mini-benefícios */}
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10">
          {highlights.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-on-primary/70">
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/50 bg-emerald-400/15 text-emerald-400 text-[10px]">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>

        <Button
          href={WHATSAPP_URL}
          variant="whatsapp"
          size="lg"
          onLinkClick={trackWhatsAppConversion}
          icon={
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12.004 2C6.477 2 2 6.477 2 12.004a9.97 9.97 0 001.376 5.043L2 22l5.09-1.348A9.96 9.96 0 0012.004 22C17.528 22 22 17.523 22 12.004 22 6.477 17.528 2 12.004 2zm0 18.16a8.144 8.144 0 01-4.17-1.148l-.298-.178-3.022.8.809-2.964-.194-.305A8.162 8.162 0 013.84 12.004c0-4.509 3.665-8.173 8.164-8.173 4.499 0 8.16 3.664 8.16 8.173 0 4.508-3.661 8.156-8.16 8.156z"/>
            </svg>
          }
        >
          Agendar Minha Consulta Agora
        </Button>

        <p className="mt-4 text-xs text-on-primary/40">
          Atendimento pelo WhatsApp · Sem compromisso
        </p>
      </div>
    </section>
  );
}