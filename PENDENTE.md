# Pendências com o cliente

Itens que o site precisa e que não estão no meu alcance. Onde falta conteúdo,
o código está marcado com `TODO(cliente)` e o site funciona com um provisório
razoável — nada fica quebrado, mas nada disso deve ir ao ar sem revisão.

## Bloqueiam a publicação

1. **Número do WhatsApp comercial.** `content/site.ts`, constante
   `WHATSAPP_TELEFONE`. Enquanto estiver vazio, todos os CTAs abrem o e-mail
   `contato@quadri.com.br` em vez de um link `wa.me` quebrado. Preencher no
   formato `5548999999999`.

2. **Respostas do FAQ.** As cinco perguntas vieram do site atual; as respostas
   não existiam no HTML publicado. Escrevi provisórias a partir do que o
   próprio site já afirma (sem fidelidade, 1 dia útil, chip 4G). Precisam de
   validação uma a uma — `content/site.ts`, array `faq`.

3. **Depoimentos.** Os três atuais não têm identificação verificável. Se forem
   ilustrativos, a lei exige deixar isso explícito na página. Confirmar ou
   substituir por depoimentos reais com autorização.

4. **Métricas.** "+2.500 estabelecimentos", "R$ 125 Mi/mês", "98% de
   satisfação". Confirmar se seguem atualizadas e de onde sai o 98% — número de
   satisfação sem metodologia é passivo, não prova.

5. **Páginas de política.** O rodapé aponta para `/politica-de-privacidade`,
   `/politica-de-cookies` e `/termos-de-uso`. Nenhuma existe ainda. Ou mandam
   os textos, ou os links saem do ar até existirem.

6. **As imagens do site são geradas por IA, com uma exceção.** Oito cenas de
   vertical (barbearia, farmácia, padaria, mercearia, roupas, pet shop,
   oficina, food truck), duas cenas com lojista atendendo e quatro recortes de
   produto foram criados com `gpt-image-2`, usando a foto de estúdio do
   aparelho como referência. Não são estabelecimentos reais nem
   clientes reais. Para ilustrar uso do produto isso é prática comum, mas a
   decisão é de vocês — e se a página passar a sugerir que são clientes
   Quadri, vira problema. A foto do balcão da cafeteria, que fecha a faixa de
   prova, é real e veio de vocês.

   Nas duas cenas com pessoas, nenhum rosto aparece identificável — as
   pessoas estão de costas, cortadas ou só com as mãos em quadro. Foi
   deliberado: rosto de cliente fictício numa seção de prova social sugere
   depoimento real.

   Três cenas geradas (tap no celular, link de pagamento e Pix) saíram da
   página quando as formas de receber viraram ícones. Ficaram guardadas em
   `assets-extra/`, fora do que é publicado.

## Melhoram o resultado

6. **Logo em vetor.** Hoje só existe um PNG de 249 KB. O símbolo do site é um
   SVG que desenhei a partir do logo aplicado no aparelho — próximo, não
   idêntico. O wordmark "useQuadri" está composto em Archivo, não na fonte
   original da marca.

7. **Foto do produto com fundo transparente.** A que usei foi recortada por
   mim a partir do JPG de fundo branco. Ficou limpa, mas a sombra original se
   perdeu e a base do aparelho desaparece num degradê. Um PNG com alpha
   original renderiza melhor.

8. **Tabela completa de parcelamento.** A calculadora simula só o que o site
   publica: Pix, débito, crédito à vista e crédito 12x. Não inventei as taxas
   de 2x a 11x — interpolar percentual de dinheiro é chute, e chute na
   calculadora é exatamente o bug do site antigo. Com a tabela real, ela
   passa a cobrir todas as parcelas.

9. **Imagem de compartilhamento (OG).** A atual está hospedada no storage do
   Lovable e é um screenshot. Vale uma imagem própria, 1200×630.

10. **Claim "as menores taxas do mercado".** Afirmação absoluta e comparativa,
    com exposição ao CDC e ao CONAR. Está fora do site novo, que fala em
    "menor taxa" só no fechamento herdado do texto atual. Decisão de vocês,
    registrada aqui.
