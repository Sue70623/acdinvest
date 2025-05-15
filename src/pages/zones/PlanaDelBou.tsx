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
    "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/BulkResizePhotos.com%20(15)ESPAISCOMMUN/flor-jardi-resort.webp",
    "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/BulkResizePhotos.com%20(15)ESPAISCOMMUN/piscina-andorra-resort.webp",
    "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/BulkResizePhotos.com%20(15)ESPAISCOMMUN/raco-tranquil-jardi-residencial.webp",
    "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/BulkResizePhotos.com%20(15)ESPAISCOMMUN/flor-jardi-resort.webp",
    "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/bec-plana-del-bou-fontaneda.webp",
    "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/borda-de-la-plana-fontaneda.webp",
    "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouservies/entrada-resort-plana-del-bou.webp",
    "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouservies/jardi-etorn-plana-del-bou.webp",
    "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/BulkResizePhotos.com%20(15)ESPAISCOMMUN/bustia-residencial-luxe.webp",
    "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/sauna-private-borda-plana.webp",
    "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/sol-borda-plana-fontaneda.webp",
    "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/terrasa-borda-plana-del-bou.webp",
    "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouservies/omba-i-piscina-plana-del-bou.webp",
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
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/BulkResizePhotos.com%20(15)ESPAISCOMMUN/flor-jardi-resort.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/BulkResizePhotos.com%20(15)ESPAISCOMMUN/piscina-andorra-resort.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/BulkResizePhotos.com%20(15)ESPAISCOMMUN/raco-tranquil-jardi-residencial.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/BulkResizePhotos.com%20(15)ESPAISCOMMUN/flor-jardi-resort.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/bec-plana-del-bou-fontaneda.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/borda-de-la-plana-fontaneda.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouservies/entrada-resort-plana-del-bou.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouservies/jardi-etorn-plana-del-bou.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/BulkResizePhotos.com%20(15)ESPAISCOMMUN/bustia-residencial-luxe.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/sol-borda-plana-fontaneda.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/terrasa-borda-plana-del-bou.webp",
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
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouservies/piscina-sol-plana-del-bou.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/BulkResizePhotos.com%20(15)ESPAISCOMMUN/flor-jardi-resort.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/BulkResizePhotos.com%20(15)ESPAISCOMMUN/chill-piscina-andorra.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/sauna-private-borda-plana.webp",
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
            title="Galeria fotogràfica - Plana del Bou"
            images={images}
            onClose={handleCloseGallery}
          />
        )}

        <ArticleModal
          title="Serveis"
          content="El Resort de Fontaneda ofereix un conjunt de serveis pensats per al benestar i el confort diari dels seus residents. Entre la planta baixa i la soterrània es troben espais comuns com el gimnàs completament equipat, l’spa amb jacuzzi, sauna i hammam, així com una sala de billar ideal per desconnectar. Cada apartament disposa de terrassa o jardí privat, oferint espais exteriors íntims per gaudir de l’entorn. A més, la piscina i les zones de relaxació comuniquen amb la natura, promovent un estil de vida saludable i actiu."
          imageUrl="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouservies/omba-i-piscina-plana-del-bou.webp"
          isOpen={isServeisModalOpen}
          onClose={closeServeisModal}
        />

        <ArticleModal
          title="Entorn"
          content="Situat a pocs minuts de Fontaneda i de Sant Julià de Lòria, el Resort s’integra en plena natura, en un entorn tranquil i privilegiat. Antigament un assecador de tabac, l’espai ha estat reformat per respectar la seva història i potenciar la connexió amb el paisatge. Els apartaments combinen l’arquitectura rústica amb solucions modernes, envoltats de boscos, senders i camins per excursions a peu o en bicicleta. Un entorn únic on la sostenibilitat, la lluminositat i el confort es fonen per crear la llar ideal."
          imageUrl="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament.webp"
          isOpen={isEntornModalOpen}
          onClose={closeEntornModal}
        />
      </div>
    </DefaultLayout>
  );
};

export default PlanaDelBou;
