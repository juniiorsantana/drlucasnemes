"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { sendGTMEvent } from "@next/third-parties/google";
import { WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from "@/lib/constants";

export type WhatsAppLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "target" | "rel" | "children"
> & {
  origem:
    | "hero"
    | "card_emagrecimento"
    | "card_longevidade"
    | "card_performance"
    | "sobre"
    | "tecnologia"
    | "servicos"
    | "clinica"
    | "cta_final"
    | "flutuante"
    | "rodape"
    | "blog"
    | "navbar"
    | "bio";
  servico?: "emagrecimento" | "reposicao_hormonal" | "pos_bariatrico" | "geral";
  mensagem?: string;
  children: ReactNode;
};

export function WhatsAppLink({
  origem,
  servico = "geral",
  mensagem = WHATSAPP_MESSAGE,
  children,
  onClick,
  onAuxClick,
  ...props
}: WhatsAppLinkProps) {
  const trackClick = () => {
    sendGTMEvent({
      event: "clique_whatsapp",
      origem,
      servico,
      pagina: window.location.pathname,
    });
  };

  return (
    <a
      {...props}
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`}
      data-whatsapp-origem={origem}
      data-whatsapp-servico={servico}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) trackClick();
      }}
      onAuxClick={(event) => {
        onAuxClick?.(event);
        if (event.button === 1 && !event.defaultPrevented) trackClick();
      }}
    >
      {children}
    </a>
  );
}
