import React, { useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import HeroType2 from "../../components/HeroType2";
import PropertyCardType2 from "../../components/PropertyCardType2";
import ImageGalleryModal from "../../components/ImageGalleryModal";
import ArticleModal from "../../components/ArticleModal";
import { Helmet } from "react-helmet";
import "./zonesPages.css";

const PlanaDelBou: React.FC = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isServeisModalOpen, setIsServeisModalOpen] = useState(false);
  const [isEntornModalOpen, setIsEntornModalOpen] = useState(false);

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
      title="Plana del Bou - ACD Invest"
      description="Découvrez Plana del Bou, un espace résidentiel intégré à la nature avec des vues imprenables."
    >
      <Helmet>
        <title>Plana del Bou - ACD Invest</title>
        <meta
          name="description"
          content="Découvrez Plana del Bou, un espace résidentiel intégré à la nature avec des vues imprenables."
        />
      </Helmet>

      <div className="zone-page">
        <HeroType2
          backgroundImage="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouservies/resort-plana-del-bou.webp"
          title="Plana del Bou"
          subtitle="Fontaneda, Andorra"
          alt="Resort sostenible de Fontaneda amb habitatges en plena natura i espais de relaxació"
        />
        <p className="zone-gallery-link" onClick={handleOpenGallery}>
          📷 Veure totes les nostres fotos
        </p>

        <h1 className="page-title">Plana del Bou</h1>
        <p className="zone-description">
          Habitatges que combinen modernitat, sostenibilitat i un entorn natural
          privilegiat, amb serveis com spa i gimnàs.
        </p>

        <PropertyCardType2
          title="Uns Espais"
          description="Un espai ideal per desconnectar de la ciutat i gaudir d’un estil de vida saludable."
          images={[
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouservies/calma-a-la-vora.webp",
            "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477641/samples/outdoor-woman.jpg",
            "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477641/samples/outdoor-woman.jpg",
            "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477630/samples/animals/cat.jpg",
            "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477630/samples/animals/cat.jpg",
            "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477630/samples/animals/cat.jpg",
          ]}
          buttonLabel="Ver Mas"
          link="/liste-des-biens/listPlanaDelBou"
        />
        <PropertyCardType2
          title="Serveis"
          description="Piscina, gimnàs, spa, rutes de muntanya, espais comuns."
          images={[
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouservies/omba-i-piscina-plana-del-bou.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouservies/porta-resort-luxe.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouservies/gimnas-servies-plana-del-bou.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouservies/sauna-servies-plana-del-bou.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouservies/chill-ombra-plana-del-bou.webp",
            "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477630/samples/animals/cat.jpg",
          ]}
          buttonLabel="Ver Mas"
          link="/"
          reverse={true}
          onButtonClick={openServeisModal} // Passes the modal opening callback
        />
        <PropertyCardType2
          title="Entorn"
          description="Plenament integrat a la natura, amb vistes a les muntanyes i a prop de Fontaneda."
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
            <p>Frontera espanyola: 8,7km</p>
            <p>Frontera fancesa: 32,3km</p>
            <p>Andorra la Vella: 11,9km</p>
          </div>
          {/* Lien vers Google Maps */}
          <iframe
            className="map-iframe"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2943.7924034511384!2d1.466213076238606!3d42.453432929197305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDLCsDI3JzEyLjMiTiAxwrAyOCcwNy42IkU!5e0!3m2!1sfr!2sad!4v1746192572544!5m2!1sfr!2sad"
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

        <ArticleModal
          title="Serveis"
          content="Piscina, gimnàs, spa, rutes de muntanya, espais comuns."
          imageUrl="https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477641/samples/outdoor-woman.jpg"
          isOpen={isServeisModalOpen}
          onClose={closeServeisModal}
        />

        <ArticleModal
          title="Entorn"
          content="Plenament integrat a la natura, amb vistes a les muntanyes i a prop de Fontaneda."
          imageUrl="https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477641/samples/outdoor-woman.jpg"
          isOpen={isEntornModalOpen}
          onClose={closeEntornModal}
        />
      </div>
    </DefaultLayout>
  );
};

export default PlanaDelBou;
