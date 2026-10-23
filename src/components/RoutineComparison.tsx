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
                  <span>Cozinhar Todo Santo Dia</span>
                </div>

                <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-rose-100/90 font-medium">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold shrink-0">✕</span>
                    <span><strong>12 a 14 horas por semana</strong> perdidas em pé na beirada do fogão.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold shrink-0">✕</span>
                    <span>Pia transbordando de panelas engorduradas e pratos para lavar todas as noites.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold shrink-0">✕</span>
                    <span>Desperdício constante de legumes que apodrecem na gaveta da geladeira.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold shrink-0">✕</span>
                    <span>Cansaço mental de chegar do trabalho e ainda pensar no que fazer.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold shrink-0">✕</span>
                    <span>Faturas de R$ 600 a R$ 1.200 em iFood, pizzas e lanches por fome e pressa.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-5 pt-3 border-t border-rose-900/50 text-rose-300 text-xs font-semibold">
                Resultado: Estresse diário, ganho de peso e dinheiro jogado no lixo.
              </div>
            </div>

            {/* The Smart 1x a Week Way */}
            <div className="bg-emerald-900/40 border border-emerald-500/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-xs shadow-lg flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-emerald-500 text-neutral-950 font-montserrat font-black text-[9px] sm:text-[10px] uppercase tracking-wider py-0.5 sm:py-1 px-2.5 sm:px-3 rounded-bl-lg">
                Recomendado
              </div>

              <div>
                <div className="flex items-center gap-2 text-emerald-400 font-montserrat font-black text-base sm:text-lg mb-3">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span>Método 1x Por Semana (1h30)</span>
                </div>

                <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-emerald-100 font-medium">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">✓</span>
                    <span><strong>Apenas 1h30 no domingo</strong> ouvindo sua música favorita ou podcast.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">✓</span>
                    <span>Você lava a louça <strong>uma única vez na semana</strong> e deixa a pia limpa.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">✓</span>
                    <span>Almoço e jantar etiquetados, prontos para aquecer em <strong>3 minutos</strong>.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">✓</span>
                    <span>Textura, vapor aromático e suculência de comida recém-saída da panela.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">✓</span>
                    <span><strong>Economia média de R$ 740/mês</strong> aproveitando 100% das compras.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-5 pt-3 border-t border-emerald-700/50 text-emerald-300 text-xs font-semibold">
                Resultado: Noites livres, corpo em forma e tranquilidade mental.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
