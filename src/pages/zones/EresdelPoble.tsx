import React, { useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import PropertyCardType2 from "../../components/PropertyCardType2";
import HeroType2 from "../../components/HeroType2";
import "./zonesPages.css";
import ImageGalleryModal from "../../components/ImageGalleryModal"; // Import the missing component
import { Helmet } from "react-helmet";
import ArticleModal from "../../components/ArticleModal";

const EresdelPoble: React.FC = () => {
  // Tableau d'images pour la galerie
  const images = [
    "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/EraDeCalBou/ERAdeCalBou/BulkResizePhotos.com%20(17)ERADECALBOU1/vista-montanya-fontaneda-andorra.webp",
    "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/EraDeCalBou/ERAdeCalBou/BulkResizePhotos.com%20(17)ERADECALBOU1/mezzanine-era-cal-bou-fontaneda-andorra.webp",
    "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/EraDeCalBou/ERAdeCalBou/BulkResizePhotos.com%20(18)ERADECALBOU2/entrada-antic-era-cal-bou-fontaneda.webp",
    "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/EraDeCalBou/ERAdeCalBou/BulkResizePhotos.com%20(18)ERADECALBOU2/lluminos-sal-vista-muntanya-andorra.webp",
    "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/fontaneda.webp",
    "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/EraDeCalBou/ERAdeCalBou/BulkResizePhotos.com%20(17)ERADECALBOU1/vista-muntanya-fontaneda-andorra-casa-rural.webp",
    "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/EraDeCalBou/ERAdeCalBou/BulkResizePhotos.com%20(18)ERADECALBOU2/entrada-antic-era-cal-bou-fontaneda.webp",
    "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/EraDeCalBou/ERAdeCalBou/BulkResizePhotos.com%20(18)ERADECALBOU2/lluminos-sal-vista-muntanya-andorra.webp",
    "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/EraErmita/EraErmita/BulkResizePhotos.com%20(19)ERAERMITA1.1/calma-muntanya-era-ermita-fontaneda.webp",
    "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/EraErmita/EraErmita/BulkResizePhotos.com%20(19)ERAERMITA1.1/menjador-rural-era-ermita-fontanedena.webp",
  ];

  // State for gallery modal visibility
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const handleOpenGallery = () => {
    setIsGalleryOpen(true); // Ouvre la modale
  };

  // State for Serveis modal visibility
  const [isServeisModalOpen, setIsServeisModalOpen] = useState(false);

  const openServeisModal = () => {
    setIsServeisModalOpen(true);
  };

  const closeServeisModal = () => {
    setIsServeisModalOpen(false);
  };

  const handleCloseGallery = () => {
    setIsGalleryOpen(false); // Ferme la modale
  };

  // Removed duplicate declaration of openServeisModal

  const [isEntornModalOpen, setIsEntornModalOpen] = useState(false);

  const openEntornModal = () => {
    setIsEntornModalOpen(true);
    console.log("Entorn modal opened");
  };

  const closeEntornModal = () => {
    setIsEntornModalOpen(false);
  };

  return (
    <DefaultLayout
      title="Eres del Poble - ACD Invest"
      description="Découvrez les maisons rurales d'Eres del Poble, au cœur du village de Fontaneda."
    >
      <Helmet>
        <title>Eres del Poble - ACD Invest</title>
        <meta
          name="description"
          content="Découvrez les maisons rurales d'Eres del Poble, au cœur du village de Fontaneda."
        />
      </Helmet>

      <div className="zone-page">
        <HeroType2
          backgroundImage="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament.webp"
          title="Eres del Poble"
          subtitle="Fontaneda,Andorra"
          alt="Cases tradicionals a Fontaneda amb façanes de pedra i interiors modernitzats"
        />
        <p className="zone-gallery-link" onClick={handleOpenGallery}>
          📷 Veure totes les nostres fotos
        </p>

        <h1 className="page-title">Eres del Poble</h1>
        {/* Exemple d'un bien */}
        {/* Description contextuelle */}
        <p className="zone-description">
          Cases amb encant que conserven l’arquitectura tradicional pirinenca
          amb interiors modernitzats.
        </p>
        <PropertyCardType2
          title="Uns Espais"
          description="Un espai que fusiona història i confort, envoltat de natura."
          images={[
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/fontaneda.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/EraDeCalBou/ERAdeCalBou/BulkResizePhotos.com%20(17)ERADECALBOU1/vista-muntanya-fontaneda-andorra-casa-rural.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/EraDeCalBou/ERAdeCalBou/BulkResizePhotos.com%20(18)ERADECALBOU2/entrada-antic-era-cal-bou-fontaneda.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/EraDeCalBou/ERAdeCalBou/BulkResizePhotos.com%20(18)ERADECALBOU2/lluminos-sal-vista-muntanya-andorra.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/EraErmita/EraErmita/BulkResizePhotos.com%20(19)ERAERMITA1.1/calma-muntanya-era-ermita-fontaneda.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/EraErmita/EraErmita/BulkResizePhotos.com%20(19)ERAERMITA1.1/menjador-rural-era-ermita-fontanedena.webp",
          ]}
          buttonLabel="Ver Mas"
          link="/liste-des-biens/listEresdelPoble"
        />
        <PropertyCardType2
          title="Serveis"
          description="Modernització interior, façana de pedra, sostre de pissarra, tranquil·litat absoluta."
          images={[
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament400-400.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament400-400.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament400-400.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament400-400.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament400-400.webp",
          ]}
          buttonLabel="Ver Mas"
          link="/"
          reverse={true}
          onButtonClick={openServeisModal} // Passes the modal opening callback
        />
        <PropertyCardType2
          title="Entorn"
          description="En plena muntanya, dins la zona antiga del poble, amb accés a camins naturals."
          images={[
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament400-400.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament400-400.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament400-400.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament400-400.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament400-400.webp",
          ]}
          buttonLabel="Ver Mas"
          link="/"
          onButtonClick={openEntornModal} // Passes the modal opening callback
        />
        <hr className="separator" />
        <div className="zone-info-block">
          <div className="zone-distances">
            <p>Frontera espanyola: 9,6km</p>
            <p>Frontera fancesa: 33,1km</p>
            <p>Andorra la Vella: 12,7km</p>
          </div>
          {/* Lien vers Google Maps */}
          <iframe
            className="map-iframe"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2943.759265906343!2d1.4609730762385988!3d42.454137929152694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDLCsDI3JzE0LjkiTiAxwrAyNyc0OC44IkU!5e0!3m2!1sfr!2sad!4v1746431929246!5m2!1sfr!2sad"
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
            title="Galeria fotogràfica Eres del Poble"
            images={images}
            onClose={handleCloseGallery}
          />
        )}

        <ArticleModal
          title="Serveis"
          content="Les cases de l’Era de Cal Bou i l’Era de l’Ermita ofereixen un espai acollidor que conserva l’essència de l’arquitectura tradicional pirinenca, però adaptada als estàndards actuals de confort. Cada habitatge disposa de dues plantes, amb estances lluminoses i zones exteriors privades per gaudir de la natura. Es conserven elements originals com murs de pedra i bigues de fusta, combinats amb cuines obertes, xemeneies i terrasses equipades amb barbacoa, creant un equilibri perfecte entre tradició i modernitat."
          imageUrl="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament.webp"
          isOpen={isServeisModalOpen}
          onClose={closeServeisModal}
        />

        <ArticleModal
          title="Entorn"
          content="Situades al nucli antic de Fontaneda, les Eres del Poble s’envolten d’un entorn rural tranquil i natural. Aquestes cases estan perfectament integrades al paisatge de muntanya, amb accés directe a camins per fer excursions a peu o en bicicleta. L’encant d’aquestes construccions tradicionals es combina amb la serenor del seu entorn, oferint als residents un refugi ideal per desconnectar i viure la muntanya amb autenticitat i comoditat."
          imageUrl="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament.webp"
          isOpen={isEntornModalOpen}
          onClose={closeEntornModal}
        />
      </div>
    </DefaultLayout>
  );
};

export default EresdelPoble;
