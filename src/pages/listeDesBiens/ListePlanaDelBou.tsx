import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import PropertyCardType3 from "../../components/PropertyCardType3";

const ListePlanaDelBou: React.FC = () => {
  return (
    <DefaultLayout>
      <h1>Biens disponibles – Plana del Bou</h1>
      {/* Liste de biens */}
      <PropertyCardType3
        title="Bien 1"
        subtitle="Plana del Bou"
        description="Premier bien de la zone"
        images={["https://via.placeholder.com/600"]}
        link="/zones/plana-del-bou"
      />
      <PropertyCardType3
        title="Bien 2"
        subtitle="Plana del Bou"
        description="Deuxième bien de la zone"
        images={["https://via.placeholder.com/600"]}
        link="/zones/plana-del-bou"
      />
    </DefaultLayout>
  );
};

export default ListePlanaDelBou;
