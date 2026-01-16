
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: "O app é pago?",
    a: "Sim, o dias21 é um serviço premium de baixo custo para garantir que possamos entregar o melhor conteúdo e suporte sem anúncios."
  },
  {
    q: "Preciso baixar na App Store/Play Store?",
    a: "O dias21 funciona como um Web App otimizado. Você recebe um link exclusivo e pode adicionar um ícone na tela do seu celular para acesso instantâneo, sem ocupar espaço na memória."
  },
  {
    q: "E se eu perder um dia?",
    a: "O app avança automaticamente à meia-noite para manter o ritmo. Se você perder um dia, o foco deve ser o dia atual. O objetivo é a consistência, não a perfeição."
  },
  {
    q: "É uma dieta restritiva?",
    a: "Não. É uma reeducação baseada em escolhas inteligentes. Ensinamos o que priorizar e o que evitar de forma simples."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold font-outfit text-slate-900 mb-12 text-center">Dúvidas Frequentes</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-900">{faq.q}</span>
                {openIndex === i ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
              </button>
              {openIndex === i && (
                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
