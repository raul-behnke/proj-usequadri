import { formasDeReceber } from "@/content/site";
import { icones } from "@/components/ui/Icone";

/**
 * Quatro formas em linhas separadas por fio, com o ícone ancorando cada uma.
 * Sem caixa, sem sombra, sem card: o ícone e o fio já dão a estrutura.
 */
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
          {formasDeReceber.map((forma, i) => {
            const Icone = icones[forma.icone];
            return (
              <div
                key={forma.titulo}
                className={`grid grid-cols-[auto_1fr] items-start gap-x-5 gap-y-2 py-7 sm:grid-cols-[auto_13.5rem_1fr] ${
                  i > 0 ? "border-t border-line" : "sm:pt-0"
                }`}
              >
                <Icone className="h-9 w-9 shrink-0 text-action" />
                <dt className="text-guia font-semibold sm:whitespace-nowrap">{forma.titulo}</dt>
                <dd className="prosa col-start-2 text-muted sm:col-start-3">
                  {forma.texto}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
