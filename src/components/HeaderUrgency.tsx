import React from 'react';
import { Zap } from 'lucide-react';

interface HeaderUrgencyProps {
  onCtaClick?: () => void;
}

export const HeaderUrgency: React.FC<HeaderUrgencyProps> = () => {
  return (
    <div className="bg-amber-500 text-neutral-950 font-montserrat font-bold text-xs sm:text-sm py-2.5 px-3 shadow-xs text-center flex items-center justify-center gap-2 tracking-wide">
      <Zap className="w-4 h-4 fill-neutral-950 text-neutral-950 shrink-0" />
      <span>
        Edição digital · acesso imediato após a compra
      </span>
    </div>
  );
};
