import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./PropertyCard.css";

interface PropertyCardProps {
  mainImage: string;
  thumbnails: string[];
  zoneName: string;
  location: string;
  description: string;
  link: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  mainImage,
  thumbnails,
  zoneName,
  location,
  description,
  link,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour passer aux deux miniatures suivantes
  const nextThumbnails = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % thumbnails.length);
  };

  // Fonction pour revenir aux deux miniatures précédentes
  const prevThumbnails = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? thumbnails.length - 2
        : (prevIndex - 2 + thumbnails.length) % thumbnails.length
    );
  };

  // Défilement automatique
  useEffect(() => {
    const interval = setInterval(() => {
      nextThumbnails();
    }, 3000); // Change toutes les 3 secondes
    return () => clearInterval(interval); // Nettoyage à la fin
  }, [thumbnails]);

  // Obtenir les deux miniatures visibles
  const visibleThumbnails = [
    thumbnails[currentIndex],
    thumbnails[(currentIndex + 1) % thumbnails.length],
  ];

  return (
    <div className="property-card">
      {/* Grande image à gauche */}
      <div className="main-image">
        <img src={mainImage} alt="Main" />
      </div>

      {/* Miniatures et informations à droite */}
      <div className="details">
        {/* Diaporama de miniatures */}
        <div className="thumbnails">
          <button className="prev" onClick={prevThumbnails}>
            ←
          </button>
          {visibleThumbnails.map((thumbnail, index) => (
            <img key={index} src={thumbnail} alt={`Thumbnail ${index + 1}`} />
          ))}
          <button className="next" onClick={nextThumbnails}>
            →
          </button>
        </div>

        {/* Texte centré verticalement */}
        <div className="info">
          <h2 className="title">{zoneName}</h2>
          <p className="location">{location}</p>
          <p className="description">{description}</p>
          <Link to={link}>
            <button className="discover-btn">Descubriu</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
