import { MessageCircle } from "lucide-react";
import { whatsappLink, trackWhatsApp, phoneDisplay } from "@/lib/analytics";

export default function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappLink("Hola, me gustaría más información sobre domótica para mi hogar o negocio.")}
      aria-label={`Escribir por WhatsApp al ${phoneDisplay()}`}
      onClick={() => trackWhatsApp("float_button")}
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle size={24} /> <span>WhatsApp</span>
    </a>
  );
}
