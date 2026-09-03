import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const NOTIFICATION_EMAIL = "contacto@albadomotica.com";

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
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
    } = await req.json();

    const subject = `Nueva solicitud de cotización - ${name}`;
    const textBody = [
      `Nueva solicitud de cotización desde la web de Alba Domótica GT`,
      ``,
      `Nombre: ${name}`,
      `Teléfono: ${phone}`,
      `Correo: ${email}`,
      `Municipio: ${municipality}`,
      `Tipo de proyecto: ${project_type}`,
      `Mensaje: ${message || "(sin mensaje)"}`,
      ``,
      `Origen del lead: ${lead_source || "orgánico"}`,
      ``,
      `Recibido: ${new Date().toLocaleString("es-GT", { timeZone: "America/Guatemala" })}`,
    ].join("\n");

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1a2e28;">Nueva solicitud de cotización</h2>
        <p style="color: #555;">Has recibido una nueva solicitud desde la web de Alba Domótica GT.</p>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Nombre</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Teléfono</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${phone}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Correo</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Municipio</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${municipality}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Tipo de proyecto</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${project_type}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Mensaje</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${message || "(sin mensaje)"}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Origen</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${lead_source || "orgánico"}</td></tr>
        </table>
        <p style="color: #999; font-size: 12px; margin-top: 20px;">Recibido: ${new Date().toLocaleString("es-GT", { timeZone: "America/Guatemala" })}</p>
      </div>
    `;

    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    if (resendApiKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "Alba Domótica GT <contacto@albadomotica.com>",
          to: NOTIFICATION_EMAIL,
          subject,
          text: textBody,
          html: htmlBody,
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        console.error("Resend API error:", errText);
        return new Response(JSON.stringify({ success: false, error: "No se pudo enviar la notificación por correo." }), { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      }
    } else {
      console.log("Email notification (RESEND_API_KEY not configured):", textBody);
    }

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Edge function error:", err);
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
