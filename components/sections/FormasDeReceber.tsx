import { formasDeReceber } from "@/content/site";
import { icones } from "@/components/ui/Icone";

export function FormasDeReceber() {
  return (
    <section className="secao">
      <div className="largura">
        <h2 className="centro max-w-[20ch] text-t2">
          Quatro jeitos de receber. Um só lugar.
        </h2>
        <p className="centro prosa mt-4 text-muted">
          O dinheiro cai na mesma conta digital, com o mesmo painel, venha de
          onde vier.
        </p>

        <ul className="revelar mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {formasDeReceber.map((forma) => {
            const Icone = icones[forma.icone];
            return (
              <li key={forma.titulo} className="bento flex flex-col">
                <span className="painel inline-flex h-12 w-12 items-center justify-center">
                  <Icone className="h-6 w-6 text-action" />
                </span>
                <h3 className="mt-6 text-guia">{forma.titulo}</h3>
                <p className="mt-2 text-menor text-muted">{forma.texto}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
