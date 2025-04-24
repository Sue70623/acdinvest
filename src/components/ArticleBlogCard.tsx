import React from "react";
import "./ArticleBlogCard.css";

interface ArticleBlogCardProps {
  title: string;
  excerpt: string;
  image?: string; // Image optionnelle
  onReadMore: () => void;
  reverse?: boolean; // Option pour inverser l'image
}

const ArticleBlogCard: React.FC<ArticleBlogCardProps> = ({
  title,
  excerpt,
  image = "https://via.placeholder.com/300x200?text=Image+non+disponible", // Image par défaut
  onReadMore,
  reverse = false,
}) => {
  return (
    <div className={`article-blog-card ${reverse ? "reverse" : ""}`}>
      <div className="article-image">
        <img src={image} alt={title} />
      </div>
      <div className="article-content">
        <h2 className="article-title">{title}</h2>
        <p className="article-excerpt">{excerpt}</p>
        <button className="article-button" onClick={onReadMore}>
          En savoir plus
        </button>
      </div>
    </div>
  );
};

export default ArticleBlogCard;
