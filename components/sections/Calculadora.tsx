"use client";

import { useState } from "react";
import { taxas } from "@/content/site";
import { formatarPercentual, formatarReal, simular } from "@/lib/calculator";
import { ValorAnimado } from "@/components/ui/ValorAnimado";

const MIN = 20;
const MAX = 20000;

export function Calculadora() {
  const [bruto, setBruto] = useState(1000);
  const [taxaId, setTaxaId] = useState(taxas[2].id);

  const taxa = taxas.find((t) => t.id === taxaId) ?? taxas[0];
  const r = simular(bruto, taxa);

  return (
    <section id="calculadora" data-tema="escuro" className="secao">
      <div className="largura grid items-start gap-x-16 gap-y-8 lg:grid-cols-2 lg:gap-y-12">
        <div>
          <h2 className="max-w-[18ch] text-t2">
            Simule uma venda e veja quanto sobra.
          </h2>
          <p className="prosa mt-5 text-muted">
            São as mesmas taxas do topo da página, sem asterisco. Ajuste o valor
            e a forma de pagamento.
          </p>

          <div className="mt-8">
            <label
              htmlFor="valor"
              className="block text-menor font-semibold text-muted"
            >
              Valor da venda
            </label>

            <div className="mt-3 flex items-baseline gap-2">
              <span className="numero text-t3 text-muted">R$</span>
              <input
                id="valor"
                type="number"
                inputMode="numeric"
                min={MIN}
                max={MAX}
                step={10}
                value={bruto}
                onChange={(e) => setBruto(Number(e.target.value))}
                className="numero w-full min-w-0 border-b-2 border-line bg-transparent pb-1 text-t2 font-bold text-ink outline-none focus:border-brand"
              />
            </div>

            <input
              type="range"
              aria-label="Ajustar valor da venda"
              min={MIN}
              max={MAX}
              step={10}
              value={Math.min(MAX, Math.max(MIN, bruto || MIN))}
              onChange={(e) => setBruto(Number(e.target.value))}
              className="mt-6 h-11 w-full cursor-pointer accent-[var(--brand)]"
            />
          </div>

          <fieldset className="mt-8">
            <legend className="text-menor font-semibold text-muted">
              Como o cliente paga
            </legend>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {taxas.map((t) => {
                const ativa = t.id === taxaId;
                return (
                  <button
                    key={t.id}
                    type="button"
                    aria-pressed={ativa}
                    onClick={() => setTaxaId(t.id)}
                    className={`min-h-11 rounded-lg border px-4 text-menor font-semibold transition-colors ${
                      ativa
                        ? "border-brand bg-brand text-[oklch(0.18_0.045_265)]"
                        : "border-line text-muted hover:border-brand hover:text-ink"
                    }`}
                  >
                    {t.rotuloCurto}
                  </button>
                );
              })}
            </div>
          </fieldset>
        </div>

        <div
          aria-live="polite"
          className="rounded-xl border border-line bg-surface p-8 lg:p-10"
        >
          <p className="text-menor text-muted">Você recebe {r.prazo}</p>
          <p className="numero mt-2 text-t1 font-bold text-brand">
            <ValorAnimado valor={r.liquido} />
          </p>

          <dl className="mt-8 space-y-4 text-menor">
            <div className="flex items-baseline justify-between gap-4 border-t border-line pt-4">
              <dt className="text-muted">Venda</dt>
              <dd className="numero font-semibold">{formatarReal(r.bruto)}</dd>
            </div>
            <div className="flex items-baseline justify-between gap-4 border-t border-line pt-4">
              <dt className="text-muted">
                Taxa {taxa.rotulo.toLowerCase()} · {formatarPercentual(r.percentual)}
              </dt>
              <dd className="numero font-semibold text-signal">
                {r.descontado > 0 ? `− ${formatarReal(r.descontado)}` : "sem taxa"}
              </dd>
            </div>
            {taxa.parcelas > 1 && (
              <div className="flex items-baseline justify-between gap-4 border-t border-line pt-4">
                <dt className="text-muted">Cliente paga</dt>
                <dd className="numero font-semibold">
                  {taxa.parcelas}x de {formatarReal(r.parcela)}
                </dd>
              </div>
            )}
          </dl>

          <p className="mt-8 text-[0.8125rem] leading-relaxed text-muted">
            Simulação com as taxas publicadas nesta página, já com antecipação
            inclusa. As condições finais são confirmadas pelo consultor de
            acordo com o perfil do seu negócio.
          </p>
        </div>
      </div>
    </section>
  );
}
