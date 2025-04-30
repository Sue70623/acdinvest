import React, { useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import PropertyCardType2 from "../../components/PropertyCardType2";
import HeroType2 from "../../components/HeroType2";
import { Helmet } from "react-helmet";
import "./zonesPages.css";

const Edelweiss: React.FC = () => {

   const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  
    // Tableau d'images pour la galerie
    const images = [
      "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg",
      "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg",
      "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg",
      "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg",
      "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg",
      "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg",
      "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg",
      "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477642/samples/upscale-face-1.jpg",
    ];
  
    const handleOpenGallery = () => {
      setIsGalleryOpen(true); // Ouvre la modale
    };
  
    const handleCloseGallery = () => {
      setIsGalleryOpen(false); // Ferme la modale
    };
  return (
    <DefaultLayout
      title="Edelweiss - ACD Invest"
      description="Découvrez les biens immobiliers Edelweiss, situés dans un cadre exceptionnel à Sant Julià de Lòria."
    >
      <Helmet>
        <title>Edelweiss - ACD Invest</title>
        <meta name="description" content="Découvrez les biens immobiliers Edelweiss, situés dans un cadre exceptionnel à Sant Julià de Lòria." />
      </Helmet>
      <div className="zone-page">
        <HeroType2
          backgroundImage="https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477630/samples/animals/reindeer.jpg"
          title="Edelweiss"
          subtitle="La Seu de Urgell,Espanya"
          alt="Edifici modern Edelweiss a la Seu d'Urgell amb pisos lluminosos i àtic dúplex de somni"
        />
        <p className="zone-gallery-link" onClick={handleOpenGallery}>
          📷 Veure totes les nostres fotos
        </p>

        <h1 className="page-title">Edelweiss</h1>
        {/* Exemple d'un bien */}
        {/* Description contextuelle */}
        <p className="zone-description">
          Un projecte arquitectònic elegant amb pisos lluminosos i àmplies
          vistes, proper a la natura i a la ciutat.
        </p>
        <PropertyCardType2
          title="Uns Espais"
          description="Un espai pensat per gaudir de la llum natural i el confort modern en un entorn privilegiat"
          images={[
            "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477641/samples/outdoor-woman.jpg",
            "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477641/samples/outdoor-woman.jpg",
            "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477641/samples/outdoor-woman.jpg",
            "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477630/samples/animals/cat.jpg",
            "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477630/samples/animals/cat.jpg",
            "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477630/samples/animals/cat.jpg",
          ]}
          buttonLabel="Ver Mas"
          link="/liste-des-biens/listEdelweiss"
        />
        <PropertyCardType2
          title="Serveis"
          description="Àtics dúplex, trasters, places d’aparcament, pisos de dues habitacions."
          images={[
            "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477641/samples/outdoor-woman.jpg",
            "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477641/samples/outdoor-woman.jpg",
            "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477641/samples/outdoor-woman.jpg",
            "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477630/samples/animals/cat.jpg",
            "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477630/samples/animals/cat.jpg",
            "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477630/samples/animals/cat.jpg",
          ]}
          buttonLabel="Ver Mas"
          link="/"
          reverse={true}
        />
        <PropertyCardType2
          title="Entorn"
          description="Entre muntanyes i ciutat, amb vistes espectaculars i una connexió fluïda amb l’exterior.
"
          images={[
            "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477641/samples/outdoor-woman.jpg",
            "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477641/samples/outdoor-woman.jpg",
            "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477641/samples/outdoor-woman.jpg",
            "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477630/samples/animals/cat.jpg",
            "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477630/samples/animals/cat.jpg",
            "https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477630/samples/animals/cat.jpg",
          ]}
          buttonLabel="Ver Mas"
          link="/"
        />
        <div className="zone-info-block">
          <div className="zone-distances">
            <p>Frontera espanyola: 10,7km</p>
            <p>Frontera fancesa: 48,9km</p>
            <p>Andorra la Vella: 20km</p>
          </div>
          {/* Lien vers Google Maps */}
          <iframe
            className="map-iframe"
            src="https://www.google.com/maps?q=42.5078,1.5211&output=embed"
            width="100%"
            height="300"
            style={{ border: "0", marginTop: "20px" }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Edelweiss;
