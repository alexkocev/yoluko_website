"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface EverythingPossibleProps {
  t: {
    title: string;
    description: string;
    cta: string;
  };
}

export const EverythingPossible = ({t}: EverythingPossibleProps) => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-yoluko-orange/10 to-yoluko-teal/10">
      <div className="container mx-auto text-center">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-6">
            <Sparkles className="h-12 w-12 text-yoluko-orange animate-pulse" />
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-yoluko-navy mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-yoluko-slate max-w-2xl mx-auto mb-8 leading-relaxed">
            {t.description}
          </p>
          <Button 
            onClick={scrollToContact}
            className="bg-yoluko-orange hover:bg-yoluko-orange/90 text-white px-8 py-4 text-lg rounded-lg font-semibold group transition-all hover-scale"
          >
            {t.cta}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
