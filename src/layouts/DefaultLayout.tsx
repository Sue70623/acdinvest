import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TotsElsEspaisButton from "../components/TotsElsEspaisButton";
import SideMenu from "../components/SideMenu";
import ScrollToTopButton from "../components/ScrollToTopButton";
import ChatWidget from "../components/ChatWidget";
import "./DefaultLayout.css";

interface DefaultLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  title,
  description,
  children,
}) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.chatwith.io/widget.js";
    script.setAttribute("data-id", "330631307849");
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="default-layout">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <NavBar />
      <main>{children}</main>
      <Footer />
      <SideMenu
        isOpen={isSideMenuOpen}
        onClose={() => setIsSideMenuOpen(false)}
      />

      {/* Fixed buttons container */}
      <div className="floating-buttons-container">
        <div className="floating-buttons-wrapper">
          <TotsElsEspaisButton onClick={() => setIsSideMenuOpen(true)} />
          <ChatWidget />
          <ScrollToTopButton />
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
