import React, { useState, useEffect } from "react";
import { Info } from "lucide-react";

interface PropertyCardProps {
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  link: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  title,
  subtitle,
  description,
  images,
  link,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (images.length - 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (images.length - 1));
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + (images.length - 1)) % (images.length - 1)
    );
  };

  return (
    <div
      className="property-card"
      style={{
        display: "flex",
        gap: "2rem",
        alignItems: "center",
        marginBottom: "3rem",
        maxHeight: "450px",
      }}
    >
      {/* Image principale à gauche */}
      <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
        <img
          src={
            images[0] ||
            "https://via.placeholder.com/400x400?text=Image+Principale"
          }
          alt="Main"
          style={mainImageStyle}
        />
      </div>

      {/* Bloc de droite */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        {/* Diaporama */}
        <div style={carouselWrapperStyle}>
          <button onClick={prevImage} style={arrowStyleLeft}>
            <span style={arrowIconStyle}>{"<"}</span>
          </button>

          <img
            src={
              images[currentIndex + 1] ||
              "https://via.placeholder.com/286x286?text=Miniature+1"
            }
            alt="Mini 1"
            style={miniatureStyle}
          />
          <img
            src={
              images[((currentIndex + 2) % (images.length - 1)) + 1] ||
              "https://via.placeholder.com/286x286?text=Miniature+2"
            }
            alt="Mini 2"
            style={miniatureStyle}
          />

          <button onClick={nextImage} style={arrowStyleRight}>
            <span style={arrowIconStyle}>{">"}</span>
          </button>
        </div>

        {/* Texte */}
        <div style={textBlockStyle}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#fff" }}>
            {title}
          </h2>
          <h3 style={{ fontSize: "1.1rem", color: "#ccc" }}>{subtitle}</h3>
          <p style={{ color: "#eee", margin: "0.5rem 0" }}>{description}</p>
          <a href={link} style={buttonStyle}>
            <Info size={16} style={{ marginRight: "8px" }} /> Descobriu
          </a>
        </div>
      </div>
    </div>
  );
};

const mainImageStyle: React.CSSProperties = {
  width: "100%",
  aspectRatio: "1 / 1",
  borderRadius: "10px",
  objectFit: "cover",
};

const carouselWrapperStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.5rem",
  position: "relative",
  height: "50%",
};

const miniatureStyle: React.CSSProperties = {
  width: "calc(50% - 0.25rem)",
  height: "100%",
  objectFit: "cover",
  borderRadius: "10px",
};

const arrowStyleLeft: React.CSSProperties = {
  position: "absolute",
  left: "-20px",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "#c59d6b",
  opacity: 0.8,
  borderRadius: "50%",
  padding: "6px",
  border: "none",
  cursor: "pointer",
  zIndex: 2,
};

const arrowStyleRight: React.CSSProperties = {
  position: "absolute",
  right: "-20px",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "#c59d6b",
  opacity: 0.8,
  borderRadius: "50%",
  padding: "6px",
  border: "none",
  cursor: "pointer",
  zIndex: 2,
};

const arrowIconStyle: React.CSSProperties = {
  color: "white",
  fontSize: "1rem",
  fontWeight: "bold",
  mixBlendMode: "screen",
};

const textBlockStyle: React.CSSProperties = {
  textAlign: "center",
  height: "50%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem 0",
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: "#c59d6b",
  color: "white",
  padding: "0.6rem 1.2rem",
  borderRadius: "30px",
  display: "inline-block",
  textDecoration: "none",
  alignSelf: "center",
};

export default PropertyCard;
