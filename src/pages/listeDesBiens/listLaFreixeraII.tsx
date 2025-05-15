import React, { useState } from "react";
import { Helmet } from "react-helmet";
import DefaultLayout from "../../layouts/DefaultLayout";
import PropertyCardType3 from "../../components/PropertyCardType3";
import CustomModal from "../../components/CustomModal";
import HeroType2 from "../../components/HeroType2";

const ListLaFreixeraII: React.FC = () => {
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
  const properties = [
    {
      title: "Primera planta-1º porta – 71m² – 1",
      surface: "71 m²",
      bedrooms: 1,
      bathrooms: 2,
      amenities: [
        "Aparcament segons disponibilitat",
        "Traster segons disponibilitat",
        "Ascensor a la vivenda",
        "Aigua termoelèctrica",
        "Radiadors amb caldera comunitaria de dièsel",
      ],
      status: "Properament",
      image: "/images/placeholder.jpg",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/18/la-freixera-1-1.pdf",
    },
    {
      title: " Primera planta-2º porta – 71m² – 2",
      surface: "71 m²",
      bedrooms: 1,
      bathrooms: 2,
      amenities: [
        "Aparcament segons disponibilitat",
        "Traster segons disponibilitat",
        "Ascensor a la vivenda",
        "Aigua termoelèctrica",
        "Radiadors amb caldera comunitaria de dièsel",
      ],
      status: "Llista d'espera",
      image: "/images/placeholder.jpg",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/19/la-freixera-2-2.pdf",
    },
    {
      title: "Primera planta-3º porta – 64m² – 3",
      surface: "64 m²",
      bedrooms: 1,
      bathrooms: 2,
      amenities: [
        "Aparcament segons disponibilitat",
        "Traster segons disponibilitat",
        "Ascensor a la vivenda",
        "Aigua termoelèctrica",
        "Radiadors amb caldera comunitaria de dièsel",
      ],
      status: "Properament",
      image: "/images/placeholder.jpg",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/20/la-freixera-1-3.pdf",
    },
    {
      title: "Segona planta - 1º porta – 71m² – 4",
      surface: "71 m²",
      bedrooms: 1,
      bathrooms: 2,
      amenities: [
        "Aparcament segons disponibilitat",
        "Traster segons disponibilitat",
        "Ascensor a la vivenda",
        "Aigua termoelèctrica",
        "Radiadors amb caldera comunitaria de dièsel",
      ],
      status: "Llista d'espera",
      image: "/images/placeholder.jpg",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/15/la-freixera-2-1.pdf",
    },
    {
      title: "Segona planta - 2º porta – 71m² – 1",
      surface: "71 m²",
      bedrooms: 1,
      bathrooms: 2,
      amenities: [
        "Aparcament segons disponibilitat",
        "Traster segons disponibilitat",
        "Ascensor a la vivenda",
        "Aigua termoelèctrica",
        "Radiadors amb caldera comunitaria de dièsel",
      ],
      status: "Properament",
      image: "/images/placeholder.jpg",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/16/la-freixera-2-2.pdf",
    },
    {
      title: "Segona planta - 3º porta – 64m² – 2",
      surface: "64 m²",
      bedrooms: 1,
      bathrooms: 2,
      amenities: [
        "Aparcament segons disponibilitat",
        "Traster segons disponibilitat",
        "Ascensor a la vivenda",
        "Aigua termoelèctrica",
        "Radiadors amb caldera comunitaria de dièsel",
      ],
      status: "Properament",
      image: "/images/placeholder.jpg",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/17/la-freixera-2-3.pdf",
    },
    {
      title: "Tercera planta - 1º porta – 71m² – 3",
      surface: "71 m²",
      bedrooms: 1,
      bathrooms: 2,
      amenities: [
        "Aparcament segons disponibilitat",
        "Traster segons disponibilitat",
        "Ascensor a la vivenda",
        "Aigua termoelèctrica",
        "Radiadors amb caldera comunitaria de dièsel",
      ],
      status: "Properament",
      image: "/images/placeholder.jpg",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/21/la-freixera-3-1.pdf",
    },
    {
      title: "Tercera planta - 2º porta – 71m² – 4",
      surface: "71 m²",
      bedrooms: 1,
      bathrooms: 2,
      amenities: [
        "Aparcament segons disponibilitat",
        "Traster segons disponibilitat",
        "Ascensor a la vivenda",
        "Aigua termoelèctrica",
        "Radiadors amb caldera comunitaria de dièsel",
      ],
      status: "Properament",
      image: "/images/placeholder.jpg",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/22/la-freixera-3-2.pdf",
    },
    {
      title: "Tercera planta - 3º porta – 64m² – 5",
      surface: "64 m²",
      bedrooms: 1,
      bathrooms: 2,
      amenities: [
        "Aparcament segons disponibilitat",
        "Traster segons disponibilitat",
        "Ascensor a la vivenda",
        "Aigua termoelèctrica",
        "Radiadors amb caldera comunitaria de dièsel",
      ],
      status: "Properament",
      image: "/images/placeholder.jpg",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/23/la-freixera-3-3.pdf",
    },
    {
      title: "Quarta planta - 1º porta – 71m² – 6",
      surface: "71 m²",
      bedrooms: 1,
      bathrooms: 2,
      amenities: [
        "Aparcament segons disponibilitat",
        "Traster segons disponibilitat",
        "Ascensor a la vivenda",
        "Aigua termoelèctrica",
        "Radiadors amb caldera comunitaria de dièsel",
      ],
      status: "Properament",
      image: "/images/placeholder.jpg",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/24/la-freixera-4-1.pdf",
    },
    {
      title: "Quarta planta - 2º porta – 71m² – 7",
      surface: "71 m²",
      bedrooms: 1,
      bathrooms: 2,
      amenities: [
        "Aparcament segons disponibilitat",
        "Traster segons disponibilitat",
        "Ascensor a la vivenda",
        "Aigua termoelèctrica",
        "Radiadors amb caldera comunitaria de dièsel",
      ],
      status: "Properament",
      image: "/images/placeholder.jpg",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/25/la-freixera-4-2.pdf",
    },
    {
      title: "Quarta planta - 3º porta– 64m² – 8",
      surface: "64 m²",
      bedrooms: 1,
      bathrooms: 2,
      amenities: [
        "Aparcament segons disponibilitat",
        "Traster segons disponibilitat",
        "Ascensor a la vivenda",
        "Aigua termoelèctrica",
        "Radiadors amb caldera comunitaria de dièsel",
      ],
      status: "Properament",
      image: "/images/placeholder.jpg",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/26/la-freixera-4-3.pdf",
    },
    {
      title: "Cinquena planta - 1º porta – 71m² – 2 hab – 1",
      surface: "71 m²",
      bedrooms: 2,
      bathrooms: 2,
      amenities: [
        "Aparcament segons disponibilitat",
        "Traster segons disponibilitat",
        "Ascensor a la vivenda",
        "Aigua termoelèctrica",
        "Radiadors amb caldera comunitaria de dièsel",
      ],
      status: "Properament",
      image: "/images/placeholder.jpg",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/27/la-freixera-5-1.pdf",
    },
    {
      title: "Cinquena planta - 2º porta – 71m² – 2 hab – 2",
      surface: "71 m²",
      bedrooms: 2,
      bathrooms: 2,
      amenities: [
        "Aparcament segons disponibilitat",
        "Traster segons disponibilitat",
        "Ascensor a la vivenda",
        "Aigua termoelèctrica",
        "Radiadors amb caldera comunitaria de dièsel",
      ],
      status: "Properament",
      image: "/images/placeholder.jpg",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/28/la-freixera-5-2.pdf",
    },
    {
      title: "Cinquena planta - 3º porta– 64m² – 8",
      surface: "64 m²",
      bedrooms: 1,
      bathrooms: 2,
      amenities: [
        "Aparcament segons disponibilitat",
        "Traster segons disponibilitat",
        "Ascensor a la vivenda",
        "Aigua termoelèctrica",
        "Radiadors amb caldera comunitaria de dièsel",
      ],
      status: "Properament",
      image: "/images/placeholder.jpg",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/29/la-freixera-5-3.pdf",
    },
    {
      title: "Planta baixa àtic - 1º porta – 149m² – 8",
      surface: " Planta baixa de 105 m²,Altell de 44 m²",
      bedrooms: 3,
      bathrooms: 2,
      amenities: [
        "Aparcament segons disponibilitat",
        "Traster segons disponibilitat",
        "Ascensor a la vivenda",
        "Aigua termoelèctrica",
        "Radiadors amb caldera comunitaria de dièsel",
      ],
      status: "Properament",
      image: "/images/placeholder.jpg",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/30/la-freixera-atic-1.pdf",
    },
    {
      title: "Planta baixa àtic - 2º porta – 150,60m² – 8",
      surface: " Planta baixa de 105 m²,Altell de 45,60 m²",
      bedrooms: 4,
      bathrooms: 2,
      amenities: [
        "Aparcament segons disponibilitat",
        "Traster segons disponibilitat",
        "Ascensor a la vivenda",
        "Aigua termoelèctrica",
        "Radiadors amb caldera comunitaria de dièsel",
      ],
      status: "Properament",
      image: "/images/placeholder.jpg",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/31/la-freixera-atic-2.pdf",
    },
  ];
  return (
    <DefaultLayout
      title="Liste des biens - La Freixera II"
      description="Découvrez les biens disponibles dans le projet La Freixera II, un projet moderne et durable."
    >
      <HeroType2
        backgroundImage="https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477630/samples/animals/reindeer.jpg"
        title="La Freixera II"
        subtitle="Descobreix totes les vivendes disponibles"
        alt="Edifici La Freixera II a Sant Julià de Lòria"
      />
      <Helmet>
        <title>Liste des biens - La Freixera II</title>
        <meta
          name="description"
          content="Descobreix els béns disponibles al projecte La Freixera II, un projecte modern i sostenible."
        />
      </Helmet>

      <h1 className="page-title">Béns disponibles – La Freixera II</h1>
      {/* Liste de biens */}

      {properties.map((property, index) => (
        <PropertyCardType3
          key={index}
          title={property.title}
          image={property.image || property.galleryImages[0]}
          caracteristics={[
            property.surface,
            `${property.bedrooms} habitacions`,
            `${property.bathrooms} banys`,
          ]}
          amenities={property.amenities}
          status={property.status}
          reverse={index % 2 === 1}
          onViewGallery={() =>
            handleOpenModal(
              property.title,
              property.galleryImages,
              property.brochureUrl
            )
          }
        />
      ))}
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

export default ListLaFreixeraII;
