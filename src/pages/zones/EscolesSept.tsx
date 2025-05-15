import React, { useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import HeroType2 from "../../components/HeroType2";
import PropertyCardType2 from "../../components/PropertyCardType2";
import ImageGalleryModal from "../../components/ImageGalleryModal";
import ArticleModal from "../../components/ArticleModal";
import { Helmet } from "react-helmet";
import "./zonesPages.css";

const EscolesSept: React.FC = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isServeisModalOpen, setIsServeisModalOpen] = useState(false);
  const [isEntornModalOpen, setIsEntornModalOpen] = useState(false);

  const images = [
    "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Escoles%20Sept/Escoles%20Sept/escoles-sept-mural-sant-julia-de-loria.webp",
    "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Escoles%20Sept/Escoles%20Sept/EscSept5-1/menjador-lluminos-i-espaios-escoles-sept-andorra.webp",
    "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Escoles%20Sept/Escoles%20Sept/EscSept1-1/habitacio-1-1-Escoles-7-andorra.webp",
    "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Escoles%20Sept/Escoles%20Sept/EscSept1-2/terrasa-1-2-Escoles-7-Andorra.webp",

    // (ajouter ici les vraies images finales)
  ];

  const handleOpenGallery = () => setIsGalleryOpen(true);
  const handleCloseGallery = () => setIsGalleryOpen(false);

  const openServeisModal = () => setIsServeisModalOpen(true);
  const closeServeisModal = () => setIsServeisModalOpen(false);

  const openEntornModal = () => setIsEntornModalOpen(true);
  const closeEntornModal = () => setIsEntornModalOpen(false);

  return (
    <DefaultLayout
      title="Escoles Sept - ACD Invest"
      description="Découvrez les biens immobiliers Escoles Sept, situés dans un emplacement central à Sant Julià de Lòria."
    >
      <Helmet>
        <title>Escoles Sept - ACD Invest</title>
        <meta
          name="description"
          content="Découvrez les biens immobiliers Escoles Sept, situés dans un emplacement central à Sant Julià de Lòria."
        />
      </Helmet>

      <div className="zone-page">
        <HeroType2
          backgroundImage="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/escoles-7-obra-samantha-bosque.webp"
          title="Escoles Sept"
          subtitle="Sant Julià de Lòria, Andorra"
          alt="Edifici reformat Escoles Sept amb pisos lluminosos i façana singular a Sant Julià de Lòria"
        />

        <p className="zone-gallery-link" onClick={handleOpenGallery}>
          📷 Veure totes les nostres fotos
        </p>

        <h1 className="page-title">Escoles Sept</h1>
        <p className="zone-description">
          Pisos d’1 i 2 habitacions amb grans finestres i balcons, ideals per a
          parelles o persones soles.
        </p>

        <PropertyCardType2
          title="Uns Espais"
          description="Un espai funcional i acollidor amb una ubicació privilegiada."
          images={[
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Escoles%20Sept/Escoles%20Sept/escoles-sept-mural-sant-julia-de-loria.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Escoles%20Sept/Escoles%20Sept/EscSept5-1/menjador-lluminos-i-espaios-escoles-sept-andorra.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Escoles%20Sept/Escoles%20Sept/EscSept1-1/habitacio-1-1-Escoles-7-andorra.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Escoles%20Sept/Escoles%20Sept/EscSept1-2/terrasa-1-2-Escoles-7-Andorra.webp",

            // (ajouter les vraies images ici)
          ]}
          buttonLabel="Ver Mas"
          link="/liste-des-biens/listEscolesSept"
        />

        <PropertyCardType2
          title="Serveis"
          description="Reforma integral, terrasses, gran presència arquitectònica."
          images={[
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament400-400.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament400-400.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament400-400.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament400-400.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament400-400.webp",
            // (ajouter les vraies images ici)
          ]}
          buttonLabel="Ver Mas"
          link="/"
          reverse={true}
          onButtonClick={openServeisModal}
        />

        <PropertyCardType2
          title="Entorn"
          description="Ubicat al carrer de les escoles, prop de tot: escoles, farmàcies, esport, supermercats."
          images={[
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament400-400.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament400-400.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament400-400.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament400-400.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament400-400.webp",
            // (ajouter les vraies images ici)
          ]}
          buttonLabel="Ver Mas"
          link="/"
          onButtonClick={openEntornModal}
        />

        <hr className="separator" />

        <div className="zone-info-block">
          <div className="zone-distances">
            <p>Frontera espanyola: 4,4km</p>
            <p>Frontera francesa: 26,6km</p>
            <p>Andorra la Vella: 6,2km</p>
          </div>
          <iframe
            className="map-iframe"
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d2943.226772747844!2d1.4931156!3d42.4654654!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDLCsDI3JzU1LjgiTiAxwrAyOSczNS4xIkU!5e0!3m2!1sfr!2sad!4v1746447770147!5m2!1sfr!2sad"
            width="100%"
            height="300"
            style={{ border: "0", marginTop: "20px" }}
            allowFullScreen
            loading="lazy"
          />
        </div>

        {isGalleryOpen && (
          <ImageGalleryModal
            title="Galeria fotogràfica - Escoles Sept"
            images={images}
            onClose={handleCloseGallery}
          />
        )}

        <ArticleModal
          title="Serveis"
          content="Reforma integral, terrasses, gran presència arquitectònica."
          imageUrl="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament400-400.webp"
          isOpen={isServeisModalOpen}
          onClose={closeServeisModal}
        />

        <ArticleModal
          title="Entorn"
          content="Ubicat al carrer de les escoles, prop de tot: escoles, farmàcies, esport, supermercats."
          imageUrl="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament400-400.webp"
          isOpen={isEntornModalOpen}
          onClose={closeEntornModal}
        />
      </div>
    </DefaultLayout>
  );
};

export default EscolesSept;
