import React from 'react';
import { Sparkles, Utensils, Heart, CheckCircle2 } from 'lucide-react';

export const GastronomyGallery: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 bg-white border-b border-emerald-100 font-poppins">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="text-xs sm:text-sm font-montserrat font-extrabold text-emerald-800 bg-emerald-100 px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-block mb-2 sm:mb-3">
            Apelo Gastronômico Real
          </span>
          <h2 className="font-montserrat text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight uppercase">
            Comida de Verdade: Suculenta, Colorida e Apetite à Primeira Vista
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-slate-600 leading-relaxed font-medium">
            Chega de marmitas acinzentadas e sem graça. Nossas técnicas preservam a clorofila dos vegetais, a suculência das carnes e o aroma fresco de prato caseiro.
          </p>
        </div>

        {/* 2-Column Visual Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* Card 1: Batch Prep Organization with Savory Snacks */}
          <div className="bg-neutral-50 rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-slate-200 flex flex-col justify-between shadow-xs">
            <div>
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-6 border-2 border-white shadow-md">
                <img
                  src="/images/ugc_lanches_freezer.jpg"
                  alt="Freezer organizado com wraps caseiros, potes de bauru fit e tortinhas de frango com etiquetas"
                  width={800}
                  height={500}
                  className="w-full h-56 sm:h-72 object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-2.5 left-2.5 bg-slate-900/85 backdrop-blur-xs text-white text-[11px] font-montserrat font-bold py-1 px-2.5 rounded-md">
                  Lanches e Refeições Sempre Prontos
                </span>
              </div>

              <h3 className="font-montserrat text-lg sm:text-2xl font-black text-slate-900 mb-2">
                A Sensação de Abrir o Freezer e Ter Bauru, Wraps e Tortinhas Prontos
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mb-4">
                Imagine voltar com fome do trabalho e não precisar picar alho, nem ligar o fogão, nem gastar R$ 60 no iFood. Você pega um wrap ou fatia de bauru fit, coloca 3 minutos na airfryer ou micro-ondas e tem um lanche quentinho, crocante e suculento com queijo derretido.
              </p>
            </div>

            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-semibold border-t border-slate-200 pt-3.5">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero desperdício de comida que estraga na gaveta</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Potes e wraps etiquetados prontos para aquecer</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Fresh-Cooked Comfort Food, Cheese & Crispiness */}
          <div className="bg-neutral-50 rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-slate-200 flex flex-col justify-between shadow-xs">
            <div>
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-6 border-2 border-white shadow-md">
                <img
                  src="/images/ugc_bauru_fit.jpg"
                  alt="Bauru de forno fit suculento com queijo derretido puxando e tomates frescos recém-assado"
                  width={800}
                  height={500}
                  className="w-full h-56 sm:h-72 object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-2.5 left-2.5 bg-slate-900/85 backdrop-blur-xs text-white text-[11px] font-montserrat font-bold py-1 px-2.5 rounded-md">
                  Queijo Puxa-Puxa e Sabor de Feito na Hora
                </span>
              </div>

              <h3 className="font-montserrat text-lg sm:text-2xl font-black text-slate-900 mb-2">
                Comida Gostosa de Verdade: Nada Que Se Pareça Com Salada Sem Graça
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mb-4">
                O queijo puxa-puxa derretendo, o tempero caseiro aromático e a casquinha dourada do lanche. Ninguém na sua casa vai acreditar que saiu do freezer: você mata a vontade de comer um lanche gostoso sem sair do foco saudável.
              </p>
            </div>

            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-semibold border-t border-slate-200 pt-3.5">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Proteínas suculentas que não ressecam no congelador</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Recheios cremosos de verdade sem conservantes industriais</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
