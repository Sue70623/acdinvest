import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TotsElsEspaisButton from "../components/TotsElsEspaisButton";
import SideMenu from "../components/SideMenu";
import ScrollToTopButton from "../components/ScrollToTopButton";
import WhatsAppButton from "../components/WhatsAppButton";
import { Helmet } from "react-helmet";
import "./DefaultLayout.css";

interface DefaultLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ title, description, children }) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <div className="default-layout">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <NavBar />
      <main>{children}</main>
      <Footer />
      <SideMenu isOpen={isSideMenuOpen} onClose={() => setIsSideMenuOpen(false)} />

      {/* Fixed buttons container */}
      <div className="fixed-buttons">
        <TotsElsEspaisButton onClick={() => setIsSideMenuOpen(true)} />
        <ScrollToTopButton />
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default DefaultLayout;
