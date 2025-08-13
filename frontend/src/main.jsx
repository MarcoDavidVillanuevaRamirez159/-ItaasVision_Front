import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "./styles/global.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Camaras from "./pages/Camaras.jsx";
import Alertas from "./pages/Alertas.jsx";
import Ajustes from "./pages/Ajustes.jsx";
import NotFound from "./pages/NotFound.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="camaras" element={<Camaras />} />
          <Route path="alertas" element={<Alertas />} />
          <Route path="ajustes" element={<Ajustes />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
