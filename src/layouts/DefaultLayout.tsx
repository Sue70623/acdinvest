import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TotsElsEspaisButton from "../components/TotsElsEspaisButton";
import SideMenu from "../components/SideMenu";

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Gestion de l'état pour le menu latéral
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <div className="default-layout">
      <NavBar />
      <main>{children}</main>
      <Footer />
      {/* Bouton flottant pour ouvrir le menu */}
      <TotsElsEspaisButton onClick={() => setIsSideMenuOpen(true)} />
      {/* Menu latéral */}
      <SideMenu isOpen={isSideMenuOpen} onClose={() => setIsSideMenuOpen(false)} />
    </div>
  );
};

export default DefaultLayout;