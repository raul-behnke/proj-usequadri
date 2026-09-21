import { faq } from "@/content/site";

/**
 * `<details>` nativo: acessível por teclado, funciona sem JavaScript e
 * dispensa qualquer biblioteca de accordion.
 */
export function Faq() {
  return (
    <section id="faq" className="secao">
      <div className="largura">
        <h2 className="centro text-t2">Dúvidas que todo mundo tem.</h2>

        <div className="bento mx-auto mt-12 max-w-[52rem]">
          {faq.map((item, i) => (
            <details
              key={item.pergunta}
              className={`group py-1 ${i > 0 ? "border-t border-line" : ""}`}
            >
              <summary className="flex min-h-[3.25rem] cursor-pointer list-none items-center justify-between gap-6 py-3 text-guia font-semibold">
                {item.pergunta}
                <span
                  aria-hidden
                  className="relative h-3 w-3 shrink-0 text-action"
                >
                  <span className="absolute top-1/2 left-0 h-0.5 w-3 -translate-y-1/2 bg-current" />
                  <span className="absolute top-0 left-1/2 h-3 w-0.5 -translate-x-1/2 bg-current transition-transform duration-200 ease-[var(--ease-saida)] group-open:scale-y-0" />
                </span>
              </summary>
              <p className="prosa pb-5 text-muted">{item.resposta}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
