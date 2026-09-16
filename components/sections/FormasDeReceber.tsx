import Image from "next/image";
import { formasDeReceber } from "@/content/site";

/**
 * Uma cena grande abrindo e três menores em seguida — não quatro caixas
 * iguais. A maquininha é a porta de entrada e ocupa o espaço proporcional a
 * isso.
 */
export function FormasDeReceber() {
  const [principal, ...demais] = formasDeReceber;

  return (
    <section className="secao">
      <div className="largura">
        <div className="grid gap-x-16 gap-y-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <h2 className="text-t2">Quatro jeitos de receber. Um só lugar.</h2>
          <p className="prosa text-muted lg:pb-1">
            O dinheiro cai na mesma conta digital, com o mesmo painel, venha de
            onde vier.
          </p>
        </div>

        <figure className="revelar mt-12 lg:mt-16">
          <div className="quadro aspect-[16/9] w-full">
            <Image
              src={principal.imagem}
              alt={principal.alt}
              width={1400}
              height={788}
              sizes="(max-width: 1024px) 100vw, 76rem"
              className="h-full w-full object-cover"
            />
          </div>
          <figcaption className="mt-5 grid gap-x-10 gap-y-2 sm:grid-cols-[13rem_1fr]">
            <span className="text-guia font-semibold">{principal.titulo}</span>
            <span className="prosa text-muted">{principal.texto}</span>
          </figcaption>
        </figure>

        <div className="revelar mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-3">
          {demais.map((forma) => (
            <figure key={forma.titulo}>
              <div className="quadro aspect-[4/3] w-full">
                <Image
                  src={forma.imagem}
                  alt={forma.alt}
                  width={1400}
                  height={933}
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-4">
                <span className="block text-guia font-semibold">
                  {forma.titulo}
                </span>
                <span className="mt-1.5 block text-menor text-muted">
                  {forma.texto}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
