import { pilares, taxas } from "@/content/site";
import { Simbolo } from "@/components/ui/Marca";
import { formatarPercentual } from "@/lib/calculator";

/**
 * Bento assimétrico: o primeiro pilar ocupa o dobro e carrega um painel com
 * as taxas publicadas — o dado real no lugar do gráfico decorativo da
 * referência.
 */
export function Pilares() {
  const [principal, ...demais] = pilares;

  return (
    <section id="solucoes" className="secao">
      <div className="largura">
        <h2 className="centro max-w-[22ch] text-t2">
          Três motivos, e nenhum deles é propaganda.
        </h2>

        <div className="revelar mt-12 grid gap-4 lg:grid-cols-3">
          <article className="bento lg:col-span-2">
            <h3 className="max-w-[18ch] text-t3">{principal.titulo}</h3>
            <p className="prosa mt-3 text-menor text-muted">
              {principal.texto}
            </p>

            <div className="painel mt-7 p-5">
              <p className="text-menor text-muted">Taxas publicadas</p>
              <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
                {taxas.map((taxa) => (
                  <div key={taxa.id}>
                    <dt className="text-[0.8125rem] text-muted">
                      {taxa.rotuloCurto}
                    </dt>
                    <dd
                      className="numero mt-0.5 text-t3 font-bold"
                      style={{
                        color:
                          taxa.percentual === 0 ? "var(--action)" : undefined,
                      }}
                    >
                      {formatarPercentual(taxa.percentual)}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <ul className="mt-6 flex flex-wrap gap-x-7 gap-y-2.5 text-menor">
              {principal.itens.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <Simbolo className="h-3 w-3 shrink-0 text-action" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <div className="grid gap-4">
            {demais.map((pilar) => (
              <article key={pilar.titulo} className="bento">
                <h3 className="max-w-[16ch] text-guia">{pilar.titulo}</h3>
                <p className="mt-2.5 text-menor text-muted">{pilar.texto}</p>
                <ul className="mt-5 space-y-2 text-menor">
                  {pilar.itens.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <Simbolo className="h-3 w-3 shrink-0 text-action" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
