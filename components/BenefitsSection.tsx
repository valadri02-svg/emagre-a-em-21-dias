
import React from 'react';
import { Target, Zap, Smartphone, Calendar, ShieldCheck, Heart } from 'lucide-react';

const benefits = [
  {
    icon: <Target className="w-6 h-6 text-emerald-500" />,
    title: "Objetividade Máxima",
    description: "Sem enrolação. Você recebe apenas o que precisa saber para aquele dia específico."
  },
  {
    icon: <Zap className="w-6 h-6 text-emerald-500" />,
    title: "Consistência Sem Esforço",
    description: "O sistema de avanço automático cria um ritmo psicológico de progresso constante."
  },
  {
    icon: <Calendar className="w-6 h-6 text-emerald-500" />,
    title: "Ciclos de 21 Dias",
    description: "O tempo perfeito para o cérebro consolidar novos hábitos saudáveis."
  },
  {
    icon: <Heart className="w-6 h-6 text-emerald-500" />,
    title: "Saúde sem Sofrimento",
    description: "Orientações baseadas em comida de verdade e rotinas simples de implementar."
  },
  {
    icon: <Smartphone className="w-6 h-6 text-emerald-500" />,
    title: "Interface Clean",
    description: "Um app leve, bonito e motivador. Sem anúncios, sem poluição visual."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
    title: "Progresso Real",
    description: "Veja sua evolução dia após dia através de indicadores visuais simples."
  }
];

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-outfit text-slate-900 mb-4">Tudo o que você precisa para vencer</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Desenhado para pessoas comuns que buscam resultados extraordinários através da simplicidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="bg-emerald-50 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold font-outfit text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
