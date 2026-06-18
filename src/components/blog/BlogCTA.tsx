"use client";

import { trackWhatsAppConversion } from "@/lib/analytics";

interface BlogCTAProps {
  message?: string;
}

export default function BlogCTA({
  message = 'Olá%20Dr.%20Lucas!%20Vim%20pelo%20blog%20e%20gostaria%20de%20agendar%20uma%20consulta.',
}: BlogCTAProps) {
  const waUrl = `https://wa.me/556596971216?text=${message}`;

  return (
    <div className="not-prose my-10 rounded-2xl overflow-hidden border border-outline/10 shadow-editorial">
      {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-[#185FA5] to-[#2563C2]" />

      <div className="bg-surface-container-lowest px-6 py-8 sm:px-8 sm:py-10">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          {/* Icon */}
          <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#185FA5]/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-[#185FA5] text-3xl">
              calendar_month
            </span>
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold uppercase tracking-widest text-[#185FA5] mb-1">
              Consulta com Dr. Lucas Nemes
            </p>
            <p className="text-lg font-semibold text-heading leading-snug">
              Tem dúvidas ou quer solicitar o exame?
            </p>
            <p className="text-sm text-on-surface-variant mt-1">
              Atendimento direto pelo WhatsApp. Resposta rápida.
            </p>
          </div>

          {/* Button */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackWhatsAppConversion}
            className="flex-shrink-0 inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(37,211,102,0.35)] transition-all duration-300 hover:shadow-[0_6px_28px_rgba(37,211,102,0.55)] hover:-translate-y-0.5 active:scale-95 whitespace-nowrap"
          >
            <svg className="w-5 h-5 fill-white flex-shrink-0" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.118.55 4.107 1.512 5.84L.057 23.943l6.305-1.455A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.005-1.373l-.36-.213-3.732.861.882-3.622-.233-.373A9.818 9.818 0 1112 21.818z" />
            </svg>
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
