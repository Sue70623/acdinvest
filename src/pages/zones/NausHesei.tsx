import React, { useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import HeroType2 from "../../components/HeroType2";
import PropertyCardType2 from "../../components/PropertyCardType2";
import ImageGalleryModal from "../../components/ImageGalleryModal";
import { Helmet } from "react-helmet";
import ArticleModal from "../../components/ArticleModal";
import "./zonesPages.css";

const NausHesei: React.FC = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isServeisModalOpen, setIsServeisModalOpen] = useState(false);
  const [isEntornModalOpen, setIsEntornModalOpen] = useState(false);

  const images = [
    "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/NauHesei/BulkResizePhotos.comN5n58/interior-industrial-Naus5-58-Andorra.webp",
    "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/NauHesei/BulkResizePhotos.comN5n58/Exterior-Naus-N5-58.webp",
    "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/NauHesei/BulkResizePhotos.comNau41-42-2/local-commercial.webp",
    "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/NauHesei/BulkResizePhotos.comNau41-42-2/sala-polivalente-modular.webp",
    "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/NauHesei/BulkResizePhotos.comNau41-42-3/Local-industrial-a-Andorra-Exterior.webp",
    "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/NauHesei/BulkResizePhotos.comNau41-42-2/zone-logistica-o-de-produccio-industrial.webp",
    // Ajouter les vraies images ici
  ];

  const handleOpenGallery = () => setIsGalleryOpen(true);
  const handleCloseGallery = () => setIsGalleryOpen(false);

  const openServeisModal = () => setIsServeisModalOpen(true);
  const closeServeisModal = () => setIsServeisModalOpen(false);

  const openEntornModal = () => setIsEntornModalOpen(true);
  const closeEntornModal = () => setIsEntornModalOpen(false);

  return (
    <DefaultLayout
      title="Naus Hesei - ACD Invest"
      description="Découvrez les biens industriels Naus Hesei, situés à l'entrée d'Andorre."
    >
      <Helmet>
        <title>Naus Hesei - ACD Invest</title>
        <meta
          name="description"
          content="Découvrez les biens industriels Naus Hesei, situés à l'entrée d'Andorre."
        />
      </Helmet>

      <div className="zone-page">
        <HeroType2
          backgroundImage="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament.webp"
          title="Naus Hesei"
          subtitle="Aixovall, Andorra"
          alt="Naus industrials modernes a Aixovall, Sant Julià de Lòria, amb accés per tràilers"
        />

        <p className="zone-gallery-link" onClick={handleOpenGallery}>
          📷 Veure totes les nostres fotos
        </p>

        <h1 className="page-title">Naus Hesei</h1>
        <p className="zone-description">
          Mòduls entre 200 i 400 m² amb alçada de fins a 7 metres, al polígon
          industrial d’Aixovall.
        </p>

        <PropertyCardType2
          title="Uns Espais"
          description="Un espai adaptat al creixement de negocis amb logística moderna."
          images={[
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/NauHesei/BulkResizePhotos.comN5n58/interior-industrial-Naus5-58-Andorra.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/NauHesei/BulkResizePhotos.comN5n58/Exterior-Naus-N5-58.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/NauHesei/BulkResizePhotos.comNau41-42-2/local-commercial.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/NauHesei/BulkResizePhotos.comNau41-42-2/sala-polivalente-modular.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/NauHesei/BulkResizePhotos.comNau41-42-3/Local-industrial-a-Andorra-Exterior.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/NauHesei/BulkResizePhotos.comNau41-42-2/zone-logistica-o-de-produccio-industrial.webp",
            // (ajouter les vraies images ici)
          ]}
          buttonLabel="Ver Mas"
          link="/liste-des-biens/listNausHesei"
        />

        <PropertyCardType2
          title="Serveis"
          description="Banys, il·luminació completa, portes per tràilers, instal·lació elèctrica."
          images={[
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/NauHesei/BulkResizePhotos.comN5n58/interior-industrial-Naus5-58-Andorra.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/NauHesei/BulkResizePhotos.comN5n58/Exterior-Naus-N5-58.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/NauHesei/BulkResizePhotos.comNau41-42-2/local-commercial.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/NauHesei/BulkResizePhotos.comNau41-42-2/sala-polivalente-modular.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/NauHesei/BulkResizePhotos.comNau41-42-3/Local-industrial-a-Andorra-Exterior.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/NauHesei/BulkResizePhotos.comNau41-42-2/zone-logistica-o-de-produccio-industrial.webp",
            // (ajouter les vraies images ici)
          ]}
          buttonLabel="Ver Mas"
          link="/"
          reverse={true}
          onButtonClick={openServeisModal}
        />

        <PropertyCardType2
          title="Entorn"
          description="A 5,5 km de la frontera, amb fàcil accés a Espanya i a la carretera principal."
          images={[
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/NauHesei/BulkResizePhotos.comN5n58/interior-industrial-Naus5-58-Andorra.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/NauHesei/BulkResizePhotos.comN5n58/Exterior-Naus-N5-58.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/NauHesei/BulkResizePhotos.comNau41-42-2/local-commercial.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/NauHesei/BulkResizePhotos.comNau41-42-2/sala-polivalente-modular.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/NauHesei/BulkResizePhotos.comNau41-42-3/Local-industrial-a-Andorra-Exterior.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/NauHesei/BulkResizePhotos.comNau41-42-2/zone-logistica-o-de-produccio-industrial.webp",
            // (ajouter les vraies images ici)
          ]}
          buttonLabel="Ver Mas"
          link="/"
          onButtonClick={openEntornModal}
        />

        <hr className="separator" />

        <div className="zone-info-block">
          <div className="zone-distances">
            <p>Frontera espanyola: 5,9km</p>
            <p>Frontera francesa: 25,7km</p>
            <p>Andorra la Vella: 5,3km</p>
          </div>
          <iframe
            className="map-iframe"
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d367.8458218430416!2d1.484682!3d42.47525300000001!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDLCsDI4JzMxLjAiTiAxwrAyOScwNC4yIkU!5e0!3m2!1sfr!2sus!4v1746448279813!5m2!1sfr!2sus"
            width="100%"
            height="300"
            style={{ border: "0", marginTop: "20px" }}
            allowFullScreen
            loading="lazy"
          />
        </div>

        {isGalleryOpen && (
          <ImageGalleryModal
            title="Galeria fotogràfica - Naus Hesei"
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

export default NausHesei;
