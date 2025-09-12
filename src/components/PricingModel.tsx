"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, Check, Star, ArrowRight } from "lucide-react";

interface PricingModelProps {
  t: {
    title: string;
    traditional_approach: string;
    traditional_feature1: string;
    traditional_feature2: string;
    traditional_feature3: string;
    traditional_feature4: string;
    traditional_feature5: string;
    yoluko_approach: string;
    yoluko_recommended: string;
    yoluko_feature1: string;
    yoluko_feature2: string;
    yoluko_feature3: string;
    yoluko_feature4: string;
    yoluko_feature5: string;
    cta: string;
  };
}

export const PricingModel = ({t}: PricingModelProps) => {

  const traditionalFeatures = [
    t.traditional_feature1,
    t.traditional_feature2,
    t.traditional_feature3,
    t.traditional_feature4,
    t.traditional_feature5
  ];
  
  const yolukoFeatures = [
    t.yoluko_feature1,
    t.yoluko_feature2,
    t.yoluko_feature3,
    t.yoluko_feature4,
    t.yoluko_feature5
  ];
  
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-20 px-4 md:px-6 bg-yoluko-cream">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yoluko-navy mb-6">
            {t.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Traditional Approach */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg animate-fade-in">
            <h3 className="text-xl sm:text-2xl font-bold text-yoluko-navy mb-6 text-center">
              {t.traditional_approach}
            </h3>
            <div className="space-y-4">
              {traditionalFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                  <span className="text-yoluko-slate">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Yoluko Approach */}
          <div className="bg-gradient-to-br from-white to-yoluko-cream rounded-xl p-6 md:p-8 shadow-lg border-2 border-yoluko-orange animate-fade-in relative">
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yoluko-orange text-white px-4 py-1 text-sm font-semibold">
              <Star className="h-4 w-4 mr-1" />
              {t.yoluko_recommended}
            </Badge>
            <h3 className="text-xl sm:text-2xl font-bold text-yoluko-navy mb-6 text-center mt-2">
              {t.yoluko_approach}
            </h3>
            <div className="space-y-4">
              {yolukoFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-yoluko-slate font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center animate-fade-in">
          <Button 
            onClick={scrollToContact}
            className="bg-yoluko-orange hover:bg-yoluko-orange/90 text-white px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg rounded-lg font-semibold group transition-all hover-scale"
          >
            {t.cta}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
