import React from "react";
import { Truck, FileText, Zap, Check } from "lucide-react";
import { SERVICES_DATA } from "../data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "truck": Truck,
  "file-text": FileText,
  "zap": Zap
};

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-brand-surface border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <span className="text-xs font-bold tracking-[0.4em] uppercase text-white/40 mb-4 block">
            O que fazemos
          </span>
          <h2 className="text-4xl md:text-6xl font-serif italic silver-gradient selection:bg-neon-pink">
            Soluções <span className="not-italic font-black text-white uppercase tracking-tighter">Express</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => {
            const IconComponent = iconMap[service.iconName] || Truck;
            
            // Resolve custom borders and text theme classes
            let borderClass = "neon-border-blue";
            let hoverBg = "group-hover:bg-neon-blue";
            let textAccent = "text-neon-blue";
            let textAccentList = "text-neon-blue/80";

            if (service.colorTheme === "pink") {
              borderClass = "neon-border-pink";
              hoverBg = "group-hover:bg-neon-pink";
              textAccent = "text-neon-pink";
              textAccentList = "text-neon-pink/80";
            } else if (service.colorTheme === "green") {
              borderClass = "neon-border-green";
              hoverBg = "group-hover:bg-neon-green";
              textAccent = "text-neon-green";
              textAccentList = "text-neon-green/80";
            }

            return (
              <div
                key={service.id}
                className={`p-10 bg-brand-dark ${borderClass} hover:translate-y-[-8px] transition-all duration-500 rounded-xl group`}
                id={`service-card-${service.id}`}
              >
                {/* Accent Icon Box */}
                <div
                  className={`w-14 h-14 bg-white/5 ${textAccent} flex items-center justify-center mb-8 rounded-lg ${hoverBg} group-hover:text-black transition-all duration-300`}
                >
                  <IconComponent className="w-6 h-6" />
                </div>

                <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6 font-light">
                  {service.description}
                </p>

                {/* Bullet List Details */}
                <ul className={`space-y-3 text-xs font-bold uppercase tracking-widest ${textAccentList}`}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
