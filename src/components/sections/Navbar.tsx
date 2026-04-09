"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, WHATSAPP_URL, CRM } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all ${isScrolled ? "glass-nav shadow-sm" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-headline font-extrabold tracking-tight text-primary uppercase">
            LN {/* Dr. Lucas Nemes */}
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-headline font-bold text-sm tracking-tight">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-on-surface-variant hover:text-secondary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <span className="text-outline">{CRM}</span>
        </div>

        <div className="flex items-center gap-4">
          <Button
            href={WHATSAPP_URL}
            variant="primary"
            size="sm"
            className="hidden md:flex"
          >
            Agendar Consulta
          </Button>
          <button
            className="md:hidden text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface border-t border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-8 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-on-surface hover:text-secondary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button href={WHATSAPP_URL} variant="primary" size="md">
              Agendar Consulta
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
