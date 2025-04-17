// Composant PropertyCardType3 : variante utilisée pour la liste des biens
import React from "react";

interface PropertyCardType3Props {
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  link: string;
}

const PropertyCardType3: React.FC<PropertyCardType3Props> = ({
  title,
  subtitle,
  description,
  images,
  link,
}) => {
  return (
    <div className="property-card-type3">
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>{description}</p>
      <div className="images">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`${title} - ${index + 1}`} />
        ))}
      </div>
      <a href={link}>Learn More</a>
    </div>
  );
};

export default PropertyCardType3;
