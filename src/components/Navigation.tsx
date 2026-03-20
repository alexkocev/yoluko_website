"use client";

import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export const Navigation = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileOpen(false);
  };

  const navLinks = [
    { label: "Services", id: "verticals" },
    { label: "Case Studies", id: "solutions" },
    { label: "Pricing", id: "pricing" },
    { label: "FAQ", id: "faq" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0e0e0e]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
        <div className="text-2xl font-black text-primary-container tracking-tighter font-headline">
          Yoluko
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="font-headline font-bold tracking-tight text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollToSection("contact")}
          className="hidden md:flex bg-primary text-on-primary-fixed px-6 py-2.5 rounded-full font-headline font-bold hover:bg-primary-dim transition-all active:scale-95 duration-100"
        >
          Get Started
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-[#0e0e0e]/95 backdrop-blur-xl border-t border-white/10 px-6 py-8">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="font-headline font-bold text-lg text-white/70 hover:text-white transition-colors text-left"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-on-primary-fixed px-6 py-3 rounded-full font-headline font-bold hover:bg-primary-dim transition-all w-full mt-4 flex items-center justify-center gap-2"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
