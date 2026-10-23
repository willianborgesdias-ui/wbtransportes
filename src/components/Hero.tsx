import React, { useState } from "react";
import { MessageCircle, Zap, ShieldCheck, CreditCard, FileText, ArrowRight, Sparkles } from "lucide-react";
import wbLogo from "../assets/images/wb_logo_official_1780796730369.png";
import motoNight from "../assets/images/delivery_hero_night_1780861998154.png";
import motoUrban from "../assets/images/wb_delivery_hero_1780796424343.png";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [activeMoto, setActiveMoto] = useState<"night" | "urban">("night");

  return (
    <section
      id="home"
      className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center pt-28 pb-16 hero-gradient overflow-hidden"
    >
      {/* Decorative Blur Backdrops */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-neon-blue/15 blur-[90px] md:blur-[130px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-neon-pink/15 blur-[90px] md:blur-[130px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center z-10 w-full">
        {/* Left column: Text, Badges, CTAs (7 cols on lg) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Security & Response Micro-Badge */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/30 text-neon-blue text-[10px] font-black uppercase tracking-widest">
              <Sparkles className="w-3 h-3" />
              Alta Performance & Pronta Resposta
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px] font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3 h-3 text-neon-green" />
              Portas Ocultas • Anti-Hacker
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-serif italic silver-gradient leading-[1.08] mb-3">
            WB <br />
            <span className="not-italic font-black text-white font-sans tracking-tight">
              Coletas & Entregas <span className="text-neon-blue">Express</span>
            </span>
          </h1>

          <div className="h-1.5 w-36 bg-gradient-to-r from-neon-blue via-neon-pink to-neon-green mb-6 rounded-full"></div>
          
          <p className="text-base md:text-lg text-white/80 max-w-xl mb-6 font-light leading-relaxed">
            Especialistas em entregas expressas com <strong>moto dedicadas</strong> e suporte administrativo externo estratégico. Agilidade máxima entre Itajaí, Litoral Norte e todo o território catarinense.
          </p>

          {/* Highlights: Contrato Quinzenal e Avulso Cartão/PIX */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full max-w-xl mb-8">
            <div 
              onClick={() => onNavigate("planos")}
              className="p-3.5 rounded-xl bg-white/[0.04] border border-neon-blue/30 hover:border-neon-blue hover:bg-neon-blue/5 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-2 text-neon-blue text-xs font-black uppercase tracking-wider mb-1">
                <FileText className="w-4 h-4 shrink-0" />
                <span>Contrato Quinzenal</span>
              </div>
              <p className="text-[11px] text-white/60 font-light">
                Fechamento quinzenal no boleto/PIX com NF unificada e tarifas com desconto para empresas.
              </p>
            </div>

            <div 
              onClick={() => onNavigate("planos")}
              className="p-3.5 rounded-xl bg-white/[0.04] border border-neon-green/30 hover:border-neon-green hover:bg-neon-green/5 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-2 text-neon-green text-xs font-black uppercase tracking-wider mb-1">
                <CreditCard className="w-4 h-4 shrink-0" />
                <span>Avulso: Cartão ou PIX</span>
              </div>
              <p className="text-[11px] text-white/60 font-light">
                Sem mensalidade ou vínculo: solicite motoboy na hora e pague via Cartão de Crédito ou PIX.
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="https://wa.me/5547999232534?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20coleta%20expressa%20com%20a%20WB%20Coletas%20%26%20Entregas%20Express."
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              className="flex items-center gap-3 px-8 py-4 bg-neon-green text-black hover:bg-white font-black uppercase text-xs tracking-widest transition-all duration-300 hover:shadow-[0_0_25px_rgba(57,255,20,0.6)] group rounded-xl shadow-lg"
              id="hero-whatsapp-link"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-125 transition-transform duration-300 fill-current" />
              Chamar Moto no WhatsApp
            </a>

            <button
              onClick={() => onNavigate("contato")}
              className="flex items-center gap-2 px-6 py-4 bg-brand-surface/80 border border-white/20 hover:border-neon-blue text-white font-bold uppercase text-xs tracking-widest transition-all hover:bg-white/10 rounded-xl cursor-pointer"
            >
              <span>Orçamento Online</span>
              <ArrowRight className="w-4 h-4 text-neon-blue" />
            </button>
          </div>

          <div className="mt-6 flex items-center gap-3 text-white/40 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-neon-green animate-ping"></span>
            <span>Atendimento imediato em Itajaí • Navegantes • Balneário Camboriú • Penha • Região</span>
          </div>

        </div>

        {/* Right column: Moto de Entrada de Alto Impacto (5 cols on lg) */}
        <div className="lg:col-span-5 relative flex flex-col items-center">
          
          {/* Motorcycle Showcase Container */}
          <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden border-2 border-white/15 bg-brand-surface/90 shadow-[0_0_50px_rgba(0,234,255,0.25)] group transition-all duration-500 hover:border-neon-blue/60">
            
            {/* Top Status Bar with WB Logo and Live Badge */}
            <div className="p-3.5 bg-brand-dark/90 backdrop-blur-md border-b border-white/10 flex items-center justify-between z-20 relative">
              <div className="flex items-center gap-2.5">
                <img
                  src={wbLogo}
                  alt="WB Logo"
                  className="w-7 h-7 rounded-full object-cover filter drop-shadow-[0_0_6px_rgba(0,234,255,0.5)]"
                  referrerPolicy="no-referrer"
                />
                <span className="text-xs font-black uppercase tracking-wider text-white">
                  Frota Express Ativa
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-neon-green/15 text-neon-green text-[10px] font-black uppercase tracking-wider border border-neon-green/30">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse"></span>
                Pronta Resposta
              </span>
            </div>

            {/* Motorcycle Image Frame with Speed Streaks */}
            <div className="relative aspect-[16/10] overflow-hidden bg-black/60">
              <img
                src={activeMoto === "night" ? motoNight : motoUrban}
                alt="Moto de Coletas e Entregas Expressas WB"
                className="w-full h-full object-cover object-center filter saturate-125 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Glowing gradient vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80 pointer-events-none"></div>

              {/* Floating Bottom Speed Badge */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2.5 rounded-xl glass-morphism border border-white/20">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-neon-blue/20 text-neon-blue flex items-center justify-center font-black">
                    <Zap className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase text-white tracking-wider">
                      Partida Imediata
                    </div>
                    <div className="text-[9px] text-neon-blue font-bold tracking-wide">
                      Tempo Médio: 15 minutos
                    </div>
                  </div>
                </div>

                <span className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded bg-white/10 text-white/90 border border-white/15">
                  100% Segurado
                </span>
              </div>
            </div>

            {/* Interactive Moto Selector Bar */}
            <div className="p-3 bg-brand-dark/95 border-t border-white/10 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => setActiveMoto("night")}
                className={`flex-1 py-2 px-3 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  activeMoto === "night"
                    ? "bg-neon-blue text-black shadow-[0_0_12px_rgba(0,234,255,0.5)]"
                    : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                <span>🏍️ Rodoviário & Portos</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveMoto("urban")}
                className={`flex-1 py-2 px-3 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  activeMoto === "urban"
                    ? "bg-neon-pink text-white shadow-[0_0_12px_rgba(255,0,144,0.5)]"
                    : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                <span>⚡ Urbano & Cartórios</span>
              </button>
            </div>

          </div>

          {/* Micro Trust indicators below moto */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-[10px] font-bold uppercase tracking-widest text-white/50">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-neon-green" />
              Protocolo Digital
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CreditCard className="w-3.5 h-3.5 text-neon-blue" />
              Cartão / PIX / Fatura
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-neon-pink" />
              Rotas Otimizadas
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
