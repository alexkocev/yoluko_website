import React from "react";
import { Clock, Shield, Puzzle, Brain } from "lucide-react";

interface ValuePropositionProps {
  t: {
    title: string;
    time: string;
    time_desc: string;
    no_hidden_fees: string;
    no_hidden_fees_desc: string;
    compatible: string;
    compatible_desc: string;
    ai: string;
    ai_desc: string;
  };
}

export const ValueProposition = ({ t }: ValuePropositionProps) => {

  const valuePoints = [
    {
      title: t.time,
      description: t.time_desc
    },
    {
      title: t.no_hidden_fees,
      description: t.no_hidden_fees_desc
    },
    {
      title: t.compatible,
      description: t.compatible_desc
    },
    {
      title: t.ai,
      description: t.ai_desc
    }
  ]

  const icons = [Clock, Shield, Puzzle, Brain];

  return (
    <section className="py-20 px-4 md:px-6 bg-yoluko-cream">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yoluko-navy mb-6">
            {t.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valuePoints.map((point, index) => (
            <div 
              key={index}
              className="text-center p-6 glass-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-yoluko-teal rounded-full flex items-center justify-center">
                  {React.createElement(icons[index], { className: "h-8 w-8 text-white" })}
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-yoluko-navy mb-4">
                {point.title}
              </h3>
              <p className="text-yoluko-slate leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
