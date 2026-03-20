import { Sparkles, Coins, Plug, Zap, CreditCard, Code } from "lucide-react";

const cards = [
  {
    icon: Sparkles,
    bgIcon: Zap,
    title: "Eliminate Manual Work",
    description:
      "Stop wasting hours on repetitive tasks. We build AI agents that handle the heavy lifting while you focus on high-level strategy.",
    color: "primary",
    iconBg: "bg-primary-container/20",
  },
  {
    icon: Coins,
    bgIcon: CreditCard,
    title: "No Hidden Costs",
    description:
      "Transparent $0 upfront model. Our pricing is performance-based, ensuring our incentives are perfectly aligned with your business success.",
    color: "secondary",
    iconBg: "bg-secondary-container/20",
  },
  {
    icon: Plug,
    bgIcon: Code,
    title: "Works With Your Tools",
    description:
      "No need to switch stacks. We integrate seamlessly with Salesforce, Stripe, Slack, and 1000+ other enterprise applications.",
    color: "tertiary",
    iconBg: "bg-tertiary-container/20",
  },
];

const colorMap: Record<string, { icon: string; text: string; border: string }> = {
  primary: {
    icon: "text-primary",
    text: "text-primary",
    border: "hover:border-primary/30",
  },
  secondary: {
    icon: "text-secondary",
    text: "text-secondary",
    border: "hover:border-secondary/30",
  },
  tertiary: {
    icon: "text-tertiary",
    text: "text-tertiary",
    border: "hover:border-tertiary/30",
  },
};

export const WhyYoluko = () => {
  return (
    <section className="py-24 px-6 lg:px-8 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-tertiary font-label font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
            Engineered for Results
          </span>
          <h2 className="text-4xl lg:text-6xl font-headline font-black tracking-tighter text-on-surface max-w-2xl">
            Why choose the <span className="text-secondary">Yoluko</span> way?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => {
            const colors = colorMap[card.color];
            const Icon = card.icon;
            const BgIcon = card.bgIcon;
            return (
              <div
                key={card.title}
                className={`group bg-surface-container p-8 rounded-lg border border-outline-variant/5 ${colors.border} transition-all duration-500 relative overflow-hidden h-full`}
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                  <BgIcon className="h-20 w-20" />
                </div>
                <div className={`w-12 h-12 rounded ${card.iconBg} flex items-center justify-center ${colors.icon} mb-8`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-headline font-bold text-on-surface mb-4">
                  {card.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
