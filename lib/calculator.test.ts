import { test } from "node:test";
import assert from "node:assert/strict";
import { aoCentavo, simular, formatarPercentual } from "./calculator.ts";

const pix = { percentual: 0, prazo: "na hora", parcelas: 1 };
const debito = { percentual: 0.75, prazo: "em 1 dia útil", parcelas: 1 };
const credito12x = { percentual: 8.99, prazo: "em 1 dia útil", parcelas: 12 };

test("Pix não desconta nada", () => {
  const r = simular(1000, pix);
  assert.equal(r.descontado, 0);
  assert.equal(r.liquido, 1000);
});

test("débito desconta o percentual publicado", () => {
  const r = simular(1000, debito);
  assert.equal(r.descontado, 7.5);
  assert.equal(r.liquido, 992.5);
});

test("descontado e líquido sempre somam o bruto", () => {
  for (const valor of [1, 19.9, 33.33, 99.99, 1234.56, 87654.32]) {
    for (const taxa of [pix, debito, credito12x]) {
      const r = simular(valor, taxa);
      assert.equal(
        aoCentavo(r.descontado + r.liquido),
        aoCentavo(valor),
        `${valor} a ${taxa.percentual}%`,
      );
    }
  }
});

test("arredonda ao centavo em vez de propagar erro de ponto flutuante", () => {
  // 0.1 + 0.2 = 0.30000000000000004 sem arredondamento.
  assert.equal(aoCentavo(0.1 + 0.2), 0.3);
  // 8.99% de 1,15 = 0,103385 → meio centavo para cima.
  assert.equal(simular(1.15, credito12x).descontado, 0.1);
});

test("parcela divide o bruto pelo número de parcelas", () => {
  assert.equal(simular(1200, credito12x).parcela, 100);
  assert.equal(simular(1000, debito).parcela, 1000);
});

test("valores inválidos viram zero em vez de NaN na tela", () => {
  for (const entrada of [NaN, -5, Infinity]) {
    const r = simular(entrada, debito);
    assert.equal(r.bruto, 0);
    assert.equal(r.liquido, 0);
    assert.equal(r.descontado, 0);
  }
});

test("percentual sai no formato brasileiro", () => {
  assert.equal(formatarPercentual(2.69), "2,69%");
  assert.equal(formatarPercentual(0), "0,00%");
});
