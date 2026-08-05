import {
  Sparkles,
  ArrowUpRight,
  ArrowDownRight,
  Lightbulb,
  Camera,
  ShieldCheck,
  Smartphone,
  Check,
  Calendar,
  MessageCircle,
} from "lucide-react";
import { whatsappLink, trackWhatsApp, trackScheduleVisit } from "@/lib/analytics";

const BENEFITS = [
  "Domótica residencial",
  "Seguridad inteligente",
  "Automatización de oficinas",
  "Integración con Alexa",
  "Integración con Google Home",
  "Diagnóstico sin costo",
];

const HERO_IMAGE =
  "https://images.pexels.com/photos/34992778/pexels-photo-34992778.jpeg?auto=compress&cs=tinysrgb&w=940&h=1200&fit=crop";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__shape hero__shape--one"></div>
      <div className="hero__shape hero__shape--two"></div>

      <div className="shell hero__grid">
        <div className="hero__copy reveal reveal--one">
          <div className="eyebrow">
            <Sparkles size={15} /> Tecnología para vivir mejor
          </div>
          <h1>
            Domótica Inteligente para <em>Hogares y Negocios</em> en Guatemala
          </h1>
          <p>
            Controla iluminación, cámaras, accesos, sensores y automatizaciones desde tu celular con
            instalación profesional y soporte local.
          </p>

          <div className="hero__actions">
            <a
              className="button button--dark"
              href="#contacto"
              onClick={() => trackScheduleVisit("hero_quote")}
            >
              Solicitar Cotización <ArrowUpRight size={18} />
            </a>
            <a
              className="button button--clay"
              href={whatsappLink("Hola, me gustaría agendar una visita técnica de diagnóstico sin costo.")}
              onClick={() => trackScheduleVisit("hero_visit")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar size={18} /> Agendar Visita Técnica
            </a>
            <a
              className="button button--outline"
              href={whatsappLink("Hola, me gustaría hablar con un asesor sobre domótica.")}
              onClick={() => trackWhatsApp("hero_advisor")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} /> Hablar con un Asesor
            </a>
          </div>

          <div className="benefit-bar">
            {BENEFITS.map((b) => (
              <span key={b} className="benefit-bar__item">
                <Check size={15} /> {b}
              </span>
            ))}
          </div>

          <div className="hero__notes">
            <span>
              <Check size={15} /> Diagnóstico sin costo
            </span>
            <span>
              <Check size={15} /> Sin romper paredes
            </span>
            <span>
              <Check size={15} /> Soporte local en Guatemala
            </span>
          </div>
        </div>

        <div className="hero__visual reveal reveal--two">
          <div className="hero__image-wrap">
            <img src={HERO_IMAGE} alt="Sala moderna equipada con dispositivos de hogar inteligente" />
          </div>
          <div className="orbit orbit--one">
            <Lightbulb size={20} />
          </div>
          <div className="orbit orbit--two">
            <Camera size={20} />
          </div>
          <div className="orbit orbit--three">
            <ShieldCheck size={20} />
          </div>
          <div className="hero__floating-card">
            <span className="pulse"></span>
            <div>
              <small>Tu hogar</small>
              <strong>Conectado ahora</strong>
            </div>
            <Smartphone size={22} />
          </div>
          <svg className="hero__scribble" viewBox="0 0 180 80" aria-hidden="true">
            <path d="M4 64C41 6 88 83 176 17" />
            <path d="m158 12 18 5-7 17" />
          </svg>
        </div>
      </div>

      <a className="hero__scroll" href="#soluciones" aria-label="Bajar a soluciones">
        <ArrowDownRight size={24} />
      </a>
    </section>
  );
}
