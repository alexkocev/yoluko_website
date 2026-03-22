import { Stethoscope, BarChart3, ArrowUpRight, Clock, Target, Zap, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    badge: "SaaS Product",
    badgeColor: "bg-secondary/10 text-secondary",
    icon: Stethoscope,
    iconColor: "bg-secondary/10 text-secondary",
    title: "Frontdesk",
    description:
      "The invisible front desk for clinics. Automates scheduling, patient inquiries, and admin directly from your Gmail inbox.",
    stats: [
      { icon: Clock, label: "15hrs saved/week" },
      { icon: Target, label: "98% accuracy" },
      { icon: Zap, label: "From $49/mo" },
    ],
    image: "/images/frontdesk-preview.png",
    href: "https://frontdesk.yoluko.com",
    cta: "Visit Frontdesk",
    external: true,
    borderHover: "hover:border-secondary/50",
    glowColor: "from-secondary/5",
  },
  {
    badge: "Data Product",
    badgeColor: "bg-primary/10 text-primary",
    icon: BarChart3,
    iconColor: "bg-primary/10 text-primary",
    title: "Clinic Market Intelligence",
    description:
      "28,252 Australian clinic locations mapped. Tech stacks, firmographics, migration alerts, and decision-maker contacts for B2B outbound.",
    stats: [
      { icon: MapPin, label: "20k+ domains" },
      { icon: BarChart3, label: "10+ verticals" },
      { icon: Zap, label: "Weekly refresh" },
    ],
    image: "/images/clinic-intel-preview.png",
    href: "/clinic-intelligence",
    cta: "Explore the Data",
    external: false,
    borderHover: "hover:border-primary/50",
    glowColor: "from-primary/5",
  },
];

export const ProductsSection = () => {
  return (
    <section id="products" className="py-24 px-6 lg:px-8 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-primary font-label font-bold uppercase tracking-[0.3em] text-sm mb-4 block">
            Built & Operated by Yoluko
          </span>
          <h2 className="text-4xl lg:text-6xl font-headline font-black tracking-tighter text-on-surface">
            Products We&apos;ve{" "}
            <span className="text-primary">Shipped</span>
          </h2>
          <p className="text-on-surface-variant text-lg mt-6 max-w-2xl">
            We don&apos;t just consult — we build and operate real products. Here&apos;s what we&apos;ve launched.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product) => {
            const Icon = product.icon;
            const content = (
              <div
                key={product.title}
                className={`group relative bg-surface-container-low p-8 lg:p-10 rounded-2xl border border-outline-variant/10 ${product.borderHover} transition-all duration-500 overflow-hidden flex flex-col h-full`}
              >
                <div
                  className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${product.glowColor} to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity`}
                />

                <div className="relative flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`w-10 h-10 rounded-full ${product.iconColor} flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span
                      className={`${product.badgeColor} px-3 py-1 rounded text-[10px] font-label font-black uppercase tracking-widest`}
                    >
                      {product.badge}
                    </span>
                  </div>

                  <h3 className="text-3xl font-headline font-bold text-on-surface mb-4">
                    {product.title}
                  </h3>

                  <p className="text-on-surface-variant leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <div className="w-full rounded-xl overflow-hidden mb-8 border border-outline-variant/10">
                    <img
                      src={product.image}
                      alt={product.title}
                      width={1200}
                      height={750}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="flex flex-wrap gap-4 mb-8 mt-auto">
                    {product.stats.map((stat) => {
                      const StatIcon = stat.icon;
                      return (
                        <div
                          key={stat.label}
                          className="flex items-center gap-2 bg-surface-container px-3 py-2 rounded-lg"
                        >
                          <StatIcon className="h-3.5 w-3.5 text-on-surface-variant" />
                          <span className="text-xs font-label font-bold text-on-surface-variant">
                            {stat.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex items-center gap-2 text-sm font-headline font-bold text-primary group-hover:gap-3 transition-all">
                    {product.cta}
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            );

            if (product.external) {
              return (
                <a
                  key={product.title}
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              );
            }

            return (
              <Link key={product.title} href={product.href}>
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
