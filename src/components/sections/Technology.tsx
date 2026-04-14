"use client";

import { useRef } from "react";

const CARDS = [
  {
    id: 1,
    title: "Calorimetria indireta",
    description:
      "Descobrimos quantas calorias seu corpo realmente consome em repouso. Sem achismo — seu plano é baseado no seu metabolismo real.",
    image: "https://www.mdi-industrial.com/wp-content/themes/mdi/theme/img/hm-fit-3.jpg",
  },
  {
    id: 2,
    title: "Bioimpedância Avançada",
    description:
      "Mapeamos em detalhes sua composição corporal — gordura, massa magra e retenção de líquidos — para entender exatamente o que está impedindo seu resultado.",
    image: "/bioimpedancia.avif",
  },
  {
    id: 3,
    title: "Exame DEXA",
    description:
      "O exame mais preciso do mundo para análise corporal. Identificamos com exatidão onde está a gordura, a massa muscular e possíveis desequilíbrios.",
    image: "https://lirp.cdn-website.com/8cda7eac/dms3rep/multi/opt/dexa-scan-metabolic-health-liquivida-1920w.webp",
    highlight: true,
    tag: "Padrão ouro em análise corporal",
  },
  {
    id: 4,
    title: "Protocolo Biologix",
    description:
      "Integramos todos os dados para criar um plano estratégico totalmente personalizado, focado em corrigir a raiz do problema e acelerar seus resultados.",
    image: "/biologix-em-cuiaba.avif",
  },
  {
    id: 5,
    title: "Teste Respiratório de Hidrogênio e Metano",
    description:
      "Identificamos com precisão a presença de SIBO (supercrescimento bacteriano no intestino delgado) e intolerâncias alimentares como lactose e frutose.",
    image: "/teste-respiratorio-1018x1024.webp",
    tag: "Diagnóstico intestinal avançado",
    learnMoreUrl: "https://www.drlucasnemes.com.br/blog/teste-respiratorio-de-hidrogenio-e-metano",
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

        {/* HEADER */}
        <div className="mb-20 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
            Como Avaliamos
          </p>
          <h2 className="text-4xl font-extrabold text-primary mt-2 leading-tight">
            Diagnóstico de Precisão com Tecnologia de Última Geração
          </h2>
        </div>

        {/* STACK — funciona em mobile e desktop */}
        <div className="h-[calc(360px*5+80px*4)] lg:h-[2750px] relative">
          {CARDS.map((card, index) => (
            <div
              key={card.id}
              className="sticky"
              style={{
                top: `${80 + index * 40}px`,
                zIndex: 10 + index,
              }}
            >
              <div
                className={`
                  mb-5 lg:mb-20 rounded-2xl lg:rounded-3xl overflow-hidden
                  border transition-all duration-300
                  ${card.highlight
                    ? "bg-primary text-white border-transparent shadow-2xl"
                    : "bg-white text-primary border-gray-100 shadow-lg"
                  }
                `}
              >
                {/* MOBILE: imagem em cima, conteúdo embaixo */}
                <div className="lg:hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-44 object-cover"
                  />
                  <div className="p-5">
                    <span
                      className={`inline-block text-xs font-semibold px-3 py-1 rounded-md w-fit mb-2 ${
                        card.highlight
                          ? "bg-white/10 text-white/70"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      0{card.id}
                    </span>
                    <h3 className="text-lg font-bold">{card.title}</h3>
                    {card.tag && (
                      <p className="text-xs mt-1 uppercase opacity-70">{card.tag}</p>
                    )}
                    <p className={`mt-2 text-sm ${card.highlight ? "opacity-85" : "text-gray-500"}`}>
                      {card.description}
                    </p>
                    {card.learnMoreUrl && (
                      <a
                        href={card.learnMoreUrl}
                        className="inline-block mt-4 text-sm font-semibold px-5 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
                      >
                        Saber mais
                      </a>
                    )}
                  </div>
                </div>

                {/* DESKTOP: grid 2 colunas */}
                <div className="hidden lg:grid grid-cols-2 h-[360px]">
                  <div className="h-full w-full overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-10">
                    <span
                      className={`inline-block text-xs font-semibold px-3 py-1 rounded-md w-fit mb-3 ${
                        card.highlight
                          ? "bg-white/10 text-white/70"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      0{card.id}
                    </span>
                    <h3 className="text-2xl font-bold">{card.title}</h3>
                    {card.tag && (
                      <p className="text-xs mt-2 uppercase opacity-70">{card.tag}</p>
                    )}
                    <p className={`mt-4 ${card.highlight ? "opacity-85" : "text-gray-500"}`}>
                      {card.description}
                    </p>
                    {card.learnMoreUrl && (
                      <a
                        href={card.learnMoreUrl}
                        className="inline-block mt-6 w-fit text-sm font-semibold px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
                      >
                        Saber mais
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
