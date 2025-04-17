import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
const logo = "/src/assets/images/logo.png";
// Import du logo

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <NavLink
            to="/espais"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setMenuOpen(false)}
          >
            Els Nostres Espais
          </NavLink>
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
            to="/contacte"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setMenuOpen(false)}
          >
            Contact
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
