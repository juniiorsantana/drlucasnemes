"use client";

import { CLINIC_NAME, CLINIC_ADDRESS, CLINIC_HOURS, CLINIC_AMENITIES } from "@/lib/constants";
import { motion } from "framer-motion";
import { Car, Wind, PersonStanding, ShieldCheck, Microscope, MapPin, Clock, ArrowUpRight } from "lucide-react";

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
    <section
      className="bg-surface overflow-hidden"
      id="clinica"
      style={{ height: "100svh", maxHeight: "920px" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 h-full">

        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-5 flex flex-col justify-center px-8 lg:px-12 py-10"
        >
          {/* Badge */}
          <span className="inline-block bg-primary text-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-5 w-fit">
            Onde Atendo
          </span>

          {/* Mobile image */}
          <div className="lg:hidden mb-5 rounded-2xl overflow-hidden h-48 shrink-0">
            <img
              src="/clinica.jpg"
              alt="Clínica Dr. Lucas Nemes"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Heading */}
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-[1.1] font-headline text-primary tracking-tight">
            Estrutura completa para{" "}
            <span className="font-light italic text-secondary">alta performance.</span>
          </h2>

          {/* Subtext */}
          <p className="text-on-surface-variant text-sm lg:text-base leading-relaxed mt-3">
            Especializado na {CLINIC_NAME} — um ambiente pensado em cada detalhe para conforto, privacidade e precisão diagnóstica.
          </p>

          {/* Amenities 2x2 Grid */}
          <div className="grid grid-cols-2 gap-2 mt-6">
            {CLINIC_AMENITIES.map((amenity, i) => {
              const Icon = getAmenityIcon(amenity.icon);
              return (
                <motion.div
                  key={amenity.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="group flex items-center gap-2.5 p-3 bg-surface-container hover:bg-primary transition-colors duration-300 cursor-default"
                >
                  <div className="text-on-surface-variant group-hover:text-secondary transition-colors duration-300 shrink-0">
                    <Icon className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-semibold text-on-surface group-hover:text-white transition-colors duration-300 leading-tight">
                    {amenity.title}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Address + Hours */}
          <div className="border-t border-outline-variant mt-6 pt-5 space-y-2.5">
            <div className="flex items-start gap-2.5 text-sm text-on-surface-variant">
              <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" strokeWidth={1.5} />
              <span>{CLINIC_ADDRESS}</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-on-surface-variant">
              <Clock className="w-4 h-4 text-secondary shrink-0" strokeWidth={1.5} />
              <span>{CLINIC_HOURS}</span>
            </div>
          </div>

          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(CLINIC_ADDRESS)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-sm font-bold uppercase tracking-widest text-primary hover:text-secondary transition-colors group"
          >
            
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={2} />
          </a>
        </motion.div>

        {/* Right Column — Full-height image */}
        <div className="lg:col-span-7 relative hidden lg:block">
          <img
            src="/clinica.jpg"
            alt="Clínica Dr. Lucas Nemes"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/5 to-transparent" />
        </div>

      </div>
    </section>
  );
}
