import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import PropertyCardType2 from "../../components/PropertyCardType2";

const PlanaDelBou: React.FC = () => {
  return (
    <DefaultLayout>
      <h1>Plana del Bou</h1>
      {/* Exemple d'un bien */}
      <PropertyCardType2
        title="Nom du bien"
        subtitle="Plana del Bou"
        description="Description temporaire"
        images={["https://via.placeholder.com/600"]}
        link="/"
      />
    </DefaultLayout>
  );
};

export default PlanaDelBou;
