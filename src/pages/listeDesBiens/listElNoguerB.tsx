import React, { useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import PropertyCardType3 from "../../components/PropertyCardType3";
import CustomModal from "../../components/CustomModal"; // Adjust the path if necessary
import HeroType2 from "../../components/HeroType2";

const ListElNoguerB: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [modalPdfUrl, setModalPdfUrl] = useState("");

  const properties = [
    {
      title: "Baixos 1a",
      surface: "86 m²",
      bedrooms: 2,
      bathrooms: 1,
      amenities: ["parking"],
      status: "Llista d'espera",
      image: "/images/baixos1a.jpg",
      galleryImages: [
        "/images/baixos1a.jpg",
        "https://via.placeholder.com/600x400",
      ],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/63/dossier-el-noguer-baixos-1.pdf",
    },
    {
      title: "Baixos 2a",
      surface: "86 m²",
      bedrooms: 1,
      bathrooms: 1,
      amenities: ["parking"],
      status: "Properament",
      image: "/images/baixos2a.jpg",
      galleryImages: [
        "/images/baixos2a.jpg",
        "https://via.placeholder.com/600x400",
      ],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/64/dossier-el-noguer-baixos-2.pdf",
    },
    {
      title: "1r 1a",
      surface: "88 m²",
      bedrooms: 2,
      bathrooms: 1,
      amenities: ["parking"],
      status: "Llista d'espera",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/43/dossier-el-noguer-1-1.pdf",
    },
    {
      title: "1r 2a",
      surface: "87 m²",
      bedrooms: 3,
      bathrooms: 2,
      amenities: ["parking"],
      status: "Llista d'espera",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/44/dossier-el-noguer-1-2.pdf",
    },
    {
      title: "1r 3a",
      surface: "87 m²",
      bedrooms: 2,
      bathrooms: 2,
      amenities: ["parking"],
      status: "Llista d'espera",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/45/dossier-el-noguer-1-3.pdf",
    },
    {
      title: "1r 4a",
      surface: "88 m²",
      bedrooms: 2,
      bathrooms: 2,
      amenities: ["parking"],
      status: "Llista d'espera",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/46/dossier-el-noguer-1-4.pdf",
    },
    {
      title: "2n 1a",
      surface: "88 m²",
      bedrooms: 2,
      bathrooms: 2,
      amenities: ["parking"],
      status: "Llista d'espera",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/47/dossier-el-noguer-2-1.pdf",
    },
    {
      title: "2n 2a",
      surface: "87 m²",
      bedrooms: 2,
      bathrooms: 3,
      amenities: ["parking"],
      status: "Llista d'espera",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/48/dossier-el-noguer-2-2.pdf",
    },
    {
      title: "2n 3a",
      surface: "87 m²",
      bedrooms: 2,
      bathrooms: 2,
      amenities: ["parking"],
      status: "Llista d'espera",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/49/dossier-el-noguer-2-3.pdf",
    },
    {
      title: "2n 4a",
      surface: "88 m²",
      bedrooms: 2,
      bathrooms: 3,
      amenities: ["parking"],
      status: "Llista d'espera",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/50/dossier-el-noguer-2-4.pdf",
    },
    {
      title: "3r 2a",
      surface: "87 m²",
      bedrooms: 2,
      bathrooms: 2,
      amenities: ["parking"],
      status: "Llista d'espera",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/52/dossier-el-noguer-3-2.pdf",
    },
    {
      title: "3r 3a",
      surface: "87 m²",
      bedrooms: 2,
      bathrooms: 2,
      amenities: ["parking"],
      status: "Llista d'espera",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/53/dossier-el-noguer-3-3.pdf",
    },
    {
      title: "3r 4a",
      surface: "88 m²",
      bedrooms: 2,
      bathrooms: 3,
      amenities: ["parking"],
      status: "Llista d'espera",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/54/dossier-el-noguer-3-4.pdf",
    },
    {
      title: "4t 1a",
      surface: "88 m²",
      bedrooms: 2,
      bathrooms: 3,
      amenities: ["parking"],
      status: "Llista d'espera",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/57/dossier-el-noguer-4-1.pdf",
    },
    {
      title: "4t 2a",
      surface: "87 m²",
      bedrooms: 2,
      bathrooms: 3,
      amenities: ["parking"],
      status: "Llista d'espera",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/58/dossier-el-noguer-4-2.pdf",
    },
    {
      title: "4t 3a",
      surface: "87 m²",
      bedrooms: 2,
      bathrooms: 2,
      amenities: ["parking"],
      status: "Llista d'espera",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/59/dossier-el-noguer-4-3.pdf",
    },
    {
      title: "4t 4a",
      surface: "88 m²",
      bedrooms: 2,
      bathrooms: 3,
      amenities: ["parking"],
      status: "Llista d'espera",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/60/dossier-el-noguer-4-4.pdf",
    },
    {
      title: "5è 3a",
      surface: "88 m²",
      bedrooms: 2,
      bathrooms: 3,
      amenities: ["parking"],
      status: "Llista d'espera",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/61/dossier-el-noguer-5-3.pdf",
    },
    {
      title: "5è 4a",
      surface: "87 m²",
      bedrooms: 2,
      bathrooms: 3,
      amenities: ["parking"],
      status: "Llista d'espera",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/62/dossier-el-noguer-5-4.pdf",
    },
    {
      title: "Parking",
      surface: "",
      bedrooms: 0,
      bathrooms: 0,
      amenities: [],
      status: "Properament",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl: "#",
    },
    {
      title: "Local comercial 1",
      surface: "390 m²",
      bedrooms: 0,
      bathrooms: 1,
      amenities: [],
      status: "Properament",
      image: "/images/placeholder.jpg",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/66/planta-baixos-noguer-b.pdf",
    },
    {
      title: "Local comercial 2",
      surface: "355 m²",
      bedrooms: 0,
      bathrooms: 1,
      amenities: [],
      status: "Properament",
      image: "/images/placeholder.jpg",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/65/planta-tipus-noguer-b.pdf",
    },
  ];

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
      title="Llista de béns - El Noguer B"
      description="Explora els béns disponibles al projecte El Noguer B, amb habitatges moderns i funcionals."
    >
      <HeroType2
        backgroundImage="https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477630/samples/animals/reindeer.jpg"
        title="El Noguer B"
        subtitle="Descobreix totes les vivendes disponibles"
        alt="Edifici El Noguer B a Sant Julià de Lòria, "
      />
      <h1 className="page-title">Béns disponibles – El Noguer B</h1>
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
      {isModalOpen && (
        <CustomModal
          title={modalTitle}
          images={modalImages}
          pdfUrl={modalPdfUrl}
          onClose={handleCloseModal}
          onActionClick={() => console.log("Voir plus")}
        />
      )}
    </DefaultLayout>
  );
};

export default ListElNoguerB;
