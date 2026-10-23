import React from 'react';
import { ChefHat, Flame, Timer, Snowflake, Clock } from 'lucide-react';

export const UniqueMechanism: React.FC = () => {
  const steps = [
    {
      number: 'Etapa 1',
      time: '15 min',
      title: 'O Estoque de Temperos Base',
      description:
        'Prepare os cubos de tempero caseiro e a base de alho/cebola que dão sabor de comida fresca a qualquer prato, sujando apenas o liquidificador.',
      icon: ChefHat,
      color: 'emerald',
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-700',
      iconBg: 'bg-emerald-100',
      borderColor: 'border-emerald-200',
    },
    {
      number: 'Etapa 2',
      time: '45 min',
      title: 'As Proteínas Coringa',
      description:
        'Aprenda o frango desfiado macio e a carne moída molhadinha com molho de tomate que viram panquecas, escondidinhos e fricassés na mesma semana.',
      icon: Flame,
      color: 'amber',
      bgColor: 'bg-amber-50/50',
      iconColor: 'text-amber-700',
      iconBg: 'bg-amber-100',
      borderColor: 'border-amber-200',
    },
    {
      number: 'Etapa 3',
      time: '15 min',
      title: 'A Técnica do Ponto Certo',
      description:
        'O segredo simples para os legumes ficarem crocantes e o purê ultra cremoso sem nunca ficarem empapados ou com "gosto de geladeira".',
      icon: Timer,
      color: 'blue',
      bgColor: 'bg-blue-50/50',
      iconColor: 'text-blue-700',
      iconBg: 'bg-blue-100',
      borderColor: 'border-blue-200',
    },
    {
      number: 'Etapa 4',
      time: '15 min',
      title: 'O Freezer Organizado',
      description:
        'Coloque em potes normais de plástico ou vidro, etiquete com fita crepe e aproveite suas noites totalmente livres de segunda a domingo.',
      icon: Snowflake,
      color: 'indigo',
      bgColor: 'bg-indigo-50/50',
      iconColor: 'text-indigo-700',
      iconBg: 'bg-indigo-100',
      borderColor: 'border-indigo-200',
    },
  ];

  return (
    <section id="metodo" className="py-12 sm:py-20 bg-white border-b border-emerald-100 font-poppins">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs sm:text-sm font-montserrat font-extrabold text-emerald-800 bg-emerald-100 px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-block mb-2 sm:mb-3">
            Como Funciona o Método Por Dentro
          </span>
          <h2 className="font-montserrat text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight uppercase">
            Tão Fácil Que Parece Trapaça: As 4 Etapas do Seu Método de Organização
          </h2>
        </div>

        {/* 4 Steps Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-neutral-50 rounded-2xl p-5 sm:p-6 border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all flex flex-col justify-between relative group"
              >
                <div>
                  {/* Step Header: Badge & Time */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-montserrat text-xs font-black uppercase text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-lg">
                      {step.number}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 bg-white border border-slate-200 px-2.5 py-1 rounded-lg">
                      <Clock className="w-3.5 h-3.5 text-emerald-600" />
                      {step.time}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${step.iconBg} ${step.iconColor} flex items-center justify-center mb-4 font-black transition-transform group-hover:scale-105`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="font-montserrat text-base sm:text-lg font-black text-slate-900 mb-2 leading-snug">
                    {step.title} <span className="text-slate-500 font-bold text-sm">({step.time})</span>
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>

                {/* Sub-bar indicator */}
                <div className="mt-5 pt-3 border-t border-slate-200/70 text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                  <span>Passo {idx + 1} de 4</span>
                  <span className="text-emerald-600 font-extrabold">{step.time}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
