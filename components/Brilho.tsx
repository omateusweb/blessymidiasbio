"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

/** Brilho terracota: um fixo atrás do avatar, outro seguindo o cursor. */
export default function Brilho() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  const x = useMotionValue(-500);
  const yCursor = useMotionValue(-500);
  const seguirX = useSpring(x, { stiffness: 60, damping: 24, mass: 0.7 });
  const seguirY = useSpring(yCursor, { stiffness: 60, damping: 24, mass: 0.7 });

  useEffect(() => {
    const aoMover = (evento: PointerEvent) => {
      x.set(evento.clientX);
      yCursor.set(evento.clientY);
    };
    window.addEventListener("pointermove", aoMover, { passive: true });
    return () => window.removeEventListener("pointermove", aoMover);
  }, [x, yCursor]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
      {/* halo principal, atrás do topo da página */}
      <motion.span
        style={{ y, opacity: "var(--brilho)" as unknown as number }}
        className="absolute left-1/2 top-[-26vh] block h-[78vh] w-[78vh] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(217,119,87,0.95),rgba(217,119,87,0)_62%)] blur-[40px]"
      />

      {/* brasa no rodapé, para a página não morrer chapada */}
      <span
        style={{ opacity: "calc(var(--brilho) * 2.6)" }}
        className="absolute bottom-[-30vh] left-[-10vw] block h-[60vh] w-[60vh] rounded-full bg-[radial-gradient(circle,rgba(168,69,36,0.35),transparent_64%)] blur-[60px]"
      />

      {/* luz que acompanha o cursor */}
      <motion.span
        style={{ left: seguirX, top: seguirY, opacity: "calc(var(--brilho) * 3.4)" }}
        className="absolute block h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(217,119,87,0.16),transparent_60%)] blur-[20px]"
      />
    </div>
  );
}
