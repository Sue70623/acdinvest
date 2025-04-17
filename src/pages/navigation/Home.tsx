import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import Hero from "../../components/Hero";
import ElsNostresEspais from "../../components/ElsNostresEspais";

const Home: React.FC = () => {
  return (
    <DefaultLayout>
      <Hero />
      <ElsNostresEspais />
      <button className="tots-els-espais-button">Tots els espais</button>
    </DefaultLayout>
  );
};

export default Home;
