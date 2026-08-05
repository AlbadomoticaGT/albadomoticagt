import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Solutions from "@/components/Solutions";
import Process from "@/components/Process";
import Seniors from "@/components/Seniors";
import Equipment from "@/components/Equipment";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Thanks from "@/pages/Thanks";

function HomePage() {
  useEffect(() => {
    document.title =
      "Domótica Inteligente para Hogares y Negocios en Guatemala | Alba Domótica GT";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Seguridad inteligente, automatización residencial y comercial, bienestar para adultos mayores e integración con Alexa y Google Home. Instalación profesional, diagnóstico sin costo y soporte local en toda Guatemala."
      );
    }
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Solutions />
        <Process />
        <Seniors />
        <Equipment />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

function NotFoundPage() {
  useEffect(() => {
    document.title = "Página no encontrada | Alba Domótica GT";
  }, []);

  return (
    <div className="thanks">
      <div className="thanks__card" style={{ textAlign: "center" }}>
        <h1>Esta página no existe</h1>
        <p>Es posible que el enlace haya cambiado. Te invitamos a regresar al sitio principal.</p>
        <a className="button button--dark" href="/">
          Ir al inicio
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gracias" element={<Thanks />} />
        {/*
          Future routes — ready for when content is built:
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/servicios/:slug" element={<ServiceDetailPage />} />
          <Route path="/proyectos" element={<ProjectsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
        */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
