import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Check, MessageCircle, Phone, ArrowLeft } from "lucide-react";
import { whatsappLink, trackWhatsApp, phoneLink, phoneDisplay } from "@/lib/analytics";

export default function Thanks() {
  useEffect(() => {
    document.title = "Gracias por contactarnos | Alba Domótica GT";
  }, []);

  return (
    <div className="thanks">
      <div className="thanks__card">
        <div className="thanks__icon">
          <Check size={36} strokeWidth={2.5} />
        </div>
        <h1>Gracias por contactarnos</h1>
        <p>
          Hemos recibido tu solicitud y pronto nos comunicaremos contigo. Si prefieres, puedes
          escribirnos por WhatsApp o llamarnos directamente para agilizar tu atención:
        </p>

        <div className="thanks__channels">
          <a
            className="thanks__channel"
            href={whatsappLink("Hola, acabo de enviar una solicitud de cotización desde la web y me gustaría agilizar mi atención.")}
            onClick={() => trackWhatsApp("thanks_whatsapp")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="thanks__channel-icon thanks__channel-icon--phone">
              <MessageCircle size={22} />
            </div>
            <div>
              <small>WhatsApp</small>
              <strong>{phoneDisplay()}</strong>
            </div>
          </a>

          <a
            className="thanks__channel"
            href={phoneLink()}
          >
            <div className="thanks__channel-icon thanks__channel-icon--phone">
              <Phone size={22} />
            </div>
            <div>
              <small>Llamada directa</small>
              <strong>{phoneDisplay()}</strong>
            </div>
          </a>
        </div>

        <Link className="thanks__back" to="/">
          <ArrowLeft size={16} /> Regresar al sitio
        </Link>
      </div>
    </div>
  );
}
