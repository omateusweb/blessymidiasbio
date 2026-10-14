# Blessy — Link na Bio

Reconstrução da página `swip.blessymidias.com.br/bio/` em Next.js.
**Todo o texto e todos os links (com UTM) são idênticos ao original** — nada foi
adicionado, removido ou reescrito. Só o design mudou.

## Rodar

```bash
npm install
npm run dev
```

Abre em `http://localhost:3000`.

Build de produção:

```bash
npm run build && npm start
```

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** — tokens de tema em `app/globals.css`
- **Motion** — parallax do cabeçalho e brilho que segue o cursor
- **Lenis** — rolagem suave com inércia
- **Geist** + **Instrument Serif**, auto-hospedadas (sem chamada externa)
- **Phosphor** (ícones) e **Simple Icons** (logos), inline em SVG

## Onde mexer

| O quê | Arquivo |
| --- | --- |
| Textos, links, preços, ordem dos cartões | `lib/conteudo.ts` |
| Cores, raio, fontes, animações | `app/globals.css` (bloco `@theme`) |
| Fundo de linhas (canvas) | `components/LinhasFundo.tsx` |
| Brilhos e halo do cursor | `components/Brilho.tsx` |
| Ícones dos cartões | `components/Icones.tsx` |
| Cartão de link (hover, tilt, brilho) | `components/CartaoLink.tsx` |
| Avatar, nome, bio | `components/Cabecalho.tsx` |

Para adicionar um link novo, basta acrescentar um objeto em `lib/conteudo.ts` —
a página se monta sozinha a partir dele.

## Design

Linguagem visual inspirada na referência enviada, com o acento terracota da
Blessy no lugar do roxo:

- fundo de **linhas que escorrem** desenhadas em canvas, curvando ao redor do
  cursor, sobre halo terracota e luz que segue o mouse
- cartões com **tile de ícone à esquerda**, título, descrição e seta à direita
- hierarquia em três níveis: `cheio` (gradiente terracota + sombra projetada),
  `brasa` (painel escuro com brasa no canto) e `plano`
- anel de luz girando no avatar
- trecho da bio realçado em **Instrument Serif itálico** (o texto não muda, só o estilo)
- **tema claro e escuro** com alternador no canto, lembrando a preferência
- entrada em cascata; tudo respeita `prefers-reduced-motion`

## Avatar

A foto fica em `public/avatar.jpg` e é servida pelo próprio projeto — sem
depender do domínio da Blessy. Para trocar, substitua o arquivo (quadrado,
240px ou mais) mantendo o nome.
