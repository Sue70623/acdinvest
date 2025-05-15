import React, { useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import HeroType2 from "../../components/HeroType2";
import PropertyCardType2 from "../../components/PropertyCardType2";
import ImageGalleryModal from "../../components/ImageGalleryModal";
import ArticleModal from "../../components/ArticleModal";
import { Helmet } from "react-helmet";
import "./zonesPages.css";

const LaFreixeraII: React.FC = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isServeisModalOpen, setIsServeisModalOpen] = useState(false);
  const [isEntornModalOpen, setIsEntornModalOpen] = useState(false);

  const images = [
    "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg",
    // (ajouter les vraies images ici)
  ];

  const handleOpenGallery = () => setIsGalleryOpen(true);
  const handleCloseGallery = () => setIsGalleryOpen(false);

  const openServeisModal = () => setIsServeisModalOpen(true);
  const closeServeisModal = () => setIsServeisModalOpen(false);

  const openEntornModal = () => setIsEntornModalOpen(true);
  const closeEntornModal = () => setIsEntornModalOpen(false);

  return (
    <DefaultLayout
      title="La Freixera II - ACD Invest"
      description="Découvrez La Freixera II, un projet immobilier moderne et durable à Les Arades."
    >
      <Helmet>
        <title>La Freixera II - ACD Invest</title>
        <meta
          name="description"
          content="Découvrez La Freixera II, un projet immobilier moderne et durable à Les Arades."
        />
      </Helmet>

      <div className="zone-page">
        <HeroType2
          backgroundImage="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament.webp"
          title="La Freixera II"
          subtitle="Sant Julià de Lòria, Andorra"
          alt="Edifici d'obra nova La Freixera II amb pisos lluminosos i àtics a Sant Julià de Lòria"
        />

        <p className="zone-gallery-link" onClick={handleOpenGallery}>
          📷 Veure totes les nostres fotos
        </p>

        <h1 className="page-title">La Freixera II</h1>
        <p className="zone-description">
          Pisos de 2 habitacions i àtics amb grans finestres, al costat de La
          Freixera I.
        </p>

    

       

        <PropertyCardType2
          title="Uns Espais"
          description="Un espai modern amb vista i accés fàcil a serveis, pensat per al confort."
          images={[
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament400-400.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament400-400.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament400-400.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament400-400.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament400-400.webp",
            // (ajouter les vraies images ici)
          ]}
          buttonLabel="Ver Mas"
          link="/liste-des-biens/listLaFreixeraII"
        />

        <PropertyCardType2
          title="Serveis"
          description="5 plantes, 2 àtics, pàrquing, parada de bus, supermercat a 350 metres."
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
          description="Zona nord de Sant Julià, tranquil·litat amb serveis a prop i arquitectura contemporània."
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
            <p>Frontera espanyola: 4,7km</p>
            <p>Frontera francesa: 26km</p>
            <p>Andorra la Vella: 5,6km</p>
          </div>
          <iframe
            className="map-iframe"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d735.7341392792558!2d1.4928442696422686!3d42.471637987413516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDLCsDI4JzE3LjkiTiAxwrAyOSczNi42IkU!5e0!3m2!1sfr!2sus!4v1746448140329!5m2!1sfr!2sus"
            width="100%"
            height="300"
            style={{ border: "0", marginTop: "20px" }}
            allowFullScreen
            loading="lazy"
          />
        </div>

        {isGalleryOpen && (
          <ImageGalleryModal
            title="Galeria fotogràfica - La Freixera II"
            images={images}
            onClose={handleCloseGallery}
          />
        )}

        <ArticleModal
          title="Serveis"
          content="5 plantes, 2 àtics, pàrquing, parada de bus, supermercat a 350 metres."
          imageUrl="https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477641/samples/outdoor-woman.jpg"
          isOpen={isServeisModalOpen}
          onClose={closeServeisModal}
        />

        <ArticleModal
          title="Entorn"
          content="Zona nord de Sant Julià, tranquil·litat amb serveis a prop i arquitectura contemporània."
          imageUrl="https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477641/samples/outdoor-woman.jpg"
          isOpen={isEntornModalOpen}
          onClose={closeEntornModal}
        />
      </div>
    </DefaultLayout>
  );
};

export default LaFreixeraII;
