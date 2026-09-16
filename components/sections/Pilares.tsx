import { pilares } from "@/content/site";
import { Simbolo } from "@/components/ui/Marca";

/**
 * Três pilares em linhas largas, não em três cards iguais. Cada linha tem
 * título grande à esquerda e o argumento à direita, separadas por fio.
 */
export function Pilares() {
  return (
    <section id="solucoes" className="secao border-t border-line bg-surface">
      <div className="largura">
        <h2 className="max-w-[20ch] text-t2">
          Três motivos, e nenhum deles é propaganda.
        </h2>

        <div className="mt-12 lg:mt-16">
          {pilares.map((pilar, i) => (
            <article
              key={pilar.titulo}
              className={`revelar grid gap-x-12 gap-y-4 py-10 lg:grid-cols-[1fr_1.15fr] ${
                i > 0 ? "border-t border-line" : ""
              }`}
            >
              <h3 className="max-w-[16ch] text-t3">{pilar.titulo}</h3>

              <div>
                <p className="prosa text-muted">{pilar.texto}</p>
                <ul className="mt-5 flex flex-wrap gap-x-7 gap-y-2.5 text-menor">
                  {pilar.itens.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <Simbolo className="h-3 w-3 shrink-0 text-action" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
