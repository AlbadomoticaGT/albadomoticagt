import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "@/components/Landing";
import Thanks from "@/pages/Thanks";
import { DomoticaGuatemala, InstalacionDomoticaGuatemala, CostoAutomatizacionGuatemala } from "@/pages/SeoPages";
import { setPageSeo } from "@/lib/seo";

function HomePage() {
  useEffect(() => {
    setPageSeo({
      title: "Domótica en Guatemala | Hogares Inteligentes | AlbaDomoticaGT",
      description: "Automatización de hogares en Guatemala con instalación profesional. Iluminación, sensores, escenas, Alexa, Google Home y promociones de 6 puntos por Q1,799 y 8 puntos por Q2,399.",
      path: "/"
    });
  }, []);
  return <Landing />;
}

function NotFoundPage() {
  useEffect(() => {
    setPageSeo({
      title: "Página no encontrada | AlbaDomoticaGT",
      description: "La página solicitada no existe.",
      path: "/",
      robots: "noindex, follow"
    });
  }, []);
  return <div className="thanks"><div className="thanks__card"><h1>Página no encontrada</h1><a className="button button--dark" href="/">Ir al inicio</a></div></div>;
}

export default function App() {
  return <BrowserRouter><Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/domotica-guatemala" element={<DomoticaGuatemala />} />
    <Route path="/instalacion-domotica-guatemala" element={<InstalacionDomoticaGuatemala />} />
    <Route path="/cuanto-cuesta-automatizar-casa-guatemala" element={<CostoAutomatizacionGuatemala />} />
    <Route path="/gracias" element={<Thanks />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes></BrowserRouter>;
}
