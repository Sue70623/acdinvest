import React, { useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import PropertyCardType3 from "../../components/PropertyCardType3";
import CustomModal from "../../components/CustomModal";
import { Helmet } from "react-helmet";

const ListEdelweiss: React.FC = () => {
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
      title="Liste des biens - Edelweiss"
      description="Découvrez les biens disponibles dans le projet Edelweiss, situés dans un cadre exceptionnel."
    >
      <Helmet>
        <title>Liste des biens - Edelweiss</title>
        <meta
          name="description"
          content="Découvrez les biens disponibles dans le projet Edelweiss, situés dans un cadre exceptionnel."
        />
      </Helmet>

      <h1 className="page-title">Biens disponibles – Edelweiss</h1>
      {/* Liste de biens */}

      <PropertyCardType3
        title="Edelweiss"
        image="https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg"
        caracteristics={[
          "4 plantes + 1 subterrània",
          "habitatges de 2 habitacions",
          "àtic dúplex",
        ]}
        amenities={["Vistes muntanya", "grans finestres", "acabats moderns"]}
      />

      <PropertyCardType3
        title="Argüens"
        image="https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg"
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
        amenities={[]}
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

export default ListEdelweiss;
