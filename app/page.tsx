import Atalhos from "@/components/Atalhos";
import BotaoTema from "@/components/BotaoTema";
import Brilho from "@/components/Brilho";
import Cabecalho from "@/components/Cabecalho";
import CartaoLink from "@/components/CartaoLink";
import LinhasFundo from "@/components/LinhasFundo";
import RolagemSuave from "@/components/RolagemSuave";
import Rotulo from "@/components/Rotulo";
import { blocos, rodape } from "@/lib/conteudo";

export default function Pagina() {
  let ordem = 3; // continua a cascata que começa no cabeçalho

  return (
    <>
      <RolagemSuave />
      <LinhasFundo />
      <Brilho />
      <BotaoTema />

      <main className="relative z-10 mx-auto w-full max-w-[520px] px-5 pb-16 pt-14 sm:pt-20">
        <Cabecalho />

        <div className="mt-10">
          {blocos.map((bloco, indiceBloco) => (
            <section key={bloco.rotulo ?? `bloco-${indiceBloco}`}>
              {bloco.rotulo ? <Rotulo texto={bloco.rotulo} /> : null}

              <div className="flex flex-col gap-2.5">
                {bloco.cartoes.map((cartao) => {
                  ordem += 1;
                  return (
                    <div key={cartao.href}>
                      <CartaoLink cartao={cartao} indice={ordem} />
                      {cartao.atalhos ? <Atalhos atalhos={cartao.atalhos} /> : null}
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        <footer className="entra mt-12 border-t border-[var(--fio)] pt-6 text-center text-[11.5px] tracking-[0.01em] txt-3">
          {rodape}
        </footer>
      </main>
    </>
  );
}
