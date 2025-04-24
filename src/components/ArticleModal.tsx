import React from "react";
import "./ArticleModal.css";

interface ArticleModalProps {
  title: string;
  content: string;
  imageUrl?: string; // Image optionnelle
  videoUrl?: string; // Vidéo YouTube optionnelle
  onClose: () => void; // Fonction pour fermer la modale
}

const ArticleModal: React.FC<ArticleModalProps> = ({
  title,
  content,
  imageUrl,
  videoUrl,
  onClose,
}) => {
  return (
    <div className="article-modal">
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
