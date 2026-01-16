
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Audience: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] p-8 lg:p-16 border border-slate-100 shadow-sm flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold font-outfit text-slate-900 mb-8">Para quem é o dias21?</h2>
            
            <div className="space-y-6">
              {[
                "Para quem quer emagrecer com saúde sem dietas loucas.",
                "Para quem tem a rotina corrida e não pode perder tempo planejando.",
                "Para quem já tentou vários métodos e desistiu no meio do caminho.",
                "Para quem busca disciplina e clareza nas escolhas alimentares.",
                "Para quem quer um app simples, direto e sem distrações."
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-slate-700 text-lg leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <img src="https://picsum.photos/seed/person1/400/400" className="rounded-3xl shadow-lg rotate-[-2deg] hover:rotate-0 transition-transform duration-500" alt="Usuário do dias21" />
            <img src="https://picsum.photos/seed/person2/400/400" className="rounded-3xl shadow-lg translate-y-8 rotate-[2deg] hover:rotate-0 transition-transform duration-500" alt="Usuário do dias21" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audience;
