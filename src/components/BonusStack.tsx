import React from 'react';
import { Gift, Calendar, ShoppingCart, Box, Check, ArrowDown } from 'lucide-react';

interface BonusStackProps {
  onCtaClick: () => void;
}

export const BonusStack: React.FC<BonusStackProps> = ({ onCtaClick }) => {
  return (
    <section id="bonus" className="py-12 sm:py-20 bg-gradient-to-b from-neutral-50 via-emerald-50/40 to-neutral-50 border-b border-emerald-100 font-poppins">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 bg-amber-500 text-neutral-950 font-montserrat font-black text-xs sm:text-sm px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-2 sm:mb-3 shadow-2xs">
            <Gift className="w-4 h-4 fill-neutral-950 text-neutral-950 shrink-0" />
            <span>Presentes Exclusivos de Lançamento</span>
          </div>
          <h2 className="font-montserrat text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight uppercase">
            Compre Hoje e Leve Mais 3 Bônus Especiais <span className="text-emerald-600 underline">100% Grátis</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-slate-600 leading-relaxed font-medium">
            Se você comprasse estes materiais separadamente pagaria R$ 153,00. Hoje eles entram como cortesia imediata no seu acesso.
          </p>
        </div>

        {/* Central Mockup of the Bonus Bundle */}
        <div className="max-w-3xl mx-auto mb-8 sm:mb-12 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-2 sm:border-4 border-white bg-white relative">
          <picture>
            <source srcSet="/images/bonus_bundle_ptbr.webp" type="image/webp" />
            <img
              src="/images/bonus_bundle_ptbr.webp"
              alt="Coleção de Bônus Exclusivos em Português: Plano Marmitas Inteligentes, Lista de Compras e Guia de Organização do Freezer"
              width={1000}
              height={700}
              className="w-full h-auto object-cover max-h-[340px] sm:max-h-[440px]"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </picture>
        </div>

        {/* The 3 Bonus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {/* Bonus 1 */}
          <div className="bg-white rounded-2xl p-5 sm:p-7 border border-emerald-200 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-600 text-white font-montserrat font-extrabold text-[10px] sm:text-[11px] uppercase tracking-wider py-1 px-3 rounded-bl-xl">
              Bônus #01
            </div>

            <div>
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4 sm:mb-5 font-black">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              <div className="text-xs font-montserrat font-black text-slate-400 line-through">
                Valor normal: R$ 67,00
              </div>
              <h3 className="font-montserrat text-base sm:text-lg font-black text-slate-900 mt-1 mb-2">
                Plano Marmitas Inteligentes (30 Dias)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 font-poppins">
                Cardápios semanais fechados combinando almoço, jantar e lanches. Você não precisa pensar no que comer nem gastar tempo montando combinações: basta seguir o cronograma do dia.
              </p>
            </div>

            <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between">
              <span className="text-emerald-700 font-montserrat font-extrabold text-xs uppercase flex items-center gap-1">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                Incluso Grátis
              </span>
              <span className="text-xs font-montserrat font-black text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                R$ 0,00 HOJE
              </span>
            </div>
          </div>

          {/* Bonus 2 */}
          <div className="bg-white rounded-2xl p-5 sm:p-7 border border-emerald-200 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-600 text-white font-montserrat font-extrabold text-[10px] sm:text-[11px] uppercase tracking-wider py-1 px-3 rounded-bl-xl">
              Bônus #02
            </div>

            <div>
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4 sm:mb-5 font-black">
                <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              <div className="text-xs font-montserrat font-black text-slate-400 line-through">
                Valor normal: R$ 47,00
              </div>
              <h3 className="font-montserrat text-base sm:text-lg font-black text-slate-900 mt-1 mb-2">
                Lista de Compras Econômica (Zero Lixo)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 font-poppins">
                Checklist organizada por corredores do supermercado (hortifrúti, carnes, grãos). Você entra no mercado, compra exatamente a quantidade de gramas necessária e economiza até 40%.
              </p>
            </div>

            <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between">
              <span className="text-emerald-700 font-montserrat font-extrabold text-xs uppercase flex items-center gap-1">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                Incluso Grátis
              </span>
              <span className="text-xs font-montserrat font-black text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                R$ 0,00 HOJE
              </span>
            </div>
          </div>

          {/* Bonus 3 */}
          <div className="bg-white rounded-2xl p-5 sm:p-7 border border-emerald-200 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-600 text-white font-montserrat font-extrabold text-[10px] sm:text-[11px] uppercase tracking-wider py-1 px-3 rounded-bl-xl">
              Bônus #03
            </div>

            <div>
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4 sm:mb-5 font-black">
                <Box className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              <div className="text-xs font-montserrat font-black text-slate-400 line-through">
                Valor normal: R$ 39,00
              </div>
              <h3 className="font-montserrat text-base sm:text-lg font-black text-slate-900 mt-1 mb-2">
                Guia de Organização do Freezer & Embalagens
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 font-poppins">
                Como fazer caber 30 a 40 marmitas mesmo em gavetas de congeladores pequenos. Dicas de zoneamento térmico, remoção de ar sem seladora e modelos de etiquetas de validade.
              </p>
            </div>

            <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between">
              <span className="text-emerald-700 font-montserrat font-extrabold text-xs uppercase flex items-center gap-1">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                Incluso Grátis
              </span>
              <span className="text-xs font-montserrat font-black text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                R$ 0,00 HOJE
              </span>
            </div>
          </div>
        </div>

        {/* Total Value Anchor Box */}
        <div className="bg-emerald-900 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 text-center max-w-3xl mx-auto shadow-xl">
          <span className="text-[10px] sm:text-xs uppercase font-montserrat font-extrabold tracking-widest text-emerald-300">
            Resumo do Stack de Valor
          </span>
          <h3 className="font-montserrat text-lg sm:text-2xl md:text-3xl font-black mt-2">
            Total em Bônus: <span className="line-through text-rose-300">R$ 153,00</span>
          </h3>
          <p className="text-xs sm:text-base text-emerald-100 mt-1.5 font-medium">
            Liberados automaticamente como presente junto com a sua aquisição hoje.
          </p>
          <div className="mt-4 sm:mt-5">
            <button
              onClick={onCtaClick}
              className="btn-cta-gold w-full sm:w-auto px-6 sm:px-8 py-3.5 rounded-xl font-montserrat font-black text-xs sm:text-base text-neutral-950 uppercase tracking-wider inline-flex items-center justify-center gap-2 cursor-pointer shadow-lg min-h-[48px]"
            >
              <span>Garantir Meus 3 Bônus Gratuitos Agora</span>
              <ArrowDown className="w-4 h-4 shrink-0" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
