import type { NomeIcone } from "@/components/Icones";

/**
 * Texto e links copiados ao caractere da página original.
 * Nada foi adicionado, removido ou reescrito. Se precisar editar a bio,
 * edite aqui — a página inteira é montada a partir deste arquivo.
 */

export const perfil = {
  nome: "Matheus Fernandes",
  arroba: "@pastordotrafegoads",
  bio: "Tráfego pago para lançamento pago e low ticket. Mais de R$ 20 milhões investidos em anúncios desde 2018.",
  /** Trecho da bio realçado em serifada itálica. Precisa existir dentro de `bio`. */
  bioRealce: "R$ 20 milhões",
  avatar: "/avatar.jpg",
  avatarAlt: "Foto do Matheus Fernandes",
} as const;

/** cheio = gradiente terracota · brasa = painel escuro com brasa no canto · plano = painel neutro */
export type Estilo = "cheio" | "brasa" | "plano";

export type Atalho = {
  titulo: string;
  href: string;
};

export type Cartao = {
  titulo: string;
  descricao?: string;
  preco?: string;
  href: string;
  icone: NomeIcone;
  estilo: Estilo;
  atalhos?: Atalho[];
};

export type Bloco = {
  rotulo?: string;
  cartoes: Cartao[];
};

export const blocos: Bloco[] = [
  {
    cartoes: [
      {
        titulo: "Protocolos Blessy",
        descricao:
          "A estrutura de campanha que roda na Blessy, uma para cada modelo de negócio. R$ 47 cada.",
        icone: "planta",
        estilo: "cheio",
        href: "https://swip.blessymidias.com.br/protocolos/?utm_source=instagram&utm_medium=bio&utm_campaign=pastordotrafegoads&utm_content=protocolos",
        atalhos: [
          {
            titulo: "Lançamento pago",
            href: "https://swip.blessymidias.com.br/protocolos/lancamento-pago/?utm_source=instagram&utm_medium=bio&utm_campaign=pastordotrafegoads&utm_content=protocolo-lancamento-pago",
          },
          {
            titulo: "Low ticket",
            href: "https://swip.blessymidias.com.br/protocolos/low-ticket/?utm_source=instagram&utm_medium=bio&utm_campaign=pastordotrafegoads&utm_content=protocolo-low-ticket",
          },
          {
            titulo: "Captação de aula",
            href: "https://swip.blessymidias.com.br/protocolos/captacao-aula/?utm_source=instagram&utm_medium=bio&utm_campaign=pastordotrafegoads&utm_content=protocolo-captacao-aula",
          },
          {
            titulo: "Desafio",
            href: "https://swip.blessymidias.com.br/protocolos/desafio/?utm_source=instagram&utm_medium=bio&utm_campaign=pastordotrafegoads&utm_content=protocolo-desafio",
          },
        ],
      },
    ],
  },
  {
    rotulo: "Para copiar o que já rodou",
    cartoes: [
      {
        titulo: "Swipe File",
        descricao: "Criativos, páginas e funis de lançamento pago e low ticket",
        preco: "R$ 10/mês",
        icone: "cartas",
        estilo: "brasa",
        href: "https://swip.blessymidias.com.br/assinar/?utm_source=instagram&utm_medium=bio&utm_campaign=pastordotrafegoads&utm_content=swipe",
      },
      {
        titulo: "Manual da Campanha Pronta",
        descricao: "Páginas, criativos e campanhas prontos para copiar",
        preco: "R$ 67",
        icone: "manual",
        estilo: "plano",
        href: "https://manual.blessymidias.com.br/?utm_source=instagram&utm_medium=bio&utm_campaign=pastordotrafegoads&utm_content=manual",
      },
    ],
  },
  {
    rotulo: "Conteúdo grátis",
    cartoes: [
      {
        titulo: "Canal no YouTube",
        descricao: "Lançamento pago e low ticket na prática",
        icone: "youtube",
        estilo: "plano",
        href: "https://www.youtube.com/@pastordotrafegoads",
      },
      {
        titulo: "Quero a Blessy no meu tráfego",
        icone: "whatsapp",
        estilo: "plano",
        href: "https://wa.me/5521964227147?text=Oi%2C%20Matheus!%20Vim%20pelo%20Instagram%20e%20quero%20entender%20como%20a%20Blessy%20pode%20rodar%20o%20tr%C3%A1fego%20do%20meu%20neg%C3%B3cio.",
      },
      {
        titulo: "blessymidias.com.br",
        icone: "globo",
        estilo: "plano",
        href: "https://blessymidias.com.br/?utm_source=instagram&utm_medium=bio&utm_campaign=pastordotrafegoads&utm_content=site",
      },
    ],
  },
];

export const rodape = "© 2026 Blessy Mídias. Todos os direitos reservados.";
