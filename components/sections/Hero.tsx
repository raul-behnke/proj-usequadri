import { Botao } from "@/components/ui/Botao";
import { Cabecalho } from "@/components/sections/Cabecalho";
import { Produto } from "@/components/ui/Produto";
import { linkContato, produto, temWhatsApp } from "@/content/site";

/**
 * Bloco escuro de abertura: cabeçalho, promessa centralizada, dois botões em
 * pílula e o aparelho subindo do rodapé, recortado pela borda da seção.
 *
 * A aurora é a luz que sobe do fundo do bloco e dissolve no claro da seção
 * seguinte — é ela que costura o escuro com o resto da página.
 */
export function Hero() {
  return (
    <section
      id="inicio"
      data-tema="escuro"
      className="relative isolate overflow-hidden"
    >
      <Cabecalho />

      <div className="largura relative z-10 pt-10 pb-8 text-center lg:pt-16">
        <h1 className="entrada centro max-w-[17ch] text-t1">
          A maquininha que devolve o que a taxa tirava do caixa.
        </h1>

        <p className="entrada entrada-2 centro mt-5 max-w-[52ch] text-corpo text-muted lg:text-guia">
          Pix sem taxa, crédito a partir de 2,69% e o dinheiro na conta em 1 dia
          útil, com antecipação já inclusa.
        </p>

        <div className="entrada entrada-3 mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Botao
            href={linkContato()}
            {...(temWhatsApp ? { target: "_blank", rel: "noopener" } : {})}
          >
            Quero minha maquininha
          </Botao>
          <Botao href="#calculadora" variante="claro">
            Simular minhas taxas
          </Botao>
        </div>

        <p className="entrada entrada-4 numero mt-6 text-menor text-muted">
          <span className="line-through decoration-signal decoration-2">
            {produto.precoDe}
          </span>{" "}
          <span className="font-semibold text-ink">{produto.precoPor}</span> ou{" "}
          {produto.precoAVista} à vista
        </p>
      </div>

      <div aria-hidden className="aurora z-0" />

      <Produto />
    </section>
  );
}
