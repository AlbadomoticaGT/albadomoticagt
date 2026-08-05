import { Lightbulb, DoorOpen, Camera, ArrowUpRight } from "lucide-react";
import { whatsappLink, trackWhatsApp } from "@/lib/analytics";

const SENSOR_IMAGE =
  "https://images.pexels.com/photos/5691589/pexels-photo-5691589.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop";
const CAMERA_IMAGE =
  "https://images.pexels.com/photos/5213883/pexels-photo-5213883.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop";
const FEATURED_IMAGE =
  "https://images.pexels.com/photos/38337696/pexels-photo-38337696.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop";

export default function Solutions() {
  return (
    <section className="solutions section-dark" id="soluciones">
      <div className="shell">
        <div className="section-heading">
          <div>
            <div className="section-kicker">02 — Soluciones</div>
            <h2>Tres formas de sentir tu espacio más tuyo.</h2>
          </div>
          <p>Equipos conectados, instalación profesional y una sola aplicación para controlarlo todo.</p>
        </div>

        <div className="solution-grid">
          <article className="solution-card solution-card--featured">
            <img src={FEATURED_IMAGE} alt="Control de dispositivos inteligentes desde el teléfono" />
            <div className="solution-card__shade"></div>
            <div className="solution-card__content">
              <span className="solution-card__number">01</span>
              <div>
                <Lightbulb size={24} />
                <h3>Espacios inteligentes</h3>
                <p>Apagadores WiFi, escenas, horarios y control por voz sin cambiar tu cableado.</p>
              </div>
              <a
                href={whatsappLink("Hola, me interesa la solución de Espacios Inteligentes (apagadores WiFi, escenas, control por voz).")}
                aria-label="Consultar espacios inteligentes"
                onClick={() => trackWhatsApp("solutions_smart")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowUpRight size={24} />
              </a>
            </div>
          </article>

          <article className="solution-card solution-card--sensor">
            <div className="solution-card__content">
              <span className="solution-card__number">02</span>
              <div>
                <DoorOpen size={24} />
                <h3>Sensores que te avisan</h3>
                <p>Monitorea movimiento y aperturas de puertas o ventanas con alertas al instante.</p>
              </div>
              <a
                href={whatsappLink("Hola, me interesa la solución de Sensores (movimiento, puertas, ventanas, alertas).")}
                aria-label="Consultar sensores"
                onClick={() => trackWhatsApp("solutions_sensor")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowUpRight size={24} />
              </a>
            </div>
            <img src={SENSOR_IMAGE} alt="Sensor inteligente instalado en una puerta" />
          </article>

          <article className="solution-card solution-card--camera">
            <div className="solution-card__content">
              <span className="solution-card__number">03</span>
              <div>
                <Camera size={24} />
                <h3>Cámaras WiFi</h3>
                <p>Video en vivo, visión nocturna, grabación y alertas de movimiento desde tu celular.</p>
              </div>
              <a
                href={whatsappLink("Hola, me interesa la solución de Cámaras WiFi (video en vivo, visión nocturna, grabación).")}
                aria-label="Consultar cámaras"
                onClick={() => trackWhatsApp("solutions_camera")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowUpRight size={24} />
              </a>
            </div>
            <div className="camera-cutout">
              <img src={CAMERA_IMAGE} alt="Cámaras WiFi de seguridad" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
