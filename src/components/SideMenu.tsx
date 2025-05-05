import React from "react";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        right: isOpen ? "0" : "-300px", // Coulisse depuis la droite
        width: "300px",
        height: "100%",
        backgroundColor: "#212226",
        boxShadow: "-2px 0 5px rgba(0, 0, 0, 0.1)",
        transition: "right 0.3s ease",
        zIndex: 1000,
        padding: "20px",
      }}
    >
      {/* Bouton de fermeture */}
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "none",
          border: "none",
          fontSize: "20px",
          cursor: "pointer",
          color: "#c59d6b",
        }}
      >
        <FaTimes />
      </button>

      {/* Liste des zones */}
      <h2>Tots els espais</h2>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          {/* Placeholder pour la miniature */}
          <div
            style={{
              width: "40px",
              height: "40px",
              backgroundImage:
                "url('https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg')", // URL de l'image
              backgroundSize: "cover", // Assure que l'image remplit l'espace sans déformation
              backgroundPosition: "center", // Centre l'image
              borderRadius: "5px",
              marginRight: "10px",
            }}
          ></div>
          <NavLink
            to="/Zones/PlanaDelBou"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            Plana del Bou
          </NavLink>
        </li>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          {/* Placeholder pour la miniature */}
          <div
            style={{
              width: "40px",
              height: "40px",
              backgroundImage:
                "url('https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg')", // URL de l'image
              backgroundSize: "cover", // Assure que l'image remplit l'espace sans déformation
              backgroundPosition: "center", // Centre l'image
              borderRadius: "5px",
              marginRight: "10px",
            }}
          ></div>
          <NavLink
            to="/Zones/EresdelPoble"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            Eres del poble
          </NavLink>
        </li>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          {/* Placeholder pour la miniature */}
          <div
            style={{
              width: "40px",
              height: "40px",
              backgroundImage:
                "url('https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg')", // URL de l'image
              backgroundSize: "cover", // Assure que l'image remplit l'espace sans déformation
              backgroundPosition: "center", // Centre l'image
              borderRadius: "5px",
              marginRight: "10px",
            }}
          ></div>
          <NavLink
            to="/Zones/ElNoguerB"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            El Noguer B
          </NavLink>
        </li>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          {/* Placeholder pour la miniature */}
          <div
            style={{
              width: "40px",
              height: "40px",
              backgroundImage:
                "url('https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg')", // URL de l'image
              backgroundSize: "cover", // Assure que l'image remplit l'espace sans déformation
              backgroundPosition: "center", // Centre l'image
              borderRadius: "5px",
              marginRight: "10px",
            }}
          ></div>
          <NavLink
            to="/Zones/EscolesSept"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            EscolesSept
          </NavLink>
        </li>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          {/* Placeholder pour la miniature */}
          <div
            style={{
              width: "40px",
              height: "40px",
              backgroundImage:
                "url('https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg')", // URL de l'image
              backgroundSize: "cover", // Assure que l'image remplit l'espace sans déformation
              backgroundPosition: "center", // Centre l'image
              borderRadius: "5px",
              marginRight: "10px",
            }}
          ></div>
          <NavLink
            to="/Zones/XiuletHauss"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            Xiulet Hauss
          </NavLink>
        </li>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          {/* Placeholder pour la miniature */}
          <div
            style={{
              width: "40px",
              height: "40px",
              backgroundImage:
                "url('https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg')", // URL de l'image
              backgroundSize: "cover", // Assure que l'image remplit l'espace sans déformation
              backgroundPosition: "center", // Centre l'image
              borderRadius: "5px",
              marginRight: "10px",
            }}
          ></div>
          <NavLink
            to="/Zones/LaFreixeraII"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            La Freixera II
          </NavLink>
        </li>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          {/* Placeholder pour la miniature */}
          <div
            style={{
              width: "40px",
              height: "40px",
              backgroundImage:
                "url('https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg')", // URL de l'image
              backgroundSize: "cover", // Assure que l'image remplit l'espace sans déformation
              backgroundPosition: "center", // Centre l'image
              borderRadius: "5px",
              marginRight: "10px",
            }}
          ></div>
          <NavLink
            to="/Zones/Edelweiss"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            Edelweiss
          </NavLink>
        </li>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          {/* Placeholder pour la miniature */}
          <div
            style={{
              width: "40px",
              height: "40px",
              backgroundImage:
                "url('https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg')", // URL de l'image
              backgroundSize: "cover", // Assure que l'image remplit l'espace sans déformation
              backgroundPosition: "center", // Centre l'image
              borderRadius: "5px",
              marginRight: "10px",
            }}
          ></div>
          <NavLink
            to="/Zones/NausHesei"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            Naus Hesei
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
