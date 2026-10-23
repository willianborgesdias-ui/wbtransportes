import React from "react";
import { Check, ShieldCheck, CreditCard, QrCode, FileText, Zap, Lock, ShieldAlert, Award } from "lucide-react";
import { PAYMENT_PLANS, SECURITY_FEATURES } from "../data";

interface PaymentPlansProps {
  onSelectPlan?: (planId: "contrato" | "avulso") => void;
}

export default function PaymentPlans({ onSelectPlan }: PaymentPlansProps) {
  const handlePlanClick = (planId: "contrato" | "avulso") => {
    if (onSelectPlan) {
      onSelectPlan(planId);
    }
    const contactElem = document.getElementById("contato");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="planos" className="py-24 bg-brand-surface/60 border-t border-white/5 relative overflow-hidden">
      {/* Decorative cyber ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-neon-blue/5 blur-[160px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-[0.4em] uppercase text-neon-blue mb-3 block">
            Modalidades Flexíveis de Pagamento
          </span>
          <h2 className="text-3xl md:text-5xl font-serif italic silver-gradient mb-4">
            Contrato Quinzenal <span className="not-italic font-black text-white uppercase font-sans">ou Avulso</span>
          </h2>
          <p className="text-white/60 text-sm md:text-base font-light leading-relaxed">
            Escolha o modelo ideal para o ritmo do seu negócio: faturamento quinzenal para rotinas contínuas ou acionamento avulso instantâneo no cartão ou PIX.
          </p>
        </div>

        {/* 2 Plans Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {PAYMENT_PLANS.map((plan) => {
            const isContrato = plan.id === "contrato";
            const borderClass = isContrato ? "neon-border-blue" : "neon-border-green";
            const glowBadgeClass = isContrato ? "bg-neon-blue/15 text-neon-blue border-neon-blue/30" : "bg-neon-green/15 text-neon-green border-neon-green/30";
            const btnBg = isContrato 
              ? "bg-neon-blue text-black hover:bg-white hover:shadow-[0_0_25px_rgba(0,234,255,0.7)]" 
              : "bg-neon-green text-black hover:bg-white hover:shadow-[0_0_25px_rgba(57,255,20,0.7)]";

            return (
              <div
                key={plan.id}
                className={`p-8 md:p-10 rounded-2xl bg-brand-dark flex flex-col justify-between relative group ${borderClass} transition-all duration-300 hover:-translate-y-1.5`}
              >
                {/* Popular / Recommended Tag */}
                {plan.popular && (
                  <div className="absolute -top-3.5 right-8 px-4 py-1 rounded-full bg-gradient-to-r from-neon-blue to-neon-pink text-black text-[10px] font-black uppercase tracking-widest shadow-lg">
                    Recomendado para Empresas
                  </div>
                )}

                <div>
                  {/* Header info */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border ${glowBadgeClass}`}>
                      {plan.badge}
                    </span>
                    <div className="flex items-center gap-1.5 text-white/50 text-xs">
                      {isContrato ? (
                        <>
                          <FileText className="w-4 h-4 text-neon-blue" />
                          <span>Faturamento 15/30</span>
                        </>
                      ) : (
                        <>
                          <CreditCard className="w-4 h-4 text-neon-green" />
                          <span>Cartão / PIX</span>
                        </>
                      )}
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-2">
                    {plan.title}
                  </h3>
                  
                  <p className="text-white/60 text-xs md:text-sm font-light mb-6 leading-relaxed">
                    {plan.tagline}
                  </p>

                  {/* Pricing highlight badge */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-8">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-white/40 mb-1">
                      Forma de Cobrança:
                    </div>
                    <div className="text-base md:text-lg font-black text-white flex items-center gap-2">
                      {isContrato ? (
                        <span className="text-neon-blue">Faturamento Quinzenal no Boleto / PIX</span>
                      ) : (
                        <span className="text-neon-green">Cartão de Crédito ou PIX Instantâneo</span>
                      )}
                    </div>
                    <div className="text-[11px] text-white/50 mt-1 font-light">
                      {isContrato ? "Fechamento a cada 15 dias com NF consolidada" : "Sem mensalidade: pague somente quando utilizar"}
                    </div>
                  </div>

                  {/* Feature checklist */}
                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-white/80 font-light">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isContrato ? "text-neon-blue" : "text-neon-green"}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call to action button */}
                <button
                  onClick={() => handlePlanClick(plan.id)}
                  className={`w-full py-4 rounded-xl font-black uppercase text-xs tracking-[0.2em] transition-all duration-300 cursor-pointer ${btnBg}`}
                >
                  {isContrato ? "Solicitar Contrato Quinzenal" : "Solicitar Frete Avulso"}
                </button>
              </div>
            );
          })}
        </div>

        {/* Cyber Security & Anti-Hacker Shield Banner */}
        <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-r from-brand-dark via-[#071738] to-brand-dark border border-white/15 relative overflow-hidden">
          {/* Subtle neon grid background accent */}
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Lock className="w-48 h-48 text-neon-blue" />
          </div>

          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-8 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-neon-blue/10 border border-neon-blue/30 flex items-center justify-center text-neon-blue shadow-[0_0_20px_rgba(0,234,255,0.3)] shrink-0">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black tracking-[0.3em] uppercase text-neon-blue">
                      Segurança Cibernética & Proteção Ativa
                    </span>
                    <span className="px-2 py-0.5 rounded text-[9px] font-black uppercase bg-neon-green/10 text-neon-green border border-neon-green/20">
                      Blindado
                    </span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mt-1">
                    Portas Ocultadas & Proteção Completa Anti-Hacker
                  </h4>
                </div>
              </div>
              <p className="text-white/60 text-xs md:text-sm font-light max-w-md leading-relaxed">
                Todas as conexões e dados da WB Coletas & Entregas Express operam sob protocolos restritos, com portas públicas ocultadas, firewall anti-invasão e criptografia rigorosa.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {SECURITY_FEATURES.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-neon-blue/30 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-neon-blue">
                      {item.badge}
                    </span>
                    <Lock className="w-3.5 h-3.5 text-white/30" />
                  </div>
                  <h5 className="text-sm font-bold text-white mb-1">
                    {item.title}
                  </h5>
                  <p className="text-white/50 text-[11px] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
