export interface Testimonial {
  id: string;
  name: string;
  age: number;
  city: string;
  state: string;
  timeAgo: string;
  badgeText: string;
  badgeType: 'weight' | 'money' | 'time' | 'health';
  avatarUrl: string;
  resultImage?: string;
  content: string;
  likes: number;
  highlightText: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'helena-nascimento',
    name: 'Helena Nascimento',
    age: 33,
    city: 'Montenegro',
    state: 'RS',
    timeAgo: 'Hoje faz 4 semanas e 2 dias',
    badgeText: 'MENOS 7 KG',
    badgeType: 'weight',
    avatarUrl: '/images/selfie_helena_ugc.webp',
    resultImage: '/images/marmitas_caseiras_1.webp',
    highlightText: 'Valeu a pena cada centavo. Recomendo!',
    content: 'Hoje faz 4 semanas que comecei a congelar tudo no domingo usando potes comuns com fita crepe. Já eliminei 7 quilos sem passar fome! Eu não tinha paciência para cozinhar todo dia e vivia no delivery. Valeu a pena cada centavo, se funcionou comigo que não sabia cozinhar nada, funciona com qualquer um.',
    likes: 47
  },
  {
    id: 'bruna-avila',
    name: 'Bruna Ávila',
    age: 29,
    city: 'Campinas',
    state: 'SP',
    timeAgo: 'Há 2 semanas',
    badgeText: 'MENOS 9 KG',
    badgeType: 'weight',
    avatarUrl: '/images/selfie_bruna_ugc.webp',
    resultImage: '/images/marmitas_caseiras_2.webp',
    highlightText: 'Recuperei minha autoestima e roupas que não entravam.',
    content: 'Olha a foto das minhas marmitas da semana prontas na mesa! Minha maior preocupação era a comida ficar aguada, mas a carne moída e o frango desfiado ficam suculentos e os legumes crocantes. Em 2 meses foram 9 quilos a menos só por ter almoço e janta saudáveis garantidos.',
    likes: 62
  },
  {
    id: 'carlos-eduardo',
    name: 'Carlos Eduardo',
    age: 31,
    city: 'Curitiba',
    state: 'PR',
    timeAgo: 'Ontem às 19:42',
    badgeText: 'ECONOMIZOU R$ 740/MÊS',
    badgeType: 'money',
    avatarUrl: '/images/selfie_carlos_ugc.webp',
    resultImage: '/images/marmitas_caseiras_3.webp',
    highlightText: 'Freezer lotado e economia gigante no fim do mês.',
    content: 'Tirei essa foto do meu congelador hoje: 25 marmitas caseiras etiquetadas! Eu gastava quase R$ 900 por mês pedindo refeições na rua só para bater a proteína da academia. Agora tiro 2 horas na tarde de domingo e tenho comida pra semana inteira com sabor de feita na hora.',
    likes: 89
  },
  {
    id: 'iara-henrique',
    name: 'Iara Henrique',
    age: 36,
    city: 'Goiânia',
    state: 'GO',
    timeAgo: '15 de setembro',
    badgeText: 'MENOS 11 KG',
    badgeType: 'weight',
    avatarUrl: '/images/selfie_iara_ugc.webp',
    resultImage: '/images/marmitas_caseiras_1.webp',
    highlightText: '11 quilos a menos e disposição renovada.',
    content: 'Olha esse meu resultado! Tem só 2 meses e meio fazendo as receitas congeladas em potes normais. Foram 11 quilos que se foram sem remédios, sem passar fome e sem ingredientes caros. O livro ensina a usar temperos simples e batata/frango que a gente já compra na feira.',
    likes: 54
  },
  {
    id: 'juliana-mendes',
    name: 'Juliana Mendes',
    age: 41,
    city: 'Belo Horizonte',
    state: 'MG',
    timeAgo: '3 dias atrás',
    badgeText: 'MÃE DE 2 FILHOS',
    badgeType: 'time',
    avatarUrl: '/images/selfie_juliana_ugc.webp',
    resultImage: '/images/marmitas_caseiras_2.webp',
    highlightText: 'Meus filhos comem legumes sem reclamar!',
    content: 'Tenho dois filhos pequenos e trabalho fora. Meu desespero diário era chegar em casa cansada, abrir a geladeira vazia e apelar para miojo ou comida congelada industrial. A técnica do escondidinho e dos legumes rústicos mudou tudo aqui em casa. Eles comem tudo e acham que fiz na hora!',
    likes: 38
  },
  {
    id: 'roberto-andrade',
    name: 'Roberto Andrade',
    age: 48,
    city: 'Rio de Janeiro',
    state: 'RJ',
    timeAgo: '1 semana atrás',
    badgeText: 'GLICEMIA REGULADA',
    badgeType: 'health',
    avatarUrl: '/images/selfie_roberto_ugc.webp',
    resultImage: '/images/marmitas_caseiras_3.webp',
    highlightText: 'Exames de sangue normalizados pelo médico.',
    content: 'Recebi diagnóstico de pré-diabetes e precisava mudar urgente. Ter as marmitas congeladas prontas para a semana inteira não me deixa cair na tentação de comer salgados na rua. Em 3 meses reduzi a glicemia e perdi barriga com comida caseira simples.',
    likes: 41
  }
];
