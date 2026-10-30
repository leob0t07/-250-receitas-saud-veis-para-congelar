import React from 'react';
import { ShieldCheck, ArrowRight, Heart, CheckCircle2, Award, ArrowDown, Smartphone, Tag, ShoppingCart, Box } from 'lucide-react';

interface HeroSectionProps {
  onCtaClick: () => void;
  onQuizClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick, onQuizClick }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/70 via-white to-neutral-50 pt-6 pb-12 sm:pt-10 sm:pb-20 border-b border-emerald-100/60 font-poppins">
      {/* Decorative background accents */}
      <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-10 left-0 w-64 sm:w-80 h-64 sm:h-80 bg-amber-200/20 rounded-full blur-3xl pointer-events-none -ml-20"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Badges & Announcement */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-5 sm:mb-8">
          {/* Superhead (Aviso de Topo) */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs sm:text-sm font-montserrat font-bold tracking-wide mb-3 sm:mb-4 border border-emerald-200/90 shadow-2xs">
            <Smartphone className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
            <span>Edição Digital 2026 · Acesso Imediato no Celular, Tablet e Computador</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-montserrat text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.18] sm:leading-[1.12] tracking-tight uppercase text-center text-balance">
            Alimentação Saudável de Verdade Para o Seu Dia a Dia
          </h1>

          {/* Destaque menor posicionado logo abaixo da headline */}
          <div className="mt-2 sm:mt-3 text-center">
            <span className="font-montserrat text-base sm:text-2xl md:text-3xl font-extrabold text-emerald-700 underline decoration-amber-400 decoration-wavy decoration-2">
              (Sem Passar Horas na Cozinha)
            </span>
          </div>
        </div>

        {/* Hero Visual Showcase & Direct CTA */}
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          {/* Mockup Container */}
          <div className="relative w-full max-w-3xl my-2 group">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white bg-white">
              <img
                src="/images/hero_ebook_mockup_new.jpg"
                alt="+250 Receitas Saudáveis Acervo Digital com Pratos Suculentos, Wraps com Queijo e Tortinhas Fit"
                width={1280}
                height={720}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full h-auto object-cover max-h-[340px] sm:max-h-[520px] transition-transform duration-500 hover:scale-[1.01]"
              />
              {/* Overlay trust pills */}
              <div className="absolute bottom-2.5 left-2.5 sm:bottom-4 sm:left-4 bg-slate-900/85 backdrop-blur-md text-white text-[10px] sm:text-sm font-montserrat font-bold py-1 sm:py-1.5 px-2.5 sm:px-3 rounded-lg shadow-lg flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                <span>+250 Receitas Testadas</span>
              </div>
              <div className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 bg-amber-500 text-neutral-950 text-[10px] sm:text-xs font-montserrat font-black py-0.5 sm:py-1 px-2.5 sm:px-3 rounded-md sm:rounded-lg shadow-lg uppercase tracking-wide">
                Edição 2026 Atualizada
              </div>
            </div>

            {/* Sub-headline posicionado logo após a imagem */}
            <p className="mt-4 sm:mt-5 text-center text-sm sm:text-lg md:text-xl text-slate-800 font-semibold font-poppins max-w-3xl mx-auto leading-relaxed text-balance">
              Descubra mais de 250 receitas nutritivas, baratas e deliciosas para você almoçar, jantar e lanchar bem todos os dias — com o passo a passo exato para congelar sem perder o sabor nem a textura.
            </p>

            {/* Badges de Destaque: [+250 Receitas Testadas] [Ingredientes Baratos de Mercado] [Potes Comuns] [Sabor de Comida Fresca] */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mt-4 text-center">
              <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-emerald-100 shadow-2xs flex flex-col items-center justify-center text-center">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="font-montserrat font-black text-xs sm:text-sm text-emerald-800 leading-tight">+250 Receitas</span>
                <span className="text-[10px] text-slate-500 font-semibold">Testadas e Aprovadas</span>
              </div>

              <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-emerald-100 shadow-2xs flex flex-col items-center justify-center text-center">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center mb-1">
                  <ShoppingCart className="w-4 h-4" />
                </div>
                <span className="font-montserrat font-black text-xs sm:text-sm text-slate-800 leading-tight">Ingredientes</span>
                <span className="text-[10px] text-slate-500 font-semibold">Baratos de Mercado</span>
              </div>

              <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-emerald-100 shadow-2xs flex flex-col items-center justify-center text-center">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center mb-1">
                  <Box className="w-4 h-4" />
                </div>
                <span className="font-montserrat font-black text-xs sm:text-sm text-slate-800 leading-tight">Potes Comuns</span>
                <span className="text-[10px] text-slate-500 font-semibold">Vidro ou Plástico</span>
              </div>

              <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-amber-100 shadow-2xs flex flex-col items-center justify-center text-center">
                <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center mb-1">
                  <Heart className="w-4 h-4" />
                </div>
                <span className="font-montserrat font-black text-xs sm:text-sm text-amber-900 leading-tight">Sabor Fresco</span>
                <span className="text-[10px] text-slate-500 font-semibold">Comida de Verdade</span>
              </div>
            </div>
          </div>

          {/* Main Direct CTA Button */}
          <div className="w-full max-w-md sm:max-w-lg mt-6 sm:mt-8 flex flex-col items-center text-center px-1">
            <button
              onClick={onCtaClick}
              className="btn-cta-gold w-full py-4 sm:py-5 px-5 sm:px-6 rounded-xl sm:rounded-2xl font-montserrat font-black text-base sm:text-xl text-neutral-950 uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer group shadow-xl min-h-[54px] sm:min-h-[64px] transition-transform hover:scale-102"
            >
              <span>QUERO MINHAS RECEITAS SAUDÁVEIS</span>
              <ArrowRight className="w-5 h-5 text-neutral-950 shrink-0 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Micro-copy de apoio */}
            <p className="mt-2.5 text-xs sm:text-sm text-slate-600 font-medium font-poppins text-center">
              Acesso imediato no E-mail & WhatsApp · Pagamento Único sem Mensalidade · Garantia de 30 Dias.
            </p>

            {/* Micro-copy Security & Trust Badges */}
            <div className="flex items-center justify-center gap-3 sm:gap-6 mt-4 pt-3 border-t border-slate-200/80 w-full text-[11px] sm:text-xs text-slate-600 font-medium flex-wrap">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                Compra 100% Segura
              </span>
              <span className="flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                Garantia Blindada de 30 Dias
              </span>
              <span className="flex items-center gap-1">
                <Heart className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                Sabor de Feito na Hora
              </span>
            </div>

            {/* Bridge to Biometric Quiz */}
            <div className="mt-6 sm:mt-8 pt-2 w-full text-center">
              <button
                onClick={onQuizClick}
                className="inline-flex items-center justify-center gap-2 text-emerald-800 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 font-montserrat font-bold text-xs sm:text-sm px-4 py-2.5 rounded-full transition-colors cursor-pointer"
              >
                <span>🎯 Descubra as Receitas Ideais para o Seu Objetivo (Menos de 1 min)</span>
                <ArrowDown className="w-3.5 h-3.5 text-emerald-700 animate-bounce shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
