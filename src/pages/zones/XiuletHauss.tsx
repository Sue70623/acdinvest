import React, { useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import PropertyCardType2 from "../../components/PropertyCardType2";
import HeroType2 from "../../components/HeroType2";
import "./zonesPages.css";
import ImageGalleryModal from "../../components/ImageGalleryModal";
import { Helmet } from "react-helmet";
import ArticleModal from "../../components/ArticleModal";



// Ensure lightbox functionality is consistent
const handleImageClick = (imageUrl: string) => {
  console.log("Image clicked:", imageUrl);
  // Open lightbox logic here
};

const XiuletHauss: React.FC = () => {
  // Tableau d'images pour la galerie
  const images = [
    "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg",
    "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg",
    "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg",
    "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg",
    "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg",
    "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg",
    "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg",
    "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg",
  ];

  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isServeisModalOpen, setIsServeisModalOpen] = useState(false);
  const [isEntornModalOpen, setIsEntornModalOpen] = useState(false);

  const handleOpenGallery = () => {
    setIsGalleryOpen(true); // Ouvre la modale
  };

  const handleCloseGallery = () => {
    setIsGalleryOpen(false); // Ferme la modale
  };

  const openServeisModal = () => setIsServeisModalOpen(true);
  const closeServeisModal = () => setIsServeisModalOpen(false);

  const openEntornModal = () => setIsEntornModalOpen(true);
  const closeEntornModal = () => setIsEntornModalOpen(false);

  return (
    <DefaultLayout
      title="Xiulet Hauss - ACD Invest"
      description="Découvrez Xiulet Hauss, un habitat unique au cœur de Sant Julià de Lòria."
    >
      <Helmet>
        <title>Xiulet Hauss - ACD Invest</title>
        <meta
          name="description"
          content="Découvrez Xiulet Hauss, un habitat unique au cœur de Sant Julià de Lòria."
        />
      </Helmet>

      <div className="zone-page">
        <HeroType2
          backgroundImage="https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477630/samples/animals/reindeer.jpg"
          title="Xuilet Hauss"
          subtitle="Sant Julià de Lòria, Andorra"
          alt="Edifici Xiulet Hauss a Sant Julià de Lòria, construït sobre l'antic hort del Frare de Cal Colltort"
        />
        <p className="zone-gallery-link" onClick={handleOpenGallery}>
          📷 Veure totes les nostres fotos
        </p>

        <h1 className="page-title">Xuilet Hauss</h1>
        {/* Exemple d'un bien */}
        {/* Description contextuelle */}
        <p className="zone-description">
          Edifici construït sobre l’antic hort del Frare de Cal Colltort, amb
          molta personalitat i arrels.
        </p>
        <PropertyCardType2
          title="Uns Espais"
          description="Un espai amb ànima, on la tradició es troba amb la modernitat."
          images={[
            "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477641/samples/outdoor-woman.jpg",
            "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477641/samples/outdoor-woman.jpg",
            "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477641/samples/outdoor-woman.jpg",
            "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477630/samples/animals/cat.jpg",
            "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477630/samples/animals/cat.jpg",
            "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477630/samples/animals/cat.jpg",
          ]}
          buttonLabel="Ver Mas"
          link="/liste-des-biens/listXiuletHauss"
        />
        <PropertyCardType2
          title="Serveis"
          description="Porxada tradicional, estructura conservada, zona residencial tranquil·la."
          images={[
            "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477641/samples/outdoor-woman.jpg",
            "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477641/samples/outdoor-woman.jpg",
            "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477641/samples/outdoor-woman.jpg",
            "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477630/samples/animals/cat.jpg",
            "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477630/samples/animals/cat.jpg",
            "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477630/samples/animals/cat.jpg",
          ]}
          buttonLabel="Ver Mas"
          link="/"
          reverse={true}
          onButtonClick={openServeisModal} // Passes the modal opening callback
        />
        <PropertyCardType2
          title="Entorn"
          description="Carrer dels Xiulets, part alta del centre històric, amb vistes i tranquil·litat."
          images={[
            "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477641/samples/outdoor-woman.jpg",
            "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477641/samples/outdoor-woman.jpg",
            "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477641/samples/outdoor-woman.jpg",
            "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477630/samples/animals/cat.jpg",
            "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477630/samples/animals/cat.jpg",
            "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477630/samples/animals/cat.jpg",
          ]}
          buttonLabel="Ver Mas"
          link="/"
          onButtonClick={openEntornModal} // Passes the modal opening callback
        />
        <hr className="separator" />
        <div className="zone-info-block">
          <div className="zone-distances">
            <p>Frontera espanyola: km</p>
            <p>Frontera fancesa: km</p>
            <p>Andorra la Vella: km</p>
          </div>
          {/* Lien vers Google Maps */}
          <iframe
            className="map-iframe"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d735.8259617551209!2d1.4913272696422497!3d42.46382598753708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDLCsDI3JzQ5LjgiTiAxwrAyOSczMS4xIkU!5e0!3m2!1sfr!2sus!4v1746448218378!5m2!1sfr!2sus"
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
            onImageClick={handleImageClick}
          />
        )}

        <ArticleModal
          title="Serveis"
          content="Porxada tradicional, estructura conservada, zona residencial tranquil·la."
          imageUrl="https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477641/samples/outdoor-woman.jpg"
          isOpen={isServeisModalOpen}
          onClose={closeServeisModal}
        />

        <ArticleModal
          title="Entorn"
          content="Carrer dels Xiulets, part alta del centre històric, amb vistes i tranquil·litat."
          imageUrl="https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477641/samples/outdoor-woman.jpg"
          isOpen={isEntornModalOpen}
          onClose={closeEntornModal}
        />
      </div>
    </DefaultLayout>
  );
};

export default XiuletHauss;
