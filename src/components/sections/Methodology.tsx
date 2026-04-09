"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const services = [
  "Ganho de energia e disposição",
  "Melhora desempenho físico e mental",
  "Redução do estresse e da fadiga",
  "Controle de peso",
];

const injectables = [
  "Fortalecer o sistema imunológico",
  "Acelerar recuperação muscular",
  "Otimizar o metabolismo",
  "Controle de peso",
];

const hormones = [
  "Ganho de massa muscular",
  "Melhora da disposição e libido",
  "Estabilidade no controle de peso",
  "Bem-estar geral",
];

export default function Methodology() {
  return (
    <section className="bg-surface py-24 lg:py-32 relative" id="como-funciona">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block border border-primary/20 text-primary bg-white rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6"
          >
            Como Funciona?
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary leading-tight font-headline"
          >
            Entenda como potencializamos sua saúde com precisão, tecnologia e <span className="text-secondary">cuidado personalizado.</span>
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative">
          
          {/* Card 1 (Wide - Top) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-white rounded-3xl overflow-hidden shadow-glass border border-gray-100 flex flex-col lg:flex-row group transition-all duration-500 hover:shadow-2xl hover:border-gray-200"
          >
            {/* Image (Mobile: Top, Desktop: Right) */}
            <div className="lg:w-1/2 w-full h-[300px] lg:h-auto lg:order-2 overflow-hidden relative">
               {/* Usando Quem sou.avif temporariamente como placeholder p/ foto do doutor */}
              <img 
                src="/Quem sou.avif" 
                alt="Terapêuticos Personalizados" 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:hidden" />
            </div>

            {/* Content Container */}
            <div className="lg:w-1/2 p-8 lg:p-12 xl:p-16 flex flex-col justify-center order-1">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 block">
                Serviços
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-headline">
                Terapêuticos <span className="text-secondary">Personalizados</span>
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Reposições e tratamentos personalizados para melhorar sua saúde, elevar seu bem-estar de forma inteligente.
              </p>

              <ul className="space-y-4">
                {services.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700 font-medium">
                    <div className="min-w-6 min-h-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-secondary" strokeWidth={3} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Card 2 (Small - Bottom Left) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="bg-white rounded-3xl overflow-hidden shadow-glass border border-gray-100 flex flex-col group transition-all duration-500 hover:shadow-2xl hover:border-gray-200"
          >
             <div className="w-full h-[240px] overflow-hidden bg-gray-50">
               {/* Placeholder image (calendar/injection) */}
              <img 
                src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=800&auto=format&fit=crop" 
                alt="Calendário de tratamentos" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            <div className="p-8 flex-1 flex flex-col">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">
                Etapa de Reequilíbrio
              </span>
              <h3 className="text-2xl font-bold text-primary mb-4 font-headline">
                Terapia com injetáveis
              </h3>
              <p className="text-gray-500 mb-6 leading-relaxed flex-1">
                Reposição estratégica de nutrientes, vitaminas e substâncias essenciais diretamente na corrente sanguínea. Ideal para:
              </p>

              <ul className="space-y-3">
                {injectables.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                     <div className="min-w-5 min-h-5 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-secondary" strokeWidth={3} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Card 3 (Small - Bottom Right) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white rounded-3xl overflow-hidden shadow-glass border border-gray-100 flex flex-col group transition-all duration-500 hover:shadow-2xl hover:border-gray-200"
          >
            <div className="w-full h-[240px] overflow-hidden bg-gray-50">
              {/* Placeholder image (fitness/hormonal) */}
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop" 
                alt="Alta performance" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="p-8 flex-1 flex flex-col">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">
                Fase de Equilíbrio
              </span>
              <h3 className="text-2xl font-bold text-primary mb-4 font-headline">
                Implantes Hormonais
              </h3>
              <p className="text-gray-500 mb-6 leading-relaxed flex-1">
                <strong className="text-primary font-semibold">Liberação contínua e controlada de hormônios.</strong> Adaptada às necessidades do seu corpo. Indicado para:
              </p>

              <ul className="space-y-3">
                {hormones.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                     <div className="min-w-5 min-h-5 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-secondary" strokeWidth={3} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="#contato"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white font-bold tracking-wide rounded-full hover:bg-[#1ebd59] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#25D366]/30 group"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            QUERO AGENDAR UM HORÁRIO
          </a>
        </motion.div>

      </div>
    </section>
  );
}
