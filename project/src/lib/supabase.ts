import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type QuoteRequest = {
  id?: string;
  name: string;
  phone: string;
  email: string;
  municipality: string;
  project_type: string;
  message?: string;
  source?: string;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_term?: string | null;
  utm_content?: string | null;
  lead_source?: string | null;
  created_at?: string;
};

export async function submitQuoteRequest(
  data: Omit<QuoteRequest, "id" | "created_at">
): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase.from("quote_requests").insert([
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        municipality: data.municipality,
        project_type: data.project_type,
        message: data.message || null,
        source: data.source || "organic",
        utm_source: data.utm_source || null,
        utm_medium: data.utm_medium || null,
        utm_campaign: data.utm_campaign || null,
        utm_term: data.utm_term || null,
        utm_content: data.utm_content || null,
        lead_source: data.lead_source || null,
      },
    ]);

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch {
    return { success: false, error: "Error de conexión. Intenta nuevamente." };
  }
}
