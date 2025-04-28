import React, { useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import HeroType2 from "../../components/HeroType2";
import QuiSomSection from "../../components/QuiSomSection";

const QuiSom = () => {
  return (
    <DefaultLayout>
      <HeroType2
        backgroundImage="https://via.placeholder.com/1200x400"
        title="Plana del Bou"
        subtitle="Un lloc únic envoltat de natura"
      />
      <h1>Qui Som?</h1>
      <QuiSomSection
        title="Qui Som"
        introduction="Som un grup d'inversors apassionats per la natura i la sostenibilitat."
        sections={[
          {
            title: "La nostra missió",
            image: "https://via.placeholder.com/400x300",
            description: "Invertim en projectes que respecten el medi ambient.",
          },
          {
            title: "El nostre equip",
            image: "https://via.placeholder.com/400x300",
            description:
              "Un equip divers amb experiència en inversions sostenibles.",
          },
          {
            title: "Els nostres valors",
            image: "https://via.placeholder.com/400x300",
            description: "Compromís, transparència i sostenibilitat.",
          },
        ]}
      />
    </DefaultLayout>
  );
};

export default QuiSom;
