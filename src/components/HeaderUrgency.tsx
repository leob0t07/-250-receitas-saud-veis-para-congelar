import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';

interface HeaderUrgencyProps {
  onCtaClick?: () => void;
}

export const HeaderUrgency: React.FC<HeaderUrgencyProps> = () => {
  const [todayFormatted, setTodayFormatted] = useState<string>(() => {
    try {
      const now = new Date();
      const day = now.getDate();
      const month = now.toLocaleDateString('pt-BR', { month: 'long' });
      return `${day} de ${month}`;
    } catch {
      return '';
    }
  });

  useEffect(() => {
    try {
      const now = new Date();
      const day = now.getDate();
      const month = now.toLocaleDateString('pt-BR', { month: 'long' });
      setTodayFormatted(`${day} de ${month}`);
    } catch {
      // fallback
    }
  }, []);

  return (
    <div className="bg-amber-500 text-neutral-950 font-montserrat font-black text-xs sm:text-sm py-2.5 px-3 shadow-xs text-center flex items-center justify-center gap-2 tracking-wide">
      <Zap className="w-4 h-4 fill-neutral-950 text-neutral-950 shrink-0" />
      <span className="uppercase">
        Condição Especial hoje {todayFormatted ? `(${todayFormatted})` : ''}
      </span>
    </div>
  );
};
