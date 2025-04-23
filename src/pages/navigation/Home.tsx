import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import Hero from "../../components/Hero";
import ElsNostresEspais from "../../components/ElsNostresEspais";

const Home: React.FC = () => {
  return (
    <DefaultLayout>
      <Hero />
      <div id="els-nostres-espais">
        <ElsNostresEspais />
      </div>
    </DefaultLayout>
  );
};

export default Home;
