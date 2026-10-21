import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/faq';
import { ChevronDown, ShieldCheck, Zap } from 'lucide-react';

interface FaqSectionProps {
  onCtaClick: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onCtaClick }) => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleAccordion = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <>
      <section id="faq" className="py-12 sm:py-20 bg-white border-b border-emerald-100 font-poppins">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="text-xs sm:text-sm font-montserrat font-extrabold text-emerald-800 bg-emerald-100 px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-block mb-2 sm:mb-3">
              Tire Suas Dúvidas
            </span>
            <h2 className="font-montserrat text-2xl sm:text-4xl font-black text-slate-900 leading-tight uppercase">
              Perguntas Frequentes
            </h2>
            <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-slate-600 font-medium">
              Confira as respostas para as dúvidas mais comuns de novos alunos:
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-3 mb-10 sm:mb-14">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="border border-slate-200 rounded-xl sm:rounded-2xl overflow-hidden transition-colors shadow-2xs"
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 bg-white hover:bg-neutral-50 cursor-pointer transition-colors min-h-[48px]"
                  >
                    <span className="font-montserrat font-extrabold text-xs sm:text-base text-slate-900 leading-snug">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-emerald-600 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium bg-neutral-50/50 border-t border-slate-100 font-poppins">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Final Callout Before Footer */}
          <div className="bg-gradient-to-r from-emerald-800 to-emerald-950 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-10 text-center shadow-xl">
            <h3 className="font-montserrat text-xl sm:text-3xl font-black uppercase tracking-tight">
              Ainda Está Com Dúvida se o Método Funciona Para Você?
            </h3>
            <p className="mt-2 text-xs sm:text-base text-emerald-100 max-w-xl mx-auto font-medium font-poppins">
              Lembre-se: com nossa garantia de 30 dias, o único risco é você continuar perdendo horas no fogão ou gastando centenas de reais com delivery.
            </p>
            <div className="mt-5 sm:mt-6">
              <button
                onClick={onCtaClick}
                className="btn-cta-gold w-full sm:w-auto font-montserrat font-black text-sm sm:text-lg text-neutral-950 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl uppercase tracking-wider inline-flex items-center justify-center gap-2 cursor-pointer shadow-lg min-h-[50px]"
              >
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 fill-neutral-950 text-neutral-950 shrink-0" />
                <span>Sim! Quero Começar a Partir de R$ 9,90</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Footer */}
      <footer className="bg-emerald-800 text-white pt-10 pb-8 border-t-4 border-amber-400 font-poppins">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Main Footer Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-emerald-700/60 text-center sm:text-left">
            {/* Brand / Logo */}
            <div className="max-w-md">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-white text-emerald-800 flex items-center justify-center font-montserrat font-black text-sm shadow-xs">
                  +250
                </div>
                <span className="font-montserrat text-lg sm:text-xl font-black tracking-tight text-white uppercase">
                  Receitas Saudáveis
                </span>
              </div>
              <p className="text-xs text-emerald-100 leading-relaxed font-medium">
                O maior acervo de receitas saudáveis, práticas e deliciosas preparadas especificamente para conservação ativa no freezer.
              </p>
            </div>

            {/* Security Seals */}
            <div className="flex flex-col items-center sm:items-end gap-2">
              <span className="text-[10px] sm:text-[11px] font-montserrat font-bold text-emerald-200 uppercase tracking-wider">
                Certificados de Segurança
              </span>
              <div className="flex items-center gap-2.5">
                <div className="bg-slate-900 text-white text-[9px] sm:text-[10px] font-montserrat font-black py-1.5 px-2.5 rounded-md uppercase tracking-wider flex items-center gap-1 border border-slate-700 shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>SSL Certificado</span>
                </div>
                <div className="bg-rose-600 text-white text-[10px] sm:text-[11px] font-montserrat font-black py-1.5 px-2.5 rounded-md uppercase tracking-wider flex items-center gap-1 border border-rose-500 shadow-sm">
                  <span>e-bit</span>
                  <span className="text-[9px] bg-rose-800 px-1 rounded font-bold">Ótima</span>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Disclaimers & Copyright */}
          <div className="pt-6 text-center text-xs text-emerald-200/80 space-y-2.5 font-medium">
            <p className="max-w-4xl mx-auto leading-relaxed text-[10px] sm:text-[11px]">
              <strong>Aviso Legal Importante:</strong> As informações contidas neste acervo têm finalidade exclusivamente culinária e educacional prática. Nenhuma receita substitui a orientação de um profissional de saúde. Os resultados podem variar de acordo com o organismo de cada indivíduo.
            </p>
            <div className="flex items-center justify-center gap-3 text-xs font-semibold text-white/90 pt-1">
              <a href="#" className="hover:underline">Termos de Uso</a>
              <span>·</span>
              <a href="#" className="hover:underline">Políticas de Privacidade</a>
              <span>·</span>
              <a href="#" className="hover:underline">Suporte</a>
            </div>
            <p className="text-[10px] text-emerald-300/60 pt-1 font-montserrat">
              © {new Date().getFullYear()} +250 Receitas Saudáveis para Congelar. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
