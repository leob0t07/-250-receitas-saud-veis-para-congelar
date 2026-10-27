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
          {/* Card 1: Batch Prep Organization */}
          <div className="bg-neutral-50 rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-slate-200 flex flex-col justify-between shadow-xs">
            <div>
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-6 border-2 border-white shadow-md">
                <picture>
                  <source srcSet="/images/meal_prep_containers.webp" type="image/webp" />
                  <img
                    src="/images/meal_prep_containers.webp"
                    alt="Marmitas saudáveis organizadas em potes herméticos com legumes frescos e frango marinado"
                    width={800}
                    height={500}
                    className="w-full h-56 sm:h-72 object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                </picture>
                <span className="absolute bottom-2.5 left-2.5 bg-slate-900/85 backdrop-blur-xs text-white text-[11px] font-montserrat font-bold py-1 px-2.5 rounded-md">
                  Organização Semanal em 1h30
                </span>
              </div>

              <h3 className="font-montserrat text-lg sm:text-2xl font-black text-slate-900 mb-2">
                A Sensação de Abrir o Freezer e Ver Sua Semana Toda Pronta
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mb-4">
                Imagine voltar cansado(a) da rua em uma quarta-feira e não precisar picar alho, nem ligar o fogão, nem gastar R$ 60 num lanche gorduroso. Você pega uma marmita, coloca 4 minutos no micro-ondas e tem um jantar caseiro delicioso e quentinho pronto na sua frente.
              </p>
            </div>

            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-semibold border-t border-slate-200 pt-3.5">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero desperdício de comida que estraga na gaveta</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Potes etiquetados com data e calorias</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Fresh-Cooked Texture and Steam */}
          <div className="bg-neutral-50 rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-slate-200 flex flex-col justify-between shadow-xs">
            <div>
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-6 border-2 border-white shadow-md">
                <picture>
                  <source srcSet="/images/gourmet_dish_healthy.webp" type="image/webp" />
                  <img
                    src="/images/gourmet_dish_healthy.webp"
                    alt="Prato saboroso de peito de frango suculento grelhado com legumes frescos recém-aquecido"
                    width={800}
                    height={500}
                    className="w-full h-56 sm:h-72 object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                </picture>
                <span className="absolute bottom-2.5 left-2.5 bg-slate-900/85 backdrop-blur-xs text-white text-[11px] font-montserrat font-bold py-1 px-2.5 rounded-md">
                  Textura Suculenta e Vapor Aromático
                </span>
              </div>

              <h3 className="font-montserrat text-lg sm:text-2xl font-black text-slate-900 mb-2">
                Ninguém Vai Acreditar Que Essa Comida Saiu do Freezer
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mb-4">
                O vapor aromático que sobe do prato, a fibra macia do frango desfiado e o crocante dos legumes e da batata rústica. Com o ponto de cozimento ajustado que ensinamos, a comida nunca resseca nem fica aguada.
              </p>
            </div>

            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-semibold border-t border-slate-200 pt-3.5">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Gorduras boas que blindam o suco da carne</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Molhos naturais com viscosidade artesanal</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
