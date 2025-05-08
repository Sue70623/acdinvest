import React from "react";
import "./TotsElsEspaisButton.css";

interface TotsElsEspaisButtonProps {
  onClick: () => void;
}

const TotsElsEspaisButton: React.FC<TotsElsEspaisButtonProps> = ({
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        position: "fixed",
        bottom: "150px",
        right: "20px",
        width: "60px",
        height: "60px",
        fontSize: "0.85rem",
        padding: "4px",
        whiteSpace: "normal",
        overflow: "hidden",
        textOverflow: "ellipsis",
        textAlign: "center",
        borderRadius: "50%",
        backgroundColor: "#c59d6b",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#b08a5c")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#c59d6b")}
    >
      Veure Tot
    </button>
  );
};

export default TotsElsEspaisButton;
