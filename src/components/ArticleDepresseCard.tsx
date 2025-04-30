import React from "react";
import "./ArticleDePresseCard.css";

interface ArticleDePresseCardProps {
  title: string;
  dateSource: string;
  image: string;
  excerpt: string;
  link: string;
  onClick: () => void;
}

const ArticleDePresseCard: React.FC<ArticleDePresseCardProps> = ({
  title,
  dateSource,
  image,
  excerpt,
  link,
}) => {
  return (
    <div className="article-de-presse-card">
      <div className="article-image">
        <img src={image} alt={title} />
      </div>
      <div className="article-content">
        <h2 className="article-title">{title}</h2>
        <p className="article-date-source">{dateSource}</p>
        <p className="article-excerpt">{excerpt}</p>
        <a
          className="article-button"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          LIUR MAS
        </a>
      </div>
    </div>
  );
};

export default ArticleDePresseCard;
