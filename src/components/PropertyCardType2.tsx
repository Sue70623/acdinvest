import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./PropertyCardType2.css";

interface PropertyCardType2Props {
  title: string;
  description: string;
  images: string[];
  buttonLabel: string;
  link: string;
  reverse?: boolean;
  autoScroll?: boolean;
}

const PropertyCardType2: React.FC<PropertyCardType2Props> = ({
  title,
  description,
  images,
  buttonLabel,
  link,
  reverse = false,
  autoScroll = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (autoScroll && images.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [images.length, autoScroll]);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  if (images.length === 0) {
    return (
      <div className="property-card-type2">
        <p>Aucune image disponible.</p>
      </div>
    );
  }

  // Obtenir les 3 images visibles
  const visibleImages = [
    images[currentIndex],
    images[(currentIndex + 1) % images.length],
    images[(currentIndex + 2) % images.length],
  ];

  return (
    <div className={`property-card-type2 ${reverse ? "reverse" : ""}`}>
      <div className="text-section">
        <h2>{title}</h2>
        <p>{description}</p>
        <Link to={link} className="action-button">
          {buttonLabel}
        </Link>
      </div>

      <div className="carousel-section">
        <button
          className="nav prev"
          onClick={prev}
          aria-label="Image précédente"
        >
          ←
        </button>
        <div className="carousel-frame">
          {visibleImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${currentIndex + index + 1}`}
            />
          ))}
        </div>
        <button className="nav next" onClick={next} aria-label="Image suivante">
          →
        </button>
      </div>
    </div>
  );
};

export default PropertyCardType2;
