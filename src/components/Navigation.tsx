"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";

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
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const getFlagEmoji = (lang: string) => {
    return lang === "en" ? "🇬🇧" : "🇫🇷";
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLinkClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsSheetOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 glass-nav`}>
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
            
            <Link href={`/${otherLang}`} className="flex items-center space-x-2 text-yoluko-navy hover:text-yoluko-teal transition-colors font-medium">
              <span className="text-lg">{getFlagEmoji(otherLang)}</span>
              <span>{otherLang.toUpperCase()}</span>
            </Link>

            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-yoluko-orange hover:bg-yoluko-orange/90 text-white px-6 py-2 rounded-lg font-medium group transition-all hover-scale"
            >
              {t.cta}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-yoluko-navy" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] glass-card p-6 flex flex-col border-l border-white/20">
                <SheetHeader className="mb-8 text-left">
                  <SheetTitle>
                    <img 
                      src="/images/LOGO Yoluko.svg" 
                      alt="Yoluko Solutions" 
                      className="h-8 w-auto"
                    />
                  </SheetTitle>
                </SheetHeader>
                
                <div className="flex flex-col space-y-6 text-center">
                  <button onClick={() => handleLinkClick("solutions")} className="text-xl text-yoluko-navy hover:text-yoluko-teal transition-colors">{t.solutions}</button>
                  <button onClick={() => handleLinkClick("pricing")} className="text-xl text-yoluko-navy hover:text-yoluko-teal transition-colors">{t.pricing}</button>
                  <button onClick={() => handleLinkClick("faq")} className="text-xl text-yoluko-navy hover:text-yoluko-teal transition-colors">{t.faq}</button>
                  <button onClick={() => handleLinkClick("contact")} className="text-xl text-yoluko-navy hover:text-yoluko-teal transition-colors">{t.contact}</button>
                </div>

                <div className="mt-auto space-y-4">
                  <Link href={`/${otherLang}`} className="flex items-center justify-center space-x-2 text-yoluko-navy hover:text-yoluko-teal transition-colors font-medium">
                    <span className="text-xl">{getFlagEmoji(otherLang)}</span>
                    <span>{otherLang.toUpperCase()}</span>
                  </Link>
                  <Button 
                    onClick={() => handleLinkClick("contact")}
                    className="w-full bg-yoluko-orange hover:bg-yoluko-orange/90 text-white py-3 rounded-lg font-semibold group transition-all hover-scale"
                  >
                    {t.cta}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
