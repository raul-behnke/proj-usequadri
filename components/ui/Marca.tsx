/**
 * Símbolo da marca redesenhado em vetor a partir do logo aplicado no aparelho:
 * quatro quadrados, dois vazados e dois cheios, o maior embaixo à direita.
 *
 * TODO(cliente): substituir pelo SVG oficial quando chegar. O que existe hoje
 * é um PNG de 249 KB, grande demais e sem versão vetorial.
 */
export function Simbolo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect x="2" y="3" width="14" height="14" rx="1.5" fill="currentColor" />
      <rect
        x="23"
        y="3"
        width="13"
        height="13"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="3"
      />
      <rect
        x="2"
        y="24"
        width="13"
        height="13"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="3"
      />
      <rect x="21" y="22" width="24" height="24" rx="2" fill="currentColor" />
    </svg>
  );
}

export function Marca({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Simbolo className="h-6 w-6 text-brand" />
      <span
        className="text-[1.15rem] font-bold tracking-[-0.045em]"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        useQuadri
      </span>
    </span>
  );
}
