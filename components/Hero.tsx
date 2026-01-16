
import React from 'react';
import { ArrowRight, CheckCircle2, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-outfit text-slate-900 mb-4 leading-tight tracking-tight">
              Emagreça em 21 dias com <br />
              <span className="text-emerald-500">foco 100% automático.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-8 font-medium">
              Um guia simples no seu celular que te diz exatamente o que comer e o que evitar. Sem complicação.
            </p>

            <div className="space-y-4 mb-10 inline-block text-left w-full sm:w-auto">
              {[
                "Avanço Automático: O app muda de dia à meia-noite",
                "Lista Direta: Saiba o que comer e o que não comer",
                "Zero Esforço Mental: Apenas abra e siga o guia"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                  <span className="text-lg font-bold text-slate-800 font-outfit">{text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <a href="#precos" className="w-full sm:w-auto text-center px-10 py-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl font-black text-xl uppercase tracking-wider hover:scale-105 transition-all shadow-2xl shadow-purple-200 group">
                QUERO COMEÇAR AGORA
              </a>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-400 text-sm font-bold uppercase tracking-widest">
                <Zap className="w-4 h-4 fill-amber-400 text-amber-400" />
                Acesso imediato no seu e-mail
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-slate-50">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800&h=1000" 
                alt="Resultado Dias21" 
                className="w-full h-auto object-cover max-h-[500px] lg:max-h-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold">21</div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Hoje: Dia 12</p>
                    <p className="text-slate-900 font-black">Foco em Proteínas e Água</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
