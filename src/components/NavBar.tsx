import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";
const logo = "/src/assets/images/logo.png";

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleScrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    navigate("/"); // Redirige vers la page d'accueil
    setTimeout(() => {
      const section = document.querySelector("#els-nostres-espais");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Ajoute un délai pour s'assurer que la navigation est terminée
  };

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="Quetx Logo" />
        </NavLink>
      </div>

      {/* MENU */}
      <ul className={`menu ${menuOpen ? "open" : ""}`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            end
            onClick={() => setMenuOpen(false)}
          >
            Inici
          </NavLink>
        </li>
        <li>
          <a
            href="/#els-nostres-espais"
            className="nav-link"
            onClick={(event) => {
              setMenuOpen(false);
              handleScrollToSection(event);
            }}
          >
            Els Nostres Espais
          </a>
        </li>
        <li>
          <NavLink
            to="/qui-som"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setMenuOpen(false)}
          >
            Qui Som
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setMenuOpen(false)}
          >
            Contacte
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/actualitats"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setMenuOpen(false)}
          >
            Actualitats
          </NavLink>
        </li>
      </ul>

      {/* BOUTON MENU HAMBURGER */}
      <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
    </nav>
  );
};

export default NavBar;
