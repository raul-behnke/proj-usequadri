import { Marca } from "@/components/ui/Marca";
import { Botao } from "@/components/ui/Botao";
import { linkContato, navegacao, temWhatsApp } from "@/content/site";

export function Cabecalho() {
  return (
    <header
      data-tema="escuro"
      className="sticky top-0 z-[var(--z-nav)] border-b border-line/60 bg-bg/85 backdrop-blur-md"
    >
      <div className="largura flex h-[4.5rem] items-center justify-between gap-6">
        <a href="#inicio" className="text-ink" aria-label="Quadri, ir para o início">
          <Marca />
        </a>

        <nav aria-label="Seções do site" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-menor text-muted">
            {navegacao.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-11 items-center transition-colors hover:text-ink"
                >
                  {item.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Botao
          href={linkContato()}
          className="h-11 min-h-11 shrink-0 px-5 text-menor whitespace-nowrap"
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
