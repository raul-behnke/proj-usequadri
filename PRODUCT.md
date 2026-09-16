# Product

## Register

brand

## Users

Donos de pequenos e médios comércios no Brasil: restaurantes, salões, farmácias, lojas de roupa, mercearias, postos, clínicas, food trucks. Operam o próprio caixa e sentem a taxa de cartão diretamente no bolso — não têm departamento financeiro que absorva a diferença.

Contexto de uso: quase sempre celular, muitas vezes um link recebido no WhatsApp, lido no balcão ou na rua sob luz forte, entre um atendimento e outro. Raramente desktop, raramente com tempo.

Trabalho a ser feito: descobrir em menos de um minuto quanto vão pagar de taxa, quanto custa o aparelho e quando o dinheiro cai — e falar com uma pessoa. A venda se fecha no WhatsApp com um consultor, não no site. O site existe para qualificar e convencer, não para vender sozinho.

## Product Purpose

Site institucional e de conversão da Quadri (useQuadri), empresa de meios de pagamento ativa desde 2021 em todo o Brasil. Vende maquininha de cartão, Tap no celular, link de pagamento, Pix, conta digital e antecipação de recebíveis.

Este projeto é uma reconstrução: mesma mensagem, mesma oferta, nova arquitetura da informação e novo visual. Substitui uma SPA gerada no Lovable, sem SSR e com 547 KB de JavaScript.

Sucesso: mais conversas iniciadas no WhatsApp a partir do site, e menos gente saindo sem entender a taxa.

## Brand Personality

**Direta, próxima, confiável.**

Fala como gente, não como banco. Frases curtas, sem juridiquês, sem "soluções inteligentes em meios de pagamento" quando dá para dizer "você paga menos taxa". A confiança vem da clareza e dos números expostos sem letra miúda — não de parecer institucional.

Emoção alvo: alívio. O dono percebe que estava pagando caro e que sair disso é simples.

## Anti-references

- **Banco tradicional.** Itaú, Bradesco, Cielo institucional: formalidade, foto de executivo sorrindo, azul corporativo morto, linguagem de compliance.
- **Revenda barata.** Sites de revendedor de maquininha: amarelo gritando, selo de desconto girando, "PROMOÇÃO", contagem regressiva, urgência fabricada. A Quadri tem preço bom de verdade e não precisa gritar.
- **Cópia de concorrente.** O site não pode ser lido como Stone, InfinitePay ou PagBank redesenhado. Precisa de cara própria.
- **SaaS genérico.** Gradiente roxo, três cards idênticos com ícone, ilustração isométrica, blobs desfocados. É o default de IA e desqualifica a marca.

Sem referências positivas definidas pelo cliente — a direção é livre desde que fique fora dessas quatro faixas.

## Design Principles

1. **O número aparece antes do argumento.** Taxa, preço e prazo são o conteúdo. Texto existe para explicar o número, nunca para adiar sua aparição.
2. **Produto primeiro, história por último.** A maquininha abre a página; a trajetória da empresa fecha. Ninguém quer biografia antes da oferta.
3. **Uma fonte de verdade para dinheiro.** Toda taxa exibida na página vem do mesmo dado. Um número que contradiz outro destrói mais confiança do que qualquer design conserta.
4. **Legível no balcão.** O julgamento final é celular, tela suja, luz forte, dez segundos. Contraste e tamanho de texto respondem a isso, não à elegância no monitor.
5. **Escuro é dinheiro, claro é explicação.** O tema alterna por função, nunca por variedade visual.

## Accessibility & Inclusion

- WCAG 2.1 AA: corpo de texto ≥ 4,5:1, texto grande ≥ 3:1, verificado nos blocos claros e nos escuros.
- Público com ampla faixa etária, incluindo usuários acima de 50 anos. Corpo de texto não desce abaixo de 16 px; nada de cinza-claro decorativo.
- `prefers-reduced-motion` respeitado em toda animação.
- Calculadora e FAQ operáveis por teclado; resultado da calculadora anunciado por região `aria-live`.
- Alvos de toque ≥ 44 px — a página é usada com uma mão, em pé.
- Não depender de cor sozinha para comunicar estado.
