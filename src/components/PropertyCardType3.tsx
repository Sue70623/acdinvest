import React from "react";
import "./PropertyCardType3.css";

interface PropertyCardType3Props {
  title: string;
  image: string;
  caracteristics: string[];
  amenities: string[];
  status: string; // Added status property
  reverse?: boolean;
  onViewGallery?: () => void;
  galleryLink?: string;
}

const PropertyCardType3: React.FC<PropertyCardType3Props> = ({
  title,
  image,
  caracteristics,
  amenities,
  reverse = false,
  onViewGallery,
  galleryLink,
}) => {
  const prev = () => {
    console.log("Previous image");
  };

  const next = () => {
    console.log("Next image");
  };

  const visibleImages = [image]; // Placeholder for visible images logic

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
        <img src={image} alt={title || "Property image"} />
        {onViewGallery && (
          <p className="view-gallery" onClick={onViewGallery}>
            📷 Veure totes les fotos
          </p>
        )}
      </div>
    </div>
  );
};

export default PropertyCardType3;
