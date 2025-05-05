import React from "react";
import "./QuiSomSection.css";

interface QuiSomSectionProps {
  title: string;
  introduction: string;
  sections: {
    title: string;
    image: string;
    description: string;
  }[];
}

const QuiSomSection: React.FC<QuiSomSectionProps> = ({
  title,
  introduction,
  sections,
}) => {
  return (
    <div className="qui-som-section">
      <h1 className="qui-som-title">{title}</h1>
      <p className="qui-som-introduction">{introduction}</p>
      <div className="qui-som-sections">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`qui-som-section-item ${
              index % 2 === 0 ? "normal" : "reverse"
            }`}
          >
            <div className="qui-som-image">
              <img src={section.image} alt={section.title || "Section image"} />
            </div>
            <div className="qui-som-content">
              <h2 className="qui-som-section-title">{section.title}</h2>
              <p className="qui-som-description">{section.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="qui-som-footer">
        <a href="/contact" className="qui-som-button">
          Contacta'ns
        </a>
      </div>
    </div>
  );
};

export default QuiSomSection;
