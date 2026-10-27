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
    description: 'Frango desfiado, carne moída, almôndegas e iscas.',
    iconName: 'Flame'
  },
  {
    id: 'cap-2',
    number: 'Cap. II',
    title: 'Peixes & Opções Leves',
    recipesCount: 38,
    description: 'Tilápia, merluza e peixes populares que não soltam água.',
    iconName: 'Fish'
  },
  {
    id: 'cap-3',
    number: 'Cap. III',
    title: 'Acompanhamentos & Legumes Nutritivos',
    recipesCount: 58,
    description: 'Purês aveludados, arroz soltinho e legumes no ponto.',
    iconName: 'Leaf'
  },
  {
    id: 'cap-4',
    number: 'Cap. IV',
    title: 'Lanches & Salgados Práticos',
    recipesCount: 42,
    description: 'Tortas de liquidificador e salgados fit.',
    iconName: 'Sandwich'
  },
  {
    id: 'cap-5',
    number: 'Cap. V',
    title: 'Molhos, Temperos & Bases Coringa',
    recipesCount: 34,
    description: 'Molhos caseiros e cubos de tempero natural.',
    iconName: 'Sparkles'
  },
  {
    id: 'cap-6',
    number: 'Cap. VI',
    title: 'Sobremesas & Doces Fit Sem Culpa',
    recipesCount: 32,
    description: 'Doces saudáveis sem açúcar refinado.',
    iconName: 'Heart'
  }
];

export const FEATURED_RECIPES: FeaturedRecipe[] = [
  {
    id: 'escondidinho-frango',
    category: 'Proteína / Almoço Rápido',
    name: 'Escondidinho Fit de Frango Cremoso com Batata',
    description: 'Peito de frango desfiado temperado com purê leve e requeijão fit.',
    prepTime: '20 min',
    freezerDays: 60,
    calories: 310,
    protein: 35,
    carbs: 28,
    fat: 7,
    tag: 'Almoço Rápido',
    secretTip: 'O purê sela o frango, mantendo a suculência após o micro-ondas.'
  },
  {
    id: 'iscas-peixe-airfryer',
    category: 'Opção Leve / Peixe Barato',
    name: 'Iscas de Peixe Crocantes na Airfryer',
    description: 'Filé de peixe branco empanado na farinha de aveia temperada.',
    prepTime: '15 min',
    freezerDays: 45,
    calories: 240,
    protein: 32,
    carbs: 12,
    fat: 6,
    tag: 'Crocante na Airfryer',
    secretTip: 'A crosta de aveia impede que o peixe solte água no congelador, voltando a ficar crocante na Airfryer em 4 min.'
  },
  {
    id: 'torta-salgada-liquidificador',
    category: 'Lanche / Jantar Rápido',
    name: 'Torta Salgada de Liquidificador com Legumes',
    description: 'Prática, fofinha e porcionada para salvar os dias em que você chega cansada.',
    prepTime: '15 min',
    freezerDays: 30,
    calories: 195,
    protein: 14,
    carbs: 16,
    fat: 8,
    tag: 'Jantar Rápido',
    secretTip: 'Porcionada individualmente para aquecer direto no pote sem murchar.'
  }
];
