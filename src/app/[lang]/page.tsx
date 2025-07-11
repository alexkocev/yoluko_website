import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ValueProposition } from "@/components/ValueProposition";
import { YolukoDifference } from "@/components/YolukoDifference";
import { SolutionsShowcase } from "@/components/SolutionsShowcase";
import { TechIntegration } from "@/components/TechIntegration";
import { About } from "@/components/About";
import { PricingModel } from "@/components/PricingModel";
import { FAQ } from "@/components/FAQ";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { getDictionary } from "@/app/dictionaries";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { lang:string };
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return {
    title: dict.HeroSection.title,
    description: dict.HeroSection.subtitle,
  };
}

export default async function Home({ params }: { params: { lang: string } }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen">
      <Navigation t={dict.Navigation} />
      <HeroSection t={dict.HeroSection} />
      <ValueProposition t={dict.ValueProposition} />
      <YolukoDifference t={dict.YolukoDifference} />
      <SolutionsShowcase t={dict.SolutionsShowcase} />
      <About t={dict.About} />
      <TechIntegration t={dict.TechIntegration} />
      <PricingModel t={dict.PricingModel} />
      <FAQ t={dict.FAQ} />
      <ContactSection t={dict.ContactSection} />
      <Footer t={dict.Footer} />
    </div>
  );
}
