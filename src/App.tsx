import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import ScrollToTop from "./components/ScrollToTop";

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
import ElNoguerB from "./pages/zones/ElNoguerB";
import EscolesSept from "./pages/zones/EscolesSept";
import XiuletHauss from "./pages/zones/XiuletHauss";
import LaFreixeraII from "./pages/zones/LaFreixeraII";
import Edelweiss from "./pages/zones/Edelweiss";
import NausHesei from "./pages/zones/NausHesei";
import ListPlanaDelBou from "./pages/listeDesBiens/listPlanaDelBou";
import ListEresDelPoble from "./pages/listeDesBiens/listEresDelPoble";
import ListElNougerB from "./pages/listeDesBiens/listElNoguerB";
import ListEscolesSept from "./pages/listeDesBiens/listEscolesSept";
import ListXiuletHauss from "./pages/listeDesBiens/listXiuletHauss";
import ListLaFreixeraII from "./pages/listeDesBiens/listLaFreixeraII";
import ListEdelweiss from "./pages/listeDesBiens/listEdelweiss";
import ListNausHesei from "./pages/listeDesBiens/listNausHesei";

export default function App() {
  const basename = process.env.NODE_ENV === "production" ? "/acdinvest" : "";

  return (
    <Router basename={basename}>
      <ScrollToTop />
      {/* Layout par défaut pour toutes les pages */}
      {/* <DefaultLayout> */}
      {/* <NavBar /> */}
      {/* <Footer /> */}
      {/* </DefaultLayout> */}

      {/* Routes de l'application */}

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
        <Route path="/Zones/ElNoguerB" element={<ElNoguerB />} />
        <Route path="/Zones/EscolesSept" element={<EscolesSept />} />
        <Route path="/Zones/XiuletHauss" element={<XiuletHauss />} />
        <Route path="/Zones/LaFreixeraII" element={<LaFreixeraII />} />
        <Route path="/Zones/Edelweiss" element={<Edelweiss />} />
        <Route path="/Zones/NausHesei" element={<NausHesei />} />
        <Route
          path="/liste-des-biens/listPlanaDelBou"
          element={<ListPlanaDelBou />}
        />
        <Route
          path="/liste-des-biens/listEresdelPoble"
          element={<ListEresDelPoble />}
        />
        <Route
          path="/liste-des-biens/listElNoguerB"
          element={<ListElNoguerB />}
        />
        <Route
          path="/liste-des-biens/listEscolesSept"
          element={<ListEscolesSept />}
        />
        <Route
          path="/liste-des-biens/listXiuletHauss"
          element={<ListXiuletHauss />}
        />
        <Route
          path="/liste-des-biens/listLaFreixeraII"
          element={<ListLaFreixeraII />}
        />
        <Route
          path="/liste-des-biens/listEdelweiss"
          element={<ListEdelweiss />}
        />
        <Route
          path="/liste-des-biens/listNausHesei"
          element={<ListNausHesei />}
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}
