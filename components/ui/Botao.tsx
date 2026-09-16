import type { ComponentProps } from "react";

type Props = ComponentProps<"a"> & {
  variante?: "primario" | "secundario";
};

const base =
  "inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-lg px-7 text-[1.0625rem] font-semibold " +
  "transition-[background-color,color,transform] duration-200 ease-[var(--ease-saida)] active:translate-y-px";

const variantes = {
  primario: "bg-action text-action-ink hover:bg-action-hover",
  secundario:
    "border border-line bg-transparent text-ink hover:border-action hover:text-action",
} as const;

export function Botao({ variante = "primario", className = "", ...props }: Props) {
  return (
    <a className={`${base} ${variantes[variante]} ${className}`} {...props} />
  );
}
