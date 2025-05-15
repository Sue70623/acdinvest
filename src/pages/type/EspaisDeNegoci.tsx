import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import PropertyCard from "../../components/PropertyCard";
import "./typePages.css";

const EspaisDeNegoci = () => {
  return (
    <DefaultLayout
      title="Espais De Negoci"
      description="Descobreix espais de negoci adaptats a les teves necessitats professionals."
    >
      <h1 className="type-page-title">ESPAIS DE NEGOCI</h1>
      <p className="type-page-description">
        Explora els nostres espais de negoci, pensats per impulsar el teu èxit
        empresarial en ubicacions estratègiques.
      </p>
      <PropertyCard
        mainImage="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament400-400.webp"
        mainImageAlt="Image principale de Plana Del Bou"
        thumbnails={[
          "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament.webp",
          "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament.webp",
          "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament.webp",
          "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament.webp",
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

      <hr className="separator" />
    </DefaultLayout>
  );
};

export default EspaisDeNegoci;
