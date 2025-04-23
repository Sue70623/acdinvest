import React from "react";

interface TotsElsEspaisButtonProps {
  onClick: () => void;
}

const TotsElsEspaisButton: React.FC<TotsElsEspaisButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#c59d6b",
        color: "#fff",
        border: "none",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        fontSize: "14px",
        cursor: "pointer",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      Tots els espais
    </button>
  );
};

export default TotsElsEspaisButton;