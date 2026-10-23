import React from "react";
import { ShieldCheck, Lock, CreditCard } from "lucide-react";
import wbLogo from "../assets/images/wb_logo_official_1780796730369.png";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-brand-dark pt-12 pb-48 sm:pb-52 md:pb-48 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Upper site visual links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-10 border-b border-white/5">
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-3 group focus:outline-none cursor-pointer"
            id="footer-logo-btn"
          >
            <img
              src={wbLogo}
              alt="WB Coletas & Entregas Express Logo"
              className="h-9 w-9 rounded-full object-cover filter drop-shadow-[0_0_8px_rgba(0,234,255,0.3)]"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col text-left">
              <span className="font-black text-sm sm:text-base tracking-normal silver-gradient uppercase">
                WB Coletas & Entregas Express
              </span>
              <span className="text-[9px] font-bold tracking-widest text-white/40 uppercase">
                Inteligência Operacional • Itajaí - SC
              </span>
            </div>
          </button>

          <div className="flex flex-wrap gap-5 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/50 justify-center">
            <button
              onClick={() => onNavigate("servicos")}
              className="hover:text-neon-blue transition-colors cursor-pointer"
              id="foot-btn-servicos"
            >
              Serviços
            </button>
            <button
              onClick={() => onNavigate("planos")}
              className="hover:text-neon-green transition-colors cursor-pointer text-neon-green/80"
              id="foot-btn-planos"
            >
              Planos & Pagamentos
            </button>
            <button
              onClick={() => onNavigate("clientes")}
              className="hover:text-neon-blue transition-colors cursor-pointer"
              id="foot-btn-clientes"
            >
              Clientes
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
              className="hover:text-white transition-colors cursor-pointer"
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

        {/* Security & Payment Truststrip */}
        <div className="py-6 border-b border-white/5 flex flex-wrap items-center justify-between gap-4 text-[11px] text-white/50">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px] font-bold uppercase tracking-wider">
              <Lock className="w-3 h-3 text-neon-blue" />
              Portas Ocultadas • Blindagem Anti-Hacker
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px] font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3 h-3 text-neon-green" />
              Criptografia SSL 256-Bit & LGPD
            </span>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-mono text-white/40">
            <span>Contrato: Faturamento Quinzenal (15/30)</span>
            <span>•</span>
            <span>Avulso: Cartão de Crédito ou PIX</span>
          </div>
        </div>

        {/* Legal copyrights details */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 text-center md:text-left">
          <div className="flex flex-col gap-1">
            <span>&copy; {new Date().getFullYear()} WB Coletas & Entregas Express. Todos os direitos reservados.</span>
            <span>Itajaí / SC — Litoral Norte e Vale do Itajaí</span>
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
