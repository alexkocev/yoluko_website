"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does the $0 upfront model work?",
    answer:
      "We invest our time and resources to build your initial proof of concept. If you're happy with the results, we move into a performance-based monthly partnership. If not, you owe us nothing.",
  },
  {
    question: "Is my data secure with your AI?",
    answer:
      "Security is our top priority. We use enterprise-grade encryption and can deploy local, private LLM instances that never send data to public training sets.",
  },
  {
    question: "Do we need a technical team to manage it?",
    answer:
      "Not at all. We provide full-service management. We monitor the systems 24/7 and handle all updates, so you can just enjoy the results.",
  },
  {
    question: "What's included in the monthly subscription?",
    answer:
      "Everything: initial development, deployment, hosting, ongoing maintenance, security updates, and dedicated support.",
  },
  {
    question: "How long does implementation typically take?",
    answer:
      "Depending on complexity, a custom automation solution is typically ready in 1-4 weeks, with minimal disruption to your daily operations.",
  },
  {
    question: "What if our business processes change after automation?",
    answer:
      "Our team is here to help! We can easily update and adapt your solution as your business evolves. That's part of our ongoing partnership.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 lg:px-8 bg-surface-container-low">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-headline font-black mb-12 text-center">
          Questions you might have
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-surface-container border border-outline-variant/10 rounded-lg p-6"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex justify-between items-center cursor-pointer group w-full text-left"
              >
                <h4 className="font-headline font-bold text-lg pr-4">
                  {faq.question}
                </h4>
                <ChevronDown
                  className={`h-5 w-5 text-primary flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <p className="mt-4 text-on-surface-variant text-sm leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
