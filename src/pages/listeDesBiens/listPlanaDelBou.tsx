import React, { useState } from "react";
import { Helmet } from "react-helmet";
import DefaultLayout from "../../layouts/DefaultLayout";
import PropertyCardType3 from "../../components/PropertyCardType3";
import CustomModal from "../../components/CustomModal";
import HeroType2 from "../../components/HeroType2";

const ListPlanaDelBou: React.FC = () => {
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
      title="Llista de propietats - Plana del Bou"
      description="Descobreix les propietats disponibles al projecte Plana del Bou, un espai residencial integrat a la natura."
    >
      <HeroType2
        backgroundImage="https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477630/samples/animals/reindeer.jpg"
        title="Plana del Bou"
        subtitle="Descobreix totes les vivendes disponibles"
        alt="Edifici Plana del Bou a Sant Julià de Lòria, Andorra"
      />
      <Helmet>
        <title>Llista de propietats - Plana del Bou</title>
        <meta
          name="description"
          content="Descobreix les propietats disponibles al projecte Plana del Bou, un espai residencial integrat a la natura."
        />
      </Helmet>

      <h1 className="page-title">Propietats disponibles – Plana del Bou</h1>
      {/* Llista de propietats */}
      <h2 style={{ textAlign: "center" }}>Resort</h2>
      <PropertyCardType3
        title="Aixartell"
        image="https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg"
        caracteristics={["95m²", "2 Habitació", "2 Bany"]}
        amenities={[
          "Aparcament segons disponibilitat",
          "Traster segons disponibilitat",
          " Aigua termoelèctrica",
          " Llar de foc",
          "Jardí comunitari",
          "Pati privat",
        ]}
        status="Llista d'espera"
        onViewGallery={() =>
          handleOpenModal(
            "Aixartell",
            [
              "https://via.placeholder.com/600x400?text=Image1",
              "https://via.placeholder.com/600x400?text=Image2",
            ],
            "https://quetx.net/imatges/projecteVivenda/105/dossier-aixartell.pdf"
          )
        }
        reverse={false}
      />
      <PropertyCardType3
        title="Argüens"
        image="https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg"
        caracteristics={["95m²", "2 Habitació", "2 Bany"]}
        amenities={[
          "Aparcament segons disponibilitat",
          "Traster segons disponibilitat",
          " Aigua termoelèctrica",
          " Llar de foc",
          "Jardí comunitari",
          "Pati privat",
          "Chauffage individuel",
        ]}
        status="Llista d'espera"
        onViewGallery={() =>
          handleOpenModal(
            "Argüens",
            [
              "https://via.placeholder.com/600x400?text=Image1",
              "https://via.placeholder.com/600x400?text=Image2",
            ],
            "https://quetx.net/imatges/projecteVivenda/101/dossier-arguens.pdf"
          )
        }
        reverse={true}
      />
      <PropertyCardType3
        title="Arpiot"
        image="https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg"
        caracteristics={["95m²", "2 Habitació", "2 Bany"]}
        amenities={[
          "Aparcament segons disponibilitat",
          "Traster segons disponibilitat",
          " Aigua termoelèctrica",
          " Llar de foc",
          "Jardí comunitari",
          "Pati privat",
          "Chauffage individuel",
        ]}
        status="Llista d'espera"
        onViewGallery={() =>
          handleOpenModal(
            "Arpiot",
            [
              "https://via.placeholder.com/600x400?text=Image1",
              "https://via.placeholder.com/600x400?text=Image2",
            ],
            "https://quetx.net/imatges/projecteVivenda/103/dossier-arpiot.pdf"
          )
        }
        reverse={false}
      />
      <PropertyCardType3
        title="Cloc"
        image="https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg"
        caracteristics={["80m²", "2 Habitació", "2 Bany"]}
        amenities={[
          "Aparcament segons disponibilitat",
          "Traster segons disponibilitat",
          " Aigua termoelèctrica",
          " Llar de foc",
          "Jardí comunitari",
          "Pati privat",
          "Chauffage individuel",
        ]}
        status="Llista d'espera"
        onViewGallery={() =>
          handleOpenModal(
            "Cloc",
            [
              "https://via.placeholder.com/600x400?text=Image1",
              "https://via.placeholder.com/600x400?text=Image2",
            ],
            "https://quetx.net/imatges/projecteVivenda/6/dossier-cloc.pdf"
          )
        }
        reverse={true}
      />
      <PropertyCardType3
        title="Esclop"
        image="https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg"
        caracteristics={["95m²", "2 Habitació", "2 Bany"]}
        amenities={["Meublé", "Cheminée", "Chauffage individuel"]}
        status="Llista d'espera"
        onViewGallery={() =>
          handleOpenModal(
            "Esclop",
            [
              "https://via.placeholder.com/600x400?text=Image1",
              "https://via.placeholder.com/600x400?text=Image2",
            ],
            "https://quetx.net/imatges/projecteVivenda/102/dossier-esclo.pdf"
          )
        }
        reverse={false}
      />
      <PropertyCardType3
        title="Estolador"
        image="https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg"
        caracteristics={["80m²", "2 Habitació", "2 Bany"]}
        amenities={[
          "Aparcament segons disponibilitat",
          "Traster segons disponibilitat",
          " Aigua termoelèctrica",
          " Llar de foc",
          "Jardí comunitari",
          "Pati privat",
          "Chauffage individuel",
        ]}
        status="Llista d'espera"
        onViewGallery={() =>
          handleOpenModal(
            "Estolador",
            [
              "https://via.placeholder.com/600x400?text=Image1",
              "https://via.placeholder.com/600x400?text=Image2",
            ],
            "https://quetx.net/imatges/projecteVivenda/104/dossier-estolador.pdf"
          )
        }
        reverse={true}
      />
      <PropertyCardType3
        title="Taupa"
        image="https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg"
        caracteristics={["95m²", "2 Habitació", "2 Bany"]}
        amenities={["Meublé", "Cheminée", "Chauffage individuel"]}
        status="Llista d'espera"
        onViewGallery={() =>
          handleOpenModal(
            "Taupa",
            [
              "https://via.placeholder.com/600x400?text=Image1",
              "https://via.placeholder.com/600x400?text=Image2",
            ],
            "https://quetx.net/imatges/projecteVivenda/102/dossier-esclo.pdf"
          )
        }
        reverse={false}
      />
      <PropertyCardType3
        title="Xut"
        image="https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg"
        caracteristics={["80m²", "2 Habitació", "2 Bany"]}
        amenities={[
          "Aparcament segons disponibilitat",
          "Traster segons disponibilitat",
          " Aigua termoelèctrica",
          " Llar de foc",
          "Jardí comunitari",
          "Pati privat",
          "Chauffage individuel",
        ]}
        status="Llista d'espera"
        onViewGallery={() =>
          handleOpenModal(
            "Xut",
            [
              "https://via.placeholder.com/600x400?text=Image1",
              "https://via.placeholder.com/600x400?text=Image2",
            ],
            "https://quetx.net/imatges/projecteVivenda/107/dossier-xut.pdf"
          )
        }
        reverse={true}
      />
      <h2 style={{ textAlign: "center" }}>Beç</h2>
      <PropertyCardType3
        title="Moixo"
        image="https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg"
        caracteristics={["36m²", "1 Habitació", "1 Bany"]}
        amenities={[
          "Aparcament segons disponibilitat",
          "Traster segons disponibilitat",
          " Aigua termoelèctrica",
          " Llar de foc",
          "Jardí comunitari",
          "Pati privat",
          "Chauffage individuel",
        ]}
        status="Llista d'espera"
        onViewGallery={() =>
          handleOpenModal(
            "Moixo",
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
        title="Orandeta"
        image="https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg"
        caracteristics={["36m²", "1 Habitació", "1 Bany"]}
        amenities={[
          "Aparcament segons disponibilitat",
          "Traster segons disponibilitat",
          " Aigua termoelèctrica",
          " Llar de foc",
          "Jardí comunitari",
          "Pati privat",
          "Chauffage individuel",
        ]}
        status="Llista d'espera"
        onViewGallery={() =>
          handleOpenModal(
            "Orandeta",
            [
              "https://via.placeholder.com/600x400?text=Image1",
              "https://via.placeholder.com/600x400?text=Image2",
            ],
            "https://example.com/brochure-arguens.pdf"
          )
        }
        reverse={true}
      />

      <h2 style={{ textAlign: "center" }}>Borda de la Plana</h2>

      <PropertyCardType3
        title="La Cort"
        image="https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg"
        caracteristics={["88m²", "1 Habitació", "1 Bany"]}
        amenities={[
          "Aparcament segons disponibilitat",
          "Traster segons disponibilitat",
          " Aigua termoelèctrica",
          " Llar de foc",
          "Jardí comunitari",
          "Pati privat",
          "Chauffage individuel",
        ]}
        status="Llista d'espera"
        onViewGallery={() =>
          handleOpenModal(
            "La Cort",
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
        title="El Mallador"
        image="https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg"
        caracteristics={["102m²", "2 Habitació", "2 Bany"]}
        amenities={[
          "Aparcament segons disponibilitat",
          "Traster segons disponibilitat",
          " Aigua termoelèctrica",
          " Llar de foc",
          "Jardí comunitari",
          "Pati privat",
          "Chauffage individuel",
        ]}
        status="Llista d'espera"
        onViewGallery={() =>
          handleOpenModal(
            "El Mallador",
            [
              "https://via.placeholder.com/600x400?text=Image1",
              "https://via.placeholder.com/600x400?text=Image2",
            ],
            "https://quetx.net/imatges/projecteVivenda/11/dossier-mallador.pdf"
          )
        }
        reverse={true}
      />
      <PropertyCardType3
        title="El Paller"
        image="https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg"
        caracteristics={["135m²", "2 Habitació", "3 Bany"]}
        amenities={[
          "Aparcament segons disponibilitat",
          "Traster segons disponibilitat",
          " Aigua termoelèctrica",
          " Llar de foc",
          "Jardí comunitari",
          "Pati privat",
          "Chauffage individuel",
        ]}
        status="Llista d'espera"
        onViewGallery={() =>
          handleOpenModal(
            "El Paller",
            [
              "https://via.placeholder.com/600x400?text=Image1",
              "https://via.placeholder.com/600x400?text=Image2",
            ],
            "https://quetx.net/imatges/projecteVivenda/10/dossier-paller.pdf"
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

export default ListPlanaDelBou;
