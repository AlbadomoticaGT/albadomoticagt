import { MessageCircle, Mail, ChevronRight } from "lucide-react";
import { whatsappLink, trackWhatsApp, phoneDisplay } from "@/lib/analytics";
import { SITE, SERVICES } from "@/lib/site.config";

export default function Footer() {
  return (
    <footer>
      <div className="shell footer__main">
        {/* Brand + description */}
        <div className="footer__col footer__col--brand">
          <a className="brand brand--inverse" href="#inicio" aria-label="Alba Domótica GT, inicio">
            <span className="brand__symbol" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <span className="brand__name">
              <strong>ALBA</strong>
              <small>DOMÓTICA GT</small>
            </span>
          </a>
          <p className="footer__desc">
            Soluciones inteligentes para hogares y apartamentos. Más comodidad,
            seguridad y control desde tu celular, con atención local en Ciudad de
            Guatemala y municipios cercanos.
            
          </p>
          <a
            className="footer__phone"
            href={whatsappLink("Hola, me gustaría más información sobre las soluciones de Alba Domótica GT para mi hogar.")}
            onClick={() => trackWhatsApp("footer_whatsapp")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} /> {phoneDisplay()}
          </a>
          <a className="footer__email" href={`mailto:${SITE.email}`}>
            <Mail size={18} /> {SITE.email}
          </a>
        </div>

        {/* Services */}
        <div className="footer__col">
          <h4>Servicios</h4>
          <ul>
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <a href="#soluciones">{s.title}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className="footer__col">
          <h4>Empresa</h4>
          <ul>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#proceso">Cómo funciona</a></li>
            <li><a href="#adultos-mayores">Adultos mayores</a></li>
            <li><a href="#equipos">Equipos</a></li>
            <li><a href="#contacto">Hablar con un asesor</a></li>
          </ul>
        </div>

        {/* Future pages placeholder */}
        <div className="footer__col">
          <h4>Recursos</h4>
          <ul>
            <li className="footer__soon">Proyectos <span>Próximamente</span></li>
            <li className="footer__soon">Blog <span>Próximamente</span></li>
            <li className="footer__soon">Testimonios <span>Próximamente</span></li>
          </ul>
        </div>
      </div>

      <div className="shell footer__bottom">
        <span>© 2026 {SITE.name}. Todos los derechos reservados.</span>
        <a href="#inicio">
          Volver arriba <ChevronRight size={14} />
        </a>
      </div>
    </footer>
  );
}
