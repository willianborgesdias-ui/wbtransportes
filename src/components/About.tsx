import React from "react";
import { STATS_DATA } from "../data";
import { Award, Compass, ShieldCheck, Clock } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden bg-brand-dark">
      {/* Background Glow */}
      <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-brand-surface to-transparent opacity-85 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 z-10 relative">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Bio Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-xs font-bold tracking-[0.4em] uppercase text-neon-pink mb-4 block">
              Sobre a WB Transportes SC
            </span>
            <h2 className="text-4xl md:text-5xl font-serif italic mb-6 silver-gradient">
              Logística Inteligente, <br />
              <span className="not-italic font-black text-white uppercase tracking-tighter">Garantia de Confiança</span>
            </h2>
            <div className="h-1 w-20 bg-neon-pink mb-8 rounded-full"></div>
            
            <p className="text-white/70 text-base leading-relaxed mb-6 font-light">
              Nascida no coração logístico de <strong>Itajaí - SC</strong>, a <strong>WB Transportes SC</strong> destaca-se pela inteligência operacional e agilidade. Nós entendemos que o transporte moderno exige mais do que deslocar volumes de um ponto ao outro: demanda pontualidade absoluta, segurança jurídica e flexibilidade comercial.
            </p>
            <p className="text-white/70 text-base leading-relaxed mb-8 font-light">
              Atuamos fortemente tanto no modal físico (entregas dedicadas de alta performance) quanto no modal burocrático (assessoria para liberações de documentos, serviços de cartórios, FLUXO de BL e trâmites de comércio exterior), atuando como o braço estendido do seu negócio.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              <div className="flex gap-4 items-start p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/25 transition-all">
                <ShieldCheck className="w-8 h-8 text-neon-blue shrink-0" />
                <div>
                  <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-1">Qualidade Rigorosa</h3>
                  <p className="text-white/50 text-xs font-light">Garantia de manuseio seguro de envelopes e volumes sensíveis.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/25 transition-all">
                <Clock className="w-8 h-8 text-neon-green shrink-0" />
                <div>
                  <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-1">Prazo Expresso</h3>
                  <p className="text-white/50 text-xs font-light">Compromisso rígido com prazos negociados e rastreio direto.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Column */}
          <div className="lg:col-span-5 w-full">
            <div className="grid grid-cols-2 gap-6 md:gap-8 bg-brand-surface/40 p-8 md:p-10 rounded-2xl border border-white/10" id="stats-panel">
              {STATS_DATA.map((stat, index) => {
                let colorClass = "text-white";
                let badgeColorClass = "text-white/40";

                if (stat.colorTheme === "blue") {
                  colorClass = "text-neon-blue text-glow-blue";
                  badgeColorClass = "text-neon-blue";
                } else if (stat.colorTheme === "pink") {
                  colorClass = "text-neon-pink text-glow-pink";
                  badgeColorClass = "text-neon-pink";
                } else if (stat.colorTheme === "green") {
                  colorClass = "text-neon-green text-glow-green";
                  badgeColorClass = "text-neon-green";
                }

                return (
                  <div key={index} className="flex flex-col items-center text-center py-4">
                    <span className={`block text-3xl md:text-5xl font-black mb-2 tracking-tight ${colorClass}`}>
                      {stat.value}
                    </span>
                    <span className={`text-[10px] font-black uppercase tracking-widest ${badgeColorClass}`}>
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
