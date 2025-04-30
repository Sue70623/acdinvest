import React, { useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import PropertyCardType2 from "../../components/PropertyCardType2";
import HeroType2 from "../../components/HeroType2";
import "./zonesPages.css";
import ImageGalleryModal from "../../components/ImageGalleryModal";
import { Helmet } from "react-helmet";

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

  const handleOpenGallery = () => {
    setIsGalleryOpen(true); // Ouvre la modale
  };

  const handleCloseGallery = () => {
    setIsGalleryOpen(false); // Ferme la modale
  };

  return (
    <DefaultLayout
      title="Xiulet Hauss - ACD Invest"
      description="Découvrez Xiulet Hauss, un habitat unique au cœur de Sant Julià de Lòria."
    >
      <Helmet>
        <title>Xiulet Hauss - ACD Invest</title>
        <meta name="description" content="Découvrez Xiulet Hauss, un habitat unique au cœur de Sant Julià de Lòria." />
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
        />
        <div className="zone-info-block">
          <div className="zone-distances">
            <p>Frontera espanyola: km</p>
            <p>Frontera fancesa: km</p>
            <p>Andorra la Vella: km</p>
          </div>
          {/* Lien vers Google Maps */}
          <iframe
            className="map-iframe"
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

export default XiuletHauss;
