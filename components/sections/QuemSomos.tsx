import { quemSomos } from "@/content/site";

export function QuemSomos() {
  return (
    <section id="quem-somos" className="secao">
      <div className="largura bento grid gap-x-16 gap-y-8 lg:grid-cols-[1.3fr_0.7fr]">
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
