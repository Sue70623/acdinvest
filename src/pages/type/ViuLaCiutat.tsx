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
          content="Explora els nostres immobles urbans i gaudeix de la vida a la ciutat amb ACD Invest."
        />
      </Helmet>

      <h1 className="type-page-title">VIU LA CIUTAT</h1>
      <p className="type-page-description">
        Explora els nostres espais urbans, perfectes per gaudir de la comoditat
        i els serveis que ofereix la vida a la ciutat.
      </p>
      <PropertyCard
        mainImage="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/home/el-noguer-b-edifici.webp"
        mainImageAlt="Image principale de Plana Del Bou"
        thumbnails={[
          "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/Noguer%20B/BulkResizePhotos.comNoguer2-2/menjador-vista-montanya-el-noguer-b.webp",
          "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/Noguer%20B/BulkResizePhotos.comNoguerBx1/entrada-amb-art-el-noguer-b-sant-julia-dde-loria.webp",
          "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/Noguer%20B/BulkResizePhotos.comNoguerBx1/espais-commun-el-noguer-b.webp",
          "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Naus%20Hesei/Noguer%20B/BulkResizePhotos.comNoguerBx1/el-noguer-b-a-prop-escola-francesa.webp",
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
        mainImage="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/home/escoles-sept-exterior-400-400.webp"
        mainImageAlt="Image principale de Plana Del Bou"
        thumbnails={[
          "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/home/escoles-sept-nit-cuitat-andorra2.webp",
          "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Escoles%20Sept/Escoles%20Sept/EscSept5-1/menjador-lluminos-i-espaios-escoles-sept-andorra.webp",
          "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Escoles%20Sept/Escoles%20Sept/EscSept5-1/habitacio-funcional-escoles-sept-sant-julia-de-loria.webp",
          "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Escoles%20Sept/Escoles%20Sept/escoles-sept-mural-sant-julia-de-loria.webp",
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
        mainImage="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament400-400.webp"
        mainImageAlt="Image principale de Plana Del Bou"
        thumbnails={[
          "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament.webp",
          "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament.webp",
          "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament.webp",
          "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament.webp",
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
        mainImage="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament400-400.webp"
        mainImageAlt="Image principale de Plana Del Bou"
        thumbnails={[
          "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament.webp",
          "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament.webp",
          "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament.webp",
          "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament.webp",
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
      <hr className="separator" />
    </DefaultLayout>
  );
};

export default ViuLaCiutat;
