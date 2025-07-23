"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, ExternalLink } from "lucide-react";

interface ContactSectionProps {
  t: {
    title: string;
    subtitle: string;
    name_placeholder: string;
    email_placeholder: string;
    message_placeholder: string;
    send_button: string;
    toast_title: string;
    toast_description: string;
    voice_chat_prompt_title: string;
    voice_chat_prompt_desc: string;
    voice_chat_cta: string;
  };
  lang: string;
}

export const ContactSection = ({t, lang}: ContactSectionProps) => {
  return (
    <section id="contact" className="py-20 px-4 md:px-6 bg-yoluko-navy">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Form */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-2xl animate-fade-in h-full flex flex-col">
            <form 
              acceptCharset="UTF-8" 
              action="https://formspree.io/f/manbebwo" 
              method="POST" 
              encType="multipart/form-data" 
              autoComplete="on" 
              target="_self"
              className="space-y-6 flex-1 flex flex-col"
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
              <div className="flex-1">
                <Textarea
                  name="message"
                  required
                  autoComplete="off"
                  className="w-full p-3 sm:p-4 text-base sm:text-lg border-gray-300 focus:border-yoluko-orange focus:ring-yoluko-orange resize-none h-full min-h-[150px] text-gray-900 placeholder:text-gray-500"
                  placeholder={t.message_placeholder}
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

          {/* Right Column - Direct Call Scheduling */}
          <div className="text-center space-y-8 animate-fade-in h-full flex flex-col">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/20 flex-1 flex flex-col justify-center">
              <div className="mb-6">
                <Calendar className="h-12 sm:h-16 w-12 sm:w-16 text-yoluko-orange mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  {t.voice_chat_prompt_title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {t.voice_chat_prompt_desc}
                </p>
              </div>
              
              <Button 
                onClick={() => window.open("https://calendly.com/alexandre-kocev-yoluko/30min", "_blank")}
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-yoluko-navy px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg font-semibold group transition-all hover-scale"
              >
                {t.voice_chat_cta}
                <ExternalLink className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
