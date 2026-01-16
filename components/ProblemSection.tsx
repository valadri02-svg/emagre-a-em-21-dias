
import React from 'react';
import { XCircle, AlertTriangle } from 'lucide-react';

const ProblemSection: React.FC = () => {
  return (
    <section id="problema" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-outfit text-slate-800 mb-6 leading-tight">
              Por que é tão difícil <br />
              <span className="text-slate-500">emagrecer sozinho?</span>
            </h2>
            <div className="w-24 h-1 bg-slate-200 mb-8"></div>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              Dietas complicadas, falta de motivação e a rotina corrida acabam com seus resultados.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 gap-6">
            <div className="flex gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="shrink-0 w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center">
                <XCircle className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-outfit mb-2">Complexidade Excessiva</h3>
                <p className="text-slate-600">Planilhas e cálculos que ninguém consegue seguir por mais de 3 dias.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="shrink-0 w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-outfit mb-2">Desmotivação</h3>
                <p className="text-slate-600">Sem um guia claro, você acaba voltando aos velhos hábitos rapidamente.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
