import React, { useEffect } from "react";
import "./ArticleModal.css";

interface ArticleModalProps {
  title: string;
  content: string;
  imageUrl?: string;
  videoUrl?: string;
  isOpen: boolean;
  onClose: () => void;
  pdfLink?: string;
  contactLink?: string;
  imageUrls?: string[];
}

const ArticleModal: React.FC<ArticleModalProps> = ({
  title,
  content,
  imageUrl,
  videoUrl,
  isOpen,
  onClose,
  pdfLink,
  contactLink,
  imageUrls,
}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="article-modal"
      role="dialog"
      aria-labelledby="modal-title"
      aria-modal="true"
    >
      <div className="modal-overlay" onClick={onClose}></div>

      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        {imageUrls && imageUrls?.length > 0 && (
          <div className="modal-gallery">
            {imageUrls.map((url, index) => (
              <img
                key={index}
                src={url}
                alt="Imatge de l'article"
                className="modal-gallery-image"
              />
            ))}
          </div>
        )}

        {imageUrl && (
          <img
            src={imageUrl}
            alt="Imatge de l'article"
            className="modal-image"
          />
        )}

        <h1 className="modal-title">{title}</h1>

        <p className="modal-content-text">{content}</p>

        {videoUrl && (
          <div className="modal-video">
            <iframe
              src={videoUrl}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {(pdfLink || contactLink) && (
          <div className="modal-buttons">
            {pdfLink && (
              <a
                href={pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-button"
              >
                Voir PDF
              </a>
            )}
            {contactLink && (
              <a href={contactLink} className="modal-button">
                Contactez-nous
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleModal;
