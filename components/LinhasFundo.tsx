"use client";

import { useEffect, useRef } from "react";

/**
 * Campo de linhas que escorrem pela tela inteira, desenhado em canvas.
 * As linhas se curvam ao redor do cursor — é o elemento que dá vida ao fundo.
 */
export default function LinhasFundo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const semMovimento = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let largura = 0;
    let altura = 0;
    let dpr = 1;

    const cursor = { x: -9999, y: -9999, ativo: false };

    function medir() {
      if (!canvas || !ctx) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      largura = window.innerWidth;
      altura = window.innerHeight;
      canvas.width = Math.floor(largura * dpr);
      canvas.height = Math.floor(altura * dpr);
      canvas.style.width = `${largura}px`;
      canvas.style.height = `${altura}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function corDasLinhas() {
      const raiz = getComputedStyle(document.documentElement);
      const rgb = raiz.getPropertyValue("--linhas").trim() || "255, 255, 255";
      const forca =
        parseFloat(raiz.getPropertyValue("--linhas-forca").trim()) || 0.09;
      return { rgb, forca };
    }

    let tempo = 0;
    let quadro = 0;

    function desenhar() {
      if (!ctx) return;
      ctx.clearRect(0, 0, largura, altura);

      const { rgb, forca } = corDasLinhas();
      const espacamento = 26;
      const totalLinhas = Math.ceil(altura / espacamento) + 8;
      const passo = 14;

      for (let indice = 0; indice < totalLinhas; indice++) {
        const baseY = indice * espacamento - espacamento * 4;

        // linhas do meio da tela aparecem um pouco mais
        const distanciaDoCentro = Math.abs(baseY - altura / 2) / (altura / 2);
        const alfa = forca * (1 - distanciaDoCentro * 0.55);
        if (alfa <= 0.004) continue;

        ctx.beginPath();
        ctx.strokeStyle = `rgba(${rgb}, ${alfa})`;
        ctx.lineWidth = 1;

        for (let x = -passo; x <= largura + passo; x += passo) {
          // três senos sobrepostos dão a ondulação orgânica
          const onda =
            Math.sin(x * 0.0042 + tempo * 0.45 + indice * 0.22) * 16 +
            Math.sin(x * 0.0017 - tempo * 0.28 + indice * 0.1) * 26 +
            Math.sin(x * 0.0089 + tempo * 0.62) * 5;

          // o cursor empurra as linhas para fora
          let desvio = 0;
          if (cursor.ativo) {
            const dx = x - cursor.x;
            const dy = baseY + onda - cursor.y;
            const dist2 = dx * dx + dy * dy;
            const raio = 170;
            if (dist2 < raio * raio) {
              const dist = Math.sqrt(dist2) || 1;
              const forcaEmpurrao = (1 - dist / raio) ** 2 * 46;
              desvio = (dy / dist) * forcaEmpurrao;
            }
          }

          const y = baseY + onda + desvio;
          if (x === -passo) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    }

    function laco() {
      tempo += 0.006;
      desenhar();
      quadro = requestAnimationFrame(laco);
    }

    function aoMover(evento: PointerEvent) {
      cursor.x = evento.clientX;
      cursor.y = evento.clientY;
      cursor.ativo = true;
    }

    function aoSair() {
      cursor.ativo = false;
    }

    medir();
    if (semMovimento) {
      desenhar();
    } else {
      quadro = requestAnimationFrame(laco);
      window.addEventListener("pointermove", aoMover, { passive: true });
      window.addEventListener("pointerleave", aoSair);
    }
    window.addEventListener("resize", medir);

    return () => {
      cancelAnimationFrame(quadro);
      window.removeEventListener("resize", medir);
      window.removeEventListener("pointermove", aoMover);
      window.removeEventListener("pointerleave", aoSair);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
