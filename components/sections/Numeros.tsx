import Image from "next/image";
import { numeros, provaFundo } from "@/content/site";

/**
 * Única seção com foto de fundo. O véu navy é opaco o bastante para os
 * números baterem AA com folga — a foto entra como atmosfera, não como
 * concorrente do texto.
 */
export function Numeros() {
  return (
    <section className="pt-4 pb-4">
      <div
        data-tema="escuro"
        /* Fundo próprio, e não só a foto: se a imagem não carregar, o texto
           claro continua sobre escuro em vez de cair no branco. */
        style={{ background: "var(--bg)" }}
        className="largura relative isolate overflow-hidden rounded-[var(--raio-bento)]"
      >
      <Image
        src={provaFundo.imagem}
        alt=""
        role="presentation"
        width={1400}
        height={788}
        sizes="100vw"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[60%_center]"
      />

      {/* Véu: navy chapado por baixo, degradê por cima para a foto respirar. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(100deg, oklch(0.14 0.04 265 / 0.96) 0%, oklch(0.14 0.04 265 / 0.92) 45%, oklch(0.14 0.04 265 / 0.82) 100%)",
        }}
      />

      <div className="px-[clamp(1.5rem,1rem+2vw,2.75rem)] py-14 lg:py-16">
        <p className="prosa text-guia">
          Quem escolheu a Quadri aprovou e não voltou atrás.
        </p>

        <dl className="revelar mt-10 grid grid-cols-2 gap-x-6 gap-y-9 lg:grid-cols-4">
          {numeros.map((item) => (
            <div key={item.rotulo}>
              <dt className="sr-only">{item.rotulo}</dt>
              <dd>
                <span className="numero block text-t3 font-bold whitespace-nowrap text-brand lg:text-t2">
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
      </div>
    </section>
  );
}
