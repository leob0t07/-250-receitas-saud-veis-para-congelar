import React, { useEffect } from 'react';
import { X, Sparkles, Check, ArrowRight, Zap, Gift, ShieldCheck } from 'lucide-react';

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  upgradeCheckoutUrl?: string;
  basicCheckoutUrl?: string;
}

export const UpgradeModal: React.FC<UpgradeModalProps> = ({
  isOpen,
  onClose,
  upgradeCheckoutUrl = 'https://pay.cakto.com.br/3cjgha8_953826', // Link do plano completo com desconto R$ 15,99
  basicCheckoutUrl = 'https://pay.cakto.com.br/xtrakpo_953780', // Link do plano básico R$ 9,90
}) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleUpgradeClick = () => {
    window.open(upgradeCheckoutUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const handleBasicClick = () => {
    window.open(basicCheckoutUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-xs font-poppins animate-fade-in overflow-y-auto">
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl sm:rounded-3xl shadow-2xl border-4 border-amber-400 overflow-hidden my-auto animate-scale-up"
        role="dialog"
        aria-modal="true"
        aria-labelledby="upgrade-modal-title"
      >
        {/* Top Close Button */}
        <button
          onClick={onClose}
          aria-label="Fechar janela"
          className="absolute top-3.5 right-3.5 z-20 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center cursor-pointer transition-colors shadow-2xs"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Urgency Header Ribbon */}
        <div className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 p-3 text-center text-neutral-950 font-montserrat font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-xs">
          <Zap className="w-4 h-4 fill-neutral-950 text-neutral-950 shrink-0" />
          <span>ESPERE! NÃO COMPRE O BÁSICO AINDA</span>
          <Zap className="w-4 h-4 fill-neutral-950 text-neutral-950 shrink-0" />
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-7 text-center">
          {/* Discount Badge */}
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-montserrat font-black uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span>Desconto Exclusivo de Upgrade Liberado</span>
          </div>

          <h3
            id="upgrade-modal-title"
            className="font-montserrat text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight uppercase"
          >
            Leve o Acervo Completo por Apenas{' '}
            <span className="text-emerald-700 underline decoration-amber-400 decoration-wavy decoration-2">
              R$ 15,99
            </span>
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
            Por apenas <strong>R$ 6,09 a mais</strong>, em vez de 50 receitas você desbloqueia o acervo completo de <strong>+250 receitas</strong> com todos os <strong>3 bônus especiais inclusos</strong>!
          </p>

          {/* Quick Value Contrast Card */}
          <div className="my-4 sm:my-5 bg-gradient-to-br from-emerald-50 to-neutral-50 rounded-xl sm:rounded-2xl p-4 border border-emerald-200 text-left">
            <div className="flex items-center justify-between mb-3 border-b border-emerald-200/80 pb-2">
              <span className="text-xs font-montserrat font-black uppercase text-emerald-900 flex items-center gap-1.5">
                <Gift className="w-4 h-4 text-emerald-700" />
                O que você ganha com o upgrade:
              </span>
              <span className="text-[10px] bg-emerald-600 text-white font-montserrat font-bold px-2 py-0.5 rounded-full uppercase">
                Oportunidade Única
              </span>
            </div>

            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>+250 Receitas Congeláveis</strong> (em vez de apenas 50)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Bônus 1:</strong> Plano Marmitas Inteligentes 30 Dias (R$ 67)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Bônus 2:</strong> Lista de Compras Econômica (R$ 47)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Bônus 3:</strong> Guia de Organização do Freezer Pro (R$ 39)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Acesso Vitalício</strong> com Atualizações Futuras</span>
              </li>
            </ul>

            {/* Price Box inside card */}
            <div className="mt-3.5 pt-3 border-t border-emerald-200 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-slate-400 line-through block">De R$ 19,90</span>
                <span className="text-xs font-bold text-slate-600">Por apenas:</span>
              </div>
              <div className="text-right">
                <span className="font-montserrat font-black text-2xl sm:text-3xl text-emerald-700 leading-none">
                  R$ 15,99
                </span>
                <span className="text-[10px] text-slate-500 block">Pagamento único no PIX</span>
              </div>
            </div>
          </div>

          {/* Primary Upgrade CTA Button */}
          <button
            onClick={handleUpgradeClick}
            className="btn-cta-gold w-full py-4 px-5 rounded-xl sm:rounded-2xl font-montserrat font-black text-sm sm:text-base text-neutral-950 uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xl min-h-[52px] transition-transform hover:scale-102"
          >
            <Zap className="w-5 h-5 fill-neutral-950 text-neutral-950 shrink-0" />
            <span>SIM! QUERO O COMPLETO POR R$ 15,99</span>
            <ArrowRight className="w-5 h-5 text-neutral-950 shrink-0" />
          </button>

          {/* Security note */}
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 font-medium mt-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Compra 100% Segura · Acesso Imediato</span>
          </div>

          {/* Secondary Decline Link (Takes them to the R$ 9,90 basic plan) */}
          <div className="mt-4 pt-3 border-t border-slate-100">
            <button
              onClick={handleBasicClick}
              className="text-xs sm:text-sm text-slate-400 hover:text-slate-600 underline font-medium cursor-pointer transition-colors"
            >
              Não quero o acervo completo. Prefiro ficar só com o básico de 50 receitas por R$ 9,90 →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
