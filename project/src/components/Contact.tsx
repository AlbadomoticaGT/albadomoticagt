import { Phone, Mail, MessageCircle } from "lucide-react";
import { whatsappLink, trackWhatsApp, phoneDisplay } from "@/lib/analytics";
import { SITE } from "@/lib/site.config";

export default function Contact() {
  return (
    <section className="contact" id="contacto">
      <div className="contact__blob contact__blob--one"></div>
      <div className="contact__blob contact__blob--two"></div>

      <div className="shell contact__grid">
        <div className="contact__info">
          <div className="eyebrow eyebrow--light">
            <span></span> Tu hogar puede hacer más
          </div>
          <h2>Hablemos de tu espacio.</h2>
          <p>
            Cuéntanos qué quieres automatizar y coordinamos una visita de diagnóstico sin costo.
            Atención local en todo Guatemala.
          </p>

          <div className="contact__channels">
            <a
              className="contact__channel"
              href={whatsappLink("Hola, me gustaría más información sobre las soluciones de Alba Domótica GT para mi hogar.")}
              onClick={() => trackWhatsApp("contact_whatsapp")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact__channel-icon">
                <MessageCircle size={20} />
              </div>
              <div>
                <small>WhatsApp</small>
                <strong>{phoneDisplay()}</strong>
              </div>
            </a>

            <a
              className="contact__channel"
              href={`tel:${SITE.phoneE164}`}
            >
              <div className="contact__channel-icon">
                <Phone size={20} />
              </div>
              <div>
                <small>Llamada directa</small>
                <strong>{phoneDisplay()}</strong>
              </div>
            </a>

            <a
              className="contact__channel"
              href={`mailto:${SITE.email}`}
            >
              <div className="contact__channel-icon">
                <Mail size={20} />
              </div> 
              <div>
                <small>Correo General</small>
                <strong>{SITE.email}</strong>
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
