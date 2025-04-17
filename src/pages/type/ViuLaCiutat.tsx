import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import PropertyCardType2 from "../../components/PropertyCardType2";

const ViuLaCiutat = () => {
  return (
    <DefaultLayout>
      <h1>TOT CIUTAT</h1>
      <PropertyCardType2
        title="Nom du bien 1"
        subtitle="Zone du bien 1"
        description="Description temporaire 1"
        images={[
          "https://placehold.co/400x400?text=Main",
          "https://placehold.co/286x286?text=Mini1",
          "https://placehold.co/286x286?text=Mini2",
        ]}
        link="/#"
      />
      <hr className="separator" />
      <PropertyCardType2
        title="Nom du bien 2"
        subtitle="Zone du bien 2"
        description="Description temporaire 2"
        images={[
          "https://placehold.co/400x400?text=Main",
          "https://placehold.co/286x286?text=Mini1",
          "https://placehold.co/286x286?text=Mini2",
        ]}
        link="/#"
      />
    </DefaultLayout>
  );
};

export default ViuLaCiutat;
