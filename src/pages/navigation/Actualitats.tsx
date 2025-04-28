import React, { useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import HeroType2 from "../../components/HeroType2";
import ArticleBlogCard from "../../components/ArticleBlogCard";
import Separator from "../../components/Separator";
import ArticleDePresseCard from "../../components/ArticleDepresseCard";

const Actualitats = () => {
  return (
    <DefaultLayout>
      <HeroType2
        backgroundImage="https://via.placeholder.com/1200x400"
        title="Plana del Bou"
        subtitle="Un lloc únic envoltat de natura"
      />
      <h1>Actualitats</h1>
      <h2>Novetats</h2>
      <div className="bloc-novetats">
        <ArticleBlogCard
          title="Article 1"
          excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          image="https://via.placeholder.com/300x200"
          onReadMore={() => alert("Lire plus sur l'article 1")}
        />
        <ArticleBlogCard
          title="Article 2"
          excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          image="https://via.placeholder.com/300x200"
          onReadMore={() => alert("Lire plus sur l'article 2")}
          reverse={true} // Inverser l'image
        />
      </div>
      <Separator />
      <h2>Premsa</h2>
      <div className="bloc-premsa">
        <ArticleDePresseCard
          title="Article de Presse 1"
          dateSource="Date - Source"
          image="https://via.placeholder.com/300x200"
          excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          link="https://example.com/article1"
          onClick={() => alert("Lire l'article de presse 1")}
        />
        <ArticleDePresseCard
          title="Article de Presse 2"
          dateSource="Date - Source"
          image="https://via.placeholder.com/300x200"
          excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          link="https://example.com/article2"
          onClick={() => alert("Lire l'article de presse 2")}
        />
        <ArticleDePresseCard
          title="Article de Presse 3"
          dateSource="Date - Source"
          image="https://via.placeholder.com/300x200"
          excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          link="https://example.com/article3"
          onClick={() => alert("Lire l'article de presse 3")}
        />
      </div>
    </DefaultLayout>
  );
};

export default Actualitats;
