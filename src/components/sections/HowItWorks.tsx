"use client";

import { motion } from "framer-motion";
import { Stethoscope, Activity, ScanLine, Target } from "lucide-react";

const steps = [
  {
    title: "Avaliação clínica completa",
    description: "Análise profunda do seu histórico, rotina, exames anteriores e queixas atuais. Entendemos todo o seu cenário antes de qualquer prescrição.",
    icon: Stethoscope,
  },
  {
    title: "Bioimpedância avançada",
    description: "Mapeamento em tempo real da sua composição corporal. Não olhamos apenas para o peso, mas sim para o que ele representa (massa magra, gordura, água).",
    icon: Activity,
  },
  {
    title: "Exame DEXA (padrão ouro)",
    description: "Avaliação médica de precisão milimétrica, entregando dados exatos sobre densidade óssea, massa magra e tecido adiposo regional.",
    icon: ScanLine,
  },
  {
    title: "Plano estratégico",
    description: "Sem dietas genéricas. Você recebe um direcionamento nutricional e médico focado na resolução da raiz do problema.",
    icon: Target,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-zinc-950 py-32 lg:py-40 text-white relative overflow-hidden" id="metodologia">
      {/* Background subtle effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] bg-white/[0.02] rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[30vw] h-[30vw] bg-zinc-800/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Left Column: sticky header */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-32 space-y-8">
              <span className="inline-block border border-zinc-700 text-zinc-300 px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
                A Metodologia
              </span>
              
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] font-headline tracking-tight"
              >
                Você não precisa de <span className="text-zinc-500 font-light italic">mais dieta.</span>
                <br />
                Você precisa de um diagnóstico.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-zinc-400 text-lg leading-relaxed max-w-md pt-4"
              >
                A maioria das pessoas falha porque tenta resolver o problema errado. Nós identificamos exatamente o que está travando o seu resultado.
              </motion.p>
              
              {/* Desktop CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="hidden lg:block pt-10"
              >
                 <a href="#contato" className="inline-flex items-center justify-center px-10 py-5 bg-white text-zinc-950 font-bold uppercase tracking-widest text-sm hover:bg-zinc-200 transition-colors duration-300 group">
                    Agendar Avaliação 
                    <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
                 </a>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Staggered Steps */}
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                  className="group relative bg-zinc-900 border border-zinc-800 p-8 md:p-12 transition-colors duration-500 hover:border-zinc-600 hover:bg-zinc-800/80"
                >
                  {/* Giant Number Watermark */}
                  <div className="absolute right-6 bottom-2 text-[180px] leading-none font-black text-zinc-800/30 select-none transition-transform duration-700 group-hover:scale-105 origin-bottom-right">
                    0{index + 1}
                  </div>

                  <div className="relative z-10 flex flex-col items-start gap-8">
                    <div className="p-4 bg-zinc-950 border border-zinc-800 text-white group-hover:bg-white group-hover:text-zinc-950 transition-colors duration-500">
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>

                    <div className="max-w-md">
                      <h3 className="text-2xl font-bold mb-4 font-headline tracking-wide">{step.title}</h3>
                      <p className="text-zinc-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
            
            {/* Mobile CTA */}
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:hidden mt-8"
              >
                 <a href="#contato" className="flex items-center justify-center w-full px-8 py-5 bg-white text-zinc-950 font-bold uppercase tracking-widest text-sm hover:bg-zinc-200 transition-colors duration-300">
                    Agendar Avaliação
                 </a>
              </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}