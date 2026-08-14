import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Clients from "./components/Clients";
import Coverage from "./components/Coverage";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Highlight active link during window scroll positions
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "servicos", "clientes", "sobre", "cobertura", "contato"];
      const scrollPosition = window.scrollY + 220; // offset factor

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Soft smooth anchor navigation mapping
  const handleNavigation = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-brand-dark antialiased text-slate-100 selection:bg-neon-blue selection:text-black">
      
      {/* Interactive Cyber-Green Floating Speed WhatsApp Support Badge */}
      <a
        id="floating-leads-whatsapp"
        href="https://wa.me/5547999232534?text=Ol%C3%A1%2C%20gostaria%20de%20um%20atendimento%20expresso%20da%20WB%20Transportes%20SC."
        target="_blank"
        rel="noopener noreferrer"
        referrerPolicy="no-referrer"
        className="fixed bottom-6 right-6 z-40 bg-neon-green/90 hover:bg-neon-green text-black w-14 h-14 rounded-full shadow-[0_0_20px_rgba(57,255,20,0.5)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 group"
        aria-label="Falar com a Central pelo WhatsApp"
      >
        <svg
          className="w-7 h-7 fill-current transition-transform duration-300"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.864-9.843.002-2.63-1.023-5.102-2.886-6.968C16.586 1.93 14.113.905 11.49.905 6.059.905 1.635 5.318 1.631 10.75c-.001 1.777.472 3.51 1.371 5.042l-.999 3.648 3.75-.983c1.478.807 3.125 1.233 4.294 1.222zM18.817 15.1c-.287-.144-1.7-.84-1.962-.936-.263-.096-.454-.144-.645.144-.191.288-.741.936-.908 1.128-.167.192-.335.216-.622.072-.288-.145-1.215-.447-2.316-1.43-.856-.764-1.433-1.708-1.6-1.997-.168-.288-.018-.444.126-.587.129-.129.287-.335.431-.503.144-.168.192-.288.287-.48.096-.192.048-.361-.024-.505-.072-.144-.645-1.56-.884-2.136-.233-.564-.469-.488-.645-.497-.167-.008-.358-.012-.55-.012s-.502.072-.765.36c-.263.288-1.004.984-1.004 2.4s1.028 2.784 1.171 2.976c.143.192 2.022 3.088 4.9 4.331.685.296 1.22.473 1.637.605.689.219 1.316.188 1.812.114.553-.083 1.7-.696 1.939-1.368.238-.672.238-1.248.167-1.368-.071-.12-.262-.192-.549-.336z" />
        </svg>
        <span className="absolute right-16 scale-0 bg-slate-900 border border-slate-800 text-white font-sans text-[10px] font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl group-hover:scale-100 transition-all duration-300">
          Suporte Expresso
        </span>
      </a>

      {/* Persistence Glass Navigation Bar */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigation} />

      {/* Core Landing Page Modules */}
      <main className="w-full">
        {/* Hero Section */}
        <Hero onNavigate={handleNavigation} />

        {/* Services & Core Logistics Solutions */}
        <Services />

        {/* Clientes / Parceiros trusts */}
        <Clients />

        {/* Company profile & regional stats */}
        <About />

        {/* Coverage network & high quality dynamic graphic illustration */}
        <Coverage />

        {/* Secure Contacts and Inquiries forms */}
        <ContactForm />
      </main>

      {/* Corporate footer footer maps sitemap */}
      <Footer onNavigate={handleNavigation} />
    </div>
  );
}
