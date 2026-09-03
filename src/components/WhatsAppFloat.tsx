import { MessageCircle } from "lucide-react";
import { whatsappLink, trackWhatsApp, phoneDisplay } from "@/lib/analytics";

export default function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappLink("Hola, me gustaría más información sobre las soluciones de Alba Domótica GT para mi hogar.")}
      aria-label={`Escribir por WhatsApp al ${phoneDisplay()}`}
      onClick={() => trackWhatsApp("float_button")}
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle size={24} /> <span>WhatsApp</span>
    </a>
  );
}
