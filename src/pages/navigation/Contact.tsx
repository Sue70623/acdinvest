import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import HeroType2 from "../../components/HeroType2";
import ContactForm from "../../components/ContactForm";
import { Helmet } from "react-helmet";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <DefaultLayout
      title="Contactez-nous - ACD Invest"
      description="Contactez l'équipe d'ACD Invest pour toute question ou demande d'information. Nous sommes là pour vous aider."
    >
      <Helmet>
        <title>Contactez-nous - ACD Invest</title>
        <meta name="description" content="Contactez l'équipe d'ACD Invest pour toute question ou demande d'information. Nous sommes là pour vous aider." />
      </Helmet>

      <div className="contact-page">
        <HeroType2
          backgroundImage="https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477630/samples/animals/reindeer.jpg"
          title="Bienvenue"
          subtitle="Contacta'ns"
          alt="Poseu-vos en contacte amb l'equip d'ACD Invest"
        />
        <div className="contact-content">
          <h1 className="page-title">Contactez-nous</h1>
          <p>Nous sommes là pour vous aider !</p>
          <ContactForm />
        </div>
      </div>

      <div className="zone-info-block">
        <div className="zone-distances">
          <p>Frontera espanyola: km</p>
          <p>Frontera fancesa: km</p>
          <p>Andorra la Vella: km</p>
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
    </DefaultLayout>
  );
};

export default Contact;
