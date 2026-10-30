export interface Testimonial {
  id: string;
  name: string;
  age: number;
  city: string;
  state: string;
  angle: string;
  timeAgo: string;
  badgeText: string;
  badgeType: 'weight' | 'money' | 'family' | 'routine';
  avatarUrl: string;
  resultImage: string;
  photoCaption: string;
  content: string;
  likes: number;
  highlightText: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'camila-rocha',
    name: 'Camila Rocha',
    age: 29,
    city: 'Curitiba',
    state: 'PR',
    angle: 'Lanche no Trabalho',
    timeAgo: 'Hoje às 16:20 · Story',
    badgeText: 'MENOS 7 KG',
    badgeType: 'weight',
    avatarUrl: '/images/selfie_helena_ugc.webp',
    resultImage: '/images/depoimento_camila_wrap.jpg',
    photoCaption: 'Wrap quentinho com queijo derretido na mesa do escritório',
    highlightText: 'Trocou o salgado da rua pelo wrap fit no trabalho.',
    content: 'Eu gastava uma fortuna pedindo salgado na rua toda tarde e vivia inchada. Comecei a levar os wraps proteicos do acervo: levo congelado, boto 2 minutos no forninho da copa da empresa e fica com a casquinha crocante e queijo derretido. Já perdi 7kg só trocando o lanche da tarde!',
    likes: 54
  },
  {
    id: 'lucas-mendes',
    name: 'Lucas Mendes',
    age: 34,
    city: 'Florianópolis',
    state: 'SC',
    angle: 'Emagrecimento Sem Sofrer',
    timeAgo: 'Ontem às 20:15 · Direct',
    badgeText: 'MENOS 9 KG',
    badgeType: 'weight',
    avatarUrl: '/images/selfie_carlos_ugc.webp',
    resultImage: '/images/depoimento_lucas_escondidinho.jpg',
    photoCaption: 'Escondidinho fit gratinado com queijo puxando no garfo',
    highlightText: 'Comida de verdade sem marmita aguada.',
    content: 'Homem sozinho morando longe da família sempre cai no miojo ou delivery. O acervo me salvou: faço o escondidinho e as iscas no domingo em potes normais. A comida tem gosto de almoço de vó, nada daquela coisa de marmita aguada. Já foram 9kg embora comendo comida de verdade!',
    likes: 78
  },
  {
    id: 'patricia-souza',
    name: 'Patrícia Souza',
    age: 42,
    city: 'São Paulo',
    state: 'SP',
    angle: 'Mães Ocupadas / Casa Cheia',
    timeAgo: 'Há 2 dias · WhatsApp',
    badgeText: 'SALVOU A ROTINA DA FAMÍLIA',
    badgeType: 'family',
    avatarUrl: '/images/selfie_juliana_ugc.webp',
    resultImage: '/images/depoimento_patricia_tortinhas.jpg',
    photoCaption: 'Tortinhas de frango fit douradas no prato de vidro',
    highlightText: 'Os filhos amam e tem garantia de comida saudável.',
    content: 'Com dois filhos e trabalhando 8h por dia, chegava em casa esgotada e acabava apelando pra pizza. As tortinhas de liquidificador e as carnes coringa do acervo salvaram minhas noites. As crianças amam porque tem cara de salgado gostoso e eu fico em paz sabendo que é comida saudável.',
    likes: 63
  },
  {
    id: 'rafael-dias',
    name: 'Rafael Dias',
    age: 31,
    city: 'Belo Horizonte',
    state: 'MG',
    angle: 'Economia Financeira & Rotina Prática',
    timeAgo: 'Há 3 dias · Grupo de Alunos',
    badgeText: 'ECONOMIZOU R$ 740/MÊS',
    badgeType: 'money',
    avatarUrl: '/images/selfie_roberto_ugc.webp',
    resultImage: '/images/depoimento_rafael_freezer.jpg',
    photoCaption: 'Gaveta do freezer com potes e lanches etiquetados com fita crepe',
    highlightText: 'Mais de R$ 740 economizados sem pedir almoço no app.',
    content: 'Fiz as contas no final do mês passado e economizei mais de R$ 740 só de parar de pedir almoço no aplicativo durante a semana. As receitas usam só ingrediente barato da feira e duram semanas no freezer com gosto de frescas.',
    likes: 92
  }
];
