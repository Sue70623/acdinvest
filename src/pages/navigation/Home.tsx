import { Helmet } from "react-helmet";
import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import Hero from "../../components/Hero";
import ElsNostresEspais from "../../components/ElsNostresEspais";

const Home: React.FC = () => {
  return (
    <DefaultLayout
      title="Accueil - ACD Invest"
      description="Bienvenue sur le site d'ACD Invest. Découvrez nos espaces uniques et nos biens immobiliers exceptionnels."
    >
      <Helmet>
        <title>Accueil - ACD Invest</title>
        <meta name="description" content="Bienvenue sur le site d'ACD Invest. Découvrez nos espaces uniques et nos biens immobiliers exceptionnels." />
      </Helmet>
      <Hero />
      <div id="els-nostres-espais">
        <ElsNostresEspais />
      </div>
    </DefaultLayout>
  );
};

export default Home;
