/**
 * Ícones das formas de receber.
 *
 * Desenhados na mesma gramática do símbolo da marca: quadrados de cantos
 * levemente arredondados, traço de 1,6, nada de arredondamento de ícone
 * genérico. Todos em `currentColor`, num grid de 24.
 */

type Props = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

/** Maquininha: corpo, tampa da bobina e tela. */
export function IconeMaquininha({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <rect x="6" y="2.5" width="12" height="4.5" rx="1" />
      <rect x="6.8" y="7" width="10.4" height="14.5" rx="1.4" />
      <rect x="9" y="9.6" width="6" height="7" rx="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Tap no celular: aparelho e as ondas de aproximação saindo do topo. */
export function IconeTap({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="3.5" width="10" height="17" rx="1.6" />
      <path d="M6 17.5h4" />
      <path d="M16 7.5a6 6 0 0 1 0 9" />
      <path d="M19 5a10 10 0 0 1 0 14" />
    </svg>
  );
}

/** Link de pagamento: dois quadrados ligados — o da marca, conectado. */
export function IconeLink({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <rect x="2.5" y="2.5" width="8" height="8" rx="1.2" />
      <rect x="13.5" y="13.5" width="8" height="8" rx="1.2" fill="currentColor" stroke="none" />
      <path d="M9.5 14.5 14.5 9.5" />
      <path d="M11 9h3.5v3.5" />
    </svg>
  );
}

/** Pix: quatro quadrados girados, o losango que o pagamento instantâneo virou. */
export function IconePix({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <g transform="rotate(45 12 12)">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" fill="currentColor" stroke="none" />
        <rect x="3" y="14" width="7" height="7" rx="1" fill="currentColor" stroke="none" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </g>
    </svg>
  );
}

export const icones = {
  maquininha: IconeMaquininha,
  tap: IconeTap,
  link: IconeLink,
  pix: IconePix,
} as const;

export type NomeIcone = keyof typeof icones;
