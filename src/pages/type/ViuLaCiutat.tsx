import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import PropertyCard from "../../components/PropertyCard";
import "./typePages.css";

const ViuLaCiutat = () => {
  return (
    <DefaultLayout>
      <h1 className="type-page-title">TOT CIUTAT</h1>
      <PropertyCard
        mainImage="https://placehold.co/400x400?text=Main"
        thumbnails={[
          "https://placehold.co/286x286?text=Mini1",
          "https://placehold.co/286x286?text=Mini2",
        ]}
        zoneName="El Noger B"
        location="Zone du bien 1"
        description="Description temporaire 1"
        link="/Zones/ElNogerB"
      />

      <hr className="separator" />
      <PropertyCard
        mainImage="https://placehold.co/400x400?text=Main"
        thumbnails={[
          "https://placehold.co/286x286?text=Mini1",
          "https://placehold.co/286x286?text=Mini2",
        ]}
        zoneName="Escoles Sept"
        location="Zone du bien 1"
        description="Description temporaire 1"
        link="/Zones/Escoles Sept"
      />

      <hr className="separator" />
      <PropertyCard
        mainImage="https://placehold.co/400x400?text=Main"
        thumbnails={[
          "https://placehold.co/286x286?text=Mini1",
          "https://placehold.co/286x286?text=Mini2",
        ]}
        zoneName="Xiulet Hauss"
        location="Zone du bien 1"
        description="Description temporaire 1"
        link="/Zones/Xiulet Hauss"
      />

      <hr className="separator" />
      <PropertyCard
        mainImage="https://placehold.co/400x400?text=Main"
        thumbnails={[
          "https://placehold.co/286x286?text=Mini1",
          "https://placehold.co/286x286?text=Mini2",
        ]}
        zoneName="La Freixera II"
        location="Zone du bien 1"
        description="Description temporaire 1"
        link="/Zones/La Freixera II"
      />

      <hr className="separator" />
      <PropertyCard
        mainImage="https://placehold.co/400x400?text=Main"
        thumbnails={[
          "https://placehold.co/286x286?text=Mini1",
          "https://placehold.co/286x286?text=Mini2",
        ]}
        zoneName="Edelweiss"
        location="Zone du bien 1"
        description="Description temporaire 1"
        link="/Zones/Edelweiss"
      />
    </DefaultLayout>
  );
};

export default ViuLaCiutat;
