export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Como e quando recebo o material após o pagamento?',
    answer: 'O envio é imediato e 100% digital! Assim que seu pagamento for confirmado (no PIX a liberação ocorre em menos de 15 segundos), você receberá os dados de acesso diretamente no seu e-mail e no seu número de WhatsApp. Você poderá baixar o e-book em PDF no celular, tablet ou computador para consultar quando e onde quiser, inclusive sem conexão de internet.'
  },
  {
    id: 'faq-2',
    question: 'A comida congelada não fica empapada, aguada ou sem gosto?',
    answer: 'Essa é a maior dor de quem tenta congelar sem método! A comida tradicional fica ruim porque congela quente (criando cristais de gelo que rasgam os alimentos) e é temperada de forma errada. No nosso método você aprende a técnica da Selagem Nutritiva e do Ponto Al Dente de Congelamento: a comida vai ao freezer já protegida por uma camada natural que preserva a textura e o aroma. Ao reaquecer por 3 a 5 minutos, ela fica com gosto, cheiro e vapor de comida que acabou de sair da panela!'
  },
  {
    id: 'faq-3',
    question: 'Preciso comprar potes de vidro caros ou seladora a vácuo?',
    answer: 'Definitivamente não! O livro foi planejado para a realidade de qualquer cozinha brasileira. Você pode utilizar potes plásticos comuns livres de BPA que já possui em casa ou sacos plásticos herméticos tipo zip-lock que custam centavos no supermercado. No Bônus 3 nós ensinamos truques simples para tirar todo o ar das embalagens com um canudinho ou tigela de água, dispensando qualquer equipamento caro.'
  },
  {
    id: 'faq-4',
    question: 'Serve para quem mora sozinho ou também para famílias com crianças?',
    answer: 'Serve com perfeição para os dois casos! Para quem mora sozinho, o acervo resolve o problema clássico de cozinhar panela cheia e ter que jogar comida fora dias depois. Para famílias, todas as receitas trazem tabelas de rendimento e proporções para multiplicar facilmente as receitas em lotes familiares.'
  },
  {
    id: 'faq-5',
    question: 'Como funciona a Garantia Blindada de 30 Dias?',
    answer: 'Acreditamos tanto na qualidade gastronômica e na praticidade das receitas que assumimos todo o risco por você. Você tem 30 dias completos para baixar o livro, escolher suas receitas favoritas, congelar e experimentar na sua própria casa. Se não gostar do sabor, se achar complicado ou se por qualquer motivo não ficar 100% satisfeito, basta enviar um único e-mail ou mensagem no WhatsApp do nosso suporte e estornamos 100% do seu dinheiro, sem perguntas e sem ressentimentos.'
  },
  {
    id: 'faq-6',
    question: 'Quais são as formas de pagamento disponíveis?',
    answer: 'Você pode pagar via PIX (com aprovação imediata) ou Cartão de Crédito com parcelamento facilitado em até 3x. O processo é intermediado por uma das maiores plataformas seguras de pagamentos da América Latina, com criptografia bancária SSL de 256 bits.'
  }
];
