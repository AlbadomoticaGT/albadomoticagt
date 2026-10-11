import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Home, Lightbulb, MessageCircle, Router, ShieldCheck, Smartphone, Sparkles, Zap } from "lucide-react";
import { whatsappLink, trackWhatsApp } from "@/lib/analytics";
import { SITE } from "@/lib/site.config";
import { setPageSeo, setStructuredData } from "@/lib/seo";

const CONTACT = "Hola, quiero información sobre automatización para mi hogar en Guatemala.";

function SeoHeader() {
  return (
    <header className="topbar">
      <div className="shell topbar__inner">
        <Link to="/" className="brand brand--logo" aria-label="AlbaDomoticaGT, inicio">
          <img src="/albadomoticagt-logo-horizontal.png" alt="AlbaDomoticaGT" />
        </Link>
        <nav className="topnav">
          <Link to="/domotica-guatemala">Domótica en Guatemala</Link>
          <Link to="/instalacion-domotica-guatemala">Instalación</Link>
          <Link to="/cuanto-cuesta-automatizar-casa-guatemala">Precios</Link>
        </nav>
        <a className="button button--wa button--small" href={whatsappLink(CONTACT)} onClick={() => trackWhatsApp("seo_topbar")} target="_blank" rel="noreferrer">
          <MessageCircle size={17}/> WhatsApp
        </a>
      </div>
    </header>
  );
}

function SeoFooter() {
  return (
    <footer className="new-footer">
      <div className="shell new-footer__inner">
        <div>
          <Link className="brand brand--logo brand--logo-footer" to="/">
            <img src="/albadomoticagt-logo-horizontal.png" alt="AlbaDomoticaGT" />
          </Link>
          <p>Automatización práctica, instalación profesional y soporte local en Guatemala.</p>
        </div>
        <div>
          <strong>Información útil</strong>
          <Link to="/domotica-guatemala">Domótica en Guatemala</Link>
          <Link to="/instalacion-domotica-guatemala">Instalación de dispositivos inteligentes</Link>
          <Link to="/cuanto-cuesta-automatizar-casa-guatemala">Cuánto cuesta automatizar una casa</Link>
        </div>
        <div>
          <strong>Contacto</strong>
          <a href={whatsappLink(CONTACT)} target="_blank" rel="noreferrer">WhatsApp {SITE.phoneDisplay}</a>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <span>Ciudad de Guatemala y alrededores</span>
        </div>
      </div>
    </footer>
  );
}

function Cta({ source, text = "Cotizar por WhatsApp" }: { source: string; text?: string }) {
  return (
    <a className="button button--primary" href={whatsappLink(CONTACT)} onClick={() => trackWhatsApp(source)} target="_blank" rel="noreferrer">
      {text} <MessageCircle size={18}/>
    </a>
  );
}

export function DomoticaGuatemala() {
  useEffect(() => {
    const title = "Domótica en Guatemala | Automatización de Hogares | AlbaDomoticaGT";
    const description = "Instalación y configuración de domótica en Guatemala: iluminación inteligente, sensores, control de TV y A/C, escenas, Alexa y Google Home. Soluciones desde Q1,799.";
    setPageSeo({ title, description, path: "/domotica-guatemala" });
    setStructuredData("seo-domotica-guatemala", {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Domótica y automatización de hogares en Guatemala",
      "provider": { "@type": "LocalBusiness", "name": "AlbaDomoticaGT", "url": "https://www.albadomoticagt.com" },
      "areaServed": { "@type": "City", "name": "Ciudad de Guatemala" },
      "serviceType": "Instalación y configuración de domótica residencial",
      "url": "https://www.albadomoticagt.com/domotica-guatemala"
    });
  }, []);

  return <div className="seo-page">
    <SeoHeader/>
    <main>
      <section className="seo-hero">
        <div className="shell seo-hero__grid">
          <div>
            <div className="pill"><Sparkles size={15}/> Automatización residencial en Guatemala</div>
            <h1>Domótica en Guatemala para hacer su hogar más cómodo y fácil de controlar.</h1>
            <p>AlbaDomoticaGT instala, configura e integra soluciones inteligentes para casas y apartamentos. Puede comenzar con iluminación, sensores, control de equipos o escenas automáticas y ampliar su sistema por etapas.</p>
            <div className="seo-actions"><Cta source="seo_domotica_hero"/><Link className="button button--ghost" to="/cuanto-cuesta-automatizar-casa-guatemala">Ver precios actuales <ArrowRight size={18}/></Link></div>
          </div>
          <div className="seo-highlight">
            <small>SOLUCIONES PRÁCTICAS</small>
            <h2>No necesita automatizar toda su casa de una vez.</h2>
            <p>Empezamos por los espacios y tareas que realmente utiliza. Instalamos, configuramos la aplicación, creamos escenas y le explicamos cómo usar el sistema.</p>
            <div className="seo-checks"><span><Check/> Instalación profesional</span><span><Check/> Configuración incluida</span><span><Check/> Soporte local</span><span><Check/> Compatible con Alexa y Google Home cuando aplique</span></div>
          </div>
        </div>
      </section>

      <section className="seo-section">
        <div className="shell">
          <div className="seo-heading"><span className="section-label">¿QUÉ ES LA DOMÓTICA?</span><h2>Automatizar tareas cotidianas, no llenar la casa de aparatos.</h2></div>
          <div className="seo-copy-grid">
            <div><p>La domótica permite controlar y automatizar funciones del hogar desde el celular, por voz, por horarios o mediante sensores. Una escena puede apagar varias luces al acostarse, encender iluminación al llegar a casa o controlar equipos que normalmente utilizan control remoto.</p><p>El valor está en que los dispositivos trabajen juntos de forma útil. Por eso nuestro servicio no se limita a vender hardware: revisamos compatibilidad, instalamos, configuramos e integramos los equipos para que la solución quede funcionando.</p></div>
            <div className="seo-mini-cards">
              <article><Lightbulb/><h3>Iluminación inteligente</h3><p>Control desde celular, horarios y escenas para los espacios que más utiliza.</p></article>
              <article><Smartphone/><h3>TV y aire acondicionado</h3><p>Control de equipos compatibles mediante control IR universal.</p></article>
              <article><ShieldCheck/><h3>Sensores y cámaras</h3><p>Movimiento, puertas, temperatura y cámaras WiFi según la necesidad.</p></article>
              <article><Home/><h3>Escenas y rutinas</h3><p>Automatizaciones como “buenas noches”, “salir de casa” o “llegar a casa”.</p></article>
            </div>
          </div>
        </div>
      </section>

      <section className="seo-section seo-section--soft">
        <div className="shell">
          <div className="seo-heading"><span className="section-label">FORMAS DE EMPEZAR</span><h2>Opciones claras según lo que ya tiene y lo que desea automatizar.</h2></div>
          <div className="seo-price-grid">
            <article><small>YA TIENE SUS DISPOSITIVOS</small><strong>Q300</strong><h3>Instalación y configuración</h3><p>Hasta 4 dispositivos compatibles a domicilio dentro de la capital. Si se requiere instalar neutro: Q50 adicionales por dispositivo + materiales.</p><Link to="/instalacion-domotica-guatemala">Ver cómo funciona <ArrowRight size={16}/></Link></article>
            <article><small>PROMOCIÓN</small><strong>Q1,799</strong><h3>6 puntos inteligentes</h3><p>Instalación y configuración profesional, escenas básicas y control desde el celular.</p><Cta source="seo_domotica_1799" text="Consultar promoción"/></article>
            <article className="seo-price-card--featured"><small>PROMOCIÓN</small><strong>Q2,399</strong><h3>8 puntos inteligentes</h3><p>Más puntos para automatizar diferentes espacios de su hogar, instalados y configurados.</p><Cta source="seo_domotica_2399" text="Consultar promoción"/></article>
          </div>
          <p className="seo-disclaimer">Las promociones están sujetas a compatibilidad de la instalación. Materiales, neutro, equipos especiales o adecuaciones eléctricas adicionales se cotizan por separado.</p>
        </div>
      </section>

      <section className="seo-section">
        <div className="shell seo-copy-grid">
          <div><span className="section-label">CASAS YA CONSTRUIDAS</span><h2>En muchos casos puede automatizar sin una remodelación grande.</h2><p>Antes de recomendar equipos revisamos el tipo de interruptor, la alimentación eléctrica, la señal WiFi y la compatibilidad con los dispositivos que desea controlar. Si hace falta una adecuación eléctrica, se cotiza antes de realizarla.</p></div>
          <div className="seo-highlight seo-highlight--compact"><Router/><h3>La red WiFi también importa.</h3><p>Una señal estable ayuda a que los dispositivos respondan correctamente. Podemos orientar sobre ubicación del router y cobertura cuando el proyecto lo requiere.</p></div>
        </div>
      </section>

      <section className="seo-faq">
        <div className="shell">
          <div className="seo-heading"><span className="section-label">PREGUNTAS FRECUENTES</span><h2>Domótica en Guatemala: lo básico antes de empezar.</h2></div>
          <details><summary>¿Necesito Alexa o Google Home?</summary><p>No. Muchos dispositivos se controlan directamente desde el celular. Alexa o Google Home son opciones adicionales para control por voz cuando los equipos son compatibles.</p></details>
          <details><summary>¿Puedo automatizar una casa que ya está construida?</summary><p>Sí, en muchos casos. Primero se revisa la instalación existente y la compatibilidad para determinar si se necesita neutro, materiales o alguna adecuación.</p></details>
          <details><summary>¿Puedo empezar solo con algunos ambientes?</summary><p>Sí. De hecho, recomendamos comenzar por los espacios que más utiliza y ampliar después si la experiencia le resulta útil.</p></details>
          <details><summary>¿Instalan dispositivos que yo ya compré?</summary><p>Sí. Tenemos un servicio específico de instalación y configuración de dispositivos compatibles que el cliente ya posee.</p></details>
        </div>
      </section>

      <section className="seo-final"><div className="shell"><div><span className="section-label">ALBADOMOTICAGT</span><h2>Convierta las tareas repetitivas de su hogar en automatizaciones útiles.</h2><p>Cuéntenos qué desea controlar y le orientamos sobre una solución proporcional a su espacio y presupuesto.</p></div><Cta source="seo_domotica_final"/></div></section>
    </main>
    <SeoFooter/>
  </div>;
}

export function InstalacionDomoticaGuatemala() {
  useEffect(() => {
    const title = "Instalación de Domótica en Guatemala | Dispositivos Inteligentes | AlbaDomoticaGT";
    const description = "¿Ya compró interruptores, sensores, cámaras o dispositivos inteligentes? AlbaDomoticaGT los instala y configura en Ciudad de Guatemala. Hasta 4 dispositivos por Q300.";
    setPageSeo({ title, description, path: "/instalacion-domotica-guatemala" });
    setStructuredData("seo-instalacion-domotica", {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Instalación y configuración de dispositivos inteligentes",
      "provider": { "@type": "LocalBusiness", "name": "AlbaDomoticaGT", "url": "https://www.albadomoticagt.com" },
      "areaServed": { "@type": "City", "name": "Ciudad de Guatemala" },
      "offers": { "@type": "Offer", "priceCurrency": "GTQ", "price": "300", "description": "Instalación y configuración de hasta 4 dispositivos compatibles." },
      "url": "https://www.albadomoticagt.com/instalacion-domotica-guatemala"
    });
  }, []);

  return <div className="seo-page">
    <SeoHeader/>
    <main>
      <section className="seo-hero">
        <div className="shell seo-hero__grid">
          <div><div className="pill"><Zap size={15}/> Servicio de instalación</div><h1>¿Ya compró sus dispositivos inteligentes? Nosotros los instalamos y configuramos.</h1><p>No necesita comprar nuevamente el equipo. Revisamos compatibilidad, instalamos, conectamos a la aplicación, hacemos pruebas y, cuando corresponde, integramos con Alexa o Google Home.</p><div className="seo-actions"><Cta source="seo_install_hero" text="Cotizar instalación"/><Link className="button button--ghost" to="/domotica-guatemala">Conocer nuestras soluciones <ArrowRight size={18}/></Link></div></div>
          <div className="seo-highlight"><small>SERVICIO BASE</small><div className="seo-big-price">Q300</div><h2>Hasta 4 dispositivos compatibles.</h2><p>Servicio mínimo a domicilio dentro de la capital.</p><div className="seo-checks"><span><Check/> Instalación</span><span><Check/> Configuración en la app</span><span><Check/> Conexión y pruebas</span><span><Check/> Integración por voz cuando aplique</span></div></div>
        </div>
      </section>

      <section className="seo-section"><div className="shell">
        <div className="seo-heading"><span className="section-label">QUÉ PODEMOS INSTALAR</span><h2>Dispositivos que normalmente forman parte de una casa inteligente.</h2></div>
        <div className="seo-mini-cards seo-mini-cards--wide">
          <article><Lightbulb/><h3>Interruptores inteligentes</h3><p>Instalación, conexión a WiFi y configuración de sus funciones compatibles.</p></article>
          <article><ShieldCheck/><h3>Sensores y cámaras WiFi</h3><p>Configuración, ubicación y vinculación con la aplicación del fabricante.</p></article>
          <article><Smartphone/><h3>Controles IR</h3><p>Para equipos compatibles que utilizan control remoto, como TV o aire acondicionado.</p></article>
          <article><Sparkles/><h3>Alexa y Google Home</h3><p>Vinculación de dispositivos compatibles y pruebas de control por voz.</p></article>
        </div>
      </div></section>

      <section className="seo-section seo-section--soft"><div className="shell seo-copy-grid">
        <div><span className="section-label">ANTES DE VISITAR</span><h2>Primero verificamos qué equipo tiene.</h2><p>Para evitar visitas innecesarias, puede enviarnos por WhatsApp una fotografía o el modelo de los dispositivos y, cuando sea posible, del punto donde se instalarán. Así revisamos compatibilidad y anticipamos si hará falta algún material o adecuación.</p><Cta source="seo_install_photo" text="Enviar fotos por WhatsApp"/></div>
        <div className="seo-highlight seo-highlight--compact"><Zap/><h3>¿El interruptor necesita neutro?</h3><p>Cuando sea necesario instalar neutro, se cobran <b>Q50 adicionales por dispositivo + materiales</b>. Cualquier otro trabajo eléctrico especial se cotiza por separado antes de realizarlo.</p></div>
      </div></section>

      <section className="seo-section"><div className="shell">
        <div className="seo-heading"><span className="section-label">CÓMO FUNCIONA</span><h2>De sus dispositivos a una solución funcionando.</h2></div>
        <div className="steps"><article className="step"><span>01</span><h3>Envíe fotos o modelos</h3><p>Revisamos qué dispositivos tiene y qué desea controlar.</p></article><article className="step"><span>02</span><h3>Confirmamos compatibilidad</h3><p>Le indicamos el alcance del servicio y cualquier requerimiento adicional.</p></article><article className="step"><span>03</span><h3>Instalamos y configuramos</h3><p>Dejamos los equipos conectados, probados y listos para usar.</p></article></div>
      </div></section>

      <section className="seo-final"><div className="shell"><div><span className="section-label">NO VENDEMOS SOLO HARDWARE</span><h2>Integramos la tecnología que usted ya tiene.</h2><p>El objetivo es que sus dispositivos dejen de ser cajas o aplicaciones aisladas y comiencen a resolver tareas reales en su hogar.</p></div><Cta source="seo_install_final" text="Cotizar instalación"/></div></section>
    </main>
    <SeoFooter/>
  </div>;
}

export function CostoAutomatizacionGuatemala() {
  useEffect(() => {
    const title = "¿Cuánto cuesta automatizar una casa en Guatemala? Precios 2026 | AlbaDomoticaGT";
    const description = "Precios actuales para automatizar una casa en Guatemala: instalación de dispositivos desde Q300, 6 puntos inteligentes Q1,799 y 8 puntos Q2,399. Conozca qué puede cambiar el costo.";
    setPageSeo({ title, description, path: "/cuanto-cuesta-automatizar-casa-guatemala" });
    setStructuredData("seo-precios-domotica", {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "¿Cuánto cuesta automatizar una casa en Guatemala en 2026?",
      "author": { "@type": "Organization", "name": "AlbaDomoticaGT" },
      "publisher": { "@type": "Organization", "name": "AlbaDomoticaGT" },
      "dateModified": "2026-10-10",
      "mainEntityOfPage": "https://www.albadomoticagt.com/cuanto-cuesta-automatizar-casa-guatemala"
    });
  }, []);

  return <div className="seo-page">
    <SeoHeader/>
    <main>
      <section className="seo-hero seo-hero--article"><div className="shell">
        <div className="pill"><Sparkles size={15}/> Guía de precios 2026</div>
        <h1>¿Cuánto cuesta automatizar una casa en Guatemala?</h1>
        <p className="seo-article-lead">No existe un precio único para todos los hogares. El costo depende de cuántos puntos desea automatizar, la instalación eléctrica existente, los dispositivos elegidos y si necesita sensores, controles IR u otros equipos. Para comenzar, AlbaDomoticaGT ofrece opciones claras desde Q300.</p>
      </div></section>

      <section className="seo-section"><div className="shell seo-article">
        <h2>Precios actuales para comenzar</h2>
        <p>Estas opciones permiten comenzar por etapas y ampliar más adelante, sin necesidad de automatizar toda la vivienda desde el primer día.</p>
        <div className="seo-price-grid">
          <article><small>SI YA TIENE LOS EQUIPOS</small><strong>Q300</strong><h3>Hasta 4 dispositivos</h3><p>Instalación y configuración de dispositivos compatibles dentro de la capital.</p><Link to="/instalacion-domotica-guatemala">Detalles del servicio <ArrowRight size={16}/></Link></article>
          <article><small>PROMOCIÓN</small><strong>Q1,799</strong><h3>6 puntos inteligentes</h3><p>Instalación, configuración, escenas básicas y control desde el celular.</p><Cta source="seo_cost_1799" text="Consultar"/></article>
          <article className="seo-price-card--featured"><small>PROMOCIÓN</small><strong>Q2,399</strong><h3>8 puntos inteligentes</h3><p>Más puntos para automatizar diferentes ambientes de la vivienda.</p><Cta source="seo_cost_2399" text="Consultar"/></article>
        </div>

        <h2>¿Qué hace que el precio suba o baje?</h2>
        <p><b>Número de puntos:</b> automatizar dos ambientes no requiere lo mismo que automatizar una vivienda completa. Por eso recomendamos priorizar los espacios de mayor uso.</p>
        <p><b>Instalación eléctrica:</b> algunos dispositivos necesitan neutro o materiales adicionales. En el servicio de instalación de equipos del cliente, si hay que instalar neutro se agregan Q50 por dispositivo más materiales.</p>
        <p><b>Tipo de automatización:</b> iluminación, sensores de movimiento, sensores de puertas, control de TV o aire acondicionado y cámaras tienen requerimientos distintos.</p>
        <p><b>Red WiFi:</b> si la señal no llega bien a todos los ambientes, puede ser necesario mejorar la cobertura antes de depender de varios dispositivos conectados.</p>
        <p><b>Trabajos especiales:</b> adecuaciones eléctricas, equipos poco comunes o instalaciones que requieren materiales adicionales se cotizan por separado.</p>

        <h2>¿Conviene automatizar toda la casa de una vez?</h2>
        <p>No necesariamente. Una forma práctica de comenzar es automatizar sala, comedor, cocina o dormitorio principal, medir cuánto utiliza realmente las automatizaciones y luego ampliar. Esto reduce la inversión inicial y permite diseñar la segunda etapa con experiencia real de uso.</p>

        <h2>¿Qué recibe además de los dispositivos?</h2>
        <p>En AlbaDomoticaGT el servicio está enfocado en que la solución quede funcionando: instalación, configuración, creación de escenas básicas cuando corresponde y orientación para utilizar la aplicación. También podemos integrar equipos compatibles con Alexa o Google Home.</p>

        <div className="seo-article-cta"><h3>¿Quiere saber cuánto costaría en su vivienda?</h3><p>Envíenos qué ambientes quiere automatizar y le orientamos sobre la opción más conveniente.</p><Cta source="seo_cost_final" text="Cotizar por WhatsApp"/></div>
      </div></section>
    </main>
    <SeoFooter/>
  </div>;
}
