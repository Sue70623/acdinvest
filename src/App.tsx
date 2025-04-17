import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";

import Home from "./pages/navigation/Home";
import ViuLaNatura from "./pages/type/ViuLaNatura";
import ViuLaCiutat from "./pages/type/ViuLaCiutat";
import EspaisDeNegoci from "./pages/type/EspaisDeNegoci";
import PoligonIIndustria from "./pages/type/PoligonIIndustria";
import QuiSom from "./pages/navigation/QuiSom";
import Actualitats from "./pages/navigation/Actualitats";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viu-la-natura" element={<ViuLaNatura />} />
        <Route path="/viu-la-ciutat" element={<ViuLaCiutat />} />
        <Route path="/espais-de-negoci" element={<EspaisDeNegoci />} />
        <Route path="/poligon-i-industria" element={<PoligonIIndustria />} />
        <Route path="/qui-som" element={<QuiSom />} />
        <Route path="/actualitats" element={<Actualitats />} />
      </Routes>
    </Router>
  );
}
