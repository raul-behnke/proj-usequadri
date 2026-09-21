import type { NomeIcone } from "@/components/ui/Icone";

/**
 * Prefixo das imagens. Publicações em subpasta (ex.: lamna.tech/usequadri)
 * precisam dele: o `basePath` do Next não reescreve caminho literal passado
 * para `next/image` quando as imagens não são otimizadas.
 *
 * Tem que ser `NEXT_PUBLIC_`: o caminho é remontado no cliente durante a
 * hidratação, e uma variável só de build viraria `undefined` lá.
 */
const IMG = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/img`;

/**
 * Fonte única de verdade do conteúdo do site.
 *
 * Toda taxa exibida na página vem daqui — a faixa do hero e a calculadora leem
 * o mesmo array, e por construção não podem divergir. Esse era o bug do site
 * antigo: a calculadora mostrava 0,99%, taxa que não existia em nenhum outro
 * lugar da página.
 *
 * Itens marcados com TODO(cliente) aguardam confirmação. Ver PENDENTE.md.
 */

export const empresa = {
  nome: "Quadri",
  nomeCompleto: "Quadri Meios de Pagamento",
  marca: "useQuadri",
  cnpj: "42.856.709/0001-33",
  desde: 2021,
  email: "contato@quadri.com.br",
  tagline: "Meios de pagamento para impulsionar o seu negócio.",
  assinatura: "Menos taxa. Mais lucro. Mais negócio.",
} as const;

/** TODO(cliente): número real do WhatsApp comercial. */
const WHATSAPP_TELEFONE = "";

const MENSAGEM_PADRAO =
  "Olá! Vim pelo site e quero saber mais sobre a maquininha Quadri.";

/**
 * Enquanto o número não chega, o CTA cai no e-mail em vez de apontar para um
 * link wa.me quebrado.
 */
export function linkContato(mensagem: string = MENSAGEM_PADRAO): string {
  return WHATSAPP_TELEFONE
    ? `https://wa.me/${WHATSAPP_TELEFONE}?text=${encodeURIComponent(mensagem)}`
    : `mailto:${empresa.email}?subject=${encodeURIComponent("Quero minha maquininha")}&body=${encodeURIComponent(mensagem)}`;
}

export const temWhatsApp = WHATSAPP_TELEFONE !== "";

/* ------------------------------------------------------------------ taxas */

export type Taxa = {
  id: "pix" | "debito" | "credito1x" | "credito12x";
  rotulo: string;
  rotuloCurto: string;
  /** Percentual descontado da venda. */
  percentual: number;
  /** Quando o dinheiro cai. */
  prazo: string;
  /** Número de parcelas em que o cliente final paga. */
  parcelas: number;
};

export const taxas: Taxa[] = [
  {
    id: "pix",
    rotulo: "Pix",
    rotuloCurto: "Pix",
    percentual: 0,
    prazo: "na hora",
    parcelas: 1,
  },
  {
    id: "debito",
    rotulo: "Débito",
    rotuloCurto: "Débito",
    percentual: 0.75,
    prazo: "em 1 dia útil",
    parcelas: 1,
  },
  {
    id: "credito1x",
    rotulo: "Crédito à vista",
    rotuloCurto: "Crédito 1x",
    percentual: 2.69,
    prazo: "em 1 dia útil",
    parcelas: 1,
  },
  {
    id: "credito12x",
    rotulo: "Crédito parcelado em 12x",
    rotuloCurto: "Crédito 12x",
    percentual: 8.99,
    prazo: "em 1 dia útil",
    parcelas: 12,
  },
];

export const produto = {
  nome: "Maquininha Quadri",
  precoDe: "12x de R$ 79,90",
  precoPor: "12x de R$ 16,58",
  precoAVista: "R$ 199",
  imagem: `${IMG}/hero-pagamentos.webp`,
  alt: "Maquininha Quadri ao centro, um cliente pagando por aproximação com o celular de um lado e com cartão de crédito do outro",
  /* A mesma cena montada em retrato, para telas estreitas. */
  imagemMobile: `${IMG}/hero-pagamentos-mobile.webp`,
  /* Recorte do aparelho sozinho, disponível para outros usos. */
  imagemSozinho: `${IMG}/maquininha.webp`,
  altSozinho:
    "Maquininha Quadri azul, com impressora de bobina e tela mostrando o logo useQuadri",
};

export const formasDeReceber: { titulo: string; texto: string; icone: NomeIcone }[] = [
  {
    titulo: "Maquininha",
    texto:
      "Cartão, aproximação e chip. Funciona com 4G e Wi-Fi, com bateria que aguenta o dia inteiro.",
    icone: "maquininha",
  },
  {
    titulo: "Tap no celular",
    texto:
      "O próprio celular vira maquininha. O cliente aproxima o cartão na tela e pronto.",
    icone: "tap",
  },
  {
    titulo: "Link de pagamento",
    texto:
      "Manda o link por WhatsApp e recebe de quem está longe, sem maquininha nenhuma.",
    icone: "link",
  },
  {
    titulo: "Pix",
    texto: "Zero de taxa, cai na hora, direto na sua conta digital Quadri.",
    icone: "pix",
  },
];

/**
 * Cenas de ambiente. As duas primeiras têm gente e abrem a seção em destaque;
 * as oito seguintes cobrem os segmentos.
 *
 * TODO(cliente): todas geradas por IA. Ver PENDENTE.md.
 */
export const cenasDestaque = [
  {
    imagem: `${IMG}/pessoas-atendimento.webp`,
    alt: "Lojista de avental estende a maquininha Quadri sobre o balcão para uma cliente aproximar o cartão",
    legenda: "No balcão, na mão de quem atende",
  },
  {
    imagem: `${IMG}/pessoas-balcao.webp`,
    alt: "Cliente paga por aproximação com o celular na maquininha Quadri segurada pelo lojista",
    legenda: "Pagamento por aproximação, em segundos",
  },
];

export const cenas = [
  {
    imagem: `${IMG}/vertical-salao.webp`,
    alt: "Maquininha Quadri na bancada de madeira de uma barbearia, com cadeira de barbeiro ao fundo",
    legenda: "Barbearias e salões",
  },
  {
    imagem: `${IMG}/vertical-farmacia.webp`,
    alt: "Maquininha Quadri no balcão claro de uma farmácia de bairro",
    legenda: "Farmácias e drogarias",
  },
  {
    imagem: `${IMG}/vertical-padaria.webp`,
    alt: "Maquininha Quadri no balcão de mármore de uma padaria, com cestos de pão ao fundo",
    legenda: "Padarias e confeitarias",
  },
  {
    imagem: `${IMG}/vertical-mercearia.webp`,
    alt: "Maquininha Quadri no balcão de uma mercearia, ao lado de caixas de frutas",
    legenda: "Mercearias e hortifrútis",
  },
  {
    imagem: `${IMG}/vertical-roupas.webp`,
    alt: "Maquininha Quadri no balcão de caixa de uma loja de roupas, com araras ao fundo",
    legenda: "Roupas e calçados",
  },
  {
    imagem: `${IMG}/vertical-petshop.webp`,
    alt: "Maquininha Quadri no balcão de um pet shop, com prateleiras de ração ao fundo",
    legenda: "Pet shops",
  },
  {
    imagem: `${IMG}/vertical-oficina.webp`,
    alt: "Maquininha Quadri na bancada de uma oficina mecânica, com carro e ferramentas ao fundo",
    legenda: "Oficinas e autopeças",
  },
  {
    imagem: `${IMG}/vertical-foodtruck.webp`,
    alt: "Maquininha Quadri no balcão de aço de um food truck à noite, com luzes ao fundo",
    legenda: "Delivery e food trucks",
  },
];

/** Recortes de produto para os blocos que hoje são só texto. */
export const produtoAngulos = {
  comprovante: {
    imagem: `${IMG}/produto-comprovante.webp`,
    alt: "Maquininha Quadri imprimindo um comprovante de papel",
  },
  tras: {
    imagem: `${IMG}/produto-tras.webp`,
    alt: "Maquininha Quadri vista de três quartos, mostrando a lateral e a tampa da impressora",
  },
  deitada: {
    imagem: `${IMG}/produto-deitada.webp`,
    alt: "Maquininha Quadri deitada, vista de cima em ângulo",
  },
  aberta: {
    imagem: `${IMG}/produto-aberta.webp`,
    alt: "Maquininha Quadri com a tampa aberta, mostrando a bobina de papel encaixada",
  },
} as const;

export const pilares = [
  {
    titulo: "Taxa que cabe no seu negócio",
    texto:
      "Débito, à vista, parcelado: tudo pensado para você vender mais e perder menos. Sem mensalidade e sem taxa de adesão.",
    itens: ["Sem aluguel da maquininha", "Sem fidelidade obrigatória"],
  },
  {
    titulo: "Receba quando quiser",
    texto:
      "Antecipação de recebíveis com condições especiais. Você vende hoje e pode ter o dinheiro na hora, em 30 dias ou no seu fluxo — você decide.",
    itens: ["Painel gestor de vendas e recebíveis", "Conta digital inclusa"],
    angulo: "tras" as const,
  },
  {
    titulo: "Gente de verdade atendendo",
    texto:
      "Atendimento ágil, sem robôs e sem fila de espera. Porque quando você precisa de ajuda, não dá para esperar.",
    itens: ["Aprovação em poucos minutos", "Sem papelada interminável"],
    angulo: "deitada" as const,
  },
];

export const passos = [
  {
    titulo: "Fale com um consultor",
    texto:
      "Entre em contato pelo WhatsApp ou preencha o formulário. Nosso time responde na hora.",
  },
  {
    titulo: "Escolha seu plano",
    texto:
      "Apresentamos as melhores condições para o perfil do seu negócio, sem enrolação.",
  },
  {
    titulo: "Receba sua maquininha",
    texto:
      "Aprovação rápida e entrega ágil. Você começa a vender em pouco tempo.",
  },
  {
    titulo: "Venda mais, pague menos",
    texto:
      "Acompanhe seus recebimentos, gerencie suas vendas e sinta a diferença no caixa todo mês.",
  },
];

/** Fundo da faixa de prova. Foto real do balcão, fornecida pelo cliente. */
export const provaFundo = {
  imagem: `${IMG}/forma-maquininha.webp`,
  alt: "Maquininha Quadri sobre o balcão de mármore de uma cafeteria",
};

/** TODO(cliente): confirmar se os números seguem atualizados antes de publicar. */
export const numeros = [
  { valor: "+2.500", rotulo: "estabelecimentos atendidos" },
  { valor: "R$ 125 Mi", rotulo: "processados por mês" },
  { valor: "98%", rotulo: "de satisfação dos clientes" },
  { valor: "100%", rotulo: "do Brasil atendido" },
];

/** TODO(cliente): depoimentos sem identificação verificável. Confirmar ou marcar como ilustrativos. */
export const depoimentos = [
  {
    texto:
      "Troquei minha maquininha antiga pela Quadri e no primeiro mês já economizei mais de R$ 800 em taxas. Não tem como não indicar.",
    autor: "Carlos R.",
    papel: "Dono de restaurante",
    cidade: "São Paulo/SP",
  },
  {
    texto:
      "O atendimento foi rápido e sem enrolação. Em dois dias já estava com a maquininha na mão e vendendo. Melhor decisão para o meu salão.",
    autor: "Fernanda M.",
    papel: "Salão de beleza",
    cidade: "Belo Horizonte/MG",
  },
  {
    texto:
      "Trabalho com alto volume de vendas e as taxas fazem toda a diferença. Com a Quadri, meu lucro aumentou sem eu precisar vender mais.",
    autor: "Roberto A.",
    papel: "Supermercadista",
    cidade: "Curitiba/PR",
  },
];

export const segmentos = [
  "Restaurantes e lanchonetes",
  "Salões e barbearias",
  "Farmácias e drogarias",
  "Roupas e calçados",
  "Supermercados e mercearias",
  "Prestadores de serviços",
  "Postos de combustível",
  "Escolas",
  "Escritórios de advocacia",
  "Clínicas e consultórios",
  "Delivery e food trucks",
];

/**
 * As cinco perguntas vêm do site atual. As respostas não existiam no HTML
 * publicado — as abaixo são provisórias, escritas a partir do que o próprio
 * site já afirma, e precisam de validação.
 * TODO(cliente): revisar e aprovar cada resposta.
 */
export const faq = [
  {
    pergunta: "Preciso ter CNPJ para contratar?",
    resposta:
      "Não. Atendemos CNPJ e também quem ainda trabalha como pessoa física. O consultor confirma as condições do seu caso no primeiro contato.",
  },
  {
    pergunta: "Quando recebo o dinheiro das minhas vendas?",
    resposta:
      "Pix cai na hora. Débito e crédito caem em 1 dia útil, já com a antecipação inclusa. Se preferir receber em 30 dias ou seguir o fluxo padrão, dá para escolher.",
  },
  {
    pergunta: "A maquininha funciona sem internet?",
    resposta:
      "A maquininha usa chip 4G e Wi-Fi. Com o chip, ela funciona em qualquer lugar com sinal de celular, sem depender da internet do seu estabelecimento.",
  },
  {
    pergunta: "E se a maquininha apresentar problema?",
    resposta:
      "Você fala com uma pessoa do suporte, sem robô e sem fila. Se for defeito do equipamento, a troca é feita sem custo.",
  },
  {
    pergunta: "Posso cancelar quando quiser?",
    resposta:
      "Pode. Não trabalhamos com fidelidade obrigatória, nem com multa por cancelamento.",
  },
];

export const garantias = [
  "Sem mensalidade",
  "Sem taxa de adesão",
  "Sem fidelidade obrigatória",
  "Entrega rápida",
  "Suporte humanizado",
];

export const quemSomos = {
  texto:
    "A useQuadri nasceu em 2021 para deixar os pagamentos mais simples e mais baratos. Atuamos em todo o Brasil, com taxas competitivas, equipamentos de alta performance e um atendimento consultivo — porque a melhor tecnologia é a que faz o negócio do cliente crescer.",
  marcadores: [
    { valor: "2021", rotulo: "ano de fundação" },
    { valor: "Brasil", rotulo: "atuação nacional" },
    { valor: "Humanizado", rotulo: "atendimento consultivo" },
  ],
};

export const navegacao = [
  { href: "#inicio", rotulo: "Início" },
  { href: "#solucoes", rotulo: "Soluções" },
  { href: "#calculadora", rotulo: "Taxas" },
  { href: "#como-funciona", rotulo: "Como funciona" },
  { href: "#faq", rotulo: "Dúvidas" },
  { href: "#quem-somos", rotulo: "Quem somos" },
];

export const politicas = [
  { href: "/politica-de-privacidade", rotulo: "Política de Privacidade (LGPD)" },
  { href: "/politica-de-cookies", rotulo: "Política de Cookies" },
  { href: "/termos-de-uso", rotulo: "Termos de Uso" },
];
