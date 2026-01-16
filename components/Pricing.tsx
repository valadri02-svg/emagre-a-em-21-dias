
import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="precos" className="py-16 bg-slate-50 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border-4 border-emerald-500 shadow-2xl">
          <h2 className="text-3xl font-black font-outfit text-slate-900 mb-2">OFERTA ÚNICA</h2>
          <p className="text-slate-500 font-bold mb-8 uppercase tracking-widest">Acesso vitalício aos 21 dias</p>

          <div className="flex items-center justify-center gap-1 mb-8">
            <span className="text-slate-400 text-2xl font-bold">R$</span>
            <span className="text-7xl font-black font-outfit text-emerald-500">9,90</span>
            <span className="text-slate-400 text-lg font-bold">Taxa única</span>
          </div>

          <div className="bg-emerald-50 py-4 px-6 rounded-2xl mb-8 inline-block">
            <p className="text-emerald-700 font-bold text-lg">Menos que o preço de um café para mudar sua vida.</p>
          </div>

          <a 
            href="#" 
            className="w-full py-6 bg-emerald-500 text-white rounded-2xl font-black text-2xl hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-200 flex items-center justify-center gap-3 group"
          >
            GARANTIR MINHA VAGA
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              <span className="text-sm font-bold">Pagamento Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              <span className="text-sm font-bold">Acesso Instantâneo</span>
            </div>
          </div>
        </div>
        
        <p className="mt-8 text-slate-400 text-sm font-medium italic">
          *Sem mensalidades. Sem pegadinhas. Pague uma vez, use para sempre.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
