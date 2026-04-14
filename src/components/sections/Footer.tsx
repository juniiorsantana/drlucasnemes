import {
  DOCTOR_NAME,
  DOCTOR_SPECIALTY,
  CRM,
  RQE,
  CLINIC_ADDRESS,
  CLINIC_CITY,
  CLINIC_STATE,
  CLINIC_PHONE,
  CLINIC_HOURS,
  CURRENT_YEAR,
  DEVELOPER_CREDIT,
  NAV_LINKS,
  SOCIAL_LINKS,
} from "@/lib/constants";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          {/* Col 1: Identity */}
          <div className="space-y-2">
            <Image
              src="/logo_light.svg"
              alt="Dr. Lucas Nemes"
              width={72}
              height={24}
              className="h-6 w-auto object-contain mb-4"
            />
            <p className="text-on-primary-container text-sm">{DOCTOR_SPECIALTY}</p>
            <p className="text-on-primary-container text-xs">
              {CRM} · {RQE}
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-on-primary-container hover:text-white transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Col 3: Contact */}
          <div className="space-y-3 text-sm text-on-primary-container">
            <div>
              <p className="font-label font-bold text-white mb-1">Endereço</p>
              <p>
                {CLINIC_ADDRESS}
                <br />
                {CLINIC_CITY} - {CLINIC_STATE}
              </p>
            </div>
            <div>
              <p className="font-label font-bold text-white">Telefone</p>
              <a href={`tel:${CLINIC_PHONE}`} className="hover:text-white">
                {CLINIC_PHONE}
              </a>
            </div>
            <div>
              <p className="font-label font-bold text-white">Horário</p>
              <p>{CLINIC_HOURS}</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                title={link.label}
                className="w-10 h-10 rounded-full bg-on-primary-container/20 flex items-center justify-center text-on-primary hover:bg-on-primary hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined">{link.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-on-primary-container/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-on-primary-container/60">
          <p>
            © {CURRENT_YEAR} {DOCTOR_NAME} — Nutrologia & Performance. Todos os
            direitos reservados.
          </p>
          <p>Desenvolvido por {DEVELOPER_CREDIT}</p>
        </div>
      </div>
    </footer>
  );
}
