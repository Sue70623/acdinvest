import React, { useEffect } from "react";
import "./ArticleModal.css";

interface ArticleModalProps {
  title: string;
  content: string;
  imageUrl?: string; // Image optionnelle
  videoUrl?: string; // Vidéo YouTube optionnelle
  isOpen: boolean;
  onClose: () => void; // Fonction pour fermer la modale
}

const ArticleModal: React.FC<ArticleModalProps> = ({
  title,
  content,
  imageUrl,
  videoUrl,
  isOpen,
  onClose,
}) => {

  // Gestion de la touche "Échap" pour fermer le modal
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

  // Ne pas afficher le modal si `isOpen` est false
  if (!isOpen) {
    return null;
  }
  return (
    <div className="article-modal" role="dialog"
    aria-labelledby="modal-title"
    aria-describedby="modal-content"
    aria-modal="true">
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">
        {/* Bouton de fermeture */}
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        {/* Image principale */}
        {imageUrl && <img src={imageUrl} alt={title} className="modal-image" />}

        {/* Titre */}
        <h1 className="modal-title">{title}</h1>

        {/* Contenu principal */}
        <p className="modal-content-text">{content}</p>

        {/* Vidéo YouTube */}
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
      </div>
    </div>
  );
};

export default ArticleModal;
