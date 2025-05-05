import React from "react";
import "./ArticleBlogCard.css";

interface ArticleBlogCardProps {
  title: string;
  excerpt: string;
  image?: string; // Image optionnelle
  videoUrl?: string; // Ajout de la propriété videoUrl
  onReadMore: () => void;
  reverse?: boolean; // Option pour inverser l'image
}

const ArticleBlogCard: React.FC<ArticleBlogCardProps> = ({
  title,
  excerpt,
  image = "https://via.placeholder.com/300x200?text=Image+non+disponible",
  videoUrl, // Image par défaut
  onReadMore,
  reverse = false,
}) => {
  return (
    <div className={`article-blog-card ${reverse ? "reverse" : ""}`}>
      {videoUrl ? (
        <iframe
          className="article-video"
          src={videoUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <img
          src={image}
          alt={title || "Blog article image"}
          className="article-image"
        />
      )}
      <div className="article-content">
        <h2 className="article-title">{title}</h2>
        <p className="article-excerpt">{excerpt}</p>
        <button className="article-button" onClick={onReadMore}>
          Més informació
        </button>
      </div>
    </div>
  );
};

export default ArticleBlogCard;
