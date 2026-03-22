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
        <div className="flex items-center">
          <svg className="h-[30px] w-auto drop-shadow-[0_2px_8px_rgba(254,203,0,0.3)]" viewBox="0 0 799 212" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Yoluko">
            <path d="M664 51.5H607.159L542 118.083L595.144 119.5L664 51.5Z" fill="#ffdd7c" stroke="#ffdd7c"/>
            <path d="M536 119H510V0H551V104L536 119Z" fill="#ffdd7c"/>
            <path d="M542 122H594.5L684 211.5H631.5L542 122Z" fill="#ffdd7c"/>
            <path d="M536.5 121H510.5V192.5H551.5V137L536.5 121Z" fill="#ffdd7c"/>
            <path d="M465 62.5H430V140C428.5 142.5 420 167 396.5 167C387.106 167 370.166 157.5 371.5 143V62.5H337C336.833 90.8333 336.6 148.3 337 151.5C337.5 155.5 337 165.572 345.5 176.5C356 190 371 193 382.5 194C394 195 405.5 190.5 411 188C416.556 185.474 426.5 178.5 430 173V192.5H465V62.5Z" fill="white"/>
            <path d="M312 20.5H278.5V191H312V20.5Z" fill="white"/>
            <path d="M99.5 122.5L162.5 21.5H119L81 91.5L42.5 21.5H0L64.5 122.5V191H99.5V122.5Z" fill="white"/>
            <path d="M198.5 61.5C235.227 61.5 265 91.2731 265 128C265 164.727 235.227 194.5 198.5 194.5C161.773 194.5 132 164.727 132 128C132 91.2731 161.773 61.5 198.5 61.5ZM198 90.5C179.775 90.5 165 107.065 165 127.5C165 147.935 179.775 164.5 198 164.5C216.225 164.5 231 147.935 231 127.5C231 107.065 216.225 90.5 198 90.5Z" fill="white"/>
            <path d="M732.5 62.5C769.227 62.5 799 92.2731 799 129C799 165.727 769.227 195.5 732.5 195.5C695.773 195.5 666 165.727 666 129C666 92.2731 695.773 62.5 732.5 62.5ZM732 91.5C713.775 91.5 699 108.065 699 128.5C699 148.935 713.775 165.5 732 165.5C750.225 165.5 765 148.935 765 128.5C765 108.065 750.225 91.5 732 91.5Z" fill="white"/>
          </svg>
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
