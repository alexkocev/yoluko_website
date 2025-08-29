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
import { SITE_CONFIG } from "@/lib/constants";
import type { Metadata } from "next";

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const dict = await getDictionary(lang);
  const baseUrl = SITE_CONFIG.baseUrl;
  const locales = SITE_CONFIG.locales;
  const languages = locales.reduce(
    (acc: Record<string, string>, locale: string) => {
      acc[locale] = `${baseUrl}/${locale}`;
      return acc;
    },
    {}
  );
  return {
    title: {
      default: dict.metadata.title.default,
      template: `%s | ${dict.metadata.title.template}`,
    },
    description: dict.metadata.description,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        "x-default": `${baseUrl}/en`,
        ...languages,
      },
    },
    openGraph: {
      title: dict.metadata.title.default,
      description: dict.metadata.description,
      url: `${baseUrl}/${lang}`,
      siteName: "Yoluko Solutions",
      locale: lang === "en" ? "en_US" : "fr_FR",
      type: "website",
      images: [{
        url: `${baseUrl}/images/LOGO Yoluko.svg`,
        width: 1200,
        height: 630,
        alt: dict.metadata.title.default,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.title.default,
      description: dict.metadata.description,
      images: [`${baseUrl}/images/LOGO Yoluko.svg`],
    },
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
      <ContactSection t={dict.ContactSection} lang={lang} />
      <Footer t={dict.Footer} />
    </div>
  );
}
