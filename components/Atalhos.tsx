"use client";

import type { Atalho } from "@/lib/conteudo";

/** Linha de pílulas sob o cartão em destaque. */
export default function Atalhos({ atalhos }: { atalhos: Atalho[] }) {
  return (
    <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
      {atalhos.map((atalho, indice) => (
        <a
          key={atalho.href}
          href={atalho.href}
          target="_blank"
          rel="noopener noreferrer"
          style={
            { "--i": indice + 1, background: "var(--painel)" } as React.CSSProperties
          }
          className="entra rounded-[11px] border border-[var(--fio)] px-2.5 py-2.5 text-center text-[12px] font-medium leading-tight txt-2 transition-all duration-300 hover:-translate-y-[2px] hover:border-[rgba(217,119,87,0.45)] hover:text-[var(--acento)]"
        >
          {atalho.titulo}
        </a>
      ))}
    </div>
  );
}
