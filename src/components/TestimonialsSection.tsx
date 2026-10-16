import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/testimonials';
import { ThumbsUp, MessageSquare, ChevronLeft, ChevronRight, Zap, Star } from 'lucide-react';

interface TestimonialsSectionProps {
  onCtaClick: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onCtaClick }) => {
  const [mobileIndex, setMobileIndex] = useState<number>(0);

  const prevMobile = () => {
    setMobileIndex(prev => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextMobile = () => {
    setMobileIndex(prev => (prev >= TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="depoimentos" className="py-12 sm:py-20 bg-white border-b border-emerald-100 relative font-poppins">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="flex items-center justify-center gap-1 text-amber-500 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <h2 className="font-montserrat text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight uppercase">
            A <span className="text-amber-500">Melhor Opção</span> Para Quem Quer Praticidade e Saúde Sem Gastar Horas Na Cozinha
          </h2>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-slate-600 font-medium">
            Fotos reais enviadas por quem colocou o método em prática com potes caseiros comuns:
          </p>
        </div>

        {/* MOBILE VIEW (Carousel with arrows & dots - 1 card per slide, super clear & aligned) */}
        <div className="block lg:hidden">
          <div className="relative">
            {/* Arrow Controls on Mobile */}
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-xs font-montserrat font-bold text-slate-500">
                Depoimento {mobileIndex + 1} de {TESTIMONIALS.length}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={prevMobile}
                  aria-label="Depoimento Anterior"
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-emerald-100 text-slate-700 hover:text-emerald-800 flex items-center justify-center cursor-pointer transition-colors shadow-2xs"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextMobile}
                  aria-label="Próximo Depoimento"
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-emerald-100 text-slate-700 hover:text-emerald-800 flex items-center justify-center cursor-pointer transition-colors shadow-2xs"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Current Active Card on Mobile */}
            {(() => {
              const item = TESTIMONIALS[mobileIndex];
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border-2 border-slate-200 shadow-md overflow-hidden flex flex-col justify-between"
                >
                  {/* Social Header */}
                  <div className="p-3.5 border-b border-slate-100 flex items-center gap-3">
                    <img
                      src={item.avatarUrl}
                      alt={item.name}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover border border-emerald-500 shrink-0"
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                    />
                    <div className="text-left">
                      <h4 className="font-montserrat text-sm font-black text-slate-900 leading-tight">
                        {item.name}
                      </h4>
                      <span className="text-[10px] text-slate-500 font-medium block">
                        {item.city}, {item.state} · {item.timeAgo}
                      </span>
                    </div>
                  </div>

                  {/* Body & Homemade Marmita Photo */}
                  <div className="p-4 flex-1 flex flex-col justify-between text-left">
                    <p className="text-xs text-slate-700 leading-relaxed font-medium mb-3">
                      "{item.content}"
                    </p>

                    {item.resultImage && (
                      <div className="relative rounded-xl overflow-hidden mb-3 border border-slate-200 bg-slate-100 shadow-2xs">
                        <img
                          src={item.resultImage}
                          alt={`Marmitas caseiras de ${item.name}`}
                          width={600}
                          height={400}
                          className="w-full h-52 object-cover"
                          loading="lazy"
                          decoding="async"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 bg-emerald-600 text-white font-montserrat font-black text-[10px] py-1 px-3.5 rounded-full shadow-lg border-2 border-white uppercase tracking-wider flex items-center gap-1 whitespace-nowrap">
                          <span>{item.badgeText}</span>
                        </div>
                      </div>
                    )}

                    {/* Footer */}
                    <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-semibold">
                      <span className="flex items-center gap-1.5 text-blue-600">
                        <ThumbsUp className="w-3.5 h-3.5 fill-blue-600" />
                        <span>{item.likes} curtidas</span>
                      </span>
                      <span className="flex items-center gap-1 text-slate-500">
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Foto Real Verificada</span>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Dots Pagination */}
            <div className="flex items-center justify-center gap-1.5 mt-4">
              {TESTIMONIALS.map((_, dot) => (
                <button
                  key={dot}
                  onClick={() => setMobileIndex(dot)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    mobileIndex === dot ? 'bg-emerald-600 w-6' : 'bg-slate-300 w-2'
                  }`}
                  aria-label={`Depoimento ${dot + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* DESKTOP VIEW (Grid of 6 cards in 3 columns) */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden flex flex-col justify-between hover:border-emerald-300 transition-all text-left"
            >
              {/* Social Card Header */}
              <div className="p-4 border-b border-slate-100 flex items-center gap-3">
                <img
                  src={item.avatarUrl}
                  alt={item.name}
                  width={44}
                  height={44}
                  className="w-11 h-11 rounded-full object-cover border-2 border-emerald-500 shadow-xs shrink-0"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-montserrat text-sm font-black text-slate-900 leading-tight">
                    {item.name}
                  </h4>
                  <span className="text-[11px] text-slate-500 font-medium block">
                    {item.city}, {item.state} · {item.timeAgo}
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium mb-3.5">
                  "{item.content}"
                </p>

                {/* Homemade Meal Prep Image with Badge */}
                {item.resultImage && (
                  <div className="relative rounded-xl overflow-hidden mb-3.5 border border-slate-200 bg-slate-50">
                    <img
                      src={item.resultImage}
                      alt={`Marmitas caseiras de ${item.name}`}
                      width={600}
                      height={400}
                      className="w-full h-52 object-cover"
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 bg-emerald-600 text-white font-montserrat font-black text-xs py-1.5 px-4 rounded-full shadow-lg border-2 border-white uppercase tracking-wider flex items-center gap-1 whitespace-nowrap">
                      <span>{item.badgeText}</span>
                    </div>
                  </div>
                )}

                {/* Social Action Bar */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-semibold">
                  <span className="flex items-center gap-1.5 text-blue-600">
                    <ThumbsUp className="w-3.5 h-3.5 fill-blue-600" />
                    <span>{item.likes} curtidas</span>
                  </span>
                  <span className="flex items-center gap-1 text-slate-500">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Foto Real Verificada</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mid-Page Golden CTA */}
        <div className="mt-10 sm:mt-14 max-w-md mx-auto text-center px-1">
          <button
            onClick={onCtaClick}
            className="btn-cta-gold w-full py-4 sm:py-5 px-5 sm:px-6 rounded-xl sm:rounded-2xl font-montserrat font-black text-lg sm:text-2xl text-neutral-950 uppercase tracking-wider flex items-center justify-center gap-2.5 sm:gap-3 cursor-pointer shadow-xl min-h-[54px]"
          >
            <Zap className="w-5 h-5 sm:w-6 sm:h-6 fill-neutral-950 text-neutral-950 shrink-0" />
            <span>Quero Experimentar!</span>
          </button>
          <span className="text-xs text-slate-500 font-medium mt-2 block">
            Junte-se a mais de 4.800 pessoas com refeições práticas na semana
          </span>
        </div>
      </div>
    </section>
  );
};
