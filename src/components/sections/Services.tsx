"use client";

import Image from "next/image";
import { WHATSAPP_URL } from "@/lib/constants";

interface CardData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  icon: string;
}

const CARDS: CardData[] = [
  {
    id: 1,
    title: "Emagrecimento Saudável",
    description:
      "Abordagem simples e eficiente para resultados duradouros com saúde e equilíbrio.",
    imageUrl: "/emagrecimento saudavel em cuiaba.avif",
    icon: "⚖️",
  },
  {
    id: 2,
    title: "Longevidade e Bem-estar",
    description:
      "Cuidamos do seu corpo e mente para uma vida melhor hoje e no futuro.",
    imageUrl: "/bemestar.avif",
    icon: "🌿",
  },
  {
    id: 3,
    title: "Alta Performance",
    description:
      "Máximo desempenho através da nutrição de precisão e estratégias personalizadas.",
    imageUrl: "/alta-perfomance.avif",
    icon: "🏋️",
  },
];

function ServiceCard({ card }: { card: CardData }) {
  return (
    <div className="group flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-[#0D1220] hover:border-white/20 transition-all duration-300">
      {/* Image */}
      <div className="relative h-52 flex-shrink-0 overflow-hidden">
        <Image
          src={card.imageUrl}
          alt={card.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/60" />

        {/* Icon badge */}
        <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-lg">
          {card.icon}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 justify-between gap-4">
        <div className="space-y-2">
          <h3 className="text-base font-headline font-semibold text-white leading-snug">
            {card.title}
          </h3>
          <p className="text-white/55 text-sm leading-relaxed">
            {card.description}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-white/10">
          <a
            href={WHATSAPP_URL}
            className="text-white/50 text-sm hover:text-white transition-colors duration-200"
          >
            Saiba mais
          </a>
          <a
            href={WHATSAPP_URL}
            aria-label={`Saiba mais sobre ${card.title}`}
            className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:border-white/40 hover:text-white transition-all duration-200"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 7H11.5M11.5 7L7.5 3M11.5 7L7.5 11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section className="relative py-24 bg-[#0A0E1A] overflow-hidden" id="nutrologia-medica-cuiaba">
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Diagonal lines animadas */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 40px)",
          backgroundSize: "56px 56px",
          animation: "diag-move 18s linear infinite",
        }}
      />

      <style>{`
        @keyframes diag-move {
          0%   { background-position: 0 0; }
          100% { background-position: 56px 56px; }
        }
      `}</style>

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-5">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent bg-elevated border border-subtle px-4 py-1.5 rounded-full">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Nutrologia Médica Personalizada
          </span>

          <h2 className="text-4xl font-headline font-semibold text-heading tracking-tight leading-tight">
            Descubra como a Nutrologia médica personalizada pode transformar sua{" "}
            <span className="text-accent">qualidade de vida.</span>
          </h2>

          <p className="text-body text-base leading-relaxed">
            Planos individualizados, baseados em ciência e tecnologia, para
            resultados reais e duradouros.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((card) => (
            <ServiceCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
