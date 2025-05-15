import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "./NavBar.css";

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

  const logo =
    "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745480329/acdinvest_vfypda.svg";

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="logo">
        <NavLink to="/">
          <img
            src="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouservies/logotransparantblancacdinvest.png"
            alt="ACD Invest Logo"
          />
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
            Qui Som ?
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
            to="https://quetx.net"
            target="_blank"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setMenuOpen(false)}
          >
            <FaSearch className="icon" /> Jo busco
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
