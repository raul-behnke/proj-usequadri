import Image from "next/image";
import { cenas, cenasDestaque, depoimentos, segmentos } from "@/content/site";

export function Clientes() {
  return (
    <section className="secao">
      <div className="largura">
        <h2 className="centro max-w-[22ch] text-t2">
          Comércio de rua, de todo tipo, no Brasil inteiro.
        </h2>

        <ul className="revelar mt-12 grid gap-4 sm:grid-cols-2">
          {cenasDestaque.map((cena) => (
            <li key={cena.imagem} className="bento p-3">
              <div className="quadro aspect-[16/10] w-full">
                <Image
                  src={cena.imagem}
                  alt={cena.alt}
                  width={1400}
                  height={933}
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-3 px-1 pb-1 text-menor text-muted">
                {cena.legenda}
              </p>
            </li>
          ))}
        </ul>

        <ul className="revelar mt-4 grid gap-4 grid-cols-2 lg:grid-cols-4">
          {cenas.map((cena) => (
            <li key={cena.imagem} className="bento p-3">
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
              <p className="mt-3 px-1 pb-1 text-menor text-muted">
                {cena.legenda}
              </p>
            </li>
          ))}
        </ul>

        <div className="revelar mt-4 grid gap-4 lg:grid-cols-3">
          {depoimentos.map((d) => (
            <figure key={d.autor} className="bento flex flex-col">
              <blockquote className="text-guia leading-snug">
                <p>{d.texto}</p>
              </blockquote>
              <figcaption className="mt-6 text-menor text-muted">
                <span className="font-semibold text-ink">{d.autor}</span> ·{" "}
                {d.papel}, {d.cidade}
              </figcaption>
            </figure>
          ))}
        </div>

        <ul className="mt-10 flex flex-wrap justify-center gap-2.5 text-menor">
          {segmentos.map((s) => (
            <li
              key={s}
              className="rounded-full bg-card px-4 py-2 text-muted"
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
