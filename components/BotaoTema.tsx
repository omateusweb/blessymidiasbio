"use client";

import { useEffect, useState } from "react";
import { IconeLua, IconeSol } from "@/components/Icones";

type Tema = "escuro" | "claro";

export default function BotaoTema() {
  const [tema, setTema] = useState<Tema>("escuro");

  useEffect(() => {
    const salvo = window.localStorage.getItem("tema") as Tema | null;
    const inicial: Tema =
      salvo ??
      (window.matchMedia("(prefers-color-scheme: light)").matches
        ? "claro"
        : "escuro");
    setTema(inicial);
    document.documentElement.dataset.tema = inicial;
  }, []);

  function alternar() {
    const proximo: Tema = tema === "escuro" ? "claro" : "escuro";
    setTema(proximo);
    document.documentElement.dataset.tema = proximo;
    window.localStorage.setItem("tema", proximo);
  }

  return (
    <button
      type="button"
      onClick={alternar}
      aria-label={tema === "escuro" ? "Usar tema claro" : "Usar tema escuro"}
      className="fixed right-4 top-4 z-50 grid h-11 w-11 place-items-center rounded-full border border-[var(--fio)] backdrop-blur-md transition-colors duration-300 txt-2 hover:border-[var(--fio-forte)] hover:text-[var(--acento)] sm:right-6 sm:top-6"
      style={{ background: "color-mix(in srgb, var(--painel) 70%, transparent)" }}
    >
      {tema === "escuro" ? (
        <IconeSol className="h-[18px] w-[18px]" />
      ) : (
        <IconeLua className="h-[18px] w-[18px]" />
      )}
    </button>
  );
}
