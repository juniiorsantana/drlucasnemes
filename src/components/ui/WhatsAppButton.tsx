"use client";

import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "@/lib/constants";
import { trackWhatsAppConversion } from "@/lib/analytics";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    let expandTimer: ReturnType<typeof setTimeout> | null = null;

    const handleScroll = () => {
      const threshold = window.innerHeight * 2;
      const pastSecondSection = window.scrollY > threshold;

      if (pastSecondSection && !isVisible) {
        setIsVisible(true);

        expandTimer = setTimeout(() => {
          setIsExpanded(true);
          setTimeout(() => setIsExpanded(false), 4000);
        }, 600);
      } else if (!pastSecondSection) {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
      if (expandTimer) clearTimeout(expandTimer);
    };
  }, [isVisible]);

  // Hover desktop
  const handleMouseEnter = () => {
    if (!isMobile) setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    if (!isMobile) setIsExpanded(false);
  };

  // Click mobile
  const handleClick = (e: React.MouseEvent) => {
    if (isMobile && !isExpanded) {
      e.preventDefault();
      setIsExpanded(true);

      // fecha automático no mobile
      setTimeout(() => setIsExpanded(false), 4000);
    } else {
      trackWhatsAppConversion();
    }
  };

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={`fixed bottom-6 right-6 z-50 flex items-center 
      h-14 rounded-full 
      bg-gradient-to-r from-[#25D366] to-[#1ebe5d] 
      shadow-[0_10px_30px_rgba(37,211,102,0.35)]
      overflow-hidden
      transition-all duration-500 ease-out
      hover:shadow-[0_15px_40px_rgba(37,211,102,0.5)]
      ${isExpanded ? "pr-5" : "pr-0"}
      ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-16 pointer-events-none"
      }`}
    >
      {/* Ícone */}
      <div className="flex items-center justify-center w-14 h-14 shrink-0 relative">
        <span className="absolute w-10 h-10 rounded-full bg-white/10 animate-ping" />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-6 h-6 fill-white relative"
        >
          <path d="M16.002 3C9.373 3 4 8.373 4 15c0 2.646.865 5.09 2.326 7.074L4 29l7.134-2.286A11.93 11.93 0 0016.002 27C22.63 27 28 21.627 28 15S22.63 3 16.002 3zm0 21.5a9.45 9.45 0 01-4.807-1.324l-.343-.203-4.233 1.355 1.382-4.126-.223-.357A9.47 9.47 0 016.5 15c0-5.238 4.264-9.5 9.502-9.5 5.236 0 9.498 4.262 9.498 9.5 0 5.236-4.262 9.5-9.498 9.5zm5.203-7.112c-.284-.142-1.68-.829-1.94-.924-.26-.095-.45-.142-.64.142-.19.284-.735.924-.9 1.113-.165.19-.33.213-.614.071-.284-.142-1.2-.442-2.286-1.41-.844-.752-1.414-1.68-1.58-1.964-.165-.284-.018-.437.124-.58.127-.126.284-.33.426-.497.142-.166.19-.284.284-.474.095-.19.047-.355-.024-.497-.071-.142-.64-1.545-.877-2.115-.23-.552-.464-.477-.64-.486l-.547-.01c-.19 0-.497.071-.758.355-.26.284-.994.97-.994 2.366s1.018 2.746 1.16 2.936c.142.19 2.003 3.056 4.854 4.285.678.293 1.207.468 1.62.6.68.216 1.3.186 1.79.113.546-.081 1.68-.686 1.917-1.35.237-.664.237-1.234.166-1.35-.071-.118-.26-.19-.545-.332z" />
        </svg>
      </div>

      {/* Conteúdo expandido */}
      <div
        className={`flex flex-col justify-center transition-all duration-500 ease-out
        ${
          isExpanded
            ? "max-w-xs opacity-100 ml-1"
            : "max-w-0 opacity-0 ml-0"
        }`}
      >
        <span className="text-sm font-semibold text-white whitespace-nowrap">
          Falar com especialista
        </span>

        <div className="flex items-center gap-2 text-[11px] text-white/90">
          <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
          Online agora
        </div>
      </div>
    </a>
  );
}