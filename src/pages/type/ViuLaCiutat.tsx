import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import PropertyCard from "../../components/PropertyCard";
import { Helmet } from "react-helmet";
import "./typePages.css";

const ViuLaCiutat = () => {
  return (
    <DefaultLayout
      title="Viu La Ciutat - ACD Invest"
      description="Explorez nos biens immobiliers en ville. Profitez de la vie urbaine avec ACD Invest."
    >
      <Helmet>
        <title>Viu La Ciutat - ACD Invest</title>
        <meta
          name="description"
          content="Explorez nos biens immobiliers en ville. Profitez de la vie urbaine avec ACD Invest."
        />
      </Helmet>

      <h1 className="type-page-title">VIU LA CIUTAT</h1>
      <PropertyCard
        mainImage="https://placehold.co/400x400?text=Main"
        mainImageAlt="Image principale de Plana Del Bou"
        thumbnails={[
          "https://placehold.co/286x286?text=Mini1",
          "https://placehold.co/286x286?text=Mini2",
        ]}
        thumbnailsAlt={[
          "Miniature 1 de Plana Del Bou",
          "Miniature 2 de Plana Del Bou",
        ]}
        zoneName="El Noguer B"
        location="Sant Julià de Lòria, Andorra"
        description="Edifici cèntric a Sant Julià de Lòria, proper a tots els serveis."
        link="/Zones/ElNoguerB"
      />

      <hr className="separator" />
      <PropertyCard
        mainImage="https://placehold.co/400x400?text=Main"
        mainImageAlt="Image principale de Plana Del Bou"
        thumbnails={[
          "https://placehold.co/286x286?text=Mini1",
          "https://placehold.co/286x286?text=Mini2",
        ]}
        thumbnailsAlt={[
          "Miniature 1 de Plana Del Bou",
          "Miniature 2 de Plana Del Bou",
        ]}
        zoneName="Escoles Sept"
        location="Sant Julià de Lòria, Andorra"
        description="Edifici reformat al centre de Sant Julià de Lòria."
        link="/Zones/EscolesSept"
      />

      <hr className="separator" />
      <PropertyCard
        mainImage="https://placehold.co/400x400?text=Main"
        mainImageAlt="Image principale de Plana Del Bou"
        thumbnails={[
          "https://placehold.co/286x286?text=Mini1",
          "https://placehold.co/286x286?text=Mini2",
        ]}
        thumbnailsAlt={[
          "Miniature 1 de Plana Del Bou",
          "Miniature 2 de Plana Del Bou",
        ]}
        zoneName="Xiulet Hauss"
        location="Sant Julià de Lòria, Andorra"
        description="Habitatge al barri antic de Sant Julià amb història i caràcter."
        link="/Zones/XiuletHauss"
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
        zoneName="La Freixera II"
        location="Sant Julià de Lòria, Andorra"
        description="Edifici d’obra nova modern i eficient a Les Arades."
        link="/Zones/LaFreixeraII"
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
        zoneName="Edelweiss"
        location="Sant Julià de Lòria, Andorra"
        description="Edifici de disseny modern situat a la Seu d’Urgell."
        link="/Zones/Edelweiss"
      />
    </DefaultLayout>
  );
};

export default ViuLaCiutat;
