'use client';

import { useState } from 'react';

interface ShareButtonsProps {
  title: string;
  url: string;
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        // user cancelled — silently ignore
      }
    } else {
      await copyToClipboard();
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard not available
    }
  };

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${title} — ${url}`)}`;

  return (
    <div className="flex flex-wrap items-center gap-3 mb-8 pb-8 border-b border-outline/10">
      <span className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider">
        Compartilhar
      </span>

      <button
        onClick={handleShare}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors duration-200"
      >
        <span className="material-symbols-outlined text-base">share</span>
        Compartilhar
      </button>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-[#25D366]/10 text-[#128C47] hover:bg-[#25D366]/20 transition-colors duration-200"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.118.55 4.107 1.512 5.84L.057 23.943l6.305-1.455A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.005-1.373l-.36-.213-3.732.861.882-3.622-.233-.373A9.818 9.818 0 1112 21.818z" />
        </svg>
        WhatsApp
      </a>

      <button
        onClick={copyToClipboard}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors duration-200"
      >
        <span className="material-symbols-outlined text-base">
          {copied ? 'check_circle' : 'link'}
        </span>
        {copied ? 'Copiado!' : 'Copiar link'}
      </button>
    </div>
  );
}
