import React, { useState } from "react";
import "./CustomModal.css";

interface CustomModalProps {
  title: string;
  images: string[];
  onActionClick: () => void;
  pdfUrl: string;
  onClose: () => void;
}

const CustomModal: React.FC<CustomModalProps> = ({
  title,
  images,
  onActionClick,
  pdfUrl,
  onClose,
}) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden"; // Lock background scroll
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = ""; // Unlock background scroll
  };

  const showNextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % images.length);
    }
  };

  const showPreviousImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (lightboxIndex !== null) {
      if (event.key === "ArrowRight") showNextImage();
      if (event.key === "ArrowLeft") showPreviousImage();
      if (event.key === "Escape") closeLightbox();
    }
  };

  return (
    <div className="custom-modal" onKeyDown={handleKeyDown} tabIndex={0}>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-body">
          <div className="gallery-grid">
            {images.map((image, index) => (
              <div
                key={index}
                className="image-item"
                onClick={() => openLightbox(index)}
              >
                <img src={image} alt={`Imatge de la galeria ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        <div className="modal-footer">
          <a href="/contact" className="global-button" onClick={onActionClick}>
            Contacta'ns
          </a>
          <a href={pdfUrl} download className="global-button">
            Descarregar PDF
          </a>
        </div>
      </div>

      {lightboxIndex !== null && (
        <div className="lightbox">
          <div className="lightbox-overlay" onClick={closeLightbox}></div>
          <button className="lightbox-close" onClick={closeLightbox}>
            ×
          </button>
          <button className="lightbox-prev" onClick={showPreviousImage}>
            ←
          </button>
          <img
            className="lightbox-image"
            src={images[lightboxIndex]}
            alt={`Lightbox Image ${lightboxIndex + 1}`}
          />
          <button className="lightbox-next" onClick={showNextImage}>
            →
          </button>
        </div>
      )}
    </div>
  );
};

export default CustomModal;
