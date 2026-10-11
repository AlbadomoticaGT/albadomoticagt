import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Check, MessageCircle, ArrowLeft, ArrowRight } from "lucide-react";
import { whatsappLink, trackWhatsApp, phoneDisplay } from "@/lib/analytics";
import { setPageSeo } from "@/lib/seo";

export default function Thanks() {
  useEffect(() => {
    setPageSeo({
      title: "Gracias por contactarnos | AlbaDomoticaGT",
      description: "Confirmación de solicitud enviada a AlbaDomoticaGT.",
      path: "/gracias",
      robots: "noindex, follow"
    });
  }, []);

  return (
    <div className="thanks thanks--conversion">
      <div className="thanks__card thanks__card--wide">
        <div className="thanks__icon">
          <Check size={36} strokeWidth={2.5} />
        </div>
        <h1>Gracias. Recibimos su solicitud.</h1>
        <p>
          Revisaremos la información y nos comunicaremos con usted. Si desea agilizar la atención,
          puede escribirnos directamente por WhatsApp.
        </p>

        <a
          className="button button--primary thanks__wa"
          href={whatsappLink("Hola, acabo de enviar una solicitud desde la web de AlbaDomoticaGT y quiero continuar por WhatsApp.")}
          onClick={() => trackWhatsApp("thanks_whatsapp")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={20}/> Continuar por WhatsApp · {phoneDisplay()}
        </a>

        <div className="thanks__next">
          <h2>Mientras le contactamos, puede revisar estas opciones:</h2>
          <div className="thanks__offers">
            <article>
              <small>YA TIENE SUS DISPOSITIVOS</small>
              <strong>Q300</strong>
              <h3>Instalación + configuración</h3>
              <p>Hasta 4 dispositivos compatibles dentro de la capital.</p>
              <Link to="/instalacion-domotica-guatemala">Ver servicio <ArrowRight size={16}/></Link>
            </article>
            <article>
              <small>PROMOCIÓN</small>
              <strong>Q1,799</strong>
              <h3>6 puntos inteligentes</h3>
              <p>Instalación, configuración y escenas básicas.</p>
            </article>
            <article>
              <small>PROMOCIÓN</small>
              <strong>Q2,399</strong>
              <h3>8 puntos inteligentes</h3>
              <p>Más puntos para automatizar diferentes espacios.</p>
            </article>
          </div>
        </div>

        <div className="thanks__learn">
          <Link to="/domotica-guatemala">Conocer cómo funciona la domótica en Guatemala <ArrowRight size={16}/></Link>
          <Link to="/cuanto-cuesta-automatizar-casa-guatemala">Ver guía de precios 2026 <ArrowRight size={16}/></Link>
        </div>

        <Link className="thanks__back" to="/">
          <ArrowLeft size={16} /> Regresar al inicio
        </Link>
      </div>
    </div>
  );
}
