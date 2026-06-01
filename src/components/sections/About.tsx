"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DOCTOR_NAME, CRM, RQE, WHATSAPP_URL } from "@/lib/constants";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";

export default function About() {
  return (
    <section className="py-24 bg-surface" id="sobre">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Foto — entra da esquerda */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative w-full h-[560px] rounded-3xl overflow-hidden shadow-xl"
          >
            <Image
              src="/drlucasnemes2.avif"
              alt="Dr. Lucas Nemes"
              fill
              className="object-cover object-top"
            />
          </motion.div>

          {/* Conteúdo — entra da direita */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <SectionLabel>Sobre o Médico</SectionLabel>

              <h2 className="text-4xl lg:text-5xl font-headline font-extrabold text-primary leading-tight">
                {DOCTOR_NAME}
              </h2>

              <p className="text-sm font-semibold text-secondary tracking-widest uppercase">
                Nutrólogo Especialista em Emagrecimento em Cuiabá-MT
              </p>

              <p className="text-xs font-semibold text-secondary tracking-widest uppercase">
                {CRM} · {RQE}
              </p>
            </div>

            <div className="space-y-5 text-on-surface-variant leading-relaxed text-sm lg:text-base">
              <p>
                Dr. Lucas Nemes, graduado em Medicina pela UFMT e Especialista em
                Nutrologia pela ABRAN/AMB, é referência no tratamento da obesidade
                e emagrecimento saudável em Cuiabá e região metropolitana.
              </p>
              <p>
                Nossa abordagem vai além da prescrição tradicional. Trabalhamos com
                mudança comportamental profunda, utilizando tecnologias avançadas.
                Cada paciente é único — por isso, desenvolvemos tratamentos
                personalizados que consideram aspectos físicos, emocionais e
                comportamentais, garantindo resultados duradouros.
              </p>
            </div>

            {/* Redes sociais */}
            <div className="flex items-center gap-4">
              {/* Facebook */}
              <a
                href="https://facebook.com/drlucasnemes"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-primary hover:text-secondary transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com/drlucasnemes"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-primary hover:text-secondary transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
            </div>

            {/* Botão WhatsApp */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block"
            >
              <Button href={WHATSAPP_URL} variant="primary" size="lg">
                Agende Uma Consulta Agora
              </Button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
