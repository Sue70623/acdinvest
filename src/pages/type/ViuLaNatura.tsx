import React from "react";
import PropertyCard from "../../components/PropertyCard";
import DefaultLayout from "../../layouts/DefaultLayout";
import "./typePages.css";

const ViuLaNatura = () => {
  return (
    <DefaultLayout>
      <h1 className="type-page-title">VIU LA NATURA</h1>
      <PropertyCard
        mainImage="https://placehold.co/400x400?text=Main"
        thumbnails={[
          "https://placehold.co/286x286?text=Mini1",
          "https://placehold.co/286x286?text=Mini2",
        ]}
        zoneName="Plana Del Bou"
        location="Zone du bien 1"
        description="Description temporaire 1"
        link="/Zones/PlanaDelBou"
      />

      <hr className="separator" />
      <PropertyCard
        mainImage="https://placehold.co/400x400?text=Main"
        thumbnails={[
          "https://placehold.co/286x286?text=Mini1",
          "https://placehold.co/286x286?text=Mini2",
        ]}
        zoneName="Eres del Poble"
        location="Zone du bien 1"
        description="Description temporaire 1"
        link="/Zones/EresDelPoble"
      />
    </DefaultLayout>
  );
};

export default ViuLaNatura;
