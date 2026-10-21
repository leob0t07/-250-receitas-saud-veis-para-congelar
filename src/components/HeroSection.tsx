import React from 'react';
import { ShieldCheck, Zap, Heart, CheckCircle2, Award, ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  onCtaClick: () => void;
  onQuizClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick, onQuizClick }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/70 via-white to-neutral-50 pt-6 pb-12 sm:pt-12 sm:pb-20 border-b border-emerald-100/60 font-poppins">
      {/* Decorative background foliage accents */}
      <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-10 left-0 w-64 sm:w-80 h-64 sm:h-80 bg-amber-200/20 rounded-full blur-3xl pointer-events-none -ml-20"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Badges & Announcement */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-5 sm:mb-8">
          {/* Eyebrow pequeno em cima */}
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-montserrat font-extrabold tracking-wide uppercase mb-3 sm:mb-4 border border-emerald-200/80 shadow-2xs">
            +250 receitas deliciosas
          </span>

          {/* Main Headline */}
          <h1 className="font-montserrat text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.18] sm:leading-[1.12] tracking-tight uppercase text-center text-balance">
            Alimentação da semana <span className="text-emerald-600 underline decoration-amber-400 decoration-wavy decoration-2">cozinhando só em um dia</span>
          </h1>

          {/* Sub-headline */}
          <p className="mt-3.5 sm:mt-5 text-sm sm:text-lg md:text-xl text-slate-700 leading-relaxed max-w-3xl font-medium font-poppins text-center text-balance">
            Comida de verdade para o seu objetivo feita somente uma vez na semana para quando você precisar. Passo a passo completo com lista de compras, receitas e organização.
          </p>
        </div>

        {/* Hero Visual Showcase & Direct CTA */}
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          {/* Mockup Container */}
          <div className="relative w-full max-w-3xl my-2 group">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white bg-white">
              <picture>
                <source srcSet="/images/hero_ebook_mockup.webp" type="image/webp" />
                <img
                  src="/images/hero_ebook_mockup.jpg"
                  alt="Acervo +250 Receitas Saudáveis para Congelar Mockup Digital e Marmitas Prontas"
                  width={1200}
                  height={900}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover max-h-[340px] sm:max-h-[520px] transition-transform duration-500 hover:scale-[1.01]"
                />
              </picture>
              {/* Overlay trust pills */}
              <div className="absolute bottom-2.5 left-2.5 sm:bottom-4 sm:left-4 bg-slate-900/85 backdrop-blur-md text-white text-[10px] sm:text-sm font-montserrat font-bold py-1 sm:py-1.5 px-2.5 sm:px-3 rounded-lg shadow-lg flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                <span>+250 Receitas Testadas</span>
              </div>
              <div className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 bg-amber-500 text-neutral-950 text-[10px] sm:text-xs font-montserrat font-black py-0.5 sm:py-1 px-2.5 sm:px-3 rounded-md sm:rounded-lg shadow-lg uppercase tracking-wide">
                Edição 2026 Atualizada
              </div>
            </div>

            {/* Quick Feature Cards Grid on Mobile (Perfect Centering) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mt-3 sm:mt-4 text-center">
              <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-emerald-100 shadow-2xs flex flex-col items-center justify-center text-center">
                <span className="block text-emerald-700 font-montserrat font-black text-base sm:text-xl leading-tight">2 Horas</span>
                <span className="text-[10px] sm:text-xs text-slate-600 font-semibold leading-tight font-poppins mt-0.5">Cozinha 1x no Domingo</span>
              </div>
              <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-emerald-100 shadow-2xs flex flex-col items-center justify-center text-center">
                <span className="block text-emerald-700 font-montserrat font-black text-base sm:text-xl leading-tight">90 Dias</span>
                <span className="text-[10px] sm:text-xs text-slate-600 font-semibold leading-tight font-poppins mt-0.5">Validade no Freezer</span>
              </div>
              <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-emerald-100 shadow-2xs flex flex-col items-center justify-center text-center">
                <span className="block text-emerald-700 font-montserrat font-black text-base sm:text-xl leading-tight">R$ 800</span>
                <span className="text-[10px] sm:text-xs text-slate-600 font-semibold leading-tight font-poppins mt-0.5">Economia Mensal</span>
              </div>
              <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-emerald-100 shadow-2xs flex flex-col items-center justify-center text-center">
                <span className="block text-emerald-700 font-montserrat font-black text-base sm:text-xl leading-tight">100% Fit</span>
                <span className="text-[10px] sm:text-xs text-slate-600 font-semibold leading-tight font-poppins mt-0.5">Macros Calculados</span>
              </div>
            </div>
          </div>

          {/* Main Direct CTA Button (Centered & responsive touch size) */}
          <div className="w-full max-w-md sm:max-w-lg mt-6 sm:mt-8 flex flex-col items-center text-center px-1">
            <button
              onClick={onCtaClick}
              className="btn-cta-gold w-full py-4 sm:py-5 px-5 sm:px-6 rounded-xl sm:rounded-2xl font-montserrat font-black text-lg sm:text-2xl text-neutral-950 uppercase tracking-wider flex items-center justify-center gap-2.5 sm:gap-3 cursor-pointer group shadow-xl min-h-[54px] sm:min-h-[64px]"
            >
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 fill-neutral-950 text-neutral-950 shrink-0 group-hover:scale-110 transition-transform" />
              <span>Quero Experimentar!</span>
            </button>
            <p className="mt-2 text-xs sm:text-sm text-slate-500 font-medium font-poppins">
              Acesso Imediato no E-mail & WhatsApp · Pagamento Único sem Mensalidade
            </p>

            {/* Micro-copy Security & Trust Badges (Centered) */}
            <div className="flex items-center justify-center gap-3 sm:gap-6 mt-4 pt-3 border-t border-slate-200/80 w-full text-[11px] sm:text-xs text-slate-600 font-medium flex-wrap">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                Compra 100% Segura
              </span>
              <span className="flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                Garantia de 30 Dias
              </span>
              <span className="flex items-center gap-1">
                <Heart className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                Textura Feita na Hora
              </span>
            </div>

            {/* Bridge to Biometric Quiz (Centered) */}
            <div className="mt-6 sm:mt-8 pt-2 w-full text-center">
              <button
                onClick={onQuizClick}
                className="inline-flex items-center justify-center gap-1.5 text-emerald-800 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 font-montserrat font-bold text-xs sm:text-sm px-4 py-2.5 rounded-full transition-colors cursor-pointer"
              >
                <span>Faça o seu cardápio ideal, menos de 1 min</span>
                <ArrowDown className="w-3.5 h-3.5 text-emerald-700 animate-bounce shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
