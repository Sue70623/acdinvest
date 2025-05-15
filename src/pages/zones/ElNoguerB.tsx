import React, { useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import HeroType2 from "../../components/HeroType2";
import PropertyCardType2 from "../../components/PropertyCardType2";
import ImageGalleryModal from "../../components/ImageGalleryModal";
import ArticleModal from "../../components/ArticleModal";
import { Helmet } from "react-helmet";
import "./zonesPages.css";

const ElNoguerB: React.FC = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isServeisModalOpen, setIsServeisModalOpen] = useState(false);
  const [isEntornModalOpen, setIsEntornModalOpen] = useState(false);

  const images = [
    "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/Noguer%20B/BulkResizePhotos.comNoguerBx1/entrada-amb-art-el-noguer-b-sant-julia-dde-loria.webp",
    "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/Noguer%20B/BulkResizePhotos.comNoguerBx1/espais-commun-el-noguer-b.webp",
    "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/Noguer%20B/BulkResizePhotos.comNoguerBx1/el-noguer-b-a-prop-escola-francesa.webp",
    "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/Noguer%20B/BulkResizePhotos.comNoguerBx1/vista-montanya-habitacio-sant-julia-de-loria-el-noguer-b.webp",
  ];

  const handleOpenGallery = () => setIsGalleryOpen(true);
  const handleCloseGallery = () => setIsGalleryOpen(false);

  const openServeisModal = () => setIsServeisModalOpen(true);
  const closeServeisModal = () => setIsServeisModalOpen(false);

  const openEntornModal = () => setIsEntornModalOpen(true);
  const closeEntornModal = () => setIsEntornModalOpen(false);

  return (
    <DefaultLayout
      title="El Noguer B - ACD Invest"
      description="Découvrez El Noguer B, des appartements modernes et fonctionnels à Sant Julià de Lòria."
    >
      <Helmet>
        <title>El Noguer B - ACD Invest</title>
        <meta
          name="description"
          content="Découvrez El Noguer B, des appartements modernes et fonctionnels à Sant Julià de Lòria."
        />
      </Helmet>

      <div className="zone-page">
        <HeroType2
          backgroundImage="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament.webp"
          title="El Noguer B"
          subtitle="Sant Julià de Lòria, Andorra"
          alt="Edifici El Noguer B a Sant Julià de Lòria, pisos de 3 habitacions amb façana moderna de pedra i alumini"
        />

        <p className="zone-gallery-link" onClick={handleOpenGallery}>
          📷 Veure totes les nostres fotos
        </p>

        <h1 className="page-title">El Noguer B</h1>
        <p className="zone-description">
          Pisos de 3 habitacions amb una arquitectura singular i funcional,
          ideals per a famílies.
        </p>

        <PropertyCardType2
          title="Uns Espais"
          description="Habitatges amb espais amplis i lluminosos, perfectament integrats al seu entorn urbà."
          images={[
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/Noguer%20B/BulkResizePhotos.comNoguerBx1/entrada-amb-art-el-noguer-b-sant-julia-dde-loria.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/Noguer%20B/BulkResizePhotos.comNoguerBx1/espais-commun-el-noguer-b.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/Noguer%20B/BulkResizePhotos.comNoguerBx1/el-noguer-b-a-prop-escola-francesa.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/Noguer%20B/BulkResizePhotos.comNoguerBx1/vista-montanya-habitacio-sant-julia-de-loria-el-noguer-b.webp",
            // (ajouter les vraies images ici)
          ]}
          buttonLabel="Ver Mas"
          link="/liste-des-biens/listElNoguerB"
        />

        <PropertyCardType2
          title="Serveis"
          description="Pàrquing privat, accessos adaptats, proximitat a comerços i transport públic."
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
          description="Ubicació privilegiada a Sant Julià, amb vistes i zones verdes properes."
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

          {/* Google Maps Location */}
          <iframe
            className="map-iframe"
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d2943.226772747844!2d1.4931156!3d42.4654654!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDLCsDI3JzU1LjgiTiAxwrAyOSczNS4xIkU!5e0!3m2!1sfr!2sad!4v1746447890553!5m2!1sfr!2sad"
            width="100%"
            height="300"
            style={{ border: "0", marginTop: "20px" }}
            allowFullScreen
            loading="lazy"
          />
        </div>

        {isGalleryOpen && (
          <ImageGalleryModal
            title="Galeria fotogràfica El Noguer B"
            images={images}
            onClose={handleCloseGallery}
          />
        )}

        <ArticleModal
          title="Serveis"
          content="El Noguer B ofereix comoditats modernes com pàrquing privat i accessos adaptats, a pocs minuts dels principals serveis de la parròquia."
          imageUrl="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament400-400.webp"
          isOpen={isServeisModalOpen}
          onClose={closeServeisModal}
        />

        <ArticleModal
          title="Entorn"
          content="Situat en una zona tranquil·la i propera al centre, El Noguer B combina la vida urbana amb la proximitat a espais verds i camins de muntanya."
          imageUrl="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament400-400.webp"
          isOpen={isEntornModalOpen}
          onClose={closeEntornModal}
        />
      </div>
    </DefaultLayout>
  );
};

export default ElNoguerB;
