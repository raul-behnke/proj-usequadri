"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { produto } from "@/content/site";

/**
 * O aparelho do hero, com movimento.
 *
 * Três camadas, todas ancoradas na mesma caixa da imagem:
 *  1. a foto, que sobe mais devagar que o texto enquanto a página rola;
 *  2. as ondas de aproximação saindo do símbolo contactless, em 45%/14% da
 *     imagem, achatadas e giradas para acompanhar o plano inclinado da tampa;
 *  3. um brilho que corre pelo corpo uma vez, recortado pelo próprio alpha da
 *     foto usada como máscara.
 *
 * Com `prefers-reduced-motion`, sobra a foto parada — nada de conteúdo
 * dependendo de animação para existir.
 */
export function Produto() {
  const alvo = useRef<HTMLDivElement>(null);
  const semMovimento = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: alvo,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -60]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0.8, -1.2]);

  return (
    <div ref={alvo} className="relative flex justify-center lg:justify-end">
      <motion.div
        style={semMovimento ? undefined : { y, rotate }}
        className="relative w-[min(78%,20rem)] lg:w-[min(100%,25rem)]"
      >
        <Image
          src={produto.imagem}
          alt={produto.alt}
          width={673}
          height={1010}
          priority
          sizes="(max-width: 1024px) 70vw, 34vw"
          className="entrada h-auto w-full"
          style={{ filter: "drop-shadow(var(--sombra-produto))" }}
        />

        {!semMovimento && (
          <>
            {/* Ondas de aproximação: o gesto que vende o produto. */}
            <div
              aria-hidden
              className="pointer-events-none absolute"
              style={{
                left: "45%",
                top: "14%",
                transform: "translate(-50%, -50%) rotate(-24deg) scaleY(0.42)",
              }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="onda absolute left-1/2 top-1/2 block h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[var(--brand)]"
                  style={{ animationDelay: `${i * 0.9}s` }}
                />
              ))}
            </div>

            {/* Brilho recortado pelo alpha da própria foto. */}
            <span
              aria-hidden
              className="brilho pointer-events-none absolute inset-0"
              style={{
                maskImage: `url(${produto.imagem})`,
                WebkitMaskImage: `url(${produto.imagem})`,
                maskSize: "100% 100%",
                WebkitMaskSize: "100% 100%",
              }}
            />
          </>
        )}
      </motion.div>
    </div>
  );
}
