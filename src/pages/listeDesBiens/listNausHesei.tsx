import React, { useState } from "react";
import { Helmet } from "react-helmet";
import DefaultLayout from "../../layouts/DefaultLayout";
import PropertyCardType3 from "../../components/PropertyCardType3";
import CustomModal from "../../components/CustomModal";
import HeroType2 from "../../components/HeroType2";

const ListNausHesei: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [modalPdfUrl, setModalPdfUrl] = useState("");

  const handleOpenModal = (title: string, images: string[], pdfUrl: string) => {
    setModalTitle(title);
    setModalImages(images);
    setModalPdfUrl(pdfUrl);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <DefaultLayout
      title="Liste des biens - Naus Hesei"
      description="Découvrez les biens industriels disponibles dans le projet Naus Hesei, situés à l'entrée d'Andorre."
    >
      <HeroType2
        backgroundImage="https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477630/samples/animals/reindeer.jpg"
        title="Naus Hesei"
        subtitle="Descobreix totes les vivendes disponibles"
        alt="Edifici Naus Hesei a Andorra"
      />
      <Helmet>
        <title>Liste des biens - Naus Hesei</title>
        <meta
          name="description"
          content="Découvrez les biens industriels disponibles dans le projet Naus Hesei, situés à l'entrée d'Andorre."
        />
      </Helmet>

      <h1 className="page-title">Béns disponibles – Naus Hesei</h1>
      {/* Liste de biens */}

      <PropertyCardType3
        title="Naus Hesei"
        image="https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg"
        caracteristics={[
          "Naus de 200-400m²",
          "alçades de 4 a 7m",
          "portes per tràilers",
        ]}
        amenities={["Banys", "llum completa", "a 5,5 km de la frontera"]}
        status="Disponible"
        onViewGallery={() =>
          handleOpenModal(
            "Argüens",
            [
              "https://via.placeholder.com/600x400?text=Image1",
              "https://via.placeholder.com/600x400?text=Image2",
            ],
            "https://example.com/brochure-arguens.pdf"
          )
        }
        reverse={true}
      />
      <PropertyCardType3
        title="Naus Hesei 1"
        image="https://via.placeholder.com/600x400?text=Naus+Hesei+1"
        caracteristics={["95 m²", "2 habitacions", "2 banys"]}
        amenities={["terrassa", "garatge"]}
        status="Llista d'espera"
        onViewGallery={() =>
          handleOpenModal(
            "Argüens",
            [
              "https://via.placeholder.com/600x400?text=Image1",
              "https://via.placeholder.com/600x400?text=Image2",
            ],
            "https://example.com/brochure-arguens.pdf"
          )
        }
        reverse={false}
      />
      {/* Modale */}
      {isModalOpen && (
        <CustomModal
          title={modalTitle}
          images={modalImages}
          pdfUrl={modalPdfUrl}
          onActionClick={() => console.log("Action Ver más déclenchée !")}
          onClose={handleCloseModal}
        />
      )}
    </DefaultLayout>
  );
};

export default ListNausHesei;
