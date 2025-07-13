"use client";
import { Plus } from "lucide-react";

interface SolutionsShowcaseProps {
  t: {
    title: string;
    finance_title: string;
    finance_desc: string;
    finance_long_desc: string;
    accounting_title: string;
    accounting_desc: string;
    accounting_long_desc: string;
    analysis_title: string;
    analysis_desc: string;
    analysis_long_desc: string;
    reporting_title: string;
    reporting_desc: string;
    reporting_long_desc: string;
    marketing_title: string;
    marketing_desc: string;
    marketing_long_desc: string;
    support_title: string;
    support_desc: string;
    support_long_desc: string;
    trading_title: string;
    trading_desc: string;
    trading_long_desc: string;
    presentations_title: string;
    presentations_desc: string;
    presentations_long_desc: string;
    custom_solution_category: string;
    custom_solution_title: string;
    custom_solution_desc: string;
    custom_solution_cta: string;
  };
}


export const SolutionsShowcase = ({t}: SolutionsShowcaseProps) => {

  const solutions = [
    {
      image: "/images/gallery finance.png",
      category: t.finance_title,
      title: t.finance_desc,
      description: t.finance_long_desc
    },
    {
      image: "/images/gallery collaboration.png",
      category: t.accounting_title, 
      title: t.accounting_desc,
      description: t.accounting_long_desc
    },
    {
      image: "/images/gallery dashboard.png",
      category: t.analysis_title,
      title: t.analysis_desc, 
      description: t.analysis_long_desc
    },
    {
      image: "/images/gallery reporting system.png",
      category: t.reporting_title,
      title: t.reporting_desc,
      description: t.reporting_long_desc
    },
    {
      image: "/images/gallery social media.png",
      category: t.marketing_title,
      title: t.marketing_desc,
      description: t.marketing_long_desc
    },
    {
      image: "/images/gallery assistant.png",
      category: t.support_title,
      title: t.support_desc,
      description: t.support_long_desc
    },
    {
      image: "/images/gallery trading.png",
      category: t.trading_title,
      title: t.trading_desc,
      description: t.trading_long_desc
    },
    {
      image: "/images/gallery presentation.png",
      category: t.presentations_title,
      title: t.presentations_desc,
      description: t.presentations_long_desc
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="solutions" className="py-20 px-4 md:px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yoluko-navy mb-6">
            {t.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover-scale overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block bg-yoluko-teal text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {solution.category}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-yoluko-navy mb-3">
                  {solution.title}
                </h3>
                <p className="text-yoluko-slate leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}

          {/* Custom Solution Card */}
          <div className="bg-gradient-to-br from-yoluko-cream to-white rounded-xl shadow-lg hover:shadow-xl transition-all hover-scale overflow-hidden animate-fade-in border-2 border-dashed border-yoluko-teal">
            <div className="h-48 flex items-center justify-center">
              <div className="w-20 h-20 bg-yoluko-teal rounded-full flex items-center justify-center">
                <Plus className="h-10 w-10 text-white" />
              </div>
            </div>
            <div className="p-6">
              <div className="mb-3">
                <span className="inline-block bg-yoluko-orange text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {t.custom_solution_category}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-yoluko-navy mb-3">
                {t.custom_solution_title}
              </h3>
              <p className="text-yoluko-slate leading-relaxed mb-4">
                {t.custom_solution_desc}
              </p>
              <button 
                onClick={scrollToContact}
                className="text-yoluko-orange hover:text-yoluko-orange/80 font-semibold transition-colors"
              >
                {t.custom_solution_cta}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
