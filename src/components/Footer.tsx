import React from "react";
import wbLogo from "../assets/images/wb_logo_official_1780796730369.png";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-brand-dark py-12 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Upper site visual links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-12 border-b border-white/5">
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-3 group focus:outline-none cursor-pointer"
            id="footer-logo-btn"
          >
            <img
              src={wbLogo}
              alt="WB Logo"
              className="h-8 w-8 rounded-full object-cover filter drop-shadow-[0_0_8px_rgba(0,234,255,0.2)]"
              referrerPolicy="no-referrer"
            />
            <span className="font-extrabold text-base tracking-normal silver-gradient uppercase">
              WB Transportes SC
            </span>
          </button>

          <div className="flex flex-wrap gap-6 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/50 justify-center">
            <button
              onClick={() => onNavigate("servicos")}
              className="hover:text-neon-blue transition-colors cursor-pointer"
              id="foot-btn-servicos"
            >
              Serviços
            </button>
            <button
              onClick={() => onNavigate("sobre")}
              className="hover:text-neon-pink transition-colors cursor-pointer"
              id="foot-btn-sobre"
            >
              Sobre Nós
            </button>
            <button
              onClick={() => onNavigate("cobertura")}
              className="hover:text-neon-green transition-colors cursor-pointer"
              id="foot-btn-cobertura"
            >
              Cobertura
            </button>
            <button
              onClick={() => onNavigate("contato")}
              className="hover:text-white transition-colors cursor-pointer"
              id="foot-btn-contato"
            >
              Contato
            </button>
          </div>
        </div>

        {/* Legal copyrights details */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 text-center md:text-left">
          <div className="flex flex-col gap-1">
            <span>&copy; {new Date().getFullYear()} WB Transportes SC. Todos os direitos reservados.</span>
            <span>Itajaí / SC — Litoral Norte</span>
          </div>
          <div className="flex items-center gap-1.5 border border-white/5 bg-white/5 py-1.5 px-3 rounded-full">
            <span>Desenvolvido por</span>
            <a
              href="https://www.instagram.com/william.itj/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-pink hover:text-neon-blue hover:text-glow-blue transition-all duration-300 font-black tracking-widest uppercase"
              id="developer-instagram-link"
              referrerPolicy="no-referrer"
            >
              William Borges Dias
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
