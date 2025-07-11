"use client";

import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationProps {
  t: {
    home: string;
    solutions: string;
    pricing: string;
    faq: string;
    contact: string;
    cta: string;
  };
}

export const Navigation = ({ t }: NavigationProps) => {
  const pathname = usePathname();
  const currentLang = pathname.split("/")[1];
  const otherLang = currentLang === "en" ? "fr" : "en";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm shadow-lg`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/images/LOGO Yoluko.svg" 
              alt="Yoluko Solutions" 
              className="h-10 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("solutions")}
              className="text-yoluko-navy hover:text-yoluko-teal transition-colors font-medium"
            >
              {t.solutions}
            </button>
            <button 
              onClick={() => scrollToSection("pricing")}
              className="text-yoluko-navy hover:text-yoluko-teal transition-colors font-medium"
            >
              {t.pricing}
            </button>
            <button 
              onClick={() => scrollToSection("faq")}
              className="text-yoluko-navy hover:text-yoluko-teal transition-colors font-medium"
            >
              {t.faq}
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-yoluko-navy hover:text-yoluko-teal transition-colors font-medium"
            >
              {t.contact}
            </button>
            
            <Link href={`/${otherLang}`} className="flex items-center space-x-1 text-yoluko-navy hover:text-yoluko-teal transition-colors font-medium">
              <Globe className="h-4 w-4" />
              <span>{otherLang.toUpperCase()}</span>
            </Link>

            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-yoluko-orange hover:bg-yoluko-orange/90 text-white px-6 py-2 rounded-lg font-medium transition-all hover-scale"
            >
              {t.cta}
            </Button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <Link href={`/${otherLang}`} className="flex items-center space-x-1 text-yoluko-navy hover:text-yoluko-teal transition-colors font-medium px-2">
              <Globe className="h-4 w-4" />
              <span className="text-sm">{otherLang.toUpperCase()}</span>
            </Link>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-yoluko-orange hover:bg-yoluko-orange/90 text-white px-4 py-2 text-sm"
            >
              {t.cta}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
