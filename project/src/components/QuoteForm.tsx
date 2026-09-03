import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { AlertCircle, Send, Loader2 } from "lucide-react";
import { submitQuoteRequest } from "@/lib/supabase";
import {
  trackFormStart,
  trackFormSubmit,
  trackLead,
  captureUTM,
  getLeadSource,
} from "@/lib/analytics";

const MUNICIPALITIES = [
  "Guatemala City",
  "Mixco",
  "Villa Nueva",
  "San Miguel Petapa",
  "Santa Catarina Pinula",
  "Fraijanes",
  "Amatitlán",
  "San José Pinula",
  "Chinautla",
  "Chuarrancho",
  "San Raymundo",
  "Zona 1",
  "Zona 2",
  "Zona 3",
  "Zona 4",
  "Zona 5",
  "Zona 6",
  "Zona 7",
  "Zona 8",
  "Zona 9",
  "Zona 10",
  "Zona 11",
  "Zona 12",
  "Zona 13",
  "Zona 14",
  "Zona 15",
  "Zona 16",
  "Zona 17",
  "Zona 18",
  "Otro municipio",
];

const PROJECT_TYPES = [
  "Casa / Apartamento residencial",
  "Oficina",
  "Negocio / Comercio",
  "Restaurante",
  "Proyecto para adulto mayor",
  "Proyecto con constructora / arquitecto",
  "Desarrollo inmobiliario",
  "Otro",
];

export default function QuoteForm() {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [started, setStarted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    trackFormSubmit();

    const formData = new FormData(e.currentTarget);
    const utm = captureUTM();
    const leadSource = getLeadSource();

    const data = {
      name: (formData.get("name") as string).trim(),
      phone: (formData.get("phone") as string).trim(),
      email: (formData.get("email") as string).trim(),
      municipality: formData.get("municipality") as string,
      project_type: formData.get("project_type") as string,
      message: ((formData.get("message") as string) || "").trim(),
      source: utm.utm_source || "organic",
      utm_source: utm.utm_source,
      utm_medium: utm.utm_medium,
      utm_campaign: utm.utm_campaign,
      utm_term: utm.utm_term,
      utm_content: utm.utm_content,
      lead_source: leadSource,
    };

    if (!data.name || !data.phone || !data.email || !data.municipality || !data.project_type) {
      setError("Por favor completa todos los campos obligatorios.");
      setSubmitting(false);
      return;
    }

    const result = await submitQuoteRequest(data);

    if (result.success) {
      trackLead(leadSource);

      try {
        const notification = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-quote-notification`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({
            name: data.name,
            phone: data.phone,
            email: data.email,
            municipality: data.municipality,
            project_type: data.project_type,
            message: data.message,
            lead_source: leadSource,
          }),
        });

        if (!notification.ok) {
          console.error("No se pudo enviar la notificación por correo.");
        }
      } catch (emailError) {
        console.error("Error enviando notificación por correo:", emailError);
      }

      navigate("/gracias");
    } else {
      setError(result.error || "Ocurrió un error. Intenta nuevamente.");
      setSubmitting(false);
    }
  };

  return (
    <div className="quote-form">
      <div className="quote-form__header">
        <h3>Solicita tu cotización</h3>
        <p>Completa el formulario y te contactaremos para coordinar una visita de diagnóstico sin costo.</p>
      </div>

      <form
        onSubmit={handleSubmit}
        onFocus={() => {
          if (!started) {
            setStarted(true);
            trackFormStart();
          }
        }}
      >
        <div className="quote-form__grid">
          <div className="form-field">
            <label htmlFor="qf-name">Nombre *</label>
            <input id="qf-name" name="name" type="text" placeholder="Tu nombre completo" required />
          </div>

          <div className="form-field">
            <label htmlFor="qf-phone">Teléfono *</label>
            <input id="qf-phone" name="phone" type="tel" placeholder="Ej: 3000 0000" required />
          </div>

          <div className="form-field">
            <label htmlFor="qf-email">Correo *</label>
            <input id="qf-email" name="email" type="email" placeholder="tucorreo@email.com" required />
          </div>

          <div className="form-field">
            <label htmlFor="qf-municipality">Municipio *</label>
            <select id="qf-municipality" name="municipality" required defaultValue="">
              <option value="" disabled>
                Selecciona tu municipio
              </option>
              {MUNICIPALITIES.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          <div className="form-field form-field--full">
            <label htmlFor="qf-type">Tipo de proyecto *</label>
            <select id="qf-type" name="project_type" required defaultValue="">
              <option value="" disabled>
                Selecciona el tipo de proyecto
              </option>
              {PROJECT_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div className="form-field form-field--full">
            <label htmlFor="qf-message">Mensaje (opcional)</label>
            <textarea
              id="qf-message"
              name="message"
              placeholder="Cuéntanos qué quieres automatizar..."
            />
          </div>

          {error && (
            <div className="form-error">
              <AlertCircle size={18} /> {error}
            </div>
          )}

          <button
            type="submit"
            className="button button--dark quote-form__submit"
            disabled={submitting}
          >
            {submitting ? (
              <>
                <Loader2 size={18} className="animate-spin" /> Enviando...
              </>
            ) : (
              <>
                <Send size={18} /> Solicitar Cotización
              </>
            )}
          </button>

          <p className="quote-form__note">
            Tus datos están seguros. Solo los usamos para contactarte sobre tu solicitud.
          </p>
        </div>
      </form>
    </div>
  );
}
