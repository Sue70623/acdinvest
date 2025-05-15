import React from "react";
import "./HeroType2.css";

interface HeroType2Props {
  backgroundImage: string;
  title: string;
  subtitle: string;
  alt: string; // Ajout de la propriété alt
}

const HeroType2: React.FC<HeroType2Props> = ({
  backgroundImage,
  title,
  subtitle,
  alt,
}) => {
  return (
    <div
      className="hero-type2"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Image invisible pour l'accessibilité */}
      <img
        src={backgroundImage}
        alt="Imatge de l'heroi"
        className="sr-only"
      />
      <div className="hero-overlay">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default HeroType2;
