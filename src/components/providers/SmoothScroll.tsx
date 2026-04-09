"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

/**
 * Componente para fornecer scroll suave (Smooth Scroll) usando a biblioteca Lenis.
 * Melhora a experiência do usuário com um scroll mais fluido e premium.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.5,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
