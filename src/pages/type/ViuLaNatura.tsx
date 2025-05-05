import React from "react";
import PropertyCard from "../../components/PropertyCard";
import DefaultLayout from "../../layouts/DefaultLayout";
import { Helmet } from "react-helmet";
import "./typePages.css";

const ViuLaNatura = () => {
  return (
    <DefaultLayout
      title="Viu La Natura - ACD Invest"
      description="Découvrez nos biens immobiliers entourés de nature. Vivez dans un cadre paisible et verdoyant."
    >
      <Helmet>
        <title>Viu La Natura - ACD Invest</title>
        <meta
          name="description"
          content="Découvrez nos biens immobiliers entourés de nature. Vivez dans un cadre paisible et verdoyant."
        />
      </Helmet>

      <h1 className="type-page-title">VIU LA NATURA</h1>
      <PropertyCard
        mainImage="https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477641/samples/look-up.jpg"
        mainImageAlt="Resort Plana Del Bou"
        thumbnails={[
          "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg",
          "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg",
          "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg",
          "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg",
        ]}
        thumbnailsAlt={[
          "Miniature 1 de Plana Del Bou",
          "Miniature 2 de Plana Del Bou",
        ]}
        zoneName="Plana Del Bou"
        location="Fontaneda, Andorra"
        description="Un resort residencial envoltat de natura a Fontaneda.
"
        link="/Zones/PlanaDelBou"
      />

      <hr className="separator" />
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
        zoneName="Eres del Poble"
        location="Fontanedana,Andorra"
        description="Cases rurals al cor del poble de Fontaneda."
        link="/Zones/EresDelPoble"
      />
    </DefaultLayout>
  );
};

export default ViuLaNatura;
