import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "@/components/Landing";
import Cotizador from "@/components/Cotizador";
import Thanks from "@/pages/Thanks";

function HomePage() {
  useEffect(() => {
    document.title = "Domótica para tu hogar en Guatemala | Alba Domótica GT";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Haz tu hogar más cómodo, seguro y fácil de controlar. Domótica e instalación profesional en Ciudad de Guatemala. Oferta de inicio Q2,700.");
  }, []);
  return (
    <>
      <Landing />
      <Cotizador />
    </>
  );
}

function NotFoundPage() {
  return <div className="thanks"><div className="thanks__card"><h1>Página no encontrada</h1><a className="button button--dark" href="/">Ir al inicio</a></div></div>;
}

export default function App() {
  return <BrowserRouter><Routes><Route path="/" element={<HomePage />} /><Route path="/gracias" element={<Thanks />} /><Route path="*" element={<NotFoundPage />} /></Routes></BrowserRouter>;
}
