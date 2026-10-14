"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/** Rolagem suave com inércia — é a base que faz o parallax parecer fluido. */
export default function RolagemSuave() {
  useEffect(() => {
    const prefereMenosMovimento = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefereMenosMovimento) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let quadro = 0;
    const loop = (tempo: number) => {
      lenis.raf(tempo);
      quadro = requestAnimationFrame(loop);
    };
    quadro = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(quadro);
      lenis.destroy();
    };
  }, []);

  return null;
}
