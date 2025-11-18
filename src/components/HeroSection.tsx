"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

interface HeroSectionProps {
  t: {
    title: string;
    subtitle: string;
    cta: string;
  };
}

export const HeroSection = ({ t }: HeroSectionProps) => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-24 pb-16 px-4 md:px-6 min-h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/images/floating_curve.webm" type="video/webm" />
        <source src="/images/floating_curve.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 container mx-auto">
        <div className="flex items-center justify-start min-h-[80vh]">
          {/* Left-aligned Content */}
          <div className="text-left space-y-8 animate-fade-in max-w-4xl">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight drop-shadow-lg">
                {t.title}
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 leading-relaxed drop-shadow-md">
                {t.subtitle}
              </p>
            </div>
            
            <Button 
              onClick={scrollToContact}
              className="bg-yoluko-orange hover:bg-yoluko-orange/90 text-white px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg rounded-lg font-semibold group transition-all hover-scale shadow-lg"
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