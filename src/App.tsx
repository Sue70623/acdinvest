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
import Contact from "./pages/navigation/Contact";
import PlanaDelBou from "./pages/zones/PlanaDelBou";
import EresdelPoble from "./pages/zones/EresdelPoble";
import ElNogerB from "./pages/zones/ElNogerB";
import EscolesSept from "./pages/zones/EscolesSept";
import XiuletHauss from "./pages/zones/XiuletHauss";
import LaFreixeraII from "./pages/zones/LaFreixeraII";
import Edelweiss from "./pages/zones/Edelweiss";
import NausHesei from "./pages/zones/NausHesei";

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
        <Route path="/contact" element={<Contact />} />
        <Route path="/Zones/PlanaDelBou" element={<PlanaDelBou />} />
        <Route path="/Zones/EresdelPoble" element={<EresdelPoble />} />
        <Route path="/Zones/ElNogerB" element={<ElNogerB />} />
        <Route path="/Zones/EscolesSept" element={<EscolesSept />} />
        <Route path="/Zones/XiuletHauss" element={<XiuletHauss />} />
        <Route path="/Zones/LaFreixeraII" element={<LaFreixeraII />} />
        <Route path="/Zones/Edelweiss" element={<Edelweiss />} />
        <Route path="/Zones/NausHesei" element={<NausHesei />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}
