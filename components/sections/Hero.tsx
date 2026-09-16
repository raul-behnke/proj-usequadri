import { Botao } from "@/components/ui/Botao";
import { Produto } from "@/components/ui/Produto";
import { linkContato, produto, taxas, temWhatsApp } from "@/content/site";
import { formatarPercentual } from "@/lib/calculator";

export function Hero() {
  return (
    <section id="inicio" data-tema="escuro" className="relative overflow-hidden">
      {/* Luz do aparelho: a única fonte de cor forte do bloco. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[42rem] w-[42rem] rounded-full opacity-40 blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, var(--brand) 0%, transparent 68%)",
        }}
      />

      <div className="largura relative grid items-center gap-x-12 gap-y-8 pt-9 pb-4 lg:grid-cols-[1.05fr_0.95fr] lg:gap-y-14 lg:pt-20 lg:pb-8">
        <div className="max-w-[37rem]">
          <h1 className="entrada text-t1">
            A maquininha que devolve o que a taxa tirava do caixa.
          </h1>

          <p className="entrada entrada-2 prosa mt-5 text-corpo text-muted lg:mt-6 lg:text-guia">
            Pix sem taxa, crédito a partir de {formatarPercentual(2.69)} e o
            dinheiro na conta em 1 dia útil, com antecipação já inclusa.
          </p>

          <div className="entrada entrada-3 mt-7 flex flex-wrap items-end gap-x-7 gap-y-3 lg:mt-9">
            <div>
              <span className="numero block text-guia text-muted line-through decoration-signal decoration-2">
                {produto.precoDe}
              </span>
              <span className="numero mt-1.5 block text-t2 font-bold">
                {produto.precoPor}
              </span>
            </div>
            <span className="numero pb-1.5 text-guia text-muted">
              ou {produto.precoAVista} à vista
            </span>
          </div>

          <div className="entrada entrada-4 mt-7 flex flex-col gap-3 sm:flex-row lg:mt-9">
            <Botao
              href={linkContato()}
              {...(temWhatsApp ? { target: "_blank", rel: "noopener" } : {})}
            >
              Quero minha maquininha
            </Botao>
            <Botao href="#calculadora" variante="secundario">
              Simular minhas taxas
            </Botao>
          </div>
        </div>

        <Produto />
      </div>

      {/* Faixa de taxas: mesmo bloco escuro, sem costura com o hero. */}
      <div className="largura relative border-t border-line pt-8 pb-16 lg:pb-20">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
          {taxas.map((taxa) => (
            <li
              key={taxa.id}
              className="md:border-l md:border-line md:pl-6 md:first:border-l-0 md:first:pl-0"
            >
              <span
                className="numero block text-t2 font-bold"
                style={{ color: taxa.percentual === 0 ? "var(--brand)" : undefined }}
              >
                {formatarPercentual(taxa.percentual)}
              </span>
              <span className="mt-1 block text-menor text-muted">
                {taxa.rotuloCurto} · cai {taxa.prazo}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
