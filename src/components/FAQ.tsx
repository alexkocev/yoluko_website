import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";

  interface FAQProps {
    t: {
      title: string;
      q1: string;
      a1: string;
      q2: string;
      a2: string;
      q3: string;
      a3: string;
      q4: string;
      a4: string;
      q5: string;
      a5: string;
      q6: string;
      a6: string;
    };
  }
  
  export const FAQ = ({t}: FAQProps) => {

    const faqs = [
      { question: t.q1, answer: t.a1 },
      { question: t.q2, answer: t.a2 },
      { question: t.q3, answer: t.a3 },
      { question: t.q4, answer: t.a4 },
      { question: t.q5, answer: t.a5 },
      { question: t.q6, answer: t.a6 }
    ];

    return (
      <section id="faq" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-yoluko-navy mb-6">
              {t.title}
            </h2>
          </div>
  
          <div className="animate-fade-in">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-gray-50 rounded-lg px-6 border-none"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-yoluko-navy hover:text-yoluko-teal transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-yoluko-slate pt-2 pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    );
  };
  