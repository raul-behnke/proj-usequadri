import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { empresa, faq } from "@/content/site";

/**
 * Uma família só, com o eixo de largura ativo. Títulos e números usam a
 * versão expandida; o corpo, a normal. Contraste real de largura vale mais
 * que um par de sans-serifs parecidas.
 */
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
  variable: "--fonte-archivo",
});

const url = "https://usequadri.com";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: "Quadri — maquininha com Pix sem taxa e crédito a partir de 2,69%",
  description:
    "Maquininha de cartão a partir de R$ 199, Pix 0,00%, débito 0,75% e crédito 2,69%. Sem mensalidade, sem fidelidade e com gente de verdade atendendo.",
  applicationName: empresa.nomeCompleto,
  authors: [{ name: empresa.nomeCompleto }],
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url,
    siteName: empresa.nomeCompleto,
    title: "Quadri — maquininha com Pix sem taxa e crédito a partir de 2,69%",
    description:
      "Pix 0,00%, débito 0,75%, crédito 2,69%. Maquininha por R$ 199, sem mensalidade e sem fidelidade.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quadri — maquininha com as menores taxas",
    description:
      "Pix 0,00%, débito 0,75%, crédito 2,69%. Sem mensalidade, sem fidelidade.",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#0b1226",
};

const dadosEstruturados = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: empresa.nomeCompleto,
    alternateName: empresa.marca,
    url,
    email: empresa.email,
    foundingDate: String(empresa.desde),
    taxID: empresa.cnpj,
    areaServed: "BR",
    description: empresa.tagline,
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.pergunta,
      acceptedAnswer: { "@type": "Answer", text: item.resposta },
    })),
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={archivo.variable}>
      <body className="font-sans">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dadosEstruturados) }}
        />
      </body>
    </html>
  );
}
