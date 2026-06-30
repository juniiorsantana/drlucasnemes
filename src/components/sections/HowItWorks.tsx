"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

const HOW_IT_WORKS = [
  {
    type: "main",
    badge: "Serviços",
    title: "Terapêuticos Personalizados",
    description: "Reposições e tratamentos personalizados para melhorar sua saúde, elevar seu bem-estar de forma inteligente.",
    bullets: [
      "Ganho de energia e disposição",
      "Melhora desempenho físico e mental",
      "Redução do estresse e da fadiga",
      "Controle de peso"
    ],
    image: "/drlucasnemes1.jpg",
  },
  {
    type: "grid",
    badge: "Etapa de Reequilíbrio",
    title: "Terapia com injetáveis",
    description: "Reposição estratégica de nutrientes, vitaminas e substâncias essenciais diretamente na corrente sanguínea. Ideal para:",
    bullets: [
      "Fortalecer o sistema imunológico",
      "Acelerar recuperação muscular",
      "Otimizar o metabolismo",
      "Controle de peso"
    ],
    image: "/Saude_Soroterapia-terapias-injetaveis.webp",
  },
  {
    type: "grid",
    badge: "Fase de Equilíbrio",
    title: "Implantes Hormonais",
    description: "Liberação contínua e controlada de hormônios. Adaptada às necessidades do seu corpo. Indicado para:",
    bullets: [
      "Mulheres na pós-menopausa",
      "Mulheres com endometriose",
      "Mulheres com necessidade de bloqueio de ciclo menstrual",
      "Homens com hipogonadismo",
      "Tratamento de sarcopenia severa"
    ],
    image: "/reposicao-hormonal.avif",
  }
];

export default function HowItWorks() {
  const mainCard = HOW_IT_WORKS.find(item => item.type === "main");
  const gridCards = HOW_IT_WORKS.filter(item => item.type === "grid");

  return (
    <section id="como-funciona" className="bg-surface py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SECTION HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-heading max-w-4xl mx-auto leading-tight tracking-tight font-headline">
            Entenda como potencializamos sua saúde com precisão, tecnologia e <span className="italic font-normal text-accent">cuidado personalizado</span>.
          </h2>
        </motion.div>

        {/* MAIN HORIZONTAL CARD */}
        {mainCard && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surface-container-high rounded-[2rem] overflow-hidden shadow-sm border border-outline-variant/30 mb-8"
          >
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-16 flex flex-col justify-center">
                <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-4 block">
                  {mainCard.badge}
                </span>
                <h3 className="text-2xl lg:text-4xl font-semibold text-heading mb-6">
                  {mainCard.title}
                </h3>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                  {mainCard.description}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {mainCard.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-on-surface-variant">
                      <div className="bg-emerald-500/10 p-1 rounded-full">
                        <Check className="w-4 h-4 text-emerald-500" strokeWidth={3} />
                      </div>
                      <span className="font-medium">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="h-[300px] lg:h-auto relative">
                <img 
                  src={mainCard.image} 
                  alt={mainCard.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl lg:rounded-none m-4 lg:m-0 w-[calc(100%-2rem)] lg:w-full h-[calc(100%-2rem)] lg:h-full"
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* GRID CARDS */}
        <div className="grid lg:grid-cols-2 gap-8">
          {gridCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: index === 0 ? 0 : 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-surface-container-high rounded-[2rem] overflow-hidden shadow-sm border border-outline-variant/30 flex flex-col"
            >
              <div className="h-64 relative">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12">
                <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-4 block">
                  {card.badge}
                </span>
                <h3 className="text-2xl lg:text-3xl font-semibold text-heading mb-6">
                  {card.title}
                </h3>
                <p className="text-on-surface-variant text-base leading-relaxed mb-8">
                  {card.description}
                </p>
                <ul className="space-y-4">
                  {card.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-on-surface-variant">
                      <div className="bg-emerald-500/10 p-1 rounded-full shrink-0">
                        <Check className="w-4 h-4 text-emerald-500" strokeWidth={3} />
                      </div>
                      <span className="font-medium">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}