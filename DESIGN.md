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

- Entrada do hero: quatro elementos escalonados, 900ms, `ease-out-quart`
- Revelação por rolagem: `animation-timeline: view()`, **só transform, nunca
  opacidade**. O conteúdo nunca depende de animação para existir — a primeira
  versão usava opacidade e as seções renderizavam em branco fora da viewport
- Tudo dentro de `prefers-reduced-motion: no-preference`

## Componentes

- **Botão** (`components/ui/Botao.tsx`): primário e secundário, altura mínima
  3,25rem
- **Marca** (`components/ui/Marca.tsx`): símbolo de quatro quadrados em SVG,
  usado também como marcador de lista
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
