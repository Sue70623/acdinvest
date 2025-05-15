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
          content="Descobreix els nostres immobles envoltats de natura i viu en un entorn tranquil i verd."
        />
      </Helmet>

      <h1 className="type-page-title">VIU LA NATURA</h1>
      <p className="type-page-description">
        Descobreix els nostres espais envoltats de natura, ideals per a aquells
        que busquen tranquil·litat i bellesa natural en el seu entorn quotidià.
      </p>
      <PropertyCard
        mainImage="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouservies/Resot-plana-del-bou-400-400.webp"
        mainImageAlt="Resort Plana Del Bou"
        thumbnails={[
          "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouservies/porta-resort-luxe.webp",
          "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/BulkResizePhotos.com%20(15)ESPAISCOMMUN/omba-i-piscina-plana-del-bou.webp",
          "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Airxartell/BulkResizePhotos.com%20(4)AIRXARTELL/airxartell-salo-plana-del-bou-andorra.webp",
          "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/BulkResizePhotos.com%20(13)AUTRE1/jardi-privado-plana-del-bou.webp",

          "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Cloc/BulkResizePhotos.com%20(14)CLOC1/Menjador-el-cloc-confort-i-calidesa-plana-del-bou.webp",
          "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouservies/entrada-resort-plana-del-bou.webp",
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
        mainImage="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Fontaneda-400-400.webp"
        mainImageAlt="Image principale de Plana Del Bou"
        thumbnails={[
          "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/EraDeCalBou/ERAdeCalBou/BulkResizePhotos.com%20(17)ERADECALBOU1/vista-montanya-fontaneda-andorra.webp",
          "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/EraDeCalBou/ERAdeCalBou/BulkResizePhotos.com%20(17)ERADECALBOU1/mezzanine-era-cal-bou-fontaneda-andorra.webp",
          "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/EraDeCalBou/ERAdeCalBou/BulkResizePhotos.com%20(18)ERADECALBOU2/entrada-antic-era-cal-bou-fontaneda.webp",
          "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/EraDeCalBou/ERAdeCalBou/BulkResizePhotos.com%20(18)ERADECALBOU2/lluminos-sal-vista-muntanya-andorra.webp",
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
      <hr className="separator" />
    </DefaultLayout>
  );
};

export default ViuLaNatura;
