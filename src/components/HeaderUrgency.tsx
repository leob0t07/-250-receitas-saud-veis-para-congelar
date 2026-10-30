import React from 'react';
import { Zap } from 'lucide-react';

interface HeaderUrgencyProps {
  onCtaClick?: () => void;
}

export const HeaderUrgency: React.FC<HeaderUrgencyProps> = () => {
  return (
    <div className="bg-amber-400 text-neutral-950 font-montserrat font-bold text-xs sm:text-sm py-2 px-3 shadow-xs text-center flex items-center justify-center gap-2 tracking-wide">
      <span>
        🔥 Receitas práticas e fáceis, receba na hora!
      </span>
    </div>
  );
};
