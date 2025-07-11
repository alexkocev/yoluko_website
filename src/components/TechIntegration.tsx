import { 
    Database, 
    Mail, 
    Calendar, 
    CreditCard, 
    FileSpreadsheet, 
    MessageSquare, 
    Users, 
    BarChart3,
    Cloud,
    Zap,
    ShoppingCart,
    Settings
  } from "lucide-react";

  interface TechIntegrationProps {
    t: {
      title: string;
      description: string;
      subtext: string;
    };
  }
  
  const platforms = [
    { name: "Salesforce", icon: Database, color: "text-blue-600" },
    { name: "Gmail", icon: Mail, color: "text-red-500" },
    { name: "Google Calendar", icon: Calendar, color: "text-green-500" },
    { name: "Stripe", icon: CreditCard, color: "text-purple-600" },
    { name: "Slack", icon: MessageSquare, color: "text-purple-500" },
    { name: "HubSpot", icon: BarChart3, color: "text-orange-500" },
    { name: "AWS", icon: Cloud, color: "text-orange-400" },
    { name: "Zapier", icon: Zap, color: "text-orange-500" }
  ];
  
  export const TechIntegration = ({t}: TechIntegrationProps) => {
    return (
      <section className="py-12 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <h2 className="text-2xl lg:text-3xl font-bold text-yoluko-navy mb-4">
              {t.title}
            </h2>
            <p className="text-base text-yoluko-navy font-medium">
              {t.description}
            </p>
          </div>
  
          {/* Platform Icons Single Row */}
          <div className="flex justify-center items-center gap-6 md:gap-8 lg:gap-12 mb-6 flex-wrap">
            {platforms.map((platform, index) => (
              <div 
                key={platform.name}
                className="flex flex-col items-center group hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-2 group-hover:shadow-md transition-shadow">
                  <platform.icon className={`h-6 w-6 ${platform.color}`} />
                </div>
                <span className="text-xs text-yoluko-slate text-center font-medium hidden md:block">
                  {platform.name}
                </span>
              </div>
            ))}
          </div>
  
          {/* 200+ Platforms Text */}
          <div className="text-center animate-fade-in">
            <p className="text-lg text-yoluko-slate">
              <span className="text-2xl font-bold text-yoluko-orange">{t.subtext.split(' ')[0]}</span>
              {" "}{t.subtext.split(' ').slice(1).join(' ')}
            </p>
          </div>
        </div>
      </section>
    );
  };
  