import { formasDeReceber } from "@/content/site";

export function FormasDeReceber() {
  return (
    <section className="secao">
      <div className="largura grid gap-x-16 gap-y-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="text-t2">Quatro jeitos de receber. Um só lugar.</h2>
          <p className="prosa mt-5 text-muted">
            O dinheiro cai na mesma conta digital, com o mesmo painel, venha de
            onde vier.
          </p>
        </div>

        <dl className="revelar">
          {formasDeReceber.map((forma, i) => (
            <div
              key={forma.titulo}
              className={`grid gap-x-8 gap-y-2 py-7 sm:grid-cols-[13rem_1fr] ${
                i > 0 ? "border-t border-line" : "sm:pt-0"
              }`}
            >
              <dt className="text-guia font-semibold">{forma.titulo}</dt>
              <dd className="prosa text-muted">{forma.texto}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
