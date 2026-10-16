import React from 'react';
import { CHAPTER_SUMMARIES, FEATURED_RECIPES } from '../data/recipes';
import { Flame, Fish, Leaf, Sandwich, Sparkles, Heart, Clock, Calendar, ShieldCheck, ChevronRight, CheckCircle2, ShoppingBag, Zap } from 'lucide-react';

interface RecipeExplorerProps {
  onCtaClick: () => void;
}

export const RecipeExplorer: React.FC<RecipeExplorerProps> = ({ onCtaClick }) => {
  const getChapterIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame': return <Flame className="w-4 h-4 text-emerald-600 shrink-0" />;
      case 'Fish': return <Fish className="w-4 h-4 text-emerald-600 shrink-0" />;
      case 'Leaf': return <Leaf className="w-4 h-4 text-emerald-600 shrink-0" />;
      case 'Sandwich': return <Sandwich className="w-4 h-4 text-emerald-600 shrink-0" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />;
      case 'Heart': return <Heart className="w-4 h-4 text-emerald-600 shrink-0" />;
      default: return <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />;
    }
  };

  return (
    <section id="acervo" className="py-12 sm:py-20 bg-neutral-50 border-b border-emerald-100 font-poppins">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-300 text-emerald-900 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-montserrat font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <ShoppingBag className="w-4 h-4 text-emerald-700" />
            <span>Sem Ingredientes Caros · Comida Simples de Mercado</span>
          </div>

          <h2 className="font-montserrat text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight uppercase">
            +250 Receitas Divididas Em 6 Capítulos Estratégicos
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-slate-600 leading-relaxed font-medium">
            Testadas para quem não tem tempo a perder e não quer gastar fortunas no mercado.
          </p>
        </div>

        {/* Objection Breaker Banner */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-emerald-200 shadow-sm max-w-4xl mx-auto mb-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-montserrat text-sm sm:text-base font-black text-slate-900">
                Adeus Receitas "Gourmet" Com Ingredientes Caros e Difíceis de Achar
              </h3>
              <p className="text-xs text-slate-600 font-medium mt-0.5">
                Todas as receitas levam ingredientes comuns de feira e açougue: frango, ovos, batata, carne moída, legumes simples e peixes populares. Zero desperdício e zero complicação.
              </p>
            </div>
          </div>
          <span className="shrink-0 bg-emerald-600 text-white font-montserrat font-black text-xs py-1.5 px-3 rounded-lg uppercase tracking-wider">
            100% Acessível
          </span>
        </div>

        {/* 6 Chapters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 mb-12 sm:mb-16">
          {CHAPTER_SUMMARIES.map((chap) => (
            <div
              key={chap.id}
              className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-2xs hover:border-emerald-300 transition-all flex items-start gap-3.5"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5">
                {getChapterIcon(chap.iconName)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-montserrat font-black text-xs text-emerald-700 uppercase tracking-wider">
                    {chap.number}
                  </span>
                  <span className="bg-emerald-50 text-emerald-800 text-[10px] font-montserrat font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                    {chap.recipesCount} receitas
                  </span>
                </div>
                <h4 className="font-montserrat font-extrabold text-sm sm:text-base text-slate-900 leading-snug truncate">
                  {chap.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-1 leading-relaxed">
                  {chap.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Destaques: 3 Amostras Campeãs de Vendas */}
        <div className="mb-10">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[11px] sm:text-xs font-montserrat font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3.5 py-1 rounded-full">
              Prévia do Livro Digital
            </span>
            <h3 className="font-montserrat text-xl sm:text-3xl font-black text-slate-900 mt-2 uppercase">
              Veja 3 Exemplos Campeões de Vendas do Acervo:
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Pratos saborosos, rápidos de montar (15 a 20 minutos) e que saem do congelador com textura de comida fresca.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {FEATURED_RECIPES.map((recipe, index) => (
              <div
                key={recipe.id}
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border-2 border-slate-200 hover:border-emerald-400 transition-all shadow-md flex flex-col justify-between relative overflow-hidden"
              >
                {/* Category Header Badge */}
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span className="text-[10px] font-montserrat font-black uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                    Amostra #{index + 1} · {recipe.category}
                  </span>
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-montserrat font-bold px-2 py-0.5 rounded-md">
                    {recipe.tag}
                  </span>
                </div>

                <div>
                  <h4 className="font-montserrat font-black text-slate-900 text-base sm:text-lg leading-snug mb-2">
                    {recipe.name}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mb-4">
                    {recipe.description}
                  </p>

                  {/* Secret of Freeze Box (Highlighted as requested) */}
                  <div className="bg-amber-50 border border-amber-200/90 rounded-xl p-3 sm:p-3.5 mb-4 text-xs text-amber-950 font-poppins shadow-2xs">
                    <div className="flex items-center gap-1.5 font-montserrat font-extrabold text-[11px] sm:text-xs text-amber-900 uppercase tracking-wide mb-1">
                      <Zap className="w-3.5 h-3.5 text-amber-600 fill-amber-600 shrink-0" />
                      <span>Segredo de Congelamento:</span>
                    </div>
                    <p className="leading-relaxed font-medium text-amber-900">
                      {recipe.secretTip}
                    </p>
                  </div>
                </div>

                <div>
                  {/* Macros Strip */}
                  <div className="grid grid-cols-4 gap-1 py-2 px-1.5 bg-neutral-50 rounded-xl border border-slate-200 text-center text-xs mb-3 font-montserrat">
                    <div>
                      <span className="text-[9px] text-slate-400 font-bold block">KCAL</span>
                      <span className="font-black text-slate-900 tabular-nums text-xs sm:text-sm">{recipe.calories}</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-400 font-bold block">PROT</span>
                      <span className="font-black text-emerald-700 tabular-nums text-xs sm:text-sm">{recipe.protein}g</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-400 font-bold block">CARB</span>
                      <span className="font-black text-slate-900 tabular-nums text-xs sm:text-sm">{recipe.carbs}g</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-400 font-bold block">GORD</span>
                      <span className="font-black text-slate-900 tabular-nums text-xs sm:text-sm">{recipe.fat}g</span>
                    </div>
                  </div>

                  {/* Metadata: Prep & Freezer time */}
                  <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold pt-2.5 border-t border-slate-100 font-poppins">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>Preparo: {recipe.prepTime}</span>
                    </span>
                    <span className="flex items-center gap-1 text-emerald-700 font-bold">
                      <Calendar className="w-3.5 h-3.5 shrink-0" />
                      <span>Freezer: até {recipe.freezerDays} dias</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Bar */}
        <div className="bg-white rounded-2xl p-5 sm:p-7 border border-emerald-200 shadow-md text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium text-left">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>
              Tenha acesso a essas e mais outras <strong>247 receitas testadas</strong> prontas para salvar seu almoço e jantar.
            </span>
          </div>

          <button
            onClick={onCtaClick}
            className="btn-cta-gold w-full sm:w-auto px-6 py-3.5 rounded-xl font-montserrat font-black text-xs sm:text-sm text-neutral-950 uppercase tracking-wider shrink-0 cursor-pointer shadow-md flex items-center justify-center gap-2 min-h-[46px]"
          >
            <span>Destravar Todas as +250 Receitas</span>
            <ChevronRight className="w-4 h-4 text-neutral-950 shrink-0" />
          </button>
        </div>
      </div>
    </section>
  );
};
