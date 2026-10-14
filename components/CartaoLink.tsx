"use client";

import { icones, IconeSeta } from "@/components/Icones";
import type { Cartao } from "@/lib/conteudo";

/** Fundo, borda e sombra de cada nível de destaque. */
const estilos = {
  cheio: {
    classe:
      "border-[rgba(240,169,140,0.42)] text-[#1b0d06] shadow-[0_16px_40px_-14px_rgba(217,119,87,0.85),inset_0_1px_0_0_rgba(255,255,255,0.28)] hover:shadow-[0_22px_52px_-14px_rgba(217,119,87,1),inset_0_1px_0_0_rgba(255,255,255,0.34)]",
    fundo:
      "linear-gradient(135deg, #e08a66 0%, #d97757 48%, #b74b26 100%)",
    titulo: "text-[#1b0d06]",
    texto: "text-[rgba(27,13,6,0.78)]",
    tile: "bg-[rgba(27,13,6,0.18)] text-[#1b0d06] ring-1 ring-[rgba(27,13,6,0.14)]",
    seta: "bg-[rgba(27,13,6,0.9)] text-[#f7d9cb] group-hover:bg-[#1b0d06]",
    selo: "bg-[rgba(27,13,6,0.2)] text-[#1b0d06] ring-1 ring-[rgba(27,13,6,0.16)]",
  },
  brasa: {
    classe:
      "border-[var(--fio-forte)] shadow-[0_16px_40px_-18px_rgba(217,119,87,0.5),inset_0_1px_0_0_rgba(255,255,255,0.08)] hover:border-[rgba(217,119,87,0.55)]",
    fundo:
      "radial-gradient(42% 120% at 100% 0%, rgba(217,119,87,0.38) 0%, rgba(217,119,87,0.08) 48%, transparent 76%), var(--painel)",
    titulo: "",
    texto: "",
    tile: "",
    seta: "",
    selo: "",
  },
  plano: {
    classe: "border-[var(--fio)] hover:border-[var(--fio-forte)]",
    fundo: "var(--painel)",
    titulo: "",
    texto: "",
    tile: "",
    seta: "",
    selo: "",
  },
} as const;

export default function CartaoLink({
  cartao,
  indice = 0,
}: {
  cartao: Cartao;
  indice?: number;
}) {
  const Icone = icones[cartao.icone];
  const e = estilos[cartao.estilo];
  const cheio = cartao.estilo === "cheio";

  return (
    <a
      href={cartao.href}
      target="_blank"
      rel="noopener noreferrer"
      style={
        {
          background: e.fundo,
          "--i": indice,
        } as React.CSSProperties
      }
      className={`entra group relative flex items-center gap-[15px] overflow-hidden rounded-fichas border px-4 py-[15px] transition-[transform,border-color,box-shadow] duration-300 will-change-transform hover:-translate-y-[2px] active:translate-y-0 ${e.classe}`}
    >
      {/* varredura de luz no hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.14),transparent)] opacity-0 group-hover:opacity-100 group-hover:[animation:varrer_0.9s_ease-out]"
      />

      {/* tile do ícone */}
      <span
        className={`relative grid h-[52px] w-[52px] shrink-0 place-items-center rounded-[13px] transition-transform duration-300 group-hover:scale-[1.04] ${
          e.tile ||
          "sup-painel-alto text-[var(--texto-2)] ring-1 ring-[var(--fio)] group-hover:text-[var(--acento)]"
        }`}
      >
        <Icone className="h-[26px] w-[26px]" />
      </span>

      {/* texto */}
      <span className="relative min-w-0 flex-1">
        <b
          className={`block text-[15.5px] font-semibold leading-tight tracking-[-0.01em] ${
            e.titulo || "txt"
          }`}
        >
          {cartao.titulo}
        </b>

        {cartao.descricao || cartao.preco ? (
          <span
            className={`mt-[3px] block text-[13px] leading-[1.5] ${
              e.texto || "txt-2"
            }`}
          >
            {cartao.descricao}
            {cartao.preco ? (
              <span
                className={`ml-1.5 inline-block translate-y-[-1px] whitespace-nowrap rounded-full px-2 py-[2px] align-middle text-[11px] font-semibold leading-none ${
                  e.selo ||
                  "bg-[var(--acento-fundo)] txt-acento ring-1 ring-[var(--acento-fio)]"
                }`}
              >
                {cartao.preco}
              </span>
            ) : null}
          </span>
        ) : null}
      </span>

      {/* seta */}
      <span
        className={`relative grid h-[34px] w-[34px] shrink-0 place-items-center rounded-full transition-all duration-300 group-hover:translate-x-[3px] ${
          e.seta ||
          "ring-1 ring-[var(--fio-forte)] text-[var(--texto-2)] group-hover:bg-marca group-hover:text-[#1b0d06] group-hover:ring-marca"
        } ${cheio ? "" : ""}`}
      >
        <IconeSeta className="h-[17px] w-[17px]" />
      </span>
    </a>
  );
}
