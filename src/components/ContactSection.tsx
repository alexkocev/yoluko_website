"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ExternalLink } from "lucide-react";

interface ContactSectionProps {
  t: {
    header: string;
    title: string;
    subtitle: string;
    process_step1_title: string;
    process_step1_desc: string;
    process_step2_title: string;
    process_step2_desc: string;
    process_step3_title: string;
    process_step3_desc: string;
    name_placeholder: string;
    email_placeholder: string;
    challenge_placeholder: string;
    send_button: string;
    quick_chat_link: string;
    toast_title: string;
    toast_description: string;
  };
  lang: string;
}

export const ContactSection = ({t, lang}: ContactSectionProps) => {
  return (
    <section id="contact" className="py-20 px-4 md:px-6 bg-yoluko-navy">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-6 animate-fade-in">
          <p className="text-yoluko-orange text-sm sm:text-base font-semibold tracking-wider uppercase mb-4">
            {t.header}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto lg:items-stretch">
          {/* Left Column - Process Steps */}
          <div className="animate-fade-in pt-8 flex flex-col h-full">
            <div className="space-y-8 flex-1">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-yoluko-orange rounded-full flex items-center justify-center text-white font-bold text-lg">
                    1
                  </div>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
                    {t.process_step1_title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {t.process_step1_desc}
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-yoluko-orange rounded-full flex items-center justify-center text-white font-bold text-lg">
                    2
                  </div>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
                    {t.process_step2_title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {t.process_step2_desc}
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-yoluko-orange rounded-full flex items-center justify-center text-white font-bold text-lg">
                    3
                  </div>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
                    {t.process_step3_title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {t.process_step3_desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Chat Link */}
            <div className="pt-8">
              <button 
                onClick={() => window.open("https://calendly.com/alexandre-yoluko/1to1", "_blank")}
                className="text-yoluko-orange hover:text-yoluko-orange/80 underline underline-offset-4 transition-colors flex items-center gap-2 group"
              >
                {t.quick_chat_link}
                <ExternalLink className="h-4 w-4 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-2xl animate-fade-in flex flex-col">
            <form 
              acceptCharset="UTF-8" 
              action="https://formspree.io/f/manbebwo" 
              method="POST" 
              encType="multipart/form-data" 
              autoComplete="on" 
              target="_self"
              className="space-y-6 flex flex-col h-full"
              key={lang}
            >
              <input type="hidden" name="_next" value={`/${lang}/success`} />
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder={t.name_placeholder}
                  required
                  autoComplete="off"
                  className="w-full p-3 sm:p-4 text-base sm:text-lg border-gray-300 focus:border-yoluko-orange focus:ring-yoluko-orange text-gray-900 placeholder:text-gray-500"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder={t.email_placeholder}
                  required
                  autoComplete="off"
                  className="w-full p-3 sm:p-4 text-base sm:text-lg border-gray-300 focus:border-yoluko-orange focus:ring-yoluko-orange text-gray-900 placeholder:text-gray-500"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <Textarea
                  name="challenge"
                  required
                  autoComplete="off"
                  className="w-full p-3 sm:p-4 text-base sm:text-lg border-gray-300 focus:border-yoluko-orange focus:ring-yoluko-orange resize-none flex-1 min-h-[120px] text-gray-900 placeholder:text-gray-500"
                  placeholder={t.challenge_placeholder}
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-yoluko-orange hover:bg-yoluko-orange/90 text-white py-3 text-base sm:py-4 sm:text-lg font-semibold transition-all hover-scale"
              >
                {t.send_button}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
