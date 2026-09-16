import { numeros } from "@/content/site";

export function Numeros() {
  return (
    <section data-tema="escuro" className="border-t border-line">
      <div className="largura py-14 lg:py-16">
        <p className="prosa text-guia">
          Quem escolheu a Quadri aprovou e não voltou atrás.
        </p>

        <dl className="revelar mt-9 grid grid-cols-2 gap-x-6 gap-y-9 lg:grid-cols-4">
          {numeros.map((item) => (
            <div key={item.rotulo}>
              <dt className="sr-only">{item.rotulo}</dt>
              <dd>
                <span className="numero block text-t2 font-bold text-brand">
                  {item.valor}
                </span>
                <span className="mt-1 block text-menor text-muted">
                  {item.rotulo}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
