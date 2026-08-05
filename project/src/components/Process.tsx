import { ArrowUpRight, Phone, Zap, Smartphone } from "lucide-react";
import { whatsappLink, trackWhatsApp, trackScheduleVisit } from "@/lib/analytics";

const STEPS = [
  {
    num: "01",
    title: "Diagnóstico gratuito",
    desc: "Revisamos tu espacio, instalación eléctrica y señal WiFi para recomendarte por dónde comenzar.",
    icon: <Phone size={24} />,
  },
  {
    num: "02",
    title: "Instalación profesional",
    desc: "Instalamos y configuramos cada dispositivo sin romper paredes ni reemplazar el cableado existente.",
    icon: <Zap size={24} />,
  },
  {
    num: "03",
    title: "Control desde tu celular",
    desc: "Dejamos la aplicación lista y te explicamos claramente cómo usar cada función en tu día a día.",
    icon: <Smartphone size={24} />,
  },
];

export default function Process() {
  return (
    <section className="process" id="proceso">
      <div className="shell process__grid">
        <div className="process__sticky">
          <div className="section-kicker">03 — Cómo funciona</div>
          <h2>De la visita a tu hogar funcionando.</h2>
          <p>
            Sin complicaciones técnicas. Te acompañamos desde la primera idea hasta dejar todo listo en
            tu celular.
          </p>
          <a
            className="button button--clay"
            href={whatsappLink("Hola, me gustaría agendar un diagnóstico gratuito para mi espacio.")}
            onClick={() => trackScheduleVisit("process_diagnostic")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar diagnóstico <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="process__steps">
          {STEPS.map((step) => (
            <article key={step.num}>
              <span>{step.num}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
              <div className="step-icon">{step.icon}</div>
            </article>
          ))}
        </div>
      </div>

      <div className="shell packages-strip">
        <div>
          <span>Soluciones desde</span>
          <strong>
            Q350<sup>*</sup>
          </strong>
        </div>
        <p>
          Opciones para apartamentos, casas, oficinas y negocios. Armamos la propuesta según el tamaño
          y las necesidades de tu espacio.
        </p>
        <a
          href={whatsappLink("Hola, me gustaría ver opciones y precios de domótica para mi espacio.")}
          onClick={() => trackWhatsApp("process_packages")}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver opciones <ArrowUpRight size={18} />
        </a>
        <small>*Precio de referencia sujeto al equipo y alcance de la instalación.</small>
      </div>
    </section>
  );
}
