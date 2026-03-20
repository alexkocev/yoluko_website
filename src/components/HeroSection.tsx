"use client";

import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full py-20">
        <div className="z-10">
          <span className="inline-block bg-secondary text-on-secondary px-4 py-1 rounded-sm text-sm font-label font-bold uppercase tracking-widest mb-6">
            AI-POWERED EFFICIENCY
          </span>
          <h1 className="text-5xl lg:text-7xl font-headline font-extrabold tracking-tight text-on-surface mb-8 leading-[1.1]">
            Transform your business with{" "}
            <span className="text-primary">Automation</span>
          </h1>
          <p className="text-xl text-on-surface-variant mb-10 max-w-xl leading-relaxed">
            Scale your operations with custom AI agents and automated workflows.
            $0 upfront cost. We only win when you grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-on-primary px-8 py-4 rounded-full font-headline font-extrabold text-lg flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(255,221,124,0.3)] transition-all"
            >
              Tell us what you need
              <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollToSection("verticals")}
              className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-full font-headline font-bold text-lg hover:bg-surface-bright transition-all border border-outline-variant/15"
            >
              View Solutions
            </button>
          </div>
        </div>

        {/* Right side - hero visual */}
        <div className="relative hidden lg:block">
          <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full" />
          <div className="relative glass-panel rounded-xl border border-outline-variant/20 p-4 shadow-2xl">
            <img
              className="rounded-lg w-full aspect-square object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700"
              alt="Futuristic 3D representation of AI neural network"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCm49cBsR6D8yFWo6V0ToiaejPcJSd8QEeuiR8sKmcDQ2hpT2T2hhdTkB5xItmobqJedb8U32zmFlONjqo9sCdWc1CfRmZfy-36gsQSqQcfPBZitZuhZdZroh4GU3z8yKidXD8kdwk29ayjsR18unIhAh9B6Rsfwa9NzWpsIjg0NOYUEEABN1AXn-S9Wqced3eRr5mhNe4dWI_ZB6Upe7pMHYVKPONi7j0v1Am99xJLVowc2kk8AzD3tLO0iZyZBjRzJVYjL5YsZzA"
            />
            <div className="absolute -bottom-6 -right-6 bg-surface-container-high p-6 rounded-lg border border-outline-variant/20 shadow-xl max-w-[200px]">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-pulse" />
                <span className="text-[10px] font-label font-bold text-tertiary uppercase tracking-tighter">
                  System Active
                </span>
              </div>
              <p className="text-xs text-on-surface-variant font-body leading-tight">
                Save up to 90% of your team&apos;s time
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
