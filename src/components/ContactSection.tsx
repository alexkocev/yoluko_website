"use client";

import { useForm } from "@formspree/react";
import { Mail, MapPin, CheckCircle } from "lucide-react";

export const ContactSection = () => {
  const [state, handleSubmit] = useForm("xvzwyqjv");

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-5xl font-headline font-black mb-8 leading-tight">
            Ready to <span className="text-primary">Automate</span> your
            growth?
          </h2>
          <p className="text-on-surface-variant text-lg mb-10">
            Fill out the form and our team will get back to you with a custom
            automation audit within 24 hours.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary">
                <Mail className="h-4 w-4" />
              </div>
              <span className="font-label font-bold text-sm tracking-wider">
                contact@yoluko.com
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-secondary">
                <MapPin className="h-4 w-4" />
              </div>
              <span className="font-label font-bold text-sm tracking-wider">
                France, APAC &amp; Australia — Remote Worldwide
              </span>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-high p-8 lg:p-12 rounded-2xl border border-outline-variant/10 shadow-2xl relative min-h-[460px]">
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />

          {state.succeeded ? (
            <div className="flex flex-col items-center justify-center h-full min-h-[380px] gap-6 relative text-center">
              <div className="w-20 h-20 rounded-full bg-tertiary/20 flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-tertiary" />
              </div>
              <h3 className="text-3xl font-headline font-black text-on-surface">
                Message Sent!
              </h3>
              <p className="text-on-surface-variant text-lg max-w-sm">
                Thank you for reaching out. We&apos;ll get back to you within 24 hours with your custom automation audit.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative">
              <div>
                <label className="block font-label font-bold text-xs uppercase tracking-widest mb-2 text-on-surface-variant">
                  Full Name
                </label>
                <input
                  className="w-full bg-surface-container-highest border border-outline-variant/15 rounded-lg px-4 py-4 focus:outline-none focus:border-primary focus:border-2 transition-colors text-on-surface placeholder:text-on-surface-variant/50"
                  placeholder="Ada Lovelace"
                  type="text"
                  name="name"
                  required
                />
              </div>
              <div>
                <label className="block font-label font-bold text-xs uppercase tracking-widest mb-2 text-on-surface-variant">
                  Work Email
                </label>
                <input
                  className="w-full bg-surface-container-highest border border-outline-variant/15 rounded-lg px-4 py-4 focus:outline-none focus:border-primary focus:border-2 transition-colors text-on-surface placeholder:text-on-surface-variant/50"
                  placeholder="ada@yourcompany.com"
                  type="email"
                  name="email"
                  required
                />
              </div>
              <div>
                <label className="block font-label font-bold text-xs uppercase tracking-widest mb-2 text-on-surface-variant">
                  Your Challenge
                </label>
                <textarea
                  className="w-full bg-surface-container-highest border border-outline-variant/15 rounded-lg px-4 py-4 focus:outline-none focus:border-primary focus:border-2 transition-colors text-on-surface placeholder:text-on-surface-variant/50 resize-none"
                  placeholder="We spend 20+ hours a week on manual data entry and reconciliation..."
                  rows={4}
                  name="challenge"
                  required
                />
              </div>
              <button
                className="w-full bg-primary text-on-primary py-5 rounded-full font-headline font-black text-lg hover:shadow-[0_0_20px_rgba(255,221,124,0.4)] transition-all disabled:opacity-50"
                type="submit"
                disabled={state.submitting}
              >
                {state.submitting ? "Sending..." : "Send Request"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
