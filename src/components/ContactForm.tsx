import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, Check, Wifi, WifiOff } from "lucide-react";
import wbLogo from "../assets/images/wb_logo_official_1780796730369.png";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isOnline, setIsOnline] = useState(typeof navigator !== "undefined" ? navigator.onLine : true);
  const [pendingCount, setPendingCount] = useState(0);
  const [isOfflineQueued, setIsOfflineQueued] = useState(false);

  // Load initial pending messages count from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("wb_pending_messages");
    if (stored) {
      try {
        const messages = JSON.parse(stored);
        if (Array.isArray(messages)) {
          setPendingCount(messages.length);
        }
      } catch (err) {
        console.warn("Error parsing pending messages:", err);
      }
    }

    // Monitor connectivity status
    const handleOnlineStatus = () => {
      setIsOnline(true);
      // Attempt automated syncing when going back online
      syncPendingSubmissions();
    };

    const handleOfflineStatus = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOfflineStatus);

    return () => {
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOfflineStatus);
    };
  }, []);

  // Function to serialize and sync any pending forms in the background
  const syncPendingSubmissions = async () => {
    const stored = localStorage.getItem("wb_pending_messages");
    if (!stored) return;
    try {
      const messages = JSON.parse(stored);
      if (!Array.isArray(messages) || messages.length === 0) return;

      console.log(`[PWA Log] Sincronizando ${messages.length} mensagens salvas offline...`);

      for (const msg of messages) {
        await fetch("https://formsubmit.co/ajax/wb.transportesc@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            name: msg.name,
            phone: msg.phone,
            message: msg.message,
            _subject: "Mensagem Offline - WB Transportes SC (" + new Date(msg.timestamp).toLocaleDateString() + " " + new Date(msg.timestamp).toLocaleTimeString() + ")"
          })
        });
      }

      // Success! Wipe local storage cache
      localStorage.removeItem("wb_pending_messages");
      setPendingCount(0);
      console.log("[PWA Log] Envio offline concluído com sucesso!");
    } catch (error) {
      console.warn("[PWA Log] Falha na sincronização em segundo plano:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    if (!navigator.onLine) {
      // User is offline, queue submission
      const pendingItem = {
        id: Date.now().toString(),
        name: formData.name,
        phone: formData.phone,
        message: formData.message,
        timestamp: new Date().toISOString()
      };

      try {
        const existingStored = localStorage.getItem("wb_pending_messages");
        const currentList = existingStored ? JSON.parse(existingStored) : [];
        currentList.push(pendingItem);
        localStorage.setItem("wb_pending_messages", JSON.stringify(currentList));
        
        setPendingCount(currentList.length);
        setIsOfflineQueued(true);
      } catch (err) {
        console.error("Local storage fails to persist:", err);
      }

      // Simulate success callback offline transitions
      setTimeout(() => {
        setSubmitting(false);
        setSubmitted(true);
        setFormData({ name: "", phone: "", message: "" });
      }, 1000);
      return;
    }

    // Direct submit via FormSubmit AJAX service
    try {
      const response = await fetch("https://formsubmit.co/ajax/wb.transportesc@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          message: formData.message,
          _subject: "Lead do Site - WB Transportes SC"
        })
      });

      if (response.ok) {
        setSubmitting(false);
        setSubmitted(true);
        setIsOfflineQueued(false);
        setFormData({ name: "", phone: "", message: "" });
      } else {
        throw new Error("FormSubmit status non-200");
      }
    } catch (err) {
      console.warn("Submissão direta falhou. Salvando localmente para reenviar assim que a rede voltar.", err);
      // Fallback: Queue offline anyway
      const pendingItem = {
        id: Date.now().toString(),
        name: formData.name,
        phone: formData.phone,
        message: formData.message,
        timestamp: new Date().toISOString()
      };
      
      const existingStored = localStorage.getItem("wb_pending_messages");
      const currentList = existingStored ? JSON.parse(existingStored) : [];
      currentList.push(pendingItem);
      localStorage.setItem("wb_pending_messages", JSON.stringify(currentList));
      
      setPendingCount(currentList.length);
      setIsOfflineQueued(true);

      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", phone: "", message: "" });
    }
  };


  return (
    <section id="contato" className="py-24 bg-brand-surface border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-end">
          
          {/* Left Column: Let's Connect */}
          <div>
            <h2 className="text-5xl md:text-7xl font-serif italic silver-gradient mb-12">
              Vamos <br />
              <span className="not-italic font-black text-white uppercase select-all">Conectar?</span>
            </h2>

            <div className="space-y-10">
              <div className="group">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 block mb-2">
                  WhatsApp / Comercial
                </span>
                <a
                  href="https://wa.me/5547999232534?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20as%20solu%C3%A7%C3%B5es%20de%20log%C3%ADstica."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl sm:text-3xl md:text-4xl font-black text-white hover:text-neon-green transition-all duration-300 flex items-center gap-3 focus:outline-none focus:ring-0"
                >
                  <Phone className="w-6 h-6 text-neon-green shrink-0 animate-bounce" />
                  <span>(47) 99923-2534</span>
                </a>
              </div>

              <div className="group">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 block mb-2">
                  E-mail Corporativo
                </span>
                <a
                  href="mailto:wb.transportesc@gmail.com"
                  className="text-lg sm:text-xl md:text-2xl font-bold silver-gradient hover:text-neon-blue transition-colors focus:outline-none flex items-center gap-3"
                >
                  <Mail className="w-6 h-6 text-neon-blue shrink-0" />
                  <span>wb.transportesc@gmail.com</span>
                </a>
              </div>

              <div className="pt-8 border-t border-white/5 flex flex-wrap gap-12">
                <div className="flex gap-3 items-center">
                  <Clock className="w-5 h-5 text-neon-pink shrink-0" />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 block">
                      Atendimento
                    </span>
                    <span className="text-xs font-bold uppercase text-white/80">
                      Seg - Sex: 08h às 18h
                    </span>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <MapPin className="w-5 h-5 text-neon-blue shrink-0" />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 block">
                      Localização
                    </span>
                    <span className="text-xs font-bold uppercase text-neon-blue">
                      Itajaí - SC
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-tech Message Form */}
          <div className="bg-brand-dark p-8 md:p-10 neon-border-blue relative overflow-hidden rounded-xl">
            {/* Watermark Logo */}
            <img
              src={wbLogo}
              alt="Logo Watermark"
              className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full object-cover opacity-5 pointer-events-none rotate-12"
              referrerPolicy="no-referrer"
            />

            <div className="flex flex-wrap justify-between items-center gap-2 mb-8 relative z-10">
              <h4 className="text-xl font-black uppercase tracking-tighter italic silver-gradient flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-neon-blue" />
                Enviar Mensagem Direta
              </h4>

              {/* High-tech Online / Offline Indicator Badge */}
              <div className="flex items-center gap-2">
                {isOnline ? (
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-black tracking-widest bg-neon-green/10 text-neon-green border border-neon-green/20 uppercase">
                    <Wifi className="w-3 h-3" />
                    Online
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-black tracking-widest bg-neon-pink/10 text-neon-pink border border-neon-pink/20 uppercase animate-pulse">
                    <WifiOff className="w-3 h-3" />
                    Offline
                  </span>
                )}
                
                {pendingCount > 0 && (
                  <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] font-black tracking-widest bg-neon-blue/10 text-neon-blue border border-neon-blue/20 uppercase">
                    {pendingCount} Salva{pendingCount > 1 ? "s" : ""}
                  </span>
                )}
              </div>
            </div>

            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center animate-in fade-in zoom-in duration-300 relative z-10">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 border ${isOfflineQueued ? "bg-neon-blue/10 text-neon-blue border-neon-blue/30" : "bg-neon-green/10 text-neon-green border-neon-green/30"}`}>
                  {isOfflineQueued ? <Clock className="w-8 h-8 animate-spin" /> : <Check className="w-8 h-8" />}
                </div>
                
                <h5 className="text-lg font-black text-white uppercase tracking-wider mb-2">
                  {isOfflineQueued ? "Mensagem Agendada!" : "Mensagem Enviada!"}
                </h5>
                
                <p className="text-white/60 text-sm font-light max-w-xs mb-6">
                  {isOfflineQueued 
                    ? "Tudo certo! Como seu dispositivo está offline, sua requisição foi salva em segurança no navegador e será enviada à central logística de forma 100% automática assim que a internet voltar!"
                    : "Sua requisição foi enviada com sucesso para nossa central logística. Entraremos em contato em breve."
                  }
                </p>
                
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 bg-white/10 text-white font-bold text-xs uppercase tracking-widest rounded hover:bg-white/25 transition-all cursor-pointer"
                  id="reset-form-btn"
                >
                  Enviar Outra
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6 relative z-10"
                id="contact-logistics-form"
              >
                {!isOnline && (
                  <div className="p-3.5 bg-neon-pink/5 border border-neon-pink/20 rounded-lg text-xs leading-relaxed text-white/80 font-medium">
                    📍 <span className="text-neon-pink font-bold">Aviso offline:</span> Você preencherá e enviará seu formulário normalmente. Nosso sistema salvaguardará os dados e os enviará ao servidor assim que houver sinal!
                  </div>
                )}

                <div>
                  <label htmlFor="form-name" className="sr-only">Seu Nome / Empresa</label>
                  <input
                    id="form-name"
                    type="text"
                    name="name"
                    placeholder="Seu Nome / Empresa"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-neon-blue transition-colors text-sm text-white autofill:bg-transparent animate-none"
                  />
                </div>

                <div>
                  <label htmlFor="form-phone" className="sr-only">WhatsApp</label>
                  <input
                    id="form-phone"
                    type="tel"
                    name="phone"
                    placeholder="WhatsApp"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-neon-blue transition-colors text-sm text-white"
                  />
                </div>

                <div>
                  <label htmlFor="form-message" className="sr-only">Mensagem</label>
                  <textarea
                    id="form-message"
                    name="message"
                    placeholder="Como podemos ajudar sua logística hoje?"
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-neon-blue transition-colors text-sm text-white resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-5 bg-white text-black font-black uppercase text-xs tracking-[.25em] hover:bg-neon-blue hover:text-white hover:shadow-[0_0_20px_rgba(0,234,255,0.6)] active:scale-98 transition-all disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2 rounded"
                  id="submit-contact-btn"
                >
                  <Send className="w-3.5 h-3.5" />
                  {submitting 
                    ? "SALVANDO..." 
                    : isOnline 
                      ? "ENVIAR REQUISIÇÃO" 
                      : "SALVAR OFFLINE"
                  }
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
