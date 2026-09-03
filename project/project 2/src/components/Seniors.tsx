import { Hand, Lightbulb, Blinds, DoorOpen, ShieldCheck, Heart, ArrowUpRight } from "lucide-react";
import { whatsappLink, trackWhatsApp } from "@/lib/analytics";

const SENIORS_IMAGE =
  "https://images.pexels.com/photos/8899552/pexels-photo-8899552.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop";

const BENEFITS = [
  { icon: <Lightbulb size={18} />, title: "Encender luces por voz", desc: "Con Alexa o Google Home" },
  { icon: <Hand size={18} />, title: "Controlar sin levantarse", desc: "Desde la app o por voz" },
  { icon: <Blinds size={18} />, title: "Automatizar cortinas", desc: "Horarios o un solo toque" },
  { icon: <DoorOpen size={18} />, title: "Abrir puertas", desc: "Cerraduras inteligentes remotas" },
  { icon: <ShieldCheck size={18} />, title: "Seguridad 24/7", desc: "Cámaras y sensores con alertas" },
  { icon: <Heart size={18} />, title: "Tranquilidad familiar", desc: "Supervisa desde cualquier lugar" },
];

export default function Seniors() {
  return (
    <section className="seniors" id="adultos-mayores">
      <div className="shell seniors__grid">
        <div className="seniors__visual">
          <img src={SENIORS_IMAGE} alt="Adulto mayor usando tecnología en casa" />
          <div className="seniors__badge">
            <div className="seniors__badge-icon">
              <Heart size={22} />
            </div>
            <div>
              <small>Diseñado para</small>
              <strong>Adultos mayores</strong>
            </div>
          </div>
        </div>

        <div className="seniors__content">
          <div className="section-kicker">06 — Adultos mayores y movilidad</div>
          <h2>Tecnología que brinda comodidad, independencia y tranquilidad.</h2>
          <p>
            La domótica ayuda a personas de la tercera edad, personas con movilidad reducida y familias
            que cuidan adultos mayores. Controla todo el hogar sin esfuerzo y mantente cerca de quien
            quieres.
          </p>

          <div className="seniors__benefits">
            {BENEFITS.map((b) => (
              <div key={b.title} className="seniors__benefit">
                <div className="seniors__benefit-icon">{b.icon}</div>
                <div>
                  <strong>{b.title}</strong>
                  <span>{b.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="seniors__cta">
            <a
              className="button button--dark"
              href={whatsappLink("Hola, me gustaría solicitar un diagnóstico de domótica para un adulto mayor o persona con movilidad reducida.")}
              onClick={() => trackWhatsApp("seniors_cta")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar diagnóstico para mi familiar <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
