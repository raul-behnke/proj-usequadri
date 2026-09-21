import Image from "next/image";
import { produtoAngulos, quemSomos } from "@/content/site";

export function QuemSomos() {
  return (
    <section id="quem-somos" className="secao">
      <div className="largura bento relative grid items-center gap-x-12 gap-y-8 overflow-hidden lg:grid-cols-[0.8fr_1.3fr_0.7fr]">
        <Image
          src={produtoAngulos.aberta.imagem}
          alt={produtoAngulos.aberta.alt}
          width={800}
          height={1256}
          loading="lazy"
          sizes="(max-width: 1024px) 40vw, 16rem"
          className="mx-auto w-40 lg:w-full lg:max-w-[16rem]"
        />

        <p className="max-w-[54ch] text-t3 leading-[1.3]">{quemSomos.texto}</p>

        <dl className="grid grid-cols-3 gap-4 self-end lg:grid-cols-1">
          {quemSomos.marcadores.map((m) => (
            <div key={m.rotulo} className="painel p-4">
              <dt className="numero text-guia font-bold">{m.valor}</dt>
              <dd className="mt-0.5 text-menor text-muted">{m.rotulo}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
