
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface AboutProps {
  t: {
    title: string;
    name: string;
    role: string;
    bio: string;
  };
}

export const About = ({t}: AboutProps) => {
  return (
    <section id="about" className="py-16 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-yoluko-navy mb-4">
            {t.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left Column - Professional Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <Avatar className="w-40 h-40 shadow-xl">
                <AvatarImage 
                  src="/images/Profile Alex.png" 
                  alt="Alexandre Kocev"
                  className="object-cover"
                />
                <AvatarFallback className="w-40 h-40 text-2xl bg-yoluko-cream text-yoluko-navy">
                  AK
                </AvatarFallback>
              </Avatar>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-yoluko-teal">
              {t.name}
            </h3>
            <p className="text-lg font-bold text-yoluko-navy">
              {t.role}
            </p>
            <p className="text-yoluko-slate leading-relaxed text-lg italic">
              {t.bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
