import { Marca } from "@/components/ui/Marca";
import { Botao } from "@/components/ui/Botao";
import { linkContato, navegacao, temWhatsApp } from "@/content/site";

export function Cabecalho() {
  return (
    <header className="relative z-20">
      <div className="largura flex h-[4.5rem] items-center justify-between gap-6 lg:h-[5.5rem]">
        <a href="#inicio" className="text-ink" aria-label="Quadri, ir para o início">
          <Marca />
        </a>

        <nav aria-label="Seções do site" className="hidden lg:block">
          <ul className="flex items-center gap-1 rounded-full bg-[oklch(1_0_0_/_0.06)] px-2 py-1 text-menor text-muted shadow-[inset_0_0_0_1px_oklch(1_0_0_/_0.08)]">
            {navegacao.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-10 items-center rounded-full px-4 transition-colors hover:bg-[oklch(1_0_0_/_0.08)] hover:text-ink"
                >
                  {item.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Botao
          href={linkContato()}
          variante="claro"
          className="h-11 min-h-11 shrink-0 px-6 text-menor whitespace-nowrap"
          {...(temWhatsApp ? { target: "_blank", rel: "noopener" } : {})}
        >
          {/* Em telas estreitas o rótulo longo quebrava em duas linhas e
              esticava a barra. */}
          <span className="sm:hidden">Quero a minha</span>
          <span className="hidden sm:inline">Quero minha maquininha</span>
        </Botao>
      </div>
    </header>
  );
}
