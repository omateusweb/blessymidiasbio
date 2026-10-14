import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";

// Fontes auto-hospedadas: nada é buscado no Google em build nem em runtime.
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";

import "./globals.css";

export const metadata: Metadata = {
  title: "Matheus Fernandes · Pastor do Tráfego",
  description:
    "Tráfego pago para infoproduto: lançamento pago e low ticket. Protocolos, Swipe File, Manual da Campanha Pronta e a Blessy no seu tráfego.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050506" },
    { media: "(prefers-color-scheme: light)", color: "#FAF9F5" },
  ],
};

/** Aplica o tema salvo antes da primeira pintura, para não piscar branco. */
const temaInicial = `
(function(){try{
  var t = localStorage.getItem('tema');
  if(!t) t = matchMedia('(prefers-color-scheme: light)').matches ? 'claro' : 'escuro';
  document.documentElement.dataset.tema = t;
}catch(e){}})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" data-tema="escuro" className={GeistSans.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: temaInicial }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
