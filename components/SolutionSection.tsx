
import React from 'react';
import { Clock, Zap, ShieldCheck, ChevronRight } from 'lucide-react';

const SolutionSection: React.FC = () => {
  return (
    <section id="solucao" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full text-emerald-400 text-sm font-semibold mb-6">
              <Clock className="w-4 h-4" />
              <span>O fim do esforço mental</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-8 leading-tight">
              O dias21 trabalha para você. <br />
              <span className="text-emerald-400 italic">Literalmente.</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                  < Zap className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-outfit mb-2">Avanço Automático</h3>
                  <p className="text-slate-400">À meia-noite, o app vira a página. Você acorda com as orientações do novo dia prontas, sem precisar clicar em nada.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                  <ShieldCheck className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-outfit mb-2">Curadoria de Especialistas</h3>
                  <p className="text-slate-400">Conteúdos validados sobre o que comer e o que evitar. Chega de pesquisar no Google e ficar confuso.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                  <ChevronRight className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-outfit mb-2">Alertas Estratégicos</h3>
                  <p className="text-slate-400">Lembretes motivadores e orientações rápidas para manter você no trilho durante o dia todo.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-emerald-500/10 rounded-[3rem] p-4 lg:p-8 border border-white/10">
              <div className="bg-slate-800 rounded-[2rem] p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold">12</div>
                    <div>
                      <h4 className="font-bold text-white">Dia 12 de 21</h4>
                      <p className="text-xs text-slate-400">Progresso: 57%</p>
                    </div>
                  </div>
                  <div className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Ativo</div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                    <span className="text-xs font-bold text-emerald-400 uppercase">Alimentação</span>
                    <p className="text-white text-sm mt-1">Hoje focamos em carboidratos complexos. Priorize aveia e batata doce no almoço.</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                    <span className="text-xs font-bold text-orange-400 uppercase">Evite Hoje</span>
                    <p className="text-white text-sm mt-1">Laticínios processados e açúcares refinados.</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                    <span className="text-xs font-bold text-blue-400 uppercase">Dica do Dia</span>
                    <p className="text-white text-sm mt-1">Tome 500ml de água logo ao acordar para despertar o metabolismo.</p>
                  </div>
                </div>

                <div className="mt-8 py-3 bg-emerald-500 rounded-xl text-center text-sm font-bold shadow-lg shadow-emerald-500/30">
                  Avança em 04h 22min
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
