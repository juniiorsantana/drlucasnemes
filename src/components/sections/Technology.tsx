"use client";

import { useRef } from "react";

const CARDS = [
  {
    id: 1,
    title: "Calorimetria indireta",
    description:
      "Descobrimos quantas calorias seu corpo realmente consome em repouso. Sem achismo — seu plano é baseado no seu metabolismo real.",
    image:
      "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=1200",
  },
  {
    id: 2,
    title: "Bioimpedância Avançada",
    description:
      "Mapeamos em detalhes sua composição corporal — gordura, massa magra e retenção de líquidos — para entender exatamente o que está impedindo seu resultado.",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200",
  },
  {
    id: 3,
    title: "Exame DEXA",
    description:
      "O exame mais preciso do mundo para análise corporal. Identificamos com exatidão onde está a gordura, a massa muscular e possíveis desequilíbrios.",
    image:
      "https://images.unsplash.com/photo-1581595219315-a187dd40c322?q=80&w=1200",
    highlight: true,
    tag: "Padrão ouro em análise corporal",
  },
  {
    id: 4,
    title: "Protocolo Biologix",
    description:
      "Integramos todos os dados para criar um plano estratégico totalmente personalizado, focado em corrigir a raiz do problema e acelerar seus resultados.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200",
  },
];

export default function TechnologyStack() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="tecnologia"
      ref={sectionRef}
      className="bg-surface py-32 relative"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER NORMAL */}
        <div className="mb-20 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
            Como Avaliamos
          </p>
          <h2 className="text-4xl font-extrabold text-primary mt-2 leading-tight">
            Diagnóstico de Precisão com Tecnologia de Última Geração
          </h2>
        </div>

        {/* DESKTOP */}
        <div className="relative hidden lg:block">
          <div className="h-[2200px] relative">
            {CARDS.map((card, index) => (
              <div
                key={card.id}
                className="sticky"
                style={{
                  top: `${120 + index * 50}px`,
                  zIndex: 10 + index,
                }}
              >
                <div
                  className={`
                    grid grid-cols-2 h-[360px] mb-20 rounded-3xl overflow-hidden
                    border transition-all duration-300
                    ${card.highlight
                      ? "bg-primary text-white border-transparent shadow-2xl"
                      : "bg-white text-primary border-gray-100 shadow-lg"
                    }
                  `}
                >
                  {/* IMAGEM */}
                  <div className="h-full w-full overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* CONTEÚDO */}
                  <div className="flex flex-col justify-center p-10">
                    <span
                      className={`
                        inline-block text-xs font-semibold px-3 py-1 rounded-md w-fit mb-3
                        ${card.highlight
                          ? "bg-white/10 text-white/70"
                          : "bg-gray-100 text-gray-400"
                        }
                      `}
                    >
                      0{card.id}
                    </span>

                    <h3 className="text-2xl font-bold">
                      {card.title}
                    </h3>

                    {card.tag && (
                      <p className="text-xs mt-2 uppercase opacity-70">
                        {card.tag}
                      </p>
                    )}

                    <p
                      className={`mt-4 ${card.highlight ? "opacity-85" : "text-gray-500"
                        }`}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE */}
        <div className="lg:hidden space-y-4">
          {CARDS.map((card) => (
            <div
              key={card.id}
              className={`
                rounded-2xl overflow-hidden border shadow-md
                ${card.highlight
                  ? "bg-primary text-white border-transparent"
                  : "bg-white text-primary border-gray-100"
                }
              `}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg font-bold">
                  {card.title}
                </h3>

                {card.tag && (
                  <p className="text-xs mt-1 uppercase opacity-70">
                    {card.tag}
                  </p>
                )}

                <p className="mt-2 text-sm opacity-75">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}