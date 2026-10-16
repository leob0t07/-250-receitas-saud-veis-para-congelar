import React from 'react';
import { Award, ShieldCheck, CheckCircle2, Zap } from 'lucide-react';

interface GuaranteeSectionProps {
  onCtaClick: () => void;
}

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ onCtaClick }) => {
  return (
    <section id="garantia" className="py-12 sm:py-20 bg-gradient-to-b from-neutral-50 via-white to-neutral-50 border-b border-emerald-100 font-poppins">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-12 border-2 border-amber-300 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-6 sm:gap-8">
          {/* Golden Seal Badge */}
          <div className="shrink-0 flex flex-col items-center justify-center">
            <div className="w-28 h-28 sm:w-40 sm:h-40 rounded-full bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-200 p-1.5 sm:p-2 shadow-xl flex items-center justify-center">
              <div className="w-full h-full rounded-full border-2 border-dashed border-amber-900/40 bg-amber-50 flex flex-col items-center justify-center text-center p-2 sm:p-3">
                <Award className="w-7 h-7 sm:w-10 sm:h-10 text-amber-700 mb-0.5 sm:mb-1" />
                <span className="font-montserrat text-2xl sm:text-3xl font-black text-amber-950 leading-none">30</span>
                <span className="font-montserrat text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-amber-900 leading-tight">
                  Dias de Garantia
                </span>
                <span className="text-[8px] sm:text-[9px] font-bold text-amber-800 uppercase tracking-widest mt-0.5">
                  100% Risco Zero
                </span>
              </div>
            </div>
          </div>

          {/* Copy Text */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-montserrat font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-md mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
              <span>Garantia Blindada Incondicional</span>
            </div>

            <h3 className="font-montserrat text-xl sm:text-3xl font-black text-slate-900 leading-tight uppercase">
              Teste as Receitas por 30 Dias: Se Não Amar o Sabor, Devolvemos 100% do Seu Dinheiro
            </h3>

            <p className="mt-3 text-xs sm:text-base text-slate-600 leading-relaxed font-medium">
              Eu não quero o seu dinheiro se você não estiver absolutamente apaixonado(a) pela praticidade e pelo sabor das receitas no seu dia a dia.
            </p>

            <p className="mt-2 text-xs sm:text-base text-slate-600 leading-relaxed font-medium">
              Você baixa o material hoje e prepara quantas receitas quiser por <strong>4 semanas completas</strong>. Se achar que a comida ficou seca ou não gostar dos temperos, basta um único e-mail ou mensagem no WhatsApp.
            </p>

            <div className="mt-4 text-xs sm:text-sm font-semibold text-slate-800 bg-amber-50 border border-amber-200/80 p-3 rounded-xl flex items-center gap-2 text-left">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Reembolso imediato e integral de 100% do valor pago. Sem letras miúdas.</span>
            </div>

            <div className="mt-5">
              <button
                onClick={onCtaClick}
                className="btn-cta-gold w-full sm:w-auto font-montserrat font-black text-xs sm:text-base text-neutral-950 px-6 py-3.5 rounded-xl uppercase tracking-wider inline-flex items-center justify-center gap-2 cursor-pointer shadow-md min-h-[48px]"
              >
                <Zap className="w-4 h-4 fill-neutral-950 text-neutral-950 shrink-0" />
                <span>Experimentar Sem Risco Por 30 Dias</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
