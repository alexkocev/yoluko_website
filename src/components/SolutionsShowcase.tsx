"use client";
import { Plus } from "lucide-react";
import Image from "next/image";

interface SolutionsShowcaseProps {
  t: {
    title: string;
    solutions: {
      category: string;
      title: string;
      description: string;
    }[];
    custom_solution_category: string;
    custom_solution_title: string;
    custom_solution_desc: string;
    custom_solution_cta: string;
  };
}


export const SolutionsShowcase = ({t}: SolutionsShowcaseProps) => {

  const images = [
    "/images/gallery dashboard.png",
    "/images/gallery reporting system.png",
    "/images/gallery collaboration.png",
    "/images/gallery finance.png",
    "/images/gallery assistant.png",
    "/images/gallery social media.png",
    "/images/gallery presentation.png",
    "/images/gallery trading.png"
  ];

  const solutions = t.solutions.map((solution, index) => ({
    ...solution,
    image: images[index]
  }));

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
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover"
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
