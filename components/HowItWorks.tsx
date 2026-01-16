
import React from 'react';
import { ClipboardList, Apple, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardList className="w-12 h-12 text-emerald-600" />,
    title: "Instruções Diárias",
    description: "Saiba exatamente o que fazer assim que abrir o aplicativo."
  },
  {
    icon: <Apple className="w-12 h-12 text-red-500" />,
    title: "Avisos de Refeição",
    description: "Orientações sobre o que comer e o que evitar em cada etapa."
  },
  {
    icon: <TrendingUp className="w-12 h-12 text-emerald-500" />,
    title: "Progresso Automático",
    description: "O sistema avança sozinho, mantendo seu ritmo constante."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="py-24 bg-white border-t border-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-outfit text-emerald-600 mb-4">A solução para você:</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-xl font-medium">
            Um app que guia você dia a dia para uma vida saudável!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center p-8 bg-slate-50 rounded-[2rem] border-b-4 border-slate-100 hover:border-emerald-500 transition-all group">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold font-outfit text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
