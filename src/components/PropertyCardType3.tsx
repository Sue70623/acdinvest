import React, { useState } from "react";
import "./PropertyCardType3.css";
import GalleryModal from "./GalleryModal";

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
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const dummyImages = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/250",
  ];

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
        <a
          className="view-gallery-button"
          onClick={() => setIsGalleryOpen(true)}
          href="#"
        >
          📷 Veure totes les nostres fotos
        </a>
      </div>

      <GalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        title="Galeria d'imatges"
        images={dummyImages}
        onContactClick={() => alert("Contacta'ns clicked")}
        pdfUrl="https://example.com/sample.pdf"
      />
    </div>
  );
};

export default PropertyCardType3;
