/** Rótulo de seção: caixa alta, espaçada, com um fio terracota ao lado. */
export default function Rotulo({ texto }: { texto: string }) {
  return (
    <div className="entra mb-3 mt-8 flex items-center gap-3 px-0.5">
      <span className="text-[10.5px] font-semibold uppercase tracking-[0.2em] txt-3">
        {texto}
      </span>
      <span
        aria-hidden="true"
        className="h-px flex-1 bg-[linear-gradient(90deg,rgba(217,119,87,0.5),transparent)]"
      />
    </div>
  );
}
