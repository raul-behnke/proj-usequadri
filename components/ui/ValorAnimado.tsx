"use client";

import { useEffect, useState } from "react";
import { animate, useReducedMotion } from "motion/react";
import { formatarReal } from "@/lib/calculator";

/**
 * O número da calculadora transita até o novo valor em vez de saltar. É o
 * único lugar do site onde a animação carrega informação: dá para ver o
 * dinheiro subindo ou descendo quando se muda a forma de pagamento.
 */
export function ValorAnimado({ valor }: { valor: number }) {
  const semMovimento = useReducedMotion();
  const [exibido, setExibido] = useState(valor);

  useEffect(() => {
    if (semMovimento) {
      setExibido(valor);
      return;
    }
    const controles = animate(exibido, valor, {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: setExibido,
    });
    return () => controles.stop();
    // `exibido` fica de fora de propósito: ele é o ponto de partida da
    // transição, não um gatilho para reiniciá-la.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valor, semMovimento]);

  return <>{formatarReal(exibido)}</>;
}
