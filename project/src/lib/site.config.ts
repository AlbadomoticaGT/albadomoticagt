/**
 * Centralized site configuration for Alba Domótica GT.
 *
 * All business-critical constants live here so the site can be re-pointed
 * to a new domain, phone number, or email without touching individual components.
 * This also serves as the single source of truth for structured data, SEO,
 * and future service/blog page generation.
 */

export const SITE = {
  name: "Alba Domótica GT",
  legalName: "Alba Domótica GT",
  domain: "www.albadomoticagt.com",
  /** Canonical production URL */
  url: "https://www.albadomoticagt.com",
  locale: "es_GT",
  language: "es",
  country: "Guatemala",
  countryCode: "GT",
  geo: { lat: 14.6349, lng: -90.5069 },

  /** Primary phone — used for tel: and WhatsApp links */
  phoneDisplay: "+502 5949 1380",
  phoneE164: "+50259491380",
  phoneTel: "tel:+50259491380",

  /** WhatsApp number (digits only, with country code, no +) */
  whatsappNumber: "50259491380",

  email: "contacto@albadomoticagt.com",

  /** Google Tag Manager container ID — replace with real ID before launch */
  gtmId: "GTM-NCZJ4PNB",
} as const;

export const SERVICES = [
  {
    slug: "seguridad-inteligente",
    title: "Seguridad Inteligente",
    short: "Cámaras WiFi, sensores de movimiento y aperturas con alertas en tiempo real.",
    description:
      "Monitorea tu hogar o negocio desde cualquier lugar. Cámaras con visión nocturna, grabación en la nube, sensores de puertas y ventanas, y notificaciones instantáneas en tu celular.",
    icon: "shield",
  },
  {
    slug: "automatizacion-residencial",
    title: "Automatización Residencial",
    short: "Iluminación, escenas, horarios y control por voz sin cambiar tu cableado.",
    description:
      "Apagadores WiFi, control de cortinas, escenas automatizadas y comandos por voz con Alexa o Google Home. Transforma tu casa en un espacio inteligente sin obras.",
    icon: "home",
  },
  {
    slug: "automatizacion-comercial",
    title: "Automatización Comercial",
    short: "Soluciones para oficinas, restaurantes y negocios que ahorran tiempo y energía.",
    description:
      "Automatización de iluminación, accesos, cámaras y climatización para oficinas y comercios. Reduce costos operativos y mejora la seguridad de tu negocio.",
    icon: "building",
  },
  {
    slug: "bienestar-adultos-mayores",
    title: "Bienestar para Adultos Mayores",
    short: "Control por voz, automatización de cortinas y accesos para mayor independencia.",
    description:
      "Tecnología que brinda comodidad y tranquilidad a personas de la tercera edad y personas con movilidad reducida. Encender luces por voz, abrir puertas remotamente y supervisar desde cualquier lugar.",
    icon: "heart",
  },
  {
    slug: "integracion-voz",
    title: "Integración con Alexa y Google Home",
    short: "Controla todo tu hogar con comandos de voz.",
    description:
      "Integramos tus dispositivos con Alexa y Google Home para que controles iluminación, accesos, cámaras y más con tu voz.",
    icon: "mic",
  },
  {
    slug: "accesos-inteligentes",
    title: "Accesos Inteligentes",
    short: "Cerraduras y portones controlados desde tu celular.",
    description:
      "Abre y cierra puertas, portones y garages desde tu celular o por voz. Concede acceso temporal a familiares o personal de servicio sin llaves físicas.",
    icon: "lock",
  },
] as const;

export const AUDIENCES = [
  "Propietarios de viviendas",
  "Dueños de apartamentos",
  "Profesionales con alto poder adquisitivo",
  "Empresarios y dueños de negocios",
  "Dueños de restaurantes",
  "Dueños de oficinas",
  "Arquitectos",
  "Constructoras",
  "Desarrolladores inmobiliarios",
  "Adultos mayores",
  "Familiares que cuidan adultos mayores",
] as const;
