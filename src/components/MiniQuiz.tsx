import React, { useState } from 'react';
import { User, Activity, Target, Flame, Check, ArrowRight, RotateCcw, Sparkles, TrendingUp, DollarSign, Clock, ShieldCheck, ChevronRight } from 'lucide-react';

interface MiniQuizProps {
  onCtaClick: () => void;
}

export const MiniQuiz: React.FC<MiniQuizProps> = ({ onCtaClick }) => {
  const [step, setStep] = useState<number>(1);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);
  const [progressMsg, setProgressMsg] = useState<string>('Processando dados biométricos...');

  // State values
  const [gender, setGender] = useState<'mulher' | 'homem'>('mulher');
  const [age, setAge] = useState<number>(32);
  const [weight, setWeight] = useState<number>(68);
  const [height, setHeight] = useState<number>(165);
  const [goal, setGoal] = useState<string>('emagrecer');
  const [challenge, setChallenge] = useState<string>('tempo');

  // Calculation values
  const handleCalculate = () => {
    setIsCalculating(true);
    setProgressMsg('Calculando sua Taxa Metabólica Basal (TMB)...');

    setTimeout(() => {
      setProgressMsg('Analisando déficit calórico e distribuição de proteínas...');
    }, 1000);

    setTimeout(() => {
      setProgressMsg('Filtrando as melhores receitas de congelamento para seu objetivo...');
    }, 2000);

    setTimeout(() => {
      setIsCalculating(false);
      setStep(4);
    }, 3000);
  };

  // Basal Metabolic Rate (Harris-Benedict formula)
  const calculateBMR = () => {
    let bmr = 0;
    if (gender === 'homem') {
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    const tdee = Math.round(bmr * 1.35);

    if (goal === 'emagrecer') {
      return {
        dailyCalories: tdee - 450,
        proteinGrams: Math.round(weight * 1.8),
        weeklySavedHours: 7,
        monthlySavings: 'R$ 720,00',
        comboName: 'Protocolo Seca-Gordura Freezer Fit',
        recommendedChapters: ['Cap. I: Carnes & Frangos Proteicos', 'Cap. III: Acompanhamentos Nutritivos & Veggies', 'Cap. VI: Sobremesas Fit Sem Açúcar']
      };
    } else if (goal === 'hipertrofia') {
      return {
        dailyCalories: tdee + 350,
        proteinGrams: Math.round(weight * 2.2),
        weeklySavedHours: 6,
        monthlySavings: 'R$ 850,00',
        comboName: 'Protocolo Hipertrofia & Densidade Muscular',
        recommendedChapters: ['Cap. I: Carnes & Frangos Proteicos', 'Cap. II: Peixes & Frutos do Mar', 'Cap. IV: Lanches & Salgados Práticos']
      };
    } else if (goal === 'familia') {
      return {
        dailyCalories: Math.round(tdee),
        proteinGrams: Math.round(weight * 1.5),
        weeklySavedHours: 10,
        monthlySavings: 'R$ 1.100,00',
        comboName: 'Plano Familiar Nutritivo & Prático',
        recommendedChapters: ['Cap. III: Acompanhamentos Veggies', 'Cap. IV: Lanches e Salgados', 'Cap. V: Molhos e Bases Coringa']
      };
    } else {
      return {
        dailyCalories: Math.round(tdee),
        proteinGrams: Math.round(weight * 1.6),
        weeklySavedHours: 8,
        monthlySavings: 'R$ 650,00',
        comboName: 'Plano Marmita Inteligente Express (2 Horas)',
        recommendedChapters: ['Cap. I: Carnes & Frangos', 'Cap. IV: Lanches & Snacks', 'Cap. V: Molhos Concentrados']
      };
    }
  };

  const results = calculateBMR();

  return (
    <section id="quiz" className="py-12 sm:py-20 bg-neutral-100 border-b border-emerald-100 relative font-poppins">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-12">
          <span className="text-xs sm:text-sm font-montserrat font-bold text-emerald-700 bg-emerald-100 px-3.5 py-1 rounded-full uppercase tracking-wider inline-block mb-2">
            Diagnóstico Gratuito Opcional
          </span>
          <h2 className="font-montserrat text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight uppercase">
            Faça o seu cardápio ideal, menos de 1 min
          </h2>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-slate-600 font-medium">
            Responda 3 perguntas rápidas para calcular sua necessidade diária de calorias e ver as receitas ideais do acervo de +250 para você.
          </p>
        </div>

        {/* Main Quiz Box */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
          {/* Top Progress Bar */}
          <div className="bg-slate-50 border-b border-slate-200 p-3.5 sm:p-5 sm:px-8 flex items-center justify-between text-xs sm:text-sm font-montserrat font-bold text-slate-600">
            <span>Passo {step <= 3 ? step : 3} de 3</span>
            <div className="flex-1 max-w-xs mx-3 sm:mx-4 bg-slate-200 h-2 sm:h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-emerald-500 h-full transition-all duration-500"
                style={{ width: `${(Math.min(step, 3) / 3) * 100}%` }}
              ></div>
            </div>
            <span className="text-emerald-700 font-extrabold">{step === 4 ? '100%' : `${Math.round((step / 3) * 100)}%`}</span>
          </div>

          <div className="p-4 sm:p-8 md:p-10">
            {/* Loading / Calculation Screen */}
            {isCalculating && (
              <div className="py-10 sm:py-16 flex flex-col items-center text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin mb-5"></div>
                <h3 className="font-montserrat text-lg sm:text-2xl font-black text-slate-900 mb-2">
                  Gerando Seu Diagnóstico Personalizado...
                </h3>
                <p className="text-xs sm:text-base text-slate-600 max-w-md animate-pulse font-medium">
                  {progressMsg}
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Cruzando dados com o banco de +250 receitas congeláveis</span>
                </div>
              </div>
            )}

            {/* STEP 1: Biometric Data */}
            {!isCalculating && step === 1 && (
              <div className="space-y-5 sm:space-y-6">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="font-montserrat text-base sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                    <User className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>Passo 1: Seus Dados Biométricos</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Utilizamos estes números para calcular sua Taxa Metabólica Basal e gramas de proteína recomendadas.
                  </p>
                </div>

                {/* Sex Selection */}
                <div>
                  <label className="block text-xs sm:text-sm font-montserrat font-bold text-slate-700 mb-2">
                    Qual o seu sexo biológico?
                  </label>
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                    <button
                      type="button"
                      onClick={() => setGender('mulher')}
                      className={`min-h-[48px] p-3 rounded-xl border text-xs sm:text-sm font-montserrat font-bold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                        gender === 'mulher'
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-800 shadow-2xs'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <span>Feminino (Mulher)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setGender('homem')}
                      className={`min-h-[48px] p-3 rounded-xl border text-xs sm:text-sm font-montserrat font-bold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                        gender === 'homem'
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-800 shadow-2xs'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <span>Masculino (Homem)</span>
                    </button>
                  </div>
                </div>

                {/* Age, Weight, Height */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <label className="block text-xs font-montserrat font-bold text-slate-700 mb-1">
                      Idade: <span className="text-emerald-700 font-extrabold">{age} anos</span>
                    </label>
                    <input
                      type="range"
                      min={18}
                      max={75}
                      value={age}
                      onChange={(e) => setAge(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg accent-emerald-600 cursor-pointer"
                    />
                  </div>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <label className="block text-xs font-montserrat font-bold text-slate-700 mb-1">
                      Peso Atual: <span className="text-emerald-700 font-extrabold">{weight} kg</span>
                    </label>
                    <input
                      type="range"
                      min={45}
                      max={140}
                      value={weight}
                      onChange={(e) => setWeight(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg accent-emerald-600 cursor-pointer"
                    />
                  </div>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <label className="block text-xs font-montserrat font-bold text-slate-700 mb-1">
                      Altura: <span className="text-emerald-700 font-extrabold">{height} cm</span>
                    </label>
                    <input
                      type="range"
                      min={140}
                      max={205}
                      value={height}
                      onChange={(e) => setHeight(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg accent-emerald-600 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="pt-3 flex justify-end">
                  <button
                    onClick={() => setStep(2)}
                    className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-montserrat font-extrabold text-sm py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-md min-h-[48px]"
                  >
                    <span>Avançar para o Passo 2</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Main Goal */}
            {!isCalculating && step === 2 && (
              <div className="space-y-5 sm:space-y-6">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="font-montserrat text-base sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>Passo 2: Qual o Seu Objetivo Principal?</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    O acervo contém filtros específicos para calorias reduzidas, alto teor proteico ou cardápio familiar.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {[
                    { id: 'emagrecer', title: 'Emagrecer & Queimar Gordura', desc: 'Refeições volumosas de baixas calorias para manter saciedade prolongada sem passar fome.' },
                    { id: 'hipertrofia', title: 'Ganho de Massa Muscular', desc: 'Refeições hiperproteicas (35g a 45g de proteína) para acelerar a síntese muscular.' },
                    { id: 'tempo', title: 'Economizar Tempo & Marmita Prática', desc: 'Cozinhar tudo no domingo em 1h30 e nunca mais esquentar a cabeça com almoço na semana.' },
                    { id: 'familia', title: 'Alimentar a Família com Saúde', desc: 'Receitas saborosas e nutritivas que crianças e adultos adoram, reduzindo delivery.' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setGoal(item.id)}
                      className={`min-h-[56px] p-3.5 sm:p-4 rounded-xl border text-left cursor-pointer transition-all flex flex-col justify-between ${
                        goal === item.id
                          ? 'border-emerald-600 bg-emerald-50 shadow-2xs'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-montserrat font-extrabold text-xs sm:text-sm text-slate-900">{item.title}</span>
                        {goal === item.id && <Check className="w-4 h-4 text-emerald-600 shrink-0" />}
                      </div>
                      <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-poppins">{item.desc}</p>
                    </button>
                  ))}
                </div>

                <div className="pt-3 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setStep(1)}
                    className="text-slate-500 hover:text-slate-800 text-xs sm:text-sm font-semibold cursor-pointer min-h-[44px] flex items-center"
                  >
                    Voltar
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-montserrat font-extrabold text-sm py-3 px-6 rounded-xl flex items-center gap-2 cursor-pointer transition-colors shadow-md min-h-[48px]"
                  >
                    <span>Avançar para o Passo 3</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Cooking Routine & Biggest Challenge */}
            {!isCalculating && step === 3 && (
              <div className="space-y-5 sm:space-y-6">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="font-montserrat text-base sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>Passo 3: Qual é o Seu Maior Desafio na Cozinha?</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Identificamos o gargalo exato que faz você desistir da alimentação saudável na correria.
                  </p>
                </div>

                <div className="space-y-2.5 sm:space-y-3">
                  {[
                    { id: 'tempo', title: 'Falta de tempo e cansaço', desc: 'Chego do trabalho exausto(a) e a última coisa que quero é ficar 1 hora no fogão lavando panela.' },
                    { id: 'ifood', title: 'Gasto excessivo com delivery', desc: 'Gasto R$ 500 a R$ 1.000 por mês pedindo lanches e marmitas por falta de planejamento.' },
                    { id: 'sem_gosto', title: 'Minha comida congelada fica ruim', desc: 'Quando tentei congelar, a comida ficou aguada ou os legumes viraram papa.' },
                    { id: 'variedade', title: 'Enjoo fácil de comer sempre o mesmo', desc: 'Não aguento comer frango grelhado seco todo dia e acabo furando a dieta.' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setChallenge(item.id)}
                      className={`w-full min-h-[52px] p-3.5 sm:p-4 rounded-xl border text-left cursor-pointer transition-all flex items-start justify-between gap-3 ${
                        challenge === item.id
                          ? 'border-emerald-600 bg-emerald-50 shadow-2xs'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div>
                        <span className="font-montserrat font-extrabold text-xs sm:text-sm text-slate-900 block">{item.title}</span>
                        <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 font-poppins">{item.desc}</p>
                      </div>
                      {challenge === item.id && <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />}
                    </button>
                  ))}
                </div>

                <div className="pt-3 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setStep(2)}
                    className="text-slate-500 hover:text-slate-800 text-xs sm:text-sm font-semibold cursor-pointer min-h-[44px] flex items-center"
                  >
                    Voltar
                  </button>
                  <button
                    onClick={handleCalculate}
                    className="btn-cta-gold font-montserrat font-black text-xs sm:text-base text-neutral-950 py-3.5 px-5 sm:px-7 rounded-xl flex items-center gap-2 cursor-pointer shadow-lg min-h-[48px]"
                  >
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-950 shrink-0" />
                    <span>Calcular Diagnóstico Agora!</span>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: Dynamic Result Screen */}
            {!isCalculating && step === 4 && (
              <div className="space-y-5 sm:space-y-6">
                <div className="text-center pb-3 border-b border-slate-100">
                  <span className="text-[11px] font-montserrat font-black uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                    Resultado Biométrico Concluído
                  </span>
                  <h3 className="font-montserrat text-xl sm:text-3xl font-black text-slate-900 mt-2">
                    {results.comboName}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-1 font-poppins">
                    Com base no seu peso de {weight}kg e altura de {height}cm, você pode atingir seu objetivo sem passar fome e economizando tempo.
                  </p>
                </div>

                {/* 4 Metric Cards (2x2 on mobile, 4 in row on desktop) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-center">
                    <span className="text-[10px] sm:text-[11px] font-montserrat font-bold text-emerald-800 uppercase block">Meta Calórica</span>
                    <span className="text-xl sm:text-3xl font-montserrat font-black text-emerald-900 tabular-nums">
                      {results.dailyCalories}
                    </span>
                    <span className="text-[10px] text-emerald-700 font-semibold block">kcal / dia</span>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-center">
                    <span className="text-[10px] sm:text-[11px] font-montserrat font-bold text-blue-800 uppercase block">Proteína Diária</span>
                    <span className="text-xl sm:text-3xl font-montserrat font-black text-blue-900 tabular-nums">
                      {results.proteinGrams}g
                    </span>
                    <span className="text-[10px] text-blue-700 font-semibold block">por dia</span>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-center">
                    <span className="text-[10px] sm:text-[11px] font-montserrat font-bold text-amber-800 uppercase block">Tempo Livre</span>
                    <span className="text-xl sm:text-3xl font-montserrat font-black text-amber-900 tabular-nums">
                      ~{results.weeklySavedHours}h
                    </span>
                    <span className="text-[10px] text-amber-700 font-semibold block">por semana</span>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded-xl p-3 text-center">
                    <span className="text-[10px] sm:text-[11px] font-montserrat font-bold text-purple-800 uppercase block">Economia Média</span>
                    <span className="text-lg sm:text-2xl font-montserrat font-black text-purple-900 tabular-nums">
                      {results.monthlySavings}
                    </span>
                    <span className="text-[10px] text-purple-700 font-semibold block">em delivery</span>
                  </div>
                </div>

                {/* Personalized Recommended Chapters from the Collection */}
                <div className="bg-neutral-50 p-4 rounded-xl border border-slate-200">
                  <h4 className="text-xs sm:text-sm font-montserrat font-extrabold text-slate-800 uppercase tracking-wide mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Capítulos Recomendados Para Você no Acervo:</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700 font-medium font-poppins">
                    {results.recommendedChapters.map((chap, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{chap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Action Call to Offer with Direct Cakto Checkout Links */}
                <div className="text-center pt-2 space-y-3">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href="https://pay.cakto.com.br/ttadqb9"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        if (typeof window !== 'undefined' && (window as any).fbq) {
                          (window as any).fbq('track', 'InitiateCheckout', {
                            content_name: 'Freezer Inteligente Premium (Quiz)',
                            value: 19.90,
                            currency: 'BRL',
                          });
                        }
                      }}
                      className="btn-cta-gold w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-montserrat font-black text-xs sm:text-base text-neutral-950 uppercase tracking-wider cursor-pointer shadow-lg inline-flex items-center justify-center gap-2 min-h-[50px] no-underline text-center"
                    >
                      <Sparkles className="w-4 h-4 text-neutral-950 shrink-0" />
                      <span>Levar Edição Completa Recomendada (R$ 19,90)</span>
                      <ChevronRight className="w-4 h-4 text-neutral-950 shrink-0" />
                    </a>

                    <a
                      href="https://pay.cakto.com.br/xtrakpo_953780"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        if (typeof window !== 'undefined' && (window as any).fbq) {
                          (window as any).fbq('track', 'InitiateCheckout', {
                            content_name: 'Kit Freezer Essencial (Quiz)',
                            value: 9.90,
                            currency: 'BRL',
                          });
                        }
                      }}
                      className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-montserrat font-black text-xs sm:text-sm text-emerald-950 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 uppercase tracking-wider cursor-pointer inline-flex items-center justify-center gap-1.5 min-h-[50px] no-underline text-center transition-colors"
                    >
                      <span>Ou Edição Básica (R$ 9,90)</span>
                    </a>
                  </div>

                  <div className="flex items-center justify-center gap-3 text-xs text-slate-500 font-poppins pt-1">
                    <button
                      onClick={onCtaClick}
                      className="text-emerald-700 hover:text-emerald-900 font-bold underline cursor-pointer"
                    >
                      Comparar Todos os Detalhes na Tabela
                    </button>
                    <span>·</span>
                    <button
                      onClick={() => setStep(1)}
                      className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-800 underline cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3" />
                      Refazer Quiz
                    </button>
                    <span>·</span>
                    <span>Garantia de 30 Dias</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
