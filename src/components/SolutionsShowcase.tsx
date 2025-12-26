"use client";
import { Plus } from "lucide-react";
import { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface SolutionsShowcaseProps {
  t: {
    title: string;
    solutions: {
      category: string;
      title: string;
      description: string;
    }[];
    custom_solution_category: string;
    custom_solution_title: string;
    custom_solution_desc: string;
    custom_solution_cta: string;
  };
}


export const SolutionsShowcase = ({t}: SolutionsShowcaseProps) => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const images = [
    "/images/gallery dashboard.jpeg",
    "/images/gallery reporting system.jpeg",
    "/images/gallery collaboration.jpeg",
    "/images/gallery finance.jpeg",
    "/images/gallery assistant.jpeg",
    "/images/gallery social media.jpeg",
    "/images/gallery presentation.jpeg",
    "/images/gallery trading.jpeg"
  ];

  const solutions = t.solutions.map((solution, index) => ({
    ...solution,
    image: images[index]
  }));

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const setEqualHeights = () => {
      const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
      if (cards.length === 0) return;

      // Reset heights to auto to get natural height
      cards.forEach(card => {
        card.style.height = 'auto';
      });

      // Wait for next frame to ensure layout is updated
      requestAnimationFrame(() => {
        // Get all card heights
        const heights = cards.map(card => card.offsetHeight);
        const maxHeight = Math.max(...heights);

        // Set all cards to max height
        cards.forEach(card => {
          card.style.height = `${maxHeight}px`;
        });
      });
    };

    // Wait for images to load and DOM to be ready
    const timeoutId = setTimeout(() => {
      setEqualHeights();
    }, 100);

    // Handle image load events
    const images = document.querySelectorAll('.glass-card img');
    const imageLoadHandlers: (() => void)[] = [];
    
    images.forEach((img) => {
      const imageElement = img as HTMLImageElement;
      const handler = () => setEqualHeights();
      if (imageElement.complete) {
        // Image already loaded
        setEqualHeights();
      } else {
        imageElement.addEventListener('load', handler);
        imageLoadHandlers.push(() => imageElement.removeEventListener('load', handler));
      }
    });

    // Also set heights on window resize
    const handleResize = () => {
      setEqualHeights();
    };
    window.addEventListener('resize', handleResize);
    
    // Use ResizeObserver to handle dynamic content changes
    const resizeObserver = new ResizeObserver(() => {
      setEqualHeights();
    });

    // Observe all cards
    const observeCards = () => {
      cardRefs.current.forEach(card => {
        if (card) {
          resizeObserver.observe(card);
        }
      });
    };

    // Observe after a short delay to ensure refs are set
    const observeTimeoutId = setTimeout(observeCards, 200);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(observeTimeoutId);
      window.removeEventListener('resize', handleResize);
      imageLoadHandlers.forEach(handler => handler());
      resizeObserver.disconnect();
    };
  }, [solutions, t]);

  return (
    <section id="solutions" className="py-20 px-4 md:px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yoluko-navy mb-6">
            {t.title}
          </h2>
        </div>

        <div className="relative pb-12 px-4 md:px-8 lg:px-12 py-8">
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4 pb-12 pt-8 px-4 md:px-6">
              {solutions.map((solution, index) => (
                <CarouselItem 
                  key={index}
                  className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3 py-2 px-2"
                >
                  <div 
                    ref={(el) => {
                      cardRefs.current[index] = el;
                    }}
                    className="glass-card animate-fade-in flex flex-col h-full rounded-xl"
                  >
                    <div className="relative h-48 overflow-hidden rounded-t-xl">
                      <img 
                        src={solution.image}
                        alt={solution.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="mb-3">
                        <span className="inline-block bg-yoluko-teal text-white text-xs font-semibold px-3 py-1 rounded-full">
                          {solution.category}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-yoluko-navy mb-3">
                        {solution.title}
                      </h3>
                      <p className="text-yoluko-slate leading-relaxed flex-1">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}

              {/* Custom Solution Card */}
              <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3 py-2 px-2">
                <div 
                  ref={(el) => {
                    cardRefs.current[solutions.length] = el;
                  }}
                  className="glass-card animate-fade-in border-2 border-dashed border-yoluko-teal/50 bg-gradient-to-br from-yoluko-teal/10 to-white/10 flex flex-col h-full rounded-xl"
                >
                  <div className="h-48 flex items-center justify-center">
                    <div className="w-20 h-20 bg-yoluko-teal rounded-full flex items-center justify-center">
                      <Plus className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="mb-3">
                      <span className="inline-block bg-yoluko-orange text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {t.custom_solution_category}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-yoluko-navy mb-3">
                      {t.custom_solution_title}
                    </h3>
                    <p className="text-yoluko-slate leading-relaxed mb-4 flex-1">
                      {t.custom_solution_desc}
                    </p>
                    <button 
                      onClick={scrollToContact}
                      className="text-yoluko-orange hover:text-yoluko-orange/80 font-semibold transition-colors"
                    >
                      {t.custom_solution_cta}
                    </button>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-2 md:-left-12" />
            <CarouselNext className="right-2 md:-right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
