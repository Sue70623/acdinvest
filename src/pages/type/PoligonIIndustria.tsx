import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import PropertyCard from "../../components/PropertyCard";
import "./typePages.css";

const PoligonIIndustria = () => {
  return (
    <DefaultLayout
      title="Polígon I Industria"
      description="Explore the industrial zones and properties available."
    >
      <meta
        name="description"
        content="Descobreix les zones industrials i les propietats disponibles a Andorra."
      />
      <h1 className="type-page-title">POLÍGON I INDUSTRIA</h1>
      <p className="type-page-description">
        Descobreix les nostres zones industrials i espais dissenyats per a
        activitats empresarials i logístiques.
      </p>
      <PropertyCard
        mainImage="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament400-400.webp"
        mainImageAlt="Image principale de Plana Del Bou"
        thumbnails={[
          "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/NauHesei/BulkResizePhotos.comN5n57/NAU%20M5N57%20PORTA.webp",
          "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/NauHesei/BulkResizePhotos.comN5n57/NAU%20M5N57.webp",
        ]}
        thumbnailsAlt={[
          "Miniature 1 de Plana Del Bou",
          "Miniature 2 de Plana Del Bou",
        ]}
        zoneName="Naus Hesei 5-57"
        location="Sant Julià de Lòria, Andorra"
        description="Naus industrials a l’entrada d’Andorra."
        link="/Zones/NausHesei"
      />

      <hr className="separator" />
      <PropertyCard
        mainImage="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/NauHesei/BulkResizePhotos.comN5n58/Edifici-funcional-per-a-negocis-i-logistica.webp"
        mainImageAlt="Image principale de Plana Del Bou"
        thumbnails={[
          "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/NauHesei/BulkResizePhotos.comN5n58/Exterior-industrial-Naus5-58-Andorra.webp",
          "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/NauHesei/BulkResizePhotos.comN5n58/interior-industrial-Naus5-58-Andorra.webp",
          "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/NauHesei/BulkResizePhotos.comN5n58/Porta-Naus-N5-58-Sant-Julia-de-Loria.webp",
        ]}
        thumbnailsAlt={[
          "Miniature 1 de Plana Del Bou",
          "Miniature 2 de Plana Del Bou",
        ]}
        zoneName="Naus Hesei 5-58"
        location="Sant Julià de Lòria, Andorra"
        description="Naus industrials a l’entrada d’Andorra."
        link="/Zones/NausHesei"
      />
      <hr className="separator" />
      <PropertyCard
        mainImage="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/NauHesei/BulkResizePhotos.comNau41-42-3/Local-industrial-a-Andorra-Exterior.webp"
        mainImageAlt="Image principale de Plana Del Bou"
        thumbnails={[
          "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/NauHesei/BulkResizePhotos.comNau41-42-2/oficina-equipada-en-zona-d'activitats.webp",
          "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/NauHesei/BulkResizePhotos.comNau41-42-2/sala-polivalente-modular.webp",
          "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/NauHesei/BulkResizePhotos.comNau41-42-2/zone-logistica-o-de-produccio-industrial.webp",
          "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/NauHesei/BulkResizePhotos.comNau41-42-2/passadis-lluminos-de-distribucio-modular.webp",
        ]}
        thumbnailsAlt={[
          "Miniature 1 de Plana Del Bou",
          "Miniature 2 de Plana Del Bou",
        ]}
        zoneName="Naus Hesei 4 41-42"
        location="Sant Julià de Lòria, Andorra"
        description="Naus industrials a l’entrada d’Andorra."
        link="/Zones/NausHesei"
      />
      <hr className="separator" />
    </DefaultLayout>
  );
};

export default PoligonIIndustria;
