import React, { useState } from 'react';
import { User, Target, Check, RotateCcw, Sparkles, TrendingUp, DollarSign, Clock, ShieldCheck, ChevronRight, Zap } from 'lucide-react';

interface MiniQuizProps {
  onCtaClick: () => void;
  onOpenUpgradeModal?: () => void;
}

export const MiniQuiz: React.FC<MiniQuizProps> = ({ onCtaClick, onOpenUpgradeModal }) => {
  const [step, setStep] = useState<number>(1);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);
  const [progressMsg, setProgressMsg] = useState<string>('Processando dados biométricos...');

  // State values
  const [gender, setGender] = useState<'mulher' | 'homem'>('mulher');
  const [age, setAge] = useState<number>(32);
  const [weight, setWeight] = useState<number>(68);
  const [height, setHeight] = useState<number>(165);
  const [goal, setGoal] = useState<'emagrecer' | 'hipertrofia' | 'tempo'>('emagrecer');

  // Trigger 3s calculation
  const handleCalculate = () => {
    setIsCalculating(true);
    setProgressMsg('Calculando sua meta calórica e distribuição de macros...');

    setTimeout(() => {
      setProgressMsg('Cruzando seu perfil com o acervo de +250 receitas congeláveis...');
    }, 1200);

    setTimeout(() => {
      setProgressMsg('Calculando calorias e filtrando as melhores receitas...');
    }, 2200);

    setTimeout(() => {
      setIsCalculating(false);
      setStep(3); // Result step
    }, 3200);
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
        goalTitle: 'Emagrecimento & Perda de Gordura',
        dailyCalories: tdee - 450,
        proteinGrams: Math.round(weight * 1.8),
        carbGrams: Math.round(weight * 1.5),
        fatGrams: Math.round(weight * 0.7),
        weeklySavedHours: 8,
        monthlySavings: 'R$ 740,00',
        comboName: 'Protocolo Seca-Gordura Freezer Fit',
        description: 'Cardápio focado em alto teor proteico, legumes que saciam e refeições leves para secar sem passar fome.',
        recommendedChapters: [
          'Cap. I: Carnes & Frangos Proteicos (Iscas e Frango Desfiado)',
          'Cap. III: Acompanhamentos & Legumes Nutritivos',
          'Cap. VI: Sobremesas Fit Sem Culpa'
        ],
        sampleDishes: [
          'Escondidinho Fit de Frango com Purê Leve',
          'Almôndegas Caseiras ao Sugo com Abobrinha',
          'Iscas de Peixe Crocantes na Airfryer'
        ]
      };
    } else if (goal === 'hipertrofia') {
      return {
        goalTitle: 'Ganho de Massa Muscular',
        dailyCalories: tdee + 350,
        proteinGrams: Math.round(weight * 2.2),
        carbGrams: Math.round(weight * 3.0),
        fatGrams: Math.round(weight * 0.9),
        weeklySavedHours: 7,
        monthlySavings: 'R$ 850,00',
        comboName: 'Protocolo Hipertrofia & Densidade Muscular',
        description: 'Combinações de alta densidade proteica para recuperação muscular rápida e economia nos suplementos.',
        recommendedChapters: [
          'Cap. I: Carnes & Frangos Proteicos',
          'Cap. II: Peixes & Opções Leves',
          'Cap. IV: Lanches & Salgados Práticos Proteicos'
        ],
        sampleDishes: [
          'Frango Cremoso com Arroz Integral e Brócolis',
          'Carne Moída Suculenta com Purê Rústico',
          'Torta Proteica de Liquidificador'
        ]
      };
    } else {
      return {
        goalTitle: 'Economia de Tempo & Rotina Prática',
        dailyCalories: Math.round(tdee),
        proteinGrams: Math.round(weight * 1.6),
        carbGrams: Math.round(weight * 2.2),
        fatGrams: Math.round(weight * 0.8),
        weeklySavedHours: 10,
        monthlySavings: 'R$ 820,00',
        comboName: 'Plano Rotina Semanal Express',
        description: 'Máxima praticidade com pratos coringa de cozimento simultâneo que resolvem almoço e jantar da semana.',
        recommendedChapters: [
          'Cap. I: Carnes & Frangos Proteicos',
          'Cap. IV: Lanches & Salgados Práticos',
          'Cap. V: Molhos, Temperos & Bases Coringa'
        ],
        sampleDishes: [
          'Bases de Frango e Carne Moída Coringa',
          'Legumes Rústicos ao Ponto Certo',
          'Molho de Tomate Rústico Concentrado'
        ]
      };
    }
  };

  const results = calculateBMR();

  return (
    <section id="quiz" className="py-12 sm:py-20 bg-neutral-100 border-b border-emerald-100 relative font-poppins">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-12">
          <span className="text-xs sm:text-sm font-montserrat font-bold text-emerald-800 bg-emerald-200/80 px-3.5 py-1 rounded-full uppercase tracking-wider inline-block mb-2">
            Diagnóstico Interativo
          </span>
          <h2 className="font-montserrat text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight uppercase">
            🎯 Descubra as Receitas Ideais para o Seu Objetivo (Menos de 1 min)
          </h2>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-slate-600 font-medium leading-relaxed">
            Responda 3 perguntas rápidas (opcional) para calcular sua necessidade diária e ver as melhores opções do acervo para você.
          </p>
        </div>

        {/* Main Quiz Box */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
          {/* Top Progress Bar */}
          <div className="bg-slate-50 border-b border-slate-200 p-3.5 sm:p-5 sm:px-8 flex items-center justify-between text-xs sm:text-sm font-montserrat font-bold text-slate-600">
            <span>Passo {step <= 2 ? step : 2} de 2</span>
            <div className="flex-1 max-w-xs mx-3 sm:mx-4 bg-slate-200 h-2 sm:h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-emerald-500 h-full transition-all duration-500"
                style={{ width: `${(Math.min(step, 2) / 2) * 100}%` }}
              ></div>
            </div>
            <span className="text-emerald-700 font-extrabold">{step === 3 ? '100%' : `${Math.round((step / 2) * 100)}%`}</span>
          </div>

          <div className="p-4 sm:p-8 md:p-10">
            {/* Loading / Calculation Screen (3s) */}
            {isCalculating && (
              <div className="py-10 sm:py-16 flex flex-col items-center text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin mb-5"></div>
                <h3 className="font-montserrat text-lg sm:text-2xl font-black text-slate-900 mb-2">
                  Calculando calorias e filtrando as melhores receitas...
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

            {/* PASSO 1: Dados Biométricos */}
            {!isCalculating && step === 1 && (
              <div className="space-y-5 sm:space-y-6">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="font-montserrat text-base sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                    <User className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>Passo 1: Seus Dados Biométricos</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Utilizamos estes números para calcular sua meta calórica e distribuição diária de macronutrientes.
                  </p>
                </div>

                {/* Sexo Biológico */}
                <div>
                  <label className="block text-xs sm:text-sm font-montserrat font-bold text-slate-700 mb-2">
                    Sexo Biológico:
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

                {/* Idade, Peso, Altura */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-slate-50 p-3 sm:p-4 rounded-xl border border-slate-200">
                    <label className="block text-xs font-montserrat font-bold text-slate-700 mb-1">
                      Idade: <span className="text-emerald-700 font-extrabold">{age} anos</span>
                    </label>
                    <input
                      type="number"
                      min={18}
                      max={90}
                      value={age}
                      onChange={(e) => setAge(Number(e.target.value))}
                      className="w-full p-2 text-sm bg-white border border-slate-300 rounded-lg font-bold text-slate-800 text-center mb-2"
                    />
                    <input
                      type="range"
                      min={18}
                      max={80}
                      value={age}
                      onChange={(e) => setAge(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg accent-emerald-600 cursor-pointer"
                    />
                  </div>

                  <div className="bg-slate-50 p-3 sm:p-4 rounded-xl border border-slate-200">
                    <label className="block text-xs font-montserrat font-bold text-slate-700 mb-1">
                      Peso Atual: <span className="text-emerald-700 font-extrabold">{weight} kg</span>
                    </label>
                    <input
                      type="number"
                      min={40}
                      max={180}
                      value={weight}
                      onChange={(e) => setWeight(Number(e.target.value))}
                      className="w-full p-2 text-sm bg-white border border-slate-300 rounded-lg font-bold text-slate-800 text-center mb-2"
                    />
                    <input
                      type="range"
                      min={40}
                      max={150}
                      value={weight}
                      onChange={(e) => setWeight(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg accent-emerald-600 cursor-pointer"
                    />
                  </div>

                  <div className="bg-slate-50 p-3 sm:p-4 rounded-xl border border-slate-200">
                    <label className="block text-xs font-montserrat font-bold text-slate-700 mb-1">
                      Altura: <span className="text-emerald-700 font-extrabold">{height} cm</span>
                    </label>
                    <input
                      type="number"
                      min={130}
                      max={220}
                      value={height}
                      onChange={(e) => setHeight(Number(e.target.value))}
                      className="w-full p-2 text-sm bg-white border border-slate-300 rounded-lg font-bold text-slate-800 text-center mb-2"
                    />
                    <input
                      type="range"
                      min={140}
                      max={210}
                      value={height}
                      onChange={(e) => setHeight(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg accent-emerald-600 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full btn-cta-gold font-montserrat font-black text-xs sm:text-base uppercase tracking-wider py-3.5 sm:py-4 px-6 rounded-xl text-neutral-950 flex items-center justify-center gap-2 cursor-pointer shadow-lg min-h-[50px] transition-transform hover:scale-102"
                  >
                    <span>Avançar para o Passo 2: Meu Objetivo</span>
                    <ChevronRight className="w-4 h-4 text-neutral-950" />
                  </button>
                </div>
              </div>
            )}

            {/* PASSO 2: Objetivo */}
            {!isCalculating && step === 2 && (
              <div className="space-y-5 sm:space-y-6">
                <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
                  <div>
                    <h3 className="font-montserrat text-base sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                      <Target className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>Passo 2: Qual o seu foco hoje?</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                      Escolha o objetivo principal para filtrarmos as receitas ideais do acervo de +250.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs text-slate-500 hover:text-slate-800 font-semibold underline cursor-pointer shrink-0"
                  >
                    Voltar
                  </button>
                </div>

                <div className="space-y-3">
                  <button
                    type="button"
                    onClick={() => setGoal('emagrecer')}
                    className={`w-full min-h-[56px] p-4 rounded-xl border text-left cursor-pointer transition-all flex items-center justify-between ${
                      goal === 'emagrecer'
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-950 shadow-xs ring-2 ring-emerald-500/30'
                        : 'border-slate-200 hover:border-slate-300 text-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-black text-xs flex items-center justify-center shrink-0">
                        A
                      </div>
                      <div>
                        <span className="font-montserrat font-black text-sm block">
                          Emagrecimento & Perda de Gordura
                        </span>
                        <span className="text-xs text-slate-500">
                          Refeições proteicas de baixa caloria que dão saciedade duradoura
                        </span>
                      </div>
                    </div>
                    {goal === 'emagrecer' && <Check className="w-5 h-5 text-emerald-700 shrink-0" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => setGoal('hipertrofia')}
                    className={`w-full min-h-[56px] p-4 rounded-xl border text-left cursor-pointer transition-all flex items-center justify-between ${
                      goal === 'hipertrofia'
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-950 shadow-xs ring-2 ring-emerald-500/30'
                        : 'border-slate-200 hover:border-slate-300 text-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-black text-xs flex items-center justify-center shrink-0">
                        B
                      </div>
                      <div>
                        <span className="font-montserrat font-black text-sm block">
                          Ganho de Massa Muscular
                        </span>
                        <span className="text-xs text-slate-500">
                          Porções hiperproteicas com carboidratos limpos para bater macros fácil
                        </span>
                      </div>
                    </div>
                    {goal === 'hipertrofia' && <Check className="w-5 h-5 text-emerald-700 shrink-0" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => setGoal('tempo')}
                    className={`w-full min-h-[56px] p-4 rounded-xl border text-left cursor-pointer transition-all flex items-center justify-between ${
                      goal === 'tempo'
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-950 shadow-xs ring-2 ring-emerald-500/30'
                        : 'border-slate-200 hover:border-slate-300 text-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-black text-xs flex items-center justify-center shrink-0">
                        C
                      </div>
                      <div>
                        <span className="font-montserrat font-black text-sm block">
                          Economia de Tempo & Rotina Prática
                        </span>
                        <span className="text-xs text-slate-500">
                          Eliminar o estresse diário do fogão e parar de gastar fortunas no delivery
                        </span>
                      </div>
                    </div>
                    {goal === 'tempo' && <Check className="w-5 h-5 text-emerald-700 shrink-0" />}
                  </button>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleCalculate}
                    className="w-full btn-cta-gold font-montserrat font-black text-xs sm:text-base uppercase tracking-wider py-4 px-6 rounded-xl text-neutral-950 flex items-center justify-center gap-2 cursor-pointer shadow-lg min-h-[50px] transition-transform hover:scale-102"
                  >
                    <Sparkles className="w-5 h-5 text-neutral-950 shrink-0" />
                    <span>Calcular Minha Meta e Filtrar Cardápio</span>
                  </button>
                </div>
              </div>
            )}

            {/* PASSO 3: Tela de Resultado / Diagnóstico Concluído */}
            {!isCalculating && step === 3 && (
              <div className="space-y-6 text-left">
                {/* Result Announcement Banner */}
                <div className="bg-gradient-to-r from-emerald-800 to-emerald-950 text-white rounded-2xl p-5 sm:p-7 relative overflow-hidden shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 text-[10px] sm:text-xs font-montserrat font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-400/30 mb-2">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        <span>Diagnóstico Concluído com Sucesso</span>
                      </div>
                      <h3 className="font-montserrat text-xl sm:text-2xl font-black text-white">
                        {results.comboName}
                      </h3>
                      <p className="text-xs sm:text-sm text-emerald-100/90 mt-1 max-w-xl font-medium">
                        {results.description}
                      </p>
                    </div>

                    {/* Calorie Pill Highlight */}
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 sm:p-4 text-center shrink-0 min-w-[140px]">
                      <span className="text-[10px] font-montserrat uppercase tracking-wider text-emerald-300 block font-bold">
                        Meta Diária
                      </span>
                      <span className="text-2xl sm:text-3xl font-montserrat font-black text-white tabular-nums">
                        {results.dailyCalories}
                      </span>
                      <span className="text-[10px] text-emerald-200 block font-semibold">kcal / dia</span>
                    </div>
                  </div>

                  {/* Macros Strip */}
                  <div className="grid grid-cols-3 gap-2.5 sm:gap-4 mt-5 pt-4 border-t border-emerald-700/60 text-center">
                    <div className="bg-emerald-900/50 p-2 sm:p-2.5 rounded-lg border border-emerald-700/40">
                      <span className="text-[10px] text-emerald-300 font-bold block uppercase">Proteínas</span>
                      <span className="text-sm sm:text-lg font-montserrat font-black text-white">{results.proteinGrams}g</span>
                    </div>
                    <div className="bg-emerald-900/50 p-2 sm:p-2.5 rounded-lg border border-emerald-700/40">
                      <span className="text-[10px] text-emerald-300 font-bold block uppercase">Carboidratos</span>
                      <span className="text-sm sm:text-lg font-montserrat font-black text-white">{results.carbGrams}g</span>
                    </div>
                    <div className="bg-emerald-900/50 p-2 sm:p-2.5 rounded-lg border border-emerald-700/40">
                      <span className="text-[10px] text-emerald-300 font-bold block uppercase">Gorduras</span>
                      <span className="text-sm sm:text-lg font-montserrat font-black text-white">{results.fatGrams}g</span>
                    </div>
                  </div>
                </div>

                {/* Recommended Recipes from the +250 Collection */}
                <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-4 sm:p-6">
                  <h4 className="font-montserrat font-black text-sm sm:text-base text-slate-900 mb-3 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-700" />
                    <span>Capítulos Recomendados para o Seu Objetivo:</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium mb-4">
                    {results.recommendedChapters.map((chap, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                        <strong className="text-slate-900">{chap}</strong>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-emerald-200/80 pt-3">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide block mb-2">
                      Exemplos de Refeições Baratas Filtradas para Você:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {results.sampleDishes.map((dish, i) => (
                        <span key={i} className="bg-white border border-emerald-300 text-emerald-900 text-xs font-semibold px-3 py-1 rounded-full shadow-2xs">
                          ✓ {dish}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct Unlocking CTA Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="https://pay.cakto.com.br/ttadqb9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cta-gold w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-montserrat font-black text-xs sm:text-base text-neutral-950 uppercase tracking-wider cursor-pointer shadow-lg inline-flex items-center justify-center gap-2 min-h-[50px] no-underline text-center transition-transform hover:scale-102"
                  >
                    <Zap className="w-4 h-4 text-neutral-950 shrink-0" />
                    <span>Desbloquear Acervo Completo Recomendado (R$ 19,90)</span>
                    <ChevronRight className="w-4 h-4 text-neutral-950 shrink-0" />
                  </a>

                  <button
                    onClick={() => {
                      if (onOpenUpgradeModal) {
                        onOpenUpgradeModal();
                      } else {
                        window.open('https://pay.cakto.com.br/xtrakpo_953780', '_blank', 'noopener,noreferrer');
                      }
                    }}
                    className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-montserrat font-black text-xs sm:text-sm text-emerald-950 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 uppercase tracking-wider cursor-pointer inline-flex items-center justify-center gap-1.5 min-h-[50px] text-center transition-colors"
                  >
                    <span>Ou Edição Básica (50 Receitas · R$ 9,90)</span>
                  </button>
                </div>

                <div className="flex items-center justify-center gap-3 text-xs text-slate-500 font-poppins pt-1">
                  <button
                    onClick={onCtaClick}
                    className="text-emerald-700 hover:text-emerald-900 font-bold underline cursor-pointer"
                  >
                    Ver Tabela Completa de Ofertas
                  </button>
                  <span>·</span>
                  <button
                    onClick={() => setStep(1)}
                    className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-800 underline cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Recalcular</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
