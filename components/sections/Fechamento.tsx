import { Botao } from "@/components/ui/Botao";
import { Marca, Simbolo } from "@/components/ui/Marca";
import {
  empresa,
  garantias,
  linkContato,
  navegacao,
  politicas,
  temWhatsApp,
} from "@/content/site";

export function Fechamento() {
  const externo = temWhatsApp ? { target: "_blank", rel: "noopener" } : {};

  return (
    <section id="contato" data-tema="escuro" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-30%] left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full opacity-25 blur-[120px]"
        style={{
          background: "radial-gradient(circle, var(--brand) 0%, transparent 70%)",
        }}
      />

      <div className="largura relative secao">
        <h2 className="max-w-[16ch] text-t1">
          Sua maquininha com a menor taxa está a um clique.
        </h2>
        <p className="prosa mt-6 text-guia text-muted">
          Não deixe o dinheiro que é seu ficar nas mãos de quem cobra caro
          demais.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Botao href={linkContato()} {...externo}>
            Quero minha maquininha agora
          </Botao>
          <Botao
            href={linkContato("Olá! Quero tirar uma dúvida sobre a Quadri.")}
            variante="secundario"
            {...externo}
          >
            {temWhatsApp ? "Falar pelo WhatsApp" : "Falar com um consultor"}
          </Botao>
        </div>

        <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-menor text-muted">
          {garantias.map((g) => (
            <li key={g} className="flex items-center gap-2.5">
              <Simbolo className="h-3 w-3 shrink-0 text-brand" />
              {g}
            </li>
          ))}
        </ul>
      </div>

      <footer className="relative border-t border-line">
        <div className="largura grid gap-x-10 gap-y-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Marca />
            <p className="prosa mt-4 text-menor text-muted">
              {empresa.tagline}
            </p>
            <p className="mt-5 text-menor text-muted">
              Empresa registrada · CNPJ {empresa.cnpj}
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h2 className="text-menor font-semibold">Site</h2>
            <ul className="mt-3 text-menor text-muted">
              {navegacao.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="inline-flex min-h-10 items-center hover:text-ink">
                    {item.rotulo}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-menor font-semibold">Suporte e políticas</h2>
            <ul className="mt-3 text-menor text-muted">
              <li>
                <a href={`mailto:${empresa.email}`} className="inline-flex min-h-10 items-center hover:text-ink">
                  {empresa.email}
                </a>
              </li>
              {politicas.map((p) => (
                <li key={p.href}>
                  <a href={p.href} className="inline-flex min-h-10 items-center hover:text-ink">
                    {p.rotulo}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="largura flex flex-wrap items-center justify-between gap-4 border-t border-line py-7 text-menor text-muted">
          <p>
            © {new Date().getFullYear()} {empresa.nomeCompleto}. Todos os
            direitos reservados.
          </p>
          <p className="font-semibold text-ink">{empresa.assinatura}</p>
        </div>
      </footer>
    </section>
  );
}
