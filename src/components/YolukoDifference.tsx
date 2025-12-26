"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface YolukoDifferenceProps {
  t: {
    title: string;
    description: string;
    cta: string;
  };
}

export const YolukoDifference = ({t}: YolukoDifferenceProps) => {
  return (
    <section className="py-20 px-4 md:px-6 bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="animate-fade-in">
            <div className="relative">
              <img 
                src="/images/section_relax.jpeg"
                alt="Relaxed business owner"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yoluko-navy leading-tight">
                {t.title}
              </h2>
              <p className="text-lg sm:text-xl text-yoluko-slate leading-relaxed">
                {t.description}
              </p>
            </div>
            
            <Button 
              onClick={() => window.open("https://calendly.com/alexandre-yoluko/1to1", "_blank")}
              className="bg-yoluko-orange hover:bg-yoluko-orange/90 text-white px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg rounded-lg font-semibold group transition-all hover-scale"
            >
              {t.cta}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
