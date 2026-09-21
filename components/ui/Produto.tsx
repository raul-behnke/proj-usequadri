"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { produto } from "@/content/site";

/**
 * A cena de pagamento que fecha o bloco escuro: maquininha ao centro, cliente
 * pagando por aproximação de um lado e com cartão do outro.
 *
 * A foto tem fundo transparente, então a aurora azul atravessa por trás do
 * aparelho em vez de ficar escondida atrás de um retângulo branco.
 *
 * Com `prefers-reduced-motion`, sobra a foto parada.
 */
export function Produto() {
  const alvo = useRef<HTMLDivElement>(null);
  const semMovimento = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: alvo,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [26, -26]);

  return (
    <div ref={alvo} className="relative z-10 flex items-end">
      <motion.div
        style={semMovimento ? undefined : { y }}
        className="w-full"
      >
        {/*
          Abaixo de 640px a cena inteira encolhe a ponto de os rótulos dos
          chips virarem ilegíveis. Nessa largura entra o recorte do aparelho
          sozinho, grande o bastante para se ler.
        */}
        <Image
          src={produto.imagemSozinho}
          alt={produto.altSozinho}
          width={673}
          height={1010}
          priority
          sizes="60vw"
          className="mx-auto mb-10 h-auto w-[min(62%,15rem)] sm:hidden"
        />
        <Image
          src={produto.imagem}
          alt={produto.alt}
          width={1600}
          height={869}
          priority
          sizes="100vw"
          className="hidden h-auto w-full max-w-none sm:block"
        />
      </motion.div>
    </div>
  );
}
