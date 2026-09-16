/**
 * Matemática da simulação. Sem dependência do conteúdo: recebe a taxa pronta,
 * o que mantém o cálculo testável isoladamente e impede que o arquivo vire
 * uma segunda fonte de verdade sobre percentuais.
 */

export type TaxaAplicavel = {
  percentual: number;
  prazo: string;
  parcelas: number;
};

export type Simulacao = {
  /** Valor bruto da venda, em reais. */
  bruto: number;
  /** Percentual aplicado. */
  percentual: number;
  /** Valor descontado, em reais, arredondado ao centavo. */
  descontado: number;
  /** Valor líquido recebido, em reais, arredondado ao centavo. */
  liquido: number;
  /** Quando o dinheiro cai. */
  prazo: string;
  /** Valor de cada parcela paga pelo cliente final, em reais. */
  parcela: number;
};

/** Arredonda ao centavo sem herdar o erro de ponto flutuante de `valor * 100`. */
export function aoCentavo(valor: number): number {
  return Math.round((valor + Number.EPSILON) * 100) / 100;
}

export function simular(bruto: number, taxa: TaxaAplicavel): Simulacao {
  const seguro = Number.isFinite(bruto) && bruto > 0 ? bruto : 0;
  const descontado = aoCentavo((seguro * taxa.percentual) / 100);

  return {
    bruto: seguro,
    percentual: taxa.percentual,
    descontado,
    liquido: aoCentavo(seguro - descontado),
    prazo: taxa.prazo,
    parcela: aoCentavo(seguro / Math.max(1, taxa.parcelas)),
  };
}

const moeda = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function formatarReal(valor: number): string {
  return moeda.format(valor);
}

export function formatarPercentual(valor: number): string {
  return `${valor.toFixed(2).replace(".", ",")}%`;
}
