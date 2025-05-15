import React, { useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import HeroType2 from "../../components/HeroType2";
import QuiSomSection from "../../components/QuiSomSection";

const QuiSom = () => {
  return (
    <DefaultLayout
      title="Qui Som"
      description="Descobriu més sobre ACD Invest i la nostra missió."
    >
      <HeroType2
        backgroundImage="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament.webp"
        title="Plana del Bou"
        subtitle="Un lloc únic envoltat de natura"
        alt="Descobriu la història i la missió d'ACD Invest"
      />
      <div style={{ marginTop: "2rem" }}>
        <QuiSomSection
          title="Qui Som"
          introduction="A ACD Invest, som especialistes en la gestió integral de patrimoni immobiliari a Andorra."
          sections={[
            {
              title: "La nostra missió",
              image:
                "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/home/Passeig-per-la-historia.webp",
              description:
                "A ACD Invest, la nostra missió és oferir habitatges de qualitat, adaptats a les necessitats actuals, integrats en l'entorn natural i urbà, amb un ferm compromís per la sostenibilitat i el confort.Cada projecte que desenvolupem busca anar més enllà d’un simple habitatge: creem espais únics, adaptats a les necessitats reals dels nostres clients i integrats amb el seu entorn.Per això, disposem d'un equip propi que dissenya i executa cada fase dels projectes, assegurant la màxima qualitat i exclusivitat en tots els detalls.Amb més de 25 anys d’experiència, oferim un servei complet d’assessorament en inversions, gestió de lloguers, compravenda, reformes i promoció de nous projectes immobiliaris.",
            },
            {
              title: "El nostre equip",
              image:
                "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Fontaneda-400-400.webp",
              description:
                "A ACD Invest, comptem amb un equip multidisciplinari, apassionat pel disseny, la sostenibilitat i la innovació. La nostra experiència combinada en inversions, arquitectura i gestió immobiliària ens permet oferir solucions a mida per als nostres clients. Cada projecte es duu a terme amb un enfocament col·laboratiu i rigorós, assegurant que cada detall compleixi els estàndards més alts de qualitat i funcionalitat.",
            },
            {
              title: "Els nostres valors",
              image:
                "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/home/Arrels-i-Historia-local.webp",
              description:
                "Els nostres valors són el pilar de tot el que fem. Ens regim pel compromís amb la qualitat, la transparència en la gestió i el respecte pel nostre entorn. Apostem per un model d'empresa responsable, que escolta les necessitats reals de les persones i promou un desenvolupament sostenible. Cada projecte reflecteix la nostra voluntat de construir un futur millor, equilibrat entre benestar, eficiència i preservació del patrimoni.",
            },
          ]}
        />
      </div>
    </DefaultLayout>
  );
};

export default QuiSom;
