import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import wbLogo from "../assets/images/wb_logo_official_1780796730369.png";

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = (sectionId: string) => {
    setIsOpen(false);
    onNavigate(sectionId);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4 ${
          scrolled ? "glass-morphism shadow-lg" : "bg-transparent border-b border-transparent"
        }`}
        id="main-navbar"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Brand */}
          <button
            onClick={() => handleMenuClick("home")}
            className="flex items-center gap-3 group focus:outline-none focus:ring-0 cursor-pointer"
            id="nav-logo-btn"
          >
            <img
              src={wbLogo}
              alt="WB Logo"
              className="h-10 w-10 rounded-full object-cover filter drop-shadow-[0_0_8px_rgba(0,234,255,0.3)] transition-transform group-hover:scale-105 duration-300"
              referrerPolicy="no-referrer"
            />
            <span className="font-black text-xl tracking-normal silver-gradient uppercase">
              WB Transportes SC
            </span>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-8 text-[12px] font-bold uppercase tracking-widest text-white/60">
            <button
              onClick={() => onNavigate("servicos")}
              className={`hover:text-neon-blue transition-colors cursor-pointer ${
                activeSection === "servicos" ? "text-neon-blue text-glow-blue" : ""
              }`}
              id="nav-btn-servicos"
            >
              Serviços
            </button>
            <button
              onClick={() => onNavigate("clientes")}
              className={`hover:text-neon-blue transition-colors cursor-pointer ${
                activeSection === "clientes" ? "text-neon-blue text-glow-blue" : ""
              }`}
              id="nav-btn-clientes"
            >
              Clientes
            </button>
            <button
              onClick={() => onNavigate("sobre")}
              className={`hover:text-neon-pink transition-colors cursor-pointer ${
                activeSection === "sobre" ? "text-neon-pink" : ""
              }`}
              id="nav-btn-sobre"
            >
              Sobre Nós
            </button>
            <button
              onClick={() => onNavigate("cobertura")}
              className={`hover:text-neon-green transition-colors cursor-pointer ${
                activeSection === "cobertura" ? "text-neon-green text-glow-green" : ""
              }`}
              id="nav-btn-cobertura"
            >
              Cobertura
            </button>
            <button
              onClick={() => onNavigate("contato")}
              className="px-5 py-2.5 bg-white text-black hover:bg-neon-blue hover:text-white hover:shadow-[0_0_15px_rgba(0,234,255,0.6)] transition-all rounded-full font-bold uppercase duration-300"
              id="nav-btn-budget"
            >
              Orçamento
            </button>
          </div>

          {/* Mobile Menu Trigger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-neon-blue p-1 focus:outline-none"
            aria-label="Toggle menu"
            id="mobile-menu-trigger"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md md:hidden"
          onClick={() => setIsOpen(false)}
          id="mobile-drawer-overlay"
        >
          <div
            className="fixed top-20 right-4 left-4 p-6 rounded-2xl glass-morphism border border-white/10 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4 duration-300"
            onClick={(e) => e.stopPropagation()}
            id="mobile-drawer-container"
          >
            <div className="flex flex-col gap-4 text-center">
              <button
                onClick={() => handleMenuClick("servicos")}
                className="py-3 text-sm font-semibold uppercase tracking-wider text-white hover:text-neon-blue border-b border-white/5 transition-colors"
                id="mob-btn-servicos"
              >
                Serviços
              </button>
              <button
                onClick={() => handleMenuClick("clientes")}
                className="py-3 text-sm font-semibold uppercase tracking-wider text-white hover:text-neon-blue border-b border-white/5 transition-colors"
                id="mob-btn-clientes"
              >
                Clientes
              </button>
              <button
                onClick={() => handleMenuClick("sobre")}
                className="py-3 text-sm font-semibold uppercase tracking-wider text-white hover:text-neon-pink border-b border-white/5 transition-colors"
                id="mob-btn-sobre"
              >
                Sobre Nós
              </button>
              <button
                onClick={() => handleMenuClick("cobertura")}
                className="py-3 text-sm font-semibold uppercase tracking-wider text-white hover:text-neon-green border-b border-white/5 transition-colors"
                id="mob-btn-cobertura"
              >
                Cobertura
              </button>
              <button
                onClick={() => handleMenuClick("contato")}
                className="mt-2 py-3 px-6 bg-white text-black font-bold uppercase text-xs tracking-widest rounded-full hover:bg-neon-blue hover:text-white flex items-center justify-center gap-2 shadow-lg transition-all"
                id="mob-btn-contato"
              >
                Fazer Orçamento <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
