import React from "react";
import { COVERAGE_DATA } from "../data";
import wbDeliveryHero from "../assets/images/wb_delivery_hero_1780796424343.png";

export default function Coverage() {
  return (
    <section id="cobertura" className="py-24 bg-brand-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Covered Cities and Logistics network */}
        <div>
          <span className="text-xs font-bold tracking-[0.4em] uppercase text-neon-green mb-4 block">
            Malha de Atendimento
          </span>
          <h2 className="text-4xl md:text-6xl font-serif italic mb-8 silver-gradient">
            Conectando <span className="not-italic font-black text-white uppercase tracking-tighter">Cidades</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
            {COVERAGE_DATA.map((item, index) => {
              // Map theme colors to specific left-side borders
              let borderClass = "border-white/20";
              if (item.theme === "blue") borderClass = "border-neon-blue";
              else if (item.theme === "pink") borderClass = "border-neon-pink";
              else if (item.theme === "green") borderClass = "border-neon-green";

              return (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-4 border-l-4 ${borderClass} bg-white/5 rounded-r-lg hover:bg-white/10 transition-colors duration-300`}
                >
                  <span className="text-lg font-black italic silver-gradient uppercase">
                    {item.city}
                  </span>
                  {item.suffix && (
                    <span className="text-[10px] font-bold opacity-40 uppercase">
                      {item.suffix}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
          
          <p className="mt-12 text-white/50 text-sm italic font-light leading-relaxed">
            * Outras regiões sob consulta e agendamento prévio. Atendimento personalizado para demandas específicas em todo o estado de Santa Catarina.
          </p>
        </div>

        {/* Right Column: Dynamic Square Graphic Image with generated assets */}
        <div className="relative">
          <div className="aspect-square bg-brand-surface border border-white/10 rounded-2xl p-6 md:p-8 overflow-hidden group shadow-2xl relative">
            {/* Glowing neon background inside */}
            <div className="absolute inset-0 bg-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            <img
              src={wbDeliveryHero}
              alt="WB Transportes SC Delivery Hero"
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 rounded-lg scale-100 group-hover:scale-[1.03]"
              referrerPolicy="no-referrer"
            />
            
            {/* Floating glass badge */}
            <div className="absolute bottom-10 right-10 px-5 py-2.5 glass-morphism rounded-full shadow-lg border border-white/20">
              <span className="text-[10px] font-bold tracking-widest uppercase text-neon-blue">
                Agilidade Sobre Rodas
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
