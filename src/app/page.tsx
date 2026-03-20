import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { CoreVerticals } from "@/components/CoreVerticals";
import { WhyYoluko } from "@/components/WhyYoluko";
import { SolutionsGrid } from "@/components/SolutionsGrid";
import { PricingSection } from "@/components/PricingSection";
import { IntegrationsWall } from "@/components/IntegrationsWall";
import { TeamSection } from "@/components/TeamSection";
import { FAQ } from "@/components/FAQ";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <HeroSection />
        <CoreVerticals />
        <WhyYoluko />
        <SolutionsGrid />
        <PricingSection />
        <IntegrationsWall />
        <TeamSection />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
