export interface FeaturedRecipe {
  id: string;
  category: string;
  name: string;
  description: string;
  prepTime: string;
  freezerDays: number;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  tag: string;
  secretTip: string;
  imageUrl?: string;
}

export interface ChapterSummary {
  id: string;
  number: string;
  title: string;
  recipesCount: number;
  description: string;
  iconName: string;
}

export const CHAPTER_SUMMARIES: ChapterSummary[] = [
  {
    id: 'cap-1',
    number: 'Cap. I',
    title: 'Carnes & Frangos Proteicos',
    recipesCount: 52,
    description: 'Desfiados suculentos, iscas e almôndegas que não ressecam.',
    iconName: 'Flame'
  },
  {
    id: 'cap-2',
    number: 'Cap. II',
    title: 'Peixes & Opções Leves',
    recipesCount: 38,
    description: 'Tilápia e peixes populares preparados sem soltar água.',
    iconName: 'Fish'
  },
  {
    id: 'cap-3',
    number: 'Cap. III',
    title: 'Acompanhamentos & Legumes',
    recipesCount: 58,
    description: 'Purês aveludados e legumes no ponto certo.',
    iconName: 'Leaf'
  },
  {
    id: 'cap-4',
    number: 'Cap. IV',
    title: 'Lanches & Salgados Práticos',
    recipesCount: 42,
    description: 'Wraps, tortinhas de liquidificador e lanches rápidos.',
    iconName: 'Sandwich'
  },
  {
    id: 'cap-5',
    number: 'Cap. V',
    title: 'Molhos & Temperos Coringa',
    recipesCount: 34,
    description: 'Bases naturais para dar sabor instantâneo.',
    iconName: 'Sparkles'
  },
  {
    id: 'cap-6',
    number: 'Cap. VI',
    title: 'Sobremesas & Doces Fit Sem Culpa',
    recipesCount: 32,
    description: 'Doces saudáveis para matar a vontade sem sair da dieta.',
    iconName: 'Heart'
  }
];

export const FEATURED_RECIPES: FeaturedRecipe[] = [
  {
    id: 'wrap-proteico-frango',
    category: 'Lanche Prático / Jantar Rápido',
    name: 'Wrap Proteico de Frango Cremoso com Queijo',
    description: 'Massa leve recheada com peito de frango temperado na ponta da faca e queijo derretido de dar água na boca.',
    prepTime: '10 min',
    freezerDays: 30,
    calories: 260,
    protein: 28,
    carbs: 18,
    fat: 7,
    tag: 'Queijo Derretido & Crocante',
    secretTip: 'Embalado individualmente, vai direto do freezer para a frigideira ou airfryer em 3 minutos mantendo a casquinha crocante e o queijo puxando.',
    imageUrl: '/images/ugc_wrap_frango.jpg'
  },
  {
    id: 'tortinha-individual-frango',
    category: 'Lanche da Tarde / Porção Individual',
    name: 'Tortinha Individual de Frango de Liquidificador',
    description: 'Massa fofinha batida em minutos com recheio cremoso e úmido de frango e milho. Perfeita para lanche da tarde ou jantar rápido.',
    prepTime: '15 min',
    freezerDays: 45,
    calories: 210,
    protein: 19,
    carbs: 14,
    fat: 8,
    tag: 'Massa Fofinha & Úmida',
    secretTip: 'Congelada já assada em forminhas comuns. Reaquece no micro-ondas ou airfryer sem ressecar a massa.',
    imageUrl: '/images/ugc_tortinha_frango.jpg'
  },
  {
    id: 'escondidinho-fit-frango',
    category: 'Almoço & Jantar / Confort Food Fit',
    name: 'Escondidinho Fit de Frango com Batata',
    description: 'Purê cremoso de batata com recheio bem temperado de frango e cobertura de queijo gratinado dourado.',
    prepTime: '20 min',
    freezerDays: 60,
    calories: 310,
    protein: 35,
    carbs: 28,
    fat: 7,
    tag: 'Gratinado Dourado',
    secretTip: 'Técnica de cozimento com selagem que impede o purê de acumular água ou perder a consistência aveludada ao descongelar.',
    imageUrl: '/images/ugc_escondidinho_suculento.jpg'
  }
];
