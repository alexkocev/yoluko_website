import { Bot, Terminal, Cog, TrendingUp } from "lucide-react";

const verticals = [
  {
    icon: Bot,
    title: "AI Agents",
    description:
      "Building full AI agents that handle all types of tasks, fully autonomous or with human-in-the-loop. Fully customized, like a digital receptionist.",
    cta: "Deploy Intelligence",
    color: "primary",
  },
  {
    icon: Terminal,
    title: "Software Eng.",
    description:
      'Build custom SaaS platforms and high-performance software. Quality builds like our Frontdesk solution.',
    cta: "Ship Products",
    color: "secondary",
  },
  {
    icon: Cog,
    title: "Automation",
    description:
      "Beyond just AI\u2014build intelligent algorithms that transform complex operational tasks into a single button press.",
    cta: "Scale Ops",
    color: "tertiary",
  },
  {
    icon: TrendingUp,
    title: "Data Science",
    description:
      "Custom ML & DL workflows for M&A, price prediction, and advanced profile clustering for enterprise growth.",
    cta: "Predict Future",
    color: "primary",
  },
];

const colorMap: Record<string, { icon: string; text: string; glow: string; border: string }> = {
  primary: {
    icon: "bg-primary/10 text-primary",
    text: "text-primary",
    glow: "bg-primary/5 group-hover:bg-primary/10",
    border: "hover:border-primary/50",
  },
  secondary: {
    icon: "bg-secondary/10 text-secondary",
    text: "text-secondary",
    glow: "bg-secondary/5 group-hover:bg-secondary/10",
    border: "hover:border-secondary/50",
  },
  tertiary: {
    icon: "bg-tertiary/10 text-tertiary",
    text: "text-tertiary",
    glow: "bg-tertiary/5 group-hover:bg-tertiary/10",
    border: "hover:border-tertiary/50",
  },
};

export const CoreVerticals = () => {
  return (
    <section
      id="verticals"
      className="py-24 px-6 lg:px-8 terminal-grid border-y border-white/5 bg-surface-container-lowest"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-primary font-label font-bold uppercase tracking-[0.3em] text-sm mb-4 block">
            Engineered Verticals
          </span>
          <h2 className="text-4xl lg:text-6xl font-headline font-black tracking-tighter text-on-surface">
            Our Core{" "}
            <span className="text-primary">Specialized Solutions</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {verticals.map((v) => {
            const colors = colorMap[v.color];
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className={`group relative bg-surface-container-low p-8 rounded-2xl border border-outline-variant/10 ${colors.border} transition-all duration-500 overflow-hidden`}
              >
                <div
                  className={`absolute -top-10 -right-10 w-32 h-32 ${colors.glow} rounded-full blur-2xl transition-colors`}
                />
                <div className="flex flex-col h-full relative">
                  <div
                    className={`w-12 h-12 rounded-full ${colors.icon} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-headline font-bold text-on-surface mb-4">
                    {v.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-grow">
                    {v.description}
                  </p>
                  <div
                    className={`${colors.text} text-xs font-label font-bold uppercase tracking-widest`}
                  >
                    {v.cta}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
