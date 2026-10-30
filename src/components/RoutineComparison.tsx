import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

export const RoutineComparison: React.FC = () => {
  return (
    <section id="comparativo" className="py-12 sm:py-16 bg-white border-b border-emerald-100 font-poppins">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Side-by-Side Comparison */}
        <div className="bg-gradient-to-br from-emerald-900 to-slate-950 rounded-2xl sm:rounded-3xl p-5 sm:p-10 text-white shadow-2xl overflow-hidden relative">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-[10px] sm:text-xs uppercase font-montserrat font-extrabold tracking-widest text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-700/50">
              Comparativo Real de Rotina
            </span>
            <h3 className="font-montserrat text-xl sm:text-3xl md:text-4xl font-black text-white mt-2.5 sm:mt-3">
              Qual Dessas Duas Vidas Você Escolhe Viver?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
            {/* The Old Painful Way */}
            <div className="bg-rose-950/40 border border-rose-800/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-rose-400 font-montserrat font-black text-base sm:text-lg mb-3">
                  <XCircle className="w-5 h-5 shrink-0" />
                  <span>Rotina Sem o Acervo</span>
                </div>

                <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-rose-100/90 font-medium">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold shrink-0">✕</span>
                    <span><strong>12 a 14 horas por semana</strong> perdidas em pé na beirada do fogão toda noite.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold shrink-0">✕</span>
                    <span>Pia transbordando de panelas engorduradas e pratos para lavar todos os dias.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold shrink-0">✕</span>
                    <span>Cansaço mental de chegar do trabalho com fome e não saber o que preparar.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold shrink-0">✕</span>
                    <span>Apelar para dietas restritivas com saladas sem graça que você abandona em 3 dias.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold shrink-0">✕</span>
                    <span>Faturas de R$ 600 a R$ 1.200 em delivery, pizzas e salgados calóricos de rua.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-5 pt-3 border-t border-rose-900/50 text-rose-300 text-xs font-semibold">
                Resultado: Estresse na cozinha, peso estagnado e dinheiro desperdiçado.
              </div>
            </div>

            {/* The Smart Acervo Way */}
            <div className="bg-emerald-900/40 border border-emerald-500/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-xs shadow-lg flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-emerald-500 text-neutral-950 font-montserrat font-black text-[9px] sm:text-[10px] uppercase tracking-wider py-0.5 sm:py-1 px-2.5 sm:px-3 rounded-bl-lg">
                Vida Prática
              </div>

              <div>
                <div className="flex items-center gap-2 text-emerald-400 font-montserrat font-black text-base sm:text-lg mb-3">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span>Com o Acervo de +250 Receitas</span>
                </div>

                <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-emerald-100 font-medium">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">✓</span>
                    <span><strong>Refeições e lanches coringa</strong> prontos em 3 a 10 minutos quando bater a fome.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">✓</span>
                    <span>Você prepara na hora ou congela porções individuais em potes comuns.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">✓</span>
                    <span><strong>Comida gostosa de verdade:</strong> wraps crocantes, escondidinhos cremosos e doces fit.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">✓</span>
                    <span>Sabor e aroma de prato recém-saído da panela sem textura aguada.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">✓</span>
                    <span><strong>Economia de até R$ 740/mês</strong> aproveitando 100% de ingredientes baratos de feira.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-5 pt-3 border-t border-emerald-700/50 text-emerald-300 text-xs font-semibold">
                Resultado: Noites livres, corpo em forma e alimentação deliciosa sem estresse.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
