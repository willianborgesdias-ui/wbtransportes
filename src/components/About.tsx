import React from "react";
import { STATS_DATA } from "../data";
import { Award, Compass, ShieldCheck, Clock, Lock, CreditCard } from "lucide-react";

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
              Sobre a WB Coletas & Entregas Express
            </span>
            <h2 className="text-4xl md:text-5xl font-serif italic mb-6 silver-gradient">
              Logística Inteligente, <br />
              <span className="not-italic font-black text-white uppercase tracking-tighter">Garantia de Confiança</span>
            </h2>
            <div className="h-1 w-20 bg-neon-pink mb-8 rounded-full"></div>
            
            <p className="text-white/70 text-base leading-relaxed mb-6 font-light">
              Nascida no coração logístico e portuário de <strong>Itajaí - SC</strong>, a <strong>WB Coletas & Entregas Express</strong> destaca-se pela inteligência operacional, velocidade sobre duas rodas e integridade. Entendemos que o transporte moderno exige agilidade pontual, segurança cibernética de dados e flexibilidade total de pagamento.
            </p>
            <p className="text-white/70 text-base leading-relaxed mb-8 font-light">
              Atuamos fortemente em duas frentes: <strong>Clientes com Contrato</strong> (com faturamento quinzenal nos dias 15 e 30, relatórios gerenciais e nota fiscal consolidada) e <strong>Clientes Avulsos</strong> (atendimento sob demanda sem fidelidade com pagamento simplificado via Cartão de Crédito ou PIX Instantâneo).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
              <div className="flex flex-col p-4 rounded-xl bg-white/5 border border-white/10 hover:border-neon-blue/30 transition-all">
                <ShieldCheck className="w-6 h-6 text-neon-blue mb-2" />
                <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-1">Qualidade & Sigilo</h3>
                <p className="text-white/50 text-[11px] font-light">Transporte seguro de malotes, documentos e cargas sensíveis.</p>
              </div>

              <div className="flex flex-col p-4 rounded-xl bg-white/5 border border-white/10 hover:border-neon-green/30 transition-all">
                <Clock className="w-6 h-6 text-neon-green mb-2" />
                <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-1">Prazo Expresso</h3>
                <p className="text-white/50 text-[11px] font-light">Moto dedicada com partida em até 15 min e protocolo em tempo real.</p>
              </div>

              <div className="flex flex-col p-4 rounded-xl bg-white/5 border border-white/10 hover:border-neon-pink/30 transition-all">
                <Lock className="w-6 h-6 text-neon-pink mb-2" />
                <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-1">Portas Ocultadas</h3>
                <p className="text-white/50 text-[11px] font-light">Ambiente blindado anti-hacker com SSL e proteção de dados LGPD.</p>
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
