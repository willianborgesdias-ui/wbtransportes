import React from "react";
import { MessageCircle } from "lucide-react";
import wbLogo from "../assets/images/wb_logo_official_1780796730369.png";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-28 pb-16 hero-gradient overflow-hidden"
    >
      {/* Decorative Blur Backdrops */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-neon-blue/10 blur-[80px] md:blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-neon-pink/10 blur-[80px] md:blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10 w-full">
        {/* Left column */}
        <div className="flex flex-col items-start text-left">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-neon-blue mb-4 block">
            Logística de Alta Performance
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif italic silver-gradient leading-[1.1] mb-2">
            WB <br />
            <span className="not-italic font-black text-white">Transportes SC</span>
          </h1>
          <div className="h-1.5 w-32 bg-gradient-to-r from-neon-blue via-neon-pink to-neon-green mb-8 rounded-full"></div>
          <p className="text-base md:text-lg text-white/70 max-w-lg mb-10 font-light leading-relaxed">
            Especialistas em entregas expressas e serviços administrativos externos. Sua ponte estratégica entre
            Itajaí e todo o território catarinense.
          </p>
          <div className="flex flex-wrap gap-6 items-center">
            <a
              href="https://wa.me/5547999232534?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20transporte%20expresso."
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              className="flex items-center gap-3 px-8 py-4 bg-brand-dark border border-white/20 hover:border-neon-green text-neon-green font-bold uppercase text-xs tracking-widest transition-all hover:shadow-[0_0_15px_rgba(57,255,20,0.4)] group rounded-lg"
              id="hero-whatsapp-link"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-125 transition-transform duration-300" />
              Falar no WhatsApp
            </a>
            <div className="flex items-center gap-4 text-white/40 italic text-xs md:text-sm">
              <div className="w-8 h-px bg-white/20"></div>
              Atendimento 24h via agendamento
            </div>
          </div>
        </div>

        {/* Right column: Interactive Logo Spinner Graphic */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[450px] md:h-[450px] flex items-center justify-center">
            {/* Concentration Ring 1 */}
            <div className="absolute inset-0 border border-dashed border-neon-blue/20 rounded-full animate-[spin_30s_linear_infinite]"></div>
            {/* Concentration Ring 2 */}
            <div className="absolute inset-4 border border-dashed border-neon-pink/20 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
            {/* Concentration Ring 3 */}
            <div className="absolute inset-8 border border-dashed border-neon-green/20 rounded-full animate-[spin_15s_linear_infinite]"></div>
            {/* Internal Static Backdrop Ring */}
            <div className="absolute inset-12 bg-radial from-brand-surface to-transparent rounded-full opacity-65"></div>

            {/* Glowing Logo Frame */}
            <div className="relative z-10 w-4/5 h-4/5 p-6 md:p-12 transition-all hover:scale-105 duration-500 cursor-pointer">
              <img
                src={wbLogo}
                alt="WB Transportes SC Logo"
                className="w-full h-full rounded-full object-cover filter drop-shadow-[0_0_35px_rgba(0,234,255,0.4)]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
