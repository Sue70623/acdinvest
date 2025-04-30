import React from "react";
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
  return (
    <div className="custom-modal">
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">
        {/* En-tête */}
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>

        {/* Corps de la modale */}
        <div className="modal-body">
          <div className="modal-images">
            {images.map((image, index) => (
              <img
                src={image}
                alt={`Image ${index + 1}` || 'Image in modal view'}
                className="custom-modal-image"
              />
            ))}
          </div>
        </div>

        {/* Pied de la modale */}
        <div className="modal-footer">
          <button className="modal-button action-button" onClick={onActionClick}>
            Ver más
          </button>
          <a href={pdfUrl} download className="modal-button download-button">
            Télécharger PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;