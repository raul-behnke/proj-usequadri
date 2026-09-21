import type { ComponentProps } from "react";

type Props = ComponentProps<"a"> & {
  variante?: "primario" | "secundario" | "claro";
};

const base =
  "inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full px-8 text-[1.0625rem] font-semibold " +
  "transition-[background-color,color,transform,box-shadow] duration-200 ease-[var(--ease-saida)] active:translate-y-px";

const variantes = {
  /** Azul cheio. O caminho principal. */
  primario: "bg-action text-action-ink hover:bg-action-hover",
  /** Contorno suave sobre qualquer fundo. */
  secundario:
    "bg-transparent text-ink shadow-[inset_0_0_0_1px_var(--line)] hover:shadow-[inset_0_0_0_1px_var(--action)] hover:text-action",
  /**
   * Pílula clara sobre fundo escuro — o "Contact Us" da referência. Usa cor
   * fixa de propósito: `--surface` seria invertido pelo tema escuro e o botão
   * sumiria dentro do hero.
   */
  claro:
    "bg-[oklch(0.99_0.002_265)] text-[oklch(0.21_0.04_265)] hover:bg-[oklch(0.93_0.01_265)]",
} as const;

export function Botao({ variante = "primario", className = "", ...props }: Props) {
  return (
    <a className={`${base} ${variantes[variante]} ${className}`} {...props} />
  );
}
