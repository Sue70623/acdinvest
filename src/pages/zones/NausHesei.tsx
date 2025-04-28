import React, { useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import PropertyCardType2 from "../../components/PropertyCardType2";
import HeroType2 from "../../components/HeroType2";
import "./zonesPages.css";
import ImageGalleryModal from "../../components/ImageGalleryModal";

const NausHesei: React.FC = () => {
// Tableau d'images pour la galerie
const images = [
  "https://via.placeholder.com/600x400?text=Image1",
  "https://via.placeholder.com/600x400?text=Image2",
  "https://via.placeholder.com/600x400?text=Image3",
  "https://via.placeholder.com/600x400?text=Image4",
];

const [isGalleryOpen, setIsGalleryOpen] = useState(false);

const handleOpenGallery = () => {
  setIsGalleryOpen(true); // Ouvre la modale
};

const handleCloseGallery = () => {
  setIsGalleryOpen(false); // Ferme la modale
};


  return (
    <DefaultLayout>
      <div className="zone-page">
        <HeroType2
          backgroundImage="https://via.placeholder.com/1200x400"
          title="Naus Hesei"
          subtitle="Un espai únic envoltat de natura"
        />
        <p className="zone-gallery-link" onClick={handleOpenGallery}>
          📷 Veure totes les nostres fotos
        </p>

        <h1 className="zone-title">Naus Hesei</h1>
        {/* Exemple d'un bien */}
        {/* Description contextuelle */}
        <p className="zone-description">
          Cette zone est nichée dans un écrin de verdure, à quelques minutes de
          la ville...
        </p>
        <PropertyCardType2
          title="Uns Espais"
          description="Description temporaire"
          images={["https://via.placeholder.com/600"]}
          buttonLabel="Ver Mas"
          link="/liste-des-biens/listNausHesei"
        />
        <PropertyCardType2
          title="Serveis"
          description="Description temporaire"
          images={["https://via.placeholder.com/600"]}
          buttonLabel="Ver Mas"
          link="/"
          reverse={true}
        />
        <PropertyCardType2
          title="Entorn"
          description="Description temporaire"
          images={["https://via.placeholder.com/600"]}
          buttonLabel="Ver Mas"
          link="/"
        />
        <div className="zone-info-block">
          <div className="zone-distances">
            <p>Frontera espanyola: km</p>
            <p>Frontera fancesa: km</p>
            <p>Andorra la Vella: km</p>
          </div>
          {/* Lien vers Google Maps */}
          <iframe
            className="zone-map-iframe"
            src="https://www.google.com/maps?q=42.5078,1.5211&output=embed"
            width="100%"
            height="300"
            style={{ border: "0", marginTop: "20px" }}
            allowFullScreen
            loading="lazy"
          />
        </div>

        {/* Affichage conditionnel de la modale */}
        {isGalleryOpen && (
          <ImageGalleryModal
            title="Galerie - Plana del Bou"
            images={images}
            onClose={handleCloseGallery}
            onImageClick={(imageUrl) =>
              console.log("Image cliquée :", imageUrl)
            }
          />
        )}
      </div>
    </DefaultLayout>
  );
};

export default NausHesei;
