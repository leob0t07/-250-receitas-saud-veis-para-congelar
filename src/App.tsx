/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { HeaderUrgency } from './components/HeaderUrgency';
import { HeroSection } from './components/HeroSection';
import { MiniQuiz } from './components/MiniQuiz';
import { RoutineComparison } from './components/RoutineComparison';
import { UniqueMechanism } from './components/UniqueMechanism';
import { RecipeExplorer } from './components/RecipeExplorer';
import { GastronomyGallery } from './components/GastronomyGallery';
import { BonusStack } from './components/BonusStack';
import { PricingTable } from './components/PricingTable';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { UpgradeModal } from './components/UpgradeModal';
import { Zap, ChevronUp } from 'lucide-react';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPricing = () => {
    scrollToSection('precos');
  };

  const scrollToQuiz = () => {
    scrollToSection('quiz');
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-slate-900 font-poppins selection:bg-emerald-500 selection:text-white pb-16 lg:pb-0">
      {/* 1. Header with Urgency Banner & Clean Nav */}
      <HeaderUrgency onCtaClick={scrollToPricing} />

      <main className="flex-1">
        {/* SEÇÃO 1: Hero Section (Primeira Dobra) */}
        <HeroSection
          onCtaClick={scrollToPricing}
          onQuizClick={scrollToQuiz}
        />

        {/* SEÇÃO 2: Mini Quiz Biométrico & Diagnóstico Opcional */}
        <MiniQuiz
          onCtaClick={scrollToPricing}
          onOpenUpgradeModal={() => setIsUpgradeModalOpen(true)}
        />

        {/* Comparativo Real de Rotina (Posicionado logo após o Mini Quiz conforme solicitado) */}
        <RoutineComparison />

        {/* SEÇÃO 3: O Acervo (+250 Receitas em 6 Capítulos) & SEÇÃO 4: Amostras de Receitas */}
        <RecipeExplorer onCtaClick={scrollToPricing} />

        {/* Galeria Visual & Apelo Prático */}
        <GastronomyGallery />

        {/* SEÇÃO 5: Módulo "Alimentação para a Semana em 1h30" (Como Funciona o Método Por Dentro) */}
        <UniqueMechanism />

        {/* SEÇÃO 6: Os 3 Bônus Exclusivos (Stack de Valor) */}
        <BonusStack onCtaClick={scrollToPricing} />

        {/* SEÇÃO 7: Tabela de Checkout & Ofertas */}
        <PricingTable onOpenUpgradeModal={() => setIsUpgradeModalOpen(true)} />

        {/* SEÇÃO 8: Prova Social & Depoimentos Realistas (Estilo Redes Sociais) */}
        <TestimonialsSection onCtaClick={scrollToPricing} />

        {/* SEÇÃO 9: Garantia Blindada de 30 Dias */}
        <GuaranteeSection onCtaClick={scrollToPricing} />

        {/* SEÇÃO 10: FAQ (Perguntas Frequentes) & Rodapé de Fechamento */}
        <FaqSection onCtaClick={scrollToPricing} />
      </main>

      {/* Pop-up Exclusiva de Upgrade (Desconto no Plano Completo por R$ 15,99) */}
      <UpgradeModal
        isOpen={isUpgradeModalOpen}
        onClose={() => setIsUpgradeModalOpen(false)}
        upgradeCheckoutUrl="https://pay.cakto.com.br/3cjgha8_953826"
        basicCheckoutUrl="https://pay.cakto.com.br/xtrakpo_953780"
      />

      {/* Mobile Sticky Action Bar (Strictly <= 15% viewport height rule with Poppins/Montserrat) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 px-3.5 shadow-2xl flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-montserrat font-bold text-slate-500 leading-tight">A partir de</span>
          <span className="text-base font-montserrat font-black text-emerald-800 leading-none">R$ 9,90</span>
        </div>
        <button
          onClick={scrollToPricing}
          className="btn-cta-gold font-montserrat font-black text-xs uppercase tracking-wider py-2.5 px-4 rounded-xl text-neutral-950 flex items-center gap-1.5 shadow-md cursor-pointer shrink-0 min-h-[42px]"
        >
          <Zap className="w-3.5 h-3.5 fill-neutral-950 text-neutral-950 shrink-0" />
          <span>Quero Meu Acervo!</span>
        </button>
      </div>

      {/* Scroll to Top Floating Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Voltar ao topo"
          className="fixed bottom-20 lg:bottom-6 right-4 sm:right-5 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center shadow-lg cursor-pointer transition-all hover:scale-110"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
