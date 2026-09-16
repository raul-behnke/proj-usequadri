import { passos } from "@/content/site";

/**
 * A única seção numerada do site. Aqui a ordem é informação — são quatro
 * etapas que acontecem nessa sequência — e não decoração de seção.
 */
export function ComoFunciona() {
  return (
    <section id="como-funciona" className="secao border-t border-line">
      <div className="largura">
        <h2 className="max-w-[22ch] text-t2">
          Começar com a Quadri é mais simples do que você imagina.
        </h2>

        <ol className="revelar mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {passos.map((passo, i) => (
            <li key={passo.titulo} className="border-t-2 border-ink pt-5">
              <span className="numero block text-t3 font-bold text-action">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-guia">{passo.titulo}</h3>
              <p className="mt-2 text-menor text-muted">{passo.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
