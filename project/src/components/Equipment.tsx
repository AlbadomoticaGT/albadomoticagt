const ROOM_IMAGE =
  "https://images.pexels.com/photos/20418771/pexels-photo-20418771.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop";
const PLUG_IMAGE =
  "https://images.pexels.com/photos/8101107/pexels-photo-8101107.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop";
const APP_IMAGE =
  "https://images.pexels.com/photos/4790267/pexels-photo-4790267.jpeg?auto=compress&cs=tinysrgb&w=500&h=800&fit=crop";
const LOCKS_IMAGE =
  "https://images.pexels.com/photos/20901468/pexels-photo-20901468.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop";

export default function Equipment() {
  return (
    <section className="equipment" id="equipos">
      <div className="shell">
        <div className="equipment__headline">
          <div className="section-kicker">04 — Equipos</div>
          <h2>
            Pequeños dispositivos.
            <br />
            <em>Grandes cambios.</em>
          </h2>
        </div>

        <div className="equipment__collage">
          <figure className="equipment__item equipment__item--room">
            <img src={ROOM_IMAGE} alt="Sala conectada con varios dispositivos inteligentes" />
            <figcaption>Todo en un mismo panel</figcaption>
          </figure>
          <figure className="equipment__item equipment__item--plug">
            <img src={PLUG_IMAGE} alt="Enchufe inteligente WiFi" />
            <figcaption>Enchufes WiFi</figcaption>
          </figure>
          <figure className="equipment__item equipment__item--app">
            <img src={APP_IMAGE} alt="Aplicación móvil para controlar el hogar" />
            <figcaption>Control móvil</figcaption>
          </figure>
          <figure className="equipment__item equipment__item--locks">
            <img src={LOCKS_IMAGE} alt="Opciones de cerraduras inteligentes" />
            <figcaption>Accesos inteligentes</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
