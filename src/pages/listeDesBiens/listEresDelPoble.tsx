import React, { useState } from "react";
import { Helmet } from "react-helmet";
import DefaultLayout from "../../layouts/DefaultLayout";
import PropertyCardType3 from "../../components/PropertyCardType3";
import CustomModal from "../../components/CustomModal";

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
      <Helmet>
        <title>Liste des biens - Eres del Poble</title>
        <meta name="description" content="Découvrez les maisons rurales disponibles dans le projet Eres del Poble, au cœur du village de Fontaneda." />
      </Helmet>

      <h1 className="page-title">Biens disponibles – Eres del Poble</h1>
      {/* Liste de biens */}
      <h2>Resort</h2>
      <PropertyCardType3
        title="Argüens"
        image="https://via.placeholder.com/600"
        caracteristics={["80m²", "2 Chambres", "2 Banos"]}
        amenities={["Meublé", "Cheminée", "Chauffage individuel"]}
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
      <PropertyCardType3
        title="Argüens"
        image="https://via.placeholder.com/600"
        caracteristics={["80m²", "2 Chambres", "2 Banos"]}
        amenities={["Meublé", "Cheminée", "Chauffage individuel"]}
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
        title="Argüens"
        image="https://via.placeholder.com/600"
        caracteristics={["80m²", "2 Chambres", "2 Banos"]}
        amenities={["Meublé", "Cheminée", "Chauffage individuel"]}
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
      <PropertyCardType3
        title="Argüens"
        image="https://via.placeholder.com/600"
        caracteristics={["80m²", "2 Chambres", "2 Banos"]}
        amenities={["Meublé", "Cheminée", "Chauffage individuel"]}
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
      <h2>Beç</h2>
      <PropertyCardType3
        title="Argüens"
        image="https://via.placeholder.com/600"
        caracteristics={["80m²", "2 Chambres", "2 Banos"]}
        amenities={["Meublé", "Cheminée", "Chauffage individuel"]}
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
      <PropertyCardType3
        title="Argüens"
        image="https://via.placeholder.com/600"
        caracteristics={["80m²", "2 Chambres", "2 Banos"]}
        amenities={["Meublé", "Cheminée", "Chauffage individuel"]}
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
      <h2>Autre</h2>
      <PropertyCardType3
        title="Argüens"
        image="https://via.placeholder.com/600"
        caracteristics={["80m²", "2 Chambres", "2 Banos"]}
        amenities={["Meublé", "Cheminée", "Chauffage individuel"]}
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
      <PropertyCardType3
        title="Argüens"
        image="https://via.placeholder.com/600"
        caracteristics={["80m²", "2 Chambres", "2 Banos"]}
        amenities={["Meublé", "Cheminée", "Chauffage individuel"]}
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
        title="Argüens"
        image="https://via.placeholder.com/600"
        caracteristics={["80m²", "2 Chambres", "2 Banos"]}
        amenities={["Meublé", "Cheminée", "Chauffage individuel"]}
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

export default ListEresDelPoble;
