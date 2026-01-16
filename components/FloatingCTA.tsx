
import React from 'react';
import { ArrowRight } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  return (
    <div className="fixed bottom-6 left-0 right-0 px-4 z-40 md:hidden animate-fade-in-up">
      <a 
        href="#precos" 
        className="w-full bg-emerald-500 text-white h-16 rounded-2xl flex items-center justify-center gap-3 font-bold text-lg shadow-2xl shadow-emerald-500/40"
      >
        Começar minha jornada
        <ArrowRight className="w-5 h-5" />
      </a>
    </div>
  );
};

export default FloatingCTA;
