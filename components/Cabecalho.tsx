"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { perfil } from "@/lib/conteudo";

/** Quebra a bio para realçar um trecho em serifada itálica, sem alterar o texto. */
function BioComRealce() {
  const { bio, bioRealce } = perfil;
  const corte = bio.indexOf(bioRealce);
  if (corte < 0) return <>{bio}</>;

  return (
    <>
      {bio.slice(0, corte)}
      <em className="font-serifada text-[1.14em] italic txt-acento">
        {bioRealce}
      </em>
      {bio.slice(corte + bioRealce.length)}
    </>
  );
}

export default function Cabecalho() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.4], [0, -50]);
  const opacidade = useTransform(scrollYProgress, [0, 0.32], [1, 0.4]);

  return (
    <motion.header
      style={{ y, opacity: opacidade }}
      className="flex flex-col items-center text-center"
    >
      {/* avatar com anel girando */}
      <div className="entra relative" style={{ "--i": 0 } as React.CSSProperties}>
        <span
          aria-hidden="true"
          className="absolute -inset-[14px] rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,rgba(217,119,87,0.85)_90deg,rgba(240,169,140,0.95)_160deg,transparent_250deg)] blur-[14px] [animation:anel-gira_7s_linear_infinite]"
        />
        <span
          aria-hidden="true"
          className="absolute -inset-[3px] rounded-full bg-[conic-gradient(from_210deg,#d97757,#f0a98c,#a84524,#d97757)] opacity-90"
        />
        {/* a foto vem do domínio da Blessy; <img> simples evita depender do otimizador */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={perfil.avatar}
          alt={perfil.avatarAlt}
          width={116}
          height={116}
          className="relative block h-[116px] w-[116px] rounded-full object-cover ring-[3px] ring-[var(--base)] sm:h-[124px] sm:w-[124px]"
        />
      </div>

      <h1
        className="entra mt-6 text-[32px] font-semibold leading-[1.08] tracking-[-0.035em] txt sm:text-[38px]"
        style={{ "--i": 1 } as React.CSSProperties}
      >
        {perfil.nome}
      </h1>

      <p
        className="entra mt-1.5 text-[14px] font-medium tracking-[-0.01em] txt-acento"
        style={{ "--i": 2 } as React.CSSProperties}
      >
        {perfil.arroba}
      </p>

      <p
        className="entra mt-4 max-w-[36ch] text-[14.5px] leading-[1.6] txt-2"
        style={{ "--i": 3 } as React.CSSProperties}
      >
        <BioComRealce />
      </p>
    </motion.header>
  );
}
