import React from "react";
import "./HeroType2.css";

interface HeroType2Props {
  backgroundImage: string;
  title: string;
  subtitle: string;
}

const HeroType2: React.FC<HeroType2Props> = ({ backgroundImage, title, subtitle }) => {
  return (
    <div
      className="hero-type2"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-overlay">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default HeroType2;