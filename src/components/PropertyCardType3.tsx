import React from "react";
import "./PropertyCardType3.css";

interface PropertyCardType3Props {
  title: string;
  image: string;
  caracteristics: string[];
  amenities: string[];
  reverse?: boolean;
  onViewGallery?: () => void;
}

const PropertyCardType3: React.FC<PropertyCardType3Props> = ({
  title,
  image,
  caracteristics,
  amenities,
  reverse = false,
  onViewGallery,
}) => {
  return (
    <div className={`property-card-type3 ${reverse ? "reverse" : ""}`}>
      <div className="text-zone">
        <h2>{title}</h2>
        <div className="section">
          <h4>CARACTERISTIC</h4>
          <ul>
            {caracteristics.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="section">
          <h4>AMENAGEMENTS</h4>
          <ul>
            {amenities.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="image-zone">
        <img src={image} alt={title} />
        {onViewGallery && (
          <p className="view-gallery" onClick={onViewGallery}>
            📷 Voir toutes nos photos
          </p>
        )}
      </div>
    </div>
  );
};

export default PropertyCardType3;
