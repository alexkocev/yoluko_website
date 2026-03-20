"use client";

import { X, CheckCircle } from "lucide-react";

export const PricingSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-24 px-6 lg:px-8 bg-surface-container-low">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-headline font-black mb-6">
            Re-thinking Agency{" "}
            <span className="text-secondary">Economics</span>
          </h2>
          <p className="text-on-surface-variant text-lg">
            We eliminated the overhead and the fluff. You pay for value, not
            billable hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Traditional Way */}
          <div className="bg-surface-container p-10 rounded-xl border border-outline-variant/10 flex flex-col h-full grayscale opacity-70">
            <h3 className="text-2xl font-headline font-bold text-on-surface-variant mb-8">
              The Traditional Way
            </h3>
            <ul className="space-y-6 flex-grow">
              {[
                "High setup fees ($10k+) before any work begins",
                "Hourly billing that incentivizes slow progress",
                "3-month lead times for simple automations",
                "Static results that require manual maintenance",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-4 items-start text-on-surface-variant"
                >
                  <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Yoluko Way */}
          <div className="bg-surface-container-highest p-10 rounded-xl border-2 border-primary shadow-[0_0_40px_rgba(255,221,124,0.1)] flex flex-col h-full relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-4 py-1 rounded-full text-xs font-label font-bold uppercase tracking-tighter">
              Recommended
            </div>
            <h3 className="text-2xl font-headline font-bold text-primary mb-8">
              The Yoluko Way
            </h3>
            <ul className="space-y-6 flex-grow">
              {[
                "$0 Upfront cost. We build the PoC for free.",
                "Success-based flat monthly management.",
                "Deploy first workflows in under 7 days.",
                "Self-healing AI agents that evolve with you.",
              ].map((item) => (
                <li key={item} className="flex gap-4 items-start">
                  <CheckCircle className="h-5 w-5 text-tertiary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={scrollToContact}
              className="mt-12 w-full bg-primary text-on-primary py-4 rounded-full font-headline font-extrabold hover:bg-primary-dim transition-all"
            >
              Start Your Free Audit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
