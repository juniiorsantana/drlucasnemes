"use client";

import { CLINIC_NAME, CLINIC_ADDRESS, CLINIC_HOURS, CLINIC_AMENITIES } from "@/lib/constants";
import { motion } from "framer-motion";
import { Car, Wind, PersonStanding, ShieldCheck, Microscope, MapPin, Clock } from "lucide-react";

const getAmenityIcon = (iconName: string) => {
  switch (iconName) {
    case "parking": return Car;
    case "ac_unit": return Wind;
    case "accessible": return PersonStanding;
    case "cleaning_services": return ShieldCheck;
    case "science": return Microscope;
    default: return ShieldCheck;
  }
};

export default function Clinic() {
  return (
    <section className="bg-zinc-50 py-32 lg:py-40 relative overflow-hidden" id="clinica">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 lg:items-start">

          {/* Left Column: Heading and Amenities */}
          <div className="lg:col-span-5 relative z-10">
            <div className="lg:sticky lg:top-32">
              <span className="inline-block border border-zinc-300 text-zinc-600 px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-8">
                Onde Atendo
              </span>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] font-headline text-zinc-900 tracking-tight"
              >
                Estrutura completa para <span className="font-light italic text-zinc-500">alta performance.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-zinc-500 text-lg leading-relaxed mt-6"
              >
                Especializado na {CLINIC_NAME}. Um ambiente pensado em cada detalhe para proporcionar o máximo de conforto, privacidade e precisão diagnóstica.
              </motion.p>

              {/* Architectural Menu of Amenities */}
              <div className="mt-16 border-t border-zinc-200">
                {CLINIC_AMENITIES.map((amenity, i) => {
                  const Icon = getAmenityIcon(amenity.icon);
                  return (
                    <motion.div
                      key={amenity.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 }}
                      className="group flex items-start gap-6 py-8 border-b border-zinc-200 hover:border-zinc-900 transition-colors duration-500"
                    >
                      <div className="p-3 bg-zinc-100 text-zinc-600 group-hover:bg-zinc-950 group-hover:text-white transition-colors duration-500 shrink-0">
                        <Icon className="w-5 h-5" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold font-headline mb-2 text-zinc-900">{amenity.title}</h4>
                        <p className="text-zinc-500 leading-relaxed text-sm">
                          {amenity.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Single Hero Image & Floating Card */}
          <div className="lg:col-span-7 relative flex justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full lg:w-[90%] min-h-[600px] lg:min-h-[800px] bg-zinc-200"
            >
              {/* Main Image */}
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80"
                alt="Interior da clínica"
                className="absolute inset-0 w-full h-full object-cover contrast-[1.05]"
              />

              {/* Subtle Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent opacity-80" />

              {/* Floating Info Box (Asymmetric Override) */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute bottom-0 left-0 w-[95%] sm:w-[80%] bg-zinc-950 p-8 sm:p-12 text-white border-t-2 border-r-2 border-transparent hover:border-zinc-800 transition-colors"
                style={{ transform: 'translateY(10%) translateX(-10%)' }}
              >
                <div className="space-y-8">
                  <div>
                    <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-3">Localização</p>
                    <p className="text-lg leading-relaxed flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-zinc-400 shrink-0 mt-1" strokeWidth={1.5} />
                      {CLINIC_ADDRESS}
                    </p>
                  </div>

                  <div className="w-full h-px bg-zinc-800/50" />

                  <div>
                    <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-3">Atendimento</p>
                    <p className="flex items-center gap-4 text-lg">
                      <Clock className="w-6 h-6 text-zinc-400 shrink-0" strokeWidth={1.5} />
                      {CLINIC_HOURS}
                    </p>
                  </div>

                  <div className="pt-4">
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(CLINIC_ADDRESS)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest group"
                    >
                      Como chegar
                      <span className="p-2 border border-zinc-700 rounded-full group-hover:bg-white group-hover:text-zinc-950 group-hover:border-white transition-all">
                        <MapPin className="w-4 h-4" />
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
