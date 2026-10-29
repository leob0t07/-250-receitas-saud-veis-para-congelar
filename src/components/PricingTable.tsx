import React from 'react';
import { ShieldCheck, Check, Star, Sparkles, Zap, Lock, ArrowRight } from 'lucide-react';

interface PricingTableProps {
  onOpenUpgradeModal?: () => void;
}

export const PricingTable: React.FC<PricingTableProps> = ({ onOpenUpgradeModal }) => {

  return (
    <section id="precos" className="py-12 sm:py-20 bg-neutral-100 border-b border-emerald-100 relative font-poppins">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Headline matching NewDetox reference */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-[11px] sm:text-xs font-montserrat font-black uppercase tracking-widest text-emerald-800 bg-emerald-200/80 px-3.5 py-1 rounded-full inline-block mb-2 sm:mb-3">
            Tabela Promocional Por Lote
          </span>
          <h2 className="font-montserrat text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight uppercase">
            Escolha Sua Edição e Aproveite a <span className="text-rose-600">Super Promoção!</span>
          </h2>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-slate-600 font-medium">
            Acesso vitalício e imediato no seu celular e computador. Escolha a melhor opção para sua rotina:
          </p>
        </div>

        {/* 2 Pricing Cards Grid (Edição Essencial vs Freezer Inteligente Premium) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch max-w-3xl mx-auto mb-10 sm:mb-12">
          {/* Plan 1: Essencial (9,90) */}
          <div className="bg-emerald-700 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-600 flex flex-col justify-between relative order-2 md:order-1">
            <div>
              <div className="text-center border-b border-emerald-600/60 pb-5 mb-5">
                <span className="text-[10px] sm:text-xs font-montserrat font-black uppercase tracking-wider text-emerald-200 block mb-1">
                  Edição Básica
                </span>
                <h3 className="font-montserrat text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                  Kit Freezer Essencial
                </h3>
                <p className="text-xs text-emerald-100/80 mt-1 font-medium">
                  Ideal para quem quer apenas as 50 receitas principais
                </p>
              </div>

              {/* Pricing Display */}
              <div className="text-center mb-6 py-2">
                <span className="text-xs font-montserrat text-emerald-200/80 line-through block">
                  De R$ 47,00 por apenas
                </span>
                <div className="flex items-center justify-center gap-1 font-montserrat font-black leading-none my-1.5">
                  <span className="text-xs sm:text-sm text-emerald-200">Apenas</span>
                  <span className="text-3xl sm:text-5xl text-white font-black tracking-tight tabular-nums">
                    R$ 9,90
                  </span>
                </div>
                <span className="text-[11px] sm:text-xs font-montserrat font-bold text-emerald-100 uppercase tracking-wide">
                  Pagamento único no PIX ou Cartão
                </span>
              </div>

              {/* Inclusions */}
              <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-50 mb-8 border-t border-emerald-600/60 pt-5">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span><strong>E-book Oficial:</strong> 50 Receitas Congeláveis</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>Tabela de calorias e macronutrientes</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>Instruções de descongelamento seguro</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>Garantia incondicional de 30 dias</span>
                </li>
                <li className="flex items-center gap-2 text-emerald-300/50 line-through">
                  <span>Sem os 3 Bônus Especiais</span>
                </li>
                <li className="flex items-center gap-2 text-emerald-300/50 line-through">
                  <span>Sem Atualizações Vitalícias</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => {
                if (onOpenUpgradeModal) {
                  onOpenUpgradeModal();
                } else {
                  window.open('https://pay.cakto.com.br/xtrakpo_953780', '_blank', 'noopener,noreferrer');
                }
              }}
              className="w-full bg-white hover:bg-emerald-50 text-emerald-900 font-montserrat font-black text-xs sm:text-sm uppercase tracking-wider py-4 rounded-xl sm:rounded-2xl cursor-pointer shadow-lg transition-transform hover:scale-102 flex items-center justify-center gap-2 min-h-[50px] text-center"
            >
              <span>Comprar Agora</span>
              <ArrowRight className="w-4 h-4 text-emerald-800 shrink-0" />
            </button>
          </div>

          {/* Plan 2: PREMIUM MAIS ESCOLHIDO (19,90) - HIGHLIGHTED */}
          <div className="bg-emerald-600 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-amber-400 flex flex-col justify-between relative order-1 md:order-2 scale-100 md:scale-103 z-10 card-pricing-highlight">
            {/* Top Ribbon */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-amber-500 text-neutral-950 font-montserrat font-black text-[10px] sm:text-xs uppercase tracking-wider py-1 px-4 sm:px-6 rounded-full shadow-lg flex items-center gap-1 whitespace-nowrap">
              <Star className="w-3 h-3 fill-neutral-950 text-neutral-950 shrink-0" />
              <span>Melhor Oferta · Mais Escolhido</span>
              <Star className="w-3 h-3 fill-neutral-950 text-neutral-950 shrink-0" />
            </div>

            <div>
              <div className="text-center border-b border-emerald-500 pb-5 mb-5 pt-2">
                <span className="text-[10px] sm:text-xs font-montserrat font-black uppercase tracking-wider text-amber-300 block mb-1">
                  Edição Completa VIP
                </span>
                <h3 className="font-montserrat text-xl sm:text-3xl font-black text-white uppercase tracking-tight">
                  Freezer Inteligente Premium
                </h3>
                <p className="text-xs text-emerald-100 mt-1 font-medium">
                  Pacote completo com todos os bônus e atualizações
                </p>
              </div>

              {/* Pricing Display */}
              <div className="text-center mb-6 py-2.5 bg-emerald-700/60 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-emerald-400/40">
                <span className="text-xs font-montserrat text-amber-200 line-through block font-bold">
                  De R$ 197,00 por apenas
                </span>
                <div className="flex items-center justify-center gap-1 font-montserrat font-black leading-none my-1">
                  <span className="text-xs sm:text-base text-amber-300">2x</span>
                  <span className="text-3xl sm:text-5xl lg:text-6xl text-white font-black tracking-tight tabular-nums">
                    R$ 10,40
                  </span>
                </div>
                <span className="text-[11px] sm:text-xs font-montserrat font-black text-amber-300 uppercase tracking-wide block">
                  Ou apenas R$ 19,90 à vista no PIX
                </span>
              </div>

              {/* Inclusions */}
              <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-50 mb-8 border-t border-emerald-500 pt-5">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-300 shrink-0 font-bold" />
                  <span><strong>E-book Oficial:</strong> +250 Receitas Congeláveis</span>
                </li>
                <li className="flex items-center gap-2 bg-emerald-700/80 p-1.5 rounded-lg border border-emerald-500/50">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                  <span><strong>+ BÔNUS 1:</strong> Plano Marmitas 30 Dias (R$ 67)</span>
                </li>
                <li className="flex items-center gap-2 bg-emerald-700/80 p-1.5 rounded-lg border border-emerald-500/50">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                  <span><strong>+ BÔNUS 2:</strong> Lista de Compras Enxuta (R$ 47)</span>
                </li>
                <li className="flex items-center gap-2 bg-emerald-700/80 p-1.5 rounded-lg border border-emerald-500/50">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                  <span><strong>+ BÔNUS 3:</strong> Guia do Freezer Pro (R$ 39)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-300 shrink-0" />
                  <span><strong>Atualizações Vitalícias</strong> de Novas Receitas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>Suporte VIP para Dúvidas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>Garantia Blindada de 30 Dias</span>
                </li>
              </ul>
            </div>

            <a
              href="https://pay.cakto.com.br/ttadqb9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta-gold w-full text-neutral-950 font-montserrat font-black text-xs sm:text-sm md:text-base uppercase tracking-wide sm:tracking-wider py-3.5 sm:py-4 px-3 sm:px-6 rounded-xl sm:rounded-2xl cursor-pointer shadow-xl flex items-center justify-center gap-1.5 sm:gap-2 min-h-[48px] sm:min-h-[52px] text-center no-underline transition-transform hover:scale-102"
            >
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 fill-neutral-950 text-neutral-950 shrink-0" />
              <span className="leading-tight">Comprar Agora · Melhor Oferta</span>
            </a>
          </div>
        </div>

        {/* Security Bar */}
        <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200 max-w-3xl mx-auto shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-black shrink-0">
              <Lock className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <span className="font-montserrat font-extrabold text-xs sm:text-sm text-slate-900 block">
                Ambiente 100% Criptografado & Seguro
              </span>
              <span className="text-[11px] sm:text-xs text-slate-500">
                Seus dados são protegidos por criptografia militar de ponta a ponta.
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <div className="flex items-center gap-1.5 bg-slate-900 text-white text-[9px] sm:text-[10px] font-montserrat font-black py-1.5 px-2.5 sm:px-3 rounded-md uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>SSL Certificado</span>
            </div>
            <div className="flex items-center gap-1 bg-rose-600 text-white text-[10px] sm:text-[11px] font-montserrat font-black py-1.5 px-2.5 sm:px-3 rounded-md uppercase tracking-wider shadow-2xs">
              <span>e-bit</span>
              <span className="text-[9px] bg-rose-800 px-1 rounded font-bold">Ótima</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
