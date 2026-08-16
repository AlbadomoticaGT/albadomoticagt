const WHY_US_IMAGE =
  "https://images.pexels.com/photos/20176093/pexels-photo-20176093.jpeg?auto=compress&cs=tinysrgb&w=800&h=900&fit=crop";

const REASONS = [
  { num: "01", text: "Diagnóstico primero.", desc: " Revisamos tu instalación eléctrica antes de recomendar cualquier solución para asegurar compatibilidad y evitar sorpresas." },
  { num: "02", text: "Soporte directo.", desc: " Hablas con nosotros para dudas, ajustes o mantenimiento." },
  { num: "03", text: "Un solo ecosistema.", desc: " Iluminación, sensores, cámaras y accesos en una app." },
  { num: "04", text: "Opciones de pago.", desc: " Tarjeta de crédito o débito, efectivo y transferencia." },
];

export default function WhyUs() {
  return (
    <section className="why-us">
      <div className="shell why-us__grid">
        <div className="why-us__visual">
          <img src={WHY_US_IMAGE} alt="Sistema de riego inteligente instalado en un jardín" />
          <div className="why-us__badge">
            <strong>GT</strong>
            <span>
              Atención local
              <br />
              y personalizada
            </span>
          </div>
        </div>
        <div className="why-us__content">
          <div className="section-kicker">05 — ¿Por qué Alba?</div>
          <h2>Domótica pensada para hogares en Guatemala.</h2>
          <div className="why-us__list">
            {REASONS.map((r) => (
              <div key={r.num}>
                <span>{r.num}</span>
                <p>
                  <strong>{r.text}</strong>
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
