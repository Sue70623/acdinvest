import React, { useState } from "react";
import { Helmet } from "react-helmet";
import DefaultLayout from "../../layouts/DefaultLayout";
import PropertyCardType3 from "../../components/PropertyCardType3";
import CustomModal from "../../components/CustomModal";
import HeroType2 from "../../components/HeroType2";

const ListEresDelPoble: React.FC = () => {
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
      title="Liste des biens - Eres del Poble"
      description="Découvrez les maisons rurales disponibles dans le projet Eres del Poble, au cœur du village de Fontaneda."
    >
      <HeroType2
        backgroundImage="https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477630/samples/animals/reindeer.jpg"
        title="Eres del Poble"
        subtitle="Descobreix totes les vivendes disponibles"
        alt="Edifici Eres del Poble a Fontaneda, Andorra"
      />
      <Helmet>
        <title>Liste des biens - Eres del Poble</title>
        <meta
          name="description"
          content="Descobreix les cases rurals disponibles al projecte Eres del Poble, al cor del poble de Fontaneda."
        />
      </Helmet>

      <h1 className="page-title">Béns disponibles – Eres del Poble</h1>
      {/* Liste de biens */}

      <PropertyCardType3
        title="Era de Cal Bou"
        image="https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg"
        caracteristics={[
          "Arquitectura tradicional",
          "cases de pedra",
          "teulada de pissarra",
        ]}
        amenities={["Entorn natural", "restaurades amb comoditats modernes"]}
        status="Disponible"
        onViewGallery={() =>
          handleOpenModal(
            "Era de Cal Bou",
            [
              "https://via.placeholder.com/600x400?text=Image1",
              "https://via.placeholder.com/600x400?text=Image2",
            ],
            "https://example.com/brochure-arguens.pdf"
          )
        }
      />
      <PropertyCardType3
        title="Era de l'Ermita"
        image="https://via.placeholder.com/600"
        caracteristics={["120 m²", "4 habitacions", "3 banys"]}
        amenities={["jardí", "garatge"]}
        status="Llista d'espera"
        onViewGallery={() =>
          handleOpenModal(
            "Era de l'Ermita",
            [
              "https://via.placeholder.com/600x400?text=Image1",
              "https://via.placeholder.com/600x400?text=Image2",
            ],
            "https://example.com/brochure-arguens.pdf"
          )
        }
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

export default ListEresDelPoble;
