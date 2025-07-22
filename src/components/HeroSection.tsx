"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Lottie from "lottie-react";
import React, { useState } from "react";
import animationData from "./Animation_HeroSection.json";

interface HeroSectionProps {
  t: {
    title: string;
    subtitle: string;
    cta: string;
  };
}

const LottieAnimation = () => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <img
        src="/images/Hero section transparent__.png"
        alt="Fallback"
        className="w-full max-w-md h-auto"
      />
    );
  }

  return (
    <Lottie
      animationData={animationData}
      loop={true}
      className="w-full max-w-md h-auto"
      onError={() => setHasError(true)}
    />
  );
};

export const HeroSection = ({ t }: HeroSectionProps) => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-24 pb-16 px-4 md:px-6" style={{ backgroundColor: '#fcfbf7' }}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-yoluko-navy leading-tight">
                {t.title}
              </h1>
              <p className="text-lg sm:text-xl text-yoluko-slate leading-relaxed">
                {t.subtitle}
              </p>
            </div>
            
            <Button 
              onClick={scrollToContact}
              className="bg-yoluko-orange hover:bg-yoluko-orange/90 text-white px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg rounded-lg font-semibold group transition-all hover-scale"
            >
              {t.cta}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Column - Updated Hero Video */}
          <div className="relative animate-scale-in flex justify-center items-center">
            <LottieAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};
