import React, { useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import HeroType2 from "../../components/HeroType2";
import ArticleBlogCard from "../../components/ArticleBlogCard";
import Separator from "../../components/Separator";
import ArticleDePresseCard from "../../components/ArticleDepresseCard";
import ArticleModal from "../../components/ArticleModal";
import { Helmet } from "react-helmet";

const Actualitats = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    image: "",
    content: "",
  });

  const openModal = (article: {
    title: string;
    image: string;
    content: string;
    videoUrl?: string; // Ajout de la propriété videoUrl
  }) => {
    setModalContent(article);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent({ title: "", image: "", content: "" });
  };
  return (
    <DefaultLayout
      title="Actualités - ACD Invest"
      description="Restez informé des dernières actualités et événements d'ACD Invest."
    >
      <Helmet>
        <title>Actualités - ACD Invest</title>
        <meta name="description" content="Restez informé des dernières actualités et événements d'ACD Invest." />
      </Helmet>
      <HeroType2
        backgroundImage="https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477630/samples/animals/reindeer.jpg"
        title="Plana del Bou"
        subtitle="Un lloc únic envoltat de natura"
        alt="Notícies recents i esdeveniments d'ACD Invest"
      />
      <h1 className="page-title">Actualitats</h1>
      <h2>Novetats</h2>
      <div className="bloc-novetats">
        <ArticleBlogCard
          title="Nous xalets a la Plana del Bou de Fontaneda"
          excerpt="Aquest és un projecte de quatre xalets singulars. Les
vivendes són unifamiliars i es trobaran en un entorn natural
privilegiat, amb privacitat i amplitut per a disfrutar de l'espai.
"
          image="https://via.placeholder.com/300x200"
          videoUrl="https://youtu.be/H1xIK7UGc68?si=IdswAgxirk7XpHMD"
          onReadMore={() =>
            openModal({
              title: "Nous xalets a la Plana del Bou de Fontaneda",
              image: "https://via.placeholder.com/300x200",
              videoUrl: "https://youtu.be/H1xIK7UGc68?si=IdswAgxirk7XpHMD",
              content:
                "Aquest és un projecte de quatre xalets singulars. Les vivendes són unifamiliars i es trobaran en un entorn natural privilegiat, amb privacitat i amplitut per a disfrutar de l'espai. Les cases, es regiran per un sistema de passive house, de manera que intervinguin en la menor manera possible amb l'entorn, respectant la natura. Així doncs, també s’autoabastiran d’energia solar autoproduïda. Entre algunes de les qualitats dels habitatges, destaquen la seva innovadora estructura de fusta i el terra radiant a l’interior per a un màxim confort.",
            })
          }
        />
        <ArticleBlogCard
          title="Article 2"
          excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          image="https://via.placeholder.com/300x200"
          onReadMore={() =>
            openModal({
              title: "Article 2",
              image: "https://via.placeholder.com/300x200",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            })
          }
          reverse={true} // Inverser l'image
        />
      </div>
      <Separator />
      <h2>Premsa</h2>
      <div className="bloc-premsa">
        <ArticleDePresseCard
          title="Inaugurat el mural de Casa Colltort"
          dateSource="21/06/2023 - DIARIANDORRA.AD"
          image="https://imagenes.diariandorra.ad/files/image_media_main_desktop/uploads/2023/12/21/6584464fe6635.jpeg"
          excerpt="Sant Julià de Lòria va inaugurar ahir el vuitè mural de la parròquia, una creació de l’artista Samantha Bosque amb escenes de la vida de fa 100 anys"
          link="https://www.diariandorra.ad/parroquies/230621/inaugurat-mural-casa-colltort_127688.html"
          onClick={() => alert("Lire l'article de presse 1")}
        />
        <ArticleDePresseCard
          title="Mural amb escenes de fa 100 anys a Sant Julia"
          dateSource="20/06/2023 - DIARIANDORRA.AD"
          image="https://imagenes.diariandorra.ad/files/image_media_main_desktop/uploads/2023/12/21/658446193b9ea.jpeg"
          excerpt="Samantha Bosque ha decorat la façana de l’edifici Xiulet Hauss"
          link="https://www.diariandorra.ad/parroquies/230620/mural-amb-escenes-100-anys-sant-julia_127668.html"
          onClick={() => alert("Lire l'article de presse 2")}
        />
        <ArticleDePresseCard
          title="Inaugurat el vuitè mural de Sant Julià de Lòria"
          dateSource="20/06/2023 - ALTAVEU.COM"
          image="https://www.altaveu.com/uploads/s1/14/06/36/4/fzeuycyaiaqr511_10_1000x430.jpeg"
          excerpt="El treball de Sam Bosque a la façana d’un edifici de nova construcció al carrer mossèn Enric Marfany vol ser un homenatge als lauredians."
          link="https://www.altaveu.com/actualitat/parroquies/inaugurat-vuite-mural-sant-julia-loria_49251_102.html"
          onClick={() => alert("Lire l'article de presse 3")}
        />
      </div>

      {/* Modale */}
      <ArticleModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalContent.title}
        imageUrl={modalContent.image}
        content={modalContent.content}
      />
    </DefaultLayout>
  );
};

export default Actualitats;
