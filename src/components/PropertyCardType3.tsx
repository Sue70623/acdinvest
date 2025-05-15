import React from "react";
import "./PropertyCardType3.css";

interface PropertyCardType3Props {
  title: string;
  image: string;
  caracteristics: string[];
  amenities: string[];
  status: string;
  reverse?: boolean;
  onViewGallery?: () => void;
  galleryLink?: string;
}

const PropertyCardType3: React.FC<PropertyCardType3Props> = ({
  title,
  image,
  caracteristics,
  amenities,
  status,
  reverse = false,
  onViewGallery,
  galleryLink,
}) => {
  return (
    <div className={`property-card-type3 ${reverse ? "reverse" : ""}`}>
      <div className="text-zone">
        <h2>{title}</h2>

        <div className="section">
          <h4>CARACTERÍSTIQUES</h4>
          <ul>
            {caracteristics.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="section">
          <h4>SERVEIS</h4>
          <ul>
            {amenities.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="image-zone">
        <img src={image} alt={title || "Imatge de la propietat"} />
        <a
          className="view-gallery-button"
          onClick={(e) => {
            e.preventDefault();
            if (onViewGallery) onViewGallery();
          }}
        >
          📷 Veure totes les nostres fotos
        </a>
      </div>
    </div>
  );
};

export default PropertyCardType3;
