"use client";

import { useState } from "react";
import { WHATSAPP_URL } from "@/lib/constants";
import Image from "next/image";

interface CardData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
}

const CARDS: CardData[] = [
  {
    id: 1,
    title: "Emagrecimento Saudável",
    subtitle: "Abordagem simples e eficiente para resultados duradouros",
    description:
      "Protocolos personalizados baseados no seu metabolismo real. Vamos além da balança — analisamos composição corporal, hormônios e hábitos para garantir resultados que duram.",
    imageUrl: "/emagrecimento saudavel em cuiaba.avif",
  },
  {
    id: 2,
    title: "Longevidade e Bem-estar",
    subtitle: "Cuidamos do seu corpo e mente para uma vida melhor",
    description:
      "Tratamentos que equilibram energia, sono e saúde hormonal. Uma abordagem integrativa para você viver com mais qualidade, disposição e longevidade.",
    imageUrl: "/bemestar.avif",
  },
  {
    id: 3,
    title: "Alta Performance",
    subtitle: "Máximo desempenho através da nutrição de precisão em Cuiabá-MT",
    description:
      "Estratégias nutricionais e metabólicas para atletas e profissionais que exigem o máximo do corpo. Mais força, recuperação acelerada e foco mental.",
    imageUrl: "/alta-perfomance.avif",
  },
];

function FlipCard({ card }: { card: CardData }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div style={{ perspective: "1000px" }}>
      <div
        className="relative w-full transition-transform duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{
          height: "370px",
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FACE FRENTE */}
        <div
          className="absolute inset-0 flex flex-col rounded-2xl overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Foto */}
          <div className="relative h-44 flex-shrink-0">
            <Image
              src={card.imageUrl}
              alt={card.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/30" />
          </div>

          {/* Conteúdo glass */}
          <div
            className="flex flex-col flex-1 p-5 justify-between border border-white/50 border-t-0 rounded-b-2xl"
            style={{
              background: "rgba(255,255,255,0.55)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
            }}
          >
            <div className="space-y-1.5">
              <h3 className="text-lg font-headline font-extrabold text-primary leading-tight">
                {card.title}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {card.subtitle}
              </p>
            </div>

            <div className="flex justify-end mt-3">
              <button
                onClick={() => setFlipped(true)}
                aria-label={`Ver mais sobre ${card.title}`}
                className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-xl font-light leading-none shadow-[0_4px_16px_rgba(13,27,75,0.35)] hover:shadow-[0_6px_24px_rgba(13,27,75,0.5)] hover:scale-110 active:scale-95 transition-all duration-200 select-none cursor-pointer"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* FACE VERSO */}
        <div
          className="absolute inset-0 flex flex-col rounded-2xl overflow-hidden border border-primary/20 bg-primary p-6"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="flex flex-col flex-1 justify-between">
            <div className="space-y-4">
              <h3 className="text-xl font-headline font-extrabold text-white leading-tight">
                {card.title}
              </h3>
              <p className="text-white/80 leading-relaxed text-sm">
                {card.description}
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={WHATSAPP_URL}
                className="w-full block text-center bg-white text-primary font-bold py-3 px-6 rounded-full text-sm shadow-[0_4px_16px_rgba(255,255,255,0.2)] hover:shadow-[0_6px_24px_rgba(255,255,255,0.35)] hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
              >
                Agendar Consulta
              </a>
              <button
                onClick={() => setFlipped(false)}
                className="w-full text-center text-white/60 text-xs hover:text-white transition-colors duration-200 py-1 cursor-pointer"
              >
                ← Voltar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section
      className="py-24 bg-surface-container"
      id="nutrologia-medica-cuiaba"
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-secondary bg-primary-fixed px-4 py-1.5 rounded-full">
            Nutrologia Médica em Cuiabá
          </span>
          <h2 className="text-4xl font-headline font-extrabold text-primary tracking-tight">
            Descubra como a Nutrologia médica personalizada pode transformar sua
            qualidade de vida.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CARDS.map((card) => (
            <FlipCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
