import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./PropertyCard.css";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

interface PropertyCardProps {
  mainImage: string;
  mainImageAlt: string; // Ajout de la propriété alt pour l'image principale
  thumbnails: string[];
  thumbnailsAlt?: string[]; // Ajout de la propriété alt pour les miniatures (optionnel)
  zoneName: string;
  location: string;
  description: string;
  link: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  mainImage,
  mainImageAlt,
  thumbnails,
  thumbnailsAlt = [], // Valeur par défaut pour les alt des miniatures
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
        <img src={mainImage} alt={mainImageAlt} className="main-image" />
      </div>

      {/* Miniatures et informations à droite */}
      <div className="details">
        {/* Diaporama de miniatures */}
        <div className="thumbnails">
          <a
            className="prev"
            onClick={prevThumbnails}
            role="button"
            tabIndex={0}
          >
            <FaArrowCircleLeft />
          </a>
          {visibleThumbnails.map((thumbnail, index) => (
            <img key={index} src={thumbnail}  alt={thumbnailsAlt[index] || `Miniature ${index + 1}`}
            className="thumbnail" />
          ))}
          <a
            className="next"
            onClick={nextThumbnails}
            role="button"
            tabIndex={0}
          >
            <FaArrowCircleRight />
          </a>
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
