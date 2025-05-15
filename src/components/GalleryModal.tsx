import React, { useState } from "react";
import "./GalleryModal.css";

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  images: string[];
  onContactClick?: () => void;
  pdfUrl?: string;
}

const GalleryModal: React.FC<GalleryModalProps> = ({
  isOpen,
  onClose,
  title,
  images,
  onContactClick,
  pdfUrl,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const openLightbox = (index: number) => setSelectedImageIndex(index);
  const closeLightbox = () => setSelectedImageIndex(null);
  const showNextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    }
  };
  const showPrevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + images.length) % images.length
      );
    }
  };

  if (!isOpen) return null;

  return (
    <div className="gallery-modal">
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <h2 className="modal-title">{title}</h2>
        <div className="image-grid">
          {images.map((image, index) => (
            <div
              key={index}
              className="image-item"
              onClick={() => openLightbox(index)}
            >
              <img src={image} alt={`Miniatura ${index + 1}`} />
            </div>
          ))}
        </div>

        {selectedImageIndex !== null && (
          <div className="lightbox">
            <button className="lightbox-close" onClick={closeLightbox}>
              ×
            </button>
            <button className="lightbox-prev" onClick={showPrevImage}>
              ‹
            </button>
            <img
              src={images[selectedImageIndex]}
              alt={`Miniatura ${selectedImageIndex + 1}`}
              className="lightbox-image"
            />
            <button className="lightbox-next" onClick={showNextImage}>
              ›
            </button>
          </div>
        )}

        <div className="modal-buttons">
          {onContactClick && (
            <button className="qui-som-button" onClick={onContactClick}>
              Contacta'ns
            </button>
          )}
          {pdfUrl && (
            <a
              className="qui-som-button"
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Descarregar PDF
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
