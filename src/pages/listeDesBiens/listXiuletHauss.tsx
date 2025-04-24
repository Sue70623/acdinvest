import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import PropertyCardType3 from "../../components/PropertyCardType3";

const ListXiuletHauss: React.FC = () => {
  return (
    <DefaultLayout>
      <h1>Biens disponibles – Xiulet Hauss</h1>
      {/* Liste de biens */}
      <h2>Resort</h2>
      <PropertyCardType3
        title="Argüens"
        image="https://via.placeholder.com/600"
        caracteristics={["80m²", "2 Chambres", "2 Banos"]}
        amenities={["Meublé", "Cheminée", "Chauffage individuel"]}
        onViewGallery={() => console.log("Voir toutes les photos")}
        reverse={false}
      />
      <PropertyCardType3
        title="Argüens"
        image="https://via.placeholder.com/600"
        caracteristics={["80m²", "2 Chambres", "2 Banos"]}
        amenities={["Meublé", "Cheminée", "Chauffage individuel"]}
        onViewGallery={() => console.log("Voir toutes les photos")}
        reverse={true}
      />
      <PropertyCardType3
        title="Argüens"
        image="https://via.placeholder.com/600"
        caracteristics={["80m²", "2 Chambres", "2 Banos"]}
        amenities={["Meublé", "Cheminée", "Chauffage individuel"]}
        onViewGallery={() => console.log("Voir toutes les photos")}
        reverse={false}
      />
      <PropertyCardType3
        title="Argüens"
        image="https://via.placeholder.com/600"
        caracteristics={["80m²", "2 Chambres", "2 Banos"]}
        amenities={["Meublé", "Cheminée", "Chauffage individuel"]}
        onViewGallery={() => console.log("Voir toutes les photos")}
        reverse={true}
      />
      <h2>Beç</h2>
      <PropertyCardType3
        title="Argüens"
        image="https://via.placeholder.com/600"
        caracteristics={["80m²", "2 Chambres", "2 Banos"]}
        amenities={["Meublé", "Cheminée", "Chauffage individuel"]}
        onViewGallery={() => console.log("Voir toutes les photos")}
        reverse={false}
      />
      <PropertyCardType3
        title="Argüens"
        image="https://via.placeholder.com/600"
        caracteristics={["80m²", "2 Chambres", "2 Banos"]}
        amenities={["Meublé", "Cheminée", "Chauffage individuel"]}
        onViewGallery={() => console.log("Voir toutes les photos")}
        reverse={true}
      />
      <h2>Autre</h2>
      <PropertyCardType3
        title="Argüens"
        image="https://via.placeholder.com/600"
        caracteristics={["80m²", "2 Chambres", "2 Banos"]}
        amenities={["Meublé", "Cheminée", "Chauffage individuel"]}
        onViewGallery={() => console.log("Voir toutes les photos")}
        reverse={false}
      />
      <PropertyCardType3
        title="Argüens"
        image="https://via.placeholder.com/600"
        caracteristics={["80m²", "2 Chambres", "2 Banos"]}
        amenities={["Meublé", "Cheminée", "Chauffage individuel"]}
        onViewGallery={() => console.log("Voir toutes les photos")}
        reverse={true}
      />
      <PropertyCardType3
        title="Argüens"
        image="https://via.placeholder.com/600"
        caracteristics={["80m²", "2 Chambres", "2 Banos"]}
        amenities={["Meublé", "Cheminée", "Chauffage individuel"]}
        onViewGallery={() => console.log("Voir toutes les photos")}
        reverse={false}
      />
    </DefaultLayout>
  );
};

export default ListXiuletHauss;
