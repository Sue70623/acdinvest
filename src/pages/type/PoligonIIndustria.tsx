import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import PropertyCard from "../../components/PropertyCard";
import "./typePages.css";

const PoligonIIndustria = () => {
  return (
    <DefaultLayout>
      <h1 className="type-page-title">POLÍGON I INDUSTRIA</h1>
      <PropertyCard
        mainImage="https://placehold.co/400x400?text=Main"
        thumbnails={[
          "https://placehold.co/286x286?text=Mini1",
          "https://placehold.co/286x286?text=Mini2",
        ]}
        zoneName="Plana Del Bou"
        location="Zone du bien 1"
        description="Description temporaire 1"
        link="/Zones/NausHesei"
      />

      <hr className="separator" />
      
    </DefaultLayout>
  );
};

export default PoligonIIndustria;
