import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import PropertyCard from "../../components/PropertyCard";
import "./typePages.css";

const EspaisDeNegoci = () => {
  return (
    <DefaultLayout title="Espais De Negoci" description="Description of Espais De Negoci">
      <h1 className="type-page-title">ESPAIS DE NEGOCI</h1>
      <PropertyCard
        mainImage="https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477641/samples/look-up.jpg"
        mainImageAlt="Image principale de Plana Del Bou"
        thumbnails={[
          "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg",
          "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg",
        ]}
        thumbnailsAlt={[
          "Miniature 1 de Plana Del Bou",
          "Miniature 2 de Plana Del Bou",
        ]}
        zoneName="Plana Del Bou"
        location="Zone du bien 1"
        description="Description temporaire 1"
        link="*"
      />
    </DefaultLayout>
  );
};

export default EspaisDeNegoci;
