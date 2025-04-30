import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import PropertyCard from "../../components/PropertyCard";
import "./typePages.css";

const PoligonIIndustria = () => {
  return (
    <DefaultLayout title="Polígon I Industria" description="Explore the industrial zones and properties available.">
      <h1 className="type-page-title">POLÍGON I INDUSTRIA</h1>
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
        zoneName="Naus Hesei"
        location="Zone du bien 1"
        description="Naus industrials a l’entrada d’Andorra."
        link="/Zones/NausHesei"
      />

      <hr className="separator" />
    </DefaultLayout>
  );
};

export default PoligonIIndustria;
