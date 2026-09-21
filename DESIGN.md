# Design

Sistema visual do site da Quadri. Os tokens vivem em `app/globals.css`; este
arquivo explica as decisões por trás deles.

## Tema

Híbrido, por função e não por preferência do usuário: **escuro é dinheiro,
claro é explicação.** Três blocos escuros — abertura (hero, taxas, prova),
meio (calculadora) e fechamento (CTA, rodapé). A troca acontece pelo atributo
`data-tema="escuro"` na seção; os componentes leem sempre as mesmas variáveis
semânticas e não sabem em que tema estão.

## Cor

Estratégia: **committed**. O azul do aparelho carrega a marca; o resto é
neutro frio. Nada de segunda cor decorativa.

| Token | Claro | Escuro | Uso |
|---|---|---|---|
| `--bg` | `oklch(0.985 0.003 265)` | `oklch(0.17 0.04 265)` | Fundo da seção |
| `--surface` | `oklch(1 0 0)` | `oklch(0.225 0.045 265)` | Superfície elevada |
| `--ink` | `oklch(0.21 0.04 265)` | `oklch(0.97 0.005 265)` | Texto principal |
| `--muted` | `oklch(0.46 0.022 265)` | `oklch(0.755 0.022 265)` | Texto secundário |
| `--line` | `oklch(0.9 0.008 265)` | `oklch(0.32 0.035 265)` | Fios e bordas |
| `--brand` | `oklch(0.72 0.11 264)` | `oklch(0.78 0.12 264)` | Azul do aparelho |
| `--action` | `oklch(0.5 0.16 262)` | `oklch(0.74 0.13 263)` | Botões, ícones, números |
| `--signal` | `oklch(0.56 0.19 32)` | `oklch(0.75 0.17 42)` | Só onde há dinheiro descontado |

O azul da marca é o azul físico do hardware, não uma escolha de paleta. É por
isso que ele não é negociável — e por isso que o `--action` precisou ser um
azul mais fundo: `--brand` no tema claro não alcança 4,5:1.

`--signal` aparece em dois lugares no site inteiro: o risco no preço antigo e
o valor descontado na calculadora. Se começar a aparecer em mais lugares,
perdeu a função.

Os neutros têm 0,003–0,045 de croma puxando para o azul da marca. Nada de
neutro quente.

## Tipografia

Uma família: **Archivo**, variável nos eixos peso e largura.

Não é Inter nem Space Grotesk (o que o site antigo usava, por herança do
Lovable). Ambas são defaults de ferramenta, não identidade. Archivo tem o eixo
de largura, que dá contraste real entre título e corpo sem precisar de uma
segunda família — e algarismos tabulares que seguram uma página cujo conteúdo
principal é número.

- Títulos: `wdth 112`, peso 700, `letter-spacing -0.03em`, `text-wrap: balance`
- Corpo: `wdth 100`, peso 400, altura 1,6 (1,68 sobre fundo escuro, porque
  texto claro pesa menos)
- Números (`.numero`): `wdth 118` + `font-variant-numeric: tabular-nums`

Escala fluida em `clamp()`, razão ≥ 1,25. Teto do display: 3,6rem — a página
tem que informar, não gritar.

## Layout

- `.largura`: `min(100% - 2.5rem, 76rem)` centralizado
- `.secao`: `padding-block: clamp(4.5rem, 3rem + 6vw, 9rem)`
- `.prosa`: `max-width: 62ch`
- Grids assimétricos (`0.8fr 1.2fr`, `1.3fr 0.7fr`) em vez de colunas iguais
- Fios de 1px separando linhas; card só onde é mesmo o afordance certo — o
  painel de resultado da calculadora é o único da página

## Movimento

Regra que vale para tudo: **nenhuma animação decide se o conteúdo existe.**
A primeira versão revelava seções com opacidade e elas renderizavam em branco
fora da viewport. Agora a revelação mexe só em `transform`.

- **Entrada do hero**: quatro elementos escalonados, 900ms, `ease-out-quart`
- **Aparelho** (`components/ui/Produto.tsx`, `motion`): parallax por
  `useScroll` + `useTransform` — sobe mais devagar que o texto, com 2° de
  rotação ao longo do percurso
- **Ondas de aproximação**: três anéis em CSS saindo do símbolo contactless em
  45%/14% da imagem, achatados (`scaleY(0.42)`) e girados (`-24°`) para
  acompanhar o plano inclinado da tampa. É o gesto que vende o produto
- **Brilho**: passa uma vez pelo corpo do aparelho, recortado pelo alpha da
  própria foto usada como `mask-image`
- **Valor da calculadora** (`components/ui/ValorAnimado.tsx`): transita até o
  novo número em vez de saltar. Único lugar onde a animação carrega
  informação — dá para ver o dinheiro subir ou descer ao trocar a forma de
  pagamento
- **Imagens**: zoom de 3,5% no hover, 700ms
- Tudo guardado por `prefers-reduced-motion` (CSS) e `useReducedMotion` (JS)

Custo: a `motion` levou o First Load JS de 109 KB para 161 KB. Ainda é 3,4×
mais leve que os 547 KB do site antigo.

## Imagem de fundo

Uma seção só usa foto como fundo: a faixa de prova (+2.500 · R$ 125 Mi · 98% ·
100%), sobre a foto real do balcão da cafeteria. Véu navy em degradê de 96% a
82% de opacidade — medido no navegador, o texto bate 9:1 sobre a foto, bem
acima do mínimo de 4,5:1. A foto entra como atmosfera, nunca como concorrente
do número.

As demais cenas continuam em moldura (`.quadro`), na faixa de segmentos.

## As duas famílias de imagem

Toda imagem do site pertence a uma das duas, e elas não se misturam na mesma
faixa:

**A — estúdio recortado.** Fundo transparente, luz de topo, azul fiel do
aparelho. Vive nos blocos escuros, com a aurora atravessando por trás.
Hero (cena de pagamento), fechamento (comprovante saindo), e os recortes de
apoio nos pilares e no Quem somos.

**B — cena de ambiente.** Comércio brasileiro de rua, luz quente lateral,
profundidade rasa, aparelho à direita do centro — é por isso que o recorte
vertical usa `object-position: 64%`. Vive nos blocos claros, dentro de
`.quadro`. Oito verticais e duas cenas com lojista.

Regra de produção: toda cena é gerada com a foto de estúdio do aparelho como
referência, para o produto ser o mesmo objeto em todas. Nada de texto
inventado dentro da imagem; o único texto é o logo real na tela.

## Componentes

- **Botão** (`components/ui/Botao.tsx`): primário e secundário, altura mínima
  3,25rem
- **Marca** (`components/ui/Marca.tsx`): símbolo de quatro quadrados em SVG,
  usado também como marcador de lista
- **Ícones** (`components/ui/Icone.tsx`): os quatro das formas de receber,
  desenhados na gramática do símbolo da marca — quadrados de canto levemente
  arredondado, traço 1,6, grid de 24, `currentColor`. Sem biblioteca de ícones
- **FAQ**: `<details>` nativo. Sem biblioteca de accordion
- **Calculadora**: `<input type="range">` e `<input type="number">` nativos

Sem shadcn, sem Radix. Os dois únicos componentes interativos da página são
cobertos pela plataforma.

## Acessibilidade

- AA verificado nos dois temas por medição no navegador: zero falhas
- Alvos de toque ≥ 44px nos controles; ≥ 40px nos links de rodapé
- Foco visível de 3px em tudo que recebe foco
- Resultado da calculadora em `aria-live="polite"`
- `overflow-x: clip` no body (não `hidden`, que quebraria o `sticky`)
