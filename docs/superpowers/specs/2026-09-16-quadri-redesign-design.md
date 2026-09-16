# Quadri — Redesign do site (design doc)

Data: 2026-09-16
Status: aprovado para planejamento
Escopo: redesign visual + arquitetura da informação de `usequadri.com`. Mensagem e posicionamento **não mudam**.

---

## 1. Contexto

O site atual foi construído no Lovable (React + Vite + Tailwind + shadcn/ui + Radix + Sonner). É uma SPA de página única, sem SSR, com ~547 KB de JavaScript e um hero de 1,7 MB em PNG. O conteúdo é sólido e a proposta de valor é clara; o problema está na ordem em que as informações aparecem, no peso da página e na ausência de renderização no servidor.

Este documento define o que será reconstruído. O texto do site é preservado salvo onde indicado.

### O que o site comunica hoje (mantido)

Promessa central: **menor taxa = mais lucro** ("Menos taxa. Mais lucro. Mais negócio.").

Quatro pilares recorrentes:

1. **Taxa** — Pix 0,00% · Débito 0,75% · Crédito 1x 2,69% · Crédito 12x 8,99%
2. **Anti-burocracia** — sem mensalidade, sem adesão, sem fidelidade, aprovação em minutos
3. **Atendimento humano** — "sem robôs, sem fila"; a venda acontece por WhatsApp com consultor
4. **Velocidade do dinheiro** — recebimento na hora ou em 1 dia útil, antecipação inclusa

Público: pequeno e médio comerciante, multi-segmento, Brasil inteiro.
Tom: direto, coloquial, anti-corporativo.

### Problemas identificados

| # | Problema | Correção |
|---|---|---|
| 1 | "Quem Somos" ocupa a segunda dobra | Desce para a posição 10 |
| 2 | Calculadora enterrada na quarta dobra | Vira destino do CTA secundário do hero |
| 3 | Prova social aparece na sexta dobra | Sobe para a posição 3 |
| 4 | Seis cards de benefício | Condensados em três pilares |
| 5 | Preço (R$ 199) escondido dentro do parágrafo do hero | Vira elemento de primeira ordem no hero |
| 6 | Calculadora exibe 0,99%, taxa que não existe em nenhuma outra parte do site | Passa a ler a mesma fonte de dados da faixa de taxas |
| 7 | Segmentos é uma lista de texto com doze itens | Vira grid de ícones fundido aos depoimentos |
| 8 | Sem SSR — o Google não enxerga o conteúdo | Next.js com exportação estática |
| 9 | OG image hospedada no storage do Lovable; `twitter:site` aponta para `@Lovable` | Metadados próprios |

---

## 2. Decisões

| Decisão | Escolha |
|---|---|
| Objetivo | Redesign e arquitetura da informação; mensagem preservada |
| Abordagem | Produto primeiro — a maquininha e o preço abrem a página |
| Calculadora | Permanece na mesma página, alcançada por âncora. Sem rota própria |
| Tema | Híbrido: blocos escuros e claros alternados por função |
| Stack | Next.js 15 (App Router) + Tailwind v4, exportação estática |
| Hospedagem | Vercel |

---

## 3. Arquitetura da informação

Página única com âncoras. Os IDs atuais são preservados porque já circulam em links do WhatsApp, mesmo quando a seção muda de posição:

| Âncora | Passa a apontar para |
|---|---|
| `#inicio` | seção 1 (hero) |
| `#solucoes` | seção 5 (três pilares) |
| `#calculadora` | seção 7 |
| `#como-funciona` | seção 6 |
| `#faq` | seção 9 |
| `#quem-somos` | seção 10 |
| `#contato` | seção 11 (CTA final) |

| # | Seção | Tema | Função | Origem |
|---|---|---|---|---|
| 1 | Hero — produto | dark | Maquininha em destaque, preço `R$ 199 ou 12x R$ 16,58` com `12x R$ 79,90` riscado. CTA primário para WhatsApp, CTA secundário "Simular minhas taxas" ancorado na seção 7 | hero atual, reordenado |
| 2 | Faixa de taxas | dark | Quatro números em faixa fina de alto contraste | hero atual |
| 3 | Prova | dark | +2.500 · R$ 125 Mi/mês · 98% · 100% Brasil | seção de métricas atual |
| 4 | Formas de receber | light | Maquininha · Tap no celular · Link de pagamento · Pix | hoje existe apenas na headline |
| 5 | Três pilares | light | Taxa que cabe · Dinheiro quando quiser · Gente de verdade | seis cards atuais, condensados |
| 6 | Como funciona | light | Quatro passos | inalterado |
| 7 | Calculadora | dark | Simulação de recebimento | reescrita |
| 8 | Depoimentos + segmentos | light | Três depoimentos ancorados em segmentos, mais grid de doze verticais | duas seções fundidas |
| 9 | FAQ | light | Cinco perguntas em accordion | inalterado, depende de conteúdo novo |
| 10 | Quem somos | light | Um parágrafo e três marcadores (2021 · Brasil · Humanizado) | três parágrafos, encolhidos |
| 11 | CTA final | dark | Cinco garantias e dois botões | inalterado |
| — | Footer | dark | CNPJ, suporte, políticas | inalterado |

Resultado: treze seções viram onze. Prova social sobe três posições; "Quem Somos" desce oito.

### Condensação dos seis cards em três pilares

| Pilar | Texto principal | Absorve |
|---|---|---|
| Taxa que cabe no seu negócio | card 1 (taxas competitivas) | card 6 (sem taxa de aluguel) como marcador |
| Receba quando quiser | card 3 (antecipação de recebíveis) | menção ao Painel Gestor |
| Gente de verdade | card 4 (suporte humano) | card 2 (aprovação rápida) como marcador |

O card 5 (tecnologia/equipamento) é absorvido pela seção 1, onde o produto já está em destaque.

---

## 4. Direção visual

Herdado do site atual: Inter e Space Grotesk, raio de borda 10 px (`.625rem`), e os quatro quadrados do logo como motivo gráfico (grids, divisórias, ícones).

### Paleta

Calibrada a partir do produto físico e do wordmark, não do CSS atual.

| Token | Valor | Uso |
|---|---|---|
| `navy` | `#0F1B3D` | Texto forte no tema claro; base do wordmark |
| `navy-deep` | `#0B1226` | Fundo dos blocos escuros |
| `blue-product` | `#7BA7F0` | Tom do aparelho; destaques, glow, gráficos |
| `blue-action` | `#3B82F6` | Botões e links (mantém a primária atual) |
| Neutros | escala cinza fria | Fundos claros, bordas, texto secundário |

O CSS atual traz variáveis chamadas `--quadri-green` que na verdade contêm azul — resquício de uma troca de marca. Os nomes novos descrevem a cor real.

### Ritmo de tema

Regra: **escuro para dinheiro e números; claro para produto, pessoas e explicação.** Sem alternância arbitrária.

Três blocos escuros — abertura (seções 1–3), meio (seção 7) e fechamento (seção 11 + footer). A calculadora ganha peso visual por ser a única ilha escura no miolo claro, o que torna o CTA secundário do hero legível como um salto para ela.

### Produto

A foto disponível (`~/Downloads/maquininhaQuadri.png`) tem fundo branco. Para o hero escuro é necessário recorte com canal alpha, o que elimina a sombra original — a sombra será recriada em CSS. Se existir o PNG transparente de origem, ele substitui o recorte.

---

## 5. Arquitetura técnica

### Stack

- **Next.js 15**, App Router, `output: 'export'` — site estático, sem backend e sem banco
- **Tailwind v4**, tokens de cor definidos em CSS
- Deploy na Vercel

### Estrutura

```
app/
  layout.tsx          fontes, metadata, JSON-LD
  page.tsx            compõe as onze seções
components/
  sections/           uma por seção da página
  ui/                 botão, faixa, card
content/
  site.ts             taxas, FAQ, depoimentos, segmentos, preço, WhatsApp
lib/
  calculator.ts       matemática pura da simulação
public/
```

Todo conteúdo textual e numérico vive em `content/site.ts`. Alterar uma taxa é editar um objeto, não caçar JSX espalhado. Essa é também a correção do problema 6: a faixa de taxas da seção 2 e a calculadora da seção 7 leem a mesma fonte, e passam a ser incapazes de divergir.

### Calculadora

Entrada: valor da venda, forma de recebimento (Pix, débito, crédito à vista, crédito parcelado) e número de parcelas.
Saída: valor líquido recebido, taxa aplicada, valor descontado e prazo de recebimento.

Implementação: `useState` e funções puras em `lib/calculator.ts`, alimentadas pela tabela de `content/site.ts`. Nenhuma chamada de rede.

`lib/calculator.ts` acompanha um teste — o cálculo envolve dinheiro, arredondamento e uma tabela de parcelas, e precisa falhar de forma visível se quebrar.

### Dependências

Sem shadcn/ui e sem Radix. Os dois únicos componentes interativos são o accordion do FAQ e o controle da calculadora, cobertos por `<details>` e `<input type="range">` nativos. Isso remove cerca de 200 KB de JavaScript.

### Performance

- `next/image` com WebP; o hero de 1,7 MB cai para a ordem de 120 KB
- Fontes via `next/font`, self-hosted, sem requisição ao Google Fonts
- Meta: LCP abaixo de 2,0 s em 4G

### SEO e metadados

- Metadata estática no `layout.tsx`
- JSON-LD: `Organization` e `FAQPage`
- OG image própria, hospedada no projeto
- Remoção das referências ao Lovable (`twitter:site` e a URL de storage do gpt-engineer)
- `lang="pt-BR"` — hoje o documento declara `lang="en"`

### Analytics

Vercel Analytics apenas. Nada de GTM salvo pedido explícito.

---

## 6. Acessibilidade

- Contraste AA nos dois temas, verificado nos blocos escuros com `blue-product` sobre `navy-deep`
- Accordion do FAQ navegável por teclado (`<details>` entrega isso nativamente)
- Calculadora operável por teclado, com resultado em região `aria-live`
- Foco visível em todos os elementos interativos
- Texto alternativo nas imagens de produto

---

## 7. Conteúdo pendente

Estes itens bloqueiam partes da implementação e precisam vir do cliente:

1. **Respostas do FAQ** — as cinco perguntas existem no site atual, as respostas não estão no HTML capturado
2. **PNG transparente do produto**, se existir
3. **Logo vetorial** (SVG) — hoje só há `logo-icon.png` a 249 KB
4. **Confirmação das taxas** e das condições de antecipação vigentes
5. **Número do WhatsApp** e texto pré-preenchido da mensagem

Onde faltar conteúdo, a seção é construída com o texto atual do site como provisório e marcada no código.

---

## 8. Riscos sinalizados

| Risco | Situação | Encaminhamento |
|---|---|---|
| Depoimentos sem procedência | Três depoimentos com nome, cidade e segmento, sem foto nem identificação verificável | Se forem ilustrativos, exigem nota explícita |
| "98% de satisfação" sem fonte | Número exibido sem metodologia | Citar a fonte ou remover |
| "As menores taxas do mercado" | Claim absoluto e comparativo | Exposição ao CDC e ao CONAR; decisão do cliente, sinalizada aqui |
| Métricas operacionais | +2.500 estabelecimentos, R$ 125 Mi/mês | Confirmar se estão atualizadas antes de publicar |

Nenhum desses itens é decidido aqui. São do cliente; este documento apenas registra que foram levantados.

---

## 9. Fora de escopo

- Mudança de posicionamento ou de mensagem
- Blog, área do cliente, onboarding online
- Páginas por vertical ou por cidade
- Multi-idioma
- Integração com CRM ou com o painel gestor
- Checkout — a venda continua acontecendo pelo WhatsApp

---

## 10. Critérios de aceite

1. As onze seções existem, na ordem definida, com o ritmo de tema especificado
2. A faixa de taxas e a calculadora exibem os mesmos números, lidos da mesma fonte
3. A calculadora funciona sem rede e tem teste cobrindo o cálculo
4. Nenhuma referência ao Lovable permanece no HTML publicado
5. As âncoras antigas continuam resolvendo
6. `lang="pt-BR"`
7. LCP abaixo de 2,0 s em 4G simulado
8. Contraste AA nos blocos claros e escuros
9. Sem Radix nem shadcn no bundle
