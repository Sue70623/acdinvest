import React, { useState } from "react";
import "./ImageGalleryModal.css";

interface ImageGalleryModalProps {
  title: string;
  images: string[];
  onClose: () => void;
  onImageClick?: (imageUrl: string) => void;
}

const ImageGalleryModal: React.FC<ImageGalleryModalProps> = ({
  title,
  images,
  onClose,
  onImageClick,
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
    <div className="image-gallery-modal" onKeyDown={handleKeyDown} tabIndex={0}>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-body">
          <div className="image-grid">
            {images.map((image, index) => (
              <div
                key={index}
                className="image-item"
                onClick={() => {
                  openLightbox(index);
                  if (onImageClick) onImageClick(image);
                }}
              >
                <img src={image} alt={`Image ${index + 1}`} />
              </div>
            ))}
          </div>
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

export default ImageGalleryModal;
