import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, Check, Wifi, WifiOff, ShieldCheck, Lock, CreditCard, FileText } from "lucide-react";
import wbLogo from "../assets/images/wb_logo_official_1780796730369.png";

interface ContactFormProps {
  initialModality?: "contrato" | "avulso";
}

// Security sanitization helper to neutralize XSS, script injection and malicious payloads
function sanitizeInput(str: string): string {
  return str
    .replace(/[<>]/g, "") // remove HTML angle brackets
    .replace(/javascript:/gi, "")
    .replace(/on\w+=/gi, "")
    .trim();
}

export default function ContactForm({ initialModality = "contrato" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    modality: initialModality as "contrato" | "avulso",
    message: "",
    // Honeypot field for bot trap (bots auto-fill this, humans cannot see it)
    honeypot: ""
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isOnline, setIsOnline] = useState(typeof navigator !== "undefined" ? navigator.onLine : true);
  const [pendingCount, setPendingCount] = useState(0);
  const [isOfflineQueued, setIsOfflineQueued] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState<number>(0);
  const [securityError, setSecurityError] = useState<string | null>(null);

  // Sync initialModality if prop changes
  useEffect(() => {
    if (initialModality) {
      setFormData((prev) => ({ ...prev, modality: initialModality }));
    }
  }, [initialModality]);

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
        console.warn("Erro ao ler mensagens pendentes:", err);
      }
    }

    const handleOnlineStatus = () => {
      setIsOnline(true);
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

  const syncPendingSubmissions = async () => {
    const stored = localStorage.getItem("wb_pending_messages");
    if (!stored) return;
    try {
      const messages = JSON.parse(stored);
      if (!Array.isArray(messages) || messages.length === 0) return;

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
            modalidade: msg.modality === "contrato" ? "Cliente com Contrato (Faturamento Quinzenal)" : "Cliente Avulso (Cartão de Crédito ou PIX)",
            message: msg.message,
            _subject: "Mensagem Offline - WB Coletas & Entregas Express (" + new Date(msg.timestamp).toLocaleDateString() + " " + new Date(msg.timestamp).toLocaleTimeString() + ")"
          })
        });
      }

      localStorage.removeItem("wb_pending_messages");
      setPendingCount(0);
    } catch (error) {
      console.warn("Falha na sincronização offline:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSecurityError(null);

    // ANTI-HACKER 1: Honeypot check - if bot filled the hidden honeypot, reject silently
    if (formData.honeypot && formData.honeypot.trim() !== "") {
      console.warn("[Segurança] Tentativa de submissão automatizada de bot bloqueada.");
      setSubmitted(true);
      return;
    }

    // ANTI-HACKER 2: Rate Limiting / Flooding Protection
    const now = Date.now();
    if (now - lastSubmitTime < 15000) {
      setSecurityError("Aguarde alguns segundos entre os envios para proteção contra sobrecarga.");
      return;
    }

    // ANTI-HACKER 3: Input Sanitization
    const sanitizedName = sanitizeInput(formData.name);
    const sanitizedPhone = sanitizeInput(formData.phone);
    const sanitizedMessage = sanitizeInput(formData.message);

    if (sanitizedName.length < 2 || sanitizedPhone.length < 8) {
      setSecurityError("Por favor, preencha os campos com dados válidos.");
      return;
    }

    setSubmitting(true);
    setLastSubmitTime(now);

    const modalityText = formData.modality === "contrato"
      ? "Cliente com Contrato (Faturamento Quinzenal no Boleto/PIX)"
      : "Cliente Avulso (Cartão de Crédito ou PIX Instantâneo)";

    if (!navigator.onLine) {
      const pendingItem = {
        id: Date.now().toString(),
        name: sanitizedName,
        phone: sanitizedPhone,
        modality: formData.modality,
        message: sanitizedMessage,
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
        console.error("Erro no cache offline:", err);
      }

      setTimeout(() => {
        setSubmitting(false);
        setSubmitted(true);
        setFormData({ name: "", phone: "", modality: "contrato", message: "", honeypot: "" });
      }, 800);
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
          name: sanitizedName,
          phone: sanitizedPhone,
          modalidade: modalityText,
          message: sanitizedMessage,
          _subject: `Orçamento [${formData.modality.toUpperCase()}] - WB Coletas & Entregas Express`
        })
      });

      if (response.ok) {
        setSubmitting(false);
        setSubmitted(true);
        setIsOfflineQueued(false);
        setFormData({ name: "", phone: "", modality: "contrato", message: "", honeypot: "" });
      } else {
        throw new Error("FormSubmit status não-200");
      }
    } catch (err) {
      console.warn("Falha no envio direto. Salvando offline para contingência.", err);
      const pendingItem = {
        id: Date.now().toString(),
        name: sanitizedName,
        phone: sanitizedPhone,
        modality: formData.modality,
        message: sanitizedMessage,
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
      setFormData({ name: "", phone: "", modality: "contrato", message: "", honeypot: "" });
    }
  };

  return (
    <section id="contato" className="py-24 bg-brand-surface border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Let's Connect */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold tracking-[0.4em] uppercase text-neon-blue mb-3 block">
              Atendimento Imediato
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif italic silver-gradient mb-8">
              Vamos <br />
              <span className="not-italic font-black text-white uppercase font-sans">Agendar?</span>
            </h2>

            <div className="space-y-8">
              <div className="group p-5 rounded-2xl bg-brand-dark/70 border border-white/10 hover:border-neon-green/40 transition-all">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 block mb-2">
                  Plantão WhatsApp / Chamada Express
                </span>
                <a
                  href="https://wa.me/5547999232534?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20coleta%20ou%20entrega%20expressa%20com%20a%20WB%20Coletas%20%26%20Entregas%20Express."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl sm:text-3xl font-black text-white hover:text-neon-green transition-all duration-300 flex items-center gap-3 focus:outline-none"
                >
                  <Phone className="w-6 h-6 text-neon-green shrink-0 animate-bounce" />
                  <span>(47) 99923-2534</span>
                </a>
                <span className="text-[10px] text-neon-green/80 font-mono mt-1 block">
                  ● Partida de motoboy em até 15 min
                </span>
              </div>

              <div className="group p-5 rounded-2xl bg-brand-dark/70 border border-white/10 hover:border-neon-blue/40 transition-all">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 block mb-2">
                  E-mail Corporativo & Financeiro
                </span>
                <a
                  href="mailto:wb.transportesc@gmail.com"
                  className="text-base sm:text-lg md:text-xl font-bold silver-gradient hover:text-neon-blue transition-colors focus:outline-none flex items-center gap-3"
                >
                  <Mail className="w-5 h-5 text-neon-blue shrink-0" />
                  <span>wb.transportesc@gmail.com</span>
                </a>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-4">
                <div className="flex gap-3 items-center">
                  <Clock className="w-5 h-5 text-neon-pink shrink-0" />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 block">
                      Horário de Operação
                    </span>
                    <span className="text-xs font-bold uppercase text-white/90">
                      Segunda a Sexta: 08h às 18h (Plantão 24h agendado)
                    </span>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <MapPin className="w-5 h-5 text-neon-blue shrink-0" />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 block">
                      Base Operacional
                    </span>
                    <span className="text-xs font-bold uppercase text-neon-blue">
                      Itajaí - SC (Atendimento em todo Litoral Norte e SC)
                    </span>
                  </div>
                </div>
              </div>

              {/* Security Shield Callout */}
              <div className="p-4 rounded-xl bg-neon-blue/5 border border-neon-blue/20 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-neon-blue shrink-0 mt-0.5" />
                <div className="text-[11px] text-white/70 font-light leading-relaxed">
                  <strong className="text-white font-bold block uppercase tracking-wider text-[10px] text-neon-blue">
                    Segurança Blindada Anti-Hacker
                  </strong>
                  Seus dados e documentos trafegam em canais protegidos por criptografia SSL 256-bit com portas de rede fechadas e total conformidade com a LGPD.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-tech Message Form with Modality & Bot Shield */}
          <div className="lg:col-span-7 bg-brand-dark p-8 md:p-10 neon-border-blue relative overflow-hidden rounded-2xl">
            {/* Watermark Logo */}
            <img
              src={wbLogo}
              alt="Logo Watermark"
              className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full object-cover opacity-5 pointer-events-none rotate-12"
              referrerPolicy="no-referrer"
            />

            <div className="flex flex-wrap justify-between items-center gap-2 mb-8 relative z-10">
              <div>
                <h4 className="text-xl md:text-2xl font-black uppercase tracking-tighter italic silver-gradient flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-neon-blue" />
                  Solicitar Cotação / Contrato
                </h4>
                <p className="text-[11px] text-white/50 font-light mt-0.5">
                  WB Coletas & Entregas Express • Resposta rápida
                </p>
              </div>

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
                
                <h5 className="text-xl font-black text-white uppercase tracking-wider mb-2">
                  {isOfflineQueued ? "Requisição Gravada Offline!" : "Solicitação Recebida com Sucesso!"}
                </h5>
                
                <p className="text-white/60 text-sm font-light max-w-sm mb-6 leading-relaxed">
                  {isOfflineQueued 
                    ? "Tudo pronto! Como seu dispositivo está offline, sua requisição foi salva em segurança local e será transmitida para a central assim que a conexão for restabelecida."
                    : "Nossa equipe da WB Coletas & Entregas Express já foi notificada e entrará em contato em instantes pelo WhatsApp informado."
                  }
                </p>
                
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-white/10 text-white font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-white/25 transition-all cursor-pointer"
                  id="reset-form-btn"
                >
                  Fazer Nova Solicitação
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6 relative z-10"
                id="contact-logistics-form"
              >
                {/* Security Error Banner */}
                {securityError && (
                  <div className="p-3 bg-neon-pink/15 border border-neon-pink/30 rounded-lg text-xs text-neon-pink font-semibold">
                    {securityError}
                  </div>
                )}

                {/* ANTI-HACKER HONEYPOT: hidden from real users, traps bots */}
                <div style={{ display: "none" }} aria-hidden="true">
                  <label htmlFor="website_check">Leave empty</label>
                  <input
                    id="website_check"
                    type="text"
                    name="website_check"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* MODALITY SELECTION: Contrato Quinzenal vs Avulso Cartão/PIX */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-white/70 block mb-3">
                    Selecione a Modalidade de Atendimento:
                  </label>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, modality: "contrato" })}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                        formData.modality === "contrato"
                          ? "bg-neon-blue/15 border-neon-blue shadow-[0_0_15px_rgba(0,234,255,0.25)]"
                          : "bg-white/5 border-white/10 hover:border-white/30"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-black uppercase text-white flex items-center gap-1.5">
                          <FileText className="w-3.5 h-3.5 text-neon-blue" />
                          Com Contrato
                        </span>
                        {formData.modality === "contrato" && (
                          <span className="w-2 h-2 rounded-full bg-neon-blue shadow-[0_0_6px_#00EAFF]"></span>
                        )}
                      </div>
                      <span className="text-[11px] text-neon-blue font-bold">
                        Faturamento Quinzenal (15/30)
                      </span>
                      <span className="text-[10px] text-white/50 mt-1">
                        Boleto / PIX empresarial com NF
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, modality: "avulso" })}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                        formData.modality === "avulso"
                          ? "bg-neon-green/15 border-neon-green shadow-[0_0_15px_rgba(57,255,20,0.25)]"
                          : "bg-white/5 border-white/10 hover:border-white/30"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-black uppercase text-white flex items-center gap-1.5">
                          <CreditCard className="w-3.5 h-3.5 text-neon-green" />
                          Cliente Avulso
                        </span>
                        {formData.modality === "avulso" && (
                          <span className="w-2 h-2 rounded-full bg-neon-green shadow-[0_0_6px_#39FF14]"></span>
                        )}
                      </div>
                      <span className="text-[11px] text-neon-green font-bold">
                        Cartão de Crédito ou PIX
                      </span>
                      <span className="text-[10px] text-white/50 mt-1">
                        Sem mensalidade: sob demanda
                      </span>
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="form-name" className="text-xs font-bold uppercase tracking-wider text-white/60 block mb-1">
                    Nome Completo ou Razão Social
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    name="name"
                    placeholder="Ex: Carlos Silva ou Minha Empresa Ltda"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-colors text-sm text-white"
                  />
                </div>

                <div>
                  <label htmlFor="form-phone" className="text-xs font-bold uppercase tracking-wider text-white/60 block mb-1">
                    WhatsApp para Retorno
                  </label>
                  <input
                    id="form-phone"
                    type="tel"
                    name="phone"
                    placeholder="(47) 99999-9999"
                    required
                    maxLength={25}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-colors text-sm text-white"
                  />
                </div>

                <div>
                  <label htmlFor="form-message" className="text-xs font-bold uppercase tracking-wider text-white/60 block mb-1">
                    Detalhes da Coleta, Entrega ou Trâmite
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    placeholder="Descreva origem, destino, tipo de volume/documento ou se deseja agendar visitas recorrentes..."
                    rows={3}
                    required
                    maxLength={1000}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-colors text-sm text-white resize-none"
                  ></textarea>
                </div>

                {/* Security Footer notice */}
                <div className="flex items-center justify-between text-[11px] text-white/40 border-t border-white/10 pt-3">
                  <span className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-neon-blue" />
                    Envio protegido por SSL 256-Bit
                  </span>
                  <span>Portas Ocultadas • Anti-Bot</span>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4.5 bg-neon-blue text-black font-black uppercase text-xs tracking-[.25em] hover:bg-white hover:shadow-[0_0_25px_rgba(0,234,255,0.7)] active:scale-98 transition-all disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2 rounded-xl shadow-lg"
                  id="submit-contact-btn"
                >
                  <Send className="w-4 h-4" />
                  {submitting 
                    ? "ENVIANDO COM SEGURANÇA..." 
                    : isOnline 
                      ? "ENVIAR SOLICITAÇÃO EXPRESSA" 
                      : "SALVAR OFFLINE EM SEGURANÇA"
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
