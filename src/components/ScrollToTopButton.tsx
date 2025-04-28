import React, { useState, useEffect } from "react";
import "./ScrollToTopButton.css";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Gérer la visibilité du bouton en fonction du scroll
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Remonter en haut de la page avec un scroll doux
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isVisible ? (
    <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
      ↑
    </button>
  ) : null; // Retourne null au lieu de false
};

export default ScrollToTopButton;