import { useEffect, useState } from "react";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { whatsappLink, trackWhatsApp, phoneDisplay } from "@/lib/analytics";

const NAV_LINKS = [
  { href: "#soluciones", label: "Soluciones" },
  { href: "#proceso", label: "Cómo funciona" },
  { href: "#adultos-mayores", label: "Adultos mayores" },
  { href: "#equipos", label: "Equipos" },
  { href: "#nosotros", label: "Nosotros" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleWhatsApp = () => {
    trackWhatsApp("header_nav");
    setMenuOpen(false);
  };

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="shell nav-wrap">
        <a className="brand" href="#inicio" aria-label="Alba Domótica GT, inicio">
          <span className="brand__symbol" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span className="brand__name">
            <strong>ALBA</strong>
            <small>DOMÓTICA GT</small>
          </span>
        </a>

        <nav className={`nav ${menuOpen ? "nav--open" : ""}`} aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            className="nav__contact"
            href={whatsappLink("Hola, me gustaría más información sobre domótica para mi hogar o negocio.")}
            onClick={handleWhatsApp}
            aria-label={`Escribir por WhatsApp al ${phoneDisplay()}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Phone size={16} /> {phoneDisplay()} <ArrowUpRight size={16} />
          </a>
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
