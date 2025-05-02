import React, { useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import PropertyCardType3 from "../../components/PropertyCardType3";
import CustomModal from "../../components/CustomModal";
import { Helmet } from "react-helmet";

const ListXiuletHauss: React.FC = () => {
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
      title="Liste des biens - Xiulet Hauss"
      description="Découvrez les biens disponibles dans le projet Xiulet Hauss, un habitat unique au cœur de Sant Julià de Lòria."
    >
      <Helmet>
        <title>Liste des biens - Xiulet Hauss</title>
        <meta
          name="description"
          content="Découvrez les biens disponibles dans le projet Xiulet Hauss, un habitat unique au cœur de Sant Julià de Lòria."
        />
      </Helmet>
      <h1 className="page-title">Biens disponibles – Xiulet Hauss</h1>
      {/* Liste de biens */}
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
        title="Beç"
        image="https://via.placeholder.com/600"
        caracteristics={["100m²", "3 Chambres", "2 Banos"]}
        amenities={["Terrasse", "Garage", "Chauffage central"]}
        onViewGallery={() =>
          handleOpenModal(
            "Beç",
            [
              "https://via.placeholder.com/600x400?text=Image3",
              "https://via.placeholder.com/600x400?text=Image4",
            ],
            "https://example.com/brochure-bec.pdf"
          )
        }
        reverse={true}
      />
      <PropertyCardType3
        title="Autre Bien"
        image="https://via.placeholder.com/600"
        caracteristics={["120m²", "4 Chambres", "3 Banos"]}
        amenities={["Piscine", "Jardin", "Vue panoramique"]}
        onViewGallery={() =>
          handleOpenModal(
            "Autre Bien",
            [
              "https://via.placeholder.com/600x400?text=Image5",
              "https://via.placeholder.com/600x400?text=Image6",
            ],
            "https://example.com/brochure-autre.pdf"
          )
        }
        reverse={false}
      />
      <PropertyCardType3
        title="Xiulet Hauss"
        image="https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg"
        caracteristics={[
          "Pisos amb història",
          "ubicació al barri antic",
          "edificat sobre l'hort del frare",
        ]}
        amenities={[
          "Entorn tranquil",
          "arquitectura típica",
          "vistes del poble",
        ]}
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

export default ListXiuletHauss;
