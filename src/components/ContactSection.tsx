"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, ExternalLink } from "lucide-react";
import { toast } from "@/hooks/use-toast";

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
}

export const ContactSection = ({t}: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: "John Smith",
    email: "john@company.com",
    message: "Tell us more about you, your company, painpoints..."
  });

  const [isMessageFocused, setIsMessageFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: t.toast_title,
      description: t.toast_description,
    });
    setFormData({ name: "", email: "", message: "" });
    setIsMessageFocused(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleMessageFocus = () => {
    setIsMessageFocused(true);
    if (formData.message === "Tell us more about you, your company, painpoints...") {
      setFormData({
        ...formData,
        message: ""
      });
    }
  };

  const handleNameFocus = () => {
    if (formData.name === "John Smith") {
      setFormData({
        ...formData,
        name: ""
      });
    }
  };

  const handleEmailFocus = () => {
    if (formData.email === "john@company.com") {
      setFormData({
        ...formData,
        email: ""
      });
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-yoluko-navy">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-2xl animate-fade-in h-full flex flex-col">
            <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder={t.name_placeholder}
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={handleNameFocus}
                  required
                  className={`w-full p-4 text-lg border-gray-300 focus:border-yoluko-orange focus:ring-yoluko-orange ${
                    formData.name === "John Smith" ? 'text-gray-400' : 'text-gray-900'
                  }`}
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder={t.email_placeholder}
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={handleEmailFocus}
                  required
                  className={`w-full p-4 text-lg border-gray-300 focus:border-yoluko-orange focus:ring-yoluko-orange ${
                    formData.email === "john@company.com" ? 'text-gray-400' : 'text-gray-900'
                  }`}
                />
              </div>
              <div className="flex-1">
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={handleMessageFocus}
                  required
                  className={`w-full p-4 text-lg border-gray-300 focus:border-yoluko-orange focus:ring-yoluko-orange resize-none h-full min-h-[150px] ${
                    !isMessageFocused && formData.message === "Tell us more about you, your company, painpoints..." 
                      ? 'text-gray-400' 
                      : 'text-gray-900'
                  }`}
                  placeholder={t.message_placeholder}
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-yoluko-orange hover:bg-yoluko-orange/90 text-white py-4 text-lg font-semibold transition-all hover-scale"
              >
                {t.send_button}
              </Button>
            </form>
          </div>

          {/* Right Column - Direct Call Scheduling */}
          <div className="text-center space-y-8 animate-fade-in h-full flex flex-col">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 flex-1 flex flex-col justify-center">
              <div className="mb-6">
                <Calendar className="h-16 w-16 text-yoluko-orange mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t.voice_chat_prompt_title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {t.voice_chat_prompt_desc}
                </p>
              </div>
              
              <Button 
                onClick={() => window.open("https://calendly.com/alexandre-kocev-yoluko/30min", "_blank")}
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-yoluko-navy px-8 py-4 text-lg font-semibold group transition-all hover-scale"
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
