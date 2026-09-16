import Image from "next/image";
import { cenas, depoimentos, segmentos } from "@/content/site";

/**
 * Depoimentos e segmentos numa seção só: quem fala e de que tipo de negócio
 * fala são a mesma informação.
 */
export function Clientes() {
  return (
    <section className="secao border-t border-line">
      <div className="largura">
        <h2 className="max-w-[20ch] text-t2">
          Comércio de rua, de todo tipo, no Brasil inteiro.
        </h2>

        <div className="revelar mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cenas.map((cena) => (
            <figure key={cena.imagem}>
              {/* O aparelho fica à direita do centro em todas as cenas; o
                  recorte vertical precisa acompanhar. */}
              <div className="quadro aspect-[4/5] w-full sm:aspect-[3/4]">
                <Image
                  src={cena.imagem}
                  alt={cena.alt}
                  width={1400}
                  height={933}
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="h-full w-full object-cover object-[64%_center]"
                />
              </div>
              <figcaption className="mt-3 text-menor text-muted">
                {cena.legenda}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="revelar mt-16 grid gap-x-10 gap-y-10 lg:grid-cols-3">
          {depoimentos.map((d) => (
            <figure key={d.autor} className="border-t-2 border-ink pt-6">
              <blockquote className="text-guia leading-snug">
                <p>{d.texto}</p>
              </blockquote>
              <figcaption className="mt-5 text-menor text-muted">
                <span className="font-semibold text-ink">{d.autor}</span> ·{" "}
                {d.papel}, {d.cidade}
              </figcaption>
            </figure>
          ))}
        </div>

        <ul className="mt-14 flex flex-wrap gap-x-3 gap-y-3 text-menor">
          {segmentos.map((s) => (
            <li
              key={s}
              className="rounded-full border border-line px-4 py-2 text-muted"
            >
              {s}
            </li>
          ))}
          <li className="px-2 py-2 text-muted">e muito mais.</li>
        </ul>
      </div>
    </section>
  );
}
