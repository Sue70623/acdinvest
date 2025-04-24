import React from "react";
import "./ImageGalleryModal.css";

interface ImageGalleryModalProps {
  title: string;
  images: string[];
  onClose: () => void;
  onImageClick?: (imageUrl: string) => void; // Bonus : callback pour ouvrir une image en grand
}

const ImageGalleryModal: React.FC<ImageGalleryModalProps> = ({
  title,
  images,
  onClose,
  onImageClick,
}) => {
  return (
    <div className="image-gallery-modal">
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
                onClick={() => onImageClick && onImageClick(image)}
              >
                <img src={image} alt={`Image ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGalleryModal;