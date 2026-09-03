const NOTIFICATION_EMAIL = "guicho2112@gmail.com";
const FROM_EMAIL = "Alba Domótica GT <contacto@albadomoticagt.com>";

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function allowedOrigin(origin) {
  if (!origin) return "*";
  if (
    origin === "https://www.albadomoticagt.com" ||
    origin === "https://albadomoticagt.com" ||
    origin.endsWith(".vercel.app")
  ) {
    return origin;
  }
  return null;
}

export default async function handler(req, res) {
  const origin = req.headers.origin;
  const corsOrigin = allowedOrigin(origin);

  if (corsOrigin) {
    res.setHeader("Access-Control-Allow-Origin", corsOrigin);
    res.setHeader("Vary", "Origin");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  }

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Método no permitido." });
  }

  if (origin && !corsOrigin) {
    return res.status(403).json({ success: false, error: "Origen no permitido." });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    console.error("RESEND_API_KEY no está configurada en Vercel.");
    return res.status(500).json({ success: false, error: "Servicio de correo no configurado." });
  }

  try {
    const {
      name,
      phone,
      email,
      municipality,
      project_type,
      message,
      lead_source,
    } = req.body || {};

    const fields = { name, phone, email, municipality, project_type };
    for (const [key, value] of Object.entries(fields)) {
      if (typeof value !== "string" || !value.trim()) {
        return res.status(400).json({ success: false, error: `Falta el campo: ${key}.` });
      }
    }

    if (
      email.length > 254 ||
      name.length > 120 ||
      phone.length > 50 ||
      municipality.length > 100 ||
      project_type.length > 150 ||
      String(message || "").length > 2000
    ) {
      return res.status(400).json({
        success: false,
        error: "Uno de los campos supera el tamaño permitido.",
      });
    }

    const receivedAt = new Date().toLocaleString("es-GT", {
      timeZone: "America/Guatemala",
    });

    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone);
    const safeEmail = escapeHtml(email);
    const safeMunicipality = escapeHtml(municipality);
    const safeProjectType = escapeHtml(project_type);
    const safeMessage = escapeHtml(message || "(sin mensaje)");
    const safeLeadSource = escapeHtml(lead_source || "orgánico");

    const subject = `Nueva solicitud de cotización - ${name}`;
    const textBody = [
      "Nueva solicitud de cotización desde la web de Alba Domótica GT",
      "",
      `Nombre: ${name}`,
      `Teléfono: ${phone}`,
      `Correo: ${email}`,
      `Municipio: ${municipality}`,
      `Tipo de proyecto: ${project_type}`,
      `Mensaje: ${message || "(sin mensaje)"}`,
      "",
      `Origen del lead: ${lead_source || "orgánico"}`,
      "",
      `Recibido: ${receivedAt}`,
    ].join("\n");

    const htmlBody = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px">
        <h2 style="color:#1a2e28">Nueva solicitud de cotización</h2>
        <p style="color:#555">Has recibido una nueva solicitud desde la web de Alba Domótica GT.</p>
        <table style="width:100%;border-collapse:collapse;margin-top:20px">
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold">Nombre</td><td style="padding:8px;border-bottom:1px solid #eee">${safeName}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold">Teléfono</td><td style="padding:8px;border-bottom:1px solid #eee">${safePhone}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold">Correo</td><td style="padding:8px;border-bottom:1px solid #eee">${safeEmail}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold">Municipio</td><td style="padding:8px;border-bottom:1px solid #eee">${safeMunicipality}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold">Tipo de proyecto</td><td style="padding:8px;border-bottom:1px solid #eee">${safeProjectType}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold">Mensaje</td><td style="padding:8px;border-bottom:1px solid #eee">${safeMessage}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold">Origen</td><td style="padding:8px;border-bottom:1px solid #eee">${safeLeadSource}</td></tr>
        </table>
        <p style="color:#999;font-size:12px;margin-top:20px">Recibido: ${escapeHtml(receivedAt)}</p>
      </div>
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [NOTIFICATION_EMAIL],
        reply_to: email,
        subject,
        text: textBody,
        html: htmlBody,
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      console.error("Resend API error:", errorText);
      return res.status(502).json({
        success: false,
        error: "No se pudo enviar la notificación por correo.",
      });
    }

    const result = await resendResponse.json().catch(() => ({}));
    console.log("Correo de cotización enviado:", result?.id || "sin ID");

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Vercel email function error:", error);
    return res.status(500).json({
      success: false,
      error: "Ocurrió un error al enviar la notificación.",
    });
  }
}
